// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosGeoLocationFileOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#id DataThunderDdosGeoLocationFileOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#oper DataThunderDdosGeoLocationFileOper#oper}
  */
  readonly oper?: DataThunderDdosGeoLocationFileOperOper;
}
export interface DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#error_information DataThunderDdosGeoLocationFileOper#error_information}
  */
  readonly errorInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#error_line DataThunderDdosGeoLocationFileOper#error_line}
  */
  readonly errorLine?: number;
}

export function dataThunderDdosGeoLocationFileOperOperFileListErrorListStructToTerraform(struct?: DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_information: cdktf.stringToTerraform(struct!.errorInformation),
    error_line: cdktf.numberToTerraform(struct!.errorLine),
  }
}


export function dataThunderDdosGeoLocationFileOperOperFileListErrorListStructToHclTerraform(struct?: DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_information: {
      value: cdktf.stringToHclTerraform(struct!.errorInformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_line: {
      value: cdktf.numberToHclTerraform(struct!.errorLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosGeoLocationFileOperOperFileListErrorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorInformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorInformation = this._errorInformation;
    }
    if (this._errorLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLine = this._errorLine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorInformation = undefined;
      this._errorLine = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorInformation = value.errorInformation;
      this._errorLine = value.errorLine;
    }
  }

  // error_information - computed: false, optional: true, required: false
  private _errorInformation?: string; 
  public get errorInformation() {
    return this.getStringAttribute('error_information');
  }
  public set errorInformation(value: string) {
    this._errorInformation = value;
  }
  public resetErrorInformation() {
    this._errorInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInformationInput() {
    return this._errorInformation;
  }

  // error_line - computed: false, optional: true, required: false
  private _errorLine?: number; 
  public get errorLine() {
    return this.getNumberAttribute('error_line');
  }
  public set errorLine(value: number) {
    this._errorLine = value;
  }
  public resetErrorLine() {
    this._errorLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLineInput() {
    return this._errorLine;
  }
}

export class DataThunderDdosGeoLocationFileOperOperFileListErrorListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosGeoLocationFileOperOperFileListErrorListStructOutputReference {
    return new DataThunderDdosGeoLocationFileOperOperFileListErrorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosGeoLocationFileOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#error_warning DataThunderDdosGeoLocationFileOper#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#filename DataThunderDdosGeoLocationFileOper#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#lines DataThunderDdosGeoLocationFileOper#lines}
  */
  readonly lines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#success DataThunderDdosGeoLocationFileOper#success}
  */
  readonly success?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#type DataThunderDdosGeoLocationFileOper#type}
  */
  readonly type?: string;
  /**
  * error_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#error_list DataThunderDdosGeoLocationFileOper#error_list}
  */
  readonly errorList?: DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosGeoLocationFileOperOperFileListStructToTerraform(struct?: DataThunderDdosGeoLocationFileOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    filename: cdktf.stringToTerraform(struct!.filename),
    lines: cdktf.numberToTerraform(struct!.lines),
    success: cdktf.numberToTerraform(struct!.success),
    type: cdktf.stringToTerraform(struct!.type),
    error_list: cdktf.listMapper(dataThunderDdosGeoLocationFileOperOperFileListErrorListStructToTerraform, true)(struct!.errorList),
  }
}


export function dataThunderDdosGeoLocationFileOperOperFileListStructToHclTerraform(struct?: DataThunderDdosGeoLocationFileOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lines: {
      value: cdktf.numberToHclTerraform(struct!.lines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success: {
      value: cdktf.numberToHclTerraform(struct!.success),
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
    error_list: {
      value: cdktf.listMapperHcl(dataThunderDdosGeoLocationFileOperOperFileListErrorListStructToHclTerraform, true)(struct!.errorList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosGeoLocationFileOperOperFileListErrorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosGeoLocationFileOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosGeoLocationFileOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._lines !== undefined) {
      hasAnyValues = true;
      internalValueResult.lines = this._lines;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._errorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorList = this._errorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosGeoLocationFileOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorWarning = undefined;
      this._filename = undefined;
      this._lines = undefined;
      this._success = undefined;
      this._type = undefined;
      this._errorList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorWarning = value.errorWarning;
      this._filename = value.filename;
      this._lines = value.lines;
      this._success = value.success;
      this._type = value.type;
      this._errorList.internalValue = value.errorList;
    }
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // lines - computed: false, optional: true, required: false
  private _lines?: number; 
  public get lines() {
    return this.getNumberAttribute('lines');
  }
  public set lines(value: number) {
    this._lines = value;
  }
  public resetLines() {
    this._lines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linesInput() {
    return this._lines;
  }

  // success - computed: false, optional: true, required: false
  private _success?: number; 
  public get success() {
    return this.getNumberAttribute('success');
  }
  public set success(value: number) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // error_list - computed: false, optional: true, required: false
  private _errorList = new DataThunderDdosGeoLocationFileOperOperFileListErrorListStructList(this, "error_list", false);
  public get errorList() {
    return this._errorList;
  }
  public putErrorList(value: DataThunderDdosGeoLocationFileOperOperFileListErrorListStruct[] | cdktf.IResolvable) {
    this._errorList.internalValue = value;
  }
  public resetErrorList() {
    this._errorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorListInput() {
    return this._errorList.internalValue;
  }
}

export class DataThunderDdosGeoLocationFileOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosGeoLocationFileOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosGeoLocationFileOperOperFileListStructOutputReference {
    return new DataThunderDdosGeoLocationFileOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosGeoLocationFileOperOper {
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#file_list DataThunderDdosGeoLocationFileOper#file_list}
  */
  readonly fileList?: DataThunderDdosGeoLocationFileOperOperFileListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosGeoLocationFileOperOperToTerraform(struct?: DataThunderDdosGeoLocationFileOperOperOutputReference | DataThunderDdosGeoLocationFileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_list: cdktf.listMapper(dataThunderDdosGeoLocationFileOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function dataThunderDdosGeoLocationFileOperOperToHclTerraform(struct?: DataThunderDdosGeoLocationFileOperOperOutputReference | DataThunderDdosGeoLocationFileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_list: {
      value: cdktf.listMapperHcl(dataThunderDdosGeoLocationFileOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosGeoLocationFileOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosGeoLocationFileOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosGeoLocationFileOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosGeoLocationFileOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileList.internalValue = value.fileList;
    }
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new DataThunderDdosGeoLocationFileOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderDdosGeoLocationFileOperOperFileListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper thunder_ddos_geo_location_file_oper}
*/
export class DataThunderDdosGeoLocationFileOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_geo_location_file_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosGeoLocationFileOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosGeoLocationFileOper to import
  * @param importFromId The id of the existing DataThunderDdosGeoLocationFileOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosGeoLocationFileOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_geo_location_file_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_file_oper thunder_ddos_geo_location_file_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosGeoLocationFileOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosGeoLocationFileOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_geo_location_file_oper',
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
  private _oper = new DataThunderDdosGeoLocationFileOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosGeoLocationFileOperOper) {
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
      oper: dataThunderDdosGeoLocationFileOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosGeoLocationFileOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosGeoLocationFileOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
