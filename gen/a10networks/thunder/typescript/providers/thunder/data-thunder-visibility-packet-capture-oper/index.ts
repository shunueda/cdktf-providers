// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityPacketCaptureOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#id DataThunderVisibilityPacketCaptureOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * automated_captures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#automated_captures DataThunderVisibilityPacketCaptureOper#automated_captures}
  */
  readonly automatedCaptures?: DataThunderVisibilityPacketCaptureOperAutomatedCaptures;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#oper DataThunderVisibilityPacketCaptureOper#oper}
  */
  readonly oper?: DataThunderVisibilityPacketCaptureOperOper;
}
export interface DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#automated_capture_config_line DataThunderVisibilityPacketCaptureOper#automated_capture_config_line}
  */
  readonly automatedCaptureConfigLine?: string;
}

export function dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigToTerraform(struct?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated_capture_config_line: cdktf.stringToTerraform(struct!.automatedCaptureConfigLine),
  }
}


export function dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigToHclTerraform(struct?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automated_capture_config_line: {
      value: cdktf.stringToHclTerraform(struct!.automatedCaptureConfigLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatedCaptureConfigLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCaptureConfigLine = this._automatedCaptureConfigLine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatedCaptureConfigLine = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatedCaptureConfigLine = value.automatedCaptureConfigLine;
    }
  }

  // automated_capture_config_line - computed: false, optional: true, required: false
  private _automatedCaptureConfigLine?: string; 
  public get automatedCaptureConfigLine() {
    return this.getStringAttribute('automated_capture_config_line');
  }
  public set automatedCaptureConfigLine(value: string) {
    this._automatedCaptureConfigLine = value;
  }
  public resetAutomatedCaptureConfigLine() {
    this._automatedCaptureConfigLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCaptureConfigLineInput() {
    return this._automatedCaptureConfigLine;
  }
}

export class DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigOutputReference {
    return new DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityPacketCaptureOperAutomatedCapturesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#capture_name DataThunderVisibilityPacketCaptureOper#capture_name}
  */
  readonly captureName?: string;
  /**
  * automated_capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#automated_capture_config DataThunderVisibilityPacketCaptureOper#automated_capture_config}
  */
  readonly automatedCaptureConfig?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig[] | cdktf.IResolvable;
}

export function dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperToTerraform(struct?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperOutputReference | DataThunderVisibilityPacketCaptureOperAutomatedCapturesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_name: cdktf.stringToTerraform(struct!.captureName),
    automated_capture_config: cdktf.listMapper(dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigToTerraform, true)(struct!.automatedCaptureConfig),
  }
}


