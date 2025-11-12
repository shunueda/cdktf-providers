// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosTokenAuthenticationAuthenticatedListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#id DataThunderDdosTokenAuthenticationAuthenticatedListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#oper DataThunderDdosTokenAuthenticationAuthenticatedListOper#oper}
  */
  readonly oper?: DataThunderDdosTokenAuthenticationAuthenticatedListOperOper;
}
export interface DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#dst_ip_str DataThunderDdosTokenAuthenticationAuthenticatedListOper#dst_ip_str}
  */
  readonly dstIpStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#dst_port DataThunderDdosTokenAuthenticationAuthenticatedListOper#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#src_ip_str DataThunderDdosTokenAuthenticationAuthenticatedListOper#src_ip_str}
  */
  readonly srcIpStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#src_port DataThunderDdosTokenAuthenticationAuthenticatedListOper#src_port}
  */
  readonly srcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#token DataThunderDdosTokenAuthenticationAuthenticatedListOper#token}
  */
  readonly token?: number;
}

export function dataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructToTerraform(struct?: DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip_str: cdktf.stringToTerraform(struct!.dstIpStr),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    src_ip_str: cdktf.stringToTerraform(struct!.srcIpStr),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    token: cdktf.numberToTerraform(struct!.token),
  }
}


export function dataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructToHclTerraform(struct?: DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip_str: {
      value: cdktf.stringToHclTerraform(struct!.dstIpStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_str: {
      value: cdktf.stringToHclTerraform(struct!.srcIpStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.numberToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIpStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpStr = this._dstIpStr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._srcIpStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpStr = this._srcIpStr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIpStr = undefined;
      this._dstPort = undefined;
      this._srcIpStr = undefined;
      this._srcPort = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIpStr = value.dstIpStr;
      this._dstPort = value.dstPort;
      this._srcIpStr = value.srcIpStr;
      this._srcPort = value.srcPort;
      this._token = value.token;
    }
  }

  // dst_ip_str - computed: false, optional: true, required: false
  private _dstIpStr?: string; 
  public get dstIpStr() {
    return this.getStringAttribute('dst_ip_str');
  }
  public set dstIpStr(value: string) {
    this._dstIpStr = value;
  }
  public resetDstIpStr() {
    this._dstIpStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpStrInput() {
    return this._dstIpStr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // src_ip_str - computed: false, optional: true, required: false
  private _srcIpStr?: string; 
  public get srcIpStr() {
    return this.getStringAttribute('src_ip_str');
  }
  public set srcIpStr(value: string) {
    this._srcIpStr = value;
  }
  public resetSrcIpStr() {
    this._srcIpStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpStrInput() {
    return this._srcIpStr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // token - computed: false, optional: true, required: false
  private _token?: number; 
  public get token() {
    return this.getNumberAttribute('token');
  }
  public set token(value: number) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructOutputReference {
    return new DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosTokenAuthenticationAuthenticatedListOperOper {
  /**
  * player_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#player_list DataThunderDdosTokenAuthenticationAuthenticatedListOper#player_list}
  */
  readonly playerList?: DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosTokenAuthenticationAuthenticatedListOperOperToTerraform(struct?: DataThunderDdosTokenAuthenticationAuthenticatedListOperOperOutputReference | DataThunderDdosTokenAuthenticationAuthenticatedListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    player_list: cdktf.listMapper(dataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructToTerraform, true)(struct!.playerList),
  }
}


export function dataThunderDdosTokenAuthenticationAuthenticatedListOperOperToHclTerraform(struct?: DataThunderDdosTokenAuthenticationAuthenticatedListOperOperOutputReference | DataThunderDdosTokenAuthenticationAuthenticatedListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    player_list: {
      value: cdktf.listMapperHcl(dataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructToHclTerraform, true)(struct!.playerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosTokenAuthenticationAuthenticatedListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosTokenAuthenticationAuthenticatedListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playerList = this._playerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosTokenAuthenticationAuthenticatedListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._playerList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._playerList.internalValue = value.playerList;
    }
  }

  // player_list - computed: false, optional: true, required: false
  private _playerList = new DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStructList(this, "player_list", false);
  public get playerList() {
    return this._playerList;
  }
  public putPlayerList(value: DataThunderDdosTokenAuthenticationAuthenticatedListOperOperPlayerListStruct[] | cdktf.IResolvable) {
    this._playerList.internalValue = value;
  }
  public resetPlayerList() {
    this._playerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerListInput() {
    return this._playerList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper thunder_ddos_token_authentication_authenticated_list_oper}
*/
export class DataThunderDdosTokenAuthenticationAuthenticatedListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_token_authentication_authenticated_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosTokenAuthenticationAuthenticatedListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosTokenAuthenticationAuthenticatedListOper to import
  * @param importFromId The id of the existing DataThunderDdosTokenAuthenticationAuthenticatedListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosTokenAuthenticationAuthenticatedListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_token_authentication_authenticated_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_authenticated_list_oper thunder_ddos_token_authentication_authenticated_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosTokenAuthenticationAuthenticatedListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosTokenAuthenticationAuthenticatedListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_token_authentication_authenticated_list_oper',
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
  private _oper = new DataThunderDdosTokenAuthenticationAuthenticatedListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosTokenAuthenticationAuthenticatedListOperOper) {
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
      oper: dataThunderDdosTokenAuthenticationAuthenticatedListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosTokenAuthenticationAuthenticatedListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosTokenAuthenticationAuthenticatedListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
