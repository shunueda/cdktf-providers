// https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CopyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#create_new_copies CopyObject#create_new_copies}
  */
  readonly createNewCopies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#force_update CopyObject#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#id CopyObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#include_reference CopyObject#include_reference}
  */
  readonly includeReference?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#name CopyObject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#overwrite CopyObject#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#source_space CopyObject#source_space}
  */
  readonly sourceSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#target_spaces CopyObject#target_spaces}
  */
  readonly targetSpaces: string[];
  /**
  * object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#object CopyObject#object}
  */
  readonly object: CopyObjectObject[] | cdktf.IResolvable;
}
export interface CopyObjectObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#id CopyObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#type CopyObject#type}
  */
  readonly type: string;
}

export function copyObjectObjectToTerraform(struct?: CopyObjectObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function copyObjectObjectToHclTerraform(struct?: CopyObjectObject | cdktf.IResolvable): any {
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

export class CopyObjectObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CopyObjectObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CopyObjectObject | cdktf.IResolvable | undefined) {
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

export class CopyObjectObjectList extends cdktf.ComplexList {
  public internalValue? : CopyObjectObject[] | cdktf.IResolvable

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
  public get(index: number): CopyObjectObjectOutputReference {
    return new CopyObjectObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object kibana_copy_object}
*/
export class CopyObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kibana_copy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CopyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CopyObject to import
  * @param importFromId The id of the existing CopyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CopyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kibana_copy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/copy_object kibana_copy_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CopyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: CopyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'kibana_copy_object',
      terraformGeneratorMetadata: {
        providerName: 'kibana',
        providerVersion: '8.5.3',
        providerVersionConstraint: '8.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createNewCopies = config.createNewCopies;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._includeReference = config.includeReference;
    this._name = config.name;
    this._overwrite = config.overwrite;
    this._sourceSpace = config.sourceSpace;
    this._targetSpaces = config.targetSpaces;
    this._object.internalValue = config.object;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_new_copies - computed: false, optional: true, required: false
  private _createNewCopies?: boolean | cdktf.IResolvable; 
  public get createNewCopies() {
    return this.getBooleanAttribute('create_new_copies');
  }
  public set createNewCopies(value: boolean | cdktf.IResolvable) {
    this._createNewCopies = value;
  }
  public resetCreateNewCopies() {
    this._createNewCopies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewCopiesInput() {
    return this._createNewCopies;
  }

  // force_update - computed: true, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // include_reference - computed: false, optional: true, required: false
  private _includeReference?: boolean | cdktf.IResolvable; 
  public get includeReference() {
    return this.getBooleanAttribute('include_reference');
  }
  public set includeReference(value: boolean | cdktf.IResolvable) {
    this._includeReference = value;
  }
  public resetIncludeReference() {
    this._includeReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReferenceInput() {
    return this._includeReference;
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

  // source_space - computed: false, optional: true, required: false
  private _sourceSpace?: string; 
  public get sourceSpace() {
    return this.getStringAttribute('source_space');
  }
  public set sourceSpace(value: string) {
    this._sourceSpace = value;
  }
  public resetSourceSpace() {
    this._sourceSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSpaceInput() {
    return this._sourceSpace;
  }

  // target_spaces - computed: false, optional: false, required: true
  private _targetSpaces?: string[]; 
  public get targetSpaces() {
    return cdktf.Fn.tolist(this.getListAttribute('target_spaces'));
  }
  public set targetSpaces(value: string[]) {
    this._targetSpaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpacesInput() {
    return this._targetSpaces;
  }

  // object - computed: false, optional: false, required: true
  private _object = new CopyObjectObjectList(this, "object", true);
  public get object() {
    return this._object;
  }
  public putObject(value: CopyObjectObject[] | cdktf.IResolvable) {
    this._object.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_new_copies: cdktf.booleanToTerraform(this._createNewCopies),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      include_reference: cdktf.booleanToTerraform(this._includeReference),
      name: cdktf.stringToTerraform(this._name),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      source_space: cdktf.stringToTerraform(this._sourceSpace),
      target_spaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetSpaces),
      object: cdktf.listMapper(copyObjectObjectToTerraform, true)(this._object.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_new_copies: {
        value: cdktf.booleanToHclTerraform(this._createNewCopies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_reference: {
        value: cdktf.booleanToHclTerraform(this._includeReference),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_space: {
        value: cdktf.stringToHclTerraform(this._sourceSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_spaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetSpaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      object: {
        value: cdktf.listMapperHcl(copyObjectObjectToHclTerraform, true)(this._object.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CopyObjectObjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