export function dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperToHclTerraform(struct?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperOutputReference | DataThunderVisibilityPacketCaptureOperAutomatedCapturesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_name: {
      value: cdktf.stringToHclTerraform(struct!.captureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automated_capture_config: {
      value: cdktf.listMapperHcl(dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigToHclTerraform, true)(struct!.automatedCaptureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureOperAutomatedCapturesOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureName = this._captureName;
    }
    if (this._automatedCaptureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCaptureConfig = this._automatedCaptureConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureName = undefined;
      this._automatedCaptureConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureName = value.captureName;
      this._automatedCaptureConfig.internalValue = value.automatedCaptureConfig;
    }
  }

  // capture_name - computed: false, optional: true, required: false
  private _captureName?: string; 
  public get captureName() {
    return this.getStringAttribute('capture_name');
  }
  public set captureName(value: string) {
    this._captureName = value;
  }
  public resetCaptureName() {
    this._captureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureNameInput() {
    return this._captureName;
  }

  // automated_capture_config - computed: false, optional: true, required: false
  private _automatedCaptureConfig = new DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfigList(this, "automated_capture_config", false);
  public get automatedCaptureConfig() {
    return this._automatedCaptureConfig;
  }
  public putAutomatedCaptureConfig(value: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperAutomatedCaptureConfig[] | cdktf.IResolvable) {
    this._automatedCaptureConfig.internalValue = value;
  }
  public resetAutomatedCaptureConfig() {
    this._automatedCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCaptureConfigInput() {
    return this._automatedCaptureConfig.internalValue;
  }
}
export interface DataThunderVisibilityPacketCaptureOperAutomatedCaptures {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#oper DataThunderVisibilityPacketCaptureOper#oper}
  */
  readonly oper?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOper;
}

export function dataThunderVisibilityPacketCaptureOperAutomatedCapturesToTerraform(struct?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOutputReference | DataThunderVisibilityPacketCaptureOperAutomatedCaptures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityPacketCaptureOperAutomatedCapturesToHclTerraform(struct?: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOutputReference | DataThunderVisibilityPacketCaptureOperAutomatedCaptures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityPacketCaptureOperAutomatedCapturesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureOperAutomatedCapturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureOperAutomatedCaptures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureOperAutomatedCaptures | undefined) {
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
  private _oper = new DataThunderVisibilityPacketCaptureOperAutomatedCapturesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityPacketCaptureOperAutomatedCapturesOper) {
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
export interface DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#file_size DataThunderVisibilityPacketCaptureOper#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#last_modified DataThunderVisibilityPacketCaptureOper#last_modified}
  */
  readonly lastModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#packet_capture_file_name DataThunderVisibilityPacketCaptureOper#packet_capture_file_name}
  */
  readonly packetCaptureFileName?: string;
}

export function dataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructToTerraform(struct?: DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    last_modified: cdktf.stringToTerraform(struct!.lastModified),
    packet_capture_file_name: cdktf.stringToTerraform(struct!.packetCaptureFileName),
  }
}


export function dataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructToHclTerraform(struct?: DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_modified: {
      value: cdktf.stringToHclTerraform(struct!.lastModified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture_file_name: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._lastModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModified = this._lastModified;
    }
    if (this._packetCaptureFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureFileName = this._packetCaptureFileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSize = undefined;
      this._lastModified = undefined;
      this._packetCaptureFileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSize = value.fileSize;
      this._lastModified = value.lastModified;
      this._packetCaptureFileName = value.packetCaptureFileName;
    }
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

  // last_modified - computed: false, optional: true, required: false
  private _lastModified?: string; 
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }
  public set lastModified(value: string) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
  }

  // packet_capture_file_name - computed: false, optional: true, required: false
  private _packetCaptureFileName?: string; 
  public get packetCaptureFileName() {
    return this.getStringAttribute('packet_capture_file_name');
  }
  public set packetCaptureFileName(value: string) {
    this._packetCaptureFileName = value;
  }
  public resetPacketCaptureFileName() {
    this._packetCaptureFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureFileNameInput() {
    return this._packetCaptureFileName;
  }
}

export class DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructOutputReference {
    return new DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityPacketCaptureOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#memory_usage DataThunderVisibilityPacketCaptureOper#memory_usage}
  */
  readonly memoryUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#packet_capture_files DataThunderVisibilityPacketCaptureOper#packet_capture_files}
  */
  readonly packetCaptureFiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#total_memory DataThunderVisibilityPacketCaptureOper#total_memory}
  */
  readonly totalMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#total_number_of_files DataThunderVisibilityPacketCaptureOper#total_number_of_files}
  */
  readonly totalNumberOfFiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#used_memory DataThunderVisibilityPacketCaptureOper#used_memory}
  */
  readonly usedMemory?: string;
  /**
  * packet_capture_file_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#packet_capture_file_name_list DataThunderVisibilityPacketCaptureOper#packet_capture_file_name_list}
  */
  readonly packetCaptureFileNameList?: DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityPacketCaptureOperOperToTerraform(struct?: DataThunderVisibilityPacketCaptureOperOperOutputReference | DataThunderVisibilityPacketCaptureOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_usage: cdktf.numberToTerraform(struct!.memoryUsage),
    packet_capture_files: cdktf.numberToTerraform(struct!.packetCaptureFiles),
    total_memory: cdktf.stringToTerraform(struct!.totalMemory),
    total_number_of_files: cdktf.numberToTerraform(struct!.totalNumberOfFiles),
    used_memory: cdktf.stringToTerraform(struct!.usedMemory),
    packet_capture_file_name_list: cdktf.listMapper(dataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructToTerraform, true)(struct!.packetCaptureFileNameList),
  }
}


export function dataThunderVisibilityPacketCaptureOperOperToHclTerraform(struct?: DataThunderVisibilityPacketCaptureOperOperOutputReference | DataThunderVisibilityPacketCaptureOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_usage: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_capture_files: {
      value: cdktf.numberToHclTerraform(struct!.packetCaptureFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_memory: {
      value: cdktf.stringToHclTerraform(struct!.totalMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_number_of_files: {
      value: cdktf.numberToHclTerraform(struct!.totalNumberOfFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_memory: {
      value: cdktf.stringToHclTerraform(struct!.usedMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture_file_name_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructToHclTerraform, true)(struct!.packetCaptureFileNameList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsage = this._memoryUsage;
    }
    if (this._packetCaptureFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureFiles = this._packetCaptureFiles;
    }
    if (this._totalMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemory = this._totalMemory;
    }
    if (this._totalNumberOfFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumberOfFiles = this._totalNumberOfFiles;
    }
    if (this._usedMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedMemory = this._usedMemory;
    }
    if (this._packetCaptureFileNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureFileNameList = this._packetCaptureFileNameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryUsage = undefined;
      this._packetCaptureFiles = undefined;
      this._totalMemory = undefined;
      this._totalNumberOfFiles = undefined;
      this._usedMemory = undefined;
      this._packetCaptureFileNameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryUsage = value.memoryUsage;
      this._packetCaptureFiles = value.packetCaptureFiles;
      this._totalMemory = value.totalMemory;
      this._totalNumberOfFiles = value.totalNumberOfFiles;
      this._usedMemory = value.usedMemory;
      this._packetCaptureFileNameList.internalValue = value.packetCaptureFileNameList;
    }
  }

  // memory_usage - computed: false, optional: true, required: false
  private _memoryUsage?: number; 
  public get memoryUsage() {
    return this.getNumberAttribute('memory_usage');
  }
  public set memoryUsage(value: number) {
    this._memoryUsage = value;
  }
  public resetMemoryUsage() {
    this._memoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageInput() {
    return this._memoryUsage;
  }

  // packet_capture_files - computed: false, optional: true, required: false
  private _packetCaptureFiles?: number; 
  public get packetCaptureFiles() {
    return this.getNumberAttribute('packet_capture_files');
  }
  public set packetCaptureFiles(value: number) {
    this._packetCaptureFiles = value;
  }
  public resetPacketCaptureFiles() {
    this._packetCaptureFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureFilesInput() {
    return this._packetCaptureFiles;
  }

  // total_memory - computed: false, optional: true, required: false
  private _totalMemory?: string; 
  public get totalMemory() {
    return this.getStringAttribute('total_memory');
  }
  public set totalMemory(value: string) {
    this._totalMemory = value;
  }
  public resetTotalMemory() {
    this._totalMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryInput() {
    return this._totalMemory;
  }

  // total_number_of_files - computed: false, optional: true, required: false
  private _totalNumberOfFiles?: number; 
  public get totalNumberOfFiles() {
    return this.getNumberAttribute('total_number_of_files');
  }
  public set totalNumberOfFiles(value: number) {
    this._totalNumberOfFiles = value;
  }
  public resetTotalNumberOfFiles() {
    this._totalNumberOfFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumberOfFilesInput() {
    return this._totalNumberOfFiles;
  }

  // used_memory - computed: false, optional: true, required: false
  private _usedMemory?: string; 
  public get usedMemory() {
    return this.getStringAttribute('used_memory');
  }
  public set usedMemory(value: string) {
    this._usedMemory = value;
  }
  public resetUsedMemory() {
    this._usedMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedMemoryInput() {
    return this._usedMemory;
  }

  // packet_capture_file_name_list - computed: false, optional: true, required: false
  private _packetCaptureFileNameList = new DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStructList(this, "packet_capture_file_name_list", false);
  public get packetCaptureFileNameList() {
    return this._packetCaptureFileNameList;
  }
  public putPacketCaptureFileNameList(value: DataThunderVisibilityPacketCaptureOperOperPacketCaptureFileNameListStruct[] | cdktf.IResolvable) {
    this._packetCaptureFileNameList.internalValue = value;
  }
  public resetPacketCaptureFileNameList() {
    this._packetCaptureFileNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureFileNameListInput() {
    return this._packetCaptureFileNameList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper thunder_visibility_packet_capture_oper}
*/
export class DataThunderVisibilityPacketCaptureOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityPacketCaptureOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityPacketCaptureOper to import
  * @param importFromId The id of the existing DataThunderVisibilityPacketCaptureOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityPacketCaptureOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_oper thunder_visibility_packet_capture_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityPacketCaptureOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityPacketCaptureOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_oper',
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
    this._automatedCaptures.internalValue = config.automatedCaptures;
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

  // automated_captures - computed: false, optional: true, required: false
  private _automatedCaptures = new DataThunderVisibilityPacketCaptureOperAutomatedCapturesOutputReference(this, "automated_captures");
  public get automatedCaptures() {
    return this._automatedCaptures;
  }
  public putAutomatedCaptures(value: DataThunderVisibilityPacketCaptureOperAutomatedCaptures) {
    this._automatedCaptures.internalValue = value;
  }
  public resetAutomatedCaptures() {
    this._automatedCaptures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCapturesInput() {
    return this._automatedCaptures.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityPacketCaptureOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityPacketCaptureOperOper) {
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
      automated_captures: dataThunderVisibilityPacketCaptureOperAutomatedCapturesToTerraform(this._automatedCaptures.internalValue),
      oper: dataThunderVisibilityPacketCaptureOperOperToTerraform(this._oper.internalValue),
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
      automated_captures: {
        value: dataThunderVisibilityPacketCaptureOperAutomatedCapturesToHclTerraform(this._automatedCaptures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPacketCaptureOperAutomatedCapturesList",
      },
      oper: {
        value: dataThunderVisibilityPacketCaptureOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPacketCaptureOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
