// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslScepCertLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#id DataThunderSlbSslScepCertLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#oper DataThunderSlbSslScepCertLogOper#oper}
  */
  readonly oper?: DataThunderSlbSslScepCertLogOperOper;
}
export interface DataThunderSlbSslScepCertLogOperOperScepLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#scep_log_data DataThunderSlbSslScepCertLogOper#scep_log_data}
  */
  readonly scepLogData?: string;
}

export function dataThunderSlbSslScepCertLogOperOperScepLogListStructToTerraform(struct?: DataThunderSlbSslScepCertLogOperOperScepLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scep_log_data: cdktf.stringToTerraform(struct!.scepLogData),
  }
}


export function dataThunderSlbSslScepCertLogOperOperScepLogListStructToHclTerraform(struct?: DataThunderSlbSslScepCertLogOperOperScepLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scep_log_data: {
      value: cdktf.stringToHclTerraform(struct!.scepLogData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslScepCertLogOperOperScepLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslScepCertLogOperOperScepLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scepLogData !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepLogData = this._scepLogData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslScepCertLogOperOperScepLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scepLogData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scepLogData = value.scepLogData;
    }
  }

  // scep_log_data - computed: false, optional: true, required: false
  private _scepLogData?: string; 
  public get scepLogData() {
    return this.getStringAttribute('scep_log_data');
  }
  public set scepLogData(value: string) {
    this._scepLogData = value;
  }
  public resetScepLogData() {
    this._scepLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepLogDataInput() {
    return this._scepLogData;
  }
}

export class DataThunderSlbSslScepCertLogOperOperScepLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslScepCertLogOperOperScepLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslScepCertLogOperOperScepLogListStructOutputReference {
    return new DataThunderSlbSslScepCertLogOperOperScepLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslScepCertLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#follow DataThunderSlbSslScepCertLogOper#follow}
  */
  readonly follow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#from_start DataThunderSlbSslScepCertLogOper#from_start}
  */
  readonly fromStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#name DataThunderSlbSslScepCertLogOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#num_lines DataThunderSlbSslScepCertLogOper#num_lines}
  */
  readonly numLines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#scep_log_offset DataThunderSlbSslScepCertLogOper#scep_log_offset}
  */
  readonly scepLogOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#scep_log_over DataThunderSlbSslScepCertLogOper#scep_log_over}
  */
  readonly scepLogOver?: number;
  /**
  * scep_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#scep_log_list DataThunderSlbSslScepCertLogOper#scep_log_list}
  */
  readonly scepLogList?: DataThunderSlbSslScepCertLogOperOperScepLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbSslScepCertLogOperOperToTerraform(struct?: DataThunderSlbSslScepCertLogOperOperOutputReference | DataThunderSlbSslScepCertLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow: cdktf.numberToTerraform(struct!.follow),
    from_start: cdktf.numberToTerraform(struct!.fromStart),
    name: cdktf.stringToTerraform(struct!.name),
    num_lines: cdktf.numberToTerraform(struct!.numLines),
    scep_log_offset: cdktf.numberToTerraform(struct!.scepLogOffset),
    scep_log_over: cdktf.numberToTerraform(struct!.scepLogOver),
    scep_log_list: cdktf.listMapper(dataThunderSlbSslScepCertLogOperOperScepLogListStructToTerraform, true)(struct!.scepLogList),
  }
}


export function dataThunderSlbSslScepCertLogOperOperToHclTerraform(struct?: DataThunderSlbSslScepCertLogOperOperOutputReference | DataThunderSlbSslScepCertLogOperOper): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_lines: {
      value: cdktf.numberToHclTerraform(struct!.numLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scep_log_offset: {
      value: cdktf.numberToHclTerraform(struct!.scepLogOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scep_log_over: {
      value: cdktf.numberToHclTerraform(struct!.scepLogOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scep_log_list: {
      value: cdktf.listMapperHcl(dataThunderSlbSslScepCertLogOperOperScepLogListStructToHclTerraform, true)(struct!.scepLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslScepCertLogOperOperScepLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslScepCertLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslScepCertLogOperOper | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLines = this._numLines;
    }
    if (this._scepLogOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepLogOffset = this._scepLogOffset;
    }
    if (this._scepLogOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepLogOver = this._scepLogOver;
    }
    if (this._scepLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepLogList = this._scepLogList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslScepCertLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._follow = undefined;
      this._fromStart = undefined;
      this._name = undefined;
      this._numLines = undefined;
      this._scepLogOffset = undefined;
      this._scepLogOver = undefined;
      this._scepLogList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._follow = value.follow;
      this._fromStart = value.fromStart;
      this._name = value.name;
      this._numLines = value.numLines;
      this._scepLogOffset = value.scepLogOffset;
      this._scepLogOver = value.scepLogOver;
      this._scepLogList.internalValue = value.scepLogList;
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

  // scep_log_offset - computed: false, optional: true, required: false
  private _scepLogOffset?: number; 
  public get scepLogOffset() {
    return this.getNumberAttribute('scep_log_offset');
  }
  public set scepLogOffset(value: number) {
    this._scepLogOffset = value;
  }
  public resetScepLogOffset() {
    this._scepLogOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepLogOffsetInput() {
    return this._scepLogOffset;
  }

  // scep_log_over - computed: false, optional: true, required: false
  private _scepLogOver?: number; 
  public get scepLogOver() {
    return this.getNumberAttribute('scep_log_over');
  }
  public set scepLogOver(value: number) {
    this._scepLogOver = value;
  }
  public resetScepLogOver() {
    this._scepLogOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepLogOverInput() {
    return this._scepLogOver;
  }

  // scep_log_list - computed: false, optional: true, required: false
  private _scepLogList = new DataThunderSlbSslScepCertLogOperOperScepLogListStructList(this, "scep_log_list", false);
  public get scepLogList() {
    return this._scepLogList;
  }
  public putScepLogList(value: DataThunderSlbSslScepCertLogOperOperScepLogListStruct[] | cdktf.IResolvable) {
    this._scepLogList.internalValue = value;
  }
  public resetScepLogList() {
    this._scepLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepLogListInput() {
    return this._scepLogList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper thunder_slb_ssl_scep_cert_log_oper}
*/
export class DataThunderSlbSslScepCertLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_scep_cert_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslScepCertLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslScepCertLogOper to import
  * @param importFromId The id of the existing DataThunderSlbSslScepCertLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslScepCertLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_scep_cert_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_log_oper thunder_slb_ssl_scep_cert_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslScepCertLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslScepCertLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_scep_cert_log_oper',
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
  private _oper = new DataThunderSlbSslScepCertLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslScepCertLogOperOper) {
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
      oper: dataThunderSlbSslScepCertLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslScepCertLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslScepCertLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
