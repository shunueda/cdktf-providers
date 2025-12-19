// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDetectionDdosScriptOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#id DataThunderDdosDetectionDdosScriptOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#oper DataThunderDdosDetectionDdosScriptOper#oper}
  */
  readonly oper?: DataThunderDdosDetectionDdosScriptOperOper;
}
export interface DataThunderDdosDetectionDdosScriptOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#file DataThunderDdosDetectionDdosScriptOper#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#file_size DataThunderDdosDetectionDdosScriptOper#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#reference_count DataThunderDdosDetectionDdosScriptOper#reference_count}
  */
  readonly referenceCount?: number;
}

export function dataThunderDdosDetectionDdosScriptOperOperFileListStructToTerraform(struct?: DataThunderDdosDetectionDdosScriptOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    reference_count: cdktf.numberToTerraform(struct!.referenceCount),
  }
}


export function dataThunderDdosDetectionDdosScriptOperOperFileListStructToHclTerraform(struct?: DataThunderDdosDetectionDdosScriptOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reference_count: {
      value: cdktf.numberToHclTerraform(struct!.referenceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionDdosScriptOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDetectionDdosScriptOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._referenceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceCount = this._referenceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionDdosScriptOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._fileSize = undefined;
      this._referenceCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._fileSize = value.fileSize;
      this._referenceCount = value.referenceCount;
    }
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

  // file_size - computed: false, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // reference_count - computed: false, optional: true, required: false
  private _referenceCount?: number; 
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }
  public set referenceCount(value: number) {
    this._referenceCount = value;
  }
  public resetReferenceCount() {
    this._referenceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceCountInput() {
    return this._referenceCount;
  }
}

export class DataThunderDdosDetectionDdosScriptOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDetectionDdosScriptOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDetectionDdosScriptOperOperFileListStructOutputReference {
    return new DataThunderDdosDetectionDdosScriptOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDetectionDdosScriptOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#total_records DataThunderDdosDetectionDdosScriptOper#total_records}
  */
  readonly totalRecords?: number;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#file_list DataThunderDdosDetectionDdosScriptOper#file_list}
  */
  readonly fileList?: DataThunderDdosDetectionDdosScriptOperOperFileListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDetectionDdosScriptOperOperToTerraform(struct?: DataThunderDdosDetectionDdosScriptOperOperOutputReference | DataThunderDdosDetectionDdosScriptOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_records: cdktf.numberToTerraform(struct!.totalRecords),
    file_list: cdktf.listMapper(dataThunderDdosDetectionDdosScriptOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function dataThunderDdosDetectionDdosScriptOperOperToHclTerraform(struct?: DataThunderDdosDetectionDdosScriptOperOperOutputReference | DataThunderDdosDetectionDdosScriptOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_records: {
      value: cdktf.numberToHclTerraform(struct!.totalRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDetectionDdosScriptOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDetectionDdosScriptOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionDdosScriptOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDetectionDdosScriptOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRecords = this._totalRecords;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionDdosScriptOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalRecords = undefined;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalRecords = value.totalRecords;
      this._fileList.internalValue = value.fileList;
    }
  }

  // total_records - computed: false, optional: true, required: false
  private _totalRecords?: number; 
  public get totalRecords() {
    return this.getNumberAttribute('total_records');
  }
  public set totalRecords(value: number) {
    this._totalRecords = value;
  }
  public resetTotalRecords() {
    this._totalRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRecordsInput() {
    return this._totalRecords;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new DataThunderDdosDetectionDdosScriptOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderDdosDetectionDdosScriptOperOperFileListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper thunder_ddos_detection_ddos_script_oper}
*/
export class DataThunderDdosDetectionDdosScriptOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_ddos_script_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDetectionDdosScriptOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDetectionDdosScriptOper to import
  * @param importFromId The id of the existing DataThunderDdosDetectionDdosScriptOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDetectionDdosScriptOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_ddos_script_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_ddos_script_oper thunder_ddos_detection_ddos_script_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDetectionDdosScriptOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDetectionDdosScriptOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_ddos_script_oper',
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
  private _oper = new DataThunderDdosDetectionDdosScriptOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDetectionDdosScriptOperOper) {
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
      oper: dataThunderDdosDetectionDdosScriptOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosDetectionDdosScriptOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDetectionDdosScriptOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
