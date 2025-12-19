// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshdConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable sshd agent forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config#disable_agent_forwarding SshdConfigA#disable_agent_forwarding}
  */
  readonly disableAgentForwarding?: number;
  /**
  * Disable sshd tcp forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config#disable_tcp_forwarding SshdConfigA#disable_tcp_forwarding}
  */
  readonly disableTcpForwarding?: number;
  /**
  * Disable sshd x11 forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config#disable_x11_forwarding SshdConfigA#disable_x11_forwarding}
  */
  readonly disableX11Forwarding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config#id SshdConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ssh port number (Available port is 22, 1025-64999)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config#tcp_port SshdConfigA#tcp_port}
  */
  readonly tcpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config#uuid SshdConfigA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config thunder_sshd_config}
*/
export class SshdConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sshd_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshdConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshdConfigA to import
  * @param importFromId The id of the existing SshdConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshdConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sshd_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd_config thunder_sshd_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshdConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SshdConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sshd_config',
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
    this._disableAgentForwarding = config.disableAgentForwarding;
    this._disableTcpForwarding = config.disableTcpForwarding;
    this._disableX11Forwarding = config.disableX11Forwarding;
    this._id = config.id;
    this._tcpPort = config.tcpPort;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_agent_forwarding - computed: false, optional: true, required: false
  private _disableAgentForwarding?: number; 
  public get disableAgentForwarding() {
    return this.getNumberAttribute('disable_agent_forwarding');
  }
  public set disableAgentForwarding(value: number) {
    this._disableAgentForwarding = value;
  }
  public resetDisableAgentForwarding() {
    this._disableAgentForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAgentForwardingInput() {
    return this._disableAgentForwarding;
  }

  // disable_tcp_forwarding - computed: false, optional: true, required: false
  private _disableTcpForwarding?: number; 
  public get disableTcpForwarding() {
    return this.getNumberAttribute('disable_tcp_forwarding');
  }
  public set disableTcpForwarding(value: number) {
    this._disableTcpForwarding = value;
  }
  public resetDisableTcpForwarding() {
    this._disableTcpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTcpForwardingInput() {
    return this._disableTcpForwarding;
  }

  // disable_x11_forwarding - computed: false, optional: true, required: false
  private _disableX11Forwarding?: number; 
  public get disableX11Forwarding() {
    return this.getNumberAttribute('disable_x11_forwarding');
  }
  public set disableX11Forwarding(value: number) {
    this._disableX11Forwarding = value;
  }
  public resetDisableX11Forwarding() {
    this._disableX11Forwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableX11ForwardingInput() {
    return this._disableX11Forwarding;
  }

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

  // tcp_port - computed: false, optional: true, required: false
  private _tcpPort?: number; 
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
  public set tcpPort(value: number) {
    this._tcpPort = value;
  }
  public resetTcpPort() {
    this._tcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortInput() {
    return this._tcpPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_agent_forwarding: cdktf.numberToTerraform(this._disableAgentForwarding),
      disable_tcp_forwarding: cdktf.numberToTerraform(this._disableTcpForwarding),
      disable_x11_forwarding: cdktf.numberToTerraform(this._disableX11Forwarding),
      id: cdktf.stringToTerraform(this._id),
      tcp_port: cdktf.numberToTerraform(this._tcpPort),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_agent_forwarding: {
        value: cdktf.numberToHclTerraform(this._disableAgentForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_tcp_forwarding: {
        value: cdktf.numberToHclTerraform(this._disableTcpForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_x11_forwarding: {
        value: cdktf.numberToHclTerraform(this._disableX11Forwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_port: {
        value: cdktf.numberToHclTerraform(this._tcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
