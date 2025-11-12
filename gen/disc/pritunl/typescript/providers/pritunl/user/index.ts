// https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * User authentication type. This will determine how the user authenticates. This should be set automatically when the user authenticates with single sign-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#auth_type User#auth_type}
  */
  readonly authType?: string;
  /**
  * Bypass secondary authentication such as the PIN and two-factor authentication. Use for server users that can't provide a two-factor code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#bypass_secondary User#bypass_secondary}
  */
  readonly bypassSecondary?: boolean | cdktf.IResolvable;
  /**
  * Only allow this client to communicate with other clients. Access to routed networks will be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#client_to_client User#client_to_client}
  */
  readonly clientToClient?: boolean | cdktf.IResolvable;
  /**
  * Shows if user is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#disabled User#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Dns server with port to forward sub-domain dns requests coming from this users domain. Multiple dns servers may be separated by a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#dns_servers User#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * The suffix to use when forwarding dns requests. The full dns request will be the combination of the sub-domain of the users dns name suffixed by the dns suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#dns_suffix User#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * User email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Enter list of groups to allow connections from. Names are case sensitive. If empty all groups will able to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#groups User#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Comma separated list of MAC addresses client is allowed to connect from. The validity of the MAC address provided by the VPN client cannot be verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#mac_addresses User#mac_addresses}
  */
  readonly macAddresses?: string[];
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Network address with cidr subnet. This will provision access to a clients local network to the attached vpn servers and other clients. Multiple networks may be separated by a comma. Router must have a static route to VPN virtual network through client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#network_links User#network_links}
  */
  readonly networkLinks?: string[];
  /**
  * The organizations that user belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#organization_id User#organization_id}
  */
  readonly organizationId: string;
  /**
  * The PIN for user authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#pin User#pin}
  */
  readonly pin?: string;
  /**
  * Comma seperated list of ports to forward using format source_port:dest_port/protocol or start_port-end_port/protocol. Such as 80, 80/tcp, 80:8000/tcp, 1000-2000/udp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#port_forwarding User#port_forwarding}
  */
  readonly portForwarding?: { [key: string]: string }[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user pritunl_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pritunl_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pritunl_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/resources/user pritunl_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'pritunl_user',
      terraformGeneratorMetadata: {
        providerName: 'pritunl',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._bypassSecondary = config.bypassSecondary;
    this._clientToClient = config.clientToClient;
    this._disabled = config.disabled;
    this._dnsServers = config.dnsServers;
    this._dnsSuffix = config.dnsSuffix;
    this._email = config.email;
    this._groups = config.groups;
    this._id = config.id;
    this._macAddresses = config.macAddresses;
    this._name = config.name;
    this._networkLinks = config.networkLinks;
    this._organizationId = config.organizationId;
    this._pin = config.pin;
    this._portForwarding = config.portForwarding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // bypass_secondary - computed: false, optional: true, required: false
  private _bypassSecondary?: boolean | cdktf.IResolvable; 
  public get bypassSecondary() {
    return this.getBooleanAttribute('bypass_secondary');
  }
  public set bypassSecondary(value: boolean | cdktf.IResolvable) {
    this._bypassSecondary = value;
  }
  public resetBypassSecondary() {
    this._bypassSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSecondaryInput() {
    return this._bypassSecondary;
  }

  // client_to_client - computed: false, optional: true, required: false
  private _clientToClient?: boolean | cdktf.IResolvable; 
  public get clientToClient() {
    return this.getBooleanAttribute('client_to_client');
  }
  public set clientToClient(value: boolean | cdktf.IResolvable) {
    this._clientToClient = value;
  }
  public resetClientToClient() {
    this._clientToClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClientInput() {
    return this._clientToClient;
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

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // mac_addresses - computed: false, optional: true, required: false
  private _macAddresses?: string[]; 
  public get macAddresses() {
    return this.getListAttribute('mac_addresses');
  }
  public set macAddresses(value: string[]) {
    this._macAddresses = value;
  }
  public resetMacAddresses() {
    this._macAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressesInput() {
    return this._macAddresses;
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

  // network_links - computed: false, optional: true, required: false
  private _networkLinks?: string[]; 
  public get networkLinks() {
    return this.getListAttribute('network_links');
  }
  public set networkLinks(value: string[]) {
    this._networkLinks = value;
  }
  public resetNetworkLinks() {
    this._networkLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLinksInput() {
    return this._networkLinks;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // pin - computed: false, optional: true, required: false
  private _pin?: string; 
  public get pin() {
    return this.getStringAttribute('pin');
  }
  public set pin(value: string) {
    this._pin = value;
  }
  public resetPin() {
    this._pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
  }

  // port_forwarding - computed: false, optional: true, required: false
  private _portForwarding?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get portForwarding() {
    return this.interpolationForAttribute('port_forwarding');
  }
  public set portForwarding(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._portForwarding = value;
  }
  public resetPortForwarding() {
    this._portForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingInput() {
    return this._portForwarding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      bypass_secondary: cdktf.booleanToTerraform(this._bypassSecondary),
      client_to_client: cdktf.booleanToTerraform(this._clientToClient),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      email: cdktf.stringToTerraform(this._email),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macAddresses),
      name: cdktf.stringToTerraform(this._name),
      network_links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkLinks),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      pin: cdktf.stringToTerraform(this._pin),
      port_forwarding: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._portForwarding),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_secondary: {
        value: cdktf.booleanToHclTerraform(this._bypassSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_to_client: {
        value: cdktf.booleanToHclTerraform(this._clientToClient),
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
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_links: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkLinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pin: {
        value: cdktf.stringToHclTerraform(this._pin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_forwarding: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._portForwarding),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
