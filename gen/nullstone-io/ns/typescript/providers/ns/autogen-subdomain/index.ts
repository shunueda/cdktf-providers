// https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutogenSubdomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The autogen subdomain belongs to this env.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain#env_id AutogenSubdomain#env_id}
  */
  readonly envId: number;
  /**
  * The autogen subdomain belongs to this subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain#subdomain_id AutogenSubdomain#subdomain_id}
  */
  readonly subdomainId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain ns_autogen_subdomain}
*/
export class AutogenSubdomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_autogen_subdomain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutogenSubdomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutogenSubdomain to import
  * @param importFromId The id of the existing AutogenSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutogenSubdomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_autogen_subdomain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain ns_autogen_subdomain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutogenSubdomainConfig
  */
  public constructor(scope: Construct, id: string, config: AutogenSubdomainConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_autogen_subdomain',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.0',
        providerVersionConstraint: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envId = config.envId;
    this._subdomainId = config.subdomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subdomain_id - computed: false, optional: false, required: true
  private _subdomainId?: number; 
  public get subdomainId() {
    return this.getNumberAttribute('subdomain_id');
  }
  public set subdomainId(value: number) {
    this._subdomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainIdInput() {
    return this._subdomainId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_id: cdktf.numberToTerraform(this._envId),
      subdomain_id: cdktf.numberToTerraform(this._subdomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subdomain_id: {
        value: cdktf.numberToHclTerraform(this._subdomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
