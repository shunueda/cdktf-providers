// https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#data ObjectResource#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#deep_reference ObjectResource#deep_reference}
  */
  readonly deepReference?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#export_types ObjectResource#export_types}
  */
  readonly exportTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#id ObjectResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#name ObjectResource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#space ObjectResource#space}
  */
  readonly space?: string;
  /**
  * export_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#export_objects ObjectResource#export_objects}
  */
  readonly exportObjects?: ObjectResourceExportObjects[] | cdktf.IResolvable;
}
export interface ObjectResourceExportObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#id ObjectResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#type ObjectResource#type}
  */
  readonly type: string;
}

export function objectResourceExportObjectsToTerraform(struct?: ObjectResourceExportObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectResourceExportObjectsToHclTerraform(struct?: ObjectResourceExportObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class ObjectResourceExportObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectResourceExportObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectResourceExportObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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

export class ObjectResourceExportObjectsList extends cdktf.ComplexList {
  public internalValue? : ObjectResourceExportObjects[] | cdktf.IResolvable

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
  public get(index: number): ObjectResourceExportObjectsOutputReference {
    return new ObjectResourceExportObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object kibana_object}
*/
export class ObjectResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kibana_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectResource to import
  * @param importFromId The id of the existing ObjectResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kibana_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/object kibana_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'kibana_object',
      terraformGeneratorMetadata: {
        providerName: 'kibana',
        providerVersion: '8.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
    this._deepReference = config.deepReference;
    this._exportTypes = config.exportTypes;
    this._id = config.id;
    this._name = config.name;
    this._space = config.space;
    this._exportObjects.internalValue = config.exportObjects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // deep_reference - computed: false, optional: true, required: false
  private _deepReference?: boolean | cdktf.IResolvable; 
  public get deepReference() {
    return this.getBooleanAttribute('deep_reference');
  }
  public set deepReference(value: boolean | cdktf.IResolvable) {
    this._deepReference = value;
  }
  public resetDeepReference() {
    this._deepReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepReferenceInput() {
    return this._deepReference;
  }

  // export_types - computed: false, optional: true, required: false
  private _exportTypes?: string[]; 
  public get exportTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('export_types'));
  }
  public set exportTypes(value: string[]) {
    this._exportTypes = value;
  }
  public resetExportTypes() {
    this._exportTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTypesInput() {
    return this._exportTypes;
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

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // export_objects - computed: false, optional: true, required: false
  private _exportObjects = new ObjectResourceExportObjectsList(this, "export_objects", true);
  public get exportObjects() {
    return this._exportObjects;
  }
  public putExportObjects(value: ObjectResourceExportObjects[] | cdktf.IResolvable) {
    this._exportObjects.internalValue = value;
  }
  public resetExportObjects() {
    this._exportObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportObjectsInput() {
    return this._exportObjects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.stringToTerraform(this._data),
      deep_reference: cdktf.booleanToTerraform(this._deepReference),
      export_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportTypes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      space: cdktf.stringToTerraform(this._space),
      export_objects: cdktf.listMapper(objectResourceExportObjectsToTerraform, true)(this._exportObjects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deep_reference: {
        value: cdktf.booleanToHclTerraform(this._deepReference),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_objects: {
        value: cdktf.listMapperHcl(objectResourceExportObjectsToHclTerraform, true)(this._exportObjects.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObjectResourceExportObjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
