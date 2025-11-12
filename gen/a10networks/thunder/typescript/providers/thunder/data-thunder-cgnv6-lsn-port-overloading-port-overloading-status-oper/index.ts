// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#id DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#oper DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#oper}
  */
  readonly oper?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOper;
}
export interface DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#end_port_tcp DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#end_port_tcp}
  */
  readonly endPortTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#start_port_tcp DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#start_port_tcp}
  */
  readonly startPortTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#status_tcp DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#status_tcp}
  */
  readonly statusTcp?: string;
}

export function dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructToTerraform(struct?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructOutputReference | DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port_tcp: cdktf.numberToTerraform(struct!.endPortTcp),
    start_port_tcp: cdktf.numberToTerraform(struct!.startPortTcp),
    status_tcp: cdktf.stringToTerraform(struct!.statusTcp),
  }
}


export function dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructToHclTerraform(struct?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructOutputReference | DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port_tcp: {
      value: cdktf.numberToHclTerraform(struct!.endPortTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port_tcp: {
      value: cdktf.numberToHclTerraform(struct!.startPortTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_tcp: {
      value: cdktf.stringToHclTerraform(struct!.statusTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPortTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortTcp = this._endPortTcp;
    }
    if (this._startPortTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortTcp = this._startPortTcp;
    }
    if (this._statusTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusTcp = this._statusTcp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endPortTcp = undefined;
      this._startPortTcp = undefined;
      this._statusTcp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endPortTcp = value.endPortTcp;
      this._startPortTcp = value.startPortTcp;
      this._statusTcp = value.statusTcp;
    }
  }

  // end_port_tcp - computed: false, optional: true, required: false
  private _endPortTcp?: number; 
  public get endPortTcp() {
    return this.getNumberAttribute('end_port_tcp');
  }
  public set endPortTcp(value: number) {
    this._endPortTcp = value;
  }
  public resetEndPortTcp() {
    this._endPortTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortTcpInput() {
    return this._endPortTcp;
  }

  // start_port_tcp - computed: false, optional: true, required: false
  private _startPortTcp?: number; 
  public get startPortTcp() {
    return this.getNumberAttribute('start_port_tcp');
  }
  public set startPortTcp(value: number) {
    this._startPortTcp = value;
  }
  public resetStartPortTcp() {
    this._startPortTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortTcpInput() {
    return this._startPortTcp;
  }

  // status_tcp - computed: false, optional: true, required: false
  private _statusTcp?: string; 
  public get statusTcp() {
    return this.getStringAttribute('status_tcp');
  }
  public set statusTcp(value: string) {
    this._statusTcp = value;
  }
  public resetStatusTcp() {
    this._statusTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusTcpInput() {
    return this._statusTcp;
  }
}
export interface DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#end_port_udp DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#end_port_udp}
  */
  readonly endPortUdp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#start_port_udp DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#start_port_udp}
  */
  readonly startPortUdp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#status_udp DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#status_udp}
  */
  readonly statusUdp?: string;
}

export function dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructToTerraform(struct?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructOutputReference | DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port_udp: cdktf.numberToTerraform(struct!.endPortUdp),
    start_port_udp: cdktf.numberToTerraform(struct!.startPortUdp),
    status_udp: cdktf.stringToTerraform(struct!.statusUdp),
  }
}


export function dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructToHclTerraform(struct?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructOutputReference | DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port_udp: {
      value: cdktf.numberToHclTerraform(struct!.endPortUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port_udp: {
      value: cdktf.numberToHclTerraform(struct!.startPortUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_udp: {
      value: cdktf.stringToHclTerraform(struct!.statusUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPortUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPortUdp = this._endPortUdp;
    }
    if (this._startPortUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPortUdp = this._startPortUdp;
    }
    if (this._statusUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUdp = this._statusUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endPortUdp = undefined;
      this._startPortUdp = undefined;
      this._statusUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endPortUdp = value.endPortUdp;
      this._startPortUdp = value.startPortUdp;
      this._statusUdp = value.statusUdp;
    }
  }

  // end_port_udp - computed: false, optional: true, required: false
  private _endPortUdp?: number; 
  public get endPortUdp() {
    return this.getNumberAttribute('end_port_udp');
  }
  public set endPortUdp(value: number) {
    this._endPortUdp = value;
  }
  public resetEndPortUdp() {
    this._endPortUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortUdpInput() {
    return this._endPortUdp;
  }

  // start_port_udp - computed: false, optional: true, required: false
  private _startPortUdp?: number; 
  public get startPortUdp() {
    return this.getNumberAttribute('start_port_udp');
  }
  public set startPortUdp(value: number) {
    this._startPortUdp = value;
  }
  public resetStartPortUdp() {
    this._startPortUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortUdpInput() {
    return this._startPortUdp;
  }

  // status_udp - computed: false, optional: true, required: false
  private _statusUdp?: string; 
  public get statusUdp() {
    return this.getStringAttribute('status_udp');
  }
  public set statusUdp(value: string) {
    this._statusUdp = value;
  }
  public resetStatusUdp() {
    this._statusUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUdpInput() {
    return this._statusUdp;
  }
}
export interface DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#unique DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#unique}
  */
  readonly unique?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#tcp_list DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#tcp_list}
  */
  readonly tcpList?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStruct;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#udp_list DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper#udp_list}
  */
  readonly udpList?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStruct;
}

export function dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperToTerraform(struct?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperOutputReference | DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unique: cdktf.stringToTerraform(struct!.unique),
    tcp_list: dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructToTerraform(struct!.tcpList),
    udp_list: dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructToTerraform(struct!.udpList),
  }
}


export function dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperToHclTerraform(struct?: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperOutputReference | DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unique: {
      value: cdktf.stringToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_list: {
      value: dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructToHclTerraform(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructList",
    },
    udp_list: {
      value: dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructToHclTerraform(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unique = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unique = value.unique;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: string; 
  public get unique() {
    return this.getStringAttribute('unique');
  }
  public set unique(value: string) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStructOutputReference(this, "tcp_list");
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperTcpListStruct) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStructOutputReference(this, "udp_list");
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperUdpListStruct) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper thunder_cgnv6_lsn_port_overloading_port_overloading_status_oper}
*/
export class DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_port_overloading_port_overloading_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_port_overloading_port_overloading_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_port_overloading_port_overloading_status_oper thunder_cgnv6_lsn_port_overloading_port_overloading_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_port_overloading_port_overloading_status_oper',
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
  private _oper = new DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOper) {
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
      oper: dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnPortOverloadingPortOverloadingStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
