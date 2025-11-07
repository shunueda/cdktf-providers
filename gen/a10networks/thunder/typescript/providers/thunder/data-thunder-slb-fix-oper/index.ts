// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbFixOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#id DataThunderSlbFixOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#oper DataThunderSlbFixOper#oper}
  */
  readonly oper?: DataThunderSlbFixOperOper;
}
export interface DataThunderSlbFixOperOperFixCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#client_err DataThunderSlbFixOper#client_err}
  */
  readonly clientErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#client_tls_conn DataThunderSlbFixOper#client_tls_conn}
  */
  readonly clientTlsConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#curr_proxy DataThunderSlbFixOper#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#default_switching DataThunderSlbFixOper#default_switching}
  */
  readonly defaultSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#insert_clientip DataThunderSlbFixOper#insert_clientip}
  */
  readonly insertClientip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#noroute DataThunderSlbFixOper#noroute}
  */
  readonly noroute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#sender_switching DataThunderSlbFixOper#sender_switching}
  */
  readonly senderSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#server_err DataThunderSlbFixOper#server_err}
  */
  readonly serverErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#server_tls_conn DataThunderSlbFixOper#server_tls_conn}
  */
  readonly serverTlsConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#snat_fail DataThunderSlbFixOper#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#svrsel_fail DataThunderSlbFixOper#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#target_switching DataThunderSlbFixOper#target_switching}
  */
  readonly targetSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#total_proxy DataThunderSlbFixOper#total_proxy}
  */
  readonly totalProxy?: number;
}

export function dataThunderSlbFixOperOperFixCpuListStructToTerraform(struct?: DataThunderSlbFixOperOperFixCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_err: cdktf.numberToTerraform(struct!.clientErr),
    client_tls_conn: cdktf.numberToTerraform(struct!.clientTlsConn),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    default_switching: cdktf.numberToTerraform(struct!.defaultSwitching),
    insert_clientip: cdktf.numberToTerraform(struct!.insertClientip),
    noroute: cdktf.numberToTerraform(struct!.noroute),
    sender_switching: cdktf.numberToTerraform(struct!.senderSwitching),
    server_err: cdktf.numberToTerraform(struct!.serverErr),
    server_tls_conn: cdktf.numberToTerraform(struct!.serverTlsConn),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    target_switching: cdktf.numberToTerraform(struct!.targetSwitching),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
  }
}


