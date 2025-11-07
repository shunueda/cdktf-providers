// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpDnsmasqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Force dnsmasq into authoritative mode. This speeds up DHCP leasing. Used if this is the only server on the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#authoritative DhcpDnsmasq#authoritative}
  */
  readonly authoritative?: boolean | cdktf.IResolvable;
  /**
  * DNS domain handed out to DHCP clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#domain DhcpDnsmasq#domain}
  */
  readonly domain?: string;
  /**
  * Never forward queries for plain names, without dots or domain parts, to upstream nameservers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#domainneeded DhcpDnsmasq#domainneeded}
  */
  readonly domainneeded?: boolean | cdktf.IResolvable;
  /**
  * Specify the largest EDNS.0 UDP packet which is supported by the DNS forwarder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#ednspacket_max DhcpDnsmasq#ednspacket_max}
  */
  readonly ednspacketMax?: number;
  /**
  * Never forward queries for plain names, without dots or domain parts, to upstream nameservers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#expandhosts DhcpDnsmasq#expandhosts}
  */
  readonly expandhosts?: boolean | cdktf.IResolvable;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#id DhcpDnsmasq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Store DHCP leases in this file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#leasefile DhcpDnsmasq#leasefile}
  */
  readonly leasefile?: string;
  /**
  * Look up DNS entries for this domain from `/etc/hosts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#local DhcpDnsmasq#local}
  */
  readonly local?: string;
  /**
  * Choose IP address to match the incoming interface if multiple addresses are assigned to a host name in `/etc/hosts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#localise_queries DhcpDnsmasq#localise_queries}
  */
  readonly localiseQueries?: boolean | cdktf.IResolvable;
  /**
  * Accept DNS queries only from hosts whose address is on a local subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#localservice DhcpDnsmasq#localservice}
  */
  readonly localservice?: boolean | cdktf.IResolvable;
  /**
  * Read static lease entries from `/etc/ethers`, re-read on SIGHUP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#readethers DhcpDnsmasq#readethers}
  */
  readonly readethers?: boolean | cdktf.IResolvable;
  /**
  * Allows upstream 127.0.0.0/8 responses, required for DNS based blocklist services. Only takes effect if rebind protection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#rebind_localhost DhcpDnsmasq#rebind_localhost}
  */
  readonly rebindLocalhost?: boolean | cdktf.IResolvable;
  /**
  * Enables DNS rebind attack protection by discarding upstream RFC1918 responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#rebind_protection DhcpDnsmasq#rebind_protection}
  */
  readonly rebindProtection?: boolean | cdktf.IResolvable;
  /**
  * Specifies an alternative resolv file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#resolvfile DhcpDnsmasq#resolvfile}
  */
  readonly resolvfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq openwrt_dhcp_dnsmasq}
