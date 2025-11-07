// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomPolicyTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#id CustomPolicyTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the custom policy template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#name CustomPolicyTemplate#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#meta CustomPolicyTemplate#meta}
  */
  readonly meta?: CustomPolicyTemplateMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#spec CustomPolicyTemplate#spec}
  */
  readonly spec: CustomPolicyTemplateSpec;
}
export interface CustomPolicyTemplateMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#annotations CustomPolicyTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#description CustomPolicyTemplate#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#labels CustomPolicyTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function customPolicyTemplateMetaToTerraform(struct?: CustomPolicyTemplateMetaOutputReference | CustomPolicyTemplateMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function customPolicyTemplateMetaToHclTerraform(struct?: CustomPolicyTemplateMetaOutputReference | CustomPolicyTemplateMeta): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicyTemplateMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyTemplateMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicyTemplateMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface CustomPolicyTemplateSpecDataInventory {
  /**
  * API resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#group CustomPolicyTemplate#group}
  */
  readonly group: string;
  /**
  * API resource kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#kind CustomPolicyTemplate#kind}
  */
  readonly kind: string;
  /**
  * API resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#version CustomPolicyTemplate#version}
  */
  readonly version: string;
}

export function customPolicyTemplateSpecDataInventoryToTerraform(struct?: CustomPolicyTemplateSpecDataInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function customPolicyTemplateSpecDataInventoryToHclTerraform(struct?: CustomPolicyTemplateSpecDataInventory | cdktf.IResolvable): any {
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

export class CustomPolicyTemplateSpecDataInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicyTemplateSpecDataInventory | cdktf.IResolvable | undefined {
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicyTemplateSpecDataInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._version = value.version;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

export class CustomPolicyTemplateSpecDataInventoryList extends cdktf.ComplexList {
  public internalValue? : CustomPolicyTemplateSpecDataInventory[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicyTemplateSpecDataInventoryOutputReference {
    return new CustomPolicyTemplateSpecDataInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicyTemplateSpec {
  /**
  * Flag representing whether the custom policy template is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#is_deprecated CustomPolicyTemplate#is_deprecated}
  */
  readonly isDeprecated?: boolean | cdktf.IResolvable;
  /**
  * The type of Kubernetes resource encoded in Object.
  * Currently, we only support OPAGatekeeper based 'ConstraintTemplate' object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#object_type CustomPolicyTemplate#object_type}
  */
  readonly objectType?: string;
  /**
  * YAML formatted Kubernetes resource.
  * The Kubernetes object has to be of the type defined in ObjectType ('ConstraintTemplate').
  * The object name must match the name of the wrapping policy template.
  * This will be applied on the cluster after a policy is created using this version of the template.
  * This contains the latest version of the object. For previous versions, check Versions API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#template_manifest CustomPolicyTemplate#template_manifest}
  */
  readonly templateManifest: string;
  /**
  * The type of policy template.
  * Currently, we only support 'OPAGatekeeper' based policy templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#template_type CustomPolicyTemplate#template_type}
  */
  readonly templateType?: string;
  /**
  * data_inventory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#data_inventory CustomPolicyTemplate#data_inventory}
  */
  readonly dataInventory?: CustomPolicyTemplateSpecDataInventory[] | cdktf.IResolvable;
}

export function customPolicyTemplateSpecToTerraform(struct?: CustomPolicyTemplateSpecOutputReference | CustomPolicyTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_deprecated: cdktf.booleanToTerraform(struct!.isDeprecated),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    template_manifest: cdktf.stringToTerraform(struct!.templateManifest),
    template_type: cdktf.stringToTerraform(struct!.templateType),
    data_inventory: cdktf.listMapper(customPolicyTemplateSpecDataInventoryToTerraform, true)(struct!.dataInventory),
  }
}


export function customPolicyTemplateSpecToHclTerraform(struct?: CustomPolicyTemplateSpecOutputReference | CustomPolicyTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.isDeprecated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_manifest: {
      value: cdktf.stringToHclTerraform(struct!.templateManifest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_type: {
      value: cdktf.stringToHclTerraform(struct!.templateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_inventory: {
      value: cdktf.listMapperHcl(customPolicyTemplateSpecDataInventoryToHclTerraform, true)(struct!.dataInventory),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicyTemplateSpecDataInventoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicyTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDeprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeprecated = this._isDeprecated;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._templateManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateManifest = this._templateManifest;
    }
    if (this._templateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateType = this._templateType;
    }
    if (this._dataInventory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataInventory = this._dataInventory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicyTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDeprecated = undefined;
      this._objectType = undefined;
      this._templateManifest = undefined;
      this._templateType = undefined;
      this._dataInventory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDeprecated = value.isDeprecated;
      this._objectType = value.objectType;
      this._templateManifest = value.templateManifest;
      this._templateType = value.templateType;
      this._dataInventory.internalValue = value.dataInventory;
    }
  }

  // is_deprecated - computed: false, optional: true, required: false
  private _isDeprecated?: boolean | cdktf.IResolvable; 
  public get isDeprecated() {
    return this.getBooleanAttribute('is_deprecated');
  }
  public set isDeprecated(value: boolean | cdktf.IResolvable) {
    this._isDeprecated = value;
  }
  public resetIsDeprecated() {
    this._isDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeprecatedInput() {
    return this._isDeprecated;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // template_manifest - computed: false, optional: false, required: true
  private _templateManifest?: string; 
  public get templateManifest() {
    return this.getStringAttribute('template_manifest');
  }
  public set templateManifest(value: string) {
    this._templateManifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateManifestInput() {
    return this._templateManifest;
  }

  // template_type - computed: false, optional: true, required: false
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  public resetTemplateType() {
    this._templateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // data_inventory - computed: false, optional: true, required: false
  private _dataInventory = new CustomPolicyTemplateSpecDataInventoryList(this, "data_inventory", false);
  public get dataInventory() {
    return this._dataInventory;
  }
  public putDataInventory(value: CustomPolicyTemplateSpecDataInventory[] | cdktf.IResolvable) {
    this._dataInventory.internalValue = value;
  }
  public resetDataInventory() {
    this._dataInventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInventoryInput() {
    return this._dataInventory.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template tanzu-mission-control_custom_policy_template}
*/
export class CustomPolicyTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_custom_policy_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomPolicyTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomPolicyTemplate to import
  * @param importFromId The id of the existing CustomPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomPolicyTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_custom_policy_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/custom_policy_template tanzu-mission-control_custom_policy_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomPolicyTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CustomPolicyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_custom_policy_template',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // meta - computed: false, optional: true, required: false
  private _meta = new CustomPolicyTemplateMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: CustomPolicyTemplateMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CustomPolicyTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CustomPolicyTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      meta: customPolicyTemplateMetaToTerraform(this._meta.internalValue),
      spec: customPolicyTemplateSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: customPolicyTemplateMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomPolicyTemplateMetaList",
      },
      spec: {
        value: customPolicyTemplateSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomPolicyTemplateSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
