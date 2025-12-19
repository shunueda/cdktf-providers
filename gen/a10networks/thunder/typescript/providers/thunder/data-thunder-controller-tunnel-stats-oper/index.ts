// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderControllerTunnelStatsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#id DataThunderControllerTunnelStatsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#oper DataThunderControllerTunnelStatsOper#oper}
  */
  readonly oper?: DataThunderControllerTunnelStatsOperOper;
}
export interface DataThunderControllerTunnelStatsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#bytes_recieved DataThunderControllerTunnelStatsOper#bytes_recieved}
  */
  readonly bytesRecieved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#bytes_sent DataThunderControllerTunnelStatsOper#bytes_sent}
  */
  readonly bytesSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#error_message DataThunderControllerTunnelStatsOper#error_message}
  */
  readonly errorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#number_of_errors DataThunderControllerTunnelStatsOper#number_of_errors}
  */
  readonly numberOfErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#status DataThunderControllerTunnelStatsOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#uptime DataThunderControllerTunnelStatsOper#uptime}
  */
  readonly uptime?: string;
}

export function dataThunderControllerTunnelStatsOperOperToTerraform(struct?: DataThunderControllerTunnelStatsOperOperOutputReference | DataThunderControllerTunnelStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes_recieved: cdktf.numberToTerraform(struct!.bytesRecieved),
    bytes_sent: cdktf.numberToTerraform(struct!.bytesSent),
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
    number_of_errors: cdktf.numberToTerraform(struct!.numberOfErrors),
    status: cdktf.stringToTerraform(struct!.status),
    uptime: cdktf.stringToTerraform(struct!.uptime),
  }
}


export function dataThunderControllerTunnelStatsOperOperToHclTerraform(struct?: DataThunderControllerTunnelStatsOperOperOutputReference | DataThunderControllerTunnelStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes_recieved: {
      value: cdktf.numberToHclTerraform(struct!.bytesRecieved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.bytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_message: {
      value: cdktf.stringToHclTerraform(struct!.errorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_errors: {
      value: cdktf.numberToHclTerraform(struct!.numberOfErrors),
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
    uptime: {
      value: cdktf.stringToHclTerraform(struct!.uptime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderControllerTunnelStatsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderControllerTunnelStatsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesRecieved !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesRecieved = this._bytesRecieved;
    }
    if (this._bytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesSent = this._bytesSent;
    }
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    if (this._numberOfErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfErrors = this._numberOfErrors;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptime = this._uptime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderControllerTunnelStatsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesRecieved = undefined;
      this._bytesSent = undefined;
      this._errorMessage = undefined;
      this._numberOfErrors = undefined;
      this._status = undefined;
      this._uptime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytesRecieved = value.bytesRecieved;
      this._bytesSent = value.bytesSent;
      this._errorMessage = value.errorMessage;
      this._numberOfErrors = value.numberOfErrors;
      this._status = value.status;
      this._uptime = value.uptime;
    }
  }

  // bytes_recieved - computed: false, optional: true, required: false
  private _bytesRecieved?: number; 
  public get bytesRecieved() {
    return this.getNumberAttribute('bytes_recieved');
  }
  public set bytesRecieved(value: number) {
    this._bytesRecieved = value;
  }
  public resetBytesRecieved() {
    this._bytesRecieved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesRecievedInput() {
    return this._bytesRecieved;
  }

  // bytes_sent - computed: false, optional: true, required: false
  private _bytesSent?: number; 
  public get bytesSent() {
    return this.getNumberAttribute('bytes_sent');
  }
  public set bytesSent(value: number) {
    this._bytesSent = value;
  }
  public resetBytesSent() {
    this._bytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesSentInput() {
    return this._bytesSent;
  }

  // error_message - computed: false, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // number_of_errors - computed: false, optional: true, required: false
  private _numberOfErrors?: number; 
  public get numberOfErrors() {
    return this.getNumberAttribute('number_of_errors');
  }
  public set numberOfErrors(value: number) {
    this._numberOfErrors = value;
  }
  public resetNumberOfErrors() {
    this._numberOfErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfErrorsInput() {
    return this._numberOfErrors;
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

  // uptime - computed: false, optional: true, required: false
  private _uptime?: string; 
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
  public set uptime(value: string) {
    this._uptime = value;
  }
  public resetUptime() {
    this._uptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeInput() {
    return this._uptime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper thunder_controller_tunnel_stats_oper}
*/
export class DataThunderControllerTunnelStatsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_controller_tunnel_stats_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderControllerTunnelStatsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderControllerTunnelStatsOper to import
  * @param importFromId The id of the existing DataThunderControllerTunnelStatsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderControllerTunnelStatsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_controller_tunnel_stats_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_tunnel_stats_oper thunder_controller_tunnel_stats_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderControllerTunnelStatsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderControllerTunnelStatsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_controller_tunnel_stats_oper',
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
  private _oper = new DataThunderControllerTunnelStatsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderControllerTunnelStatsOperOper) {
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
      oper: dataThunderControllerTunnelStatsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderControllerTunnelStatsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderControllerTunnelStatsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
