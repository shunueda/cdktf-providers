// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLteApnConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#___path___ InterfaceLteApn#___path___}
  */
  readonly path?: string;
  /**
  * Whether to add a default route to forward all traffic over the LTE interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#add_default_route InterfaceLteApn#add_default_route}
  */
  readonly addDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Service Provider's Access Point Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#apn InterfaceLteApn#apn}
  */
  readonly apn?: string;
  /**
  * Allowed protocol to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#authentication InterfaceLteApn#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#comment InterfaceLteApn#comment}
  */
  readonly comment?: string;
  /**
  * Sets distance value applied to auto-created default route, if add-default-route is also selected. LTE route by default is with distance 2 to prefer wired routes over LTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#default_route_distance InterfaceLteApn#default_route_distance}
  */
  readonly defaultRouteDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#id InterfaceLteApn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Requested PDN type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#ip_type InterfaceLteApn#ip_type}
  */
  readonly ipType?: string;
  /**
  * Interface on which to advertise IPv6 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#ipv6_interface InterfaceLteApn#ipv6_interface}
  */
  readonly ipv6Interface?: string;
  /**
  * APN profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#name InterfaceLteApn#name}
  */
  readonly name: string;
  /**
  * APN profile number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#number InterfaceLteApn#number}
  */
  readonly number?: number;
  /**
  * Interface to passthrough IP configuration (activates passthrough).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#passthrough_interface InterfaceLteApn#passthrough_interface}
  */
  readonly passthroughInterface?: string;
  /**
  * If set to auto, then will learn MAC from the first packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#passthrough_mac InterfaceLteApn#passthrough_mac}
  */
  readonly passthroughMac?: string;
  /**
  * `auto` selects the smallest possible subnet to be used for the passthrough interface. `p2p` sets the passthrough interface subnet as `/32` and picks gateway address from `10.177.0.0/16` range. The gateway address stays the same until the apn configuration is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#passthrough_subnet_selection InterfaceLteApn#passthrough_subnet_selection}
  */
  readonly passthroughSubnetSelection?: string;
  /**
  * Password used if any of the authentication protocols are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#password InterfaceLteApn#password}
  */
  readonly password?: string;
  /**
  * Parameter is available starting from RouterOS v7 and used only for MBIM modems. If set to yes, uses network provided APN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#use_network_apn InterfaceLteApn#use_network_apn}
  */
  readonly useNetworkApn?: boolean | cdktf.IResolvable;
  /**
  * If set to yes, uses DNS received from LTE interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#use_peer_dns InterfaceLteApn#use_peer_dns}
  */
  readonly usePeerDns?: boolean | cdktf.IResolvable;
  /**
  * Username used if any of the authentication protocols are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#user InterfaceLteApn#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn routeros_interface_lte_apn}
*/
export class InterfaceLteApn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_lte_apn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLteApn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLteApn to import
  * @param importFromId The id of the existing InterfaceLteApn that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLteApn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_lte_apn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_lte_apn routeros_interface_lte_apn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLteApnConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLteApnConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_lte_apn',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._apn = config.apn;
    this._authentication = config.authentication;
    this._comment = config.comment;
    this._defaultRouteDistance = config.defaultRouteDistance;
    this._id = config.id;
    this._ipType = config.ipType;
    this._ipv6Interface = config.ipv6Interface;
    this._name = config.name;
    this._number = config.number;
    this._passthroughInterface = config.passthroughInterface;
    this._passthroughMac = config.passthroughMac;
    this._passthroughSubnetSelection = config.passthroughSubnetSelection;
    this._password = config.password;
    this._useNetworkApn = config.useNetworkApn;
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

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // ipv6_interface - computed: false, optional: true, required: false
  private _ipv6Interface?: string; 
  public get ipv6Interface() {
    return this.getStringAttribute('ipv6_interface');
  }
  public set ipv6Interface(value: string) {
    this._ipv6Interface = value;
  }
  public resetIpv6Interface() {
    this._ipv6Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InterfaceInput() {
    return this._ipv6Interface;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // passthrough_interface - computed: false, optional: true, required: false
  private _passthroughInterface?: string; 
  public get passthroughInterface() {
    return this.getStringAttribute('passthrough_interface');
  }
  public set passthroughInterface(value: string) {
    this._passthroughInterface = value;
  }
  public resetPassthroughInterface() {
    this._passthroughInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInterfaceInput() {
    return this._passthroughInterface;
  }

  // passthrough_mac - computed: false, optional: true, required: false
  private _passthroughMac?: string; 
  public get passthroughMac() {
    return this.getStringAttribute('passthrough_mac');
  }
  public set passthroughMac(value: string) {
    this._passthroughMac = value;
  }
  public resetPassthroughMac() {
    this._passthroughMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughMacInput() {
    return this._passthroughMac;
  }

  // passthrough_subnet_selection - computed: false, optional: true, required: false
  private _passthroughSubnetSelection?: string; 
  public get passthroughSubnetSelection() {
    return this.getStringAttribute('passthrough_subnet_selection');
  }
  public set passthroughSubnetSelection(value: string) {
    this._passthroughSubnetSelection = value;
  }
  public resetPassthroughSubnetSelection() {
    this._passthroughSubnetSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughSubnetSelectionInput() {
    return this._passthroughSubnetSelection;
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

  // use_network_apn - computed: false, optional: true, required: false
  private _useNetworkApn?: boolean | cdktf.IResolvable; 
  public get useNetworkApn() {
    return this.getBooleanAttribute('use_network_apn');
  }
  public set useNetworkApn(value: boolean | cdktf.IResolvable) {
    this._useNetworkApn = value;
  }
  public resetUseNetworkApn() {
    this._useNetworkApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNetworkApnInput() {
    return this._useNetworkApn;
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
      add_default_route: cdktf.booleanToTerraform(this._addDefaultRoute),
      apn: cdktf.stringToTerraform(this._apn),
      authentication: cdktf.stringToTerraform(this._authentication),
      comment: cdktf.stringToTerraform(this._comment),
      default_route_distance: cdktf.numberToTerraform(this._defaultRouteDistance),
      id: cdktf.stringToTerraform(this._id),
      ip_type: cdktf.stringToTerraform(this._ipType),
      ipv6_interface: cdktf.stringToTerraform(this._ipv6Interface),
      name: cdktf.stringToTerraform(this._name),
      number: cdktf.numberToTerraform(this._number),
      passthrough_interface: cdktf.stringToTerraform(this._passthroughInterface),
      passthrough_mac: cdktf.stringToTerraform(this._passthroughMac),
      passthrough_subnet_selection: cdktf.stringToTerraform(this._passthroughSubnetSelection),
      password: cdktf.stringToTerraform(this._password),
      use_network_apn: cdktf.booleanToTerraform(this._useNetworkApn),
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
      add_default_route: {
        value: cdktf.booleanToHclTerraform(this._addDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apn: {
        value: cdktf.stringToHclTerraform(this._apn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_type: {
        value: cdktf.stringToHclTerraform(this._ipType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_interface: {
        value: cdktf.stringToHclTerraform(this._ipv6Interface),
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
      number: {
        value: cdktf.numberToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passthrough_interface: {
        value: cdktf.stringToHclTerraform(this._passthroughInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passthrough_mac: {
        value: cdktf.stringToHclTerraform(this._passthroughMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passthrough_subnet_selection: {
        value: cdktf.stringToHclTerraform(this._passthroughSubnetSelection),
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
      use_network_apn: {
        value: cdktf.booleanToHclTerraform(this._useNetworkApn),
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
