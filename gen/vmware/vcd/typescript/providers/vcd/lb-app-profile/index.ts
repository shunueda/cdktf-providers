// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbAppProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The mode by which the cookie should be inserted. One of 'insert', 'prefix', or 'appsession'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#cookie_mode LbAppProfile#cookie_mode}
  */
  readonly cookieMode?: string;
  /**
  * Used to uniquely identify the session the first time a client accesses the site. The load balancer refers to this cookie when connecting subsequent requests in the session, so that they all go to the same virtual server. Only applies for persistence_mechanism 'cookie'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#cookie_name LbAppProfile#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Edge gateway name in which the LB Application Profile is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#edge_gateway LbAppProfile#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * Enable to define the certificate, CAs, or CRLs used to authenticate the load balancer from the server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#enable_pool_side_ssl LbAppProfile#enable_pool_side_ssl}
  */
  readonly enablePoolSideSsl?: boolean | cdktf.IResolvable;
  /**
  * Enable SSL authentication to be passed through to the virtual server. Otherwise SSL authentication takes place at the destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#enable_ssl_passthrough LbAppProfile#enable_ssl_passthrough}
  */
  readonly enableSslPassthrough?: boolean | cdktf.IResolvable;
  /**
  * Length of time in seconds that persistence stays in effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#expiration LbAppProfile#expiration}
  */
  readonly expiration?: number;
  /**
  * The URL to which traffic that arrives at the destination address should be redirected. Only applies for types 'http' and 'https'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#http_redirect_url LbAppProfile#http_redirect_url}
  */
  readonly httpRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#id LbAppProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables 'X-Forwarded-For' header for identifying the originating IP address of a client connecting to a Web server through the load balancer. Only applies for types HTTP and HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#insert_x_forwarded_http_header LbAppProfile#insert_x_forwarded_http_header}
  */
  readonly insertXForwardedHttpHeader?: boolean | cdktf.IResolvable;
  /**
  * Unique LB Application Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#name LbAppProfile#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#org LbAppProfile#org}
  */
  readonly org?: string;
  /**
  * Persistence mechanism for the profile. One of 'cookie', 'ssl-sessionid', 'sourceip'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#persistence_mechanism LbAppProfile#persistence_mechanism}
  */
  readonly persistenceMechanism?: string;
  /**
  * Protocol type used to send requests to the server. One of 'tcp', 'udp', 'http' org 'https'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#type LbAppProfile#type}
  */
  readonly type: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#vdc LbAppProfile#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile vcd_lb_app_profile}
