// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayKerberosInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#id DataThunderAamAuthenticationRelayKerberosInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Kerberos authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#name DataThunderAamAuthenticationRelayKerberosInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#stats DataThunderAamAuthenticationRelayKerberosInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayKerberosInstanceStatsStats;
}
export interface DataThunderAamAuthenticationRelayKerberosInstanceStatsStats {
  /**
  * Current Pending Requests of User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#current_requests_of_user DataThunderAamAuthenticationRelayKerberosInstanceStats#current_requests_of_user}
  */
  readonly currentRequestsOfUser?: number;
  /**
  * Request Send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#request_send DataThunderAamAuthenticationRelayKerberosInstanceStats#request_send}
  */
  readonly requestSend?: number;
  /**
  * Response Receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#response_receive DataThunderAamAuthenticationRelayKerberosInstanceStats#response_receive}
  */
  readonly responseReceive?: number;
  /**
  * Tickets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#tickets DataThunderAamAuthenticationRelayKerberosInstanceStats#tickets}
  */
  readonly tickets?: number;
}

export function dataThunderAamAuthenticationRelayKerberosInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationRelayKerberosInstanceStatsStatsOutputReference | DataThunderAamAuthenticationRelayKerberosInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_requests_of_user: cdktf.numberToTerraform(struct!.currentRequestsOfUser),
    request_send: cdktf.numberToTerraform(struct!.requestSend),
    response_receive: cdktf.numberToTerraform(struct!.responseReceive),
    tickets: cdktf.numberToTerraform(struct!.tickets),
  }
}


export function dataThunderAamAuthenticationRelayKerberosInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayKerberosInstanceStatsStatsOutputReference | DataThunderAamAuthenticationRelayKerberosInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_requests_of_user: {
      value: cdktf.numberToHclTerraform(struct!.currentRequestsOfUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_send: {
      value: cdktf.numberToHclTerraform(struct!.requestSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_receive: {
      value: cdktf.numberToHclTerraform(struct!.responseReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tickets: {
      value: cdktf.numberToHclTerraform(struct!.tickets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayKerberosInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayKerberosInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentRequestsOfUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentRequestsOfUser = this._currentRequestsOfUser;
    }
    if (this._requestSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSend = this._requestSend;
    }
    if (this._responseReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseReceive = this._responseReceive;
    }
    if (this._tickets !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickets = this._tickets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayKerberosInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentRequestsOfUser = undefined;
      this._requestSend = undefined;
      this._responseReceive = undefined;
      this._tickets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentRequestsOfUser = value.currentRequestsOfUser;
      this._requestSend = value.requestSend;
      this._responseReceive = value.responseReceive;
      this._tickets = value.tickets;
    }
  }

  // current_requests_of_user - computed: false, optional: true, required: false
  private _currentRequestsOfUser?: number; 
  public get currentRequestsOfUser() {
    return this.getNumberAttribute('current_requests_of_user');
  }
  public set currentRequestsOfUser(value: number) {
    this._currentRequestsOfUser = value;
  }
  public resetCurrentRequestsOfUser() {
    this._currentRequestsOfUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentRequestsOfUserInput() {
    return this._currentRequestsOfUser;
  }

  // request_send - computed: false, optional: true, required: false
  private _requestSend?: number; 
  public get requestSend() {
    return this.getNumberAttribute('request_send');
  }
  public set requestSend(value: number) {
    this._requestSend = value;
  }
  public resetRequestSend() {
    this._requestSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSendInput() {
    return this._requestSend;
  }

  // response_receive - computed: false, optional: true, required: false
  private _responseReceive?: number; 
  public get responseReceive() {
    return this.getNumberAttribute('response_receive');
  }
  public set responseReceive(value: number) {
    this._responseReceive = value;
  }
  public resetResponseReceive() {
    this._responseReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseReceiveInput() {
    return this._responseReceive;
  }

  // tickets - computed: false, optional: true, required: false
  private _tickets?: number; 
  public get tickets() {
    return this.getNumberAttribute('tickets');
  }
  public set tickets(value: number) {
    this._tickets = value;
  }
  public resetTickets() {
    this._tickets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketsInput() {
    return this._tickets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats thunder_aam_authentication_relay_kerberos_instance_stats}
*/
export class DataThunderAamAuthenticationRelayKerberosInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_kerberos_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayKerberosInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayKerberosInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayKerberosInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayKerberosInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_kerberos_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_stats thunder_aam_authentication_relay_kerberos_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayKerberosInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayKerberosInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_kerberos_instance_stats',
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
    this._name = config.name;
    this._stats.internalValue = config.stats;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationRelayKerberosInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayKerberosInstanceStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderAamAuthenticationRelayKerberosInstanceStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderAamAuthenticationRelayKerberosInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayKerberosInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
