// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemPowerOnSelfTestOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper#id DataThunderSystemPowerOnSelfTestOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper#oper DataThunderSystemPowerOnSelfTestOper#oper}
  */
  readonly oper?: DataThunderSystemPowerOnSelfTestOperOper;
}
export interface DataThunderSystemPowerOnSelfTestOperOperPowerOnLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper#dlog_data DataThunderSystemPowerOnSelfTestOper#dlog_data}
  */
  readonly dlogData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper#dlog_data_search DataThunderSystemPowerOnSelfTestOper#dlog_data_search}
  */
  readonly dlogDataSearch?: string;
}

export function dataThunderSystemPowerOnSelfTestOperOperPowerOnLogToTerraform(struct?: DataThunderSystemPowerOnSelfTestOperOperPowerOnLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dlog_data: cdktf.stringToTerraform(struct!.dlogData),
    dlog_data_search: cdktf.stringToTerraform(struct!.dlogDataSearch),
  }
}


export function dataThunderSystemPowerOnSelfTestOperOperPowerOnLogToHclTerraform(struct?: DataThunderSystemPowerOnSelfTestOperOperPowerOnLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dlog_data: {
      value: cdktf.stringToHclTerraform(struct!.dlogData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlog_data_search: {
      value: cdktf.stringToHclTerraform(struct!.dlogDataSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPowerOnSelfTestOperOperPowerOnLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemPowerOnSelfTestOperOperPowerOnLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dlogData !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlogData = this._dlogData;
    }
    if (this._dlogDataSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlogDataSearch = this._dlogDataSearch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPowerOnSelfTestOperOperPowerOnLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dlogData = undefined;
      this._dlogDataSearch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dlogData = value.dlogData;
      this._dlogDataSearch = value.dlogDataSearch;
    }
  }

  // dlog_data - computed: false, optional: true, required: false
  private _dlogData?: string; 
  public get dlogData() {
    return this.getStringAttribute('dlog_data');
  }
  public set dlogData(value: string) {
    this._dlogData = value;
  }
  public resetDlogData() {
    this._dlogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlogDataInput() {
    return this._dlogData;
  }

  // dlog_data_search - computed: false, optional: true, required: false
  private _dlogDataSearch?: string; 
  public get dlogDataSearch() {
    return this.getStringAttribute('dlog_data_search');
  }
  public set dlogDataSearch(value: string) {
    this._dlogDataSearch = value;
  }
  public resetDlogDataSearch() {
    this._dlogDataSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlogDataSearchInput() {
    return this._dlogDataSearch;
  }
}

export class DataThunderSystemPowerOnSelfTestOperOperPowerOnLogList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemPowerOnSelfTestOperOperPowerOnLog[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemPowerOnSelfTestOperOperPowerOnLogOutputReference {
    return new DataThunderSystemPowerOnSelfTestOperOperPowerOnLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemPowerOnSelfTestOperOper {
  /**
  * power_on_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper#power_on_log DataThunderSystemPowerOnSelfTestOper#power_on_log}
  */
  readonly powerOnLog?: DataThunderSystemPowerOnSelfTestOperOperPowerOnLog[] | cdktf.IResolvable;
}

export function dataThunderSystemPowerOnSelfTestOperOperToTerraform(struct?: DataThunderSystemPowerOnSelfTestOperOperOutputReference | DataThunderSystemPowerOnSelfTestOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    power_on_log: cdktf.listMapper(dataThunderSystemPowerOnSelfTestOperOperPowerOnLogToTerraform, true)(struct!.powerOnLog),
  }
}


export function dataThunderSystemPowerOnSelfTestOperOperToHclTerraform(struct?: DataThunderSystemPowerOnSelfTestOperOperOutputReference | DataThunderSystemPowerOnSelfTestOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    power_on_log: {
      value: cdktf.listMapperHcl(dataThunderSystemPowerOnSelfTestOperOperPowerOnLogToHclTerraform, true)(struct!.powerOnLog),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemPowerOnSelfTestOperOperPowerOnLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPowerOnSelfTestOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemPowerOnSelfTestOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._powerOnLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerOnLog = this._powerOnLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPowerOnSelfTestOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._powerOnLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._powerOnLog.internalValue = value.powerOnLog;
    }
  }

  // power_on_log - computed: false, optional: true, required: false
  private _powerOnLog = new DataThunderSystemPowerOnSelfTestOperOperPowerOnLogList(this, "power_on_log", false);
  public get powerOnLog() {
    return this._powerOnLog;
  }
  public putPowerOnLog(value: DataThunderSystemPowerOnSelfTestOperOperPowerOnLog[] | cdktf.IResolvable) {
    this._powerOnLog.internalValue = value;
  }
  public resetPowerOnLog() {
    this._powerOnLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOnLogInput() {
    return this._powerOnLog.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper thunder_system_power_on_self_test_oper}
*/
export class DataThunderSystemPowerOnSelfTestOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_power_on_self_test_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemPowerOnSelfTestOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemPowerOnSelfTestOper to import
  * @param importFromId The id of the existing DataThunderSystemPowerOnSelfTestOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemPowerOnSelfTestOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_power_on_self_test_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_power_on_self_test_oper thunder_system_power_on_self_test_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemPowerOnSelfTestOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemPowerOnSelfTestOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_power_on_self_test_oper',
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
  private _oper = new DataThunderSystemPowerOnSelfTestOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemPowerOnSelfTestOperOper) {
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
      oper: dataThunderSystemPowerOnSelfTestOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemPowerOnSelfTestOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemPowerOnSelfTestOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
