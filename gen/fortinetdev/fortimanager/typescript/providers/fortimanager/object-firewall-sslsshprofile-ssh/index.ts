// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallSslsshprofileSshAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#adom ObjectFirewallSslsshprofileSshA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#id ObjectFirewallSslsshprofileSshA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#inspect_all ObjectFirewallSslsshprofileSshA#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#ports ObjectFirewallSslsshprofileSshA#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#proxy_after_tcp_handshake ObjectFirewallSslsshprofileSshA#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#scopetype ObjectFirewallSslsshprofileSshA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#ssh_algorithm ObjectFirewallSslsshprofileSshA#ssh_algorithm}
  */
  readonly sshAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#ssh_policy_check ObjectFirewallSslsshprofileSshA#ssh_policy_check}
  */
  readonly sshPolicyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#ssh_tun_policy_check ObjectFirewallSslsshprofileSshA#ssh_tun_policy_check}
  */
  readonly sshTunPolicyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#ssl_ssh_profile ObjectFirewallSslsshprofileSshA#ssl_ssh_profile}
  */
  readonly sslSshProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#status ObjectFirewallSslsshprofileSshA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#unsupported_version ObjectFirewallSslsshprofileSshA#unsupported_version}
  */
  readonly unsupportedVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh fortimanager_object_firewall_sslsshprofile_ssh}
*/
export class ObjectFirewallSslsshprofileSshA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_sslsshprofile_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallSslsshprofileSshA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallSslsshprofileSshA to import
  * @param importFromId The id of the existing ObjectFirewallSslsshprofileSshA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallSslsshprofileSshA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_sslsshprofile_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_ssh fortimanager_object_firewall_sslsshprofile_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallSslsshprofileSshAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallSslsshprofileSshAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_sslsshprofile_ssh',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._inspectAll = config.inspectAll;
    this._ports = config.ports;
    this._proxyAfterTcpHandshake = config.proxyAfterTcpHandshake;
    this._scopetype = config.scopetype;
    this._sshAlgorithm = config.sshAlgorithm;
    this._sshPolicyCheck = config.sshPolicyCheck;
    this._sshTunPolicyCheck = config.sshTunPolicyCheck;
    this._sslSshProfile = config.sslSshProfile;
    this._status = config.status;
    this._unsupportedVersion = config.unsupportedVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // ssh_algorithm - computed: true, optional: true, required: false
  private _sshAlgorithm?: string; 
  public get sshAlgorithm() {
    return this.getStringAttribute('ssh_algorithm');
  }
  public set sshAlgorithm(value: string) {
    this._sshAlgorithm = value;
  }
  public resetSshAlgorithm() {
    this._sshAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAlgorithmInput() {
    return this._sshAlgorithm;
  }

  // ssh_policy_check - computed: false, optional: true, required: false
  private _sshPolicyCheck?: string; 
  public get sshPolicyCheck() {
    return this.getStringAttribute('ssh_policy_check');
  }
  public set sshPolicyCheck(value: string) {
    this._sshPolicyCheck = value;
  }
  public resetSshPolicyCheck() {
    this._sshPolicyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPolicyCheckInput() {
    return this._sshPolicyCheck;
  }

  // ssh_tun_policy_check - computed: true, optional: true, required: false
  private _sshTunPolicyCheck?: string; 
  public get sshTunPolicyCheck() {
    return this.getStringAttribute('ssh_tun_policy_check');
  }
  public set sshTunPolicyCheck(value: string) {
    this._sshTunPolicyCheck = value;
  }
  public resetSshTunPolicyCheck() {
    this._sshTunPolicyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunPolicyCheckInput() {
    return this._sshTunPolicyCheck;
  }

  // ssl_ssh_profile - computed: false, optional: false, required: true
  private _sslSshProfile?: string; 
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }
  public set sslSshProfile(value: string) {
    this._sslSshProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile;
  }

  // status - computed: true, optional: true, required: false
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

  // unsupported_version - computed: true, optional: true, required: false
  private _unsupportedVersion?: string; 
  public get unsupportedVersion() {
    return this.getStringAttribute('unsupported_version');
  }
  public set unsupportedVersion(value: string) {
    this._unsupportedVersion = value;
  }
  public resetUnsupportedVersion() {
    this._unsupportedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedVersionInput() {
    return this._unsupportedVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      inspect_all: cdktf.stringToTerraform(this._inspectAll),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      proxy_after_tcp_handshake: cdktf.stringToTerraform(this._proxyAfterTcpHandshake),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssh_algorithm: cdktf.stringToTerraform(this._sshAlgorithm),
      ssh_policy_check: cdktf.stringToTerraform(this._sshPolicyCheck),
      ssh_tun_policy_check: cdktf.stringToTerraform(this._sshTunPolicyCheck),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      status: cdktf.stringToTerraform(this._status),
      unsupported_version: cdktf.stringToTerraform(this._unsupportedVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      inspect_all: {
        value: cdktf.stringToHclTerraform(this._inspectAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      proxy_after_tcp_handshake: {
        value: cdktf.stringToHclTerraform(this._proxyAfterTcpHandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_algorithm: {
        value: cdktf.stringToHclTerraform(this._sshAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_policy_check: {
        value: cdktf.stringToHclTerraform(this._sshPolicyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_tun_policy_check: {
        value: cdktf.stringToHclTerraform(this._sshTunPolicyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ssh_profile: {
        value: cdktf.stringToHclTerraform(this._sslSshProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_version: {
        value: cdktf.stringToHclTerraform(this._unsupportedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
