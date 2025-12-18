// https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AstroProviderConfig {
  /**
  * API host to use for the provider. Default is `https://api.astronomer.io`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs#host AstroProvider#host}
  */
  readonly host?: string;
  /**
  * Organization ID this provider will operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs#organization_id AstroProvider#organization_id}
  */
  readonly organizationId: string;
  /**
  * Astro API Token. Can be set with an `ASTRO_API_TOKEN` env var.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs#token AstroProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs#alias AstroProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs astro}
*/
export class AstroProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AstroProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AstroProvider to import
  * @param importFromId The id of the existing AstroProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AstroProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs astro} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AstroProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AstroProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'astro',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.10',
        providerVersionConstraint: '1.0.10'
      },
      terraformProviderSource: 'astronomer/astro'
    });
    this._host = config.host;
    this._organizationId = config.organizationId;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string | undefined) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      host: cdktf.stringToTerraform(this._host),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
