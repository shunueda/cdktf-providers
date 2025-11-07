// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain#domain Domain#domain}
  */
  readonly domain: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain#workspace_domain Domain#workspace_domain}
  */
  readonly workspaceDomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain buddy_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/domain buddy_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_domain',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1'
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
    this._workspaceDomain = config.workspaceDomain;
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // workspace_domain - computed: false, optional: false, required: true
  private _workspaceDomain?: string; 
  public get workspaceDomain() {
    return this.getStringAttribute('workspace_domain');
  }
  public set workspaceDomain(value: string) {
    this._workspaceDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceDomainInput() {
    return this._workspaceDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      workspace_domain: cdktf.stringToTerraform(this._workspaceDomain),
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
      workspace_domain: {
        value: cdktf.stringToHclTerraform(this._workspaceDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
