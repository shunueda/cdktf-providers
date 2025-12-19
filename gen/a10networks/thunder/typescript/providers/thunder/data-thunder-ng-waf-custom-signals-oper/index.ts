// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNgWafCustomSignalsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper#id DataThunderNgWafCustomSignalsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper#oper DataThunderNgWafCustomSignalsOper#oper}
  */
  readonly oper?: DataThunderNgWafCustomSignalsOperOper;
}
export interface DataThunderNgWafCustomSignalsOperOperSignalListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper#signal DataThunderNgWafCustomSignalsOper#signal}
  */
  readonly signal?: string;
}

export function dataThunderNgWafCustomSignalsOperOperSignalListStructToTerraform(struct?: DataThunderNgWafCustomSignalsOperOperSignalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signal: cdktf.stringToTerraform(struct!.signal),
  }
}


export function dataThunderNgWafCustomSignalsOperOperSignalListStructToHclTerraform(struct?: DataThunderNgWafCustomSignalsOperOperSignalListStruct | cdktf.IResolvable): any {
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

export class DataThunderNgWafCustomSignalsOperOperSignalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNgWafCustomSignalsOperOperSignalListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderNgWafCustomSignalsOperOperSignalListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderNgWafCustomSignalsOperOperSignalListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderNgWafCustomSignalsOperOperSignalListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNgWafCustomSignalsOperOperSignalListStructOutputReference {
    return new DataThunderNgWafCustomSignalsOperOperSignalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNgWafCustomSignalsOperOper {
  /**
  * signal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper#signal_list DataThunderNgWafCustomSignalsOper#signal_list}
  */
  readonly signalList?: DataThunderNgWafCustomSignalsOperOperSignalListStruct[] | cdktf.IResolvable;
}

export function dataThunderNgWafCustomSignalsOperOperToTerraform(struct?: DataThunderNgWafCustomSignalsOperOperOutputReference | DataThunderNgWafCustomSignalsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signal_list: cdktf.listMapper(dataThunderNgWafCustomSignalsOperOperSignalListStructToTerraform, true)(struct!.signalList),
  }
}


export function dataThunderNgWafCustomSignalsOperOperToHclTerraform(struct?: DataThunderNgWafCustomSignalsOperOperOutputReference | DataThunderNgWafCustomSignalsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signal_list: {
      value: cdktf.listMapperHcl(dataThunderNgWafCustomSignalsOperOperSignalListStructToHclTerraform, true)(struct!.signalList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafCustomSignalsOperOperSignalListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafCustomSignalsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafCustomSignalsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalList = this._signalList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafCustomSignalsOperOper | undefined) {
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
  private _signalList = new DataThunderNgWafCustomSignalsOperOperSignalListStructList(this, "signal_list", false);
  public get signalList() {
    return this._signalList;
  }
  public putSignalList(value: DataThunderNgWafCustomSignalsOperOperSignalListStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper thunder_ng_waf_custom_signals_oper}
*/
export class DataThunderNgWafCustomSignalsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ng_waf_custom_signals_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNgWafCustomSignalsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNgWafCustomSignalsOper to import
  * @param importFromId The id of the existing DataThunderNgWafCustomSignalsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNgWafCustomSignalsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ng_waf_custom_signals_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_custom_signals_oper thunder_ng_waf_custom_signals_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNgWafCustomSignalsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNgWafCustomSignalsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ng_waf_custom_signals_oper',
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
  private _oper = new DataThunderNgWafCustomSignalsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNgWafCustomSignalsOperOper) {
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
      oper: dataThunderNgWafCustomSignalsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNgWafCustomSignalsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNgWafCustomSignalsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
