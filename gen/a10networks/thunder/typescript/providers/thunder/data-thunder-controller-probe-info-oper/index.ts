// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderControllerProbeInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#id DataThunderControllerProbeInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#oper DataThunderControllerProbeInfoOper#oper}
  */
  readonly oper?: DataThunderControllerProbeInfoOperOper;
}
export interface DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#showtech_filename DataThunderControllerProbeInfoOper#showtech_filename}
  */
  readonly showtechFilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#showtech_size DataThunderControllerProbeInfoOper#showtech_size}
  */
  readonly showtechSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#showtech_timestamp DataThunderControllerProbeInfoOper#showtech_timestamp}
  */
  readonly showtechTimestamp?: string;
}

export function dataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructToTerraform(struct?: DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    showtech_filename: cdktf.stringToTerraform(struct!.showtechFilename),
    showtech_size: cdktf.numberToTerraform(struct!.showtechSize),
    showtech_timestamp: cdktf.stringToTerraform(struct!.showtechTimestamp),
  }
}


export function dataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructToHclTerraform(struct?: DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    showtech_filename: {
      value: cdktf.stringToHclTerraform(struct!.showtechFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    showtech_size: {
      value: cdktf.numberToHclTerraform(struct!.showtechSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    showtech_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.showtechTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showtechFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.showtechFilename = this._showtechFilename;
    }
    if (this._showtechSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.showtechSize = this._showtechSize;
    }
    if (this._showtechTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showtechTimestamp = this._showtechTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showtechFilename = undefined;
      this._showtechSize = undefined;
      this._showtechTimestamp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showtechFilename = value.showtechFilename;
      this._showtechSize = value.showtechSize;
      this._showtechTimestamp = value.showtechTimestamp;
    }
  }

  // showtech_filename - computed: false, optional: true, required: false
  private _showtechFilename?: string; 
  public get showtechFilename() {
    return this.getStringAttribute('showtech_filename');
  }
  public set showtechFilename(value: string) {
    this._showtechFilename = value;
  }
  public resetShowtechFilename() {
    this._showtechFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showtechFilenameInput() {
    return this._showtechFilename;
  }

  // showtech_size - computed: false, optional: true, required: false
  private _showtechSize?: number; 
  public get showtechSize() {
    return this.getNumberAttribute('showtech_size');
  }
  public set showtechSize(value: number) {
    this._showtechSize = value;
  }
  public resetShowtechSize() {
    this._showtechSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showtechSizeInput() {
    return this._showtechSize;
  }

  // showtech_timestamp - computed: false, optional: true, required: false
  private _showtechTimestamp?: string; 
  public get showtechTimestamp() {
    return this.getStringAttribute('showtech_timestamp');
  }
  public set showtechTimestamp(value: string) {
    this._showtechTimestamp = value;
  }
  public resetShowtechTimestamp() {
    this._showtechTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showtechTimestampInput() {
    return this._showtechTimestamp;
  }
}

export class DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructOutputReference {
    return new DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#varlog_filename DataThunderControllerProbeInfoOper#varlog_filename}
  */
  readonly varlogFilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#varlog_size DataThunderControllerProbeInfoOper#varlog_size}
  */
  readonly varlogSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#varlog_timestamp DataThunderControllerProbeInfoOper#varlog_timestamp}
  */
  readonly varlogTimestamp?: string;
}

export function dataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructToTerraform(struct?: DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    varlog_filename: cdktf.stringToTerraform(struct!.varlogFilename),
    varlog_size: cdktf.numberToTerraform(struct!.varlogSize),
    varlog_timestamp: cdktf.stringToTerraform(struct!.varlogTimestamp),
  }
}


export function dataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructToHclTerraform(struct?: DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    varlog_filename: {
      value: cdktf.stringToHclTerraform(struct!.varlogFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    varlog_size: {
      value: cdktf.numberToHclTerraform(struct!.varlogSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    varlog_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.varlogTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._varlogFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.varlogFilename = this._varlogFilename;
    }
    if (this._varlogSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.varlogSize = this._varlogSize;
    }
    if (this._varlogTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.varlogTimestamp = this._varlogTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._varlogFilename = undefined;
      this._varlogSize = undefined;
      this._varlogTimestamp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._varlogFilename = value.varlogFilename;
      this._varlogSize = value.varlogSize;
      this._varlogTimestamp = value.varlogTimestamp;
    }
  }

  // varlog_filename - computed: false, optional: true, required: false
  private _varlogFilename?: string; 
  public get varlogFilename() {
    return this.getStringAttribute('varlog_filename');
  }
  public set varlogFilename(value: string) {
    this._varlogFilename = value;
  }
  public resetVarlogFilename() {
    this._varlogFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varlogFilenameInput() {
    return this._varlogFilename;
  }

  // varlog_size - computed: false, optional: true, required: false
  private _varlogSize?: number; 
  public get varlogSize() {
    return this.getNumberAttribute('varlog_size');
  }
  public set varlogSize(value: number) {
    this._varlogSize = value;
  }
  public resetVarlogSize() {
    this._varlogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varlogSizeInput() {
    return this._varlogSize;
  }

  // varlog_timestamp - computed: false, optional: true, required: false
  private _varlogTimestamp?: string; 
  public get varlogTimestamp() {
    return this.getStringAttribute('varlog_timestamp');
  }
  public set varlogTimestamp(value: string) {
    this._varlogTimestamp = value;
  }
  public resetVarlogTimestamp() {
    this._varlogTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varlogTimestampInput() {
    return this._varlogTimestamp;
  }
}

export class DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructOutputReference {
    return new DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderControllerProbeInfoOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#controller_status DataThunderControllerProbeInfoOper#controller_status}
  */
  readonly controllerStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#probe_status DataThunderControllerProbeInfoOper#probe_status}
  */
  readonly probeStatus?: string;
  /**
  * data_showtech_export_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#data_showtech_export_log_list DataThunderControllerProbeInfoOper#data_showtech_export_log_list}
  */
  readonly dataShowtechExportLogList?: DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct[] | cdktf.IResolvable;
  /**
  * data_varlog_export_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#data_varlog_export_log_list DataThunderControllerProbeInfoOper#data_varlog_export_log_list}
  */
  readonly dataVarlogExportLogList?: DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderControllerProbeInfoOperOperToTerraform(struct?: DataThunderControllerProbeInfoOperOperOutputReference | DataThunderControllerProbeInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_status: cdktf.stringToTerraform(struct!.controllerStatus),
    probe_status: cdktf.stringToTerraform(struct!.probeStatus),
    data_showtech_export_log_list: cdktf.listMapper(dataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructToTerraform, true)(struct!.dataShowtechExportLogList),
    data_varlog_export_log_list: cdktf.listMapper(dataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructToTerraform, true)(struct!.dataVarlogExportLogList),
  }
}


export function dataThunderControllerProbeInfoOperOperToHclTerraform(struct?: DataThunderControllerProbeInfoOperOperOutputReference | DataThunderControllerProbeInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_status: {
      value: cdktf.stringToHclTerraform(struct!.controllerStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_status: {
      value: cdktf.stringToHclTerraform(struct!.probeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_showtech_export_log_list: {
      value: cdktf.listMapperHcl(dataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructToHclTerraform, true)(struct!.dataShowtechExportLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructList",
    },
    data_varlog_export_log_list: {
      value: cdktf.listMapperHcl(dataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructToHclTerraform, true)(struct!.dataVarlogExportLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderControllerProbeInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderControllerProbeInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerStatus = this._controllerStatus;
    }
    if (this._probeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeStatus = this._probeStatus;
    }
    if (this._dataShowtechExportLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataShowtechExportLogList = this._dataShowtechExportLogList?.internalValue;
    }
    if (this._dataVarlogExportLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVarlogExportLogList = this._dataVarlogExportLogList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderControllerProbeInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controllerStatus = undefined;
      this._probeStatus = undefined;
      this._dataShowtechExportLogList.internalValue = undefined;
      this._dataVarlogExportLogList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controllerStatus = value.controllerStatus;
      this._probeStatus = value.probeStatus;
      this._dataShowtechExportLogList.internalValue = value.dataShowtechExportLogList;
      this._dataVarlogExportLogList.internalValue = value.dataVarlogExportLogList;
    }
  }

  // controller_status - computed: false, optional: true, required: false
  private _controllerStatus?: string; 
  public get controllerStatus() {
    return this.getStringAttribute('controller_status');
  }
  public set controllerStatus(value: string) {
    this._controllerStatus = value;
  }
  public resetControllerStatus() {
    this._controllerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerStatusInput() {
    return this._controllerStatus;
  }

  // probe_status - computed: false, optional: true, required: false
  private _probeStatus?: string; 
  public get probeStatus() {
    return this.getStringAttribute('probe_status');
  }
  public set probeStatus(value: string) {
    this._probeStatus = value;
  }
  public resetProbeStatus() {
    this._probeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeStatusInput() {
    return this._probeStatus;
  }

  // data_showtech_export_log_list - computed: false, optional: true, required: false
  private _dataShowtechExportLogList = new DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStructList(this, "data_showtech_export_log_list", false);
  public get dataShowtechExportLogList() {
    return this._dataShowtechExportLogList;
  }
  public putDataShowtechExportLogList(value: DataThunderControllerProbeInfoOperOperDataShowtechExportLogListStruct[] | cdktf.IResolvable) {
    this._dataShowtechExportLogList.internalValue = value;
  }
  public resetDataShowtechExportLogList() {
    this._dataShowtechExportLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataShowtechExportLogListInput() {
    return this._dataShowtechExportLogList.internalValue;
  }

  // data_varlog_export_log_list - computed: false, optional: true, required: false
  private _dataVarlogExportLogList = new DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStructList(this, "data_varlog_export_log_list", false);
  public get dataVarlogExportLogList() {
    return this._dataVarlogExportLogList;
  }
  public putDataVarlogExportLogList(value: DataThunderControllerProbeInfoOperOperDataVarlogExportLogListStruct[] | cdktf.IResolvable) {
    this._dataVarlogExportLogList.internalValue = value;
  }
  public resetDataVarlogExportLogList() {
    this._dataVarlogExportLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVarlogExportLogListInput() {
    return this._dataVarlogExportLogList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper thunder_controller_probe_info_oper}
*/
export class DataThunderControllerProbeInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_controller_probe_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderControllerProbeInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderControllerProbeInfoOper to import
  * @param importFromId The id of the existing DataThunderControllerProbeInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderControllerProbeInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_controller_probe_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_oper thunder_controller_probe_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderControllerProbeInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderControllerProbeInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_controller_probe_info_oper',
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
  private _oper = new DataThunderControllerProbeInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderControllerProbeInfoOperOper) {
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
      oper: dataThunderControllerProbeInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderControllerProbeInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderControllerProbeInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
