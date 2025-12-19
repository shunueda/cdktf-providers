// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileDomainListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#id FileDomainListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#oper FileDomainListOper#oper}
  */
  readonly oper?: FileDomainListOperOper;
}
export interface FileDomainListOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#binding_num FileDomainListOper#binding_num}
  */
  readonly bindingNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#file FileDomainListOper#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#total_entry_num FileDomainListOper#total_entry_num}
  */
  readonly totalEntryNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#type_str FileDomainListOper#type_str}
  */
  readonly typeStr?: string;
}

export function fileDomainListOperOperFileListStructToTerraform(struct?: FileDomainListOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_num: cdktf.numberToTerraform(struct!.bindingNum),
    file: cdktf.stringToTerraform(struct!.file),
    total_entry_num: cdktf.numberToTerraform(struct!.totalEntryNum),
    type_str: cdktf.stringToTerraform(struct!.typeStr),
  }
}


export function fileDomainListOperOperFileListStructToHclTerraform(struct?: FileDomainListOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_num: {
      value: cdktf.numberToHclTerraform(struct!.bindingNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_entry_num: {
      value: cdktf.numberToHclTerraform(struct!.totalEntryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_str: {
      value: cdktf.stringToHclTerraform(struct!.typeStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileDomainListOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileDomainListOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingNum = this._bindingNum;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._totalEntryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntryNum = this._totalEntryNum;
    }
    if (this._typeStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeStr = this._typeStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileDomainListOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindingNum = undefined;
      this._file = undefined;
      this._totalEntryNum = undefined;
      this._typeStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindingNum = value.bindingNum;
      this._file = value.file;
      this._totalEntryNum = value.totalEntryNum;
      this._typeStr = value.typeStr;
    }
  }

  // binding_num - computed: false, optional: true, required: false
  private _bindingNum?: number; 
  public get bindingNum() {
    return this.getNumberAttribute('binding_num');
  }
  public set bindingNum(value: number) {
    this._bindingNum = value;
  }
  public resetBindingNum() {
    this._bindingNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingNumInput() {
    return this._bindingNum;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // total_entry_num - computed: false, optional: true, required: false
  private _totalEntryNum?: number; 
  public get totalEntryNum() {
    return this.getNumberAttribute('total_entry_num');
  }
  public set totalEntryNum(value: number) {
    this._totalEntryNum = value;
  }
  public resetTotalEntryNum() {
    this._totalEntryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntryNumInput() {
    return this._totalEntryNum;
  }

  // type_str - computed: false, optional: true, required: false
  private _typeStr?: string; 
  public get typeStr() {
    return this.getStringAttribute('type_str');
  }
  public set typeStr(value: string) {
    this._typeStr = value;
  }
  public resetTypeStr() {
    this._typeStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeStrInput() {
    return this._typeStr;
  }
}

export class FileDomainListOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : FileDomainListOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): FileDomainListOperOperFileListStructOutputReference {
    return new FileDomainListOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileDomainListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#displayed_count FileDomainListOper#displayed_count}
  */
  readonly displayedCount?: number;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#file_list FileDomainListOper#file_list}
  */
  readonly fileList?: FileDomainListOperOperFileListStruct[] | cdktf.IResolvable;
}

export function fileDomainListOperOperToTerraform(struct?: FileDomainListOperOperOutputReference | FileDomainListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    displayed_count: cdktf.numberToTerraform(struct!.displayedCount),
    file_list: cdktf.listMapper(fileDomainListOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function fileDomainListOperOperToHclTerraform(struct?: FileDomainListOperOperOutputReference | FileDomainListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.displayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_list: {
      value: cdktf.listMapperHcl(fileDomainListOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "FileDomainListOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileDomainListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileDomainListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayedCount = this._displayedCount;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileDomainListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayedCount = undefined;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayedCount = value.displayedCount;
      this._fileList.internalValue = value.fileList;
    }
  }

  // displayed_count - computed: false, optional: true, required: false
  private _displayedCount?: number; 
  public get displayedCount() {
    return this.getNumberAttribute('displayed_count');
  }
  public set displayedCount(value: number) {
    this._displayedCount = value;
  }
  public resetDisplayedCount() {
    this._displayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayedCountInput() {
    return this._displayedCount;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new FileDomainListOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: FileDomainListOperOperFileListStruct[] | cdktf.IResolvable) {
    this._fileList.internalValue = value;
  }
  public resetFileList() {
    this._fileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileListInput() {
    return this._fileList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper thunder_file_domain_list_oper}
*/
export class FileDomainListOper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_domain_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileDomainListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileDomainListOper to import
  * @param importFromId The id of the existing FileDomainListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileDomainListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_domain_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_domain_list_oper thunder_file_domain_list_oper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileDomainListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FileDomainListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_domain_list_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new FileDomainListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: FileDomainListOperOper) {
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
      oper: fileDomainListOperOperToTerraform(this._oper.internalValue),
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
        value: fileDomainListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileDomainListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
