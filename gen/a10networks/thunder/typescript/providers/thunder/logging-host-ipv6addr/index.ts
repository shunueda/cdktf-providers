// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingHostIpv6AddrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set syslog host ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#host_ipv6 LoggingHostIpv6Addr#host_ipv6}
  */
  readonly hostIpv6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#id LoggingHostIpv6Addr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable remote logging over TLS session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#over_tls LoggingHostIpv6Addr#over_tls}
  */
  readonly overTls?: number;
  /**
  * Set remote syslog port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#port LoggingHostIpv6Addr#port}
  */
  readonly port?: number;
  /**
  * Use TCP as transport protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#tcp LoggingHostIpv6Addr#tcp}
  */
  readonly tcp?: number;
  /**
  * Use management port for connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#use_mgmt_port LoggingHostIpv6Addr#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#uuid LoggingHostIpv6Addr#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr thunder_logging_host_ipv6addr}
*/
export class LoggingHostIpv6Addr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_host_ipv6addr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingHostIpv6Addr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingHostIpv6Addr to import
  * @param importFromId The id of the existing LoggingHostIpv6Addr that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingHostIpv6Addr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_host_ipv6addr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_host_ipv6addr thunder_logging_host_ipv6addr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingHostIpv6AddrConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingHostIpv6AddrConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_host_ipv6addr',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostIpv6 = config.hostIpv6;
    this._id = config.id;
    this._overTls = config.overTls;
    this._port = config.port;
    this._tcp = config.tcp;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_ipv6 - computed: false, optional: false, required: true
  private _hostIpv6?: string; 
  public get hostIpv6() {
    return this.getStringAttribute('host_ipv6');
  }
  public set hostIpv6(value: string) {
    this._hostIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv6Input() {
    return this._hostIpv6;
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

  // over_tls - computed: false, optional: true, required: false
  private _overTls?: number; 
  public get overTls() {
    return this.getNumberAttribute('over_tls');
  }
  public set overTls(value: number) {
    this._overTls = value;
  }
  public resetOverTls() {
    this._overTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overTlsInput() {
    return this._overTls;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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
      host_ipv6: cdktf.stringToTerraform(this._hostIpv6),
      id: cdktf.stringToTerraform(this._id),
      over_tls: cdktf.numberToTerraform(this._overTls),
      port: cdktf.numberToTerraform(this._port),
      tcp: cdktf.numberToTerraform(this._tcp),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_ipv6: {
        value: cdktf.stringToHclTerraform(this._hostIpv6),
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
      over_tls: {
        value: cdktf.numberToHclTerraform(this._overTls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp: {
        value: cdktf.numberToHclTerraform(this._tcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
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
