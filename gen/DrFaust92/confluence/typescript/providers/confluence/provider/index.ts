// https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfluenceProviderConfig {
  /**
  * Confluence path context (Will default to /wiki if using an atlassian.net hostname)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#context ConfluenceProvider#context}
  */
  readonly context?: string;
  /**
  * Optional public Confluence Server hostname if different than API hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#public_site ConfluenceProvider#public_site}
  */
  readonly publicSite?: string;
  /**
  * Optional https or http scheme to use for public site URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#public_site_scheme ConfluenceProvider#public_site_scheme}
  */
  readonly publicSiteScheme?: string;
  /**
  * Confluence hostname (<name>.atlassian.net if using Cloud Confluence, otherwise hostname)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#site ConfluenceProvider#site}
  */
  readonly site: string;
  /**
  * Optional https or http scheme to use for API calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#site_scheme ConfluenceProvider#site_scheme}
  */
  readonly siteScheme?: string;
  /**
  * Confluence API Token for Cloud Confluence or password for Confluence Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#token ConfluenceProvider#token}
  */
  readonly token: string;
  /**
  * User's email address for Cloud Confluence or username for Confluence Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#user ConfluenceProvider#user}
  */
  readonly user: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#alias ConfluenceProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs confluence}
*/
export class ConfluenceProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfluenceProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfluenceProvider to import
  * @param importFromId The id of the existing ConfluenceProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfluenceProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/confluence/0.2.1/docs confluence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfluenceProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ConfluenceProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'confluence',
      terraformGeneratorMetadata: {
        providerName: 'confluence',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      terraformProviderSource: 'DrFaust92/confluence'
    });
    this._context = config.context;
    this._publicSite = config.publicSite;
    this._publicSiteScheme = config.publicSiteScheme;
    this._site = config.site;
    this._siteScheme = config.siteScheme;
    this._token = config.token;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this._context;
  }
  public set context(value: string | undefined) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // public_site - computed: false, optional: true, required: false
  private _publicSite?: string; 
  public get publicSite() {
    return this._publicSite;
  }
  public set publicSite(value: string | undefined) {
    this._publicSite = value;
  }
  public resetPublicSite() {
    this._publicSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSiteInput() {
    return this._publicSite;
  }

  // public_site_scheme - computed: false, optional: true, required: false
  private _publicSiteScheme?: string; 
  public get publicSiteScheme() {
    return this._publicSiteScheme;
  }
  public set publicSiteScheme(value: string | undefined) {
    this._publicSiteScheme = value;
  }
  public resetPublicSiteScheme() {
    this._publicSiteScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSiteSchemeInput() {
    return this._publicSiteScheme;
  }

  // site - computed: false, optional: false, required: true
  private _site?: string; 
  public get site() {
    return this._site;
  }
  public set site(value: string | undefined) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // site_scheme - computed: false, optional: true, required: false
  private _siteScheme?: string; 
  public get siteScheme() {
    return this._siteScheme;
  }
  public set siteScheme(value: string | undefined) {
    this._siteScheme = value;
  }
  public resetSiteScheme() {
    this._siteScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteSchemeInput() {
    return this._siteScheme;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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
      context: cdktf.stringToTerraform(this._context),
      public_site: cdktf.stringToTerraform(this._publicSite),
      public_site_scheme: cdktf.stringToTerraform(this._publicSiteScheme),
      site: cdktf.stringToTerraform(this._site),
      site_scheme: cdktf.stringToTerraform(this._siteScheme),
      token: cdktf.stringToTerraform(this._token),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_site: {
        value: cdktf.stringToHclTerraform(this._publicSite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_site_scheme: {
        value: cdktf.stringToHclTerraform(this._publicSiteScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_scheme: {
        value: cdktf.stringToHclTerraform(this._siteScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
