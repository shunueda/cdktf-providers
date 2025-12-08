// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6DhcpClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#___path___ Ipv6DhcpClient#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#accept_prefix_without_address Ipv6DhcpClient#accept_prefix_without_address}
  */
  readonly acceptPrefixWithoutAddress?: boolean | cdktf.IResolvable;
  /**
  * Whether to add default IPv6 route after a client connects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#add_default_route Ipv6DhcpClient#add_default_route}
  */
  readonly addDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Allow reconfigure messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#allow_reconfigure Ipv6DhcpClient#allow_reconfigure}
  */
  readonly allowReconfigure?: boolean | cdktf.IResolvable;
  /**
  * Method on how to check gateway reachability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#check_gateway Ipv6DhcpClient#check_gateway}
  */
  readonly checkGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#comment Ipv6DhcpClient#comment}
  */
  readonly comment?: string;
  /**
  * Allow to specify custom IANA ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#custom_iana_id Ipv6DhcpClient#custom_iana_id}
  */
  readonly customIanaId?: string;
  /**
  * Allow to specify custom IAPD ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#custom_iapd_id Ipv6DhcpClient#custom_iapd_id}
  */
  readonly customIapdId?: string;
  /**
  * Distance of default route. Applicable if add-default-route is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#default_route_distance Ipv6DhcpClient#default_route_distance}
  */
  readonly defaultRouteDistance?: number;
  /**
  * List of routing tables to which default route must be added. Table name can be proceeded with ":x" where x would be the distance for the route to be installed with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#default_route_tables Ipv6DhcpClient#default_route_tables}
  */
  readonly defaultRouteTables?: string[];
  /**
  * Options that are sent to the DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#dhcp_options Ipv6DhcpClient#dhcp_options}
  */
  readonly dhcpOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#disabled Ipv6DhcpClient#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#id Ipv6DhcpClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#interface Ipv6DhcpClient#interface}
  */
  readonly interface: string;
  /**
  * Name of the IPv6 pool in which received IPv6 prefix will be added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#pool_name Ipv6DhcpClient#pool_name}
  */
  readonly poolName?: string;
  /**
  * Prefix length parameter that will be set for IPv6 pool in which received IPv6 prefix is added. Prefix length must be greater than the length of the received prefix, otherwise, prefix-length will be set to received prefix length + 8 bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#pool_prefix_length Ipv6DhcpClient#pool_prefix_length}
  */
  readonly poolPrefixLength?: number;
  /**
  * Names of the firewall address lists to which received prefix will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#prefix_address_lists Ipv6DhcpClient#prefix_address_lists}
  */
  readonly prefixAddressLists?: string[];
  /**
  * Include a preferred prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#prefix_hint Ipv6DhcpClient#prefix_hint}
  */
  readonly prefixHint?: string;
  /**
  * Enable DHCP rapid commit (fast address assignment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#rapid_commit Ipv6DhcpClient#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * To choose if the DHCPv6 request will ask for the address, info or the IPv6 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#request Ipv6DhcpClient#request}
  */
  readonly request: string[];
  /**
  * Run this script on the DHCP-client status change. Available variables:
  *   * pd-valid - if the prefix is acquired by the client;
  *   * pd-prefix - the prefix acquired by the client if any;
  *   * na-valid - if the address is acquired by the client;
  *   * na-address - the address acquired by the client if any.
  *   * options - array of received options (only ROSv7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#script Ipv6DhcpClient#script}
  */
  readonly script?: string;
  /**
  * Specifies the MAC address of the specified interface as the DHCPv6 client DUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#use_interface_duid Ipv6DhcpClient#use_interface_duid}
  */
  readonly useInterfaceDuid?: boolean | cdktf.IResolvable;
  /**
  * Whether to accept the DNS settings advertised by the IPv6 DHCP Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#use_peer_dns Ipv6DhcpClient#use_peer_dns}
  */
  readonly usePeerDns?: boolean | cdktf.IResolvable;
  /**
  * Whether to validate the DUID of the IPv6 DHCP Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#validate_server_duid Ipv6DhcpClient#validate_server_duid}
  */
  readonly validateServerDuid?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client routeros_ipv6_dhcp_client}
