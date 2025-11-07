// https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GandiProviderConfig {
  /**
  * Prevent the Domain provider from taking certain actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs#dry_run GandiProvider#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * (DEPRECATED) A Gandi API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs#key GandiProvider#key}
  */
  readonly key?: string;
  /**
  * A Gandi API Personal Access Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs#personal_access_token GandiProvider#personal_access_token}
  */
  readonly personalAccessToken?: string;
  /**
  * (DEPRECATED) A Gandi Sharing ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs#sharing_id GandiProvider#sharing_id}
  */
  readonly sharingId?: string;
  /**
  * The Gandi API URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs#url GandiProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs#alias GandiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs gandi}
*/
export class GandiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gandi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GandiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GandiProvider to import
  * @param importFromId The id of the existing GandiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GandiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gandi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs gandi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GandiProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GandiProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gandi',
      terraformGeneratorMetadata: {
        providerName: 'gandi',
        providerVersion: '2.3.0'
      },
      terraformProviderSource: 'go-gandi/gandi'
    });
    this._dryRun = config.dryRun;
    this._key = config.key;
    this._personalAccessToken = config.personalAccessToken;
    this._sharingId = config.sharingId;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this._dryRun;
  }
  public set dryRun(value: boolean | cdktf.IResolvable | undefined) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this._personalAccessToken;
  }
  public set personalAccessToken(value: string | undefined) {
    this._personalAccessToken = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
  }

  // sharing_id - computed: false, optional: true, required: false
  private _sharingId?: string; 
  public get sharingId() {
    return this._sharingId;
  }
  public set sharingId(value: string | undefined) {
    this._sharingId = value;
  }
  public resetSharingId() {
    this._sharingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingIdInput() {
    return this._sharingId;
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
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      key: cdktf.stringToTerraform(this._key),
      personal_access_token: cdktf.stringToTerraform(this._personalAccessToken),
      sharing_id: cdktf.stringToTerraform(this._sharingId),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_access_token: {
        value: cdktf.stringToHclTerraform(this._personalAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing_id: {
        value: cdktf.stringToHclTerraform(this._sharingId),
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
