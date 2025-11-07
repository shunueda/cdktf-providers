// https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyhubProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs#clientid KeyhubProvider#clientid}
  */
  readonly clientid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs#clientsecret KeyhubProvider#clientsecret}
  */
  readonly clientsecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs#issuer KeyhubProvider#issuer}
  */
  readonly issuer?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs#alias KeyhubProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs keyhub}
*/
export class KeyhubProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyhubProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyhubProvider to import
  * @param importFromId The id of the existing KeyhubProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyhubProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs keyhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyhubProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KeyhubProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keyhub',
      terraformGeneratorMetadata: {
        providerName: 'keyhub',
        providerVersion: '2.44.0'
      },
      terraformProviderSource: 'topicuskeyhub/keyhub'
    });
    this._clientid = config.clientid;
    this._clientsecret = config.clientsecret;
    this._issuer = config.issuer;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientid - computed: false, optional: true, required: false
  private _clientid?: string; 
  public get clientid() {
    return this._clientid;
  }
  public set clientid(value: string | undefined) {
    this._clientid = value;
  }
  public resetClientid() {
    this._clientid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // clientsecret - computed: false, optional: true, required: false
  private _clientsecret?: string; 
  public get clientsecret() {
    return this._clientsecret;
  }
  public set clientsecret(value: string | undefined) {
    this._clientsecret = value;
  }
  public resetClientsecret() {
    this._clientsecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecretInput() {
    return this._clientsecret;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this._issuer;
  }
  public set issuer(value: string | undefined) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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
      clientid: cdktf.stringToTerraform(this._clientid),
      clientsecret: cdktf.stringToTerraform(this._clientsecret),
      issuer: cdktf.stringToTerraform(this._issuer),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientid: {
        value: cdktf.stringToHclTerraform(this._clientid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecret: {
        value: cdktf.stringToHclTerraform(this._clientsecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
