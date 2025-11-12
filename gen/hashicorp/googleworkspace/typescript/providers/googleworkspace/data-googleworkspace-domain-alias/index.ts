// https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/domain_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleworkspaceDomainAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/domain_alias#domain_alias_name DataGoogleworkspaceDomainAlias#domain_alias_name}
  */
  readonly domainAliasName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/domain_alias googleworkspace_domain_alias}
*/
export class DataGoogleworkspaceDomainAlias extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_domain_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleworkspaceDomainAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleworkspaceDomainAlias to import
  * @param importFromId The id of the existing DataGoogleworkspaceDomainAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/domain_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleworkspaceDomainAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_domain_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/data-sources/domain_alias googleworkspace_domain_alias} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleworkspaceDomainAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleworkspaceDomainAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_domain_alias',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
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

  // parent_domain_name - computed: true, optional: false, required: false
  public get parentDomainName() {
    return this.getStringAttribute('parent_domain_name');
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
