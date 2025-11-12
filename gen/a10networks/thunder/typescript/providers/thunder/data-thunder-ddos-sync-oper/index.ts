// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosSyncOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#id DataThunderDdosSyncOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#oper DataThunderDdosSyncOper#oper}
  */
  readonly oper?: DataThunderDdosSyncOperOper;
}
export interface DataThunderDdosSyncOperOperPeerListStruct {
  /**
  * Number of heartbeat messages expected from the peer that did not arrive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#peer_heartbeat_missing DataThunderDdosSyncOper#peer_heartbeat_missing}
  */
  readonly peerHeartbeatMissing?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#peer_ip DataThunderDdosSyncOper#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Number of messages received from this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#peer_message_received DataThunderDdosSyncOper#peer_message_received}
  */
  readonly peerMessageReceived?: number;
  /**
  * Number messages sent to this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#peer_message_sent DataThunderDdosSyncOper#peer_message_sent}
  */
  readonly peerMessageSent?: number;
  /**
  * Status of the connection with the peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#peer_status DataThunderDdosSyncOper#peer_status}
  */
  readonly peerStatus?: string;
}

export function dataThunderDdosSyncOperOperPeerListStructToTerraform(struct?: DataThunderDdosSyncOperOperPeerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_heartbeat_missing: cdktf.numberToTerraform(struct!.peerHeartbeatMissing),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    peer_message_received: cdktf.numberToTerraform(struct!.peerMessageReceived),
    peer_message_sent: cdktf.numberToTerraform(struct!.peerMessageSent),
    peer_status: cdktf.stringToTerraform(struct!.peerStatus),
  }
}


