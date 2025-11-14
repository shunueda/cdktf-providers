// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWanoptProfileHttpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#adom ObjectWanoptProfileHttpA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#byte_caching ObjectWanoptProfileHttpA#byte_caching}
  */
  readonly byteCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#id ObjectWanoptProfileHttpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#log_traffic ObjectWanoptProfileHttpA#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#port ObjectWanoptProfileHttpA#port}
  */
  readonly port?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#prefer_chunking ObjectWanoptProfileHttpA#prefer_chunking}
  */
  readonly preferChunking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#profile ObjectWanoptProfileHttpA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#protocol_opt ObjectWanoptProfileHttpA#protocol_opt}
  */
  readonly protocolOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#scopetype ObjectWanoptProfileHttpA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#secure_tunnel ObjectWanoptProfileHttpA#secure_tunnel}
  */
  readonly secureTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#ssl ObjectWanoptProfileHttpA#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#ssl_port ObjectWanoptProfileHttpA#ssl_port}
  */
  readonly sslPort?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#status ObjectWanoptProfileHttpA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#tunnel_non_http ObjectWanoptProfileHttpA#tunnel_non_http}
  */
  readonly tunnelNonHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#tunnel_sharing ObjectWanoptProfileHttpA#tunnel_sharing}
  */
  readonly tunnelSharing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#unknown_http_version ObjectWanoptProfileHttpA#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http fortimanager_object_wanopt_profile_http}
*/
export class ObjectWanoptProfileHttpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wanopt_profile_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWanoptProfileHttpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWanoptProfileHttpA to import
  * @param importFromId The id of the existing ObjectWanoptProfileHttpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWanoptProfileHttpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wanopt_profile_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_http fortimanager_object_wanopt_profile_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWanoptProfileHttpAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWanoptProfileHttpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wanopt_profile_http',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._byteCaching = config.byteCaching;
    this._id = config.id;
    this._logTraffic = config.logTraffic;
    this._port = config.port;
    this._preferChunking = config.preferChunking;
    this._profile = config.profile;
    this._protocolOpt = config.protocolOpt;
    this._scopetype = config.scopetype;
    this._secureTunnel = config.secureTunnel;
    this._ssl = config.ssl;
    this._sslPort = config.sslPort;
    this._status = config.status;
    this._tunnelNonHttp = config.tunnelNonHttp;
    this._tunnelSharing = config.tunnelSharing;
    this._unknownHttpVersion = config.unknownHttpVersion;
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

  // byte_caching - computed: true, optional: true, required: false
  private _byteCaching?: string; 
  public get byteCaching() {
    return this.getStringAttribute('byte_caching');
  }
  public set byteCaching(value: string) {
    this._byteCaching = value;
  }
  public resetByteCaching() {
    this._byteCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingInput() {
    return this._byteCaching;
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

  // log_traffic - computed: true, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number[]; 
  public get port() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('port')));
  }
  public set port(value: number[]) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefer_chunking - computed: true, optional: true, required: false
  private _preferChunking?: string; 
  public get preferChunking() {
    return this.getStringAttribute('prefer_chunking');
  }
  public set preferChunking(value: string) {
    this._preferChunking = value;
  }
  public resetPreferChunking() {
    this._preferChunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferChunkingInput() {
    return this._preferChunking;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // protocol_opt - computed: true, optional: true, required: false
  private _protocolOpt?: string; 
  public get protocolOpt() {
    return this.getStringAttribute('protocol_opt');
  }
  public set protocolOpt(value: string) {
    this._protocolOpt = value;
  }
  public resetProtocolOpt() {
    this._protocolOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolOptInput() {
    return this._protocolOpt;
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

  // secure_tunnel - computed: true, optional: true, required: false
  private _secureTunnel?: string; 
  public get secureTunnel() {
    return this.getStringAttribute('secure_tunnel');
  }
  public set secureTunnel(value: string) {
    this._secureTunnel = value;
  }
  public resetSecureTunnel() {
    this._secureTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTunnelInput() {
    return this._secureTunnel;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_port - computed: true, optional: true, required: false
  private _sslPort?: number[]; 
  public get sslPort() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ssl_port')));
  }
  public set sslPort(value: number[]) {
    this._sslPort = value;
  }
  public resetSslPort() {
    this._sslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPortInput() {
    return this._sslPort;
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

  // tunnel_non_http - computed: false, optional: true, required: false
  private _tunnelNonHttp?: string; 
  public get tunnelNonHttp() {
    return this.getStringAttribute('tunnel_non_http');
  }
  public set tunnelNonHttp(value: string) {
    this._tunnelNonHttp = value;
  }
  public resetTunnelNonHttp() {
    this._tunnelNonHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelNonHttpInput() {
    return this._tunnelNonHttp;
  }

  // tunnel_sharing - computed: true, optional: true, required: false
  private _tunnelSharing?: string; 
  public get tunnelSharing() {
    return this.getStringAttribute('tunnel_sharing');
  }
  public set tunnelSharing(value: string) {
    this._tunnelSharing = value;
  }
  public resetTunnelSharing() {
    this._tunnelSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSharingInput() {
    return this._tunnelSharing;
  }

  // unknown_http_version - computed: false, optional: true, required: false
  private _unknownHttpVersion?: string; 
  public get unknownHttpVersion() {
    return this.getStringAttribute('unknown_http_version');
  }
  public set unknownHttpVersion(value: string) {
    this._unknownHttpVersion = value;
  }
  public resetUnknownHttpVersion() {
    this._unknownHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHttpVersionInput() {
    return this._unknownHttpVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      byte_caching: cdktf.stringToTerraform(this._byteCaching),
      id: cdktf.stringToTerraform(this._id),
      log_traffic: cdktf.stringToTerraform(this._logTraffic),
      port: cdktf.listMapper(cdktf.numberToTerraform, false)(this._port),
      prefer_chunking: cdktf.stringToTerraform(this._preferChunking),
      profile: cdktf.stringToTerraform(this._profile),
      protocol_opt: cdktf.stringToTerraform(this._protocolOpt),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secure_tunnel: cdktf.stringToTerraform(this._secureTunnel),
      ssl: cdktf.stringToTerraform(this._ssl),
      ssl_port: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sslPort),
      status: cdktf.stringToTerraform(this._status),
      tunnel_non_http: cdktf.stringToTerraform(this._tunnelNonHttp),
      tunnel_sharing: cdktf.stringToTerraform(this._tunnelSharing),
      unknown_http_version: cdktf.stringToTerraform(this._unknownHttpVersion),
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
      byte_caching: {
        value: cdktf.stringToHclTerraform(this._byteCaching),
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
      log_traffic: {
        value: cdktf.stringToHclTerraform(this._logTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._port),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      prefer_chunking: {
        value: cdktf.stringToHclTerraform(this._preferChunking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_opt: {
        value: cdktf.stringToHclTerraform(this._protocolOpt),
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
      secure_tunnel: {
        value: cdktf.stringToHclTerraform(this._secureTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_port: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sslPort),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_non_http: {
        value: cdktf.stringToHclTerraform(this._tunnelNonHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_sharing: {
        value: cdktf.stringToHclTerraform(this._tunnelSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_http_version: {
        value: cdktf.stringToHclTerraform(this._unknownHttpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
