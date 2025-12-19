// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileStartupConfigOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#id FileStartupConfigOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#oper FileStartupConfigOper#oper}
  */
  readonly oper?: FileStartupConfigOperOper;
}
export interface FileStartupConfigOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#profile_name FileStartupConfigOper#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#size FileStartupConfigOper#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#update_time FileStartupConfigOper#update_time}
  */
  readonly updateTime?: string;
}

export function fileStartupConfigOperOperFileListStructToTerraform(struct?: FileStartupConfigOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    size: cdktf.numberToTerraform(struct!.size),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
  }
}


export function fileStartupConfigOperOperFileListStructToHclTerraform(struct?: FileStartupConfigOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_time: {
      value: cdktf.stringToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStartupConfigOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStartupConfigOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStartupConfigOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileName = undefined;
      this._size = undefined;
      this._updateTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileName = value.profileName;
      this._size = value.size;
      this._updateTime = value.updateTime;
    }
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }
}

export class FileStartupConfigOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : FileStartupConfigOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): FileStartupConfigOperOperFileListStructOutputReference {
    return new FileStartupConfigOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileStartupConfigOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#current_startup_config FileStartupConfigOper#current_startup_config}
  */
  readonly currentStartupConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#dirty FileStartupConfigOper#dirty}
  */
  readonly dirty?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#pri_startup_config FileStartupConfigOper#pri_startup_config}
  */
  readonly priStartupConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#sec_startup_config FileStartupConfigOper#sec_startup_config}
  */
  readonly secStartupConfig?: string;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#file_list FileStartupConfigOper#file_list}
  */
  readonly fileList?: FileStartupConfigOperOperFileListStruct[] | cdktf.IResolvable;
}

export function fileStartupConfigOperOperToTerraform(struct?: FileStartupConfigOperOperOutputReference | FileStartupConfigOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_startup_config: cdktf.stringToTerraform(struct!.currentStartupConfig),
    dirty: cdktf.numberToTerraform(struct!.dirty),
    pri_startup_config: cdktf.stringToTerraform(struct!.priStartupConfig),
    sec_startup_config: cdktf.stringToTerraform(struct!.secStartupConfig),
    file_list: cdktf.listMapper(fileStartupConfigOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function fileStartupConfigOperOperToHclTerraform(struct?: FileStartupConfigOperOperOutputReference | FileStartupConfigOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_startup_config: {
      value: cdktf.stringToHclTerraform(struct!.currentStartupConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dirty: {
      value: cdktf.numberToHclTerraform(struct!.dirty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pri_startup_config: {
      value: cdktf.stringToHclTerraform(struct!.priStartupConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_startup_config: {
      value: cdktf.stringToHclTerraform(struct!.secStartupConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_list: {
      value: cdktf.listMapperHcl(fileStartupConfigOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "FileStartupConfigOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStartupConfigOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileStartupConfigOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentStartupConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentStartupConfig = this._currentStartupConfig;
    }
    if (this._dirty !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirty = this._dirty;
    }
    if (this._priStartupConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.priStartupConfig = this._priStartupConfig;
    }
    if (this._secStartupConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.secStartupConfig = this._secStartupConfig;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStartupConfigOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentStartupConfig = undefined;
      this._dirty = undefined;
      this._priStartupConfig = undefined;
      this._secStartupConfig = undefined;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentStartupConfig = value.currentStartupConfig;
      this._dirty = value.dirty;
      this._priStartupConfig = value.priStartupConfig;
      this._secStartupConfig = value.secStartupConfig;
      this._fileList.internalValue = value.fileList;
    }
  }

  // current_startup_config - computed: false, optional: true, required: false
  private _currentStartupConfig?: string; 
  public get currentStartupConfig() {
    return this.getStringAttribute('current_startup_config');
  }
  public set currentStartupConfig(value: string) {
    this._currentStartupConfig = value;
  }
  public resetCurrentStartupConfig() {
    this._currentStartupConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStartupConfigInput() {
    return this._currentStartupConfig;
  }

  // dirty - computed: false, optional: true, required: false
  private _dirty?: number; 
  public get dirty() {
    return this.getNumberAttribute('dirty');
  }
  public set dirty(value: number) {
    this._dirty = value;
  }
  public resetDirty() {
    this._dirty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirtyInput() {
    return this._dirty;
  }

  // pri_startup_config - computed: false, optional: true, required: false
  private _priStartupConfig?: string; 
  public get priStartupConfig() {
    return this.getStringAttribute('pri_startup_config');
  }
  public set priStartupConfig(value: string) {
    this._priStartupConfig = value;
  }
  public resetPriStartupConfig() {
    this._priStartupConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priStartupConfigInput() {
    return this._priStartupConfig;
  }

  // sec_startup_config - computed: false, optional: true, required: false
  private _secStartupConfig?: string; 
  public get secStartupConfig() {
    return this.getStringAttribute('sec_startup_config');
  }
  public set secStartupConfig(value: string) {
    this._secStartupConfig = value;
  }
  public resetSecStartupConfig() {
    this._secStartupConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secStartupConfigInput() {
    return this._secStartupConfig;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new FileStartupConfigOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: FileStartupConfigOperOperFileListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper thunder_file_startup_config_oper}
*/
export class FileStartupConfigOper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_startup_config_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileStartupConfigOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileStartupConfigOper to import
  * @param importFromId The id of the existing FileStartupConfigOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileStartupConfigOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_startup_config_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_startup_config_oper thunder_file_startup_config_oper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileStartupConfigOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FileStartupConfigOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_startup_config_oper',
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
  private _oper = new FileStartupConfigOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: FileStartupConfigOperOper) {
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
      oper: fileStartupConfigOperOperToTerraform(this._oper.internalValue),
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
        value: fileStartupConfigOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStartupConfigOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
