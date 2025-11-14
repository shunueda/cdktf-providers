// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWanoptProfileTcpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#adom ObjectWanoptProfileTcpA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#byte_caching ObjectWanoptProfileTcpA#byte_caching}
  */
  readonly byteCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#byte_caching_opt ObjectWanoptProfileTcpA#byte_caching_opt}
  */
  readonly byteCachingOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#id ObjectWanoptProfileTcpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#log_traffic ObjectWanoptProfileTcpA#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#port ObjectWanoptProfileTcpA#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#profile ObjectWanoptProfileTcpA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#scopetype ObjectWanoptProfileTcpA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#secure_tunnel ObjectWanoptProfileTcpA#secure_tunnel}
  */
  readonly secureTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#ssl ObjectWanoptProfileTcpA#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#ssl_port ObjectWanoptProfileTcpA#ssl_port}
  */
  readonly sslPort?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#status ObjectWanoptProfileTcpA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#tunnel_sharing ObjectWanoptProfileTcpA#tunnel_sharing}
  */
  readonly tunnelSharing?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp fortimanager_object_wanopt_profile_tcp}
*/
export class ObjectWanoptProfileTcpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wanopt_profile_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWanoptProfileTcpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWanoptProfileTcpA to import
  * @param importFromId The id of the existing ObjectWanoptProfileTcpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWanoptProfileTcpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wanopt_profile_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wanopt_profile_tcp fortimanager_object_wanopt_profile_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWanoptProfileTcpAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWanoptProfileTcpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wanopt_profile_tcp',
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
    this._byteCachingOpt = config.byteCachingOpt;
    this._id = config.id;
    this._logTraffic = config.logTraffic;
    this._port = config.port;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._secureTunnel = config.secureTunnel;
    this._ssl = config.ssl;
    this._sslPort = config.sslPort;
    this._status = config.status;
    this._tunnelSharing = config.tunnelSharing;
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

  // byte_caching_opt - computed: true, optional: true, required: false
  private _byteCachingOpt?: string; 
  public get byteCachingOpt() {
    return this.getStringAttribute('byte_caching_opt');
  }
  public set byteCachingOpt(value: string) {
    this._byteCachingOpt = value;
  }
  public resetByteCachingOpt() {
    this._byteCachingOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingOptInput() {
    return this._byteCachingOpt;
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
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      byte_caching: cdktf.stringToTerraform(this._byteCaching),
      byte_caching_opt: cdktf.stringToTerraform(this._byteCachingOpt),
      id: cdktf.stringToTerraform(this._id),
      log_traffic: cdktf.stringToTerraform(this._logTraffic),
      port: cdktf.stringToTerraform(this._port),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secure_tunnel: cdktf.stringToTerraform(this._secureTunnel),
      ssl: cdktf.stringToTerraform(this._ssl),
      ssl_port: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sslPort),
      status: cdktf.stringToTerraform(this._status),
      tunnel_sharing: cdktf.stringToTerraform(this._tunnelSharing),
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
      byte_caching_opt: {
        value: cdktf.stringToHclTerraform(this._byteCachingOpt),
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
        value: cdktf.stringToHclTerraform(this._port),
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
      tunnel_sharing: {
        value: cdktf.stringToHclTerraform(this._tunnelSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
