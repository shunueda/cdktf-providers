// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTelemetryLogTopKAppSvcListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#id DataThunderSystemTelemetryLogTopKAppSvcListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#oper DataThunderSystemTelemetryLogTopKAppSvcListOper#oper}
  */
  readonly oper?: DataThunderSystemTelemetryLogTopKAppSvcListOperOper;
}
export interface DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#app_svc_name DataThunderSystemTelemetryLogTopKAppSvcListOper#app_svc_name}
  */
  readonly appSvcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#app_svc_uuid DataThunderSystemTelemetryLogTopKAppSvcListOper#app_svc_uuid}
  */
  readonly appSvcUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#indicator_value DataThunderSystemTelemetryLogTopKAppSvcListOper#indicator_value}
  */
  readonly indicatorValue?: number;
}

export function dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructToTerraform(struct?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_svc_name: cdktf.stringToTerraform(struct!.appSvcName),
    app_svc_uuid: cdktf.stringToTerraform(struct!.appSvcUuid),
    indicator_value: cdktf.numberToTerraform(struct!.indicatorValue),
  }
}


export function dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructToHclTerraform(struct?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_svc_name: {
      value: cdktf.stringToHclTerraform(struct!.appSvcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_svc_uuid: {
      value: cdktf.stringToHclTerraform(struct!.appSvcUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_value: {
      value: cdktf.numberToHclTerraform(struct!.indicatorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appSvcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSvcName = this._appSvcName;
    }
    if (this._appSvcUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSvcUuid = this._appSvcUuid;
    }
    if (this._indicatorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorValue = this._indicatorValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appSvcName = undefined;
      this._appSvcUuid = undefined;
      this._indicatorValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appSvcName = value.appSvcName;
      this._appSvcUuid = value.appSvcUuid;
      this._indicatorValue = value.indicatorValue;
    }
  }

  // app_svc_name - computed: false, optional: true, required: false
  private _appSvcName?: string; 
  public get appSvcName() {
    return this.getStringAttribute('app_svc_name');
  }
  public set appSvcName(value: string) {
    this._appSvcName = value;
  }
  public resetAppSvcName() {
    this._appSvcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSvcNameInput() {
    return this._appSvcName;
  }

  // app_svc_uuid - computed: false, optional: true, required: false
  private _appSvcUuid?: string; 
  public get appSvcUuid() {
    return this.getStringAttribute('app_svc_uuid');
  }
  public set appSvcUuid(value: string) {
    this._appSvcUuid = value;
  }
  public resetAppSvcUuid() {
    this._appSvcUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSvcUuidInput() {
    return this._appSvcUuid;
  }

  // indicator_value - computed: false, optional: true, required: false
  private _indicatorValue?: number; 
  public get indicatorValue() {
    return this.getNumberAttribute('indicator_value');
  }
  public set indicatorValue(value: number) {
    this._indicatorValue = value;
  }
  public resetIndicatorValue() {
    this._indicatorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorValueInput() {
    return this._indicatorValue;
  }
}

export class DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructOutputReference {
    return new DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#indicator DataThunderSystemTelemetryLogTopKAppSvcListOper#indicator}
  */
  readonly indicator?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#indicator_list DataThunderSystemTelemetryLogTopKAppSvcListOper#indicator_list}
  */
  readonly indicatorList?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructToTerraform(struct?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator: cdktf.stringToTerraform(struct!.indicator),
    indicator_list: cdktf.listMapper(dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructToTerraform, true)(struct!.indicatorList),
  }
}


export function dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructToHclTerraform(struct?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator: {
      value: cdktf.stringToHclTerraform(struct!.indicator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_list: {
      value: cdktf.listMapperHcl(dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicator = this._indicator;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicator = undefined;
      this._indicatorList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicator = value.indicator;
      this._indicatorList.internalValue = value.indicatorList;
    }
  }

  // indicator - computed: false, optional: true, required: false
  private _indicator?: string; 
  public get indicator() {
    return this.getStringAttribute('indicator');
  }
  public set indicator(value: string) {
    this._indicator = value;
  }
  public resetIndicator() {
    this._indicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorInput() {
    return this._indicator;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }
}

export class DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructOutputReference {
    return new DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemTelemetryLogTopKAppSvcListOperOper {
  /**
  * top_k_app_svc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#top_k_app_svc_list DataThunderSystemTelemetryLogTopKAppSvcListOper#top_k_app_svc_list}
  */
  readonly topKAppSvcList?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemTelemetryLogTopKAppSvcListOperOperToTerraform(struct?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperOutputReference | DataThunderSystemTelemetryLogTopKAppSvcListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    top_k_app_svc_list: cdktf.listMapper(dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructToTerraform, true)(struct!.topKAppSvcList),
  }
}


export function dataThunderSystemTelemetryLogTopKAppSvcListOperOperToHclTerraform(struct?: DataThunderSystemTelemetryLogTopKAppSvcListOperOperOutputReference | DataThunderSystemTelemetryLogTopKAppSvcListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    top_k_app_svc_list: {
      value: cdktf.listMapperHcl(dataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructToHclTerraform, true)(struct!.topKAppSvcList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogTopKAppSvcListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTelemetryLogTopKAppSvcListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topKAppSvcList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKAppSvcList = this._topKAppSvcList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogTopKAppSvcListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topKAppSvcList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topKAppSvcList.internalValue = value.topKAppSvcList;
    }
  }

  // top_k_app_svc_list - computed: false, optional: true, required: false
  private _topKAppSvcList = new DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStructList(this, "top_k_app_svc_list", false);
  public get topKAppSvcList() {
    return this._topKAppSvcList;
  }
  public putTopKAppSvcList(value: DataThunderSystemTelemetryLogTopKAppSvcListOperOperTopKAppSvcListStruct[] | cdktf.IResolvable) {
    this._topKAppSvcList.internalValue = value;
  }
  public resetTopKAppSvcList() {
    this._topKAppSvcList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKAppSvcListInput() {
    return this._topKAppSvcList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper thunder_system_telemetry_log_top_k_app_svc_list_oper}
*/
export class DataThunderSystemTelemetryLogTopKAppSvcListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_telemetry_log_top_k_app_svc_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTelemetryLogTopKAppSvcListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTelemetryLogTopKAppSvcListOper to import
  * @param importFromId The id of the existing DataThunderSystemTelemetryLogTopKAppSvcListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTelemetryLogTopKAppSvcListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_telemetry_log_top_k_app_svc_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_app_svc_list_oper thunder_system_telemetry_log_top_k_app_svc_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTelemetryLogTopKAppSvcListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTelemetryLogTopKAppSvcListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_telemetry_log_top_k_app_svc_list_oper',
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
  private _oper = new DataThunderSystemTelemetryLogTopKAppSvcListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTelemetryLogTopKAppSvcListOperOper) {
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
      oper: dataThunderSystemTelemetryLogTopKAppSvcListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemTelemetryLogTopKAppSvcListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTelemetryLogTopKAppSvcListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
