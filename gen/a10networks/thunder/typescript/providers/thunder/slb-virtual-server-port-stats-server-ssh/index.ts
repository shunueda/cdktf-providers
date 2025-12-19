// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerPortStatsServerSshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#id SlbVirtualServerPortStatsServerSsh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#port_number SlbVirtualServerPortStatsServerSsh#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#protocol SlbVirtualServerPortStatsServerSsh#protocol}
  */
  readonly protocol: string;
  /**
  * Virtual_server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#virtual_server_name SlbVirtualServerPortStatsServerSsh#virtual_server_name}
  */
  readonly virtualServerName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#stats SlbVirtualServerPortStatsServerSsh#stats}
  */
  readonly stats?: SlbVirtualServerPortStatsServerSshStats;
}
export interface SlbVirtualServerPortStatsServerSshStatsServerSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#failed_handshakes SlbVirtualServerPortStatsServerSsh#failed_handshakes}
  */
  readonly failedHandshakes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#forwarding_errors SlbVirtualServerPortStatsServerSsh#forwarding_errors}
  */
  readonly forwardingErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#successful_handshakes SlbVirtualServerPortStatsServerSsh#successful_handshakes}
  */
  readonly successfulHandshakes?: number;
}

export function slbVirtualServerPortStatsServerSshStatsServerSshToTerraform(struct?: SlbVirtualServerPortStatsServerSshStatsServerSshOutputReference | SlbVirtualServerPortStatsServerSshStatsServerSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_handshakes: cdktf.numberToTerraform(struct!.failedHandshakes),
    forwarding_errors: cdktf.numberToTerraform(struct!.forwardingErrors),
    successful_handshakes: cdktf.numberToTerraform(struct!.successfulHandshakes),
  }
}


export function slbVirtualServerPortStatsServerSshStatsServerSshToHclTerraform(struct?: SlbVirtualServerPortStatsServerSshStatsServerSshOutputReference | SlbVirtualServerPortStatsServerSshStatsServerSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_handshakes: {
      value: cdktf.numberToHclTerraform(struct!.failedHandshakes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forwarding_errors: {
      value: cdktf.numberToHclTerraform(struct!.forwardingErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successful_handshakes: {
      value: cdktf.numberToHclTerraform(struct!.successfulHandshakes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsServerSshStatsServerSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsServerSshStatsServerSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedHandshakes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedHandshakes = this._failedHandshakes;
    }
    if (this._forwardingErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingErrors = this._forwardingErrors;
    }
    if (this._successfulHandshakes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulHandshakes = this._successfulHandshakes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsServerSshStatsServerSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failedHandshakes = undefined;
      this._forwardingErrors = undefined;
      this._successfulHandshakes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failedHandshakes = value.failedHandshakes;
      this._forwardingErrors = value.forwardingErrors;
      this._successfulHandshakes = value.successfulHandshakes;
    }
  }

  // failed_handshakes - computed: false, optional: true, required: false
  private _failedHandshakes?: number; 
  public get failedHandshakes() {
    return this.getNumberAttribute('failed_handshakes');
  }
  public set failedHandshakes(value: number) {
    this._failedHandshakes = value;
  }
  public resetFailedHandshakes() {
    this._failedHandshakes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedHandshakesInput() {
    return this._failedHandshakes;
  }

  // forwarding_errors - computed: false, optional: true, required: false
  private _forwardingErrors?: number; 
  public get forwardingErrors() {
    return this.getNumberAttribute('forwarding_errors');
  }
  public set forwardingErrors(value: number) {
    this._forwardingErrors = value;
  }
  public resetForwardingErrors() {
    this._forwardingErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingErrorsInput() {
    return this._forwardingErrors;
  }

  // successful_handshakes - computed: false, optional: true, required: false
  private _successfulHandshakes?: number; 
  public get successfulHandshakes() {
    return this.getNumberAttribute('successful_handshakes');
  }
  public set successfulHandshakes(value: number) {
    this._successfulHandshakes = value;
  }
  public resetSuccessfulHandshakes() {
    this._successfulHandshakes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulHandshakesInput() {
    return this._successfulHandshakes;
  }
}
export interface SlbVirtualServerPortStatsServerSshStats {
  /**
  * server_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#server_ssh SlbVirtualServerPortStatsServerSsh#server_ssh}
  */
  readonly serverSsh?: SlbVirtualServerPortStatsServerSshStatsServerSsh;
}

export function slbVirtualServerPortStatsServerSshStatsToTerraform(struct?: SlbVirtualServerPortStatsServerSshStatsOutputReference | SlbVirtualServerPortStatsServerSshStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ssh: slbVirtualServerPortStatsServerSshStatsServerSshToTerraform(struct!.serverSsh),
  }
}


export function slbVirtualServerPortStatsServerSshStatsToHclTerraform(struct?: SlbVirtualServerPortStatsServerSshStatsOutputReference | SlbVirtualServerPortStatsServerSshStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ssh: {
      value: slbVirtualServerPortStatsServerSshStatsServerSshToHclTerraform(struct!.serverSsh),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortStatsServerSshStatsServerSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsServerSshStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsServerSshStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSsh = this._serverSsh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsServerSshStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverSsh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverSsh.internalValue = value.serverSsh;
    }
  }

  // server_ssh - computed: false, optional: true, required: false
  private _serverSsh = new SlbVirtualServerPortStatsServerSshStatsServerSshOutputReference(this, "server_ssh");
  public get serverSsh() {
    return this._serverSsh;
  }
  public putServerSsh(value: SlbVirtualServerPortStatsServerSshStatsServerSsh) {
    this._serverSsh.internalValue = value;
  }
  public resetServerSsh() {
    this._serverSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSshInput() {
    return this._serverSsh.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh thunder_slb_virtual_server_port_stats_server_ssh}
*/
export class SlbVirtualServerPortStatsServerSsh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_port_stats_server_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServerPortStatsServerSsh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServerPortStatsServerSsh to import
  * @param importFromId The id of the existing SlbVirtualServerPortStatsServerSsh that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServerPortStatsServerSsh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_port_stats_server_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_server_ssh thunder_slb_virtual_server_port_stats_server_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerPortStatsServerSshConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerPortStatsServerSshConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_port_stats_server_ssh',
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
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._virtualServerName = config.virtualServerName;
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

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // virtual_server_name - computed: false, optional: false, required: true
  private _virtualServerName?: string; 
  public get virtualServerName() {
    return this.getStringAttribute('virtual_server_name');
  }
  public set virtualServerName(value: string) {
    this._virtualServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerNameInput() {
    return this._virtualServerName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new SlbVirtualServerPortStatsServerSshStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: SlbVirtualServerPortStatsServerSshStats) {
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
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      virtual_server_name: cdktf.stringToTerraform(this._virtualServerName),
      stats: slbVirtualServerPortStatsServerSshStatsToTerraform(this._stats.internalValue),
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
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_name: {
        value: cdktf.stringToHclTerraform(this._virtualServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: slbVirtualServerPortStatsServerSshStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortStatsServerSshStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
