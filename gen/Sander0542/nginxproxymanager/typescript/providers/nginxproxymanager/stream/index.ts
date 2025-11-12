// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Id of the certificate used by the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#certificate_id Stream#certificate_id}
  */
  readonly certificateId?: number;
  /**
  * Whether the stream is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#enabled Stream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The forwarding host of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#forwarding_host Stream#forwarding_host}
  */
  readonly forwardingHost: string;
  /**
  * The forwarding port of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#forwarding_port Stream#forwarding_port}
  */
  readonly forwardingPort: number;
  /**
  * The incoming port of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#incoming_port Stream#incoming_port}
  */
  readonly incomingPort: number;
  /**
  * Whether TCP forwarding is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#tcp_forwarding Stream#tcp_forwarding}
  */
  readonly tcpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Whether UDP forwarding is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#udp_forwarding Stream#udp_forwarding}
  */
  readonly udpForwarding?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream nginxproxymanager_stream}
*/
export class Stream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stream to import
  * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/stream nginxproxymanager_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamConfig
  */
  public constructor(scope: Construct, id: string, config: StreamConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_stream',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2',
        providerVersionConstraint: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._enabled = config.enabled;
    this._forwardingHost = config.forwardingHost;
    this._forwardingPort = config.forwardingPort;
    this._incomingPort = config.incomingPort;
    this._tcpForwarding = config.tcpForwarding;
    this._udpForwarding = config.udpForwarding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: number; 
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // forwarding_host - computed: false, optional: false, required: true
  private _forwardingHost?: string; 
  public get forwardingHost() {
    return this.getStringAttribute('forwarding_host');
  }
  public set forwardingHost(value: string) {
    this._forwardingHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingHostInput() {
    return this._forwardingHost;
  }

  // forwarding_port - computed: false, optional: false, required: true
  private _forwardingPort?: number; 
  public get forwardingPort() {
    return this.getNumberAttribute('forwarding_port');
  }
  public set forwardingPort(value: number) {
    this._forwardingPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingPortInput() {
    return this._forwardingPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // incoming_port - computed: false, optional: false, required: true
  private _incomingPort?: number; 
  public get incomingPort() {
    return this.getNumberAttribute('incoming_port');
  }
  public set incomingPort(value: number) {
    this._incomingPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPortInput() {
    return this._incomingPort;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // tcp_forwarding - computed: true, optional: true, required: false
  private _tcpForwarding?: boolean | cdktf.IResolvable; 
  public get tcpForwarding() {
    return this.getBooleanAttribute('tcp_forwarding');
  }
  public set tcpForwarding(value: boolean | cdktf.IResolvable) {
    this._tcpForwarding = value;
  }
  public resetTcpForwarding() {
    this._tcpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpForwardingInput() {
    return this._tcpForwarding;
  }

  // udp_forwarding - computed: true, optional: true, required: false
  private _udpForwarding?: boolean | cdktf.IResolvable; 
  public get udpForwarding() {
    return this.getBooleanAttribute('udp_forwarding');
  }
  public set udpForwarding(value: boolean | cdktf.IResolvable) {
    this._udpForwarding = value;
  }
  public resetUdpForwarding() {
    this._udpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpForwardingInput() {
    return this._udpForwarding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      forwarding_host: cdktf.stringToTerraform(this._forwardingHost),
      forwarding_port: cdktf.numberToTerraform(this._forwardingPort),
      incoming_port: cdktf.numberToTerraform(this._incomingPort),
      tcp_forwarding: cdktf.booleanToTerraform(this._tcpForwarding),
      udp_forwarding: cdktf.booleanToTerraform(this._udpForwarding),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.numberToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forwarding_host: {
        value: cdktf.stringToHclTerraform(this._forwardingHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_port: {
        value: cdktf.numberToHclTerraform(this._forwardingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      incoming_port: {
        value: cdktf.numberToHclTerraform(this._incomingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_forwarding: {
        value: cdktf.booleanToHclTerraform(this._tcpForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      udp_forwarding: {
        value: cdktf.booleanToHclTerraform(this._udpForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
