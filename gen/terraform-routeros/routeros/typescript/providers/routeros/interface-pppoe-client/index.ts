// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePppoeClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#___path___ InterfacePppoeClient#___path___}
  */
  readonly path?: string;
  /**
  * Access Concentrator name, this may be left blank and the client will connect to any access concentrator on the broadcast domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#ac_name InterfacePppoeClient#ac_name}
  */
  readonly acName?: string;
  /**
  * Enable/Disable whether to add default route automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#add_default_route InterfacePppoeClient#add_default_route}
  */
  readonly addDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Allowed authentication methods, by default all methods are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#allow InterfacePppoeClient#allow}
  */
  readonly allow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#comment InterfacePppoeClient#comment}
  */
  readonly comment?: string;
  /**
  * sets distance value applied to auto created default route, if add-default-route is also selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#default_route_distance InterfacePppoeClient#default_route_distance}
  */
  readonly defaultRouteDistance?: number;
  /**
  * connects to AC only when outbound traffic is generated. If selected, then route with gateway address from 10.112.112.0/24 network will be added while connection is not established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#dial_on_demand InterfacePppoeClient#dial_on_demand}
  */
  readonly dialOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#disabled InterfacePppoeClient#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#host_uniq InterfacePppoeClient#host_uniq}
  */
  readonly hostUniq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#id InterfacePppoeClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface name on which client will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#interface InterfacePppoeClient#interface}
  */
  readonly interface: string;
  /**
  * Sets keepalive timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#keepalive_timeout InterfacePppoeClient#keepalive_timeout}
  */
  readonly keepaliveTimeout?: number;
  /**
  * Maximum Receive Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#max_mru InterfacePppoeClient#max_mru}
  */
  readonly maxMru?: string;
  /**
  * Maximum Transmission Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#max_mtu InterfacePppoeClient#max_mtu}
  */
  readonly maxMtu?: string;
  /**
  * Maximum packet size (512..65535 or disabled) that can be received on the link. If a packet is bigger than tunnel MTU, it will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#mrru InterfacePppoeClient#mrru}
  */
  readonly mrru?: string;
  /**
  * Name of the PPPoE interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#name InterfacePppoeClient#name}
  */
  readonly name: string;
  /**
  * Password used to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#password InterfacePppoeClient#password}
  */
  readonly password?: string;
  /**
  * Specifies which PPP profile configuration will be used when establishing the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#profile InterfacePppoeClient#profile}
  */
  readonly profile?: string;
  /**
  * Specifies the service name set on the access concentrator, can be left blank to connect to any PPPoE server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#service_name InterfacePppoeClient#service_name}
  */
  readonly serviceName?: string;
  /**
  * Enable/disable getting DNS settings from the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#use_peer_dns InterfacePppoeClient#use_peer_dns}
  */
  readonly usePeerDns?: boolean | cdktf.IResolvable;
  /**
  * Username used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#user InterfacePppoeClient#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client routeros_interface_pppoe_client}
*/
export class InterfacePppoeClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_pppoe_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePppoeClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePppoeClient to import
  * @param importFromId The id of the existing InterfacePppoeClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePppoeClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_pppoe_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_client routeros_interface_pppoe_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePppoeClientConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacePppoeClientConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_pppoe_client',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._acName = config.acName;
    this._addDefaultRoute = config.addDefaultRoute;
    this._allow = config.allow;
    this._comment = config.comment;
    this._defaultRouteDistance = config.defaultRouteDistance;
    this._dialOnDemand = config.dialOnDemand;
    this._disabled = config.disabled;
    this._hostUniq = config.hostUniq;
    this._id = config.id;
    this._interface = config.interface;
    this._keepaliveTimeout = config.keepaliveTimeout;
    this._maxMru = config.maxMru;
    this._maxMtu = config.maxMtu;
    this._mrru = config.mrru;
    this._name = config.name;
    this._password = config.password;
    this._profile = config.profile;
    this._serviceName = config.serviceName;
    this._usePeerDns = config.usePeerDns;
    this._user = config.user;
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

  // ac_name - computed: false, optional: true, required: false
  private _acName?: string; 
  public get acName() {
    return this.getStringAttribute('ac_name');
  }
  public set acName(value: string) {
    this._acName = value;
  }
  public resetAcName() {
    this._acName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acNameInput() {
    return this._acName;
  }

  // add_default_route - computed: false, optional: true, required: false
  private _addDefaultRoute?: boolean | cdktf.IResolvable; 
  public get addDefaultRoute() {
    return this.getBooleanAttribute('add_default_route');
  }
  public set addDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._addDefaultRoute = value;
  }
  public resetAddDefaultRoute() {
    this._addDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDefaultRouteInput() {
    return this._addDefaultRoute;
  }

  // allow - computed: true, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return cdktf.Fn.tolist(this.getListAttribute('allow'));
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
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

  // default_route_distance - computed: false, optional: true, required: false
  private _defaultRouteDistance?: number; 
  public get defaultRouteDistance() {
    return this.getNumberAttribute('default_route_distance');
  }
  public set defaultRouteDistance(value: number) {
    this._defaultRouteDistance = value;
  }
  public resetDefaultRouteDistance() {
    this._defaultRouteDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteDistanceInput() {
    return this._defaultRouteDistance;
  }

  // dial_on_demand - computed: false, optional: true, required: false
  private _dialOnDemand?: boolean | cdktf.IResolvable; 
  public get dialOnDemand() {
    return this.getBooleanAttribute('dial_on_demand');
  }
  public set dialOnDemand(value: boolean | cdktf.IResolvable) {
    this._dialOnDemand = value;
  }
  public resetDialOnDemand() {
    this._dialOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialOnDemandInput() {
    return this._dialOnDemand;
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

  // host_uniq - computed: false, optional: true, required: false
  private _hostUniq?: string; 
  public get hostUniq() {
    return this.getStringAttribute('host_uniq');
  }
  public set hostUniq(value: string) {
    this._hostUniq = value;
  }
  public resetHostUniq() {
    this._hostUniq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUniqInput() {
    return this._hostUniq;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: number; 
  public get keepaliveTimeout() {
    return this.getNumberAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: number) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // max_mru - computed: false, optional: true, required: false
  private _maxMru?: string; 
  public get maxMru() {
    return this.getStringAttribute('max_mru');
  }
  public set maxMru(value: string) {
    this._maxMru = value;
  }
  public resetMaxMru() {
    this._maxMru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMruInput() {
    return this._maxMru;
  }

  // max_mtu - computed: false, optional: true, required: false
  private _maxMtu?: string; 
  public get maxMtu() {
    return this.getStringAttribute('max_mtu');
  }
  public set maxMtu(value: string) {
    this._maxMtu = value;
  }
  public resetMaxMtu() {
    this._maxMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMtuInput() {
    return this._maxMtu;
  }

  // mrru - computed: false, optional: true, required: false
  private _mrru?: string; 
  public get mrru() {
    return this.getStringAttribute('mrru');
  }
  public set mrru(value: string) {
    this._mrru = value;
  }
  public resetMrru() {
    this._mrru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrruInput() {
    return this._mrru;
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

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // use_peer_dns - computed: false, optional: true, required: false
  private _usePeerDns?: boolean | cdktf.IResolvable; 
  public get usePeerDns() {
    return this.getBooleanAttribute('use_peer_dns');
  }
  public set usePeerDns(value: boolean | cdktf.IResolvable) {
    this._usePeerDns = value;
  }
  public resetUsePeerDns() {
    this._usePeerDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePeerDnsInput() {
    return this._usePeerDns;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ac_name: cdktf.stringToTerraform(this._acName),
      add_default_route: cdktf.booleanToTerraform(this._addDefaultRoute),
      allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allow),
      comment: cdktf.stringToTerraform(this._comment),
      default_route_distance: cdktf.numberToTerraform(this._defaultRouteDistance),
      dial_on_demand: cdktf.booleanToTerraform(this._dialOnDemand),
      disabled: cdktf.booleanToTerraform(this._disabled),
      host_uniq: cdktf.stringToTerraform(this._hostUniq),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      keepalive_timeout: cdktf.numberToTerraform(this._keepaliveTimeout),
      max_mru: cdktf.stringToTerraform(this._maxMru),
      max_mtu: cdktf.stringToTerraform(this._maxMtu),
      mrru: cdktf.stringToTerraform(this._mrru),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      profile: cdktf.stringToTerraform(this._profile),
      service_name: cdktf.stringToTerraform(this._serviceName),
      use_peer_dns: cdktf.booleanToTerraform(this._usePeerDns),
      user: cdktf.stringToTerraform(this._user),
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
      ac_name: {
        value: cdktf.stringToHclTerraform(this._acName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_default_route: {
        value: cdktf.booleanToHclTerraform(this._addDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route_distance: {
        value: cdktf.numberToHclTerraform(this._defaultRouteDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dial_on_demand: {
        value: cdktf.booleanToHclTerraform(this._dialOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_uniq: {
        value: cdktf.stringToHclTerraform(this._hostUniq),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_timeout: {
        value: cdktf.numberToHclTerraform(this._keepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_mru: {
        value: cdktf.stringToHclTerraform(this._maxMru),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_mtu: {
        value: cdktf.stringToHclTerraform(this._maxMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mrru: {
        value: cdktf.stringToHclTerraform(this._mrru),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_peer_dns: {
        value: cdktf.booleanToHclTerraform(this._usePeerDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
