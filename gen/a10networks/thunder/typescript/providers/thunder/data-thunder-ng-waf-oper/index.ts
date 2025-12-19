// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNgWafOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#id DataThunderNgWafOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * custom_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#custom_page DataThunderNgWafOper#custom_page}
  */
  readonly customPage?: DataThunderNgWafOperCustomPage;
  /**
  * custom_signals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#custom_signals DataThunderNgWafOper#custom_signals}
  */
  readonly customSignals?: DataThunderNgWafOperCustomSignals;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#oper DataThunderNgWafOper#oper}
  */
  readonly oper?: DataThunderNgWafOperOper;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#status DataThunderNgWafOper#status}
  */
  readonly status?: DataThunderNgWafOperStatus;
}
export interface DataThunderNgWafOperCustomPageOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#file DataThunderNgWafOper#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#size DataThunderNgWafOper#size}
  */
  readonly size?: number;
}

export function dataThunderNgWafOperCustomPageOperFileListStructToTerraform(struct?: DataThunderNgWafOperCustomPageOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataThunderNgWafOperCustomPageOperFileListStructToHclTerraform(struct?: DataThunderNgWafOperCustomPageOperFileListStruct | cdktf.IResolvable): any {
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperCustomPageOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNgWafOperCustomPageOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperCustomPageOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._size = value.size;
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
}

export class DataThunderNgWafOperCustomPageOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderNgWafOperCustomPageOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNgWafOperCustomPageOperFileListStructOutputReference {
    return new DataThunderNgWafOperCustomPageOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNgWafOperCustomPageOper {
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#file_list DataThunderNgWafOper#file_list}
  */
  readonly fileList?: DataThunderNgWafOperCustomPageOperFileListStruct[] | cdktf.IResolvable;
}

export function dataThunderNgWafOperCustomPageOperToTerraform(struct?: DataThunderNgWafOperCustomPageOperOutputReference | DataThunderNgWafOperCustomPageOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_list: cdktf.listMapper(dataThunderNgWafOperCustomPageOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function dataThunderNgWafOperCustomPageOperToHclTerraform(struct?: DataThunderNgWafOperCustomPageOperOutputReference | DataThunderNgWafOperCustomPageOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_list: {
      value: cdktf.listMapperHcl(dataThunderNgWafOperCustomPageOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafOperCustomPageOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperCustomPageOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafOperCustomPageOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperCustomPageOper | undefined) {
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
  private _fileList = new DataThunderNgWafOperCustomPageOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderNgWafOperCustomPageOperFileListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderNgWafOperCustomPage {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#oper DataThunderNgWafOper#oper}
  */
  readonly oper?: DataThunderNgWafOperCustomPageOper;
}

export function dataThunderNgWafOperCustomPageToTerraform(struct?: DataThunderNgWafOperCustomPageOutputReference | DataThunderNgWafOperCustomPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderNgWafOperCustomPageOperToTerraform(struct!.oper),
  }
}


export function dataThunderNgWafOperCustomPageToHclTerraform(struct?: DataThunderNgWafOperCustomPageOutputReference | DataThunderNgWafOperCustomPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderNgWafOperCustomPageOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafOperCustomPageOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperCustomPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafOperCustomPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperCustomPage | undefined) {
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
  private _oper = new DataThunderNgWafOperCustomPageOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNgWafOperCustomPageOper) {
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
export interface DataThunderNgWafOperCustomSignalsOperSignalListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#signal DataThunderNgWafOper#signal}
  */
  readonly signal?: string;
}

export function dataThunderNgWafOperCustomSignalsOperSignalListStructToTerraform(struct?: DataThunderNgWafOperCustomSignalsOperSignalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signal: cdktf.stringToTerraform(struct!.signal),
  }
}


export function dataThunderNgWafOperCustomSignalsOperSignalListStructToHclTerraform(struct?: DataThunderNgWafOperCustomSignalsOperSignalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signal: {
      value: cdktf.stringToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperCustomSignalsOperSignalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNgWafOperCustomSignalsOperSignalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperCustomSignalsOperSignalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signal = value.signal;
    }
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: string; 
  public get signal() {
    return this.getStringAttribute('signal');
  }
  public set signal(value: string) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }
}

export class DataThunderNgWafOperCustomSignalsOperSignalListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderNgWafOperCustomSignalsOperSignalListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNgWafOperCustomSignalsOperSignalListStructOutputReference {
    return new DataThunderNgWafOperCustomSignalsOperSignalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNgWafOperCustomSignalsOper {
  /**
  * signal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#signal_list DataThunderNgWafOper#signal_list}
  */
  readonly signalList?: DataThunderNgWafOperCustomSignalsOperSignalListStruct[] | cdktf.IResolvable;
}

export function dataThunderNgWafOperCustomSignalsOperToTerraform(struct?: DataThunderNgWafOperCustomSignalsOperOutputReference | DataThunderNgWafOperCustomSignalsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signal_list: cdktf.listMapper(dataThunderNgWafOperCustomSignalsOperSignalListStructToTerraform, true)(struct!.signalList),
  }
}


export function dataThunderNgWafOperCustomSignalsOperToHclTerraform(struct?: DataThunderNgWafOperCustomSignalsOperOutputReference | DataThunderNgWafOperCustomSignalsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signal_list: {
      value: cdktf.listMapperHcl(dataThunderNgWafOperCustomSignalsOperSignalListStructToHclTerraform, true)(struct!.signalList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafOperCustomSignalsOperSignalListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperCustomSignalsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafOperCustomSignalsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalList = this._signalList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperCustomSignalsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signalList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signalList.internalValue = value.signalList;
    }
  }

  // signal_list - computed: false, optional: true, required: false
  private _signalList = new DataThunderNgWafOperCustomSignalsOperSignalListStructList(this, "signal_list", false);
  public get signalList() {
    return this._signalList;
  }
  public putSignalList(value: DataThunderNgWafOperCustomSignalsOperSignalListStruct[] | cdktf.IResolvable) {
    this._signalList.internalValue = value;
  }
  public resetSignalList() {
    this._signalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalListInput() {
    return this._signalList.internalValue;
  }
}
export interface DataThunderNgWafOperCustomSignals {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#oper DataThunderNgWafOper#oper}
  */
  readonly oper?: DataThunderNgWafOperCustomSignalsOper;
}

export function dataThunderNgWafOperCustomSignalsToTerraform(struct?: DataThunderNgWafOperCustomSignalsOutputReference | DataThunderNgWafOperCustomSignals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderNgWafOperCustomSignalsOperToTerraform(struct!.oper),
  }
}


export function dataThunderNgWafOperCustomSignalsToHclTerraform(struct?: DataThunderNgWafOperCustomSignalsOutputReference | DataThunderNgWafOperCustomSignals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderNgWafOperCustomSignalsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafOperCustomSignalsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperCustomSignalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafOperCustomSignals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperCustomSignals | undefined) {
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
  private _oper = new DataThunderNgWafOperCustomSignalsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNgWafOperCustomSignalsOper) {
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
export interface DataThunderNgWafOperOperNgwafStatsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#count1 DataThunderNgWafOper#count1}
  */
  readonly count1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#name DataThunderNgWafOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#type DataThunderNgWafOper#type}
  */
  readonly type?: string;
}

export function dataThunderNgWafOperOperNgwafStatsListStructToTerraform(struct?: DataThunderNgWafOperOperNgwafStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count1: cdktf.numberToTerraform(struct!.count1),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderNgWafOperOperNgwafStatsListStructToHclTerraform(struct?: DataThunderNgWafOperOperNgwafStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count1: {
      value: cdktf.numberToHclTerraform(struct!.count1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataThunderNgWafOperOperNgwafStatsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNgWafOperOperNgwafStatsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.count1 = this._count1;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperOperNgwafStatsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count1 = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count1 = value.count1;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // count1 - computed: false, optional: true, required: false
  private _count1?: number; 
  public get count1() {
    return this.getNumberAttribute('count1');
  }
  public set count1(value: number) {
    this._count1 = value;
  }
  public resetCount1() {
    this._count1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get count1Input() {
    return this._count1;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class DataThunderNgWafOperOperNgwafStatsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderNgWafOperOperNgwafStatsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNgWafOperOperNgwafStatsListStructOutputReference {
    return new DataThunderNgWafOperOperNgwafStatsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNgWafOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#cache_vport DataThunderNgWafOper#cache_vport}
  */
  readonly cacheVport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#cache_vserver DataThunderNgWafOper#cache_vserver}
  */
  readonly cacheVserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#clear_all DataThunderNgWafOper#clear_all}
  */
  readonly clearAll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#vport DataThunderNgWafOper#vport}
  */
  readonly vport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#vserver DataThunderNgWafOper#vserver}
  */
  readonly vserver?: string;
  /**
  * ngwaf_stats_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#ngwaf_stats_list DataThunderNgWafOper#ngwaf_stats_list}
  */
  readonly ngwafStatsList?: DataThunderNgWafOperOperNgwafStatsListStruct[] | cdktf.IResolvable;
}

export function dataThunderNgWafOperOperToTerraform(struct?: DataThunderNgWafOperOperOutputReference | DataThunderNgWafOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_vport: cdktf.stringToTerraform(struct!.cacheVport),
    cache_vserver: cdktf.stringToTerraform(struct!.cacheVserver),
    clear_all: cdktf.numberToTerraform(struct!.clearAll),
    vport: cdktf.stringToTerraform(struct!.vport),
    vserver: cdktf.stringToTerraform(struct!.vserver),
    ngwaf_stats_list: cdktf.listMapper(dataThunderNgWafOperOperNgwafStatsListStructToTerraform, true)(struct!.ngwafStatsList),
  }
}


export function dataThunderNgWafOperOperToHclTerraform(struct?: DataThunderNgWafOperOperOutputReference | DataThunderNgWafOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_vport: {
      value: cdktf.stringToHclTerraform(struct!.cacheVport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_vserver: {
      value: cdktf.stringToHclTerraform(struct!.cacheVserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clear_all: {
      value: cdktf.numberToHclTerraform(struct!.clearAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vport: {
      value: cdktf.stringToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vserver: {
      value: cdktf.stringToHclTerraform(struct!.vserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngwaf_stats_list: {
      value: cdktf.listMapperHcl(dataThunderNgWafOperOperNgwafStatsListStructToHclTerraform, true)(struct!.ngwafStatsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafOperOperNgwafStatsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheVport !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheVport = this._cacheVport;
    }
    if (this._cacheVserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheVserver = this._cacheVserver;
    }
    if (this._clearAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearAll = this._clearAll;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    if (this._vserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserver = this._vserver;
    }
    if (this._ngwafStatsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwafStatsList = this._ngwafStatsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheVport = undefined;
      this._cacheVserver = undefined;
      this._clearAll = undefined;
      this._vport = undefined;
      this._vserver = undefined;
      this._ngwafStatsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheVport = value.cacheVport;
      this._cacheVserver = value.cacheVserver;
      this._clearAll = value.clearAll;
      this._vport = value.vport;
      this._vserver = value.vserver;
      this._ngwafStatsList.internalValue = value.ngwafStatsList;
    }
  }

  // cache_vport - computed: false, optional: true, required: false
  private _cacheVport?: string; 
  public get cacheVport() {
    return this.getStringAttribute('cache_vport');
  }
  public set cacheVport(value: string) {
    this._cacheVport = value;
  }
  public resetCacheVport() {
    this._cacheVport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheVportInput() {
    return this._cacheVport;
  }

  // cache_vserver - computed: false, optional: true, required: false
  private _cacheVserver?: string; 
  public get cacheVserver() {
    return this.getStringAttribute('cache_vserver');
  }
  public set cacheVserver(value: string) {
    this._cacheVserver = value;
  }
  public resetCacheVserver() {
    this._cacheVserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheVserverInput() {
    return this._cacheVserver;
  }

  // clear_all - computed: false, optional: true, required: false
  private _clearAll?: number; 
  public get clearAll() {
    return this.getNumberAttribute('clear_all');
  }
  public set clearAll(value: number) {
    this._clearAll = value;
  }
  public resetClearAll() {
    this._clearAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearAllInput() {
    return this._clearAll;
  }

  // vport - computed: false, optional: true, required: false
  private _vport?: string; 
  public get vport() {
    return this.getStringAttribute('vport');
  }
  public set vport(value: string) {
    this._vport = value;
  }
  public resetVport() {
    this._vport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }

  // vserver - computed: false, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }

  // ngwaf_stats_list - computed: false, optional: true, required: false
  private _ngwafStatsList = new DataThunderNgWafOperOperNgwafStatsListStructList(this, "ngwaf_stats_list", false);
  public get ngwafStatsList() {
    return this._ngwafStatsList;
  }
  public putNgwafStatsList(value: DataThunderNgWafOperOperNgwafStatsListStruct[] | cdktf.IResolvable) {
    this._ngwafStatsList.internalValue = value;
  }
  public resetNgwafStatsList() {
    this._ngwafStatsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafStatsListInput() {
    return this._ngwafStatsList.internalValue;
  }
}
export interface DataThunderNgWafOperStatusOperPartitionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#access_key_id DataThunderNgWafOper#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#agent_name DataThunderNgWafOper#agent_name}
  */
  readonly agentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#cache_entries DataThunderNgWafOper#cache_entries}
  */
  readonly cacheEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#cpu DataThunderNgWafOper#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#partition_name DataThunderNgWafOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#secret_access_key DataThunderNgWafOper#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#status DataThunderNgWafOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#tracked_custom_signal DataThunderNgWafOper#tracked_custom_signal}
  */
  readonly trackedCustomSignal?: number;
}

export function dataThunderNgWafOperStatusOperPartitionListStructToTerraform(struct?: DataThunderNgWafOperStatusOperPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    agent_name: cdktf.stringToTerraform(struct!.agentName),
    cache_entries: cdktf.numberToTerraform(struct!.cacheEntries),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    status: cdktf.stringToTerraform(struct!.status),
    tracked_custom_signal: cdktf.numberToTerraform(struct!.trackedCustomSignal),
  }
}


export function dataThunderNgWafOperStatusOperPartitionListStructToHclTerraform(struct?: DataThunderNgWafOperStatusOperPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_name: {
      value: cdktf.stringToHclTerraform(struct!.agentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_entries: {
      value: cdktf.numberToHclTerraform(struct!.cacheEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracked_custom_signal: {
      value: cdktf.numberToHclTerraform(struct!.trackedCustomSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperStatusOperPartitionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNgWafOperStatusOperPartitionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._agentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentName = this._agentName;
    }
    if (this._cacheEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEntries = this._cacheEntries;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trackedCustomSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackedCustomSignal = this._trackedCustomSignal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperStatusOperPartitionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._agentName = undefined;
      this._cacheEntries = undefined;
      this._cpu = undefined;
      this._partitionName = undefined;
      this._secretAccessKey = undefined;
      this._status = undefined;
      this._trackedCustomSignal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._agentName = value.agentName;
      this._cacheEntries = value.cacheEntries;
      this._cpu = value.cpu;
      this._partitionName = value.partitionName;
      this._secretAccessKey = value.secretAccessKey;
      this._status = value.status;
      this._trackedCustomSignal = value.trackedCustomSignal;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // agent_name - computed: false, optional: true, required: false
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  public resetAgentName() {
    this._agentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // cache_entries - computed: false, optional: true, required: false
  private _cacheEntries?: number; 
  public get cacheEntries() {
    return this.getNumberAttribute('cache_entries');
  }
  public set cacheEntries(value: number) {
    this._cacheEntries = value;
  }
  public resetCacheEntries() {
    this._cacheEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEntriesInput() {
    return this._cacheEntries;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tracked_custom_signal - computed: false, optional: true, required: false
  private _trackedCustomSignal?: number; 
  public get trackedCustomSignal() {
    return this.getNumberAttribute('tracked_custom_signal');
  }
  public set trackedCustomSignal(value: number) {
    this._trackedCustomSignal = value;
  }
  public resetTrackedCustomSignal() {
    this._trackedCustomSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackedCustomSignalInput() {
    return this._trackedCustomSignal;
  }
}

export class DataThunderNgWafOperStatusOperPartitionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderNgWafOperStatusOperPartitionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNgWafOperStatusOperPartitionListStructOutputReference {
    return new DataThunderNgWafOperStatusOperPartitionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNgWafOperStatusOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#ngwaf_version DataThunderNgWafOper#ngwaf_version}
  */
  readonly ngwafVersion?: string;
  /**
  * partition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#partition_list DataThunderNgWafOper#partition_list}
  */
  readonly partitionList?: DataThunderNgWafOperStatusOperPartitionListStruct[] | cdktf.IResolvable;
}

export function dataThunderNgWafOperStatusOperToTerraform(struct?: DataThunderNgWafOperStatusOperOutputReference | DataThunderNgWafOperStatusOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngwaf_version: cdktf.stringToTerraform(struct!.ngwafVersion),
    partition_list: cdktf.listMapper(dataThunderNgWafOperStatusOperPartitionListStructToTerraform, true)(struct!.partitionList),
  }
}


export function dataThunderNgWafOperStatusOperToHclTerraform(struct?: DataThunderNgWafOperStatusOperOutputReference | DataThunderNgWafOperStatusOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngwaf_version: {
      value: cdktf.stringToHclTerraform(struct!.ngwafVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_list: {
      value: cdktf.listMapperHcl(dataThunderNgWafOperStatusOperPartitionListStructToHclTerraform, true)(struct!.partitionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafOperStatusOperPartitionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperStatusOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafOperStatusOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngwafVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwafVersion = this._ngwafVersion;
    }
    if (this._partitionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionList = this._partitionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperStatusOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ngwafVersion = undefined;
      this._partitionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ngwafVersion = value.ngwafVersion;
      this._partitionList.internalValue = value.partitionList;
    }
  }

  // ngwaf_version - computed: false, optional: true, required: false
  private _ngwafVersion?: string; 
  public get ngwafVersion() {
    return this.getStringAttribute('ngwaf_version');
  }
  public set ngwafVersion(value: string) {
    this._ngwafVersion = value;
  }
  public resetNgwafVersion() {
    this._ngwafVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafVersionInput() {
    return this._ngwafVersion;
  }

  // partition_list - computed: false, optional: true, required: false
  private _partitionList = new DataThunderNgWafOperStatusOperPartitionListStructList(this, "partition_list", false);
  public get partitionList() {
    return this._partitionList;
  }
  public putPartitionList(value: DataThunderNgWafOperStatusOperPartitionListStruct[] | cdktf.IResolvable) {
    this._partitionList.internalValue = value;
  }
  public resetPartitionList() {
    this._partitionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionListInput() {
    return this._partitionList.internalValue;
  }
}
export interface DataThunderNgWafOperStatus {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#oper DataThunderNgWafOper#oper}
  */
  readonly oper?: DataThunderNgWafOperStatusOper;
}

export function dataThunderNgWafOperStatusToTerraform(struct?: DataThunderNgWafOperStatusOutputReference | DataThunderNgWafOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderNgWafOperStatusOperToTerraform(struct!.oper),
  }
}


export function dataThunderNgWafOperStatusToHclTerraform(struct?: DataThunderNgWafOperStatusOutputReference | DataThunderNgWafOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderNgWafOperStatusOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafOperStatusOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafOperStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafOperStatus | undefined) {
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
  private _oper = new DataThunderNgWafOperStatusOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNgWafOperStatusOper) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper thunder_ng_waf_oper}
*/
export class DataThunderNgWafOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ng_waf_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNgWafOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNgWafOper to import
  * @param importFromId The id of the existing DataThunderNgWafOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNgWafOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ng_waf_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_oper thunder_ng_waf_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNgWafOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNgWafOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ng_waf_oper',
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
    this._customPage.internalValue = config.customPage;
    this._customSignals.internalValue = config.customSignals;
    this._oper.internalValue = config.oper;
    this._status.internalValue = config.status;
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

  // custom_page - computed: false, optional: true, required: false
  private _customPage = new DataThunderNgWafOperCustomPageOutputReference(this, "custom_page");
  public get customPage() {
    return this._customPage;
  }
  public putCustomPage(value: DataThunderNgWafOperCustomPage) {
    this._customPage.internalValue = value;
  }
  public resetCustomPage() {
    this._customPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage.internalValue;
  }

  // custom_signals - computed: false, optional: true, required: false
  private _customSignals = new DataThunderNgWafOperCustomSignalsOutputReference(this, "custom_signals");
  public get customSignals() {
    return this._customSignals;
  }
  public putCustomSignals(value: DataThunderNgWafOperCustomSignals) {
    this._customSignals.internalValue = value;
  }
  public resetCustomSignals() {
    this._customSignals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignalsInput() {
    return this._customSignals.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderNgWafOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNgWafOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataThunderNgWafOperStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataThunderNgWafOperStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      custom_page: dataThunderNgWafOperCustomPageToTerraform(this._customPage.internalValue),
      custom_signals: dataThunderNgWafOperCustomSignalsToTerraform(this._customSignals.internalValue),
      oper: dataThunderNgWafOperOperToTerraform(this._oper.internalValue),
      status: dataThunderNgWafOperStatusToTerraform(this._status.internalValue),
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
      custom_page: {
        value: dataThunderNgWafOperCustomPageToHclTerraform(this._customPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNgWafOperCustomPageList",
      },
      custom_signals: {
        value: dataThunderNgWafOperCustomSignalsToHclTerraform(this._customSignals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNgWafOperCustomSignalsList",
      },
      oper: {
        value: dataThunderNgWafOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNgWafOperOperList",
      },
      status: {
        value: dataThunderNgWafOperStatusToHclTerraform(this._status.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNgWafOperStatusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
