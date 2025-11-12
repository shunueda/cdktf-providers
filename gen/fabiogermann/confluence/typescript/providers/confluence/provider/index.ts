// https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfluenceProviderConfig {
  /**
  * Confluence path context (Will default to /wiki if using an atlassian.net hostname)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#context ConfluenceProvider#context}
  */
  readonly context?: string;
  /**
  * Optional public Confluence Server hostname if different than API hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#public_site ConfluenceProvider#public_site}
  */
  readonly publicSite?: string;
  /**
  * Use https for public site URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#public_site_tls ConfluenceProvider#public_site_tls}
  */
  readonly publicSiteTls?: boolean | cdktf.IResolvable;
  /**
  * Confluence hostname (<name>.atlassian.net if using Cloud Confluence, otherwise hostname)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#site ConfluenceProvider#site}
  */
  readonly site: string;
  /**
  * Use https for API calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#site_tls ConfluenceProvider#site_tls}
  */
  readonly siteTls?: boolean | cdktf.IResolvable;
  /**
  * Confluence API Token for Cloud Confluence or password for Confluence Server/Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#token ConfluenceProvider#token}
  */
  readonly token: string;
  /**
  * User's email address for Cloud Confluence or username for Confluence Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#user ConfluenceProvider#user}
  */
  readonly user: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#alias ConfluenceProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs confluence}
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
  * @param importFromId The id of the existing ConfluenceProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfluenceProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs confluence} Resource
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
        providerVersion: '0.2.16',
        providerVersionConstraint: '0.2.16'
      },
      terraformProviderSource: 'fabiogermann/confluence'
    });
    this._context = config.context;
    this._publicSite = config.publicSite;
    this._publicSiteTls = config.publicSiteTls;
    this._site = config.site;
    this._siteTls = config.siteTls;
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

  // public_site_tls - computed: false, optional: true, required: false
  private _publicSiteTls?: boolean | cdktf.IResolvable; 
  public get publicSiteTls() {
    return this._publicSiteTls;
  }
  public set publicSiteTls(value: boolean | cdktf.IResolvable | undefined) {
    this._publicSiteTls = value;
  }
  public resetPublicSiteTls() {
    this._publicSiteTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSiteTlsInput() {
    return this._publicSiteTls;
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

  // site_tls - computed: false, optional: true, required: false
  private _siteTls?: boolean | cdktf.IResolvable; 
  public get siteTls() {
    return this._siteTls;
  }
  public set siteTls(value: boolean | cdktf.IResolvable | undefined) {
    this._siteTls = value;
  }
  public resetSiteTls() {
    this._siteTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTlsInput() {
    return this._siteTls;
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
      public_site_tls: cdktf.booleanToTerraform(this._publicSiteTls),
      site: cdktf.stringToTerraform(this._site),
      site_tls: cdktf.booleanToTerraform(this._siteTls),
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
      public_site_tls: {
        value: cdktf.booleanToHclTerraform(this._publicSiteTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_tls: {
        value: cdktf.booleanToHclTerraform(this._siteTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
