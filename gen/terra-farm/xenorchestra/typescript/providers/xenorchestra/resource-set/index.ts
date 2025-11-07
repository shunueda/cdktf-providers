// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#id ResourceSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the resource set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#name ResourceSet#name}
  */
  readonly name: string;
  /**
  * The uuids of the objects that are within scope of the resource set. A minimum of a storage repository, network and VM template are required for users to launch VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#objects ResourceSet#objects}
  */
  readonly objects?: string[];
  /**
  * The uuids of the user accounts that should have access to the resource set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#subjects ResourceSet#subjects}
  */
  readonly subjects?: string[];
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#limit ResourceSet#limit}
  */
  readonly limit: ResourceSetLimit[] | cdktf.IResolvable;
}
export interface ResourceSetLimit {
  /**
  * The numerical limit for the given type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#quantity ResourceSet#quantity}
  */
  readonly quantity: number;
  /**
  * The type of resource set limit. Must be cpus, memory or disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#type ResourceSet#type}
  */
  readonly type: string;
}

export function resourceSetLimitToTerraform(struct?: ResourceSetLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity: cdktf.numberToTerraform(struct!.quantity),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceSetLimitToHclTerraform(struct?: ResourceSetLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
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

export class ResourceSetLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceSetLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceSetLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantity = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantity = value.quantity;
      this._type = value.type;
    }
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
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

export class ResourceSetLimitList extends cdktf.ComplexList {
  public internalValue? : ResourceSetLimit[] | cdktf.IResolvable

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
  public get(index: number): ResourceSetLimitOutputReference {
    return new ResourceSetLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set xenorchestra_resource_set}
*/
export class ResourceSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_resource_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceSet to import
  * @param importFromId The id of the existing ResourceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_resource_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/resource_set xenorchestra_resource_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_resource_set',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1'
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
    this._objects = config.objects;
    this._subjects = config.subjects;
    this._limit.internalValue = config.limit;
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

  // objects - computed: false, optional: true, required: false
  private _objects?: string[]; 
  public get objects() {
    return cdktf.Fn.tolist(this.getListAttribute('objects'));
  }
  public set objects(value: string[]) {
    this._objects = value;
  }
  public resetObjects() {
    this._objects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects?: string[]; 
  public get subjects() {
    return cdktf.Fn.tolist(this.getListAttribute('subjects'));
  }
  public set subjects(value: string[]) {
    this._subjects = value;
  }
  public resetSubjects() {
    this._subjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects;
  }

  // limit - computed: false, optional: false, required: true
  private _limit = new ResourceSetLimitList(this, "limit", true);
  public get limit() {
    return this._limit;
  }
  public putLimit(value: ResourceSetLimit[] | cdktf.IResolvable) {
    this._limit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      objects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objects),
      subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjects),
      limit: cdktf.listMapper(resourceSetLimitToTerraform, true)(this._limit.internalValue),
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
      objects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subjects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      limit: {
        value: cdktf.listMapperHcl(resourceSetLimitToHclTerraform, true)(this._limit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceSetLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
