// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PppSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#___path___ PppSecret#___path___}
  */
  readonly path?: string;
  /**
  * For PPTP and L2TP it is the IP address a client must connect from. For PPPoE it is the MAC address (written in CAPITAL letters) a client must  connect from. For ISDN it is the caller's number (that may or may not be  provided by the operator) the client may dial-in from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#caller_id PppSecret#caller_id}
  */
  readonly callerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#comment PppSecret#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#disabled PppSecret#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#id PppSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv6 routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#ipv6_routes PppSecret#ipv6_routes}
  */
  readonly ipv6Routes?: string[];
  /**
  * Maximal amount of bytes for a session that client can upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#limit_bytes_in PppSecret#limit_bytes_in}
  */
  readonly limitBytesIn?: number;
  /**
  * Maximal amount of bytes for a session that client can download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#limit_bytes_out PppSecret#limit_bytes_out}
  */
  readonly limitBytesOut?: number;
  /**
  * IP address that will be set locally on ppp interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#local_address PppSecret#local_address}
  */
  readonly localAddress?: string;
  /**
  * Name used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#name PppSecret#name}
  */
  readonly name: string;
  /**
  * Password used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#password PppSecret#password}
  */
  readonly password?: string;
  /**
  * Which user profile to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#profile PppSecret#profile}
  */
  readonly profile?: string;
  /**
  * IP address that will be assigned to remote ppp interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#remote_address PppSecret#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * IPv6 prefix assigned to ppp client. Prefix is added to ND prefix list enabling stateless address auto-configuration on ppp interface.Available starting from v5.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#remote_ipv6_prefix PppSecret#remote_ipv6_prefix}
  */
  readonly remoteIpv6Prefix?: string;
  /**
  * Routes  that appear on the server when the client is connected. The route  format is: dst-address gateway metric (for example, 10.1.0.0/ 24  10.0.0.1 1). Other syntax is not acceptable since it can be represented  in incorrect way. Several routes may be specified separated with commas.  This parameter will be ignored for OpenVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#routes PppSecret#routes}
  */
  readonly routes?: string[];
  /**
  * Specifies the services that particular user will be able to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#service PppSecret#service}
  */
  readonly service?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret routeros_ppp_secret}
*/
export class PppSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ppp_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PppSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PppSecret to import
  * @param importFromId The id of the existing PppSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PppSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ppp_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ppp_secret routeros_ppp_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PppSecretConfig
  */
  public constructor(scope: Construct, id: string, config: PppSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ppp_secret',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._callerId = config.callerId;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._ipv6Routes = config.ipv6Routes;
    this._limitBytesIn = config.limitBytesIn;
    this._limitBytesOut = config.limitBytesOut;
    this._localAddress = config.localAddress;
    this._name = config.name;
    this._password = config.password;
    this._profile = config.profile;
    this._remoteAddress = config.remoteAddress;
    this._remoteIpv6Prefix = config.remoteIpv6Prefix;
    this._routes = config.routes;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // caller_id - computed: false, optional: true, required: false
  private _callerId?: string; 
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }
  public set callerId(value: string) {
    this._callerId = value;
  }
  public resetCallerId() {
    this._callerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIdInput() {
    return this._callerId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // ipv6_routes - computed: false, optional: true, required: false
  private _ipv6Routes?: string[]; 
  public get ipv6Routes() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_routes'));
  }
  public set ipv6Routes(value: string[]) {
    this._ipv6Routes = value;
  }
  public resetIpv6Routes() {
    this._ipv6Routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RoutesInput() {
    return this._ipv6Routes;
  }

  // last_caller_id - computed: true, optional: false, required: false
  public get lastCallerId() {
    return this.getStringAttribute('last_caller_id');
  }

  // last_disconnect_reason - computed: true, optional: false, required: false
  public get lastDisconnectReason() {
    return this.getStringAttribute('last_disconnect_reason');
  }

  // last_logged_out - computed: true, optional: false, required: false
  public get lastLoggedOut() {
    return this.getStringAttribute('last_logged_out');
  }

  // limit_bytes_in - computed: false, optional: true, required: false
  private _limitBytesIn?: number; 
  public get limitBytesIn() {
    return this.getNumberAttribute('limit_bytes_in');
  }
  public set limitBytesIn(value: number) {
    this._limitBytesIn = value;
  }
  public resetLimitBytesIn() {
    this._limitBytesIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBytesInInput() {
    return this._limitBytesIn;
  }

  // limit_bytes_out - computed: false, optional: true, required: false
  private _limitBytesOut?: number; 
  public get limitBytesOut() {
    return this.getNumberAttribute('limit_bytes_out');
  }
  public set limitBytesOut(value: number) {
    this._limitBytesOut = value;
  }
  public resetLimitBytesOut() {
    this._limitBytesOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBytesOutInput() {
    return this._limitBytesOut;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // remote_ipv6_prefix - computed: false, optional: true, required: false
  private _remoteIpv6Prefix?: string; 
  public get remoteIpv6Prefix() {
    return this.getStringAttribute('remote_ipv6_prefix');
  }
  public set remoteIpv6Prefix(value: string) {
    this._remoteIpv6Prefix = value;
  }
  public resetRemoteIpv6Prefix() {
    this._remoteIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6PrefixInput() {
    return this._remoteIpv6Prefix;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: string[]; 
  public get routes() {
    return cdktf.Fn.tolist(this.getListAttribute('routes'));
  }
  public set routes(value: string[]) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      caller_id: cdktf.stringToTerraform(this._callerId),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      ipv6_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Routes),
      limit_bytes_in: cdktf.numberToTerraform(this._limitBytesIn),
      limit_bytes_out: cdktf.numberToTerraform(this._limitBytesOut),
      local_address: cdktf.stringToTerraform(this._localAddress),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      profile: cdktf.stringToTerraform(this._profile),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      remote_ipv6_prefix: cdktf.stringToTerraform(this._remoteIpv6Prefix),
      routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routes),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caller_id: {
        value: cdktf.stringToHclTerraform(this._callerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Routes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      limit_bytes_in: {
        value: cdktf.numberToHclTerraform(this._limitBytesIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_bytes_out: {
        value: cdktf.numberToHclTerraform(this._limitBytesOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._remoteIpv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