*/
export class DhcpDnsmasq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_dhcp_dnsmasq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpDnsmasq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpDnsmasq to import
  * @param importFromId The id of the existing DhcpDnsmasq that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpDnsmasq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_dhcp_dnsmasq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dnsmasq openwrt_dhcp_dnsmasq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpDnsmasqConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpDnsmasqConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_dhcp_dnsmasq',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authoritative = config.authoritative;
    this._domain = config.domain;
    this._domainneeded = config.domainneeded;
    this._ednspacketMax = config.ednspacketMax;
    this._expandhosts = config.expandhosts;
    this._id = config.id;
    this._leasefile = config.leasefile;
    this._local = config.local;
    this._localiseQueries = config.localiseQueries;
    this._localservice = config.localservice;
    this._readethers = config.readethers;
    this._rebindLocalhost = config.rebindLocalhost;
    this._rebindProtection = config.rebindProtection;
    this._resolvfile = config.resolvfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authoritative - computed: true, optional: true, required: false
  private _authoritative?: boolean | cdktf.IResolvable; 
  public get authoritative() {
    return this.getBooleanAttribute('authoritative');
  }
  public set authoritative(value: boolean | cdktf.IResolvable) {
    this._authoritative = value;
  }
  public resetAuthoritative() {
    this._authoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeInput() {
    return this._authoritative;
  }

  // domain - computed: true, optional: true, required: false
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

  // domainneeded - computed: true, optional: true, required: false
  private _domainneeded?: boolean | cdktf.IResolvable; 
  public get domainneeded() {
    return this.getBooleanAttribute('domainneeded');
  }
  public set domainneeded(value: boolean | cdktf.IResolvable) {
    this._domainneeded = value;
  }
  public resetDomainneeded() {
    this._domainneeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainneededInput() {
    return this._domainneeded;
  }

  // ednspacket_max - computed: true, optional: true, required: false
  private _ednspacketMax?: number; 
  public get ednspacketMax() {
    return this.getNumberAttribute('ednspacket_max');
  }
  public set ednspacketMax(value: number) {
    this._ednspacketMax = value;
  }
  public resetEdnspacketMax() {
    this._ednspacketMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednspacketMaxInput() {
    return this._ednspacketMax;
  }

  // expandhosts - computed: true, optional: true, required: false
  private _expandhosts?: boolean | cdktf.IResolvable; 
  public get expandhosts() {
    return this.getBooleanAttribute('expandhosts');
  }
  public set expandhosts(value: boolean | cdktf.IResolvable) {
    this._expandhosts = value;
  }
  public resetExpandhosts() {
    this._expandhosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandhostsInput() {
    return this._expandhosts;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // leasefile - computed: true, optional: true, required: false
  private _leasefile?: string; 
  public get leasefile() {
    return this.getStringAttribute('leasefile');
  }
  public set leasefile(value: string) {
    this._leasefile = value;
  }
  public resetLeasefile() {
    this._leasefile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasefileInput() {
    return this._leasefile;
  }

  // local - computed: true, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // localise_queries - computed: true, optional: true, required: false
  private _localiseQueries?: boolean | cdktf.IResolvable; 
  public get localiseQueries() {
    return this.getBooleanAttribute('localise_queries');
  }
  public set localiseQueries(value: boolean | cdktf.IResolvable) {
    this._localiseQueries = value;
  }
  public resetLocaliseQueries() {
    this._localiseQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localiseQueriesInput() {
    return this._localiseQueries;
  }

  // localservice - computed: true, optional: true, required: false
  private _localservice?: boolean | cdktf.IResolvable; 
  public get localservice() {
    return this.getBooleanAttribute('localservice');
  }
  public set localservice(value: boolean | cdktf.IResolvable) {
    this._localservice = value;
  }
  public resetLocalservice() {
    this._localservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localserviceInput() {
    return this._localservice;
  }

  // readethers - computed: true, optional: true, required: false
  private _readethers?: boolean | cdktf.IResolvable; 
  public get readethers() {
    return this.getBooleanAttribute('readethers');
  }
  public set readethers(value: boolean | cdktf.IResolvable) {
    this._readethers = value;
  }
  public resetReadethers() {
    this._readethers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readethersInput() {
    return this._readethers;
  }

  // rebind_localhost - computed: true, optional: true, required: false
  private _rebindLocalhost?: boolean | cdktf.IResolvable; 
  public get rebindLocalhost() {
    return this.getBooleanAttribute('rebind_localhost');
  }
  public set rebindLocalhost(value: boolean | cdktf.IResolvable) {
    this._rebindLocalhost = value;
  }
  public resetRebindLocalhost() {
    this._rebindLocalhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebindLocalhostInput() {
    return this._rebindLocalhost;
  }

  // rebind_protection - computed: true, optional: true, required: false
  private _rebindProtection?: boolean | cdktf.IResolvable; 
  public get rebindProtection() {
    return this.getBooleanAttribute('rebind_protection');
  }
  public set rebindProtection(value: boolean | cdktf.IResolvable) {
    this._rebindProtection = value;
  }
  public resetRebindProtection() {
    this._rebindProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebindProtectionInput() {
    return this._rebindProtection;
  }

  // resolvfile - computed: true, optional: true, required: false
  private _resolvfile?: string; 
  public get resolvfile() {
    return this.getStringAttribute('resolvfile');
  }
  public set resolvfile(value: string) {
    this._resolvfile = value;
  }
  public resetResolvfile() {
    this._resolvfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvfileInput() {
    return this._resolvfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authoritative: cdktf.booleanToTerraform(this._authoritative),
      domain: cdktf.stringToTerraform(this._domain),
      domainneeded: cdktf.booleanToTerraform(this._domainneeded),
      ednspacket_max: cdktf.numberToTerraform(this._ednspacketMax),
      expandhosts: cdktf.booleanToTerraform(this._expandhosts),
      id: cdktf.stringToTerraform(this._id),
      leasefile: cdktf.stringToTerraform(this._leasefile),
      local: cdktf.stringToTerraform(this._local),
      localise_queries: cdktf.booleanToTerraform(this._localiseQueries),
      localservice: cdktf.booleanToTerraform(this._localservice),
      readethers: cdktf.booleanToTerraform(this._readethers),
      rebind_localhost: cdktf.booleanToTerraform(this._rebindLocalhost),
      rebind_protection: cdktf.booleanToTerraform(this._rebindProtection),
      resolvfile: cdktf.stringToTerraform(this._resolvfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authoritative: {
        value: cdktf.booleanToHclTerraform(this._authoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domainneeded: {
        value: cdktf.booleanToHclTerraform(this._domainneeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ednspacket_max: {
        value: cdktf.numberToHclTerraform(this._ednspacketMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expandhosts: {
        value: cdktf.booleanToHclTerraform(this._expandhosts),
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
      leasefile: {
        value: cdktf.stringToHclTerraform(this._leasefile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local: {
        value: cdktf.stringToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localise_queries: {
        value: cdktf.booleanToHclTerraform(this._localiseQueries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      localservice: {
        value: cdktf.booleanToHclTerraform(this._localservice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      readethers: {
        value: cdktf.booleanToHclTerraform(this._readethers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rebind_localhost: {
        value: cdktf.booleanToHclTerraform(this._rebindLocalhost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rebind_protection: {
        value: cdktf.booleanToHclTerraform(this._rebindProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resolvfile: {
        value: cdktf.stringToHclTerraform(this._resolvfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
