// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZedcloudProviderConfig {
  /**
  * ZEDCloud API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs#zedcloud_token ZedcloudProvider#zedcloud_token}
  */
  readonly zedcloudToken?: string;
  /**
  * ZEDCloud url. Ex: https://zedcontrol.zededa.net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs#zedcloud_url ZedcloudProvider#zedcloud_url}
  */
  readonly zedcloudUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs#alias ZedcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs zedcloud}
*/
export class ZedcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZedcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZedcloudProvider to import
  * @param importFromId The id of the existing ZedcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZedcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs zedcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZedcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZedcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zedcloud',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      terraformProviderSource: 'zededa/zedcloud'
    });
    this._zedcloudToken = config.zedcloudToken;
    this._zedcloudUrl = config.zedcloudUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // zedcloud_token - computed: false, optional: true, required: false
  private _zedcloudToken?: string; 
  public get zedcloudToken() {
    return this._zedcloudToken;
  }
  public set zedcloudToken(value: string | undefined) {
    this._zedcloudToken = value;
  }
  public resetZedcloudToken() {
    this._zedcloudToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zedcloudTokenInput() {
    return this._zedcloudToken;
  }

  // zedcloud_url - computed: false, optional: true, required: false
  private _zedcloudUrl?: string; 
  public get zedcloudUrl() {
    return this._zedcloudUrl;
  }
  public set zedcloudUrl(value: string | undefined) {
    this._zedcloudUrl = value;
  }
  public resetZedcloudUrl() {
    this._zedcloudUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zedcloudUrlInput() {
    return this._zedcloudUrl;
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
      zedcloud_token: cdktf.stringToTerraform(this._zedcloudToken),
      zedcloud_url: cdktf.stringToTerraform(this._zedcloudUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      zedcloud_token: {
        value: cdktf.stringToHclTerraform(this._zedcloudToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zedcloud_url: {
        value: cdktf.stringToHclTerraform(this._zedcloudUrl),
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
