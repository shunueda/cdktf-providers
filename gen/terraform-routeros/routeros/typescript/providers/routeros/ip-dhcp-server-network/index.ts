// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDhcpServerNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#___path___ IpDhcpServerNetwork#___path___}
  */
  readonly path?: string;
  /**
  * The network DHCP server(s) will lease addresses from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#address IpDhcpServerNetwork#address}
  */
  readonly address: string;
  /**
  * Boot filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#boot_file_name IpDhcpServerNetwork#boot_file_name}
  */
  readonly bootFileName?: string;
  /**
  * A list of IP addresses for one or more CAPsMAN system managers. DHCP Option 138 (capwap) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#caps_manager IpDhcpServerNetwork#caps_manager}
  */
  readonly capsManager?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#comment IpDhcpServerNetwork#comment}
  */
  readonly comment?: string;
  /**
  * Add additional DHCP options from the option list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#dhcp_option IpDhcpServerNetwork#dhcp_option}
  */
  readonly dhcpOption?: string[];
  /**
  * Add an additional set of DHCP options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#dhcp_option_set IpDhcpServerNetwork#dhcp_option_set}
  */
  readonly dhcpOptionSet?: string;
  /**
  * If set, then DHCP Server will not pass dynamic DNS servers configured on the router to the DHCP clients if no DNS Server in DNS-server is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#dns_none IpDhcpServerNetwork#dns_none}
  */
  readonly dnsNone?: boolean | cdktf.IResolvable;
  /**
  * The DHCP client will use these as the default DNS servers. Two DNS servers can be specified to be used by the DHCP client as primary and secondary DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#dns_server IpDhcpServerNetwork#dns_server}
  */
  readonly dnsServer?: string[];
  /**
  * The DHCP client will use this as the 'DNS domain' setting for the network adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#domain IpDhcpServerNetwork#domain}
  */
  readonly domain?: string;
  /**
  * The default gateway to be used by DHCP Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#gateway IpDhcpServerNetwork#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#id IpDhcpServerNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The actual network mask is to be used by the DHCP client. If set to '0' - netmask from network address will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#netmask IpDhcpServerNetwork#netmask}
  */
  readonly netmask?: number;
  /**
  * The IP address of the next server to use in bootstrap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#next_server IpDhcpServerNetwork#next_server}
  */
  readonly nextServer?: string;
  /**
  * If set, then DHCP Server will not pass NTP servers configured on the router to the DHCP clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#ntp_none IpDhcpServerNetwork#ntp_none}
  */
  readonly ntpNone?: boolean | cdktf.IResolvable;
  /**
  * The DHCP client will use these as the default NTP servers. Two NTP servers can be specified to be used by the DHCP client as primary and secondary NTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#ntp_server IpDhcpServerNetwork#ntp_server}
  */
  readonly ntpServer?: string[];
  /**
  * The Windows DHCP client will use these as the default WINS servers. Two WINS servers can be specified to be used by the DHCP client as primary and secondary WINS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#wins_server IpDhcpServerNetwork#wins_server}
  */
  readonly winsServer?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network routeros_ip_dhcp_server_network}
