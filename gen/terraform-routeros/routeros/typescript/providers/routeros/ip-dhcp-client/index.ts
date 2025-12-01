// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDhcpClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#___path___ IpDhcpClient#___path___}
  */
  readonly path?: string;
  /**
  * Whether to install default route in routing table received from DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#add_default_route IpDhcpClient#add_default_route}
  */
  readonly addDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#allow_reconfigure IpDhcpClient#allow_reconfigure}
  */
  readonly allowReconfigure?: boolean | cdktf.IResolvable;
  /**
  * Method on how to check gateway reachability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#check_gateway IpDhcpClient#check_gateway}
  */
  readonly checkGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#comment IpDhcpClient#comment}
  */
  readonly comment?: string;
  /**
  * Distance of default route. Applicable if add-default-route is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#default_route_distance IpDhcpClient#default_route_distance}
  */
  readonly defaultRouteDistance?: number;
  /**
  * Default route tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#default_route_tables IpDhcpClient#default_route_tables}
  */
  readonly defaultRouteTables?: string[];
  /**
  * Options that are sent to the DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#dhcp_options IpDhcpClient#dhcp_options}
  */
  readonly dhcpOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#disabled IpDhcpClient#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Sets the DSCP (Differentiated Services Code Point) value for outgoing DHCP client packets. This value is part of the IP header and is used to indicate the desired Quality of Service (QoS) level for network traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#dscp IpDhcpClient#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#id IpDhcpClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#interface IpDhcpClient#interface}
  */
  readonly interface: string;
  /**
  * A script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#script IpDhcpClient#script}
  */
  readonly script?: string;
  /**
  * Whether to set broadcast bit in DHCPDISCOVER and DHCPREQUEST messages.
  *     -  `always` - broadcast bit is set always
  *     -  `both` - broadcast bit is set only first 15 seconds
  *     -  `never` - broadcast bit is not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#use_broadcast IpDhcpClient#use_broadcast}
  */
  readonly useBroadcast?: string;
  /**
  * Whether to accept the DNS settings advertised by DHCP Server (will override the settings put in the /ip dns submenu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#use_peer_dns IpDhcpClient#use_peer_dns}
  */
  readonly usePeerDns?: boolean | cdktf.IResolvable;
  /**
  * Whether to accept the NTP settings advertised by DHCP Server (will override the settings put in the /system ntp client submenu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#use_peer_ntp IpDhcpClient#use_peer_ntp}
  */
  readonly usePeerNtp?: boolean | cdktf.IResolvable;
  /**
  * Allow the server to send Reconfigure messages to clients, prompting them to renew or update their configuration without waiting for their lease to expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#use_reconfigure IpDhcpClient#use_reconfigure}
  */
  readonly useReconfigure?: boolean | cdktf.IResolvable;
  /**
  * If the DHCP client is running on a VLAN interface (`/interface/vlan`), you can specify the Priority Code Point (PCP) value. PCP is a 3-bit field in the VLAN header used to mark the priority of packets within a VLAN, allowing traffic to be prioritized accordingly. This setting applies only to VLAN interfaces and affects the priority of outgoing DHCP client packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#vlan_priority IpDhcpClient#vlan_priority}
  */
  readonly vlanPriority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client routeros_ip_dhcp_client}
