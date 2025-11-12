// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wirelesscontrollerhotspot20H2QpconncapabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#esp_port Wirelesscontrollerhotspot20H2Qpconncapability#esp_port}
  */
  readonly espPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#ftp_port Wirelesscontrollerhotspot20H2Qpconncapability#ftp_port}
  */
  readonly ftpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#http_port Wirelesscontrollerhotspot20H2Qpconncapability#http_port}
  */
  readonly httpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#icmp_port Wirelesscontrollerhotspot20H2Qpconncapability#icmp_port}
  */
  readonly icmpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#id Wirelesscontrollerhotspot20H2Qpconncapability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#ikev2_port Wirelesscontrollerhotspot20H2Qpconncapability#ikev2_port}
  */
  readonly ikev2Port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#ikev2_xx_port Wirelesscontrollerhotspot20H2Qpconncapability#ikev2_xx_port}
  */
  readonly ikev2XxPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#name Wirelesscontrollerhotspot20H2Qpconncapability#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#pptp_vpn_port Wirelesscontrollerhotspot20H2Qpconncapability#pptp_vpn_port}
  */
  readonly pptpVpnPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#ssh_port Wirelesscontrollerhotspot20H2Qpconncapability#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#tls_port Wirelesscontrollerhotspot20H2Qpconncapability#tls_port}
  */
  readonly tlsPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#vdomparam Wirelesscontrollerhotspot20H2Qpconncapability#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#voip_tcp_port Wirelesscontrollerhotspot20H2Qpconncapability#voip_tcp_port}
  */
  readonly voipTcpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#voip_udp_port Wirelesscontrollerhotspot20H2Qpconncapability#voip_udp_port}
  */
  readonly voipUdpPort?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability fortios_wirelesscontrollerhotspot20_h2qpconncapability}
