// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#metadata DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata;
  /**
  * CompositionRevisionSpec specifies the desired state of the composition revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#spec DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec;
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#annotations DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#labels DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadataToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef {
  /**
  * APIVersion of the type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#api_version DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#kind DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRefToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRefToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
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
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString {
  /**
  * Format the input using a Go format string. See https://golang.org/pkg/fmt/ for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fmt DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fmt}
  */
  readonly fmt: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineStringToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fmt: cdktf.stringToTerraform(struct!.fmt),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineStringToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fmt: {
      value: cdktf.stringToHclTerraform(struct!.fmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmt = this._fmt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fmt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fmt = value.fmt;
    }
  }

  // fmt - computed: false, optional: false, required: true
  private _fmt?: string; 
  public get fmt() {
    return this.getStringAttribute('fmt');
  }
  public set fmt(value: string) {
    this._fmt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtInput() {
    return this._fmt;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables {
  /**
  * FromFieldPath is the path of the field on the source whose value is to be used as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_field_path}
  */
  readonly fromFieldPath: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field_path: cdktf.stringToTerraform(struct!.fromFieldPath),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fromFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFieldPath = this._fromFieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromFieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromFieldPath = value.fromFieldPath;
    }
  }

  // from_field_path - computed: false, optional: false, required: true
  private _fromFieldPath?: string; 
  public get fromFieldPath() {
    return this.getStringAttribute('from_field_path');
  }
  public set fromFieldPath(value: string) {
    this._fromFieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldPathInput() {
    return this._fromFieldPath;
  }
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine {
  /**
  * Strategy defines the strategy to use to combine the input variable values. Currently only string is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#strategy DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#strategy}
  */
  readonly strategy: string;
  /**
  * String declares that input variables should be combined into a single string, using the relevant settings for formatting purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#string DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#string}
  */
  readonly string?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString;
  /**
  * Variables are the list of variables whose values will be retrieved and combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#variables DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#variables}
  */
  readonly variables: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables[] | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    string: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineStringToTerraform(struct!.string),
    variables: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesToTerraform, false)(struct!.variables),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString",
    },
    variables: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strategy = undefined;
      this._string.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strategy = value.strategy;
      this._string.internalValue = value.string;
      this._variables.internalValue = value.variables;
    }
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // string - computed: false, optional: true, required: false
  private _string = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineString) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // variables - computed: false, optional: false, required: true
  private _variables = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions {
  /**
  * Specifies that already existing elements in a merged slice should be preserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#append_slice DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#append_slice}
  */
  readonly appendSlice?: boolean | cdktf.IResolvable;
  /**
  * Specifies that already existing values in a merged map should be preserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#keep_map_values DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#keep_map_values}
  */
  readonly keepMapValues?: boolean | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptionsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_slice: cdktf.booleanToTerraform(struct!.appendSlice),
    keep_map_values: cdktf.booleanToTerraform(struct!.keepMapValues),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptionsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_slice: {
      value: cdktf.booleanToHclTerraform(struct!.appendSlice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_map_values: {
      value: cdktf.booleanToHclTerraform(struct!.keepMapValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendSlice !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendSlice = this._appendSlice;
    }
    if (this._keepMapValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepMapValues = this._keepMapValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendSlice = undefined;
      this._keepMapValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendSlice = value.appendSlice;
      this._keepMapValues = value.keepMapValues;
    }
  }

  // append_slice - computed: false, optional: true, required: false
  private _appendSlice?: boolean | cdktf.IResolvable; 
  public get appendSlice() {
    return this.getBooleanAttribute('append_slice');
  }
  public set appendSlice(value: boolean | cdktf.IResolvable) {
    this._appendSlice = value;
  }
  public resetAppendSlice() {
    this._appendSlice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendSliceInput() {
    return this._appendSlice;
  }

  // keep_map_values - computed: false, optional: true, required: false
  private _keepMapValues?: boolean | cdktf.IResolvable; 
  public get keepMapValues() {
    return this.getBooleanAttribute('keep_map_values');
  }
  public set keepMapValues(value: boolean | cdktf.IResolvable) {
    this._keepMapValues = value;
  }
  public resetKeepMapValues() {
    this._keepMapValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepMapValuesInput() {
    return this._keepMapValues;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy {
  /**
  * FromFieldPath specifies how to patch from a field path. The default is 'Optional', which means the patch will be a no-op if the specified fromFieldPath does not exist. Use 'Required' if the patch should fail if the specified path does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_field_path}
  */
  readonly fromFieldPath?: string;
  /**
  * MergeOptions Specifies merge options on a field path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#merge_options DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#merge_options}
  */
  readonly mergeOptions?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field_path: cdktf.stringToTerraform(struct!.fromFieldPath),
    merge_options: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptionsToTerraform(struct!.mergeOptions),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fromFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_options: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptionsToHclTerraform(struct!.mergeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFieldPath = this._fromFieldPath;
    }
    if (this._mergeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeOptions = this._mergeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromFieldPath = undefined;
      this._mergeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromFieldPath = value.fromFieldPath;
      this._mergeOptions.internalValue = value.mergeOptions;
    }
  }

  // from_field_path - computed: false, optional: true, required: false
  private _fromFieldPath?: string; 
  public get fromFieldPath() {
    return this.getStringAttribute('from_field_path');
  }
  public set fromFieldPath(value: string) {
    this._fromFieldPath = value;
  }
  public resetFromFieldPath() {
    this._fromFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldPathInput() {
    return this._fromFieldPath;
  }

  // merge_options - computed: false, optional: true, required: false
  private _mergeOptions = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptionsOutputReference(this, "merge_options");
  public get mergeOptions() {
    return this._mergeOptions;
  }
  public putMergeOptions(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyMergeOptions) {
    this._mergeOptions.internalValue = value;
  }
  public resetMergeOptions() {
    this._mergeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeOptionsInput() {
    return this._mergeOptions.internalValue;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert {
  /**
  * The expected input format. * 'quantity' - parses the input as a K8s ['resource.Quantity'](https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity). Only used during 'string -> float64' conversions. * 'json' - parses the input as a JSON string. Only used during 'string -> object' or 'string -> list' conversions. If this property is null, the default conversion is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#format DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * ToType is the type of the output of this transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#to_type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#to_type}
  */
  readonly toType: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvertToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    to_type: cdktf.stringToTerraform(struct!.toType),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvertToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_type: {
      value: cdktf.stringToHclTerraform(struct!.toType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._toType !== undefined) {
      hasAnyValues = true;
      internalValueResult.toType = this._toType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._toType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._toType = value.toType;
    }
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

  // to_type - computed: false, optional: false, required: true
  private _toType?: string; 
  public get toType() {
    return this.getStringAttribute('to_type');
  }
  public set toType(value: string) {
    this._toType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toTypeInput() {
    return this._toType;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns {
  /**
  * Literal exactly matches the input string (case sensitive). Is required if 'type' is 'literal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#literal DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#literal}
  */
  readonly literal?: string;
  /**
  * Regexp to match against the input string. Is required if 'type' is 'regexp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#regexp DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#regexp}
  */
  readonly regexp?: string;
  /**
  * The value that is used as result of the transform if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#result DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#result}
  */
  readonly result: { [key: string]: string };
  /**
  * Type specifies how the pattern matches the input. * 'literal' - the pattern value has to exactly match (case sensitive) the input string. This is the default. * 'regexp' - the pattern treated as a regular expression against which the input string is tested. Crossplane will throw an error if the key is not a valid regexp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    result: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.result),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.result),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._regexp = undefined;
      this._result = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._regexp = value.regexp;
      this._result = value.result;
      this._type = value.type;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // result - computed: false, optional: false, required: true
  private _result?: { [key: string]: string }; 
  public get result() {
    return this.getStringMapAttribute('result');
  }
  public set result(value: { [key: string]: string }) {
    this._result = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch {
  /**
  * Determines to what value the transform should fallback if no pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fallback_to DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fallback_to}
  */
  readonly fallbackTo?: string;
  /**
  * The fallback value that should be returned by the transform if now pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fallback_value DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fallback_value}
  */
  readonly fallbackValue?: { [key: string]: string };
  /**
  * The patterns that should be tested against the input string. Patterns are tested in order. The value of the first match is used as result of this transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#patterns DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#patterns}
  */
  readonly patterns?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns[] | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_to: cdktf.stringToTerraform(struct!.fallbackTo),
    fallback_value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fallbackValue),
    patterns: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsToTerraform, false)(struct!.patterns),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_to: {
      value: cdktf.stringToHclTerraform(struct!.fallbackTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fallbackValue),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    patterns: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsToHclTerraform, false)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackTo = this._fallbackTo;
    }
    if (this._fallbackValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackValue = this._fallbackValue;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackTo = undefined;
      this._fallbackValue = undefined;
      this._patterns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackTo = value.fallbackTo;
      this._fallbackValue = value.fallbackValue;
      this._patterns.internalValue = value.patterns;
    }
  }

  // fallback_to - computed: false, optional: true, required: false
  private _fallbackTo?: string; 
  public get fallbackTo() {
    return this.getStringAttribute('fallback_to');
  }
  public set fallbackTo(value: string) {
    this._fallbackTo = value;
  }
  public resetFallbackTo() {
    this._fallbackTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToInput() {
    return this._fallbackTo;
  }

  // fallback_value - computed: false, optional: true, required: false
  private _fallbackValue?: { [key: string]: string }; 
  public get fallbackValue() {
    return this.getStringMapAttribute('fallback_value');
  }
  public set fallbackValue(value: { [key: string]: string }) {
    this._fallbackValue = value;
  }
  public resetFallbackValue() {
    this._fallbackValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackValueInput() {
    return this._fallbackValue;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath {
  /**
  * ClampMax makes sure that the value is not bigger than the given value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#clamp_max DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#clamp_max}
  */
  readonly clampMax?: number;
  /**
  * ClampMin makes sure that the value is not smaller than the given value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#clamp_min DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#clamp_min}
  */
  readonly clampMin?: number;
  /**
  * Multiply the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#multiply DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#multiply}
  */
  readonly multiply?: number;
  /**
  * Type of the math transform to be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMathToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clamp_max: cdktf.numberToTerraform(struct!.clampMax),
    clamp_min: cdktf.numberToTerraform(struct!.clampMin),
    multiply: cdktf.numberToTerraform(struct!.multiply),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMathToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clamp_max: {
      value: cdktf.numberToHclTerraform(struct!.clampMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clamp_min: {
      value: cdktf.numberToHclTerraform(struct!.clampMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiply: {
      value: cdktf.numberToHclTerraform(struct!.multiply),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clampMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clampMax = this._clampMax;
    }
    if (this._clampMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.clampMin = this._clampMin;
    }
    if (this._multiply !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiply = this._multiply;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clampMax = undefined;
      this._clampMin = undefined;
      this._multiply = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clampMax = value.clampMax;
      this._clampMin = value.clampMin;
      this._multiply = value.multiply;
      this._type = value.type;
    }
  }

  // clamp_max - computed: false, optional: true, required: false
  private _clampMax?: number; 
  public get clampMax() {
    return this.getNumberAttribute('clamp_max');
  }
  public set clampMax(value: number) {
    this._clampMax = value;
  }
  public resetClampMax() {
    this._clampMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clampMaxInput() {
    return this._clampMax;
  }

  // clamp_min - computed: false, optional: true, required: false
  private _clampMin?: number; 
  public get clampMin() {
    return this.getNumberAttribute('clamp_min');
  }
  public set clampMin(value: number) {
    this._clampMin = value;
  }
  public resetClampMin() {
    this._clampMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clampMinInput() {
    return this._clampMin;
  }

  // multiply - computed: false, optional: true, required: false
  private _multiply?: number; 
  public get multiply() {
    return this.getNumberAttribute('multiply');
  }
  public set multiply(value: number) {
    this._multiply = value;
  }
  public resetMultiply() {
    this._multiply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplyInput() {
    return this._multiply;
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin {
  /**
  * Separator defines the character that should separate the values from each other in the joined string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#separator DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#separator}
  */
  readonly separator: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoinToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoinToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._separator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._separator = value.separator;
    }
  }

  // separator - computed: false, optional: false, required: true
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp {
  /**
  * Group number to match. 0 (the default) matches the entire expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#group DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#group}
  */
  readonly group?: number;
  /**
  * Match string. May optionally include submatches, aka capture groups. See https://pkg.go.dev/regexp/ for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#match DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#match}
  */
  readonly match: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexpToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.numberToTerraform(struct!.group),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexpToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._match = value.match;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString {
  /**
  * Optional conversion method to be specified. 'ToUpper' and 'ToLower' change the letter case of the input string. 'ToBase64' and 'FromBase64' perform a base64 conversion based on the input string. 'ToJson' converts any input value into its raw JSON representation. 'ToSha1', 'ToSha256' and 'ToSha512' generate a hash value based on the input converted to JSON. 'ToAdler32' generate a addler32 hash based on the input string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#convert DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#convert}
  */
  readonly convert?: string;
  /**
  * Format the input using a Go format string. See https://golang.org/pkg/fmt/ for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fmt DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fmt}
  */
  readonly fmt?: string;
  /**
  * Join defines parameters to join a slice of values to a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#join DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#join}
  */
  readonly join?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin;
  /**
  * Extract a match from the input using a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#regexp DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp;
  /**
  * Trim the prefix or suffix from the input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#trim DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#trim}
  */
  readonly trim?: string;
  /**
  * Type of the string transform to be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert: cdktf.stringToTerraform(struct!.convert),
    fmt: cdktf.stringToTerraform(struct!.fmt),
    join: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoinToTerraform(struct!.join),
    regexp: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexpToTerraform(struct!.regexp),
    trim: cdktf.stringToTerraform(struct!.trim),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    convert: {
      value: cdktf.stringToHclTerraform(struct!.convert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmt: {
      value: cdktf.stringToHclTerraform(struct!.fmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoinToHclTerraform(struct!.join),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin",
    },
    regexp: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp",
    },
    trim: {
      value: cdktf.stringToHclTerraform(struct!.trim),
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convert !== undefined) {
      hasAnyValues = true;
      internalValueResult.convert = this._convert;
    }
    if (this._fmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmt = this._fmt;
    }
    if (this._join?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.join = this._join?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    if (this._trim !== undefined) {
      hasAnyValues = true;
      internalValueResult.trim = this._trim;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._convert = undefined;
      this._fmt = undefined;
      this._join.internalValue = undefined;
      this._regexp.internalValue = undefined;
      this._trim = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._convert = value.convert;
      this._fmt = value.fmt;
      this._join.internalValue = value.join;
      this._regexp.internalValue = value.regexp;
      this._trim = value.trim;
      this._type = value.type;
    }
  }

  // convert - computed: false, optional: true, required: false
  private _convert?: string; 
  public get convert() {
    return this.getStringAttribute('convert');
  }
  public set convert(value: string) {
    this._convert = value;
  }
  public resetConvert() {
    this._convert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertInput() {
    return this._convert;
  }

  // fmt - computed: false, optional: true, required: false
  private _fmt?: string; 
  public get fmt() {
    return this.getStringAttribute('fmt');
  }
  public set fmt(value: string) {
    this._fmt = value;
  }
  public resetFmt() {
    this._fmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtInput() {
    return this._fmt;
  }

  // join - computed: false, optional: true, required: false
  private _join = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoinOutputReference(this, "join");
  public get join() {
    return this._join;
  }
  public putJoin(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringJoin) {
    this._join.internalValue = value;
  }
  public resetJoin() {
    this._join.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinInput() {
    return this._join.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringRegexp) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }

  // trim - computed: false, optional: true, required: false
  private _trim?: string; 
  public get trim() {
    return this.getStringAttribute('trim');
  }
  public set trim(value: string) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms {
  /**
  * Convert is used to cast the input into the given output type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#convert DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#convert}
  */
  readonly convert?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert;
  /**
  * Map uses the input as a key in the given map and returns the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#map DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Match is a more complex version of Map that matches a list of patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#match DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#match}
  */
  readonly match?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch;
  /**
  * Math is used to transform the input via mathematical operations such as multiplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#math DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#math}
  */
  readonly math?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath;
  /**
  * String is used to transform the input into a string or a different kind of string. Note that the input does not necessarily need to be a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#string DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#string}
  */
  readonly string?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString;
  /**
  * Type of the transform to be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvertToTerraform(struct!.convert),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    match: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchToTerraform(struct!.match),
    math: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMathToTerraform(struct!.math),
    string: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringToTerraform(struct!.string),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    convert: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvertToHclTerraform(struct!.convert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch",
    },
    math: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMathToHclTerraform(struct!.math),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath",
    },
    string: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.convert = this._convert?.internalValue;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._math?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.math = this._math?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._convert.internalValue = undefined;
      this._map = undefined;
      this._match.internalValue = undefined;
      this._math.internalValue = undefined;
      this._string.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._convert.internalValue = value.convert;
      this._map = value.map;
      this._match.internalValue = value.match;
      this._math.internalValue = value.math;
      this._string.internalValue = value.string;
      this._type = value.type;
    }
  }

  // convert - computed: false, optional: true, required: false
  private _convert = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvertOutputReference(this, "convert");
  public get convert() {
    return this._convert;
  }
  public putConvert(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsConvert) {
    this._convert.internalValue = value;
  }
  public resetConvert() {
    this._convert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertInput() {
    return this._convert.internalValue;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // math - computed: false, optional: true, required: false
  private _math = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMathOutputReference(this, "math");
  public get math() {
    return this._math;
  }
  public putMath(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsMath) {
    this._math.internalValue = value;
  }
  public resetMath() {
    this._math.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mathInput() {
    return this._math.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsString) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches {
  /**
  * Combine is the patch configuration for a CombineFromComposite or CombineToComposite patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#combine DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#combine}
  */
  readonly combine?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine;
  /**
  * FromFieldPath is the path of the field on the resource whose value is to be used as input. Required when type is FromCompositeFieldPath or ToCompositeFieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_field_path}
  */
  readonly fromFieldPath?: string;
  /**
  * PatchSetName to include patches from. Required when type is PatchSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#patch_set_name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#patch_set_name}
  */
  readonly patchSetName?: string;
  /**
  * Policy configures the specifics of patching behaviour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#policy DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#policy}
  */
  readonly policy?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy;
  /**
  * ToFieldPath is the path of the field on the resource whose value will be changed with the result of transforms. Leave empty if you'd like to propagate to the same path as fromFieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#to_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#to_field_path}
  */
  readonly toFieldPath?: string;
  /**
  * Transforms are the list of functions that are used as a FIFO pipe for the input to be transformed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#transforms DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#transforms}
  */
  readonly transforms?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms[] | cdktf.IResolvable;
  /**
  * Type sets the patching behaviour to be used. Each patch type may require its own fields to be set on the Patch object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combine: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineToTerraform(struct!.combine),
    from_field_path: cdktf.stringToTerraform(struct!.fromFieldPath),
    patch_set_name: cdktf.stringToTerraform(struct!.patchSetName),
    policy: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyToTerraform(struct!.policy),
    to_field_path: cdktf.stringToTerraform(struct!.toFieldPath),
    transforms: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsToTerraform, false)(struct!.transforms),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combine: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineToHclTerraform(struct!.combine),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine",
    },
    from_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fromFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_set_name: {
      value: cdktf.stringToHclTerraform(struct!.patchSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy",
    },
    to_field_path: {
      value: cdktf.stringToHclTerraform(struct!.toFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsToHclTerraform, false)(struct!.transforms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsList",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.combine = this._combine?.internalValue;
    }
    if (this._fromFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFieldPath = this._fromFieldPath;
    }
    if (this._patchSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchSetName = this._patchSetName;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    if (this._toFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.toFieldPath = this._toFieldPath;
    }
    if (this._transforms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._combine.internalValue = undefined;
      this._fromFieldPath = undefined;
      this._patchSetName = undefined;
      this._policy.internalValue = undefined;
      this._toFieldPath = undefined;
      this._transforms.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._combine.internalValue = value.combine;
      this._fromFieldPath = value.fromFieldPath;
      this._patchSetName = value.patchSetName;
      this._policy.internalValue = value.policy;
      this._toFieldPath = value.toFieldPath;
      this._transforms.internalValue = value.transforms;
      this._type = value.type;
    }
  }

  // combine - computed: false, optional: true, required: false
  private _combine = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombineOutputReference(this, "combine");
  public get combine() {
    return this._combine;
  }
  public putCombine(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesCombine) {
    this._combine.internalValue = value;
  }
  public resetCombine() {
    this._combine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineInput() {
    return this._combine.internalValue;
  }

  // from_field_path - computed: false, optional: true, required: false
  private _fromFieldPath?: string; 
  public get fromFieldPath() {
    return this.getStringAttribute('from_field_path');
  }
  public set fromFieldPath(value: string) {
    this._fromFieldPath = value;
  }
  public resetFromFieldPath() {
    this._fromFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldPathInput() {
    return this._fromFieldPath;
  }

  // patch_set_name - computed: false, optional: true, required: false
  private _patchSetName?: string; 
  public get patchSetName() {
    return this.getStringAttribute('patch_set_name');
  }
  public set patchSetName(value: string) {
    this._patchSetName = value;
  }
  public resetPatchSetName() {
    this._patchSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchSetNameInput() {
    return this._patchSetName;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // to_field_path - computed: false, optional: true, required: false
  private _toFieldPath?: string; 
  public get toFieldPath() {
    return this.getStringAttribute('to_field_path');
  }
  public set toFieldPath(value: string) {
    this._toFieldPath = value;
  }
  public resetToFieldPath() {
    this._toFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toFieldPathInput() {
    return this._toFieldPath;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransformsList(this, "transforms", false);
  public get transforms() {
    return this._transforms;
  }
  public putTransforms(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesTransforms[] | cdktf.IResolvable) {
    this._transforms.internalValue = value;
  }
  public resetTransforms() {
    this._transforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms.internalValue;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets {
  /**
  * Name of this PatchSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Patches will be applied as an overlay to the base resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#patches DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#patches}
  */
  readonly patches: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches[] | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    patches: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesToTerraform, false)(struct!.patches),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets | cdktf.IResolvable): any {
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
    patches: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._patches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._patches.internalValue = value.patches;
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

  // patches - computed: false, optional: false, required: true
  private _patches = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#namespace DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRefToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRefToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials {
  /**
  * Name of this set of credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * A SecretRef is a reference to a secret containing credentials that should be supplied to the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#secret_ref DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef;
  /**
  * Source of the function credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#source DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_ref: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRefToTerraform(struct!.secretRef),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials | cdktf.IResolvable): any {
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
    secret_ref: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretRef.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretRef.internalValue = value.secretRef;
      this._source = value.source;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef {
  /**
  * Name of the referenced Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRefToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRefToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef | cdktf.IResolvable): any {
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline {
  /**
  * Credentials are optional credentials that the Composition Function needs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#credentials DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#credentials}
  */
  readonly credentials?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials[] | cdktf.IResolvable;
  /**
  * FunctionRef is a reference to the Composition Function this step should execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#function_ref DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#function_ref}
  */
  readonly functionRef: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef;
  /**
  * Input is an optional, arbitrary Kubernetes resource (i.e. a resource with an apiVersion and kind) that will be passed to the Composition Function as the 'input' of its RunFunctionRequest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#input DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#input}
  */
  readonly input?: { [key: string]: string };
  /**
  * Step name. Must be unique within its Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#step DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#step}
  */
  readonly step: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsToTerraform, false)(struct!.credentials),
    function_ref: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRefToTerraform(struct!.functionRef),
    input: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.input),
    step: cdktf.stringToTerraform(struct!.step),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsToHclTerraform, false)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsList",
    },
    function_ref: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRefToHclTerraform(struct!.functionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef",
    },
    input: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.input),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    step: {
      value: cdktf.stringToHclTerraform(struct!.step),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._functionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionRef = this._functionRef?.internalValue;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._functionRef.internalValue = undefined;
      this._input = undefined;
      this._step = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._functionRef.internalValue = value.functionRef;
      this._input = value.input;
      this._step = value.step;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // function_ref - computed: false, optional: false, required: true
  private _functionRef = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRefOutputReference(this, "function_ref");
  public get functionRef() {
    return this._functionRef;
  }
  public putFunctionRef(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineFunctionRef) {
    this._functionRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionRefInput() {
    return this._functionRef.internalValue;
  }

  // input - computed: false, optional: true, required: false
  private _input?: { [key: string]: string }; 
  public get input() {
    return this.getStringMapAttribute('input');
  }
  public set input(value: { [key: string]: string }) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // step - computed: false, optional: false, required: true
  private _step?: string; 
  public get step() {
    return this.getStringAttribute('step');
  }
  public set step(value: string) {
    this._step = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef {
  /**
  * Name of the referenced StoreConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRefToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRefToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef | cdktf.IResolvable): any {
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails {
  /**
  * FromConnectionSecretKey is the key that will be used to fetch the value from the composed resource's connection secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_connection_secret_key DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_connection_secret_key}
  */
  readonly fromConnectionSecretKey?: string;
  /**
  * FromFieldPath is the path of the field on the composed resource whose value to be used as input. Name must be specified if the type is FromFieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_field_path}
  */
  readonly fromFieldPath?: string;
  /**
  * Name of the connection secret key that will be propagated to the connection secret of the composition instance. Leave empty if you'd like to use the same key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type sets the connection detail fetching behaviour to be used. Each connection detail type may require its own fields to be set on the ConnectionDetail object. If the type is omitted Crossplane will attempt to infer it based on which other fields were specified. If multiple fields are specified the order of precedence is: 1. FromValue 2. FromConnectionSecretKey 3. FromFieldPath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value that will be propagated to the connection secret of the composite resource. May be set to inject a fixed, non-sensitive connection secret value, for example a well-known port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#value DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_connection_secret_key: cdktf.stringToTerraform(struct!.fromConnectionSecretKey),
    from_field_path: cdktf.stringToTerraform(struct!.fromFieldPath),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_connection_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.fromConnectionSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fromFieldPath),
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromConnectionSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromConnectionSecretKey = this._fromConnectionSecretKey;
    }
    if (this._fromFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFieldPath = this._fromFieldPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromConnectionSecretKey = undefined;
      this._fromFieldPath = undefined;
      this._name = undefined;
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
      this._fromConnectionSecretKey = value.fromConnectionSecretKey;
      this._fromFieldPath = value.fromFieldPath;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // from_connection_secret_key - computed: false, optional: true, required: false
  private _fromConnectionSecretKey?: string; 
  public get fromConnectionSecretKey() {
    return this.getStringAttribute('from_connection_secret_key');
  }
  public set fromConnectionSecretKey(value: string) {
    this._fromConnectionSecretKey = value;
  }
  public resetFromConnectionSecretKey() {
    this._fromConnectionSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromConnectionSecretKeyInput() {
    return this._fromConnectionSecretKey;
  }

  // from_field_path - computed: false, optional: true, required: false
  private _fromFieldPath?: string; 
  public get fromFieldPath() {
    return this.getStringAttribute('from_field_path');
  }
  public set fromFieldPath(value: string) {
    this._fromFieldPath = value;
  }
  public resetFromFieldPath() {
    this._fromFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldPathInput() {
    return this._fromFieldPath;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString {
  /**
  * Format the input using a Go format string. See https://golang.org/pkg/fmt/ for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fmt DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fmt}
  */
  readonly fmt: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineStringToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fmt: cdktf.stringToTerraform(struct!.fmt),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineStringToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fmt: {
      value: cdktf.stringToHclTerraform(struct!.fmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmt = this._fmt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fmt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fmt = value.fmt;
    }
  }

  // fmt - computed: false, optional: false, required: true
  private _fmt?: string; 
  public get fmt() {
    return this.getStringAttribute('fmt');
  }
  public set fmt(value: string) {
    this._fmt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtInput() {
    return this._fmt;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables {
  /**
  * FromFieldPath is the path of the field on the source whose value is to be used as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_field_path}
  */
  readonly fromFieldPath: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field_path: cdktf.stringToTerraform(struct!.fromFieldPath),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fromFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFieldPath = this._fromFieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromFieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromFieldPath = value.fromFieldPath;
    }
  }

  // from_field_path - computed: false, optional: false, required: true
  private _fromFieldPath?: string; 
  public get fromFieldPath() {
    return this.getStringAttribute('from_field_path');
  }
  public set fromFieldPath(value: string) {
    this._fromFieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldPathInput() {
    return this._fromFieldPath;
  }
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine {
  /**
  * Strategy defines the strategy to use to combine the input variable values. Currently only string is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#strategy DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#strategy}
  */
  readonly strategy: string;
  /**
  * String declares that input variables should be combined into a single string, using the relevant settings for formatting purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#string DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#string}
  */
  readonly string?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString;
  /**
  * Variables are the list of variables whose values will be retrieved and combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#variables DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#variables}
  */
  readonly variables: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables[] | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    string: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineStringToTerraform(struct!.string),
    variables: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesToTerraform, false)(struct!.variables),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString",
    },
    variables: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strategy = undefined;
      this._string.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strategy = value.strategy;
      this._string.internalValue = value.string;
      this._variables.internalValue = value.variables;
    }
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // string - computed: false, optional: true, required: false
  private _string = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineString) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // variables - computed: false, optional: false, required: true
  private _variables = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions {
  /**
  * Specifies that already existing elements in a merged slice should be preserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#append_slice DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#append_slice}
  */
  readonly appendSlice?: boolean | cdktf.IResolvable;
  /**
  * Specifies that already existing values in a merged map should be preserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#keep_map_values DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#keep_map_values}
  */
  readonly keepMapValues?: boolean | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptionsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_slice: cdktf.booleanToTerraform(struct!.appendSlice),
    keep_map_values: cdktf.booleanToTerraform(struct!.keepMapValues),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptionsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_slice: {
      value: cdktf.booleanToHclTerraform(struct!.appendSlice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_map_values: {
      value: cdktf.booleanToHclTerraform(struct!.keepMapValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendSlice !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendSlice = this._appendSlice;
    }
    if (this._keepMapValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepMapValues = this._keepMapValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendSlice = undefined;
      this._keepMapValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendSlice = value.appendSlice;
      this._keepMapValues = value.keepMapValues;
    }
  }

  // append_slice - computed: false, optional: true, required: false
  private _appendSlice?: boolean | cdktf.IResolvable; 
  public get appendSlice() {
    return this.getBooleanAttribute('append_slice');
  }
  public set appendSlice(value: boolean | cdktf.IResolvable) {
    this._appendSlice = value;
  }
  public resetAppendSlice() {
    this._appendSlice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendSliceInput() {
    return this._appendSlice;
  }

  // keep_map_values - computed: false, optional: true, required: false
  private _keepMapValues?: boolean | cdktf.IResolvable; 
  public get keepMapValues() {
    return this.getBooleanAttribute('keep_map_values');
  }
  public set keepMapValues(value: boolean | cdktf.IResolvable) {
    this._keepMapValues = value;
  }
  public resetKeepMapValues() {
    this._keepMapValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepMapValuesInput() {
    return this._keepMapValues;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy {
  /**
  * FromFieldPath specifies how to patch from a field path. The default is 'Optional', which means the patch will be a no-op if the specified fromFieldPath does not exist. Use 'Required' if the patch should fail if the specified path does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_field_path}
  */
  readonly fromFieldPath?: string;
  /**
  * MergeOptions Specifies merge options on a field path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#merge_options DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#merge_options}
  */
  readonly mergeOptions?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field_path: cdktf.stringToTerraform(struct!.fromFieldPath),
    merge_options: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptionsToTerraform(struct!.mergeOptions),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fromFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_options: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptionsToHclTerraform(struct!.mergeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFieldPath = this._fromFieldPath;
    }
    if (this._mergeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeOptions = this._mergeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromFieldPath = undefined;
      this._mergeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromFieldPath = value.fromFieldPath;
      this._mergeOptions.internalValue = value.mergeOptions;
    }
  }

  // from_field_path - computed: false, optional: true, required: false
  private _fromFieldPath?: string; 
  public get fromFieldPath() {
    return this.getStringAttribute('from_field_path');
  }
  public set fromFieldPath(value: string) {
    this._fromFieldPath = value;
  }
  public resetFromFieldPath() {
    this._fromFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldPathInput() {
    return this._fromFieldPath;
  }

  // merge_options - computed: false, optional: true, required: false
  private _mergeOptions = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptionsOutputReference(this, "merge_options");
  public get mergeOptions() {
    return this._mergeOptions;
  }
  public putMergeOptions(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyMergeOptions) {
    this._mergeOptions.internalValue = value;
  }
  public resetMergeOptions() {
    this._mergeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeOptionsInput() {
    return this._mergeOptions.internalValue;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert {
  /**
  * The expected input format. * 'quantity' - parses the input as a K8s ['resource.Quantity'](https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity). Only used during 'string -> float64' conversions. * 'json' - parses the input as a JSON string. Only used during 'string -> object' or 'string -> list' conversions. If this property is null, the default conversion is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#format DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * ToType is the type of the output of this transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#to_type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#to_type}
  */
  readonly toType: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvertToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    to_type: cdktf.stringToTerraform(struct!.toType),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvertToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_type: {
      value: cdktf.stringToHclTerraform(struct!.toType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._toType !== undefined) {
      hasAnyValues = true;
      internalValueResult.toType = this._toType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._toType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._toType = value.toType;
    }
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

  // to_type - computed: false, optional: false, required: true
  private _toType?: string; 
  public get toType() {
    return this.getStringAttribute('to_type');
  }
  public set toType(value: string) {
    this._toType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toTypeInput() {
    return this._toType;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns {
  /**
  * Literal exactly matches the input string (case sensitive). Is required if 'type' is 'literal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#literal DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#literal}
  */
  readonly literal?: string;
  /**
  * Regexp to match against the input string. Is required if 'type' is 'regexp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#regexp DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#regexp}
  */
  readonly regexp?: string;
  /**
  * The value that is used as result of the transform if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#result DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#result}
  */
  readonly result: { [key: string]: string };
  /**
  * Type specifies how the pattern matches the input. * 'literal' - the pattern value has to exactly match (case sensitive) the input string. This is the default. * 'regexp' - the pattern treated as a regular expression against which the input string is tested. Crossplane will throw an error if the key is not a valid regexp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    result: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.result),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.result),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._regexp = undefined;
      this._result = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._regexp = value.regexp;
      this._result = value.result;
      this._type = value.type;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // result - computed: false, optional: false, required: true
  private _result?: { [key: string]: string }; 
  public get result() {
    return this.getStringMapAttribute('result');
  }
  public set result(value: { [key: string]: string }) {
    this._result = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch {
  /**
  * Determines to what value the transform should fallback if no pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fallback_to DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fallback_to}
  */
  readonly fallbackTo?: string;
  /**
  * The fallback value that should be returned by the transform if now pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fallback_value DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fallback_value}
  */
  readonly fallbackValue?: { [key: string]: string };
  /**
  * The patterns that should be tested against the input string. Patterns are tested in order. The value of the first match is used as result of this transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#patterns DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#patterns}
  */
  readonly patterns?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns[] | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_to: cdktf.stringToTerraform(struct!.fallbackTo),
    fallback_value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fallbackValue),
    patterns: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsToTerraform, false)(struct!.patterns),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_to: {
      value: cdktf.stringToHclTerraform(struct!.fallbackTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fallbackValue),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    patterns: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsToHclTerraform, false)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackTo = this._fallbackTo;
    }
    if (this._fallbackValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackValue = this._fallbackValue;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackTo = undefined;
      this._fallbackValue = undefined;
      this._patterns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackTo = value.fallbackTo;
      this._fallbackValue = value.fallbackValue;
      this._patterns.internalValue = value.patterns;
    }
  }

  // fallback_to - computed: false, optional: true, required: false
  private _fallbackTo?: string; 
  public get fallbackTo() {
    return this.getStringAttribute('fallback_to');
  }
  public set fallbackTo(value: string) {
    this._fallbackTo = value;
  }
  public resetFallbackTo() {
    this._fallbackTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToInput() {
    return this._fallbackTo;
  }

  // fallback_value - computed: false, optional: true, required: false
  private _fallbackValue?: { [key: string]: string }; 
  public get fallbackValue() {
    return this.getStringMapAttribute('fallback_value');
  }
  public set fallbackValue(value: { [key: string]: string }) {
    this._fallbackValue = value;
  }
  public resetFallbackValue() {
    this._fallbackValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackValueInput() {
    return this._fallbackValue;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath {
  /**
  * ClampMax makes sure that the value is not bigger than the given value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#clamp_max DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#clamp_max}
  */
  readonly clampMax?: number;
  /**
  * ClampMin makes sure that the value is not smaller than the given value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#clamp_min DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#clamp_min}
  */
  readonly clampMin?: number;
  /**
  * Multiply the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#multiply DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#multiply}
  */
  readonly multiply?: number;
  /**
  * Type of the math transform to be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMathToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clamp_max: cdktf.numberToTerraform(struct!.clampMax),
    clamp_min: cdktf.numberToTerraform(struct!.clampMin),
    multiply: cdktf.numberToTerraform(struct!.multiply),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMathToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clamp_max: {
      value: cdktf.numberToHclTerraform(struct!.clampMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clamp_min: {
      value: cdktf.numberToHclTerraform(struct!.clampMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiply: {
      value: cdktf.numberToHclTerraform(struct!.multiply),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clampMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clampMax = this._clampMax;
    }
    if (this._clampMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.clampMin = this._clampMin;
    }
    if (this._multiply !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiply = this._multiply;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clampMax = undefined;
      this._clampMin = undefined;
      this._multiply = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clampMax = value.clampMax;
      this._clampMin = value.clampMin;
      this._multiply = value.multiply;
      this._type = value.type;
    }
  }

  // clamp_max - computed: false, optional: true, required: false
  private _clampMax?: number; 
  public get clampMax() {
    return this.getNumberAttribute('clamp_max');
  }
  public set clampMax(value: number) {
    this._clampMax = value;
  }
  public resetClampMax() {
    this._clampMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clampMaxInput() {
    return this._clampMax;
  }

  // clamp_min - computed: false, optional: true, required: false
  private _clampMin?: number; 
  public get clampMin() {
    return this.getNumberAttribute('clamp_min');
  }
  public set clampMin(value: number) {
    this._clampMin = value;
  }
  public resetClampMin() {
    this._clampMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clampMinInput() {
    return this._clampMin;
  }

  // multiply - computed: false, optional: true, required: false
  private _multiply?: number; 
  public get multiply() {
    return this.getNumberAttribute('multiply');
  }
  public set multiply(value: number) {
    this._multiply = value;
  }
  public resetMultiply() {
    this._multiply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplyInput() {
    return this._multiply;
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin {
  /**
  * Separator defines the character that should separate the values from each other in the joined string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#separator DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#separator}
  */
  readonly separator: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoinToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoinToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._separator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._separator = value.separator;
    }
  }

  // separator - computed: false, optional: false, required: true
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp {
  /**
  * Group number to match. 0 (the default) matches the entire expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#group DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#group}
  */
  readonly group?: number;
  /**
  * Match string. May optionally include submatches, aka capture groups. See https://pkg.go.dev/regexp/ for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#match DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#match}
  */
  readonly match: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexpToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.numberToTerraform(struct!.group),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexpToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._match = value.match;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString {
  /**
  * Optional conversion method to be specified. 'ToUpper' and 'ToLower' change the letter case of the input string. 'ToBase64' and 'FromBase64' perform a base64 conversion based on the input string. 'ToJson' converts any input value into its raw JSON representation. 'ToSha1', 'ToSha256' and 'ToSha512' generate a hash value based on the input converted to JSON. 'ToAdler32' generate a addler32 hash based on the input string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#convert DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#convert}
  */
  readonly convert?: string;
  /**
  * Format the input using a Go format string. See https://golang.org/pkg/fmt/ for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#fmt DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#fmt}
  */
  readonly fmt?: string;
  /**
  * Join defines parameters to join a slice of values to a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#join DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#join}
  */
  readonly join?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin;
  /**
  * Extract a match from the input using a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#regexp DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp;
  /**
  * Trim the prefix or suffix from the input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#trim DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#trim}
  */
  readonly trim?: string;
  /**
  * Type of the string transform to be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert: cdktf.stringToTerraform(struct!.convert),
    fmt: cdktf.stringToTerraform(struct!.fmt),
    join: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoinToTerraform(struct!.join),
    regexp: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexpToTerraform(struct!.regexp),
    trim: cdktf.stringToTerraform(struct!.trim),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    convert: {
      value: cdktf.stringToHclTerraform(struct!.convert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmt: {
      value: cdktf.stringToHclTerraform(struct!.fmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoinToHclTerraform(struct!.join),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin",
    },
    regexp: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp",
    },
    trim: {
      value: cdktf.stringToHclTerraform(struct!.trim),
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convert !== undefined) {
      hasAnyValues = true;
      internalValueResult.convert = this._convert;
    }
    if (this._fmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmt = this._fmt;
    }
    if (this._join?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.join = this._join?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    if (this._trim !== undefined) {
      hasAnyValues = true;
      internalValueResult.trim = this._trim;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._convert = undefined;
      this._fmt = undefined;
      this._join.internalValue = undefined;
      this._regexp.internalValue = undefined;
      this._trim = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._convert = value.convert;
      this._fmt = value.fmt;
      this._join.internalValue = value.join;
      this._regexp.internalValue = value.regexp;
      this._trim = value.trim;
      this._type = value.type;
    }
  }

  // convert - computed: false, optional: true, required: false
  private _convert?: string; 
  public get convert() {
    return this.getStringAttribute('convert');
  }
  public set convert(value: string) {
    this._convert = value;
  }
  public resetConvert() {
    this._convert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertInput() {
    return this._convert;
  }

  // fmt - computed: false, optional: true, required: false
  private _fmt?: string; 
  public get fmt() {
    return this.getStringAttribute('fmt');
  }
  public set fmt(value: string) {
    this._fmt = value;
  }
  public resetFmt() {
    this._fmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtInput() {
    return this._fmt;
  }

  // join - computed: false, optional: true, required: false
  private _join = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoinOutputReference(this, "join");
  public get join() {
    return this._join;
  }
  public putJoin(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringJoin) {
    this._join.internalValue = value;
  }
  public resetJoin() {
    this._join.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinInput() {
    return this._join.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringRegexp) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }

  // trim - computed: false, optional: true, required: false
  private _trim?: string; 
  public get trim() {
    return this.getStringAttribute('trim');
  }
  public set trim(value: string) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms {
  /**
  * Convert is used to cast the input into the given output type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#convert DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#convert}
  */
  readonly convert?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert;
  /**
  * Map uses the input as a key in the given map and returns the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#map DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Match is a more complex version of Map that matches a list of patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#match DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#match}
  */
  readonly match?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch;
  /**
  * Math is used to transform the input via mathematical operations such as multiplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#math DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#math}
  */
  readonly math?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath;
  /**
  * String is used to transform the input into a string or a different kind of string. Note that the input does not necessarily need to be a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#string DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#string}
  */
  readonly string?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString;
  /**
  * Type of the transform to be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvertToTerraform(struct!.convert),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    match: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchToTerraform(struct!.match),
    math: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMathToTerraform(struct!.math),
    string: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringToTerraform(struct!.string),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    convert: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvertToHclTerraform(struct!.convert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch",
    },
    math: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMathToHclTerraform(struct!.math),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath",
    },
    string: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.convert = this._convert?.internalValue;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._math?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.math = this._math?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._convert.internalValue = undefined;
      this._map = undefined;
      this._match.internalValue = undefined;
      this._math.internalValue = undefined;
      this._string.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._convert.internalValue = value.convert;
      this._map = value.map;
      this._match.internalValue = value.match;
      this._math.internalValue = value.math;
      this._string.internalValue = value.string;
      this._type = value.type;
    }
  }

  // convert - computed: false, optional: true, required: false
  private _convert = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvertOutputReference(this, "convert");
  public get convert() {
    return this._convert;
  }
  public putConvert(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsConvert) {
    this._convert.internalValue = value;
  }
  public resetConvert() {
    this._convert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertInput() {
    return this._convert.internalValue;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // math - computed: false, optional: true, required: false
  private _math = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMathOutputReference(this, "math");
  public get math() {
    return this._math;
  }
  public putMath(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsMath) {
    this._math.internalValue = value;
  }
  public resetMath() {
    this._math.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mathInput() {
    return this._math.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsString) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches {
  /**
  * Combine is the patch configuration for a CombineFromComposite or CombineToComposite patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#combine DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#combine}
  */
  readonly combine?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine;
  /**
  * FromFieldPath is the path of the field on the resource whose value is to be used as input. Required when type is FromCompositeFieldPath or ToCompositeFieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#from_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#from_field_path}
  */
  readonly fromFieldPath?: string;
  /**
  * PatchSetName to include patches from. Required when type is PatchSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#patch_set_name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#patch_set_name}
  */
  readonly patchSetName?: string;
  /**
  * Policy configures the specifics of patching behaviour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#policy DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#policy}
  */
  readonly policy?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy;
  /**
  * ToFieldPath is the path of the field on the resource whose value will be changed with the result of transforms. Leave empty if you'd like to propagate to the same path as fromFieldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#to_field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#to_field_path}
  */
  readonly toFieldPath?: string;
  /**
  * Transforms are the list of functions that are used as a FIFO pipe for the input to be transformed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#transforms DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#transforms}
  */
  readonly transforms?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms[] | cdktf.IResolvable;
  /**
  * Type sets the patching behaviour to be used. Each patch type may require its own fields to be set on the Patch object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combine: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineToTerraform(struct!.combine),
    from_field_path: cdktf.stringToTerraform(struct!.fromFieldPath),
    patch_set_name: cdktf.stringToTerraform(struct!.patchSetName),
    policy: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyToTerraform(struct!.policy),
    to_field_path: cdktf.stringToTerraform(struct!.toFieldPath),
    transforms: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsToTerraform, false)(struct!.transforms),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combine: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineToHclTerraform(struct!.combine),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine",
    },
    from_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fromFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_set_name: {
      value: cdktf.stringToHclTerraform(struct!.patchSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy",
    },
    to_field_path: {
      value: cdktf.stringToHclTerraform(struct!.toFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsToHclTerraform, false)(struct!.transforms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsList",
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.combine = this._combine?.internalValue;
    }
    if (this._fromFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFieldPath = this._fromFieldPath;
    }
    if (this._patchSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchSetName = this._patchSetName;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    if (this._toFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.toFieldPath = this._toFieldPath;
    }
    if (this._transforms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._combine.internalValue = undefined;
      this._fromFieldPath = undefined;
      this._patchSetName = undefined;
      this._policy.internalValue = undefined;
      this._toFieldPath = undefined;
      this._transforms.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._combine.internalValue = value.combine;
      this._fromFieldPath = value.fromFieldPath;
      this._patchSetName = value.patchSetName;
      this._policy.internalValue = value.policy;
      this._toFieldPath = value.toFieldPath;
      this._transforms.internalValue = value.transforms;
      this._type = value.type;
    }
  }

  // combine - computed: false, optional: true, required: false
  private _combine = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombineOutputReference(this, "combine");
  public get combine() {
    return this._combine;
  }
  public putCombine(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesCombine) {
    this._combine.internalValue = value;
  }
  public resetCombine() {
    this._combine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineInput() {
    return this._combine.internalValue;
  }

  // from_field_path - computed: false, optional: true, required: false
  private _fromFieldPath?: string; 
  public get fromFieldPath() {
    return this.getStringAttribute('from_field_path');
  }
  public set fromFieldPath(value: string) {
    this._fromFieldPath = value;
  }
  public resetFromFieldPath() {
    this._fromFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldPathInput() {
    return this._fromFieldPath;
  }

  // patch_set_name - computed: false, optional: true, required: false
  private _patchSetName?: string; 
  public get patchSetName() {
    return this.getStringAttribute('patch_set_name');
  }
  public set patchSetName(value: string) {
    this._patchSetName = value;
  }
  public resetPatchSetName() {
    this._patchSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchSetNameInput() {
    return this._patchSetName;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // to_field_path - computed: false, optional: true, required: false
  private _toFieldPath?: string; 
  public get toFieldPath() {
    return this.getStringAttribute('to_field_path');
  }
  public set toFieldPath(value: string) {
    this._toFieldPath = value;
  }
  public resetToFieldPath() {
    this._toFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toFieldPathInput() {
    return this._toFieldPath;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransformsList(this, "transforms", false);
  public get transforms() {
    return this._transforms;
  }
  public putTransforms(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesTransforms[] | cdktf.IResolvable) {
    this._transforms.internalValue = value;
  }
  public resetTransforms() {
    this._transforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms.internalValue;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition {
  /**
  * Status is the status of the condition you'd like to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#status DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * Type indicates the type of condition you'd like to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchConditionToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchConditionToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks {
  /**
  * FieldPath shows the path of the field whose value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#field_path DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * MatchCondition specifies the condition you'd like to match if you're using 'MatchCondition' type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#match_condition DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#match_condition}
  */
  readonly matchCondition?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition;
  /**
  * MatchInt is the value you'd like to match if you're using 'MatchInt' type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#match_integer DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#match_integer}
  */
  readonly matchInteger?: number;
  /**
  * MatchString is the value you'd like to match if you're using 'MatchString' type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#match_string DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#match_string}
  */
  readonly matchString?: string;
  /**
  * Type indicates the type of probe you'd like to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#type DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    match_condition: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchConditionToTerraform(struct!.matchCondition),
    match_integer: cdktf.numberToTerraform(struct!.matchInteger),
    match_string: cdktf.stringToTerraform(struct!.matchString),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_condition: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchConditionToHclTerraform(struct!.matchCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition",
    },
    match_integer: {
      value: cdktf.numberToHclTerraform(struct!.matchInteger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_string: {
      value: cdktf.stringToHclTerraform(struct!.matchString),
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._matchCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCondition = this._matchCondition?.internalValue;
    }
    if (this._matchInteger !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInteger = this._matchInteger;
    }
    if (this._matchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchString = this._matchString;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
      this._matchCondition.internalValue = undefined;
      this._matchInteger = undefined;
      this._matchString = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
      this._matchCondition.internalValue = value.matchCondition;
      this._matchInteger = value.matchInteger;
      this._matchString = value.matchString;
      this._type = value.type;
    }
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

  // match_condition - computed: false, optional: true, required: false
  private _matchCondition = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchConditionOutputReference(this, "match_condition");
  public get matchCondition() {
    return this._matchCondition;
  }
  public putMatchCondition(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksMatchCondition) {
    this._matchCondition.internalValue = value;
  }
  public resetMatchCondition() {
    this._matchCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionInput() {
    return this._matchCondition.internalValue;
  }

  // match_integer - computed: false, optional: true, required: false
  private _matchInteger?: number; 
  public get matchInteger() {
    return this.getNumberAttribute('match_integer');
  }
  public set matchInteger(value: number) {
    this._matchInteger = value;
  }
  public resetMatchInteger() {
    this._matchInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIntegerInput() {
    return this._matchInteger;
  }

  // match_string - computed: false, optional: true, required: false
  private _matchString?: string; 
  public get matchString() {
    return this.getStringAttribute('match_string');
  }
  public set matchString(value: string) {
    this._matchString = value;
  }
  public resetMatchString() {
    this._matchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringInput() {
    return this._matchString;
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

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources {
  /**
  * Base is the target resource that the patches will be applied on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#base DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#base}
  */
  readonly base: { [key: string]: string };
  /**
  * ConnectionDetails lists the propagation secret keys from this target resource to the composition instance connection secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#connection_details DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#connection_details}
  */
  readonly connectionDetails?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails[] | cdktf.IResolvable;
  /**
  * A Name uniquely identifies this entry within its Composition's resources array. Names are optional but *strongly* recommended. When all entries in the resources array are named entries may added, deleted, and reordered as long as their names do not change. When entries are not named the length and order of the resources array should be treated as immutable. Either all or no entries must be named.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#name DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Patches will be applied as overlay to the base resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#patches DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#patches}
  */
  readonly patches?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches[] | cdktf.IResolvable;
  /**
  * ReadinessChecks allows users to define custom readiness checks. All checks have to return true in order for resource to be considered ready. The default readiness check is to have the 'Ready' condition to be 'True'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#readiness_checks DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#readiness_checks}
  */
  readonly readinessChecks?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks[] | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.base),
    connection_details: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsToTerraform, false)(struct!.connectionDetails),
    name: cdktf.stringToTerraform(struct!.name),
    patches: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesToTerraform, false)(struct!.patches),
    readiness_checks: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksToTerraform, false)(struct!.readinessChecks),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.base),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connection_details: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsToHclTerraform, false)(struct!.connectionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesList",
    },
    readiness_checks: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksToHclTerraform, false)(struct!.readinessChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._connectionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDetails = this._connectionDetails?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._readinessChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessChecks = this._readinessChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._connectionDetails.internalValue = undefined;
      this._name = undefined;
      this._patches.internalValue = undefined;
      this._readinessChecks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._connectionDetails.internalValue = value.connectionDetails;
      this._name = value.name;
      this._patches.internalValue = value.patches;
      this._readinessChecks.internalValue = value.readinessChecks;
    }
  }

  // base - computed: false, optional: false, required: true
  private _base?: { [key: string]: string }; 
  public get base() {
    return this.getStringMapAttribute('base');
  }
  public set base(value: { [key: string]: string }) {
    this._base = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // connection_details - computed: false, optional: true, required: false
  private _connectionDetails = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetailsList(this, "connection_details", false);
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesConnectionDetails[] | cdktf.IResolvable) {
    this._connectionDetails.internalValue = value;
  }
  public resetConnectionDetails() {
    this._connectionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
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

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // readiness_checks - computed: false, optional: true, required: false
  private _readinessChecks = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecksList(this, "readiness_checks", false);
  public get readinessChecks() {
    return this._readinessChecks;
  }
  public putReadinessChecks(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesReadinessChecks[] | cdktf.IResolvable) {
    this._readinessChecks.internalValue = value;
  }
  public resetReadinessChecks() {
    this._readinessChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessChecksInput() {
    return this._readinessChecks.internalValue;
  }
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec {
  /**
  * CompositeTypeRef specifies the type of composite resource that this composition is compatible with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#composite_type_ref DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#composite_type_ref}
  */
  readonly compositeTypeRef: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef;
  /**
  * Mode controls what type or 'mode' of Composition will be used. 'Pipeline' indicates that a Composition specifies a pipeline of Composition Functions, each of which is responsible for producing composed resources that Crossplane should create or update. 'Resources' indicates that a Composition uses what is commonly referred to as 'Patch & Transform' or P&T composition. This mode of Composition uses an array of resources, each a template for a composed resource. All Compositions should use Pipeline mode. Resources mode is deprecated. Resources mode won't be removed in Crossplane 1.x, and will remain the default to avoid breaking legacy Compositions. However, it's no longer accepting new features, and only accepting security related bug fixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#mode DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * PatchSets define a named set of patches that may be included by any resource in this Composition. PatchSets cannot themselves refer to other PatchSets. PatchSets are only used by the 'Resources' mode of Composition. They are ignored by other modes. Deprecated: Use Composition Functions instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#patch_sets DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#patch_sets}
  */
  readonly patchSets?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets[] | cdktf.IResolvable;
  /**
  * Pipeline is a list of composition function steps that will be used when a composite resource referring to this composition is created. One of resources and pipeline must be specified - you cannot specify both. The Pipeline is only used by the 'Pipeline' mode of Composition. It is ignored by other modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#pipeline DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#pipeline}
  */
  readonly pipeline?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline[] | cdktf.IResolvable;
  /**
  * PublishConnectionDetailsWithStoreConfig specifies the secret store config with which the connection details of composite resources dynamically provisioned using this composition will be published. THIS IS AN ALPHA FIELD. Do not use it in production. It is not honored unless the relevant Crossplane feature flag is enabled, and may be changed or removed without notice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#publish_connection_details_with_store_config_ref DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#publish_connection_details_with_store_config_ref}
  */
  readonly publishConnectionDetailsWithStoreConfigRef?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef;
  /**
  * Resources is a list of resource templates that will be used when a composite resource referring to this composition is created. Resources are only used by the 'Resources' mode of Composition. They are ignored by other modes. Deprecated: Use Composition Functions instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#resources DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources[] | cdktf.IResolvable;
  /**
  * Revision number. Newer revisions have larger numbers. This number can change. When a Composition transitions from state A -> B -> A there will be only two CompositionRevisions. Crossplane will edit the original CompositionRevision to change its revision number from 0 to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#revision DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#revision}
  */
  readonly revision: number;
  /**
  * WriteConnectionSecretsToNamespace specifies the namespace in which the connection secrets of composite resource dynamically provisioned using this composition will be created. This field is planned to be replaced in a future release in favor of PublishConnectionDetailsWithStoreConfigRef. Currently, both could be set independently and connection details would be published to both without affecting each other as long as related fields at MR level specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#write_connection_secrets_to_namespace DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest#write_connection_secrets_to_namespace}
  */
  readonly writeConnectionSecretsToNamespace?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    composite_type_ref: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRefToTerraform(struct!.compositeTypeRef),
    mode: cdktf.stringToTerraform(struct!.mode),
    patch_sets: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsToTerraform, false)(struct!.patchSets),
    pipeline: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineToTerraform, false)(struct!.pipeline),
    publish_connection_details_with_store_config_ref: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRefToTerraform(struct!.publishConnectionDetailsWithStoreConfigRef),
    resources: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesToTerraform, false)(struct!.resources),
    revision: cdktf.numberToTerraform(struct!.revision),
    write_connection_secrets_to_namespace: cdktf.stringToTerraform(struct!.writeConnectionSecretsToNamespace),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    composite_type_ref: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRefToHclTerraform(struct!.compositeTypeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_sets: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsToHclTerraform, false)(struct!.patchSets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsList",
    },
    pipeline: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineToHclTerraform, false)(struct!.pipeline),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineList",
    },
    publish_connection_details_with_store_config_ref: {
      value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRefToHclTerraform(struct!.publishConnectionDetailsWithStoreConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesList",
    },
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_connection_secrets_to_namespace: {
      value: cdktf.stringToHclTerraform(struct!.writeConnectionSecretsToNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeTypeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeTypeRef = this._compositeTypeRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._patchSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchSets = this._patchSets?.internalValue;
    }
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    if (this._publishConnectionDetailsWithStoreConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishConnectionDetailsWithStoreConfigRef = this._publishConnectionDetailsWithStoreConfigRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._writeConnectionSecretsToNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeConnectionSecretsToNamespace = this._writeConnectionSecretsToNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositeTypeRef.internalValue = undefined;
      this._mode = undefined;
      this._patchSets.internalValue = undefined;
      this._pipeline.internalValue = undefined;
      this._publishConnectionDetailsWithStoreConfigRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._revision = undefined;
      this._writeConnectionSecretsToNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositeTypeRef.internalValue = value.compositeTypeRef;
      this._mode = value.mode;
      this._patchSets.internalValue = value.patchSets;
      this._pipeline.internalValue = value.pipeline;
      this._publishConnectionDetailsWithStoreConfigRef.internalValue = value.publishConnectionDetailsWithStoreConfigRef;
      this._resources.internalValue = value.resources;
      this._revision = value.revision;
      this._writeConnectionSecretsToNamespace = value.writeConnectionSecretsToNamespace;
    }
  }

  // composite_type_ref - computed: false, optional: false, required: true
  private _compositeTypeRef = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRefOutputReference(this, "composite_type_ref");
  public get compositeTypeRef() {
    return this._compositeTypeRef;
  }
  public putCompositeTypeRef(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecCompositeTypeRef) {
    this._compositeTypeRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeTypeRefInput() {
    return this._compositeTypeRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // patch_sets - computed: false, optional: true, required: false
  private _patchSets = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSetsList(this, "patch_sets", false);
  public get patchSets() {
    return this._patchSets;
  }
  public putPatchSets(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPatchSets[] | cdktf.IResolvable) {
    this._patchSets.internalValue = value;
  }
  public resetPatchSets() {
    this._patchSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchSetsInput() {
    return this._patchSets.internalValue;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipelineList(this, "pipeline", false);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPipeline[] | cdktf.IResolvable) {
    this._pipeline.internalValue = value;
  }
  public resetPipeline() {
    this._pipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline.internalValue;
  }

  // publish_connection_details_with_store_config_ref - computed: false, optional: true, required: false
  private _publishConnectionDetailsWithStoreConfigRef = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRefOutputReference(this, "publish_connection_details_with_store_config_ref");
  public get publishConnectionDetailsWithStoreConfigRef() {
    return this._publishConnectionDetailsWithStoreConfigRef;
  }
  public putPublishConnectionDetailsWithStoreConfigRef(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecPublishConnectionDetailsWithStoreConfigRef) {
    this._publishConnectionDetailsWithStoreConfigRef.internalValue = value;
  }
  public resetPublishConnectionDetailsWithStoreConfigRef() {
    this._publishConnectionDetailsWithStoreConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishConnectionDetailsWithStoreConfigRefInput() {
    return this._publishConnectionDetailsWithStoreConfigRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // write_connection_secrets_to_namespace - computed: false, optional: true, required: false
  private _writeConnectionSecretsToNamespace?: string; 
  public get writeConnectionSecretsToNamespace() {
    return this.getStringAttribute('write_connection_secrets_to_namespace');
  }
  public set writeConnectionSecretsToNamespace(value: string) {
    this._writeConnectionSecretsToNamespace = value;
  }
  public resetWriteConnectionSecretsToNamespace() {
    this._writeConnectionSecretsToNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeConnectionSecretsToNamespaceInput() {
    return this._writeConnectionSecretsToNamespace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest k8s_apiextensions_crossplane_io_composition_revision_v1beta1_manifest}
*/
export class DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apiextensions_crossplane_io_composition_revision_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apiextensions_crossplane_io_composition_revision_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composition_revision_v1beta1_manifest k8s_apiextensions_crossplane_io_composition_revision_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apiextensions_crossplane_io_composition_revision_v1beta1_manifest',
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
  private _metadata = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec) {
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
      metadata: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiextensionsCrossplaneIoCompositionRevisionV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
