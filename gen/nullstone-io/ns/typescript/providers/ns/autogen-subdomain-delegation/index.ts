// https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain_delegation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutogenSubdomainDelegationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The autogen subdomain belongs to this env.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain_delegation#env_id AutogenSubdomainDelegation#env_id}
  */
  readonly envId: number;
  /**
  * A list of nameservers that refer to a DNS zone where this subdomain can delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain_delegation#nameservers AutogenSubdomainDelegation#nameservers}
  */
  readonly nameservers: string[];
  /**
  * The autogen subdomain belongs to this subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain_delegation#subdomain_id AutogenSubdomainDelegation#subdomain_id}
  */
  readonly subdomainId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain_delegation ns_autogen_subdomain_delegation}
*/
export class AutogenSubdomainDelegation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_autogen_subdomain_delegation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutogenSubdomainDelegation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutogenSubdomainDelegation to import
  * @param importFromId The id of the existing AutogenSubdomainDelegation that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain_delegation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutogenSubdomainDelegation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_autogen_subdomain_delegation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/resources/autogen_subdomain_delegation ns_autogen_subdomain_delegation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutogenSubdomainDelegationConfig
  */
  public constructor(scope: Construct, id: string, config: AutogenSubdomainDelegationConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_autogen_subdomain_delegation',
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
    this._nameservers = config.nameservers;
    this._subdomainId = config.subdomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nameservers - computed: false, optional: false, required: true
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
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
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
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
      nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
