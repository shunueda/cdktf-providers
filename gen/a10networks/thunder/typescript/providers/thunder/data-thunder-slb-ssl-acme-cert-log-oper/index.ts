// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslAcmeCertLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#id DataThunderSlbSslAcmeCertLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#oper DataThunderSlbSslAcmeCertLogOper#oper}
  */
  readonly oper?: DataThunderSlbSslAcmeCertLogOperOper;
}
export interface DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#acme_log_data DataThunderSlbSslAcmeCertLogOper#acme_log_data}
  */
  readonly acmeLogData?: string;
}

export function dataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructToTerraform(struct?: DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acme_log_data: cdktf.stringToTerraform(struct!.acmeLogData),
  }
}


export function dataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructToHclTerraform(struct?: DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acme_log_data: {
      value: cdktf.stringToHclTerraform(struct!.acmeLogData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmeLogData !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmeLogData = this._acmeLogData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmeLogData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acmeLogData = value.acmeLogData;
    }
  }

  // acme_log_data - computed: false, optional: true, required: false
  private _acmeLogData?: string; 
  public get acmeLogData() {
    return this.getStringAttribute('acme_log_data');
  }
  public set acmeLogData(value: string) {
    this._acmeLogData = value;
  }
  public resetAcmeLogData() {
    this._acmeLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeLogDataInput() {
    return this._acmeLogData;
  }
}

export class DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructOutputReference {
    return new DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslAcmeCertLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#acme_log_offset DataThunderSlbSslAcmeCertLogOper#acme_log_offset}
  */
  readonly acmeLogOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#acme_log_over DataThunderSlbSslAcmeCertLogOper#acme_log_over}
  */
  readonly acmeLogOver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#follow DataThunderSlbSslAcmeCertLogOper#follow}
  */
  readonly follow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#from_start DataThunderSlbSslAcmeCertLogOper#from_start}
  */
  readonly fromStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#name DataThunderSlbSslAcmeCertLogOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#num_lines DataThunderSlbSslAcmeCertLogOper#num_lines}
  */
  readonly numLines?: number;
  /**
  * acme_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#acme_log_list DataThunderSlbSslAcmeCertLogOper#acme_log_list}
  */
  readonly acmeLogList?: DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbSslAcmeCertLogOperOperToTerraform(struct?: DataThunderSlbSslAcmeCertLogOperOperOutputReference | DataThunderSlbSslAcmeCertLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acme_log_offset: cdktf.numberToTerraform(struct!.acmeLogOffset),
    acme_log_over: cdktf.numberToTerraform(struct!.acmeLogOver),
    follow: cdktf.numberToTerraform(struct!.follow),
    from_start: cdktf.numberToTerraform(struct!.fromStart),
    name: cdktf.stringToTerraform(struct!.name),
    num_lines: cdktf.numberToTerraform(struct!.numLines),
    acme_log_list: cdktf.listMapper(dataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructToTerraform, true)(struct!.acmeLogList),
  }
}


export function dataThunderSlbSslAcmeCertLogOperOperToHclTerraform(struct?: DataThunderSlbSslAcmeCertLogOperOperOutputReference | DataThunderSlbSslAcmeCertLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acme_log_offset: {
      value: cdktf.numberToHclTerraform(struct!.acmeLogOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acme_log_over: {
      value: cdktf.numberToHclTerraform(struct!.acmeLogOver),
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
    acme_log_list: {
      value: cdktf.listMapperHcl(dataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructToHclTerraform, true)(struct!.acmeLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslAcmeCertLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslAcmeCertLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmeLogOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmeLogOffset = this._acmeLogOffset;
    }
    if (this._acmeLogOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmeLogOver = this._acmeLogOver;
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
    if (this._acmeLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmeLogList = this._acmeLogList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslAcmeCertLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acmeLogOffset = undefined;
      this._acmeLogOver = undefined;
      this._follow = undefined;
      this._fromStart = undefined;
      this._name = undefined;
      this._numLines = undefined;
      this._acmeLogList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acmeLogOffset = value.acmeLogOffset;
      this._acmeLogOver = value.acmeLogOver;
      this._follow = value.follow;
      this._fromStart = value.fromStart;
      this._name = value.name;
      this._numLines = value.numLines;
      this._acmeLogList.internalValue = value.acmeLogList;
    }
  }

  // acme_log_offset - computed: false, optional: true, required: false
  private _acmeLogOffset?: number; 
  public get acmeLogOffset() {
    return this.getNumberAttribute('acme_log_offset');
  }
  public set acmeLogOffset(value: number) {
    this._acmeLogOffset = value;
  }
  public resetAcmeLogOffset() {
    this._acmeLogOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeLogOffsetInput() {
    return this._acmeLogOffset;
  }

  // acme_log_over - computed: false, optional: true, required: false
  private _acmeLogOver?: number; 
  public get acmeLogOver() {
    return this.getNumberAttribute('acme_log_over');
  }
  public set acmeLogOver(value: number) {
    this._acmeLogOver = value;
  }
  public resetAcmeLogOver() {
    this._acmeLogOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeLogOverInput() {
    return this._acmeLogOver;
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

  // acme_log_list - computed: false, optional: true, required: false
  private _acmeLogList = new DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStructList(this, "acme_log_list", false);
  public get acmeLogList() {
    return this._acmeLogList;
  }
  public putAcmeLogList(value: DataThunderSlbSslAcmeCertLogOperOperAcmeLogListStruct[] | cdktf.IResolvable) {
    this._acmeLogList.internalValue = value;
  }
  public resetAcmeLogList() {
    this._acmeLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeLogListInput() {
    return this._acmeLogList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper thunder_slb_ssl_acme_cert_log_oper}
*/
export class DataThunderSlbSslAcmeCertLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_acme_cert_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslAcmeCertLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslAcmeCertLogOper to import
  * @param importFromId The id of the existing DataThunderSlbSslAcmeCertLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslAcmeCertLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_acme_cert_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_acme_cert_log_oper thunder_slb_ssl_acme_cert_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslAcmeCertLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslAcmeCertLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_acme_cert_log_oper',
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
  private _oper = new DataThunderSlbSslAcmeCertLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslAcmeCertLogOperOper) {
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
      oper: dataThunderSlbSslAcmeCertLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslAcmeCertLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslAcmeCertLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
