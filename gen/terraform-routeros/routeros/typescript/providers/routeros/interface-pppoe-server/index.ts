// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePppoeServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#___path___ InterfacePppoeServer#___path___}
  */
  readonly path?: string;
  /**
  * Authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#authentication InterfacePppoeServer#authentication}
  */
  readonly authentication?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#comment InterfacePppoeServer#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#default_profile InterfacePppoeServer#default_profile}
  */
  readonly defaultProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#disabled InterfacePppoeServer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#id InterfacePppoeServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface that the clients are connected to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#interface InterfacePppoeServer#interface}
  */
  readonly interface?: string;
  /**
  * Defines the time period (in seconds) after which the router is starting to send keepalive packets every second. If there is no traffic and no keepalive responses arrive for that period of time (i.e. 2 * keepalive-timeout), the non responding client is proclaimed disconnected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#keepalive_timeout InterfacePppoeServer#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * Maximum Receive Unit. The optimal value is the MTU of the interface the tunnel is working over reduced by 20 (so, for 1500-byte Ethernet link, set the MTU to 1480 to avoid fragmentation of packets).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#max_mru InterfacePppoeServer#max_mru}
  */
  readonly maxMru?: number;
  /**
  * Maximum Transmission Unit. The optimal value is the MTU of the interface the tunnel is working over reduced by 20 (so, for 1500-byte Ethernet link, set the MTU to 1480 to avoid fragmentation of packets).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#max_mtu InterfacePppoeServer#max_mtu}
  */
  readonly maxMtu?: number;
  /**
  * Maximum number of clients that the AC can serve. '0' = no limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#max_sessions InterfacePppoeServer#max_sessions}
  */
  readonly maxSessions?: number;
  /**
  * Maximum packet size that can be received on the link. If a packet is bigger than tunnel MTU, it will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#mrru InterfacePppoeServer#mrru}
  */
  readonly mrru?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#name InterfacePppoeServer#name}
  */
  readonly name: string;
  /**
  * Allow only one session per host (determined by MAC address). If a host tries to establish a new session, the old one will be closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#one_session_per_host InterfacePppoeServer#one_session_per_host}
  */
  readonly oneSessionPerHost?: boolean | cdktf.IResolvable;
  /**
  * This setting allows a PPPoE server to operate over 802.1Q VLANs. By default, a PPPoE server only accepts untagged packets on its interface. However, in scenarios where clients are on separate VLANs, instead of creating multiple 802.1Q VLAN interfaces and bridging them together or configuring individual PPPoE servers for each VLAN, you can specify the necessary VLANs directly in the PPPoE server settings. When you specify the VLAN IDs, the PPPoE server will accept both untagged packets and 802.1Q tagged packets from clients, and it will reply using the same VLAN. This setting can also be applied to both CVLAN and SVLAN interfaces. For example, when the use-service-tag=yes option is used on a VLAN interface, enabling QinQ setups as well. The setting supports a range of VLAN IDs, as well as individual VLANs specified using comma-separated values. For example: pppoe-over-vlan-range=100-115,120,122,128-130.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#pppoe_over_vlan_range InterfacePppoeServer#pppoe_over_vlan_range}
  */
  readonly pppoeOverVlanRange?: number;
  /**
  * This attribute is required in the ROS 7 version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#service InterfacePppoeServer#service}
  */
  readonly service?: string;
  /**
  * The PPPoE service name. Server will accept clients which sends PADI message with service-names that matches this setting or if service-name field in PADI message is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#service_name InterfacePppoeServer#service_name}
  */
  readonly serviceName?: string;
  /**
  * This attribute is required in the ROS 7 version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#user InterfacePppoeServer#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server routeros_interface_pppoe_server}
*/
export class InterfacePppoeServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_pppoe_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePppoeServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePppoeServer to import
  * @param importFromId The id of the existing InterfacePppoeServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePppoeServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_pppoe_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_pppoe_server routeros_interface_pppoe_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePppoeServerConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacePppoeServerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_pppoe_server',
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
    this._authentication = config.authentication;
    this._comment = config.comment;
    this._defaultProfile = config.defaultProfile;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._keepaliveTimeout = config.keepaliveTimeout;
    this._maxMru = config.maxMru;
    this._maxMtu = config.maxMtu;
    this._maxSessions = config.maxSessions;
    this._mrru = config.mrru;
    this._name = config.name;
    this._oneSessionPerHost = config.oneSessionPerHost;
    this._pppoeOverVlanRange = config.pppoeOverVlanRange;
    this._service = config.service;
    this._serviceName = config.serviceName;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string[]; 
  public get authentication() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication'));
  }
  public set authentication(value: string[]) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
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

  // default_profile - computed: false, optional: true, required: false
  private _defaultProfile?: string; 
  public get defaultProfile() {
    return this.getStringAttribute('default_profile');
  }
  public set defaultProfile(value: string) {
    this._defaultProfile = value;
  }
  public resetDefaultProfile() {
    this._defaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileInput() {
    return this._defaultProfile;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: string; 
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: string) {
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
  private _maxMru?: number; 
  public get maxMru() {
    return this.getNumberAttribute('max_mru');
  }
  public set maxMru(value: number) {
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
  private _maxMtu?: number; 
  public get maxMtu() {
    return this.getNumberAttribute('max_mtu');
  }
  public set maxMtu(value: number) {
    this._maxMtu = value;
  }
  public resetMaxMtu() {
    this._maxMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMtuInput() {
    return this._maxMtu;
  }

  // max_sessions - computed: false, optional: true, required: false
  private _maxSessions?: number; 
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }
  public set maxSessions(value: number) {
    this._maxSessions = value;
  }
  public resetMaxSessions() {
    this._maxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
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

  // one_session_per_host - computed: false, optional: true, required: false
  private _oneSessionPerHost?: boolean | cdktf.IResolvable; 
  public get oneSessionPerHost() {
    return this.getBooleanAttribute('one_session_per_host');
  }
  public set oneSessionPerHost(value: boolean | cdktf.IResolvable) {
    this._oneSessionPerHost = value;
  }
  public resetOneSessionPerHost() {
    this._oneSessionPerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneSessionPerHostInput() {
    return this._oneSessionPerHost;
  }

  // pppoe_over_vlan_range - computed: false, optional: true, required: false
  private _pppoeOverVlanRange?: number; 
  public get pppoeOverVlanRange() {
    return this.getNumberAttribute('pppoe_over_vlan_range');
  }
  public set pppoeOverVlanRange(value: number) {
    this._pppoeOverVlanRange = value;
  }
  public resetPppoeOverVlanRange() {
    this._pppoeOverVlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeOverVlanRangeInput() {
    return this._pppoeOverVlanRange;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
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
      authentication: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authentication),
      comment: cdktf.stringToTerraform(this._comment),
      default_profile: cdktf.stringToTerraform(this._defaultProfile),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      keepalive_timeout: cdktf.stringToTerraform(this._keepaliveTimeout),
      max_mru: cdktf.numberToTerraform(this._maxMru),
      max_mtu: cdktf.numberToTerraform(this._maxMtu),
      max_sessions: cdktf.numberToTerraform(this._maxSessions),
      mrru: cdktf.stringToTerraform(this._mrru),
      name: cdktf.stringToTerraform(this._name),
      one_session_per_host: cdktf.booleanToTerraform(this._oneSessionPerHost),
      pppoe_over_vlan_range: cdktf.numberToTerraform(this._pppoeOverVlanRange),
      service: cdktf.stringToTerraform(this._service),
      service_name: cdktf.stringToTerraform(this._serviceName),
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
      authentication: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authentication),
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
      default_profile: {
        value: cdktf.stringToHclTerraform(this._defaultProfile),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_timeout: {
        value: cdktf.stringToHclTerraform(this._keepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_mru: {
        value: cdktf.numberToHclTerraform(this._maxMru),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_mtu: {
        value: cdktf.numberToHclTerraform(this._maxMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sessions: {
        value: cdktf.numberToHclTerraform(this._maxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      one_session_per_host: {
        value: cdktf.booleanToHclTerraform(this._oneSessionPerHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pppoe_over_vlan_range: {
        value: cdktf.numberToHclTerraform(this._pppoeOverVlanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
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