*/
export class LbAppProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_lb_app_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbAppProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbAppProfile to import
  * @param importFromId The id of the existing LbAppProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbAppProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_lb_app_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_app_profile vcd_lb_app_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbAppProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LbAppProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_lb_app_profile',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookieMode = config.cookieMode;
    this._cookieName = config.cookieName;
    this._edgeGateway = config.edgeGateway;
    this._enablePoolSideSsl = config.enablePoolSideSsl;
    this._enableSslPassthrough = config.enableSslPassthrough;
    this._expiration = config.expiration;
    this._httpRedirectUrl = config.httpRedirectUrl;
    this._id = config.id;
    this._insertXForwardedHttpHeader = config.insertXForwardedHttpHeader;
    this._name = config.name;
    this._org = config.org;
    this._persistenceMechanism = config.persistenceMechanism;
    this._type = config.type;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_mode - computed: false, optional: true, required: false
  private _cookieMode?: string; 
  public get cookieMode() {
    return this.getStringAttribute('cookie_mode');
  }
  public set cookieMode(value: string) {
    this._cookieMode = value;
  }
  public resetCookieMode() {
    this._cookieMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieModeInput() {
    return this._cookieMode;
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // edge_gateway - computed: false, optional: false, required: true
  private _edgeGateway?: string; 
  public get edgeGateway() {
    return this.getStringAttribute('edge_gateway');
  }
  public set edgeGateway(value: string) {
    this._edgeGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway;
  }

  // enable_pool_side_ssl - computed: false, optional: true, required: false
  private _enablePoolSideSsl?: boolean | cdktf.IResolvable; 
  public get enablePoolSideSsl() {
    return this.getBooleanAttribute('enable_pool_side_ssl');
  }
  public set enablePoolSideSsl(value: boolean | cdktf.IResolvable) {
    this._enablePoolSideSsl = value;
  }
  public resetEnablePoolSideSsl() {
    this._enablePoolSideSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePoolSideSslInput() {
    return this._enablePoolSideSsl;
  }

  // enable_ssl_passthrough - computed: false, optional: true, required: false
  private _enableSslPassthrough?: boolean | cdktf.IResolvable; 
  public get enableSslPassthrough() {
    return this.getBooleanAttribute('enable_ssl_passthrough');
  }
  public set enableSslPassthrough(value: boolean | cdktf.IResolvable) {
    this._enableSslPassthrough = value;
  }
  public resetEnableSslPassthrough() {
    this._enableSslPassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslPassthroughInput() {
    return this._enableSslPassthrough;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // http_redirect_url - computed: false, optional: true, required: false
  private _httpRedirectUrl?: string; 
  public get httpRedirectUrl() {
    return this.getStringAttribute('http_redirect_url');
  }
  public set httpRedirectUrl(value: string) {
    this._httpRedirectUrl = value;
  }
  public resetHttpRedirectUrl() {
    this._httpRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectUrlInput() {
    return this._httpRedirectUrl;
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

  // insert_x_forwarded_http_header - computed: false, optional: true, required: false
  private _insertXForwardedHttpHeader?: boolean | cdktf.IResolvable; 
  public get insertXForwardedHttpHeader() {
    return this.getBooleanAttribute('insert_x_forwarded_http_header');
  }
  public set insertXForwardedHttpHeader(value: boolean | cdktf.IResolvable) {
    this._insertXForwardedHttpHeader = value;
  }
  public resetInsertXForwardedHttpHeader() {
    this._insertXForwardedHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertXForwardedHttpHeaderInput() {
    return this._insertXForwardedHttpHeader;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // persistence_mechanism - computed: false, optional: true, required: false
  private _persistenceMechanism?: string; 
  public get persistenceMechanism() {
    return this.getStringAttribute('persistence_mechanism');
  }
  public set persistenceMechanism(value: string) {
    this._persistenceMechanism = value;
  }
  public resetPersistenceMechanism() {
    this._persistenceMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceMechanismInput() {
    return this._persistenceMechanism;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_mode: cdktf.stringToTerraform(this._cookieMode),
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      enable_pool_side_ssl: cdktf.booleanToTerraform(this._enablePoolSideSsl),
      enable_ssl_passthrough: cdktf.booleanToTerraform(this._enableSslPassthrough),
      expiration: cdktf.numberToTerraform(this._expiration),
      http_redirect_url: cdktf.stringToTerraform(this._httpRedirectUrl),
      id: cdktf.stringToTerraform(this._id),
      insert_x_forwarded_http_header: cdktf.booleanToTerraform(this._insertXForwardedHttpHeader),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      persistence_mechanism: cdktf.stringToTerraform(this._persistenceMechanism),
      type: cdktf.stringToTerraform(this._type),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_mode: {
        value: cdktf.stringToHclTerraform(this._cookieMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name: {
        value: cdktf.stringToHclTerraform(this._cookieName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_pool_side_ssl: {
        value: cdktf.booleanToHclTerraform(this._enablePoolSideSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssl_passthrough: {
        value: cdktf.booleanToHclTerraform(this._enableSslPassthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration: {
        value: cdktf.numberToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_redirect_url: {
        value: cdktf.stringToHclTerraform(this._httpRedirectUrl),
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
      insert_x_forwarded_http_header: {
        value: cdktf.booleanToHclTerraform(this._insertXForwardedHttpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_mechanism: {
        value: cdktf.stringToHclTerraform(this._persistenceMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
