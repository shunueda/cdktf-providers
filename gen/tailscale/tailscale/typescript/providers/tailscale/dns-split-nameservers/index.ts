// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_split_nameservers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSplitNameserversConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain to configure split DNS for. Requests for this domain will be resolved using the provided nameservers. Changing this will force the resource to be recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_split_nameservers#domain DnsSplitNameservers#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_split_nameservers#id DnsSplitNameservers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Devices on your network will use these nameservers to resolve DNS names. IPv4 or IPv6 addresses are accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_split_nameservers#nameservers DnsSplitNameservers#nameservers}
  */
  readonly nameservers: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_split_nameservers tailscale_dns_split_nameservers}
*/
export class DnsSplitNameservers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_dns_split_nameservers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSplitNameservers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSplitNameservers to import
  * @param importFromId The id of the existing DnsSplitNameservers that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_split_nameservers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSplitNameservers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_dns_split_nameservers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_split_nameservers tailscale_dns_split_nameservers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSplitNameserversConfig
  */
  public constructor(scope: Construct, id: string, config: DnsSplitNameserversConfig) {
    super(scope, id, {
      terraformResourceType: 'tailscale_dns_split_nameservers',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._nameservers = config.nameservers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // nameservers - computed: false, optional: false, required: true
  private _nameservers?: string[]; 
  public get nameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('nameservers'));
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameservers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
