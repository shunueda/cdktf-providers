// https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChefProviderConfig {
  /**
  * If set, the Chef client will permit unverifiable SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs#allow_unverified_ssl ChefProvider#allow_unverified_ssl}
  */
  readonly allowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * Name of a registered client within the Chef server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs#client_name ChefProvider#client_name}
  */
  readonly clientName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs#key_material ChefProvider#key_material}
  */
  readonly keyMaterial?: string;
  /**
  * PEM-formatted private key for client authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs#private_key_pem ChefProvider#private_key_pem}
  */
  readonly privateKeyPem?: string;
  /**
  * URL of the root of the target Chef server or organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs#server_url ChefProvider#server_url}
  */
  readonly serverUrl: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs#alias ChefProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs chef}
*/
export class ChefProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chef";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChefProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChefProvider to import
  * @param importFromId The id of the existing ChefProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChefProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chef", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs chef} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChefProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ChefProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'chef',
      terraformGeneratorMetadata: {
        providerName: 'chef',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      terraformProviderSource: 'terrycain/chef'
    });
    this._allowUnverifiedSsl = config.allowUnverifiedSsl;
    this._clientName = config.clientName;
    this._keyMaterial = config.keyMaterial;
    this._privateKeyPem = config.privateKeyPem;
    this._serverUrl = config.serverUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unverified_ssl - computed: false, optional: true, required: false
  private _allowUnverifiedSsl?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedSsl() {
    return this._allowUnverifiedSsl;
  }
  public set allowUnverifiedSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._allowUnverifiedSsl = value;
  }
  public resetAllowUnverifiedSsl() {
    this._allowUnverifiedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedSslInput() {
    return this._allowUnverifiedSsl;
  }

  // client_name - computed: false, optional: false, required: true
  private _clientName?: string; 
  public get clientName() {
    return this._clientName;
  }
  public set clientName(value: string | undefined) {
    this._clientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // key_material - computed: false, optional: true, required: false
  private _keyMaterial?: string; 
  public get keyMaterial() {
    return this._keyMaterial;
  }
  public set keyMaterial(value: string | undefined) {
    this._keyMaterial = value;
  }
  public resetKeyMaterial() {
    this._keyMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMaterialInput() {
    return this._keyMaterial;
  }

  // private_key_pem - computed: false, optional: true, required: false
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this._privateKeyPem;
  }
  public set privateKeyPem(value: string | undefined) {
    this._privateKeyPem = value;
  }
  public resetPrivateKeyPem() {
    this._privateKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
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
      allow_unverified_ssl: cdktf.booleanToTerraform(this._allowUnverifiedSsl),
      client_name: cdktf.stringToTerraform(this._clientName),
      key_material: cdktf.stringToTerraform(this._keyMaterial),
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unverified_ssl: {
        value: cdktf.booleanToHclTerraform(this._allowUnverifiedSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_material: {
        value: cdktf.stringToHclTerraform(this._keyMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_pem: {
        value: cdktf.stringToHclTerraform(this._privateKeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
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