*/
export class IpDhcpServerNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dhcp_server_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDhcpServerNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDhcpServerNetwork to import
  * @param importFromId The id of the existing IpDhcpServerNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDhcpServerNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dhcp_server_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server_network routeros_ip_dhcp_server_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDhcpServerNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: IpDhcpServerNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dhcp_server_network',
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
    this._address = config.address;
    this._bootFileName = config.bootFileName;
    this._capsManager = config.capsManager;
    this._comment = config.comment;
    this._dhcpOption = config.dhcpOption;
    this._dhcpOptionSet = config.dhcpOptionSet;
    this._dnsNone = config.dnsNone;
    this._dnsServer = config.dnsServer;
    this._domain = config.domain;
    this._gateway = config.gateway;
    this._id = config.id;
    this._netmask = config.netmask;
    this._nextServer = config.nextServer;
    this._ntpNone = config.ntpNone;
    this._ntpServer = config.ntpServer;
    this._winsServer = config.winsServer;
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

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // boot_file_name - computed: false, optional: true, required: false
  private _bootFileName?: string; 
  public get bootFileName() {
    return this.getStringAttribute('boot_file_name');
  }
  public set bootFileName(value: string) {
    this._bootFileName = value;
  }
  public resetBootFileName() {
    this._bootFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootFileNameInput() {
    return this._bootFileName;
  }

  // caps_manager - computed: false, optional: true, required: false
  private _capsManager?: string[]; 
  public get capsManager() {
    return this.getListAttribute('caps_manager');
  }
  public set capsManager(value: string[]) {
    this._capsManager = value;
  }
  public resetCapsManager() {
    this._capsManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsManagerInput() {
    return this._capsManager;
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

  // dhcp_option - computed: false, optional: true, required: false
  private _dhcpOption?: string[]; 
  public get dhcpOption() {
    return this.getListAttribute('dhcp_option');
  }
  public set dhcpOption(value: string[]) {
    this._dhcpOption = value;
  }
  public resetDhcpOption() {
    this._dhcpOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionInput() {
    return this._dhcpOption;
  }

  // dhcp_option_set - computed: false, optional: true, required: false
  private _dhcpOptionSet?: string; 
  public get dhcpOptionSet() {
    return this.getStringAttribute('dhcp_option_set');
  }
  public set dhcpOptionSet(value: string) {
    this._dhcpOptionSet = value;
  }
  public resetDhcpOptionSet() {
    this._dhcpOptionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionSetInput() {
    return this._dhcpOptionSet;
  }

  // dns_none - computed: false, optional: true, required: false
  private _dnsNone?: boolean | cdktf.IResolvable; 
  public get dnsNone() {
    return this.getBooleanAttribute('dns_none');
  }
  public set dnsNone(value: boolean | cdktf.IResolvable) {
    this._dnsNone = value;
  }
  public resetDnsNone() {
    this._dnsNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNoneInput() {
    return this._dnsNone;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string[]; 
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // netmask - computed: false, optional: true, required: false
  private _netmask?: number; 
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // next_server - computed: false, optional: true, required: false
  private _nextServer?: string; 
  public get nextServer() {
    return this.getStringAttribute('next_server');
  }
  public set nextServer(value: string) {
    this._nextServer = value;
  }
  public resetNextServer() {
    this._nextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextServerInput() {
    return this._nextServer;
  }

  // ntp_none - computed: false, optional: true, required: false
  private _ntpNone?: boolean | cdktf.IResolvable; 
  public get ntpNone() {
    return this.getBooleanAttribute('ntp_none');
  }
  public set ntpNone(value: boolean | cdktf.IResolvable) {
    this._ntpNone = value;
  }
  public resetNtpNone() {
    this._ntpNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpNoneInput() {
    return this._ntpNone;
  }

  // ntp_server - computed: false, optional: true, required: false
  private _ntpServer?: string[]; 
  public get ntpServer() {
    return this.getListAttribute('ntp_server');
  }
  public set ntpServer(value: string[]) {
    this._ntpServer = value;
  }
  public resetNtpServer() {
    this._ntpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerInput() {
    return this._ntpServer;
  }

  // wins_server - computed: false, optional: true, required: false
  private _winsServer?: string[]; 
  public get winsServer() {
    return this.getListAttribute('wins_server');
  }
  public set winsServer(value: string[]) {
    this._winsServer = value;
  }
  public resetWinsServer() {
    this._winsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServerInput() {
    return this._winsServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address: cdktf.stringToTerraform(this._address),
      boot_file_name: cdktf.stringToTerraform(this._bootFileName),
      caps_manager: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capsManager),
      comment: cdktf.stringToTerraform(this._comment),
      dhcp_option: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpOption),
      dhcp_option_set: cdktf.stringToTerraform(this._dhcpOptionSet),
      dns_none: cdktf.booleanToTerraform(this._dnsNone),
      dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServer),
      domain: cdktf.stringToTerraform(this._domain),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      netmask: cdktf.numberToTerraform(this._netmask),
      next_server: cdktf.stringToTerraform(this._nextServer),
      ntp_none: cdktf.booleanToTerraform(this._ntpNone),
      ntp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServer),
      wins_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._winsServer),
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
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_file_name: {
        value: cdktf.stringToHclTerraform(this._bootFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caps_manager: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capsManager),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpOption),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dhcp_option_set: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_none: {
        value: cdktf.booleanToHclTerraform(this._dnsNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      netmask: {
        value: cdktf.numberToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_server: {
        value: cdktf.stringToHclTerraform(this._nextServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_none: {
        value: cdktf.booleanToHclTerraform(this._ntpNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ntp_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wins_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._winsServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
