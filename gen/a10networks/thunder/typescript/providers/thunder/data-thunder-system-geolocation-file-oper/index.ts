// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemGeolocationFileOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#id DataThunderSystemGeolocationFileOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * error_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#error_info DataThunderSystemGeolocationFileOper#error_info}
  */
  readonly errorInfo?: DataThunderSystemGeolocationFileOperErrorInfo;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#oper DataThunderSystemGeolocationFileOper#oper}
  */
  readonly oper?: DataThunderSystemGeolocationFileOperOper;
}
export interface DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#error DataThunderSystemGeolocationFileOper#error}
  */
  readonly error?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#line DataThunderSystemGeolocationFileOper#line}
  */
  readonly line?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#offset DataThunderSystemGeolocationFileOper#offset}
  */
  readonly offset?: number;
}

export function dataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructToTerraform(struct?: DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.stringToTerraform(struct!.error),
    line: cdktf.numberToTerraform(struct!.line),
    offset: cdktf.numberToTerraform(struct!.offset),
  }
}


export function dataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructToHclTerraform(struct?: DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line: {
      value: cdktf.numberToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._error = undefined;
      this._line = undefined;
      this._offset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._error = value.error;
      this._line = value.line;
      this._offset = value.offset;
    }
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // line - computed: false, optional: true, required: false
  private _line?: number; 
  public get line() {
    return this.getNumberAttribute('line');
  }
  public set line(value: number) {
    this._line = value;
  }
  public resetLine() {
    this._line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }
}

export class DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructOutputReference {
    return new DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemGeolocationFileOperErrorInfoOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#filename DataThunderSystemGeolocationFileOper#filename}
  */
  readonly filename?: string;
  /**
  * error_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#error_list DataThunderSystemGeolocationFileOper#error_list}
  */
  readonly errorList?: DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemGeolocationFileOperErrorInfoOperToTerraform(struct?: DataThunderSystemGeolocationFileOperErrorInfoOperOutputReference | DataThunderSystemGeolocationFileOperErrorInfoOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    error_list: cdktf.listMapper(dataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructToTerraform, true)(struct!.errorList),
  }
}


