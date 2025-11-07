// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderThreatIntelWebrootLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#id DataThunderThreatIntelWebrootLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#oper DataThunderThreatIntelWebrootLogOper#oper}
  */
  readonly oper?: DataThunderThreatIntelWebrootLogOperOper;
}
export interface DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#webroot_log_data DataThunderThreatIntelWebrootLogOper#webroot_log_data}
  */
  readonly webrootLogData?: string;
}

export function dataThunderThreatIntelWebrootLogOperOperWebrootLogListStructToTerraform(struct?: DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webroot_log_data: cdktf.stringToTerraform(struct!.webrootLogData),
  }
}


export function dataThunderThreatIntelWebrootLogOperOperWebrootLogListStructToHclTerraform(struct?: DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webroot_log_data: {
      value: cdktf.stringToHclTerraform(struct!.webrootLogData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderThreatIntelWebrootLogOperOperWebrootLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webrootLogData !== undefined) {
      hasAnyValues = true;
      internalValueResult.webrootLogData = this._webrootLogData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webrootLogData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webrootLogData = value.webrootLogData;
    }
  }

  // webroot_log_data - computed: false, optional: true, required: false
  private _webrootLogData?: string; 
  public get webrootLogData() {
    return this.getStringAttribute('webroot_log_data');
  }
  public set webrootLogData(value: string) {
    this._webrootLogData = value;
  }
  public resetWebrootLogData() {
    this._webrootLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webrootLogDataInput() {
    return this._webrootLogData;
  }
}

export class DataThunderThreatIntelWebrootLogOperOperWebrootLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderThreatIntelWebrootLogOperOperWebrootLogListStructOutputReference {
    return new DataThunderThreatIntelWebrootLogOperOperWebrootLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderThreatIntelWebrootLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#follow DataThunderThreatIntelWebrootLogOper#follow}
  */
  readonly follow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#from_start DataThunderThreatIntelWebrootLogOper#from_start}
  */
  readonly fromStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#num_lines DataThunderThreatIntelWebrootLogOper#num_lines}
  */
  readonly numLines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#webroot_log_offset DataThunderThreatIntelWebrootLogOper#webroot_log_offset}
  */
  readonly webrootLogOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#webroot_log_over DataThunderThreatIntelWebrootLogOper#webroot_log_over}
  */
  readonly webrootLogOver?: number;
  /**
  * webroot_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#webroot_log_list DataThunderThreatIntelWebrootLogOper#webroot_log_list}
  */
  readonly webrootLogList?: DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderThreatIntelWebrootLogOperOperToTerraform(struct?: DataThunderThreatIntelWebrootLogOperOperOutputReference | DataThunderThreatIntelWebrootLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow: cdktf.numberToTerraform(struct!.follow),
    from_start: cdktf.numberToTerraform(struct!.fromStart),
    num_lines: cdktf.numberToTerraform(struct!.numLines),
    webroot_log_offset: cdktf.numberToTerraform(struct!.webrootLogOffset),
    webroot_log_over: cdktf.numberToTerraform(struct!.webrootLogOver),
    webroot_log_list: cdktf.listMapper(dataThunderThreatIntelWebrootLogOperOperWebrootLogListStructToTerraform, true)(struct!.webrootLogList),
  }
}


export function dataThunderThreatIntelWebrootLogOperOperToHclTerraform(struct?: DataThunderThreatIntelWebrootLogOperOperOutputReference | DataThunderThreatIntelWebrootLogOperOper): any {
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
    webroot_log_offset: {
      value: cdktf.numberToHclTerraform(struct!.webrootLogOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    webroot_log_over: {
      value: cdktf.numberToHclTerraform(struct!.webrootLogOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    webroot_log_list: {
      value: cdktf.listMapperHcl(dataThunderThreatIntelWebrootLogOperOperWebrootLogListStructToHclTerraform, true)(struct!.webrootLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderThreatIntelWebrootLogOperOperWebrootLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderThreatIntelWebrootLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderThreatIntelWebrootLogOperOper | undefined {
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
    if (this._webrootLogOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.webrootLogOffset = this._webrootLogOffset;
    }
    if (this._webrootLogOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.webrootLogOver = this._webrootLogOver;
    }
    if (this._webrootLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webrootLogList = this._webrootLogList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderThreatIntelWebrootLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._follow = undefined;
      this._fromStart = undefined;
      this._numLines = undefined;
      this._webrootLogOffset = undefined;
      this._webrootLogOver = undefined;
      this._webrootLogList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._follow = value.follow;
      this._fromStart = value.fromStart;
      this._numLines = value.numLines;
      this._webrootLogOffset = value.webrootLogOffset;
      this._webrootLogOver = value.webrootLogOver;
      this._webrootLogList.internalValue = value.webrootLogList;
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

  // webroot_log_offset - computed: false, optional: true, required: false
  private _webrootLogOffset?: number; 
  public get webrootLogOffset() {
    return this.getNumberAttribute('webroot_log_offset');
  }
  public set webrootLogOffset(value: number) {
    this._webrootLogOffset = value;
  }
  public resetWebrootLogOffset() {
    this._webrootLogOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webrootLogOffsetInput() {
    return this._webrootLogOffset;
  }

  // webroot_log_over - computed: false, optional: true, required: false
  private _webrootLogOver?: number; 
  public get webrootLogOver() {
    return this.getNumberAttribute('webroot_log_over');
  }
  public set webrootLogOver(value: number) {
    this._webrootLogOver = value;
  }
  public resetWebrootLogOver() {
    this._webrootLogOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webrootLogOverInput() {
    return this._webrootLogOver;
  }

  // webroot_log_list - computed: false, optional: true, required: false
  private _webrootLogList = new DataThunderThreatIntelWebrootLogOperOperWebrootLogListStructList(this, "webroot_log_list", false);
  public get webrootLogList() {
    return this._webrootLogList;
  }
  public putWebrootLogList(value: DataThunderThreatIntelWebrootLogOperOperWebrootLogListStruct[] | cdktf.IResolvable) {
    this._webrootLogList.internalValue = value;
  }
  public resetWebrootLogList() {
    this._webrootLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webrootLogListInput() {
    return this._webrootLogList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper thunder_threat_intel_webroot_log_oper}
*/
export class DataThunderThreatIntelWebrootLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_threat_intel_webroot_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderThreatIntelWebrootLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderThreatIntelWebrootLogOper to import
  * @param importFromId The id of the existing DataThunderThreatIntelWebrootLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderThreatIntelWebrootLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_threat_intel_webroot_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/threat_intel_webroot_log_oper thunder_threat_intel_webroot_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderThreatIntelWebrootLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderThreatIntelWebrootLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_threat_intel_webroot_log_oper',
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
  private _oper = new DataThunderThreatIntelWebrootLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderThreatIntelWebrootLogOperOper) {
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
      oper: dataThunderThreatIntelWebrootLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderThreatIntelWebrootLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderThreatIntelWebrootLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
