// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgecrewProviderConfig {
  /**
  * Access key for Prisma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs#accesskeyid BridgecrewProvider#accesskeyid}
  */
  readonly accesskeyid?: string;
  /**
  * URL for the Prisma, if set overrides the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs#prisma BridgecrewProvider#prisma}
  */
  readonly prisma?: string;
  /**
  * Secret Key for Prisma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs#secretkey BridgecrewProvider#secretkey}
  */
  readonly secretkey?: string;
  /**
  * API Token for Bridgecrew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs#token BridgecrewProvider#token}
  */
  readonly token?: string;
  /**
  * URL for the Bridgecrew Platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs#url BridgecrewProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs#alias BridgecrewProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs bridgecrew}
*/
export class BridgecrewProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BridgecrewProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BridgecrewProvider to import
  * @param importFromId The id of the existing BridgecrewProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BridgecrewProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs bridgecrew} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgecrewProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BridgecrewProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew',
      terraformGeneratorMetadata: {
        providerName: 'bridgecrew',
        providerVersion: '0.3.7',
        providerVersionConstraint: '0.3.7'
      },
      terraformProviderSource: 'PaloAltoNetworks/bridgecrew'
    });
    this._accesskeyid = config.accesskeyid;
    this._prisma = config.prisma;
    this._secretkey = config.secretkey;
    this._token = config.token;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accesskeyid - computed: false, optional: true, required: false
  private _accesskeyid?: string; 
  public get accesskeyid() {
    return this._accesskeyid;
  }
  public set accesskeyid(value: string | undefined) {
    this._accesskeyid = value;
  }
  public resetAccesskeyid() {
    this._accesskeyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accesskeyidInput() {
    return this._accesskeyid;
  }

  // prisma - computed: false, optional: true, required: false
  private _prisma?: string; 
  public get prisma() {
    return this._prisma;
  }
  public set prisma(value: string | undefined) {
    this._prisma = value;
  }
  public resetPrisma() {
    this._prisma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prismaInput() {
    return this._prisma;
  }

  // secretkey - computed: false, optional: true, required: false
  private _secretkey?: string; 
  public get secretkey() {
    return this._secretkey;
  }
  public set secretkey(value: string | undefined) {
    this._secretkey = value;
  }
  public resetSecretkey() {
    this._secretkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretkeyInput() {
    return this._secretkey;
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
      accesskeyid: cdktf.stringToTerraform(this._accesskeyid),
      prisma: cdktf.stringToTerraform(this._prisma),
      secretkey: cdktf.stringToTerraform(this._secretkey),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accesskeyid: {
        value: cdktf.stringToHclTerraform(this._accesskeyid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prisma: {
        value: cdktf.stringToHclTerraform(this._prisma),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secretkey: {
        value: cdktf.stringToHclTerraform(this._secretkey),
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
