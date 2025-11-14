// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnSslWebPortalSplitdnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#adom ObjectVpnSslWebPortalSplitdns#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#dns_server1 ObjectVpnSslWebPortalSplitdns#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#dns_server2 ObjectVpnSslWebPortalSplitdns#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#domains ObjectVpnSslWebPortalSplitdns#domains}
  */
  readonly domains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#fosid ObjectVpnSslWebPortalSplitdns#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#id ObjectVpnSslWebPortalSplitdns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#ipv6_dns_server1 ObjectVpnSslWebPortalSplitdns#ipv6_dns_server1}
  */
  readonly ipv6DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#ipv6_dns_server2 ObjectVpnSslWebPortalSplitdns#ipv6_dns_server2}
  */
  readonly ipv6DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#portal ObjectVpnSslWebPortalSplitdns#portal}
  */
  readonly portal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#scopetype ObjectVpnSslWebPortalSplitdns#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns fortimanager_object_vpn_ssl_web_portal_splitdns}
*/
export class ObjectVpnSslWebPortalSplitdns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ssl_web_portal_splitdns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnSslWebPortalSplitdns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnSslWebPortalSplitdns to import
  * @param importFromId The id of the existing ObjectVpnSslWebPortalSplitdns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnSslWebPortalSplitdns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ssl_web_portal_splitdns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_splitdns fortimanager_object_vpn_ssl_web_portal_splitdns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnSslWebPortalSplitdnsConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnSslWebPortalSplitdnsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ssl_web_portal_splitdns',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dnsServer1 = config.dnsServer1;
    this._dnsServer2 = config.dnsServer2;
    this._domains = config.domains;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ipv6DnsServer1 = config.ipv6DnsServer1;
    this._ipv6DnsServer2 = config.ipv6DnsServer2;
    this._portal = config.portal;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dns_server1 - computed: false, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: false, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string; 
  public get domains() {
    return this.getStringAttribute('domains');
  }
  public set domains(value: string) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // ipv6_dns_server1 - computed: false, optional: true, required: false
  private _ipv6DnsServer1?: string; 
  public get ipv6DnsServer1() {
    return this.getStringAttribute('ipv6_dns_server1');
  }
  public set ipv6DnsServer1(value: string) {
    this._ipv6DnsServer1 = value;
  }
  public resetIpv6DnsServer1() {
    this._ipv6DnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer1Input() {
    return this._ipv6DnsServer1;
  }

  // ipv6_dns_server2 - computed: false, optional: true, required: false
  private _ipv6DnsServer2?: string; 
  public get ipv6DnsServer2() {
    return this.getStringAttribute('ipv6_dns_server2');
  }
  public set ipv6DnsServer2(value: string) {
    this._ipv6DnsServer2 = value;
  }
  public resetIpv6DnsServer2() {
    this._ipv6DnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer2Input() {
    return this._ipv6DnsServer2;
  }

  // portal - computed: false, optional: false, required: true
  private _portal?: string; 
  public get portal() {
    return this.getStringAttribute('portal');
  }
  public set portal(value: string) {
    this._portal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dns_server1: cdktf.stringToTerraform(this._dnsServer1),
      dns_server2: cdktf.stringToTerraform(this._dnsServer2),
      domains: cdktf.stringToTerraform(this._domains),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ipv6_dns_server1: cdktf.stringToTerraform(this._ipv6DnsServer1),
      ipv6_dns_server2: cdktf.stringToTerraform(this._ipv6DnsServer2),
      portal: cdktf.stringToTerraform(this._portal),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server1: {
        value: cdktf.stringToHclTerraform(this._dnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server2: {
        value: cdktf.stringToHclTerraform(this._dnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.stringToHclTerraform(this._domains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      ipv6_dns_server1: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dns_server2: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal: {
        value: cdktf.stringToHclTerraform(this._portal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
