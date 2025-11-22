// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SumologicProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs#access_id SumologicProvider#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs#access_key SumologicProvider#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs#admin_mode SumologicProvider#admin_mode}
  */
  readonly adminMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs#base_url SumologicProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs#environment SumologicProvider#environment}
  */
  readonly environment?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs#alias SumologicProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs sumologic}
*/
export class SumologicProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SumologicProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SumologicProvider to import
  * @param importFromId The id of the existing SumologicProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SumologicProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs sumologic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SumologicProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SumologicProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      terraformProviderSource: 'SumoLogic/sumologic'
    });
    this._accessId = config.accessId;
    this._accessKey = config.accessKey;
    this._adminMode = config.adminMode;
    this._baseUrl = config.baseUrl;
    this._environment = config.environment;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this._accessId;
  }
  public set accessId(value: string | undefined) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // admin_mode - computed: false, optional: true, required: false
  private _adminMode?: boolean | cdktf.IResolvable; 
  public get adminMode() {
    return this._adminMode;
  }
  public set adminMode(value: boolean | cdktf.IResolvable | undefined) {
    this._adminMode = value;
  }
  public resetAdminMode() {
    this._adminMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminModeInput() {
    return this._adminMode;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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
      access_id: cdktf.stringToTerraform(this._accessId),
      access_key: cdktf.stringToTerraform(this._accessKey),
      admin_mode: cdktf.booleanToTerraform(this._adminMode),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      environment: cdktf.stringToTerraform(this._environment),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_id: {
        value: cdktf.stringToHclTerraform(this._accessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_mode: {
        value: cdktf.booleanToHclTerraform(this._adminMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
