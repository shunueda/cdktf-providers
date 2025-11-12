// https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProdvanaProviderConfig {
  /**
  * An API token generated with permissions to this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs#api_token ProdvanaProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * (Internal Only) The base domain to connect to, the default is runprodvana.com -- only change this if you know what you're doing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs#base_domain ProdvanaProvider#base_domain}
  */
  readonly baseDomain?: string;
  /**
  * Prodvana organization to authenticate with (you can find this in your Org's url: <org>.prodvana.io)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs#org_slug ProdvanaProvider#org_slug}
  */
  readonly orgSlug?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs#alias ProdvanaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs prodvana}
*/
export class ProdvanaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prodvana";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProdvanaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProdvanaProvider to import
  * @param importFromId The id of the existing ProdvanaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProdvanaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prodvana", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs prodvana} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProdvanaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProdvanaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prodvana',
      terraformGeneratorMetadata: {
        providerName: 'prodvana',
        providerVersion: '0.1.25',
        providerVersionConstraint: '0.1.25'
      },
      terraformProviderSource: 'prodvana/prodvana'
    });
    this._apiToken = config.apiToken;
    this._baseDomain = config.baseDomain;
    this._orgSlug = config.orgSlug;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // base_domain - computed: false, optional: true, required: false
  private _baseDomain?: string; 
  public get baseDomain() {
    return this._baseDomain;
  }
  public set baseDomain(value: string | undefined) {
    this._baseDomain = value;
  }
  public resetBaseDomain() {
    this._baseDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDomainInput() {
    return this._baseDomain;
  }

  // org_slug - computed: false, optional: true, required: false
  private _orgSlug?: string; 
  public get orgSlug() {
    return this._orgSlug;
  }
  public set orgSlug(value: string | undefined) {
    this._orgSlug = value;
  }
  public resetOrgSlug() {
    this._orgSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgSlugInput() {
    return this._orgSlug;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      base_domain: cdktf.stringToTerraform(this._baseDomain),
      org_slug: cdktf.stringToTerraform(this._orgSlug),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_domain: {
        value: cdktf.stringToHclTerraform(this._baseDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_slug: {
        value: cdktf.stringToHclTerraform(this._orgSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