*/
export class IpDhcpClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dhcp_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDhcpClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDhcpClient to import
  * @param importFromId The id of the existing IpDhcpClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDhcpClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dhcp_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_client routeros_ip_dhcp_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDhcpClientConfig
  */
  public constructor(scope: Construct, id: string, config: IpDhcpClientConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dhcp_client',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._addDefaultRoute = config.addDefaultRoute;
    this._allowReconfigure = config.allowReconfigure;
    this._checkGateway = config.checkGateway;
    this._comment = config.comment;
    this._defaultRouteDistance = config.defaultRouteDistance;
    this._defaultRouteTables = config.defaultRouteTables;
    this._dhcpOptions = config.dhcpOptions;
    this._disabled = config.disabled;
    this._dscp = config.dscp;
    this._id = config.id;
    this._interface = config.interface;
    this._script = config.script;
    this._useBroadcast = config.useBroadcast;
    this._usePeerDns = config.usePeerDns;
    this._usePeerNtp = config.usePeerNtp;
    this._useReconfigure = config.useReconfigure;
    this._vlanPriority = config.vlanPriority;
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

  // add_default_route - computed: true, optional: true, required: false
  private _addDefaultRoute?: string; 
  public get addDefaultRoute() {
    return this.getStringAttribute('add_default_route');
  }
  public set addDefaultRoute(value: string) {
    this._addDefaultRoute = value;
  }
  public resetAddDefaultRoute() {
    this._addDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDefaultRouteInput() {
    return this._addDefaultRoute;
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // allow_reconfigure - computed: false, optional: true, required: false
  private _allowReconfigure?: boolean | cdktf.IResolvable; 
  public get allowReconfigure() {
    return this.getBooleanAttribute('allow_reconfigure');
  }
  public set allowReconfigure(value: boolean | cdktf.IResolvable) {
    this._allowReconfigure = value;
  }
  public resetAllowReconfigure() {
    this._allowReconfigure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReconfigureInput() {
    return this._allowReconfigure;
  }

  // check_gateway - computed: false, optional: true, required: false
  private _checkGateway?: string; 
  public get checkGateway() {
    return this.getStringAttribute('check_gateway');
  }
  public set checkGateway(value: string) {
    this._checkGateway = value;
  }
  public resetCheckGateway() {
    this._checkGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkGatewayInput() {
    return this._checkGateway;
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

  // default_route_tables - computed: false, optional: true, required: false
  private _defaultRouteTables?: string[]; 
  public get defaultRouteTables() {
    return cdktf.Fn.tolist(this.getListAttribute('default_route_tables'));
  }
  public set defaultRouteTables(value: string[]) {
    this._defaultRouteTables = value;
  }
  public resetDefaultRouteTables() {
    this._defaultRouteTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTablesInput() {
    return this._defaultRouteTables;
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions?: string; 
  public get dhcpOptions() {
    return this.getStringAttribute('dhcp_options');
  }
  public set dhcpOptions(value: string) {
    this._dhcpOptions = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions;
  }

  // dhcp_server - computed: true, optional: false, required: false
  public get dhcpServer() {
    return this.getStringAttribute('dhcp_server');
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

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // expires_after - computed: true, optional: false, required: false
  public get expiresAfter() {
    return this.getStringAttribute('expires_after');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
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

  // primary_dns - computed: true, optional: false, required: false
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }

  // primary_ntp - computed: true, optional: false, required: false
  public get primaryNtp() {
    return this.getStringAttribute('primary_ntp');
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // secondary_dns - computed: true, optional: false, required: false
  public get secondaryDns() {
    return this.getStringAttribute('secondary_dns');
  }

  // secondary_ntp - computed: true, optional: false, required: false
  public get secondaryNtp() {
    return this.getStringAttribute('secondary_ntp');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // use_broadcast - computed: false, optional: true, required: false
  private _useBroadcast?: string; 
  public get useBroadcast() {
    return this.getStringAttribute('use_broadcast');
  }
  public set useBroadcast(value: string) {
    this._useBroadcast = value;
  }
  public resetUseBroadcast() {
    this._useBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBroadcastInput() {
    return this._useBroadcast;
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

  // use_peer_ntp - computed: false, optional: true, required: false
  private _usePeerNtp?: boolean | cdktf.IResolvable; 
  public get usePeerNtp() {
    return this.getBooleanAttribute('use_peer_ntp');
  }
  public set usePeerNtp(value: boolean | cdktf.IResolvable) {
    this._usePeerNtp = value;
  }
  public resetUsePeerNtp() {
    this._usePeerNtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePeerNtpInput() {
    return this._usePeerNtp;
  }

  // use_reconfigure - computed: false, optional: true, required: false
  private _useReconfigure?: boolean | cdktf.IResolvable; 
  public get useReconfigure() {
    return this.getBooleanAttribute('use_reconfigure');
  }
  public set useReconfigure(value: boolean | cdktf.IResolvable) {
    this._useReconfigure = value;
  }
  public resetUseReconfigure() {
    this._useReconfigure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useReconfigureInput() {
    return this._useReconfigure;
  }

  // vlan_priority - computed: false, optional: true, required: false
  private _vlanPriority?: number; 
  public get vlanPriority() {
    return this.getNumberAttribute('vlan_priority');
  }
  public set vlanPriority(value: number) {
    this._vlanPriority = value;
  }
  public resetVlanPriority() {
    this._vlanPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPriorityInput() {
    return this._vlanPriority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      add_default_route: cdktf.stringToTerraform(this._addDefaultRoute),
      allow_reconfigure: cdktf.booleanToTerraform(this._allowReconfigure),
      check_gateway: cdktf.stringToTerraform(this._checkGateway),
      comment: cdktf.stringToTerraform(this._comment),
      default_route_distance: cdktf.numberToTerraform(this._defaultRouteDistance),
      default_route_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultRouteTables),
      dhcp_options: cdktf.stringToTerraform(this._dhcpOptions),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dscp: cdktf.numberToTerraform(this._dscp),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      script: cdktf.stringToTerraform(this._script),
      use_broadcast: cdktf.stringToTerraform(this._useBroadcast),
      use_peer_dns: cdktf.booleanToTerraform(this._usePeerDns),
      use_peer_ntp: cdktf.booleanToTerraform(this._usePeerNtp),
      use_reconfigure: cdktf.booleanToTerraform(this._useReconfigure),
      vlan_priority: cdktf.numberToTerraform(this._vlanPriority),
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
      add_default_route: {
        value: cdktf.stringToHclTerraform(this._addDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_reconfigure: {
        value: cdktf.booleanToHclTerraform(this._allowReconfigure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_gateway: {
        value: cdktf.stringToHclTerraform(this._checkGateway),
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
      default_route_distance: {
        value: cdktf.numberToHclTerraform(this._defaultRouteDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_route_tables: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultRouteTables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dhcp_options: {
        value: cdktf.stringToHclTerraform(this._dhcpOptions),
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
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_broadcast: {
        value: cdktf.stringToHclTerraform(this._useBroadcast),
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
      use_peer_ntp: {
        value: cdktf.booleanToHclTerraform(this._usePeerNtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_reconfigure: {
        value: cdktf.booleanToHclTerraform(this._useReconfigure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_priority: {
        value: cdktf.numberToHclTerraform(this._vlanPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
