// https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of britive resource manager profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#description ResourceManagerProfile#description}
  */
  readonly description?: string;
  /**
  * Expiration duration of resource manager profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#expiration_duration ResourceManagerProfile#expiration_duration}
  */
  readonly expirationDuration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#id ResourceManagerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the britive resource manager profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#name ResourceManagerProfile#name}
  */
  readonly name: string;
  /**
  * associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#associations ResourceManagerProfile#associations}
  */
  readonly associations?: ResourceManagerProfileAssociations[] | cdktf.IResolvable;
}
export interface ResourceManagerProfileResourceLabelColorMap {
}

export function resourceManagerProfileResourceLabelColorMapToTerraform(struct?: ResourceManagerProfileResourceLabelColorMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resourceManagerProfileResourceLabelColorMapToHclTerraform(struct?: ResourceManagerProfileResourceLabelColorMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResourceManagerProfileResourceLabelColorMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ResourceManagerProfileResourceLabelColorMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerProfileResourceLabelColorMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color_code - computed: true, optional: false, required: false
  public get colorCode() {
    return this.getStringAttribute('color_code');
  }

  // label_key - computed: true, optional: false, required: false
  public get labelKey() {
    return this.getStringAttribute('label_key');
  }
}

export class ResourceManagerProfileResourceLabelColorMapList extends cdktf.ComplexList {

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
  public get(index: number): ResourceManagerProfileResourceLabelColorMapOutputReference {
    return new ResourceManagerProfileResourceLabelColorMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceManagerProfileAssociations {
  /**
  * Resource label name for association
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#label_key ResourceManagerProfile#label_key}
  */
  readonly labelKey: string;
  /**
  * Values of resource label for association
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#values ResourceManagerProfile#values}
  */
  readonly values: string[];
}

export function resourceManagerProfileAssociationsToTerraform(struct?: ResourceManagerProfileAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_key: cdktf.stringToTerraform(struct!.labelKey),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceManagerProfileAssociationsToHclTerraform(struct?: ResourceManagerProfileAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_key: {
      value: cdktf.stringToHclTerraform(struct!.labelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerProfileAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceManagerProfileAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelKey = this._labelKey;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerProfileAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelKey = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelKey = value.labelKey;
      this._values = value.values;
    }
  }

  // label_key - computed: false, optional: false, required: true
  private _labelKey?: string; 
  public get labelKey() {
    return this.getStringAttribute('label_key');
  }
  public set labelKey(value: string) {
    this._labelKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelKeyInput() {
    return this._labelKey;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceManagerProfileAssociationsList extends cdktf.ComplexList {
  public internalValue? : ResourceManagerProfileAssociations[] | cdktf.IResolvable

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
  public get(index: number): ResourceManagerProfileAssociationsOutputReference {
    return new ResourceManagerProfileAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile britive_resource_manager_profile}
*/
export class ResourceManagerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_resource_manager_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerProfile to import
  * @param importFromId The id of the existing ResourceManagerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_resource_manager_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_profile britive_resource_manager_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_resource_manager_profile',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._expirationDuration = config.expirationDuration;
    this._id = config.id;
    this._name = config.name;
    this._associations.internalValue = config.associations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expiration_duration - computed: false, optional: false, required: true
  private _expirationDuration?: number; 
  public get expirationDuration() {
    return this.getNumberAttribute('expiration_duration');
  }
  public set expirationDuration(value: number) {
    this._expirationDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDurationInput() {
    return this._expirationDuration;
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

  // resource_label_color_map - computed: true, optional: false, required: false
  private _resourceLabelColorMap = new ResourceManagerProfileResourceLabelColorMapList(this, "resource_label_color_map", true);
  public get resourceLabelColorMap() {
    return this._resourceLabelColorMap;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // associations - computed: false, optional: true, required: false
  private _associations = new ResourceManagerProfileAssociationsList(this, "associations", true);
  public get associations() {
    return this._associations;
  }
  public putAssociations(value: ResourceManagerProfileAssociations[] | cdktf.IResolvable) {
    this._associations.internalValue = value;
  }
  public resetAssociations() {
    this._associations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationsInput() {
    return this._associations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      expiration_duration: cdktf.numberToTerraform(this._expirationDuration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      associations: cdktf.listMapper(resourceManagerProfileAssociationsToTerraform, true)(this._associations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_duration: {
        value: cdktf.numberToHclTerraform(this._expirationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      associations: {
        value: cdktf.listMapperHcl(resourceManagerProfileAssociationsToHclTerraform, true)(this._associations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceManagerProfileAssociationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