export function dataThunderSlbFixOperOperFixCpuListStructToHclTerraform(struct?: DataThunderSlbFixOperOperFixCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_err: {
      value: cdktf.numberToHclTerraform(struct!.clientErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_tls_conn: {
      value: cdktf.numberToHclTerraform(struct!.clientTlsConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_switching: {
      value: cdktf.numberToHclTerraform(struct!.defaultSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_clientip: {
      value: cdktf.numberToHclTerraform(struct!.insertClientip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute: {
      value: cdktf.numberToHclTerraform(struct!.noroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sender_switching: {
      value: cdktf.numberToHclTerraform(struct!.senderSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_err: {
      value: cdktf.numberToHclTerraform(struct!.serverErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_tls_conn: {
      value: cdktf.numberToHclTerraform(struct!.serverTlsConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_switching: {
      value: cdktf.numberToHclTerraform(struct!.targetSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFixOperOperFixCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbFixOperOperFixCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientErr = this._clientErr;
    }
    if (this._clientTlsConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTlsConn = this._clientTlsConn;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._defaultSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSwitching = this._defaultSwitching;
    }
    if (this._insertClientip !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertClientip = this._insertClientip;
    }
    if (this._noroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noroute = this._noroute;
    }
    if (this._senderSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderSwitching = this._senderSwitching;
    }
    if (this._serverErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverErr = this._serverErr;
    }
    if (this._serverTlsConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTlsConn = this._serverTlsConn;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._targetSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSwitching = this._targetSwitching;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFixOperOperFixCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientErr = undefined;
      this._clientTlsConn = undefined;
      this._currProxy = undefined;
      this._defaultSwitching = undefined;
      this._insertClientip = undefined;
      this._noroute = undefined;
      this._senderSwitching = undefined;
      this._serverErr = undefined;
      this._serverTlsConn = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._targetSwitching = undefined;
      this._totalProxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientErr = value.clientErr;
      this._clientTlsConn = value.clientTlsConn;
      this._currProxy = value.currProxy;
      this._defaultSwitching = value.defaultSwitching;
      this._insertClientip = value.insertClientip;
      this._noroute = value.noroute;
      this._senderSwitching = value.senderSwitching;
      this._serverErr = value.serverErr;
      this._serverTlsConn = value.serverTlsConn;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._targetSwitching = value.targetSwitching;
      this._totalProxy = value.totalProxy;
    }
  }

  // client_err - computed: false, optional: true, required: false
  private _clientErr?: number; 
  public get clientErr() {
    return this.getNumberAttribute('client_err');
  }
  public set clientErr(value: number) {
    this._clientErr = value;
  }
  public resetClientErr() {
    this._clientErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientErrInput() {
    return this._clientErr;
  }

  // client_tls_conn - computed: false, optional: true, required: false
  private _clientTlsConn?: number; 
  public get clientTlsConn() {
    return this.getNumberAttribute('client_tls_conn');
  }
  public set clientTlsConn(value: number) {
    this._clientTlsConn = value;
  }
  public resetClientTlsConn() {
    this._clientTlsConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsConnInput() {
    return this._clientTlsConn;
  }

  // curr_proxy - computed: false, optional: true, required: false
  private _currProxy?: number; 
  public get currProxy() {
    return this.getNumberAttribute('curr_proxy');
  }
  public set currProxy(value: number) {
    this._currProxy = value;
  }
  public resetCurrProxy() {
    this._currProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyInput() {
    return this._currProxy;
  }

  // default_switching - computed: false, optional: true, required: false
  private _defaultSwitching?: number; 
  public get defaultSwitching() {
    return this.getNumberAttribute('default_switching');
  }
  public set defaultSwitching(value: number) {
    this._defaultSwitching = value;
  }
  public resetDefaultSwitching() {
    this._defaultSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwitchingInput() {
    return this._defaultSwitching;
  }

  // insert_clientip - computed: false, optional: true, required: false
  private _insertClientip?: number; 
  public get insertClientip() {
    return this.getNumberAttribute('insert_clientip');
  }
  public set insertClientip(value: number) {
    this._insertClientip = value;
  }
  public resetInsertClientip() {
    this._insertClientip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientipInput() {
    return this._insertClientip;
  }

  // noroute - computed: false, optional: true, required: false
  private _noroute?: number; 
  public get noroute() {
    return this.getNumberAttribute('noroute');
  }
  public set noroute(value: number) {
    this._noroute = value;
  }
  public resetNoroute() {
    this._noroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norouteInput() {
    return this._noroute;
  }

  // sender_switching - computed: false, optional: true, required: false
  private _senderSwitching?: number; 
  public get senderSwitching() {
    return this.getNumberAttribute('sender_switching');
  }
  public set senderSwitching(value: number) {
    this._senderSwitching = value;
  }
  public resetSenderSwitching() {
    this._senderSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderSwitchingInput() {
    return this._senderSwitching;
  }

  // server_err - computed: false, optional: true, required: false
  private _serverErr?: number; 
  public get serverErr() {
    return this.getNumberAttribute('server_err');
  }
  public set serverErr(value: number) {
    this._serverErr = value;
  }
  public resetServerErr() {
    this._serverErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrInput() {
    return this._serverErr;
  }

  // server_tls_conn - computed: false, optional: true, required: false
  private _serverTlsConn?: number; 
  public get serverTlsConn() {
    return this.getNumberAttribute('server_tls_conn');
  }
  public set serverTlsConn(value: number) {
    this._serverTlsConn = value;
  }
  public resetServerTlsConn() {
    this._serverTlsConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTlsConnInput() {
    return this._serverTlsConn;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
  }

  // target_switching - computed: false, optional: true, required: false
  private _targetSwitching?: number; 
  public get targetSwitching() {
    return this.getNumberAttribute('target_switching');
  }
  public set targetSwitching(value: number) {
    this._targetSwitching = value;
  }
  public resetTargetSwitching() {
    this._targetSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSwitchingInput() {
    return this._targetSwitching;
  }

  // total_proxy - computed: false, optional: true, required: false
  private _totalProxy?: number; 
  public get totalProxy() {
    return this.getNumberAttribute('total_proxy');
  }
  public set totalProxy(value: number) {
    this._totalProxy = value;
  }
  public resetTotalProxy() {
    this._totalProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyInput() {
    return this._totalProxy;
  }
}

export class DataThunderSlbFixOperOperFixCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbFixOperOperFixCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbFixOperOperFixCpuListStructOutputReference {
    return new DataThunderSlbFixOperOperFixCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbFixOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#cpu_count DataThunderSlbFixOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * fix_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#fix_cpu_list DataThunderSlbFixOper#fix_cpu_list}
  */
  readonly fixCpuList?: DataThunderSlbFixOperOperFixCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbFixOperOperToTerraform(struct?: DataThunderSlbFixOperOperOutputReference | DataThunderSlbFixOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    fix_cpu_list: cdktf.listMapper(dataThunderSlbFixOperOperFixCpuListStructToTerraform, true)(struct!.fixCpuList),
  }
}


export function dataThunderSlbFixOperOperToHclTerraform(struct?: DataThunderSlbFixOperOperOutputReference | DataThunderSlbFixOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbFixOperOperFixCpuListStructToHclTerraform, true)(struct!.fixCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbFixOperOperFixCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFixOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbFixOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._fixCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixCpuList = this._fixCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFixOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._fixCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._fixCpuList.internalValue = value.fixCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // fix_cpu_list - computed: false, optional: true, required: false
  private _fixCpuList = new DataThunderSlbFixOperOperFixCpuListStructList(this, "fix_cpu_list", false);
  public get fixCpuList() {
    return this._fixCpuList;
  }
  public putFixCpuList(value: DataThunderSlbFixOperOperFixCpuListStruct[] | cdktf.IResolvable) {
    this._fixCpuList.internalValue = value;
  }
  public resetFixCpuList() {
    this._fixCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixCpuListInput() {
    return this._fixCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper thunder_slb_fix_oper}
*/
export class DataThunderSlbFixOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_fix_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbFixOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbFixOper to import
  * @param importFromId The id of the existing DataThunderSlbFixOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbFixOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_fix_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fix_oper thunder_slb_fix_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbFixOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbFixOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_fix_oper',
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
  private _oper = new DataThunderSlbFixOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbFixOperOper) {
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
      oper: dataThunderSlbFixOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbFixOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbFixOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
