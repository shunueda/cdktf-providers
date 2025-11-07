// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciRestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#class_name DataAciRest#class_name}
  */
  readonly className?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#content DataAciRest#content}
  */
  readonly content?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#dn DataAciRest#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#id DataAciRest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#path DataAciRest#path}
  */
  readonly path: string;
  /**
  * children block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#children DataAciRest#children}
  */
  readonly children?: DataAciRestChildren[] | cdktf.IResolvable;
}
export interface DataAciRestChildren {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#child_class_name DataAciRest#child_class_name}
  */
  readonly childClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#child_content DataAciRest#child_content}
  */
  readonly childContent?: { [key: string]: string };
}

export function dataAciRestChildrenToTerraform(struct?: DataAciRestChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_class_name: cdktf.stringToTerraform(struct!.childClassName),
    child_content: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.childContent),
  }
}


export function dataAciRestChildrenToHclTerraform(struct?: DataAciRestChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_class_name: {
      value: cdktf.stringToHclTerraform(struct!.childClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    child_content: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.childContent),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciRestChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciRestChildren | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.childClassName = this._childClassName;
    }
    if (this._childContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.childContent = this._childContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRestChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._childClassName = undefined;
      this._childContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._childClassName = value.childClassName;
      this._childContent = value.childContent;
    }
  }

  // child_class_name - computed: true, optional: true, required: false
  private _childClassName?: string; 
  public get childClassName() {
    return this.getStringAttribute('child_class_name');
  }
  public set childClassName(value: string) {
    this._childClassName = value;
  }
  public resetChildClassName() {
    this._childClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childClassNameInput() {
    return this._childClassName;
  }

  // child_content - computed: true, optional: true, required: false
  private _childContent?: { [key: string]: string }; 
  public get childContent() {
    return this.getStringMapAttribute('child_content');
  }
  public set childContent(value: { [key: string]: string }) {
    this._childContent = value;
  }
  public resetChildContent() {
    this._childContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childContentInput() {
    return this._childContent;
  }
}

export class DataAciRestChildrenList extends cdktf.ComplexList {
  public internalValue? : DataAciRestChildren[] | cdktf.IResolvable

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
  public get(index: number): DataAciRestChildrenOutputReference {
    return new DataAciRestChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest aci_rest}
*/
export class DataAciRest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_rest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciRest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciRest to import
  * @param importFromId The id of the existing DataAciRest that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciRest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_rest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/rest aci_rest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciRestConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciRestConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_rest',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._className = config.className;
    this._content = config.content;
    this._dn = config.dn;
    this._id = config.id;
    this._path = config.path;
    this._children.internalValue = config.children;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_name - computed: true, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // content - computed: true, optional: true, required: false
  private _content?: { [key: string]: string }; 
  public get content() {
    return this.getStringMapAttribute('content');
  }
  public set content(value: { [key: string]: string }) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // dn - computed: true, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // children - computed: false, optional: true, required: false
  private _children = new DataAciRestChildrenList(this, "children", true);
  public get children() {
    return this._children;
  }
  public putChildren(value: DataAciRestChildren[] | cdktf.IResolvable) {
    this._children.internalValue = value;
  }
  public resetChildren() {
    this._children.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_name: cdktf.stringToTerraform(this._className),
      content: cdktf.hashMapper(cdktf.stringToTerraform)(this._content),
      dn: cdktf.stringToTerraform(this._dn),
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      children: cdktf.listMapper(dataAciRestChildrenToTerraform, true)(this._children.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_name: {
        value: cdktf.stringToHclTerraform(this._className),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._content),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      children: {
        value: cdktf.listMapperHcl(dataAciRestChildrenToHclTerraform, true)(this._children.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciRestChildrenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