*/
export class Wirelesscontrollerhotspot20H2Qpconncapability extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontrollerhotspot20_h2qpconncapability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wirelesscontrollerhotspot20H2Qpconncapability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wirelesscontrollerhotspot20H2Qpconncapability to import
  * @param importFromId The id of the existing Wirelesscontrollerhotspot20H2Qpconncapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wirelesscontrollerhotspot20H2Qpconncapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontrollerhotspot20_h2qpconncapability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpconncapability fortios_wirelesscontrollerhotspot20_h2qpconncapability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wirelesscontrollerhotspot20H2QpconncapabilityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Wirelesscontrollerhotspot20H2QpconncapabilityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontrollerhotspot20_h2qpconncapability',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._espPort = config.espPort;
    this._ftpPort = config.ftpPort;
    this._httpPort = config.httpPort;
    this._icmpPort = config.icmpPort;
    this._id = config.id;
    this._ikev2Port = config.ikev2Port;
    this._ikev2XxPort = config.ikev2XxPort;
    this._name = config.name;
    this._pptpVpnPort = config.pptpVpnPort;
    this._sshPort = config.sshPort;
    this._tlsPort = config.tlsPort;
    this._vdomparam = config.vdomparam;
    this._voipTcpPort = config.voipTcpPort;
    this._voipUdpPort = config.voipUdpPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // esp_port - computed: true, optional: true, required: false
  private _espPort?: string; 
  public get espPort() {
    return this.getStringAttribute('esp_port');
  }
  public set espPort(value: string) {
    this._espPort = value;
  }
  public resetEspPort() {
    this._espPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espPortInput() {
    return this._espPort;
  }

  // ftp_port - computed: true, optional: true, required: false
  private _ftpPort?: string; 
  public get ftpPort() {
    return this.getStringAttribute('ftp_port');
  }
  public set ftpPort(value: string) {
    this._ftpPort = value;
  }
  public resetFtpPort() {
    this._ftpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPortInput() {
    return this._ftpPort;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: string; 
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }
  public set httpPort(value: string) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // icmp_port - computed: true, optional: true, required: false
  private _icmpPort?: string; 
  public get icmpPort() {
    return this.getStringAttribute('icmp_port');
  }
  public set icmpPort(value: string) {
    this._icmpPort = value;
  }
  public resetIcmpPort() {
    this._icmpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPortInput() {
    return this._icmpPort;
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

  // ikev2_port - computed: true, optional: true, required: false
  private _ikev2Port?: string; 
  public get ikev2Port() {
    return this.getStringAttribute('ikev2_port');
  }
  public set ikev2Port(value: string) {
    this._ikev2Port = value;
  }
  public resetIkev2Port() {
    this._ikev2Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2PortInput() {
    return this._ikev2Port;
  }

  // ikev2_xx_port - computed: true, optional: true, required: false
  private _ikev2XxPort?: string; 
  public get ikev2XxPort() {
    return this.getStringAttribute('ikev2_xx_port');
  }
  public set ikev2XxPort(value: string) {
    this._ikev2XxPort = value;
  }
  public resetIkev2XxPort() {
    this._ikev2XxPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2XxPortInput() {
    return this._ikev2XxPort;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pptp_vpn_port - computed: true, optional: true, required: false
  private _pptpVpnPort?: string; 
  public get pptpVpnPort() {
    return this.getStringAttribute('pptp_vpn_port');
  }
  public set pptpVpnPort(value: string) {
    this._pptpVpnPort = value;
  }
  public resetPptpVpnPort() {
    this._pptpVpnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpVpnPortInput() {
    return this._pptpVpnPort;
  }

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // tls_port - computed: true, optional: true, required: false
  private _tlsPort?: string; 
  public get tlsPort() {
    return this.getStringAttribute('tls_port');
  }
  public set tlsPort(value: string) {
    this._tlsPort = value;
  }
  public resetTlsPort() {
    this._tlsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPortInput() {
    return this._tlsPort;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // voip_tcp_port - computed: true, optional: true, required: false
  private _voipTcpPort?: string; 
  public get voipTcpPort() {
    return this.getStringAttribute('voip_tcp_port');
  }
  public set voipTcpPort(value: string) {
    this._voipTcpPort = value;
  }
  public resetVoipTcpPort() {
    this._voipTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipTcpPortInput() {
    return this._voipTcpPort;
  }

  // voip_udp_port - computed: true, optional: true, required: false
  private _voipUdpPort?: string; 
  public get voipUdpPort() {
    return this.getStringAttribute('voip_udp_port');
  }
  public set voipUdpPort(value: string) {
    this._voipUdpPort = value;
  }
  public resetVoipUdpPort() {
    this._voipUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipUdpPortInput() {
    return this._voipUdpPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      esp_port: cdktf.stringToTerraform(this._espPort),
      ftp_port: cdktf.stringToTerraform(this._ftpPort),
      http_port: cdktf.stringToTerraform(this._httpPort),
      icmp_port: cdktf.stringToTerraform(this._icmpPort),
      id: cdktf.stringToTerraform(this._id),
      ikev2_port: cdktf.stringToTerraform(this._ikev2Port),
      ikev2_xx_port: cdktf.stringToTerraform(this._ikev2XxPort),
      name: cdktf.stringToTerraform(this._name),
      pptp_vpn_port: cdktf.stringToTerraform(this._pptpVpnPort),
      ssh_port: cdktf.stringToTerraform(this._sshPort),
      tls_port: cdktf.stringToTerraform(this._tlsPort),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      voip_tcp_port: cdktf.stringToTerraform(this._voipTcpPort),
      voip_udp_port: cdktf.stringToTerraform(this._voipUdpPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      esp_port: {
        value: cdktf.stringToHclTerraform(this._espPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_port: {
        value: cdktf.stringToHclTerraform(this._ftpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_port: {
        value: cdktf.stringToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_port: {
        value: cdktf.stringToHclTerraform(this._icmpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_port: {
        value: cdktf.stringToHclTerraform(this._ikev2Port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_xx_port: {
        value: cdktf.stringToHclTerraform(this._ikev2XxPort),
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
      pptp_vpn_port: {
        value: cdktf.stringToHclTerraform(this._pptpVpnPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_port: {
        value: cdktf.stringToHclTerraform(this._sshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_port: {
        value: cdktf.stringToHclTerraform(this._tlsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voip_tcp_port: {
        value: cdktf.stringToHclTerraform(this._voipTcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voip_udp_port: {
        value: cdktf.stringToHclTerraform(this._voipUdpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