export function dataThunderDdosSyncOperOperPeerListStructToHclTerraform(struct?: DataThunderDdosSyncOperOperPeerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_heartbeat_missing: {
      value: cdktf.numberToHclTerraform(struct!.peerHeartbeatMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_message_received: {
      value: cdktf.numberToHclTerraform(struct!.peerMessageReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_message_sent: {
      value: cdktf.numberToHclTerraform(struct!.peerMessageSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_status: {
      value: cdktf.stringToHclTerraform(struct!.peerStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSyncOperOperPeerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosSyncOperOperPeerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerHeartbeatMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerHeartbeatMissing = this._peerHeartbeatMissing;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._peerMessageReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerMessageReceived = this._peerMessageReceived;
    }
    if (this._peerMessageSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerMessageSent = this._peerMessageSent;
    }
    if (this._peerStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerStatus = this._peerStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSyncOperOperPeerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerHeartbeatMissing = undefined;
      this._peerIp = undefined;
      this._peerMessageReceived = undefined;
      this._peerMessageSent = undefined;
      this._peerStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerHeartbeatMissing = value.peerHeartbeatMissing;
      this._peerIp = value.peerIp;
      this._peerMessageReceived = value.peerMessageReceived;
      this._peerMessageSent = value.peerMessageSent;
      this._peerStatus = value.peerStatus;
    }
  }

  // peer_heartbeat_missing - computed: false, optional: true, required: false
  private _peerHeartbeatMissing?: number; 
  public get peerHeartbeatMissing() {
    return this.getNumberAttribute('peer_heartbeat_missing');
  }
  public set peerHeartbeatMissing(value: number) {
    this._peerHeartbeatMissing = value;
  }
  public resetPeerHeartbeatMissing() {
    this._peerHeartbeatMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerHeartbeatMissingInput() {
    return this._peerHeartbeatMissing;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_message_received - computed: false, optional: true, required: false
  private _peerMessageReceived?: number; 
  public get peerMessageReceived() {
    return this.getNumberAttribute('peer_message_received');
  }
  public set peerMessageReceived(value: number) {
    this._peerMessageReceived = value;
  }
  public resetPeerMessageReceived() {
    this._peerMessageReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerMessageReceivedInput() {
    return this._peerMessageReceived;
  }

  // peer_message_sent - computed: false, optional: true, required: false
  private _peerMessageSent?: number; 
  public get peerMessageSent() {
    return this.getNumberAttribute('peer_message_sent');
  }
  public set peerMessageSent(value: number) {
    this._peerMessageSent = value;
  }
  public resetPeerMessageSent() {
    this._peerMessageSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerMessageSentInput() {
    return this._peerMessageSent;
  }

  // peer_status - computed: false, optional: true, required: false
  private _peerStatus?: string; 
  public get peerStatus() {
    return this.getStringAttribute('peer_status');
  }
  public set peerStatus(value: string) {
    this._peerStatus = value;
  }
  public resetPeerStatus() {
    this._peerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerStatusInput() {
    return this._peerStatus;
  }
}

export class DataThunderDdosSyncOperOperPeerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosSyncOperOperPeerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosSyncOperOperPeerListStructOutputReference {
    return new DataThunderDdosSyncOperOperPeerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosSyncOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#error_str DataThunderDdosSyncOper#error_str}
  */
  readonly errorStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#if_show_error_num DataThunderDdosSyncOper#if_show_error_num}
  */
  readonly ifShowErrorNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#local_ip DataThunderDdosSyncOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * DDOS sync status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#status DataThunderDdosSyncOper#status}
  */
  readonly status?: string;
  /**
  * Total number of messages received on this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#total_message_received DataThunderDdosSyncOper#total_message_received}
  */
  readonly totalMessageReceived?: number;
  /**
  * Total number of messages sent from this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#total_message_sent DataThunderDdosSyncOper#total_message_sent}
  */
  readonly totalMessageSent?: number;
  /**
  * peer_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#peer_list DataThunderDdosSyncOper#peer_list}
  */
  readonly peerList?: DataThunderDdosSyncOperOperPeerListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosSyncOperOperToTerraform(struct?: DataThunderDdosSyncOperOperOutputReference | DataThunderDdosSyncOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_str: cdktf.stringToTerraform(struct!.errorStr),
    if_show_error_num: cdktf.numberToTerraform(struct!.ifShowErrorNum),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    status: cdktf.stringToTerraform(struct!.status),
    total_message_received: cdktf.numberToTerraform(struct!.totalMessageReceived),
    total_message_sent: cdktf.numberToTerraform(struct!.totalMessageSent),
    peer_list: cdktf.listMapper(dataThunderDdosSyncOperOperPeerListStructToTerraform, true)(struct!.peerList),
  }
}


export function dataThunderDdosSyncOperOperToHclTerraform(struct?: DataThunderDdosSyncOperOperOutputReference | DataThunderDdosSyncOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_str: {
      value: cdktf.stringToHclTerraform(struct!.errorStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_show_error_num: {
      value: cdktf.numberToHclTerraform(struct!.ifShowErrorNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_message_received: {
      value: cdktf.numberToHclTerraform(struct!.totalMessageReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_message_sent: {
      value: cdktf.numberToHclTerraform(struct!.totalMessageSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_list: {
      value: cdktf.listMapperHcl(dataThunderDdosSyncOperOperPeerListStructToHclTerraform, true)(struct!.peerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosSyncOperOperPeerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSyncOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosSyncOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStr = this._errorStr;
    }
    if (this._ifShowErrorNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifShowErrorNum = this._ifShowErrorNum;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._totalMessageReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMessageReceived = this._totalMessageReceived;
    }
    if (this._totalMessageSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMessageSent = this._totalMessageSent;
    }
    if (this._peerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerList = this._peerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSyncOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorStr = undefined;
      this._ifShowErrorNum = undefined;
      this._localIp = undefined;
      this._status = undefined;
      this._totalMessageReceived = undefined;
      this._totalMessageSent = undefined;
      this._peerList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorStr = value.errorStr;
      this._ifShowErrorNum = value.ifShowErrorNum;
      this._localIp = value.localIp;
      this._status = value.status;
      this._totalMessageReceived = value.totalMessageReceived;
      this._totalMessageSent = value.totalMessageSent;
      this._peerList.internalValue = value.peerList;
    }
  }

  // error_str - computed: false, optional: true, required: false
  private _errorStr?: string; 
  public get errorStr() {
    return this.getStringAttribute('error_str');
  }
  public set errorStr(value: string) {
    this._errorStr = value;
  }
  public resetErrorStr() {
    this._errorStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStrInput() {
    return this._errorStr;
  }

  // if_show_error_num - computed: false, optional: true, required: false
  private _ifShowErrorNum?: number; 
  public get ifShowErrorNum() {
    return this.getNumberAttribute('if_show_error_num');
  }
  public set ifShowErrorNum(value: number) {
    this._ifShowErrorNum = value;
  }
  public resetIfShowErrorNum() {
    this._ifShowErrorNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifShowErrorNumInput() {
    return this._ifShowErrorNum;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // total_message_received - computed: false, optional: true, required: false
  private _totalMessageReceived?: number; 
  public get totalMessageReceived() {
    return this.getNumberAttribute('total_message_received');
  }
  public set totalMessageReceived(value: number) {
    this._totalMessageReceived = value;
  }
  public resetTotalMessageReceived() {
    this._totalMessageReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMessageReceivedInput() {
    return this._totalMessageReceived;
  }

  // total_message_sent - computed: false, optional: true, required: false
  private _totalMessageSent?: number; 
  public get totalMessageSent() {
    return this.getNumberAttribute('total_message_sent');
  }
  public set totalMessageSent(value: number) {
    this._totalMessageSent = value;
  }
  public resetTotalMessageSent() {
    this._totalMessageSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMessageSentInput() {
    return this._totalMessageSent;
  }

  // peer_list - computed: false, optional: true, required: false
  private _peerList = new DataThunderDdosSyncOperOperPeerListStructList(this, "peer_list", false);
  public get peerList() {
    return this._peerList;
  }
  public putPeerList(value: DataThunderDdosSyncOperOperPeerListStruct[] | cdktf.IResolvable) {
    this._peerList.internalValue = value;
  }
  public resetPeerList() {
    this._peerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerListInput() {
    return this._peerList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper thunder_ddos_sync_oper}
*/
export class DataThunderDdosSyncOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_sync_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosSyncOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosSyncOper to import
  * @param importFromId The id of the existing DataThunderDdosSyncOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosSyncOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_sync_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_sync_oper thunder_ddos_sync_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosSyncOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosSyncOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_sync_oper',
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
  private _oper = new DataThunderDdosSyncOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosSyncOperOper) {
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
      oper: dataThunderDdosSyncOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosSyncOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosSyncOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
