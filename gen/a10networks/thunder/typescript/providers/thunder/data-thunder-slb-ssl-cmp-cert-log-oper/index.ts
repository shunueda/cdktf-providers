// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslCmpCertLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#id DataThunderSlbSslCmpCertLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#oper DataThunderSlbSslCmpCertLogOper#oper}
  */
  readonly oper?: DataThunderSlbSslCmpCertLogOperOper;
}
export interface DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#cmp_log_data DataThunderSlbSslCmpCertLogOper#cmp_log_data}
  */
  readonly cmpLogData?: string;
}

export function dataThunderSlbSslCmpCertLogOperOperCmpLogListStructToTerraform(struct?: DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmp_log_data: cdktf.stringToTerraform(struct!.cmpLogData),
  }
}


export function dataThunderSlbSslCmpCertLogOperOperCmpLogListStructToHclTerraform(struct?: DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmp_log_data: {
      value: cdktf.stringToHclTerraform(struct!.cmpLogData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCmpCertLogOperOperCmpLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmpLogData !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpLogData = this._cmpLogData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmpLogData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmpLogData = value.cmpLogData;
    }
  }

  // cmp_log_data - computed: false, optional: true, required: false
  private _cmpLogData?: string; 
  public get cmpLogData() {
    return this.getStringAttribute('cmp_log_data');
  }
  public set cmpLogData(value: string) {
    this._cmpLogData = value;
  }
  public resetCmpLogData() {
    this._cmpLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpLogDataInput() {
    return this._cmpLogData;
  }
}

export class DataThunderSlbSslCmpCertLogOperOperCmpLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslCmpCertLogOperOperCmpLogListStructOutputReference {
    return new DataThunderSlbSslCmpCertLogOperOperCmpLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslCmpCertLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#cmp_log_offset DataThunderSlbSslCmpCertLogOper#cmp_log_offset}
  */
  readonly cmpLogOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#cmp_log_over DataThunderSlbSslCmpCertLogOper#cmp_log_over}
  */
  readonly cmpLogOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#follow DataThunderSlbSslCmpCertLogOper#follow}
  */
  readonly follow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#from_start DataThunderSlbSslCmpCertLogOper#from_start}
  */
  readonly fromStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#name DataThunderSlbSslCmpCertLogOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#num_lines DataThunderSlbSslCmpCertLogOper#num_lines}
  */
  readonly numLines?: number;
  /**
  * cmp_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#cmp_log_list DataThunderSlbSslCmpCertLogOper#cmp_log_list}
  */
  readonly cmpLogList?: DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbSslCmpCertLogOperOperToTerraform(struct?: DataThunderSlbSslCmpCertLogOperOperOutputReference | DataThunderSlbSslCmpCertLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmp_log_offset: cdktf.numberToTerraform(struct!.cmpLogOffset),
    cmp_log_over: cdktf.numberToTerraform(struct!.cmpLogOver),
    follow: cdktf.numberToTerraform(struct!.follow),
    from_start: cdktf.numberToTerraform(struct!.fromStart),
    name: cdktf.stringToTerraform(struct!.name),
    num_lines: cdktf.numberToTerraform(struct!.numLines),
    cmp_log_list: cdktf.listMapper(dataThunderSlbSslCmpCertLogOperOperCmpLogListStructToTerraform, true)(struct!.cmpLogList),
  }
}


export function dataThunderSlbSslCmpCertLogOperOperToHclTerraform(struct?: DataThunderSlbSslCmpCertLogOperOperOutputReference | DataThunderSlbSslCmpCertLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmp_log_offset: {
      value: cdktf.numberToHclTerraform(struct!.cmpLogOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmp_log_over: {
      value: cdktf.numberToHclTerraform(struct!.cmpLogOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    cmp_log_list: {
      value: cdktf.listMapperHcl(dataThunderSlbSslCmpCertLogOperOperCmpLogListStructToHclTerraform, true)(struct!.cmpLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslCmpCertLogOperOperCmpLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCmpCertLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslCmpCertLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmpLogOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpLogOffset = this._cmpLogOffset;
    }
    if (this._cmpLogOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpLogOver = this._cmpLogOver;
    }
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
    if (this._cmpLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpLogList = this._cmpLogList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCmpCertLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmpLogOffset = undefined;
      this._cmpLogOver = undefined;
      this._follow = undefined;
      this._fromStart = undefined;
      this._name = undefined;
      this._numLines = undefined;
      this._cmpLogList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmpLogOffset = value.cmpLogOffset;
      this._cmpLogOver = value.cmpLogOver;
      this._follow = value.follow;
      this._fromStart = value.fromStart;
      this._name = value.name;
      this._numLines = value.numLines;
      this._cmpLogList.internalValue = value.cmpLogList;
    }
  }

  // cmp_log_offset - computed: false, optional: true, required: false
  private _cmpLogOffset?: number; 
  public get cmpLogOffset() {
    return this.getNumberAttribute('cmp_log_offset');
  }
  public set cmpLogOffset(value: number) {
    this._cmpLogOffset = value;
  }
  public resetCmpLogOffset() {
    this._cmpLogOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpLogOffsetInput() {
    return this._cmpLogOffset;
  }

  // cmp_log_over - computed: false, optional: true, required: false
  private _cmpLogOver?: number; 
  public get cmpLogOver() {
    return this.getNumberAttribute('cmp_log_over');
  }
  public set cmpLogOver(value: number) {
    this._cmpLogOver = value;
  }
  public resetCmpLogOver() {
    this._cmpLogOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpLogOverInput() {
    return this._cmpLogOver;
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

  // cmp_log_list - computed: false, optional: true, required: false
  private _cmpLogList = new DataThunderSlbSslCmpCertLogOperOperCmpLogListStructList(this, "cmp_log_list", false);
  public get cmpLogList() {
    return this._cmpLogList;
  }
  public putCmpLogList(value: DataThunderSlbSslCmpCertLogOperOperCmpLogListStruct[] | cdktf.IResolvable) {
    this._cmpLogList.internalValue = value;
  }
  public resetCmpLogList() {
    this._cmpLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpLogListInput() {
    return this._cmpLogList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper thunder_slb_ssl_cmp_cert_log_oper}
*/
export class DataThunderSlbSslCmpCertLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_cmp_cert_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslCmpCertLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslCmpCertLogOper to import
  * @param importFromId The id of the existing DataThunderSlbSslCmpCertLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslCmpCertLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_cmp_cert_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_cmp_cert_log_oper thunder_slb_ssl_cmp_cert_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslCmpCertLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslCmpCertLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_cmp_cert_log_oper',
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
  private _oper = new DataThunderSlbSslCmpCertLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslCmpCertLogOperOper) {
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
      oper: dataThunderSlbSslCmpCertLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslCmpCertLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslCmpCertLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
