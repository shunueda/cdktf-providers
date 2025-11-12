// https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKustomizationOverlayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#common_annotations DataKustomizationOverlay#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#common_labels DataKustomizationOverlay#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#components DataKustomizationOverlay#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#crds DataKustomizationOverlay#crds}
  */
  readonly crds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#generators DataKustomizationOverlay#generators}
  */
  readonly generators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#id DataKustomizationOverlay#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name_prefix DataKustomizationOverlay#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name_suffix DataKustomizationOverlay#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#resources DataKustomizationOverlay#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#transformers DataKustomizationOverlay#transformers}
  */
  readonly transformers?: string[];
  /**
  * config_map_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#config_map_generator DataKustomizationOverlay#config_map_generator}
  */
  readonly configMapGenerator?: DataKustomizationOverlayConfigMapGenerator[] | cdktf.IResolvable;
  /**
  * generator_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#generator_options DataKustomizationOverlay#generator_options}
  */
  readonly generatorOptions?: DataKustomizationOverlayGeneratorOptions;
  /**
  * helm_charts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#helm_charts DataKustomizationOverlay#helm_charts}
  */
  readonly helmCharts?: DataKustomizationOverlayHelmCharts[] | cdktf.IResolvable;
  /**
  * helm_globals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#helm_globals DataKustomizationOverlay#helm_globals}
  */
  readonly helmGlobals?: DataKustomizationOverlayHelmGlobals;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#images DataKustomizationOverlay#images}
  */
  readonly images?: DataKustomizationOverlayImages[] | cdktf.IResolvable;
  /**
  * kustomize_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#kustomize_options DataKustomizationOverlay#kustomize_options}
  */
  readonly kustomizeOptions?: DataKustomizationOverlayKustomizeOptions;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#labels DataKustomizationOverlay#labels}
  */
  readonly labels?: DataKustomizationOverlayLabels[] | cdktf.IResolvable;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#patches DataKustomizationOverlay#patches}
  */
  readonly patches?: DataKustomizationOverlayPatches[] | cdktf.IResolvable;
  /**
  * replacements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#replacements DataKustomizationOverlay#replacements}
  */
  readonly replacements?: DataKustomizationOverlayReplacements[] | cdktf.IResolvable;
  /**
  * replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#replicas DataKustomizationOverlay#replicas}
  */
  readonly replicas?: DataKustomizationOverlayReplicas[] | cdktf.IResolvable;
  /**
  * secret_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#secret_generator DataKustomizationOverlay#secret_generator}
  */
  readonly secretGenerator?: DataKustomizationOverlaySecretGenerator[] | cdktf.IResolvable;
  /**
  * vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#vars DataKustomizationOverlay#vars}
  */
  readonly vars?: DataKustomizationOverlayVars[] | cdktf.IResolvable;
}
export interface DataKustomizationOverlayConfigMapGeneratorOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#annotations DataKustomizationOverlay#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#disable_name_suffix_hash DataKustomizationOverlay#disable_name_suffix_hash}
  */
  readonly disableNameSuffixHash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#labels DataKustomizationOverlay#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataKustomizationOverlayConfigMapGeneratorOptionsToTerraform(struct?: DataKustomizationOverlayConfigMapGeneratorOptionsOutputReference | DataKustomizationOverlayConfigMapGeneratorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    disable_name_suffix_hash: cdktf.booleanToTerraform(struct!.disableNameSuffixHash),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataKustomizationOverlayConfigMapGeneratorOptionsToHclTerraform(struct?: DataKustomizationOverlayConfigMapGeneratorOptionsOutputReference | DataKustomizationOverlayConfigMapGeneratorOptions): any {
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
    disable_name_suffix_hash: {
      value: cdktf.booleanToHclTerraform(struct!.disableNameSuffixHash),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayConfigMapGeneratorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayConfigMapGeneratorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._disableNameSuffixHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNameSuffixHash = this._disableNameSuffixHash;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayConfigMapGeneratorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._disableNameSuffixHash = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._disableNameSuffixHash = value.disableNameSuffixHash;
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

  // disable_name_suffix_hash - computed: false, optional: true, required: false
  private _disableNameSuffixHash?: boolean | cdktf.IResolvable; 
  public get disableNameSuffixHash() {
    return this.getBooleanAttribute('disable_name_suffix_hash');
  }
  public set disableNameSuffixHash(value: boolean | cdktf.IResolvable) {
    this._disableNameSuffixHash = value;
  }
  public resetDisableNameSuffixHash() {
    this._disableNameSuffixHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNameSuffixHashInput() {
    return this._disableNameSuffixHash;
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
export interface DataKustomizationOverlayConfigMapGenerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#behavior DataKustomizationOverlay#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#envs DataKustomizationOverlay#envs}
  */
  readonly envs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#files DataKustomizationOverlay#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#literals DataKustomizationOverlay#literals}
  */
  readonly literals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#options DataKustomizationOverlay#options}
  */
  readonly options?: DataKustomizationOverlayConfigMapGeneratorOptions;
}

export function dataKustomizationOverlayConfigMapGeneratorToTerraform(struct?: DataKustomizationOverlayConfigMapGenerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    envs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envs),
    files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.files),
    literals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.literals),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    options: dataKustomizationOverlayConfigMapGeneratorOptionsToTerraform(struct!.options),
  }
}


