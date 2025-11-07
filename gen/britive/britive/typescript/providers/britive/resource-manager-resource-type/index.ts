// https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerResourceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Britive resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#description ResourceManagerResourceType#description}
  */
  readonly description?: string;
  /**
  * Icon of Britive resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#icon ResourceManagerResourceType#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#id ResourceManagerResourceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of Britive resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#name ResourceManagerResourceType#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#parameters ResourceManagerResourceType#parameters}
  */
  readonly parameters?: ResourceManagerResourceTypeParameters[] | cdktf.IResolvable;
}
export interface ResourceManagerResourceTypeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#is_mandatory ResourceManagerResourceType#is_mandatory}
  */
  readonly isMandatory: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#param_name ResourceManagerResourceType#param_name}
  */
  readonly paramName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#param_type ResourceManagerResourceType#param_type}
  */
  readonly paramType: string;
}

export function resourceManagerResourceTypeParametersToTerraform(struct?: ResourceManagerResourceTypeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_mandatory: cdktf.booleanToTerraform(struct!.isMandatory),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    param_type: cdktf.stringToTerraform(struct!.paramType),
  }
}


export function resourceManagerResourceTypeParametersToHclTerraform(struct?: ResourceManagerResourceTypeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.isMandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_type: {
      value: cdktf.stringToHclTerraform(struct!.paramType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerResourceTypeParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceManagerResourceTypeParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isMandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMandatory = this._isMandatory;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._paramType !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramType = this._paramType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerResourceTypeParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isMandatory = undefined;
      this._paramName = undefined;
      this._paramType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isMandatory = value.isMandatory;
      this._paramName = value.paramName;
      this._paramType = value.paramType;
    }
  }

  // is_mandatory - computed: false, optional: false, required: true
  private _isMandatory?: boolean | cdktf.IResolvable; 
  public get isMandatory() {
    return this.getBooleanAttribute('is_mandatory');
  }
  public set isMandatory(value: boolean | cdktf.IResolvable) {
    this._isMandatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMandatoryInput() {
    return this._isMandatory;
  }

  // param_name - computed: false, optional: false, required: true
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // param_type - computed: false, optional: false, required: true
  private _paramType?: string; 
  public get paramType() {
    return this.getStringAttribute('param_type');
  }
  public set paramType(value: string) {
    this._paramType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramTypeInput() {
    return this._paramType;
  }
}

export class ResourceManagerResourceTypeParametersList extends cdktf.ComplexList {
  public internalValue? : ResourceManagerResourceTypeParameters[] | cdktf.IResolvable

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
  public get(index: number): ResourceManagerResourceTypeParametersOutputReference {
    return new ResourceManagerResourceTypeParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type britive_resource_manager_resource_type}
*/
export class ResourceManagerResourceType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_resource_manager_resource_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerResourceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerResourceType to import
  * @param importFromId The id of the existing ResourceManagerResourceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerResourceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_resource_manager_resource_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/resource_manager_resource_type britive_resource_manager_resource_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerResourceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerResourceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_resource_manager_resource_type',
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
    this._icon = config.icon;
    this._id = config.id;
    this._name = config.name;
    this._parameters.internalValue = config.parameters;
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

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ResourceManagerResourceTypeParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ResourceManagerResourceTypeParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.listMapper(resourceManagerResourceTypeParametersToTerraform, true)(this._parameters.internalValue),
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
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      parameters: {
        value: cdktf.listMapperHcl(resourceManagerResourceTypeParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceManagerResourceTypeParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
