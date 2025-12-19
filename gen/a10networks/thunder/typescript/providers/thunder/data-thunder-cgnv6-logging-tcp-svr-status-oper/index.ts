// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LoggingTcpSvrStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#id DataThunderCgnv6LoggingTcpSvrStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#oper DataThunderCgnv6LoggingTcpSvrStatusOper#oper}
  */
  readonly oper?: DataThunderCgnv6LoggingTcpSvrStatusOperOper;
}
export interface DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#num_cpus DataThunderCgnv6LoggingTcpSvrStatusOper#num_cpus}
  */
  readonly numCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#overall_status DataThunderCgnv6LoggingTcpSvrStatusOper#overall_status}
  */
  readonly overallStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#server_name DataThunderCgnv6LoggingTcpSvrStatusOper#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#server_port DataThunderCgnv6LoggingTcpSvrStatusOper#server_port}
  */
  readonly serverPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#status DataThunderCgnv6LoggingTcpSvrStatusOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#template DataThunderCgnv6LoggingTcpSvrStatusOper#template}
  */
  readonly template?: string;
}

export function dataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructToTerraform(struct?: DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructOutputReference | DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_cpus: cdktf.numberToTerraform(struct!.numCpus),
    overall_status: cdktf.numberToTerraform(struct!.overallStatus),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
    status: cdktf.stringToTerraform(struct!.status),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructToHclTerraform(struct?: DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructOutputReference | DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_cpus: {
      value: cdktf.numberToHclTerraform(struct!.numCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overall_status: {
      value: cdktf.numberToHclTerraform(struct!.overallStatus),
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
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpus = this._numCpus;
    }
    if (this._overallStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallStatus = this._overallStatus;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numCpus = undefined;
      this._overallStatus = undefined;
      this._serverName = undefined;
      this._serverPort = undefined;
      this._status = undefined;
      this._template = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numCpus = value.numCpus;
      this._overallStatus = value.overallStatus;
      this._serverName = value.serverName;
      this._serverPort = value.serverPort;
      this._status = value.status;
      this._template = value.template;
    }
  }

  // num_cpus - computed: false, optional: true, required: false
  private _numCpus?: number; 
  public get numCpus() {
    return this.getNumberAttribute('num_cpus');
  }
  public set numCpus(value: number) {
    this._numCpus = value;
  }
  public resetNumCpus() {
    this._numCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpusInput() {
    return this._numCpus;
  }

  // overall_status - computed: false, optional: true, required: false
  private _overallStatus?: number; 
  public get overallStatus() {
    return this.getNumberAttribute('overall_status');
  }
  public set overallStatus(value: number) {
    this._overallStatus = value;
  }
  public resetOverallStatus() {
    this._overallStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallStatusInput() {
    return this._overallStatus;
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

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataThunderCgnv6LoggingTcpSvrStatusOperOper {
  /**
  * tcp_svr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#tcp_svr_list DataThunderCgnv6LoggingTcpSvrStatusOper#tcp_svr_list}
  */
  readonly tcpSvrList?: DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStruct;
}

export function dataThunderCgnv6LoggingTcpSvrStatusOperOperToTerraform(struct?: DataThunderCgnv6LoggingTcpSvrStatusOperOperOutputReference | DataThunderCgnv6LoggingTcpSvrStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_svr_list: dataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructToTerraform(struct!.tcpSvrList),
  }
}


export function dataThunderCgnv6LoggingTcpSvrStatusOperOperToHclTerraform(struct?: DataThunderCgnv6LoggingTcpSvrStatusOperOperOutputReference | DataThunderCgnv6LoggingTcpSvrStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_svr_list: {
      value: dataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructToHclTerraform(struct!.tcpSvrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LoggingTcpSvrStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LoggingTcpSvrStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpSvrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSvrList = this._tcpSvrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LoggingTcpSvrStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpSvrList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpSvrList.internalValue = value.tcpSvrList;
    }
  }

  // tcp_svr_list - computed: false, optional: true, required: false
  private _tcpSvrList = new DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStructOutputReference(this, "tcp_svr_list");
  public get tcpSvrList() {
    return this._tcpSvrList;
  }
  public putTcpSvrList(value: DataThunderCgnv6LoggingTcpSvrStatusOperOperTcpSvrListStruct) {
    this._tcpSvrList.internalValue = value;
  }
  public resetTcpSvrList() {
    this._tcpSvrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSvrListInput() {
    return this._tcpSvrList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper thunder_cgnv6_logging_tcp_svr_status_oper}
*/
export class DataThunderCgnv6LoggingTcpSvrStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_logging_tcp_svr_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LoggingTcpSvrStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LoggingTcpSvrStatusOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LoggingTcpSvrStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LoggingTcpSvrStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_logging_tcp_svr_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_tcp_svr_status_oper thunder_cgnv6_logging_tcp_svr_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LoggingTcpSvrStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LoggingTcpSvrStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_logging_tcp_svr_status_oper',
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
  private _oper = new DataThunderCgnv6LoggingTcpSvrStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LoggingTcpSvrStatusOperOper) {
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
      oper: dataThunderCgnv6LoggingTcpSvrStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6LoggingTcpSvrStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LoggingTcpSvrStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