export function dataKustomizationOverlayConfigMapGeneratorToHclTerraform(struct?: DataKustomizationOverlayConfigMapGenerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.files),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    literals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.literals),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: dataKustomizationOverlayConfigMapGeneratorOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayConfigMapGeneratorOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayConfigMapGeneratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayConfigMapGenerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._envs !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._literals !== undefined) {
      hasAnyValues = true;
      internalValueResult.literals = this._literals;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayConfigMapGenerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._envs = undefined;
      this._files = undefined;
      this._literals = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._envs = value.envs;
      this._files = value.files;
      this._literals = value.literals;
      this._name = value.name;
      this._namespace = value.namespace;
      this._options.internalValue = value.options;
    }
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: string[]; 
  public get envs() {
    return this.getListAttribute('envs');
  }
  public set envs(value: string[]) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // literals - computed: false, optional: true, required: false
  private _literals?: string[]; 
  public get literals() {
    return this.getListAttribute('literals');
  }
  public set literals(value: string[]) {
    this._literals = value;
  }
  public resetLiterals() {
    this._literals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalsInput() {
    return this._literals;
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

  // options - computed: false, optional: true, required: false
  private _options = new DataKustomizationOverlayConfigMapGeneratorOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataKustomizationOverlayConfigMapGeneratorOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DataKustomizationOverlayConfigMapGeneratorList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayConfigMapGenerator[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayConfigMapGeneratorOutputReference {
    return new DataKustomizationOverlayConfigMapGeneratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayGeneratorOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#annotations DataKustomizationOverlay#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#disable_name_suffix_hash DataKustomizationOverlay#disable_name_suffix_hash}
  */
  readonly disableNameSuffixHash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#labels DataKustomizationOverlay#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataKustomizationOverlayGeneratorOptionsToTerraform(struct?: DataKustomizationOverlayGeneratorOptionsOutputReference | DataKustomizationOverlayGeneratorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    disable_name_suffix_hash: cdktf.booleanToTerraform(struct!.disableNameSuffixHash),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataKustomizationOverlayGeneratorOptionsToHclTerraform(struct?: DataKustomizationOverlayGeneratorOptionsOutputReference | DataKustomizationOverlayGeneratorOptions): any {
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
    disable_name_suffix_hash: {
      value: cdktf.booleanToHclTerraform(struct!.disableNameSuffixHash),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayGeneratorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayGeneratorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._disableNameSuffixHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNameSuffixHash = this._disableNameSuffixHash;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayGeneratorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._disableNameSuffixHash = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._disableNameSuffixHash = value.disableNameSuffixHash;
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

  // disable_name_suffix_hash - computed: false, optional: true, required: false
  private _disableNameSuffixHash?: boolean | cdktf.IResolvable; 
  public get disableNameSuffixHash() {
    return this.getBooleanAttribute('disable_name_suffix_hash');
  }
  public set disableNameSuffixHash(value: boolean | cdktf.IResolvable) {
    this._disableNameSuffixHash = value;
  }
  public resetDisableNameSuffixHash() {
    this._disableNameSuffixHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNameSuffixHashInput() {
    return this._disableNameSuffixHash;
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
export interface DataKustomizationOverlayHelmCharts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#api_versions DataKustomizationOverlay#api_versions}
  */
  readonly apiVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#include_crds DataKustomizationOverlay#include_crds}
  */
  readonly includeCrds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#kube_version DataKustomizationOverlay#kube_version}
  */
  readonly kubeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#release_name DataKustomizationOverlay#release_name}
  */
  readonly releaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#repo DataKustomizationOverlay#repo}
  */
  readonly repo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#skip_tests DataKustomizationOverlay#skip_tests}
  */
  readonly skipTests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#values_file DataKustomizationOverlay#values_file}
  */
  readonly valuesFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#values_inline DataKustomizationOverlay#values_inline}
  */
  readonly valuesInline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#values_merge DataKustomizationOverlay#values_merge}
  */
  readonly valuesMerge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#version DataKustomizationOverlay#version}
  */
  readonly version?: string;
}

export function dataKustomizationOverlayHelmChartsToTerraform(struct?: DataKustomizationOverlayHelmCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiVersions),
    include_crds: cdktf.booleanToTerraform(struct!.includeCrds),
    kube_version: cdktf.stringToTerraform(struct!.kubeVersion),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    repo: cdktf.stringToTerraform(struct!.repo),
    skip_tests: cdktf.booleanToTerraform(struct!.skipTests),
    values_file: cdktf.stringToTerraform(struct!.valuesFile),
    values_inline: cdktf.stringToTerraform(struct!.valuesInline),
    values_merge: cdktf.stringToTerraform(struct!.valuesMerge),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataKustomizationOverlayHelmChartsToHclTerraform(struct?: DataKustomizationOverlayHelmCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_crds: {
      value: cdktf.booleanToHclTerraform(struct!.includeCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kube_version: {
      value: cdktf.stringToHclTerraform(struct!.kubeVersion),
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
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_tests: {
      value: cdktf.booleanToHclTerraform(struct!.skipTests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values_file: {
      value: cdktf.stringToHclTerraform(struct!.valuesFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_inline: {
      value: cdktf.stringToHclTerraform(struct!.valuesInline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_merge: {
      value: cdktf.stringToHclTerraform(struct!.valuesMerge),
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

export class DataKustomizationOverlayHelmChartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayHelmCharts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersions = this._apiVersions;
    }
    if (this._includeCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCrds = this._includeCrds;
    }
    if (this._kubeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeVersion = this._kubeVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._skipTests !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTests = this._skipTests;
    }
    if (this._valuesFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFile = this._valuesFile;
    }
    if (this._valuesInline !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesInline = this._valuesInline;
    }
    if (this._valuesMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesMerge = this._valuesMerge;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayHelmCharts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersions = undefined;
      this._includeCrds = undefined;
      this._kubeVersion = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._releaseName = undefined;
      this._repo = undefined;
      this._skipTests = undefined;
      this._valuesFile = undefined;
      this._valuesInline = undefined;
      this._valuesMerge = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersions = value.apiVersions;
      this._includeCrds = value.includeCrds;
      this._kubeVersion = value.kubeVersion;
      this._name = value.name;
      this._namespace = value.namespace;
      this._releaseName = value.releaseName;
      this._repo = value.repo;
      this._skipTests = value.skipTests;
      this._valuesFile = value.valuesFile;
      this._valuesInline = value.valuesInline;
      this._valuesMerge = value.valuesMerge;
      this._version = value.version;
    }
  }

  // api_versions - computed: false, optional: true, required: false
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  public resetApiVersions() {
    this._apiVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

  // include_crds - computed: false, optional: true, required: false
  private _includeCrds?: boolean | cdktf.IResolvable; 
  public get includeCrds() {
    return this.getBooleanAttribute('include_crds');
  }
  public set includeCrds(value: boolean | cdktf.IResolvable) {
    this._includeCrds = value;
  }
  public resetIncludeCrds() {
    this._includeCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCrdsInput() {
    return this._includeCrds;
  }

  // kube_version - computed: false, optional: true, required: false
  private _kubeVersion?: string; 
  public get kubeVersion() {
    return this.getStringAttribute('kube_version');
  }
  public set kubeVersion(value: string) {
    this._kubeVersion = value;
  }
  public resetKubeVersion() {
    this._kubeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeVersionInput() {
    return this._kubeVersion;
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

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // skip_tests - computed: false, optional: true, required: false
  private _skipTests?: boolean | cdktf.IResolvable; 
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests');
  }
  public set skipTests(value: boolean | cdktf.IResolvable) {
    this._skipTests = value;
  }
  public resetSkipTests() {
    this._skipTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestsInput() {
    return this._skipTests;
  }

  // values_file - computed: false, optional: true, required: false
  private _valuesFile?: string; 
  public get valuesFile() {
    return this.getStringAttribute('values_file');
  }
  public set valuesFile(value: string) {
    this._valuesFile = value;
  }
  public resetValuesFile() {
    this._valuesFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesFileInput() {
    return this._valuesFile;
  }

  // values_inline - computed: false, optional: true, required: false
  private _valuesInline?: string; 
  public get valuesInline() {
    return this.getStringAttribute('values_inline');
  }
  public set valuesInline(value: string) {
    this._valuesInline = value;
  }
  public resetValuesInline() {
    this._valuesInline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInlineInput() {
    return this._valuesInline;
  }

  // values_merge - computed: false, optional: true, required: false
  private _valuesMerge?: string; 
  public get valuesMerge() {
    return this.getStringAttribute('values_merge');
  }
  public set valuesMerge(value: string) {
    this._valuesMerge = value;
  }
  public resetValuesMerge() {
    this._valuesMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesMergeInput() {
    return this._valuesMerge;
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

export class DataKustomizationOverlayHelmChartsList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayHelmCharts[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayHelmChartsOutputReference {
    return new DataKustomizationOverlayHelmChartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayHelmGlobals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#chart_home DataKustomizationOverlay#chart_home}
  */
  readonly chartHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#config_home DataKustomizationOverlay#config_home}
  */
  readonly configHome?: string;
}

export function dataKustomizationOverlayHelmGlobalsToTerraform(struct?: DataKustomizationOverlayHelmGlobalsOutputReference | DataKustomizationOverlayHelmGlobals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_home: cdktf.stringToTerraform(struct!.chartHome),
    config_home: cdktf.stringToTerraform(struct!.configHome),
  }
}


export function dataKustomizationOverlayHelmGlobalsToHclTerraform(struct?: DataKustomizationOverlayHelmGlobalsOutputReference | DataKustomizationOverlayHelmGlobals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_home: {
      value: cdktf.stringToHclTerraform(struct!.chartHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_home: {
      value: cdktf.stringToHclTerraform(struct!.configHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayHelmGlobalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayHelmGlobals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartHome = this._chartHome;
    }
    if (this._configHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.configHome = this._configHome;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayHelmGlobals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chartHome = undefined;
      this._configHome = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chartHome = value.chartHome;
      this._configHome = value.configHome;
    }
  }

  // chart_home - computed: false, optional: true, required: false
  private _chartHome?: string; 
  public get chartHome() {
    return this.getStringAttribute('chart_home');
  }
  public set chartHome(value: string) {
    this._chartHome = value;
  }
  public resetChartHome() {
    this._chartHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartHomeInput() {
    return this._chartHome;
  }

  // config_home - computed: false, optional: true, required: false
  private _configHome?: string; 
  public get configHome() {
    return this.getStringAttribute('config_home');
  }
  public set configHome(value: string) {
    this._configHome = value;
  }
  public resetConfigHome() {
    this._configHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configHomeInput() {
    return this._configHome;
  }
}
export interface DataKustomizationOverlayImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#digest DataKustomizationOverlay#digest}
  */
  readonly digest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#new_name DataKustomizationOverlay#new_name}
  */
  readonly newName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#new_tag DataKustomizationOverlay#new_tag}
  */
  readonly newTag?: string;
}

export function dataKustomizationOverlayImagesToTerraform(struct?: DataKustomizationOverlayImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    name: cdktf.stringToTerraform(struct!.name),
    new_name: cdktf.stringToTerraform(struct!.newName),
    new_tag: cdktf.stringToTerraform(struct!.newTag),
  }
}


export function dataKustomizationOverlayImagesToHclTerraform(struct?: DataKustomizationOverlayImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
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
    new_name: {
      value: cdktf.stringToHclTerraform(struct!.newName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tag: {
      value: cdktf.stringToHclTerraform(struct!.newTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._newName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newName = this._newName;
    }
    if (this._newTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTag = this._newTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._name = undefined;
      this._newName = undefined;
      this._newTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._name = value.name;
      this._newName = value.newName;
      this._newTag = value.newTag;
    }
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
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

  // new_name - computed: false, optional: true, required: false
  private _newName?: string; 
  public get newName() {
    return this.getStringAttribute('new_name');
  }
  public set newName(value: string) {
    this._newName = value;
  }
  public resetNewName() {
    this._newName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName;
  }

  // new_tag - computed: false, optional: true, required: false
  private _newTag?: string; 
  public get newTag() {
    return this.getStringAttribute('new_tag');
  }
  public set newTag(value: string) {
    this._newTag = value;
  }
  public resetNewTag() {
    this._newTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTagInput() {
    return this._newTag;
  }
}

export class DataKustomizationOverlayImagesList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayImages[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayImagesOutputReference {
    return new DataKustomizationOverlayImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayKustomizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#enable_alpha_plugins DataKustomizationOverlay#enable_alpha_plugins}
  */
  readonly enableAlphaPlugins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#enable_exec DataKustomizationOverlay#enable_exec}
  */
  readonly enableExec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#enable_helm DataKustomizationOverlay#enable_helm}
  */
  readonly enableHelm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#enable_star DataKustomizationOverlay#enable_star}
  */
  readonly enableStar?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#helm_path DataKustomizationOverlay#helm_path}
  */
  readonly helmPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#load_restrictor DataKustomizationOverlay#load_restrictor}
  */
  readonly loadRestrictor?: string;
}

export function dataKustomizationOverlayKustomizeOptionsToTerraform(struct?: DataKustomizationOverlayKustomizeOptionsOutputReference | DataKustomizationOverlayKustomizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_alpha_plugins: cdktf.booleanToTerraform(struct!.enableAlphaPlugins),
    enable_exec: cdktf.booleanToTerraform(struct!.enableExec),
    enable_helm: cdktf.booleanToTerraform(struct!.enableHelm),
    enable_star: cdktf.booleanToTerraform(struct!.enableStar),
    helm_path: cdktf.stringToTerraform(struct!.helmPath),
    load_restrictor: cdktf.stringToTerraform(struct!.loadRestrictor),
  }
}


export function dataKustomizationOverlayKustomizeOptionsToHclTerraform(struct?: DataKustomizationOverlayKustomizeOptionsOutputReference | DataKustomizationOverlayKustomizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_alpha_plugins: {
      value: cdktf.booleanToHclTerraform(struct!.enableAlphaPlugins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_exec: {
      value: cdktf.booleanToHclTerraform(struct!.enableExec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_helm: {
      value: cdktf.booleanToHclTerraform(struct!.enableHelm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_star: {
      value: cdktf.booleanToHclTerraform(struct!.enableStar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    helm_path: {
      value: cdktf.stringToHclTerraform(struct!.helmPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_restrictor: {
      value: cdktf.stringToHclTerraform(struct!.loadRestrictor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayKustomizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayKustomizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAlphaPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAlphaPlugins = this._enableAlphaPlugins;
    }
    if (this._enableExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExec = this._enableExec;
    }
    if (this._enableHelm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHelm = this._enableHelm;
    }
    if (this._enableStar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStar = this._enableStar;
    }
    if (this._helmPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmPath = this._helmPath;
    }
    if (this._loadRestrictor !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadRestrictor = this._loadRestrictor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayKustomizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAlphaPlugins = undefined;
      this._enableExec = undefined;
      this._enableHelm = undefined;
      this._enableStar = undefined;
      this._helmPath = undefined;
      this._loadRestrictor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAlphaPlugins = value.enableAlphaPlugins;
      this._enableExec = value.enableExec;
      this._enableHelm = value.enableHelm;
      this._enableStar = value.enableStar;
      this._helmPath = value.helmPath;
      this._loadRestrictor = value.loadRestrictor;
    }
  }

  // enable_alpha_plugins - computed: false, optional: true, required: false
  private _enableAlphaPlugins?: boolean | cdktf.IResolvable; 
  public get enableAlphaPlugins() {
    return this.getBooleanAttribute('enable_alpha_plugins');
  }
  public set enableAlphaPlugins(value: boolean | cdktf.IResolvable) {
    this._enableAlphaPlugins = value;
  }
  public resetEnableAlphaPlugins() {
    this._enableAlphaPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlphaPluginsInput() {
    return this._enableAlphaPlugins;
  }

  // enable_exec - computed: false, optional: true, required: false
  private _enableExec?: boolean | cdktf.IResolvable; 
  public get enableExec() {
    return this.getBooleanAttribute('enable_exec');
  }
  public set enableExec(value: boolean | cdktf.IResolvable) {
    this._enableExec = value;
  }
  public resetEnableExec() {
    this._enableExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecInput() {
    return this._enableExec;
  }

  // enable_helm - computed: false, optional: true, required: false
  private _enableHelm?: boolean | cdktf.IResolvable; 
  public get enableHelm() {
    return this.getBooleanAttribute('enable_helm');
  }
  public set enableHelm(value: boolean | cdktf.IResolvable) {
    this._enableHelm = value;
  }
  public resetEnableHelm() {
    this._enableHelm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHelmInput() {
    return this._enableHelm;
  }

  // enable_star - computed: false, optional: true, required: false
  private _enableStar?: boolean | cdktf.IResolvable; 
  public get enableStar() {
    return this.getBooleanAttribute('enable_star');
  }
  public set enableStar(value: boolean | cdktf.IResolvable) {
    this._enableStar = value;
  }
  public resetEnableStar() {
    this._enableStar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStarInput() {
    return this._enableStar;
  }

  // helm_path - computed: false, optional: true, required: false
  private _helmPath?: string; 
  public get helmPath() {
    return this.getStringAttribute('helm_path');
  }
  public set helmPath(value: string) {
    this._helmPath = value;
  }
  public resetHelmPath() {
    this._helmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmPathInput() {
    return this._helmPath;
  }

  // load_restrictor - computed: false, optional: true, required: false
  private _loadRestrictor?: string; 
  public get loadRestrictor() {
    return this.getStringAttribute('load_restrictor');
  }
  public set loadRestrictor(value: string) {
    this._loadRestrictor = value;
  }
  public resetLoadRestrictor() {
    this._loadRestrictor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadRestrictorInput() {
    return this._loadRestrictor;
  }
}
export interface DataKustomizationOverlayLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#include_selectors DataKustomizationOverlay#include_selectors}
  */
  readonly includeSelectors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#pairs DataKustomizationOverlay#pairs}
  */
  readonly pairs: { [key: string]: string };
}

export function dataKustomizationOverlayLabelsToTerraform(struct?: DataKustomizationOverlayLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_selectors: cdktf.booleanToTerraform(struct!.includeSelectors),
    pairs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pairs),
  }
}


export function dataKustomizationOverlayLabelsToHclTerraform(struct?: DataKustomizationOverlayLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_selectors: {
      value: cdktf.booleanToHclTerraform(struct!.includeSelectors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pairs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pairs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSelectors = this._includeSelectors;
    }
    if (this._pairs !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairs = this._pairs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeSelectors = undefined;
      this._pairs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeSelectors = value.includeSelectors;
      this._pairs = value.pairs;
    }
  }

  // include_selectors - computed: false, optional: true, required: false
  private _includeSelectors?: boolean | cdktf.IResolvable; 
  public get includeSelectors() {
    return this.getBooleanAttribute('include_selectors');
  }
  public set includeSelectors(value: boolean | cdktf.IResolvable) {
    this._includeSelectors = value;
  }
  public resetIncludeSelectors() {
    this._includeSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSelectorsInput() {
    return this._includeSelectors;
  }

  // pairs - computed: false, optional: false, required: true
  private _pairs?: { [key: string]: string }; 
  public get pairs() {
    return this.getStringMapAttribute('pairs');
  }
  public set pairs(value: { [key: string]: string }) {
    this._pairs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairsInput() {
    return this._pairs;
  }
}

export class DataKustomizationOverlayLabelsList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayLabels[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayLabelsOutputReference {
    return new DataKustomizationOverlayLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayPatchesOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#allow_kind_change DataKustomizationOverlay#allow_kind_change}
  */
  readonly allowKindChange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#allow_name_change DataKustomizationOverlay#allow_name_change}
  */
  readonly allowNameChange?: boolean | cdktf.IResolvable;
}

export function dataKustomizationOverlayPatchesOptionsToTerraform(struct?: DataKustomizationOverlayPatchesOptionsOutputReference | DataKustomizationOverlayPatchesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_kind_change: cdktf.booleanToTerraform(struct!.allowKindChange),
    allow_name_change: cdktf.booleanToTerraform(struct!.allowNameChange),
  }
}


export function dataKustomizationOverlayPatchesOptionsToHclTerraform(struct?: DataKustomizationOverlayPatchesOptionsOutputReference | DataKustomizationOverlayPatchesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_kind_change: {
      value: cdktf.booleanToHclTerraform(struct!.allowKindChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_name_change: {
      value: cdktf.booleanToHclTerraform(struct!.allowNameChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayPatchesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayPatchesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowKindChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowKindChange = this._allowKindChange;
    }
    if (this._allowNameChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNameChange = this._allowNameChange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayPatchesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowKindChange = undefined;
      this._allowNameChange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowKindChange = value.allowKindChange;
      this._allowNameChange = value.allowNameChange;
    }
  }

  // allow_kind_change - computed: false, optional: true, required: false
  private _allowKindChange?: boolean | cdktf.IResolvable; 
  public get allowKindChange() {
    return this.getBooleanAttribute('allow_kind_change');
  }
  public set allowKindChange(value: boolean | cdktf.IResolvable) {
    this._allowKindChange = value;
  }
  public resetAllowKindChange() {
    this._allowKindChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowKindChangeInput() {
    return this._allowKindChange;
  }

  // allow_name_change - computed: false, optional: true, required: false
  private _allowNameChange?: boolean | cdktf.IResolvable; 
  public get allowNameChange() {
    return this.getBooleanAttribute('allow_name_change');
  }
  public set allowNameChange(value: boolean | cdktf.IResolvable) {
    this._allowNameChange = value;
  }
  public resetAllowNameChange() {
    this._allowNameChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNameChangeInput() {
    return this._allowNameChange;
  }
}
export interface DataKustomizationOverlayPatchesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#annotation_selector DataKustomizationOverlay#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#group DataKustomizationOverlay#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#kind DataKustomizationOverlay#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#label_selector DataKustomizationOverlay#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#version DataKustomizationOverlay#version}
  */
  readonly version?: string;
}

export function dataKustomizationOverlayPatchesTargetToTerraform(struct?: DataKustomizationOverlayPatchesTargetOutputReference | DataKustomizationOverlayPatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataKustomizationOverlayPatchesTargetToHclTerraform(struct?: DataKustomizationOverlayPatchesTargetOutputReference | DataKustomizationOverlayPatchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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

export class DataKustomizationOverlayPatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayPatchesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayPatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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
export interface DataKustomizationOverlayPatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#patch DataKustomizationOverlay#patch}
  */
  readonly patch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#path DataKustomizationOverlay#path}
  */
  readonly path?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#options DataKustomizationOverlay#options}
  */
  readonly options?: DataKustomizationOverlayPatchesOptions;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#target DataKustomizationOverlay#target}
  */
  readonly target?: DataKustomizationOverlayPatchesTarget;
}

export function dataKustomizationOverlayPatchesToTerraform(struct?: DataKustomizationOverlayPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    options: dataKustomizationOverlayPatchesOptionsToTerraform(struct!.options),
    target: dataKustomizationOverlayPatchesTargetToTerraform(struct!.target),
  }
}


export function dataKustomizationOverlayPatchesToHclTerraform(struct?: DataKustomizationOverlayPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
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
    options: {
      value: dataKustomizationOverlayPatchesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayPatchesOptionsList",
    },
    target: {
      value: dataKustomizationOverlayPatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayPatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._options.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patch = value.patch;
      this._path = value.path;
      this._options.internalValue = value.options;
      this._target.internalValue = value.target;
    }
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataKustomizationOverlayPatchesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataKustomizationOverlayPatchesOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataKustomizationOverlayPatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataKustomizationOverlayPatchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataKustomizationOverlayPatchesList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayPatches[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayPatchesOutputReference {
    return new DataKustomizationOverlayPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayReplacementsSourceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#create DataKustomizationOverlay#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#delimiter DataKustomizationOverlay#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#index DataKustomizationOverlay#index}
  */
  readonly index?: number;
}

export function dataKustomizationOverlayReplacementsSourceOptionsToTerraform(struct?: DataKustomizationOverlayReplacementsSourceOptionsOutputReference | DataKustomizationOverlayReplacementsSourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function dataKustomizationOverlayReplacementsSourceOptionsToHclTerraform(struct?: DataKustomizationOverlayReplacementsSourceOptionsOutputReference | DataKustomizationOverlayReplacementsSourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayReplacementsSourceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayReplacementsSourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplacementsSourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delimiter = undefined;
      this._index = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delimiter = value.delimiter;
      this._index = value.index;
    }
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

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}
export interface DataKustomizationOverlayReplacementsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#field_path DataKustomizationOverlay#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#group DataKustomizationOverlay#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#kind DataKustomizationOverlay#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#version DataKustomizationOverlay#version}
  */
  readonly version?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#options DataKustomizationOverlay#options}
  */
  readonly options?: DataKustomizationOverlayReplacementsSourceOptions;
}

export function dataKustomizationOverlayReplacementsSourceToTerraform(struct?: DataKustomizationOverlayReplacementsSourceOutputReference | DataKustomizationOverlayReplacementsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
    options: dataKustomizationOverlayReplacementsSourceOptionsToTerraform(struct!.options),
  }
}


export function dataKustomizationOverlayReplacementsSourceToHclTerraform(struct?: DataKustomizationOverlayReplacementsSourceOutputReference | DataKustomizationOverlayReplacementsSource): any {
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
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: dataKustomizationOverlayReplacementsSourceOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayReplacementsSourceOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayReplacementsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayReplacementsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplacementsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldPath = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldPath = value.fieldPath;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
      this._options.internalValue = value.options;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // options - computed: false, optional: true, required: false
  private _options = new DataKustomizationOverlayReplacementsSourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataKustomizationOverlayReplacementsSourceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataKustomizationOverlayReplacementsTargetOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#create DataKustomizationOverlay#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#delimiter DataKustomizationOverlay#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#index DataKustomizationOverlay#index}
  */
  readonly index?: number;
}

export function dataKustomizationOverlayReplacementsTargetOptionsToTerraform(struct?: DataKustomizationOverlayReplacementsTargetOptionsOutputReference | DataKustomizationOverlayReplacementsTargetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function dataKustomizationOverlayReplacementsTargetOptionsToHclTerraform(struct?: DataKustomizationOverlayReplacementsTargetOptionsOutputReference | DataKustomizationOverlayReplacementsTargetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayReplacementsTargetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayReplacementsTargetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplacementsTargetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delimiter = undefined;
      this._index = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delimiter = value.delimiter;
      this._index = value.index;
    }
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

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}
export interface DataKustomizationOverlayReplacementsTargetReject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#group DataKustomizationOverlay#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#kind DataKustomizationOverlay#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#version DataKustomizationOverlay#version}
  */
  readonly version?: string;
}

export function dataKustomizationOverlayReplacementsTargetRejectToTerraform(struct?: DataKustomizationOverlayReplacementsTargetReject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataKustomizationOverlayReplacementsTargetRejectToHclTerraform(struct?: DataKustomizationOverlayReplacementsTargetReject | cdktf.IResolvable): any {
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

export class DataKustomizationOverlayReplacementsTargetRejectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayReplacementsTargetReject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplacementsTargetReject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataKustomizationOverlayReplacementsTargetRejectList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayReplacementsTargetReject[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayReplacementsTargetRejectOutputReference {
    return new DataKustomizationOverlayReplacementsTargetRejectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayReplacementsTargetSelect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#group DataKustomizationOverlay#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#kind DataKustomizationOverlay#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#version DataKustomizationOverlay#version}
  */
  readonly version?: string;
}

export function dataKustomizationOverlayReplacementsTargetSelectToTerraform(struct?: DataKustomizationOverlayReplacementsTargetSelectOutputReference | DataKustomizationOverlayReplacementsTargetSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataKustomizationOverlayReplacementsTargetSelectToHclTerraform(struct?: DataKustomizationOverlayReplacementsTargetSelectOutputReference | DataKustomizationOverlayReplacementsTargetSelect): any {
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

export class DataKustomizationOverlayReplacementsTargetSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayReplacementsTargetSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplacementsTargetSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataKustomizationOverlayReplacementsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#field_paths DataKustomizationOverlay#field_paths}
  */
  readonly fieldPaths?: string[];
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#options DataKustomizationOverlay#options}
  */
  readonly options?: DataKustomizationOverlayReplacementsTargetOptions;
  /**
  * reject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#reject DataKustomizationOverlay#reject}
  */
  readonly reject?: DataKustomizationOverlayReplacementsTargetReject[] | cdktf.IResolvable;
  /**
  * select block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#select DataKustomizationOverlay#select}
  */
  readonly select?: DataKustomizationOverlayReplacementsTargetSelect;
}

export function dataKustomizationOverlayReplacementsTargetToTerraform(struct?: DataKustomizationOverlayReplacementsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldPaths),
    options: dataKustomizationOverlayReplacementsTargetOptionsToTerraform(struct!.options),
    reject: cdktf.listMapper(dataKustomizationOverlayReplacementsTargetRejectToTerraform, true)(struct!.reject),
    select: dataKustomizationOverlayReplacementsTargetSelectToTerraform(struct!.select),
  }
}


export function dataKustomizationOverlayReplacementsTargetToHclTerraform(struct?: DataKustomizationOverlayReplacementsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: dataKustomizationOverlayReplacementsTargetOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayReplacementsTargetOptionsList",
    },
    reject: {
      value: cdktf.listMapperHcl(dataKustomizationOverlayReplacementsTargetRejectToHclTerraform, true)(struct!.reject),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayReplacementsTargetRejectList",
    },
    select: {
      value: dataKustomizationOverlayReplacementsTargetSelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayReplacementsTargetSelectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayReplacementsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayReplacementsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPaths = this._fieldPaths;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._reject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reject = this._reject?.internalValue;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplacementsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPaths = undefined;
      this._options.internalValue = undefined;
      this._reject.internalValue = undefined;
      this._select.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPaths = value.fieldPaths;
      this._options.internalValue = value.options;
      this._reject.internalValue = value.reject;
      this._select.internalValue = value.select;
    }
  }

  // field_paths - computed: false, optional: true, required: false
  private _fieldPaths?: string[]; 
  public get fieldPaths() {
    return this.getListAttribute('field_paths');
  }
  public set fieldPaths(value: string[]) {
    this._fieldPaths = value;
  }
  public resetFieldPaths() {
    this._fieldPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathsInput() {
    return this._fieldPaths;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataKustomizationOverlayReplacementsTargetOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataKustomizationOverlayReplacementsTargetOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // reject - computed: false, optional: true, required: false
  private _reject = new DataKustomizationOverlayReplacementsTargetRejectList(this, "reject", false);
  public get reject() {
    return this._reject;
  }
  public putReject(value: DataKustomizationOverlayReplacementsTargetReject[] | cdktf.IResolvable) {
    this._reject.internalValue = value;
  }
  public resetReject() {
    this._reject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectInput() {
    return this._reject.internalValue;
  }

  // select - computed: false, optional: true, required: false
  private _select = new DataKustomizationOverlayReplacementsTargetSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: DataKustomizationOverlayReplacementsTargetSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}

export class DataKustomizationOverlayReplacementsTargetList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayReplacementsTarget[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayReplacementsTargetOutputReference {
    return new DataKustomizationOverlayReplacementsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayReplacements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#path DataKustomizationOverlay#path}
  */
  readonly path?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#source DataKustomizationOverlay#source}
  */
  readonly source?: DataKustomizationOverlayReplacementsSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#target DataKustomizationOverlay#target}
  */
  readonly target?: DataKustomizationOverlayReplacementsTarget[] | cdktf.IResolvable;
}

export function dataKustomizationOverlayReplacementsToTerraform(struct?: DataKustomizationOverlayReplacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: dataKustomizationOverlayReplacementsSourceToTerraform(struct!.source),
    target: cdktf.listMapper(dataKustomizationOverlayReplacementsTargetToTerraform, true)(struct!.target),
  }
}


export function dataKustomizationOverlayReplacementsToHclTerraform(struct?: DataKustomizationOverlayReplacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataKustomizationOverlayReplacementsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayReplacementsSourceList",
    },
    target: {
      value: cdktf.listMapperHcl(dataKustomizationOverlayReplacementsTargetToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayReplacementsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayReplacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayReplacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._source.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._source.internalValue = value.source;
      this._target.internalValue = value.target;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataKustomizationOverlayReplacementsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataKustomizationOverlayReplacementsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataKustomizationOverlayReplacementsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: DataKustomizationOverlayReplacementsTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataKustomizationOverlayReplacementsList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayReplacements[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayReplacementsOutputReference {
    return new DataKustomizationOverlayReplacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#count DataKustomizationOverlay#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
}

export function dataKustomizationOverlayReplicasToTerraform(struct?: DataKustomizationOverlayReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataKustomizationOverlayReplicasToHclTerraform(struct?: DataKustomizationOverlayReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataKustomizationOverlayReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._name = value.name;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class DataKustomizationOverlayReplicasList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayReplicas[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayReplicasOutputReference {
    return new DataKustomizationOverlayReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlaySecretGeneratorOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#annotations DataKustomizationOverlay#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#disable_name_suffix_hash DataKustomizationOverlay#disable_name_suffix_hash}
  */
  readonly disableNameSuffixHash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#labels DataKustomizationOverlay#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataKustomizationOverlaySecretGeneratorOptionsToTerraform(struct?: DataKustomizationOverlaySecretGeneratorOptionsOutputReference | DataKustomizationOverlaySecretGeneratorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    disable_name_suffix_hash: cdktf.booleanToTerraform(struct!.disableNameSuffixHash),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataKustomizationOverlaySecretGeneratorOptionsToHclTerraform(struct?: DataKustomizationOverlaySecretGeneratorOptionsOutputReference | DataKustomizationOverlaySecretGeneratorOptions): any {
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
    disable_name_suffix_hash: {
      value: cdktf.booleanToHclTerraform(struct!.disableNameSuffixHash),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlaySecretGeneratorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlaySecretGeneratorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._disableNameSuffixHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNameSuffixHash = this._disableNameSuffixHash;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlaySecretGeneratorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._disableNameSuffixHash = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._disableNameSuffixHash = value.disableNameSuffixHash;
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

  // disable_name_suffix_hash - computed: false, optional: true, required: false
  private _disableNameSuffixHash?: boolean | cdktf.IResolvable; 
  public get disableNameSuffixHash() {
    return this.getBooleanAttribute('disable_name_suffix_hash');
  }
  public set disableNameSuffixHash(value: boolean | cdktf.IResolvable) {
    this._disableNameSuffixHash = value;
  }
  public resetDisableNameSuffixHash() {
    this._disableNameSuffixHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNameSuffixHashInput() {
    return this._disableNameSuffixHash;
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
export interface DataKustomizationOverlaySecretGenerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#behavior DataKustomizationOverlay#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#envs DataKustomizationOverlay#envs}
  */
  readonly envs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#files DataKustomizationOverlay#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#literals DataKustomizationOverlay#literals}
  */
  readonly literals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#type DataKustomizationOverlay#type}
  */
  readonly type?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#options DataKustomizationOverlay#options}
  */
  readonly options?: DataKustomizationOverlaySecretGeneratorOptions;
}

export function dataKustomizationOverlaySecretGeneratorToTerraform(struct?: DataKustomizationOverlaySecretGenerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    envs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envs),
    files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.files),
    literals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.literals),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
    options: dataKustomizationOverlaySecretGeneratorOptionsToTerraform(struct!.options),
  }
}


export function dataKustomizationOverlaySecretGeneratorToHclTerraform(struct?: DataKustomizationOverlaySecretGenerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.files),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    literals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.literals),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    options: {
      value: dataKustomizationOverlaySecretGeneratorOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlaySecretGeneratorOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlaySecretGeneratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlaySecretGenerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._envs !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._literals !== undefined) {
      hasAnyValues = true;
      internalValueResult.literals = this._literals;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlaySecretGenerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._envs = undefined;
      this._files = undefined;
      this._literals = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._envs = value.envs;
      this._files = value.files;
      this._literals = value.literals;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
      this._options.internalValue = value.options;
    }
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: string[]; 
  public get envs() {
    return this.getListAttribute('envs');
  }
  public set envs(value: string[]) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // literals - computed: false, optional: true, required: false
  private _literals?: string[]; 
  public get literals() {
    return this.getListAttribute('literals');
  }
  public set literals(value: string[]) {
    this._literals = value;
  }
  public resetLiterals() {
    this._literals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalsInput() {
    return this._literals;
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

  // options - computed: false, optional: true, required: false
  private _options = new DataKustomizationOverlaySecretGeneratorOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataKustomizationOverlaySecretGeneratorOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DataKustomizationOverlaySecretGeneratorList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlaySecretGenerator[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlaySecretGeneratorOutputReference {
    return new DataKustomizationOverlaySecretGeneratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKustomizationOverlayVarsFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#field_path DataKustomizationOverlay#field_path}
  */
  readonly fieldPath?: string;
}

export function dataKustomizationOverlayVarsFieldRefToTerraform(struct?: DataKustomizationOverlayVarsFieldRefOutputReference | DataKustomizationOverlayVarsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataKustomizationOverlayVarsFieldRefToHclTerraform(struct?: DataKustomizationOverlayVarsFieldRefOutputReference | DataKustomizationOverlayVarsFieldRef): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayVarsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayVarsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayVarsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldPath = value.fieldPath;
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
}
export interface DataKustomizationOverlayVarsObjRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#api_version DataKustomizationOverlay#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#group DataKustomizationOverlay#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#kind DataKustomizationOverlay#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#namespace DataKustomizationOverlay#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#version DataKustomizationOverlay#version}
  */
  readonly version?: string;
}

export function dataKustomizationOverlayVarsObjRefToTerraform(struct?: DataKustomizationOverlayVarsObjRefOutputReference | DataKustomizationOverlayVarsObjRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataKustomizationOverlayVarsObjRefToHclTerraform(struct?: DataKustomizationOverlayVarsObjRefOutputReference | DataKustomizationOverlayVarsObjRef): any {
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
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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

export class DataKustomizationOverlayVarsObjRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKustomizationOverlayVarsObjRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayVarsObjRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataKustomizationOverlayVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#name DataKustomizationOverlay#name}
  */
  readonly name?: string;
  /**
  * field_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#field_ref DataKustomizationOverlay#field_ref}
  */
  readonly fieldRef?: DataKustomizationOverlayVarsFieldRef;
  /**
  * obj_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#obj_ref DataKustomizationOverlay#obj_ref}
  */
  readonly objRef?: DataKustomizationOverlayVarsObjRef;
}

export function dataKustomizationOverlayVarsToTerraform(struct?: DataKustomizationOverlayVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    field_ref: dataKustomizationOverlayVarsFieldRefToTerraform(struct!.fieldRef),
    obj_ref: dataKustomizationOverlayVarsObjRefToTerraform(struct!.objRef),
  }
}


export function dataKustomizationOverlayVarsToHclTerraform(struct?: DataKustomizationOverlayVars | cdktf.IResolvable): any {
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
    field_ref: {
      value: dataKustomizationOverlayVarsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayVarsFieldRefList",
    },
    obj_ref: {
      value: dataKustomizationOverlayVarsObjRefToHclTerraform(struct!.objRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataKustomizationOverlayVarsObjRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKustomizationOverlayVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKustomizationOverlayVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._objRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objRef = this._objRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKustomizationOverlayVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._fieldRef.internalValue = undefined;
      this._objRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._fieldRef.internalValue = value.fieldRef;
      this._objRef.internalValue = value.objRef;
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

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataKustomizationOverlayVarsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataKustomizationOverlayVarsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // obj_ref - computed: false, optional: true, required: false
  private _objRef = new DataKustomizationOverlayVarsObjRefOutputReference(this, "obj_ref");
  public get objRef() {
    return this._objRef;
  }
  public putObjRef(value: DataKustomizationOverlayVarsObjRef) {
    this._objRef.internalValue = value;
  }
  public resetObjRef() {
    this._objRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objRefInput() {
    return this._objRef.internalValue;
  }
}

export class DataKustomizationOverlayVarsList extends cdktf.ComplexList {
  public internalValue? : DataKustomizationOverlayVars[] | cdktf.IResolvable

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
  public get(index: number): DataKustomizationOverlayVarsOutputReference {
    return new DataKustomizationOverlayVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay kustomization_overlay}
*/
export class DataKustomizationOverlay extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kustomization_overlay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKustomizationOverlay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKustomizationOverlay to import
  * @param importFromId The id of the existing DataKustomizationOverlay that should be imported. Refer to the {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKustomizationOverlay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kustomization_overlay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs/data-sources/overlay kustomization_overlay} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKustomizationOverlayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKustomizationOverlayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kustomization_overlay',
      terraformGeneratorMetadata: {
        providerName: 'kustomization',
        providerVersion: '0.9.7',
        providerVersionConstraint: '0.9.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commonAnnotations = config.commonAnnotations;
    this._commonLabels = config.commonLabels;
    this._components = config.components;
    this._crds = config.crds;
    this._generators = config.generators;
    this._id = config.id;
    this._namePrefix = config.namePrefix;
    this._nameSuffix = config.nameSuffix;
    this._namespace = config.namespace;
    this._resources = config.resources;
    this._transformers = config.transformers;
    this._configMapGenerator.internalValue = config.configMapGenerator;
    this._generatorOptions.internalValue = config.generatorOptions;
    this._helmCharts.internalValue = config.helmCharts;
    this._helmGlobals.internalValue = config.helmGlobals;
    this._images.internalValue = config.images;
    this._kustomizeOptions.internalValue = config.kustomizeOptions;
    this._labels.internalValue = config.labels;
    this._patches.internalValue = config.patches;
    this._replacements.internalValue = config.replacements;
    this._replicas.internalValue = config.replicas;
    this._secretGenerator.internalValue = config.secretGenerator;
    this._vars.internalValue = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // crds - computed: false, optional: true, required: false
  private _crds?: string[]; 
  public get crds() {
    return this.getListAttribute('crds');
  }
  public set crds(value: string[]) {
    this._crds = value;
  }
  public resetCrds() {
    this._crds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdsInput() {
    return this._crds;
  }

  // generators - computed: false, optional: true, required: false
  private _generators?: string[]; 
  public get generators() {
    return this.getListAttribute('generators');
  }
  public set generators(value: string[]) {
    this._generators = value;
  }
  public resetGenerators() {
    this._generators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // ids_prio - computed: true, optional: false, required: false
  private _idsPrio = new cdktf.StringListList(this, "ids_prio", false);
  public get idsPrio() {
    return this._idsPrio;
  }

  // manifests - computed: true, optional: false, required: false
  private _manifests = new cdktf.StringMap(this, "manifests");
  public get manifests() {
    return this._manifests;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
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

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }

  // config_map_generator - computed: false, optional: true, required: false
  private _configMapGenerator = new DataKustomizationOverlayConfigMapGeneratorList(this, "config_map_generator", false);
  public get configMapGenerator() {
    return this._configMapGenerator;
  }
  public putConfigMapGenerator(value: DataKustomizationOverlayConfigMapGenerator[] | cdktf.IResolvable) {
    this._configMapGenerator.internalValue = value;
  }
  public resetConfigMapGenerator() {
    this._configMapGenerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapGeneratorInput() {
    return this._configMapGenerator.internalValue;
  }

  // generator_options - computed: false, optional: true, required: false
  private _generatorOptions = new DataKustomizationOverlayGeneratorOptionsOutputReference(this, "generator_options");
  public get generatorOptions() {
    return this._generatorOptions;
  }
  public putGeneratorOptions(value: DataKustomizationOverlayGeneratorOptions) {
    this._generatorOptions.internalValue = value;
  }
  public resetGeneratorOptions() {
    this._generatorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorOptionsInput() {
    return this._generatorOptions.internalValue;
  }

  // helm_charts - computed: false, optional: true, required: false
  private _helmCharts = new DataKustomizationOverlayHelmChartsList(this, "helm_charts", false);
  public get helmCharts() {
    return this._helmCharts;
  }
  public putHelmCharts(value: DataKustomizationOverlayHelmCharts[] | cdktf.IResolvable) {
    this._helmCharts.internalValue = value;
  }
  public resetHelmCharts() {
    this._helmCharts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmChartsInput() {
    return this._helmCharts.internalValue;
  }

  // helm_globals - computed: false, optional: true, required: false
  private _helmGlobals = new DataKustomizationOverlayHelmGlobalsOutputReference(this, "helm_globals");
  public get helmGlobals() {
    return this._helmGlobals;
  }
  public putHelmGlobals(value: DataKustomizationOverlayHelmGlobals) {
    this._helmGlobals.internalValue = value;
  }
  public resetHelmGlobals() {
    this._helmGlobals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmGlobalsInput() {
    return this._helmGlobals.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new DataKustomizationOverlayImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: DataKustomizationOverlayImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // kustomize_options - computed: false, optional: true, required: false
  private _kustomizeOptions = new DataKustomizationOverlayKustomizeOptionsOutputReference(this, "kustomize_options");
  public get kustomizeOptions() {
    return this._kustomizeOptions;
  }
  public putKustomizeOptions(value: DataKustomizationOverlayKustomizeOptions) {
    this._kustomizeOptions.internalValue = value;
  }
  public resetKustomizeOptions() {
    this._kustomizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeOptionsInput() {
    return this._kustomizeOptions.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataKustomizationOverlayLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataKustomizationOverlayLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataKustomizationOverlayPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataKustomizationOverlayPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // replacements - computed: false, optional: true, required: false
  private _replacements = new DataKustomizationOverlayReplacementsList(this, "replacements", false);
  public get replacements() {
    return this._replacements;
  }
  public putReplacements(value: DataKustomizationOverlayReplacements[] | cdktf.IResolvable) {
    this._replacements.internalValue = value;
  }
  public resetReplacements() {
    this._replacements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementsInput() {
    return this._replacements.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new DataKustomizationOverlayReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: DataKustomizationOverlayReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }

  // secret_generator - computed: false, optional: true, required: false
  private _secretGenerator = new DataKustomizationOverlaySecretGeneratorList(this, "secret_generator", false);
  public get secretGenerator() {
    return this._secretGenerator;
  }
  public putSecretGenerator(value: DataKustomizationOverlaySecretGenerator[] | cdktf.IResolvable) {
    this._secretGenerator.internalValue = value;
  }
  public resetSecretGenerator() {
    this._secretGenerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretGeneratorInput() {
    return this._secretGenerator.internalValue;
  }

  // vars - computed: false, optional: true, required: false
  private _vars = new DataKustomizationOverlayVarsList(this, "vars", false);
  public get vars() {
    return this._vars;
  }
  public putVars(value: DataKustomizationOverlayVars[] | cdktf.IResolvable) {
    this._vars.internalValue = value;
  }
  public resetVars() {
    this._vars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._commonAnnotations),
      common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._commonLabels),
      components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._components),
      crds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crds),
      generators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._generators),
      id: cdktf.stringToTerraform(this._id),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      name_suffix: cdktf.stringToTerraform(this._nameSuffix),
      namespace: cdktf.stringToTerraform(this._namespace),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transformers),
      config_map_generator: cdktf.listMapper(dataKustomizationOverlayConfigMapGeneratorToTerraform, true)(this._configMapGenerator.internalValue),
      generator_options: dataKustomizationOverlayGeneratorOptionsToTerraform(this._generatorOptions.internalValue),
      helm_charts: cdktf.listMapper(dataKustomizationOverlayHelmChartsToTerraform, true)(this._helmCharts.internalValue),
      helm_globals: dataKustomizationOverlayHelmGlobalsToTerraform(this._helmGlobals.internalValue),
      images: cdktf.listMapper(dataKustomizationOverlayImagesToTerraform, true)(this._images.internalValue),
      kustomize_options: dataKustomizationOverlayKustomizeOptionsToTerraform(this._kustomizeOptions.internalValue),
      labels: cdktf.listMapper(dataKustomizationOverlayLabelsToTerraform, true)(this._labels.internalValue),
      patches: cdktf.listMapper(dataKustomizationOverlayPatchesToTerraform, true)(this._patches.internalValue),
      replacements: cdktf.listMapper(dataKustomizationOverlayReplacementsToTerraform, true)(this._replacements.internalValue),
      replicas: cdktf.listMapper(dataKustomizationOverlayReplicasToTerraform, true)(this._replicas.internalValue),
      secret_generator: cdktf.listMapper(dataKustomizationOverlaySecretGeneratorToTerraform, true)(this._secretGenerator.internalValue),
      vars: cdktf.listMapper(dataKustomizationOverlayVarsToTerraform, true)(this._vars.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      common_annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._commonAnnotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      common_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._commonLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._components),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      crds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      generators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._generators),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_suffix: {
        value: cdktf.stringToHclTerraform(this._nameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transformers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transformers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_map_generator: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayConfigMapGeneratorToHclTerraform, true)(this._configMapGenerator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayConfigMapGeneratorList",
      },
      generator_options: {
        value: dataKustomizationOverlayGeneratorOptionsToHclTerraform(this._generatorOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayGeneratorOptionsList",
      },
      helm_charts: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayHelmChartsToHclTerraform, true)(this._helmCharts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayHelmChartsList",
      },
      helm_globals: {
        value: dataKustomizationOverlayHelmGlobalsToHclTerraform(this._helmGlobals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayHelmGlobalsList",
      },
      images: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayImagesToHclTerraform, true)(this._images.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayImagesList",
      },
      kustomize_options: {
        value: dataKustomizationOverlayKustomizeOptionsToHclTerraform(this._kustomizeOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayKustomizeOptionsList",
      },
      labels: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayLabelsList",
      },
      patches: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayPatchesToHclTerraform, true)(this._patches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayPatchesList",
      },
      replacements: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayReplacementsToHclTerraform, true)(this._replacements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayReplacementsList",
      },
      replicas: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayReplicasToHclTerraform, true)(this._replicas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayReplicasList",
      },
      secret_generator: {
        value: cdktf.listMapperHcl(dataKustomizationOverlaySecretGeneratorToHclTerraform, true)(this._secretGenerator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlaySecretGeneratorList",
      },
      vars: {
        value: cdktf.listMapperHcl(dataKustomizationOverlayVarsToHclTerraform, true)(this._vars.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataKustomizationOverlayVarsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
