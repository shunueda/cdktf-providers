// https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PuppetcaProviderConfig {
  /**
  * Puppet CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs#ca PuppetcaProvider#ca}
  */
  readonly ca?: string;
  /**
  * Certificate to authenticate against Puppet CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs#cert PuppetcaProvider#cert}
  */
  readonly cert?: string;
  /**
  * Private key to authenticate against Puppet CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs#key PuppetcaProvider#key}
  */
  readonly key?: string;
  /**
  * URL of the Puppet CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs#url PuppetcaProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs#alias PuppetcaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs puppetca}
*/
export class PuppetcaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "puppetca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PuppetcaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PuppetcaProvider to import
  * @param importFromId The id of the existing PuppetcaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PuppetcaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "puppetca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs puppetca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PuppetcaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PuppetcaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'puppetca',
      terraformGeneratorMetadata: {
        providerName: 'puppetca',
        providerVersion: '2.0.0'
      },
      terraformProviderSource: 'camptocamp/puppetca'
    });
    this._ca = config.ca;
    this._cert = config.cert;
    this._key = config.key;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this._ca;
  }
  public set ca(value: string | undefined) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
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
      ca: cdktf.stringToTerraform(this._ca),
      cert: cdktf.stringToTerraform(this._cert),
      key: cdktf.stringToTerraform(this._key),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
