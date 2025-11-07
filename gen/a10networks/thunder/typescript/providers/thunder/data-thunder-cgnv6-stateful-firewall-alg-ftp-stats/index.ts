// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6StatefulFirewallAlgFtpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats#id DataThunderCgnv6StatefulFirewallAlgFtpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats#stats DataThunderCgnv6StatefulFirewallAlgFtpStats#stats}
  */
  readonly stats?: DataThunderCgnv6StatefulFirewallAlgFtpStatsStats;
}
export interface DataThunderCgnv6StatefulFirewallAlgFtpStatsStats {
  /**
  * EPRT Requests From Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats#client_eprt_request DataThunderCgnv6StatefulFirewallAlgFtpStats#client_eprt_request}
  */
  readonly clientEprtRequest?: number;
  /**
  * PORT Requests From Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats#client_port_request DataThunderCgnv6StatefulFirewallAlgFtpStats#client_port_request}
  */
  readonly clientPortRequest?: number;
  /**
  * EPSV Replies From Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats#server_epsv_reply DataThunderCgnv6StatefulFirewallAlgFtpStats#server_epsv_reply}
  */
  readonly serverEpsvReply?: number;
  /**
  * PASV Replies From Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats#server_pasv_reply DataThunderCgnv6StatefulFirewallAlgFtpStats#server_pasv_reply}
  */
  readonly serverPasvReply?: number;
}

export function dataThunderCgnv6StatefulFirewallAlgFtpStatsStatsToTerraform(struct?: DataThunderCgnv6StatefulFirewallAlgFtpStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallAlgFtpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_eprt_request: cdktf.numberToTerraform(struct!.clientEprtRequest),
    client_port_request: cdktf.numberToTerraform(struct!.clientPortRequest),
    server_epsv_reply: cdktf.numberToTerraform(struct!.serverEpsvReply),
    server_pasv_reply: cdktf.numberToTerraform(struct!.serverPasvReply),
  }
}


export function dataThunderCgnv6StatefulFirewallAlgFtpStatsStatsToHclTerraform(struct?: DataThunderCgnv6StatefulFirewallAlgFtpStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallAlgFtpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_eprt_request: {
      value: cdktf.numberToHclTerraform(struct!.clientEprtRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_port_request: {
      value: cdktf.numberToHclTerraform(struct!.clientPortRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_epsv_reply: {
      value: cdktf.numberToHclTerraform(struct!.serverEpsvReply),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_pasv_reply: {
      value: cdktf.numberToHclTerraform(struct!.serverPasvReply),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6StatefulFirewallAlgFtpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6StatefulFirewallAlgFtpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientEprtRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEprtRequest = this._clientEprtRequest;
    }
    if (this._clientPortRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPortRequest = this._clientPortRequest;
    }
    if (this._serverEpsvReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverEpsvReply = this._serverEpsvReply;
    }
    if (this._serverPasvReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPasvReply = this._serverPasvReply;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6StatefulFirewallAlgFtpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientEprtRequest = undefined;
      this._clientPortRequest = undefined;
      this._serverEpsvReply = undefined;
      this._serverPasvReply = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientEprtRequest = value.clientEprtRequest;
      this._clientPortRequest = value.clientPortRequest;
      this._serverEpsvReply = value.serverEpsvReply;
      this._serverPasvReply = value.serverPasvReply;
    }
  }

  // client_eprt_request - computed: false, optional: true, required: false
  private _clientEprtRequest?: number; 
  public get clientEprtRequest() {
    return this.getNumberAttribute('client_eprt_request');
  }
  public set clientEprtRequest(value: number) {
    this._clientEprtRequest = value;
  }
  public resetClientEprtRequest() {
    this._clientEprtRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEprtRequestInput() {
    return this._clientEprtRequest;
  }

  // client_port_request - computed: false, optional: true, required: false
  private _clientPortRequest?: number; 
  public get clientPortRequest() {
    return this.getNumberAttribute('client_port_request');
  }
  public set clientPortRequest(value: number) {
    this._clientPortRequest = value;
  }
  public resetClientPortRequest() {
    this._clientPortRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPortRequestInput() {
    return this._clientPortRequest;
  }

  // server_epsv_reply - computed: false, optional: true, required: false
  private _serverEpsvReply?: number; 
  public get serverEpsvReply() {
    return this.getNumberAttribute('server_epsv_reply');
  }
  public set serverEpsvReply(value: number) {
    this._serverEpsvReply = value;
  }
  public resetServerEpsvReply() {
    this._serverEpsvReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEpsvReplyInput() {
    return this._serverEpsvReply;
  }

  // server_pasv_reply - computed: false, optional: true, required: false
  private _serverPasvReply?: number; 
  public get serverPasvReply() {
    return this.getNumberAttribute('server_pasv_reply');
  }
  public set serverPasvReply(value: number) {
    this._serverPasvReply = value;
  }
  public resetServerPasvReply() {
    this._serverPasvReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPasvReplyInput() {
    return this._serverPasvReply;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats thunder_cgnv6_stateful_firewall_alg_ftp_stats}
*/
export class DataThunderCgnv6StatefulFirewallAlgFtpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_alg_ftp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6StatefulFirewallAlgFtpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6StatefulFirewallAlgFtpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6StatefulFirewallAlgFtpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6StatefulFirewallAlgFtpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_alg_ftp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_ftp_stats thunder_cgnv6_stateful_firewall_alg_ftp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6StatefulFirewallAlgFtpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6StatefulFirewallAlgFtpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_alg_ftp_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6StatefulFirewallAlgFtpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6StatefulFirewallAlgFtpStatsStats) {
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
      stats: dataThunderCgnv6StatefulFirewallAlgFtpStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderCgnv6StatefulFirewallAlgFtpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6StatefulFirewallAlgFtpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
