// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTelemetryLogTopKSourceListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#id DataThunderSystemTelemetryLogTopKSourceListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#oper DataThunderSystemTelemetryLogTopKSourceListOper#oper}
  */
  readonly oper?: DataThunderSystemTelemetryLogTopKSourceListOperOper;
}
export interface DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#indicator_value DataThunderSystemTelemetryLogTopKSourceListOper#indicator_value}
  */
  readonly indicatorValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#ip_address DataThunderSystemTelemetryLogTopKSourceListOper#ip_address}
  */
  readonly ipAddress?: string;
}

export function dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructToTerraform(struct?: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_value: cdktf.numberToTerraform(struct!.indicatorValue),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructToHclTerraform(struct?: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_value: {
      value: cdktf.numberToHclTerraform(struct!.indicatorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorValue = this._indicatorValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorValue = value.indicatorValue;
      this._ipAddress = value.ipAddress;
    }
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructOutputReference {
    return new DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#indicator DataThunderSystemTelemetryLogTopKSourceListOper#indicator}
  */
  readonly indicator?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#indicator_list DataThunderSystemTelemetryLogTopKSourceListOper#indicator_list}
  */
  readonly indicatorList?: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructToTerraform(struct?: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator: cdktf.stringToTerraform(struct!.indicator),
    indicator_list: cdktf.listMapper(dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructToTerraform, true)(struct!.indicatorList),
  }
}


export function dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructToHclTerraform(struct?: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct | cdktf.IResolvable | undefined) {
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
  private _indicatorList = new DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListIndicatorListStruct[] | cdktf.IResolvable) {
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

export class DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructOutputReference {
    return new DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemTelemetryLogTopKSourceListOperOper {
  /**
  * top_k_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#top_k_source_list DataThunderSystemTelemetryLogTopKSourceListOper#top_k_source_list}
  */
  readonly topKSourceList?: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemTelemetryLogTopKSourceListOperOperToTerraform(struct?: DataThunderSystemTelemetryLogTopKSourceListOperOperOutputReference | DataThunderSystemTelemetryLogTopKSourceListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    top_k_source_list: cdktf.listMapper(dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructToTerraform, true)(struct!.topKSourceList),
  }
}


export function dataThunderSystemTelemetryLogTopKSourceListOperOperToHclTerraform(struct?: DataThunderSystemTelemetryLogTopKSourceListOperOperOutputReference | DataThunderSystemTelemetryLogTopKSourceListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    top_k_source_list: {
      value: cdktf.listMapperHcl(dataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructToHclTerraform, true)(struct!.topKSourceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTelemetryLogTopKSourceListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTelemetryLogTopKSourceListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topKSourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKSourceList = this._topKSourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTelemetryLogTopKSourceListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topKSourceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topKSourceList.internalValue = value.topKSourceList;
    }
  }

  // top_k_source_list - computed: false, optional: true, required: false
  private _topKSourceList = new DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStructList(this, "top_k_source_list", false);
  public get topKSourceList() {
    return this._topKSourceList;
  }
  public putTopKSourceList(value: DataThunderSystemTelemetryLogTopKSourceListOperOperTopKSourceListStruct[] | cdktf.IResolvable) {
    this._topKSourceList.internalValue = value;
  }
  public resetTopKSourceList() {
    this._topKSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKSourceListInput() {
    return this._topKSourceList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper thunder_system_telemetry_log_top_k_source_list_oper}
*/
export class DataThunderSystemTelemetryLogTopKSourceListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_telemetry_log_top_k_source_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTelemetryLogTopKSourceListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTelemetryLogTopKSourceListOper to import
  * @param importFromId The id of the existing DataThunderSystemTelemetryLogTopKSourceListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTelemetryLogTopKSourceListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_telemetry_log_top_k_source_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_telemetry_log_top_k_source_list_oper thunder_system_telemetry_log_top_k_source_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTelemetryLogTopKSourceListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTelemetryLogTopKSourceListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_telemetry_log_top_k_source_list_oper',
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
  private _oper = new DataThunderSystemTelemetryLogTopKSourceListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTelemetryLogTopKSourceListOperOper) {
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
      oper: dataThunderSystemTelemetryLogTopKSourceListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemTelemetryLogTopKSourceListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTelemetryLogTopKSourceListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