*/
export class Ipv6DhcpClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_dhcp_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6DhcpClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6DhcpClient to import
  * @param importFromId The id of the existing Ipv6DhcpClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6DhcpClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_dhcp_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_client routeros_ipv6_dhcp_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6DhcpClientConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6DhcpClientConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_dhcp_client',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._acceptPrefixWithoutAddress = config.acceptPrefixWithoutAddress;
    this._addDefaultRoute = config.addDefaultRoute;
    this._allowReconfigure = config.allowReconfigure;
    this._checkGateway = config.checkGateway;
    this._comment = config.comment;
    this._customIanaId = config.customIanaId;
    this._customIapdId = config.customIapdId;
    this._defaultRouteDistance = config.defaultRouteDistance;
    this._defaultRouteTables = config.defaultRouteTables;
    this._dhcpOptions = config.dhcpOptions;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._poolName = config.poolName;
    this._poolPrefixLength = config.poolPrefixLength;
    this._prefixAddressLists = config.prefixAddressLists;
    this._prefixHint = config.prefixHint;
    this._rapidCommit = config.rapidCommit;
    this._request = config.request;
    this._script = config.script;
    this._useInterfaceDuid = config.useInterfaceDuid;
    this._usePeerDns = config.usePeerDns;
    this._validateServerDuid = config.validateServerDuid;
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

  // accept_prefix_without_address - computed: false, optional: true, required: false
  private _acceptPrefixWithoutAddress?: boolean | cdktf.IResolvable; 
  public get acceptPrefixWithoutAddress() {
    return this.getBooleanAttribute('accept_prefix_without_address');
  }
  public set acceptPrefixWithoutAddress(value: boolean | cdktf.IResolvable) {
    this._acceptPrefixWithoutAddress = value;
  }
  public resetAcceptPrefixWithoutAddress() {
    this._acceptPrefixWithoutAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptPrefixWithoutAddressInput() {
    return this._acceptPrefixWithoutAddress;
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

  // custom_iana_id - computed: false, optional: true, required: false
  private _customIanaId?: string; 
  public get customIanaId() {
    return this.getStringAttribute('custom_iana_id');
  }
  public set customIanaId(value: string) {
    this._customIanaId = value;
  }
  public resetCustomIanaId() {
    this._customIanaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIanaIdInput() {
    return this._customIanaId;
  }

  // custom_iapd_id - computed: false, optional: true, required: false
  private _customIapdId?: string; 
  public get customIapdId() {
    return this.getStringAttribute('custom_iapd_id');
  }
  public set customIapdId(value: string) {
    this._customIapdId = value;
  }
  public resetCustomIapdId() {
    this._customIapdId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIapdIdInput() {
    return this._customIapdId;
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
  private _dhcpOptions?: string[]; 
  public get dhcpOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_options'));
  }
  public set dhcpOptions(value: string[]) {
    this._dhcpOptions = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions;
  }

  // dhcp_server_v6 - computed: true, optional: false, required: false
  public get dhcpServerV6() {
    return this.getStringAttribute('dhcp_server_v6');
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

  // duid - computed: true, optional: false, required: false
  public get duid() {
    return this.getStringAttribute('duid');
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

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // pool_prefix_length - computed: false, optional: true, required: false
  private _poolPrefixLength?: number; 
  public get poolPrefixLength() {
    return this.getNumberAttribute('pool_prefix_length');
  }
  public set poolPrefixLength(value: number) {
    this._poolPrefixLength = value;
  }
  public resetPoolPrefixLength() {
    this._poolPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPrefixLengthInput() {
    return this._poolPrefixLength;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_address_lists - computed: false, optional: true, required: false
  private _prefixAddressLists?: string[]; 
  public get prefixAddressLists() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_address_lists'));
  }
  public set prefixAddressLists(value: string[]) {
    this._prefixAddressLists = value;
  }
  public resetPrefixAddressLists() {
    this._prefixAddressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAddressListsInput() {
    return this._prefixAddressLists;
  }

  // prefix_hint - computed: true, optional: true, required: false
  private _prefixHint?: string; 
  public get prefixHint() {
    return this.getStringAttribute('prefix_hint');
  }
  public set prefixHint(value: string) {
    this._prefixHint = value;
  }
  public resetPrefixHint() {
    this._prefixHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHintInput() {
    return this._prefixHint;
  }

  // rapid_commit - computed: false, optional: true, required: false
  private _rapidCommit?: boolean | cdktf.IResolvable; 
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }
  public set rapidCommit(value: boolean | cdktf.IResolvable) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
  }

  // request - computed: false, optional: false, required: true
  private _request?: string[]; 
  public get request() {
    return this.getListAttribute('request');
  }
  public set request(value: string[]) {
    this._request = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // use_interface_duid - computed: false, optional: true, required: false
  private _useInterfaceDuid?: boolean | cdktf.IResolvable; 
  public get useInterfaceDuid() {
    return this.getBooleanAttribute('use_interface_duid');
  }
  public set useInterfaceDuid(value: boolean | cdktf.IResolvable) {
    this._useInterfaceDuid = value;
  }
  public resetUseInterfaceDuid() {
    this._useInterfaceDuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInterfaceDuidInput() {
    return this._useInterfaceDuid;
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

  // validate_server_duid - computed: false, optional: true, required: false
  private _validateServerDuid?: boolean | cdktf.IResolvable; 
  public get validateServerDuid() {
    return this.getBooleanAttribute('validate_server_duid');
  }
  public set validateServerDuid(value: boolean | cdktf.IResolvable) {
    this._validateServerDuid = value;
  }
  public resetValidateServerDuid() {
    this._validateServerDuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateServerDuidInput() {
    return this._validateServerDuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accept_prefix_without_address: cdktf.booleanToTerraform(this._acceptPrefixWithoutAddress),
      add_default_route: cdktf.booleanToTerraform(this._addDefaultRoute),
      allow_reconfigure: cdktf.booleanToTerraform(this._allowReconfigure),
      check_gateway: cdktf.stringToTerraform(this._checkGateway),
      comment: cdktf.stringToTerraform(this._comment),
      custom_iana_id: cdktf.stringToTerraform(this._customIanaId),
      custom_iapd_id: cdktf.stringToTerraform(this._customIapdId),
      default_route_distance: cdktf.numberToTerraform(this._defaultRouteDistance),
      default_route_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultRouteTables),
      dhcp_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpOptions),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      pool_name: cdktf.stringToTerraform(this._poolName),
      pool_prefix_length: cdktf.numberToTerraform(this._poolPrefixLength),
      prefix_address_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixAddressLists),
      prefix_hint: cdktf.stringToTerraform(this._prefixHint),
      rapid_commit: cdktf.booleanToTerraform(this._rapidCommit),
      request: cdktf.listMapper(cdktf.stringToTerraform, false)(this._request),
      script: cdktf.stringToTerraform(this._script),
      use_interface_duid: cdktf.booleanToTerraform(this._useInterfaceDuid),
      use_peer_dns: cdktf.booleanToTerraform(this._usePeerDns),
      validate_server_duid: cdktf.booleanToTerraform(this._validateServerDuid),
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
      accept_prefix_without_address: {
        value: cdktf.booleanToHclTerraform(this._acceptPrefixWithoutAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_default_route: {
        value: cdktf.booleanToHclTerraform(this._addDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      custom_iana_id: {
        value: cdktf.stringToHclTerraform(this._customIanaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_iapd_id: {
        value: cdktf.stringToHclTerraform(this._customIapdId),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_prefix_length: {
        value: cdktf.numberToHclTerraform(this._poolPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_address_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixAddressLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prefix_hint: {
        value: cdktf.stringToHclTerraform(this._prefixHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rapid_commit: {
        value: cdktf.booleanToHclTerraform(this._rapidCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._request),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_interface_duid: {
        value: cdktf.booleanToHclTerraform(this._useInterfaceDuid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_peer_dns: {
        value: cdktf.booleanToHclTerraform(this._usePeerDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate_server_duid: {
        value: cdktf.booleanToHclTerraform(this._validateServerDuid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
