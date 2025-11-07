// https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/domain_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/domain_alias#domain_alias_name DomainAlias#domain_alias_name}
  */
  readonly domainAliasName: string;
  /**
  * The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/domain_alias#parent_domain_name DomainAlias#parent_domain_name}
  */
  readonly parentDomainName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/domain_alias googleworkspace_domain_alias}
*/
export class DomainAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_domain_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainAlias to import
  * @param importFromId The id of the existing DomainAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/domain_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_domain_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/domain_alias googleworkspace_domain_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DomainAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_domain_alias',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainAliasName = config.domainAliasName;
    this._parentDomainName = config.parentDomainName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // domain_alias_name - computed: false, optional: false, required: true
  private _domainAliasName?: string; 
  public get domainAliasName() {
    return this.getStringAttribute('domain_alias_name');
  }
  public set domainAliasName(value: string) {
    this._domainAliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAliasNameInput() {
    return this._domainAliasName;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_domain_name - computed: false, optional: true, required: false
  private _parentDomainName?: string; 
  public get parentDomainName() {
    return this.getStringAttribute('parent_domain_name');
  }
  public set parentDomainName(value: string) {
    this._parentDomainName = value;
  }
  public resetParentDomainName() {
    this._parentDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDomainNameInput() {
    return this._parentDomainName;
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_alias_name: cdktf.stringToTerraform(this._domainAliasName),
      parent_domain_name: cdktf.stringToTerraform(this._parentDomainName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_alias_name: {
        value: cdktf.stringToHclTerraform(this._domainAliasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_domain_name: {
        value: cdktf.stringToHclTerraform(this._parentDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
