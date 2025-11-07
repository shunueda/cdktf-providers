// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#id DataThunderVpnLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#oper DataThunderVpnLogOper#oper}
  */
  readonly oper?: DataThunderVpnLogOperOper;
}
export interface DataThunderVpnLogOperOperVpnLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#vpn_log_data DataThunderVpnLogOper#vpn_log_data}
  */
  readonly vpnLogData?: string;
}

export function dataThunderVpnLogOperOperVpnLogListStructToTerraform(struct?: DataThunderVpnLogOperOperVpnLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpn_log_data: cdktf.stringToTerraform(struct!.vpnLogData),
  }
}


export function dataThunderVpnLogOperOperVpnLogListStructToHclTerraform(struct?: DataThunderVpnLogOperOperVpnLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpn_log_data: {
      value: cdktf.stringToHclTerraform(struct!.vpnLogData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnLogOperOperVpnLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnLogOperOperVpnLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpnLogData !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogData = this._vpnLogData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnLogOperOperVpnLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpnLogData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpnLogData = value.vpnLogData;
    }
  }

  // vpn_log_data - computed: false, optional: true, required: false
  private _vpnLogData?: string; 
  public get vpnLogData() {
    return this.getStringAttribute('vpn_log_data');
  }
  public set vpnLogData(value: string) {
    this._vpnLogData = value;
  }
  public resetVpnLogData() {
    this._vpnLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogDataInput() {
    return this._vpnLogData;
  }
}

export class DataThunderVpnLogOperOperVpnLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnLogOperOperVpnLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnLogOperOperVpnLogListStructOutputReference {
    return new DataThunderVpnLogOperOperVpnLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#follow DataThunderVpnLogOper#follow}
  */
  readonly follow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#from_start DataThunderVpnLogOper#from_start}
  */
  readonly fromStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#num_lines DataThunderVpnLogOper#num_lines}
  */
  readonly numLines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#vpn_log_offset DataThunderVpnLogOper#vpn_log_offset}
  */
  readonly vpnLogOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#vpn_log_over DataThunderVpnLogOper#vpn_log_over}
  */
  readonly vpnLogOver?: number;
  /**
  * vpn_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#vpn_log_list DataThunderVpnLogOper#vpn_log_list}
  */
  readonly vpnLogList?: DataThunderVpnLogOperOperVpnLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnLogOperOperToTerraform(struct?: DataThunderVpnLogOperOperOutputReference | DataThunderVpnLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow: cdktf.numberToTerraform(struct!.follow),
    from_start: cdktf.numberToTerraform(struct!.fromStart),
    num_lines: cdktf.numberToTerraform(struct!.numLines),
    vpn_log_offset: cdktf.numberToTerraform(struct!.vpnLogOffset),
    vpn_log_over: cdktf.numberToTerraform(struct!.vpnLogOver),
    vpn_log_list: cdktf.listMapper(dataThunderVpnLogOperOperVpnLogListStructToTerraform, true)(struct!.vpnLogList),
  }
}


export function dataThunderVpnLogOperOperToHclTerraform(struct?: DataThunderVpnLogOperOperOutputReference | DataThunderVpnLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow: {
      value: cdktf.numberToHclTerraform(struct!.follow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    from_start: {
      value: cdktf.numberToHclTerraform(struct!.fromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_lines: {
      value: cdktf.numberToHclTerraform(struct!.numLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_log_offset: {
      value: cdktf.numberToHclTerraform(struct!.vpnLogOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_log_over: {
      value: cdktf.numberToHclTerraform(struct!.vpnLogOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_log_list: {
      value: cdktf.listMapperHcl(dataThunderVpnLogOperOperVpnLogListStructToHclTerraform, true)(struct!.vpnLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnLogOperOperVpnLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._follow !== undefined) {
      hasAnyValues = true;
      internalValueResult.follow = this._follow;
    }
    if (this._fromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromStart = this._fromStart;
    }
    if (this._numLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLines = this._numLines;
    }
    if (this._vpnLogOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogOffset = this._vpnLogOffset;
    }
    if (this._vpnLogOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogOver = this._vpnLogOver;
    }
    if (this._vpnLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogList = this._vpnLogList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._follow = undefined;
      this._fromStart = undefined;
      this._numLines = undefined;
      this._vpnLogOffset = undefined;
      this._vpnLogOver = undefined;
      this._vpnLogList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._follow = value.follow;
      this._fromStart = value.fromStart;
      this._numLines = value.numLines;
      this._vpnLogOffset = value.vpnLogOffset;
      this._vpnLogOver = value.vpnLogOver;
      this._vpnLogList.internalValue = value.vpnLogList;
    }
  }

  // follow - computed: false, optional: true, required: false
  private _follow?: number; 
  public get follow() {
    return this.getNumberAttribute('follow');
  }
  public set follow(value: number) {
    this._follow = value;
  }
  public resetFollow() {
    this._follow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followInput() {
    return this._follow;
  }

  // from_start - computed: false, optional: true, required: false
  private _fromStart?: number; 
  public get fromStart() {
    return this.getNumberAttribute('from_start');
  }
  public set fromStart(value: number) {
    this._fromStart = value;
  }
  public resetFromStart() {
    this._fromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromStartInput() {
    return this._fromStart;
  }

  // num_lines - computed: false, optional: true, required: false
  private _numLines?: number; 
  public get numLines() {
    return this.getNumberAttribute('num_lines');
  }
  public set numLines(value: number) {
    this._numLines = value;
  }
  public resetNumLines() {
    this._numLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLinesInput() {
    return this._numLines;
  }

  // vpn_log_offset - computed: false, optional: true, required: false
  private _vpnLogOffset?: number; 
  public get vpnLogOffset() {
    return this.getNumberAttribute('vpn_log_offset');
  }
  public set vpnLogOffset(value: number) {
    this._vpnLogOffset = value;
  }
  public resetVpnLogOffset() {
    this._vpnLogOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogOffsetInput() {
    return this._vpnLogOffset;
  }

  // vpn_log_over - computed: false, optional: true, required: false
  private _vpnLogOver?: number; 
  public get vpnLogOver() {
    return this.getNumberAttribute('vpn_log_over');
  }
  public set vpnLogOver(value: number) {
    this._vpnLogOver = value;
  }
  public resetVpnLogOver() {
    this._vpnLogOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogOverInput() {
    return this._vpnLogOver;
  }

  // vpn_log_list - computed: false, optional: true, required: false
  private _vpnLogList = new DataThunderVpnLogOperOperVpnLogListStructList(this, "vpn_log_list", false);
  public get vpnLogList() {
    return this._vpnLogList;
  }
  public putVpnLogList(value: DataThunderVpnLogOperOperVpnLogListStruct[] | cdktf.IResolvable) {
    this._vpnLogList.internalValue = value;
  }
  public resetVpnLogList() {
    this._vpnLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogListInput() {
    return this._vpnLogList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper thunder_vpn_log_oper}
*/
export class DataThunderVpnLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnLogOper to import
  * @param importFromId The id of the existing DataThunderVpnLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_log_oper thunder_vpn_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_log_oper',
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
  private _oper = new DataThunderVpnLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnLogOperOper) {
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
      oper: dataThunderVpnLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
