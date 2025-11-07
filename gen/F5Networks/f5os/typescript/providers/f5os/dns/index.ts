// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of DNS search domains. Example: `["internal.domain"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/dns#dns_domains Dns#dns_domains}
  */
  readonly dnsDomains?: string[];
  /**
  * List of DNS server IP addresses. Example: `["8.8.8.8", "1.1.1.1"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/dns#dns_servers Dns#dns_servers}
  */
  readonly dnsServers: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/dns f5os_dns}
*/
export class Dns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dns to import
  * @param importFromId The id of the existing Dns that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/dns f5os_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsConfig
  */
  public constructor(scope: Construct, id: string, config: DnsConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_dns',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsDomains = config.dnsDomains;
    this._dnsServers = config.dnsServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_domains - computed: true, optional: true, required: false
  private _dnsDomains?: string[]; 
  public get dnsDomains() {
    return this.getListAttribute('dns_domains');
  }
  public set dnsDomains(value: string[]) {
    this._dnsDomains = value;
  }
  public resetDnsDomains() {
    this._dnsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainsInput() {
    return this._dnsDomains;
  }

  // dns_servers - computed: false, optional: false, required: true
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsDomains),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
