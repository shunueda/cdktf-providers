// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerPortStatsClientSshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#id SlbVirtualServerPortStatsClientSsh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#port_number SlbVirtualServerPortStatsClientSsh#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#protocol SlbVirtualServerPortStatsClientSsh#protocol}
  */
  readonly protocol: string;
  /**
  * Virtual_server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#virtual_server_name SlbVirtualServerPortStatsClientSsh#virtual_server_name}
  */
  readonly virtualServerName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#stats SlbVirtualServerPortStatsClientSsh#stats}
  */
  readonly stats?: SlbVirtualServerPortStatsClientSshStats;
}
export interface SlbVirtualServerPortStatsClientSshStatsClientSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#failed_handshakes SlbVirtualServerPortStatsClientSsh#failed_handshakes}
  */
  readonly failedHandshakes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#forwarding_errors SlbVirtualServerPortStatsClientSsh#forwarding_errors}
  */
  readonly forwardingErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#successful_handshakes SlbVirtualServerPortStatsClientSsh#successful_handshakes}
  */
  readonly successfulHandshakes?: number;
}

export function slbVirtualServerPortStatsClientSshStatsClientSshToTerraform(struct?: SlbVirtualServerPortStatsClientSshStatsClientSshOutputReference | SlbVirtualServerPortStatsClientSshStatsClientSsh): any {
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


export function slbVirtualServerPortStatsClientSshStatsClientSshToHclTerraform(struct?: SlbVirtualServerPortStatsClientSshStatsClientSshOutputReference | SlbVirtualServerPortStatsClientSshStatsClientSsh): any {
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

export class SlbVirtualServerPortStatsClientSshStatsClientSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsClientSshStatsClientSsh | undefined {
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

  public set internalValue(value: SlbVirtualServerPortStatsClientSshStatsClientSsh | undefined) {
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
export interface SlbVirtualServerPortStatsClientSshStats {
  /**
  * client_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#client_ssh SlbVirtualServerPortStatsClientSsh#client_ssh}
  */
  readonly clientSsh?: SlbVirtualServerPortStatsClientSshStatsClientSsh;
}

export function slbVirtualServerPortStatsClientSshStatsToTerraform(struct?: SlbVirtualServerPortStatsClientSshStatsOutputReference | SlbVirtualServerPortStatsClientSshStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ssh: slbVirtualServerPortStatsClientSshStatsClientSshToTerraform(struct!.clientSsh),
  }
}


export function slbVirtualServerPortStatsClientSshStatsToHclTerraform(struct?: SlbVirtualServerPortStatsClientSshStatsOutputReference | SlbVirtualServerPortStatsClientSshStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ssh: {
      value: slbVirtualServerPortStatsClientSshStatsClientSshToHclTerraform(struct!.clientSsh),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortStatsClientSshStatsClientSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsClientSshStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsClientSshStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSsh = this._clientSsh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsClientSshStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSsh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSsh.internalValue = value.clientSsh;
    }
  }

  // client_ssh - computed: false, optional: true, required: false
  private _clientSsh = new SlbVirtualServerPortStatsClientSshStatsClientSshOutputReference(this, "client_ssh");
  public get clientSsh() {
    return this._clientSsh;
  }
  public putClientSsh(value: SlbVirtualServerPortStatsClientSshStatsClientSsh) {
    this._clientSsh.internalValue = value;
  }
  public resetClientSsh() {
    this._clientSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSshInput() {
    return this._clientSsh.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh thunder_slb_virtual_server_port_stats_client_ssh}
*/
export class SlbVirtualServerPortStatsClientSsh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_port_stats_client_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServerPortStatsClientSsh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServerPortStatsClientSsh to import
  * @param importFromId The id of the existing SlbVirtualServerPortStatsClientSsh that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServerPortStatsClientSsh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_port_stats_client_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_client_ssh thunder_slb_virtual_server_port_stats_client_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerPortStatsClientSshConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerPortStatsClientSshConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_port_stats_client_ssh',
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
  private _stats = new SlbVirtualServerPortStatsClientSshStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: SlbVirtualServerPortStatsClientSshStats) {
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
      stats: slbVirtualServerPortStatsClientSshStatsToTerraform(this._stats.internalValue),
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
        value: slbVirtualServerPortStatsClientSshStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortStatsClientSshStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
