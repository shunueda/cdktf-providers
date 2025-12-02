// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CycloidProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs#jwt CycloidProvider#jwt}
  */
  readonly jwt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs#organization_canonical CycloidProvider#organization_canonical}
  */
  readonly organizationCanonical: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs#url CycloidProvider#url}
  */
  readonly url: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs#alias CycloidProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs cycloid}
*/
export class CycloidProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CycloidProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CycloidProvider to import
  * @param importFromId The id of the existing CycloidProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CycloidProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs cycloid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CycloidProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CycloidProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.24',
        providerVersionConstraint: '0.0.24'
      },
      terraformProviderSource: 'cycloidio/cycloid'
    });
    this._jwt = config.jwt;
    this._organizationCanonical = config.organizationCanonical;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jwt - computed: false, optional: false, required: true
  private _jwt?: string; 
  public get jwt() {
    return this._jwt;
  }
  public set jwt(value: string | undefined) {
    this._jwt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt;
  }

  // organization_canonical - computed: false, optional: false, required: true
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this._organizationCanonical;
  }
  public set organizationCanonical(value: string | undefined) {
    this._organizationCanonical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      jwt: cdktf.stringToTerraform(this._jwt),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jwt: {
        value: cdktf.stringToHclTerraform(this._jwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
