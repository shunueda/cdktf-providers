// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemGuiImageListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#id DataThunderSystemGuiImageListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#oper DataThunderSystemGuiImageListOper#oper}
  */
  readonly oper?: DataThunderSystemGuiImageListOperOper;
}
export interface DataThunderSystemGuiImageListOperOperGuiListPri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#gui_image DataThunderSystemGuiImageListOper#gui_image}
  */
  readonly guiImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#path DataThunderSystemGuiImageListOper#path}
  */
  readonly path?: string;
}

export function dataThunderSystemGuiImageListOperOperGuiListPriToTerraform(struct?: DataThunderSystemGuiImageListOperOperGuiListPri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gui_image: cdktf.stringToTerraform(struct!.guiImage),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataThunderSystemGuiImageListOperOperGuiListPriToHclTerraform(struct?: DataThunderSystemGuiImageListOperOperGuiListPri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gui_image: {
      value: cdktf.stringToHclTerraform(struct!.guiImage),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGuiImageListOperOperGuiListPriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemGuiImageListOperOperGuiListPri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guiImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiImage = this._guiImage;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGuiImageListOperOperGuiListPri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guiImage = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guiImage = value.guiImage;
      this._path = value.path;
    }
  }

  // gui_image - computed: false, optional: true, required: false
  private _guiImage?: string; 
  public get guiImage() {
    return this.getStringAttribute('gui_image');
  }
  public set guiImage(value: string) {
    this._guiImage = value;
  }
  public resetGuiImage() {
    this._guiImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiImageInput() {
    return this._guiImage;
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
}

export class DataThunderSystemGuiImageListOperOperGuiListPriList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemGuiImageListOperOperGuiListPri[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemGuiImageListOperOperGuiListPriOutputReference {
    return new DataThunderSystemGuiImageListOperOperGuiListPriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemGuiImageListOperOperGuiListSec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#gui_image DataThunderSystemGuiImageListOper#gui_image}
  */
  readonly guiImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#path DataThunderSystemGuiImageListOper#path}
  */
  readonly path?: string;
}

export function dataThunderSystemGuiImageListOperOperGuiListSecToTerraform(struct?: DataThunderSystemGuiImageListOperOperGuiListSec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gui_image: cdktf.stringToTerraform(struct!.guiImage),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataThunderSystemGuiImageListOperOperGuiListSecToHclTerraform(struct?: DataThunderSystemGuiImageListOperOperGuiListSec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gui_image: {
      value: cdktf.stringToHclTerraform(struct!.guiImage),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGuiImageListOperOperGuiListSecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemGuiImageListOperOperGuiListSec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guiImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiImage = this._guiImage;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGuiImageListOperOperGuiListSec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guiImage = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guiImage = value.guiImage;
      this._path = value.path;
    }
  }

  // gui_image - computed: false, optional: true, required: false
  private _guiImage?: string; 
  public get guiImage() {
    return this.getStringAttribute('gui_image');
  }
  public set guiImage(value: string) {
    this._guiImage = value;
  }
  public resetGuiImage() {
    this._guiImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiImageInput() {
    return this._guiImage;
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
}

export class DataThunderSystemGuiImageListOperOperGuiListSecList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemGuiImageListOperOperGuiListSec[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemGuiImageListOperOperGuiListSecOutputReference {
    return new DataThunderSystemGuiImageListOperOperGuiListSecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemGuiImageListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#pre_pri_gui DataThunderSystemGuiImageListOper#pre_pri_gui}
  */
  readonly prePriGui?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#pre_sec_gui DataThunderSystemGuiImageListOper#pre_sec_gui}
  */
  readonly preSecGui?: string;
  /**
  * gui_list_pri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#gui_list_pri DataThunderSystemGuiImageListOper#gui_list_pri}
  */
  readonly guiListPri?: DataThunderSystemGuiImageListOperOperGuiListPri[] | cdktf.IResolvable;
  /**
  * gui_list_sec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#gui_list_sec DataThunderSystemGuiImageListOper#gui_list_sec}
  */
  readonly guiListSec?: DataThunderSystemGuiImageListOperOperGuiListSec[] | cdktf.IResolvable;
}

export function dataThunderSystemGuiImageListOperOperToTerraform(struct?: DataThunderSystemGuiImageListOperOperOutputReference | DataThunderSystemGuiImageListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pre_pri_gui: cdktf.stringToTerraform(struct!.prePriGui),
    pre_sec_gui: cdktf.stringToTerraform(struct!.preSecGui),
    gui_list_pri: cdktf.listMapper(dataThunderSystemGuiImageListOperOperGuiListPriToTerraform, true)(struct!.guiListPri),
    gui_list_sec: cdktf.listMapper(dataThunderSystemGuiImageListOperOperGuiListSecToTerraform, true)(struct!.guiListSec),
  }
}


export function dataThunderSystemGuiImageListOperOperToHclTerraform(struct?: DataThunderSystemGuiImageListOperOperOutputReference | DataThunderSystemGuiImageListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pre_pri_gui: {
      value: cdktf.stringToHclTerraform(struct!.prePriGui),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_sec_gui: {
      value: cdktf.stringToHclTerraform(struct!.preSecGui),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gui_list_pri: {
      value: cdktf.listMapperHcl(dataThunderSystemGuiImageListOperOperGuiListPriToHclTerraform, true)(struct!.guiListPri),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemGuiImageListOperOperGuiListPriList",
    },
    gui_list_sec: {
      value: cdktf.listMapperHcl(dataThunderSystemGuiImageListOperOperGuiListSecToHclTerraform, true)(struct!.guiListSec),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemGuiImageListOperOperGuiListSecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGuiImageListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemGuiImageListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prePriGui !== undefined) {
      hasAnyValues = true;
      internalValueResult.prePriGui = this._prePriGui;
    }
    if (this._preSecGui !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSecGui = this._preSecGui;
    }
    if (this._guiListPri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiListPri = this._guiListPri?.internalValue;
    }
    if (this._guiListSec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiListSec = this._guiListSec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGuiImageListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prePriGui = undefined;
      this._preSecGui = undefined;
      this._guiListPri.internalValue = undefined;
      this._guiListSec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prePriGui = value.prePriGui;
      this._preSecGui = value.preSecGui;
      this._guiListPri.internalValue = value.guiListPri;
      this._guiListSec.internalValue = value.guiListSec;
    }
  }

  // pre_pri_gui - computed: false, optional: true, required: false
  private _prePriGui?: string; 
  public get prePriGui() {
    return this.getStringAttribute('pre_pri_gui');
  }
  public set prePriGui(value: string) {
    this._prePriGui = value;
  }
  public resetPrePriGui() {
    this._prePriGui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prePriGuiInput() {
    return this._prePriGui;
  }

  // pre_sec_gui - computed: false, optional: true, required: false
  private _preSecGui?: string; 
  public get preSecGui() {
    return this.getStringAttribute('pre_sec_gui');
  }
  public set preSecGui(value: string) {
    this._preSecGui = value;
  }
  public resetPreSecGui() {
    this._preSecGui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSecGuiInput() {
    return this._preSecGui;
  }

  // gui_list_pri - computed: false, optional: true, required: false
  private _guiListPri = new DataThunderSystemGuiImageListOperOperGuiListPriList(this, "gui_list_pri", false);
  public get guiListPri() {
    return this._guiListPri;
  }
  public putGuiListPri(value: DataThunderSystemGuiImageListOperOperGuiListPri[] | cdktf.IResolvable) {
    this._guiListPri.internalValue = value;
  }
  public resetGuiListPri() {
    this._guiListPri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiListPriInput() {
    return this._guiListPri.internalValue;
  }

  // gui_list_sec - computed: false, optional: true, required: false
  private _guiListSec = new DataThunderSystemGuiImageListOperOperGuiListSecList(this, "gui_list_sec", false);
  public get guiListSec() {
    return this._guiListSec;
  }
  public putGuiListSec(value: DataThunderSystemGuiImageListOperOperGuiListSec[] | cdktf.IResolvable) {
    this._guiListSec.internalValue = value;
  }
  public resetGuiListSec() {
    this._guiListSec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiListSecInput() {
    return this._guiListSec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper thunder_system_gui_image_list_oper}
*/
export class DataThunderSystemGuiImageListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_gui_image_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemGuiImageListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemGuiImageListOper to import
  * @param importFromId The id of the existing DataThunderSystemGuiImageListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemGuiImageListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_gui_image_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_gui_image_list_oper thunder_system_gui_image_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemGuiImageListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemGuiImageListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_gui_image_list_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemGuiImageListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemGuiImageListOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemGuiImageListOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSystemGuiImageListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemGuiImageListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