export function dataThunderSystemGeolocationFileOperErrorInfoOperToHclTerraform(struct?: DataThunderSystemGeolocationFileOperErrorInfoOperOutputReference | DataThunderSystemGeolocationFileOperErrorInfoOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_list: {
      value: cdktf.listMapperHcl(dataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructToHclTerraform, true)(struct!.errorList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGeolocationFileOperErrorInfoOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemGeolocationFileOperErrorInfoOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._errorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorList = this._errorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocationFileOperErrorInfoOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filename = undefined;
      this._errorList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filename = value.filename;
      this._errorList.internalValue = value.errorList;
    }
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

  // error_list - computed: false, optional: true, required: false
  private _errorList = new DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStructList(this, "error_list", false);
  public get errorList() {
    return this._errorList;
  }
  public putErrorList(value: DataThunderSystemGeolocationFileOperErrorInfoOperErrorListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderSystemGeolocationFileOperErrorInfo {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#oper DataThunderSystemGeolocationFileOper#oper}
  */
  readonly oper?: DataThunderSystemGeolocationFileOperErrorInfoOper;
}

export function dataThunderSystemGeolocationFileOperErrorInfoToTerraform(struct?: DataThunderSystemGeolocationFileOperErrorInfoOutputReference | DataThunderSystemGeolocationFileOperErrorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderSystemGeolocationFileOperErrorInfoOperToTerraform(struct!.oper),
  }
}


export function dataThunderSystemGeolocationFileOperErrorInfoToHclTerraform(struct?: DataThunderSystemGeolocationFileOperErrorInfoOutputReference | DataThunderSystemGeolocationFileOperErrorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderSystemGeolocationFileOperErrorInfoOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemGeolocationFileOperErrorInfoOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGeolocationFileOperErrorInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemGeolocationFileOperErrorInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocationFileOperErrorInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemGeolocationFileOperErrorInfoOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemGeolocationFileOperErrorInfoOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderSystemGeolocationFileOperOperGeofiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#comment DataThunderSystemGeolocationFileOper#comment}
  */
  readonly comment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#error_warning DataThunderSystemGeolocationFileOper#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#filename DataThunderSystemGeolocationFileOper#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#lines DataThunderSystemGeolocationFileOper#lines}
  */
  readonly lines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#percentage_loaded DataThunderSystemGeolocationFileOper#percentage_loaded}
  */
  readonly percentageLoaded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#success DataThunderSystemGeolocationFileOper#success}
  */
  readonly success?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#template DataThunderSystemGeolocationFileOper#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#type DataThunderSystemGeolocationFileOper#type}
  */
  readonly type?: string;
}

export function dataThunderSystemGeolocationFileOperOperGeofilesToTerraform(struct?: DataThunderSystemGeolocationFileOperOperGeofiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.numberToTerraform(struct!.comment),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    filename: cdktf.stringToTerraform(struct!.filename),
    lines: cdktf.numberToTerraform(struct!.lines),
    percentage_loaded: cdktf.numberToTerraform(struct!.percentageLoaded),
    success: cdktf.numberToTerraform(struct!.success),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderSystemGeolocationFileOperOperGeofilesToHclTerraform(struct?: DataThunderSystemGeolocationFileOperOperGeofiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.numberToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    percentage_loaded: {
      value: cdktf.numberToHclTerraform(struct!.percentageLoaded),
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
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataThunderSystemGeolocationFileOperOperGeofilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemGeolocationFileOperOperGeofiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
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
    if (this._percentageLoaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageLoaded = this._percentageLoaded;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocationFileOperOperGeofiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._errorWarning = undefined;
      this._filename = undefined;
      this._lines = undefined;
      this._percentageLoaded = undefined;
      this._success = undefined;
      this._template = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._errorWarning = value.errorWarning;
      this._filename = value.filename;
      this._lines = value.lines;
      this._percentageLoaded = value.percentageLoaded;
      this._success = value.success;
      this._template = value.template;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: number; 
  public get comment() {
    return this.getNumberAttribute('comment');
  }
  public set comment(value: number) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // percentage_loaded - computed: false, optional: true, required: false
  private _percentageLoaded?: number; 
  public get percentageLoaded() {
    return this.getNumberAttribute('percentage_loaded');
  }
  public set percentageLoaded(value: number) {
    this._percentageLoaded = value;
  }
  public resetPercentageLoaded() {
    this._percentageLoaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageLoadedInput() {
    return this._percentageLoaded;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
}

export class DataThunderSystemGeolocationFileOperOperGeofilesList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemGeolocationFileOperOperGeofiles[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemGeolocationFileOperOperGeofilesOutputReference {
    return new DataThunderSystemGeolocationFileOperOperGeofilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemGeolocationFileOperOper {
  /**
  * geofiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#geofiles DataThunderSystemGeolocationFileOper#geofiles}
  */
  readonly geofiles?: DataThunderSystemGeolocationFileOperOperGeofiles[] | cdktf.IResolvable;
}

export function dataThunderSystemGeolocationFileOperOperToTerraform(struct?: DataThunderSystemGeolocationFileOperOperOutputReference | DataThunderSystemGeolocationFileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geofiles: cdktf.listMapper(dataThunderSystemGeolocationFileOperOperGeofilesToTerraform, true)(struct!.geofiles),
  }
}


export function dataThunderSystemGeolocationFileOperOperToHclTerraform(struct?: DataThunderSystemGeolocationFileOperOperOutputReference | DataThunderSystemGeolocationFileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geofiles: {
      value: cdktf.listMapperHcl(dataThunderSystemGeolocationFileOperOperGeofilesToHclTerraform, true)(struct!.geofiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemGeolocationFileOperOperGeofilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGeolocationFileOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemGeolocationFileOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geofiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geofiles = this._geofiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocationFileOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geofiles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geofiles.internalValue = value.geofiles;
    }
  }

  // geofiles - computed: false, optional: true, required: false
  private _geofiles = new DataThunderSystemGeolocationFileOperOperGeofilesList(this, "geofiles", false);
  public get geofiles() {
    return this._geofiles;
  }
  public putGeofiles(value: DataThunderSystemGeolocationFileOperOperGeofiles[] | cdktf.IResolvable) {
    this._geofiles.internalValue = value;
  }
  public resetGeofiles() {
    this._geofiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geofilesInput() {
    return this._geofiles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper thunder_system_geolocation_file_oper}
*/
export class DataThunderSystemGeolocationFileOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_geolocation_file_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemGeolocationFileOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemGeolocationFileOper to import
  * @param importFromId The id of the existing DataThunderSystemGeolocationFileOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemGeolocationFileOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_geolocation_file_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geolocation_file_oper thunder_system_geolocation_file_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemGeolocationFileOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemGeolocationFileOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_geolocation_file_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._errorInfo.internalValue = config.errorInfo;
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

  // error_info - computed: false, optional: true, required: false
  private _errorInfo = new DataThunderSystemGeolocationFileOperErrorInfoOutputReference(this, "error_info");
  public get errorInfo() {
    return this._errorInfo;
  }
  public putErrorInfo(value: DataThunderSystemGeolocationFileOperErrorInfo) {
    this._errorInfo.internalValue = value;
  }
  public resetErrorInfo() {
    this._errorInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInfoInput() {
    return this._errorInfo.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemGeolocationFileOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemGeolocationFileOperOper) {
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
      error_info: dataThunderSystemGeolocationFileOperErrorInfoToTerraform(this._errorInfo.internalValue),
      oper: dataThunderSystemGeolocationFileOperOperToTerraform(this._oper.internalValue),
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
      error_info: {
        value: dataThunderSystemGeolocationFileOperErrorInfoToHclTerraform(this._errorInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemGeolocationFileOperErrorInfoList",
      },
      oper: {
        value: dataThunderSystemGeolocationFileOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemGeolocationFileOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
