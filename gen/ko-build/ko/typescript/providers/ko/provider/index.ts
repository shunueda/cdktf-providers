// https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KoProviderConfig {
  /**
  * Default base image for builds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs#base_image KoProvider#base_image}
  */
  readonly baseImage?: string;
  /**
  * Basic auth to use to authorize requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs#basic_auth KoProvider#basic_auth}
  */
  readonly basicAuth?: string;
  /**
  * Container repository to publish images to. Defaults to `KO_DOCKER_REPO` env var
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs#repo KoProvider#repo}
  */
  readonly repo?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs#alias KoProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs ko}
*/
export class KoProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ko";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KoProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KoProvider to import
  * @param importFromId The id of the existing KoProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KoProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ko", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs ko} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KoProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KoProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ko',
      terraformGeneratorMetadata: {
        providerName: 'ko',
        providerVersion: '0.0.17',
        providerVersionConstraint: '0.0.17'
      },
      terraformProviderSource: 'ko-build/ko'
    });
    this._baseImage = config.baseImage;
    this._basicAuth = config.basicAuth;
    this._repo = config.repo;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_image - computed: false, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this._baseImage;
  }
  public set baseImage(value: string | undefined) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth?: string; 
  public get basicAuth() {
    return this._basicAuth;
  }
  public set basicAuth(value: string | undefined) {
    this._basicAuth = value;
  }
  public resetBasicAuth() {
    this._basicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this._repo;
  }
  public set repo(value: string | undefined) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
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
      base_image: cdktf.stringToTerraform(this._baseImage),
      basic_auth: cdktf.stringToTerraform(this._basicAuth),
      repo: cdktf.stringToTerraform(this._repo),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_image: {
        value: cdktf.stringToHclTerraform(this._baseImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth: {
        value: cdktf.stringToHclTerraform(this._basicAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
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
