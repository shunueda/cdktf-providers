// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#metadata DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata;
  /**
  * ComponentClassDefinitionSpec defines the desired state of ComponentClassDefinition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#spec DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#annotations DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#labels DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses {
  /**
  * args are variable's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#args DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * the CPU of the class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#cpu DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * the memory of the class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#memory DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
  /**
  * name is the class name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesToTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
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

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._cpu = undefined;
      this._memory = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._cpu = value.cpu;
      this._memory = value.memory;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesOutputReference {
    return new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries {
  /**
  * classes are definitions of classes that come in two forms. In the first form, only ComponentClass.Args need to be defined, and the complete class definition is generated by rendering the ComponentClassGroup.Template and Name. In the second form, the Name, CPU and Memory must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#classes DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#classes}
  */
  readonly classes?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses[] | cdktf.IResolvable;
  /**
  * namingTemplate is a template that uses the Go template syntax and allows for referencing variables defined in ComponentClassGroup.Template. This enables dynamic generation of class names. For example: name: 'general-{{ .cpu }}c{{ .memory }}g'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#naming_template DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#naming_template}
  */
  readonly namingTemplate?: string;
}

export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesToTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesToTerraform, false)(struct!.classes),
    naming_template: cdktf.stringToTerraform(struct!.namingTemplate),
  }
}


export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesToHclTerraform, false)(struct!.classes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesList",
    },
    naming_template: {
      value: cdktf.stringToHclTerraform(struct!.namingTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes?.internalValue;
    }
    if (this._namingTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingTemplate = this._namingTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes.internalValue = undefined;
      this._namingTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classes.internalValue = value.classes;
      this._namingTemplate = value.namingTemplate;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes = new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClassesList(this, "classes", false);
  public get classes() {
    return this._classes;
  }
  public putClasses(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesClasses[] | cdktf.IResolvable) {
    this._classes.internalValue = value;
  }
  public resetClasses() {
    this._classes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes.internalValue;
  }

  // naming_template - computed: false, optional: true, required: false
  private _namingTemplate?: string; 
  public get namingTemplate() {
    return this.getStringAttribute('naming_template');
  }
  public set namingTemplate(value: string) {
    this._namingTemplate = value;
  }
  public resetNamingTemplate() {
    this._namingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namingTemplateInput() {
    return this._namingTemplate;
  }
}

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesOutputReference {
    return new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups {
  /**
  * series is a series of class definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#series DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#series}
  */
  readonly series?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries[] | cdktf.IResolvable;
  /**
  * template is a class definition template that uses the Go template syntax and allows for variable declaration. When defining a class in Series, specifying the variable's value is sufficient, as the complete class definition will be generated through rendering the template. For example: ```yaml template: | cpu: '{{ or .cpu 1 }}' memory: '{{ or .memory 4 }}Gi' ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#template DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#template}
  */
  readonly template?: string;
  /**
  * vars defines the variables declared in the template and will be used to generating the complete class definition by render the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#vars DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#vars}
  */
  readonly vars?: string[];
}

export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsToTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesToTerraform, false)(struct!.series),
    template: cdktf.stringToTerraform(struct!.template),
    vars: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vars),
  }
}


export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesToHclTerraform, false)(struct!.series),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesList",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vars: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vars),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._series?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.series = this._series?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vars !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._series.internalValue = undefined;
      this._template = undefined;
      this._vars = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._series.internalValue = value.series;
      this._template = value.template;
      this._vars = value.vars;
    }
  }

  // series - computed: false, optional: true, required: false
  private _series = new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeriesList(this, "series", false);
  public get series() {
    return this._series;
  }
  public putSeries(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsSeries[] | cdktf.IResolvable) {
    this._series.internalValue = value;
  }
  public resetSeries() {
    this._series.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: string[]; 
  public get vars() {
    return this.getListAttribute('vars');
  }
  public set vars(value: string[]) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }
}

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsOutputReference {
    return new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec {
  /**
  * group defines a list of class series that conform to the same constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#groups DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest#groups}
  */
  readonly groups?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsToTerraform, false)(struct!.groups),
  }
}


export function dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups.internalValue = value.groups;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest k8s_apps_kubeblocks_io_component_class_definition_v1alpha1_manifest}
*/
export class DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_component_class_definition_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_component_class_definition_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_kubeblocks_io_component_class_definition_v1alpha1_manifest k8s_apps_kubeblocks_io_component_class_definition_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_component_class_definition_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoComponentClassDefinitionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
