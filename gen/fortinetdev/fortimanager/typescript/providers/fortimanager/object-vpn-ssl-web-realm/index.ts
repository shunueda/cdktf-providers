// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnSslWebRealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#adom ObjectVpnSslWebRealm#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#id ObjectVpnSslWebRealm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#login_page ObjectVpnSslWebRealm#login_page}
  */
  readonly loginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#max_concurrent_user ObjectVpnSslWebRealm#max_concurrent_user}
  */
  readonly maxConcurrentUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#nas_ip ObjectVpnSslWebRealm#nas_ip}
  */
  readonly nasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#radius_port ObjectVpnSslWebRealm#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#radius_server ObjectVpnSslWebRealm#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#scopetype ObjectVpnSslWebRealm#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#url_path ObjectVpnSslWebRealm#url_path}
  */
  readonly urlPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#virtual_host ObjectVpnSslWebRealm#virtual_host}
  */
  readonly virtualHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#virtual_host_only ObjectVpnSslWebRealm#virtual_host_only}
  */
  readonly virtualHostOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#virtual_host_server_cert ObjectVpnSslWebRealm#virtual_host_server_cert}
  */
  readonly virtualHostServerCert?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm fortimanager_object_vpn_ssl_web_realm}
*/
export class ObjectVpnSslWebRealm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ssl_web_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnSslWebRealm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnSslWebRealm to import
  * @param importFromId The id of the existing ObjectVpnSslWebRealm that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnSslWebRealm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ssl_web_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_realm fortimanager_object_vpn_ssl_web_realm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnSslWebRealmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnSslWebRealmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ssl_web_realm',
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
    this._loginPage = config.loginPage;
    this._maxConcurrentUser = config.maxConcurrentUser;
    this._nasIp = config.nasIp;
    this._radiusPort = config.radiusPort;
    this._radiusServer = config.radiusServer;
    this._scopetype = config.scopetype;
    this._urlPath = config.urlPath;
    this._virtualHost = config.virtualHost;
    this._virtualHostOnly = config.virtualHostOnly;
    this._virtualHostServerCert = config.virtualHostServerCert;
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

  // login_page - computed: false, optional: true, required: false
  private _loginPage?: string; 
  public get loginPage() {
    return this.getStringAttribute('login_page');
  }
  public set loginPage(value: string) {
    this._loginPage = value;
  }
  public resetLoginPage() {
    this._loginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPageInput() {
    return this._loginPage;
  }

  // max_concurrent_user - computed: false, optional: true, required: false
  private _maxConcurrentUser?: number; 
  public get maxConcurrentUser() {
    return this.getNumberAttribute('max_concurrent_user');
  }
  public set maxConcurrentUser(value: number) {
    this._maxConcurrentUser = value;
  }
  public resetMaxConcurrentUser() {
    this._maxConcurrentUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentUserInput() {
    return this._maxConcurrentUser;
  }

  // nas_ip - computed: true, optional: true, required: false
  private _nasIp?: string; 
  public get nasIp() {
    return this.getStringAttribute('nas_ip');
  }
  public set nasIp(value: string) {
    this._nasIp = value;
  }
  public resetNasIp() {
    this._nasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIpInput() {
    return this._nasIp;
  }

  // radius_port - computed: false, optional: true, required: false
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  public resetRadiusPort() {
    this._radiusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: string; 
  public get radiusServer() {
    return this.getStringAttribute('radius_server');
  }
  public set radiusServer(value: string) {
    this._radiusServer = value;
  }
  public resetRadiusServer() {
    this._radiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer;
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

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }

  // virtual_host - computed: false, optional: true, required: false
  private _virtualHost?: string; 
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
  public set virtualHost(value: string) {
    this._virtualHost = value;
  }
  public resetVirtualHost() {
    this._virtualHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost;
  }

  // virtual_host_only - computed: true, optional: true, required: false
  private _virtualHostOnly?: string; 
  public get virtualHostOnly() {
    return this.getStringAttribute('virtual_host_only');
  }
  public set virtualHostOnly(value: string) {
    this._virtualHostOnly = value;
  }
  public resetVirtualHostOnly() {
    this._virtualHostOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostOnlyInput() {
    return this._virtualHostOnly;
  }

  // virtual_host_server_cert - computed: false, optional: true, required: false
  private _virtualHostServerCert?: string; 
  public get virtualHostServerCert() {
    return this.getStringAttribute('virtual_host_server_cert');
  }
  public set virtualHostServerCert(value: string) {
    this._virtualHostServerCert = value;
  }
  public resetVirtualHostServerCert() {
    this._virtualHostServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostServerCertInput() {
    return this._virtualHostServerCert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      login_page: cdktf.stringToTerraform(this._loginPage),
      max_concurrent_user: cdktf.numberToTerraform(this._maxConcurrentUser),
      nas_ip: cdktf.stringToTerraform(this._nasIp),
      radius_port: cdktf.numberToTerraform(this._radiusPort),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      url_path: cdktf.stringToTerraform(this._urlPath),
      virtual_host: cdktf.stringToTerraform(this._virtualHost),
      virtual_host_only: cdktf.stringToTerraform(this._virtualHostOnly),
      virtual_host_server_cert: cdktf.stringToTerraform(this._virtualHostServerCert),
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
      login_page: {
        value: cdktf.stringToHclTerraform(this._loginPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_user: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nas_ip: {
        value: cdktf.stringToHclTerraform(this._nasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_port: {
        value: cdktf.numberToHclTerraform(this._radiusPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_server: {
        value: cdktf.stringToHclTerraform(this._radiusServer),
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
      url_path: {
        value: cdktf.stringToHclTerraform(this._urlPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_host: {
        value: cdktf.stringToHclTerraform(this._virtualHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_host_only: {
        value: cdktf.stringToHclTerraform(this._virtualHostOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_host_server_cert: {
        value: cdktf.stringToHclTerraform(this._virtualHostServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
