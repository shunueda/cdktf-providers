// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslCertPinningCandidateListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#id DataThunderSlbSslCertPinningCandidateListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#oper DataThunderSlbSslCertPinningCandidateListOper#oper}
  */
  readonly oper?: DataThunderSlbSslCertPinningCandidateListOperOper;
}
export interface DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#bypass_count DataThunderSlbSslCertPinningCandidateListOper#bypass_count}
  */
  readonly bypassCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#conn_failure_count DataThunderSlbSslCertPinningCandidateListOper#conn_failure_count}
  */
  readonly connFailureCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#list_type DataThunderSlbSslCertPinningCandidateListOper#list_type}
  */
  readonly listType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#servername DataThunderSlbSslCertPinningCandidateListOper#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#ttl DataThunderSlbSslCertPinningCandidateListOper#ttl}
  */
  readonly ttl?: number;
}

export function dataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructToTerraform(struct?: DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_count: cdktf.numberToTerraform(struct!.bypassCount),
    conn_failure_count: cdktf.numberToTerraform(struct!.connFailureCount),
    list_type: cdktf.stringToTerraform(struct!.listType),
    servername: cdktf.stringToTerraform(struct!.servername),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructToHclTerraform(struct?: DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_count: {
      value: cdktf.numberToHclTerraform(struct!.bypassCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.connFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list_type: {
      value: cdktf.stringToHclTerraform(struct!.listType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servername: {
      value: cdktf.stringToHclTerraform(struct!.servername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCount = this._bypassCount;
    }
    if (this._connFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.connFailureCount = this._connFailureCount;
    }
    if (this._listType !== undefined) {
      hasAnyValues = true;
      internalValueResult.listType = this._listType;
    }
    if (this._servername !== undefined) {
      hasAnyValues = true;
      internalValueResult.servername = this._servername;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassCount = undefined;
      this._connFailureCount = undefined;
      this._listType = undefined;
      this._servername = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassCount = value.bypassCount;
      this._connFailureCount = value.connFailureCount;
      this._listType = value.listType;
      this._servername = value.servername;
      this._ttl = value.ttl;
    }
  }

  // bypass_count - computed: false, optional: true, required: false
  private _bypassCount?: number; 
  public get bypassCount() {
    return this.getNumberAttribute('bypass_count');
  }
  public set bypassCount(value: number) {
    this._bypassCount = value;
  }
  public resetBypassCount() {
    this._bypassCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCountInput() {
    return this._bypassCount;
  }

  // conn_failure_count - computed: false, optional: true, required: false
  private _connFailureCount?: number; 
  public get connFailureCount() {
    return this.getNumberAttribute('conn_failure_count');
  }
  public set connFailureCount(value: number) {
    this._connFailureCount = value;
  }
  public resetConnFailureCount() {
    this._connFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connFailureCountInput() {
    return this._connFailureCount;
  }

  // list_type - computed: false, optional: true, required: false
  private _listType?: string; 
  public get listType() {
    return this.getStringAttribute('list_type');
  }
  public set listType(value: string) {
    this._listType = value;
  }
  public resetListType() {
    this._listType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listTypeInput() {
    return this._listType;
  }

  // servername - computed: false, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructOutputReference {
    return new DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslCertPinningCandidateListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#all DataThunderSlbSslCertPinningCandidateListOper#all}
  */
  readonly all?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#alphabet_order DataThunderSlbSslCertPinningCandidateListOper#alphabet_order}
  */
  readonly alphabetOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#bypassed DataThunderSlbSslCertPinningCandidateListOper#bypassed}
  */
  readonly bypassed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#central_list DataThunderSlbSslCertPinningCandidateListOper#central_list}
  */
  readonly centralList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#local_list DataThunderSlbSslCertPinningCandidateListOper#local_list}
  */
  readonly localList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#mid_request DataThunderSlbSslCertPinningCandidateListOper#mid_request}
  */
  readonly midRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#server_name DataThunderSlbSslCertPinningCandidateListOper#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#stats_only DataThunderSlbSslCertPinningCandidateListOper#stats_only}
  */
  readonly statsOnly?: number;
  /**
  * candidate_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#candidate_list DataThunderSlbSslCertPinningCandidateListOper#candidate_list}
  */
  readonly candidateList?: DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbSslCertPinningCandidateListOperOperToTerraform(struct?: DataThunderSlbSslCertPinningCandidateListOperOperOutputReference | DataThunderSlbSslCertPinningCandidateListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    alphabet_order: cdktf.numberToTerraform(struct!.alphabetOrder),
    bypassed: cdktf.numberToTerraform(struct!.bypassed),
    central_list: cdktf.numberToTerraform(struct!.centralList),
    local_list: cdktf.numberToTerraform(struct!.localList),
    mid_request: cdktf.numberToTerraform(struct!.midRequest),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    stats_only: cdktf.numberToTerraform(struct!.statsOnly),
    candidate_list: cdktf.listMapper(dataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructToTerraform, true)(struct!.candidateList),
  }
}


export function dataThunderSlbSslCertPinningCandidateListOperOperToHclTerraform(struct?: DataThunderSlbSslCertPinningCandidateListOperOperOutputReference | DataThunderSlbSslCertPinningCandidateListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alphabet_order: {
      value: cdktf.numberToHclTerraform(struct!.alphabetOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypassed: {
      value: cdktf.numberToHclTerraform(struct!.bypassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    central_list: {
      value: cdktf.numberToHclTerraform(struct!.centralList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_list: {
      value: cdktf.numberToHclTerraform(struct!.localList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mid_request: {
      value: cdktf.numberToHclTerraform(struct!.midRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats_only: {
      value: cdktf.numberToHclTerraform(struct!.statsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    candidate_list: {
      value: cdktf.listMapperHcl(dataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructToHclTerraform, true)(struct!.candidateList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCertPinningCandidateListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslCertPinningCandidateListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._alphabetOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.alphabetOrder = this._alphabetOrder;
    }
    if (this._bypassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassed = this._bypassed;
    }
    if (this._centralList !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralList = this._centralList;
    }
    if (this._localList !== undefined) {
      hasAnyValues = true;
      internalValueResult.localList = this._localList;
    }
    if (this._midRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.midRequest = this._midRequest;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._statsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsOnly = this._statsOnly;
    }
    if (this._candidateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidateList = this._candidateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCertPinningCandidateListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._alphabetOrder = undefined;
      this._bypassed = undefined;
      this._centralList = undefined;
      this._localList = undefined;
      this._midRequest = undefined;
      this._serverName = undefined;
      this._statsOnly = undefined;
      this._candidateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._alphabetOrder = value.alphabetOrder;
      this._bypassed = value.bypassed;
      this._centralList = value.centralList;
      this._localList = value.localList;
      this._midRequest = value.midRequest;
      this._serverName = value.serverName;
      this._statsOnly = value.statsOnly;
      this._candidateList.internalValue = value.candidateList;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // alphabet_order - computed: false, optional: true, required: false
  private _alphabetOrder?: number; 
  public get alphabetOrder() {
    return this.getNumberAttribute('alphabet_order');
  }
  public set alphabetOrder(value: number) {
    this._alphabetOrder = value;
  }
  public resetAlphabetOrder() {
    this._alphabetOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alphabetOrderInput() {
    return this._alphabetOrder;
  }

  // bypassed - computed: false, optional: true, required: false
  private _bypassed?: number; 
  public get bypassed() {
    return this.getNumberAttribute('bypassed');
  }
  public set bypassed(value: number) {
    this._bypassed = value;
  }
  public resetBypassed() {
    this._bypassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassedInput() {
    return this._bypassed;
  }

  // central_list - computed: false, optional: true, required: false
  private _centralList?: number; 
  public get centralList() {
    return this.getNumberAttribute('central_list');
  }
  public set centralList(value: number) {
    this._centralList = value;
  }
  public resetCentralList() {
    this._centralList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralListInput() {
    return this._centralList;
  }

  // local_list - computed: false, optional: true, required: false
  private _localList?: number; 
  public get localList() {
    return this.getNumberAttribute('local_list');
  }
  public set localList(value: number) {
    this._localList = value;
  }
  public resetLocalList() {
    this._localList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localListInput() {
    return this._localList;
  }

  // mid_request - computed: false, optional: true, required: false
  private _midRequest?: number; 
  public get midRequest() {
    return this.getNumberAttribute('mid_request');
  }
  public set midRequest(value: number) {
    this._midRequest = value;
  }
  public resetMidRequest() {
    this._midRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midRequestInput() {
    return this._midRequest;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // stats_only - computed: false, optional: true, required: false
  private _statsOnly?: number; 
  public get statsOnly() {
    return this.getNumberAttribute('stats_only');
  }
  public set statsOnly(value: number) {
    this._statsOnly = value;
  }
  public resetStatsOnly() {
    this._statsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsOnlyInput() {
    return this._statsOnly;
  }

  // candidate_list - computed: false, optional: true, required: false
  private _candidateList = new DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStructList(this, "candidate_list", false);
  public get candidateList() {
    return this._candidateList;
  }
  public putCandidateList(value: DataThunderSlbSslCertPinningCandidateListOperOperCandidateListStruct[] | cdktf.IResolvable) {
    this._candidateList.internalValue = value;
  }
  public resetCandidateList() {
    this._candidateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateListInput() {
    return this._candidateList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper thunder_slb_ssl_cert_pinning_candidate_list_oper}
*/
export class DataThunderSlbSslCertPinningCandidateListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_cert_pinning_candidate_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslCertPinningCandidateListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslCertPinningCandidateListOper to import
  * @param importFromId The id of the existing DataThunderSlbSslCertPinningCandidateListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslCertPinningCandidateListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_cert_pinning_candidate_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_pinning_candidate_list_oper thunder_slb_ssl_cert_pinning_candidate_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslCertPinningCandidateListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslCertPinningCandidateListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_cert_pinning_candidate_list_oper',
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
  private _oper = new DataThunderSlbSslCertPinningCandidateListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslCertPinningCandidateListOperOper) {
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
      oper: dataThunderSlbSslCertPinningCandidateListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslCertPinningCandidateListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslCertPinningCandidateListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
