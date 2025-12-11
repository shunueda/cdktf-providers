// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssPlayAuthKeyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alternate key for authentication. No transfer means that the current value is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config#auth_back_key CssPlayAuthKeyConfig#auth_back_key}
  */
  readonly authBackKey?: string;
  /**
  * Valid time, unit: second. No transfer means that the current value is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config#auth_delta CssPlayAuthKeyConfig#auth_delta}
  */
  readonly authDelta?: number;
  /**
  * Authentication key. No transfer means that the current value is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config#auth_key CssPlayAuthKeyConfig#auth_key}
  */
  readonly authKey?: string;
  /**
  * Domain Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config#domain_name CssPlayAuthKeyConfig#domain_name}
  */
  readonly domainName: string;
  /**
  * Enable or not, 0: Close, 1: Enable. No transfer means that the current value is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config#enable CssPlayAuthKeyConfig#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config#id CssPlayAuthKeyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config tencentcloud_css_play_auth_key_config}
*/
export class CssPlayAuthKeyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_play_auth_key_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssPlayAuthKeyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssPlayAuthKeyConfig to import
  * @param importFromId The id of the existing CssPlayAuthKeyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssPlayAuthKeyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_play_auth_key_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/css_play_auth_key_config tencentcloud_css_play_auth_key_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssPlayAuthKeyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CssPlayAuthKeyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_play_auth_key_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authBackKey = config.authBackKey;
    this._authDelta = config.authDelta;
    this._authKey = config.authKey;
    this._domainName = config.domainName;
    this._enable = config.enable;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_back_key - computed: false, optional: true, required: false
  private _authBackKey?: string; 
  public get authBackKey() {
    return this.getStringAttribute('auth_back_key');
  }
  public set authBackKey(value: string) {
    this._authBackKey = value;
  }
  public resetAuthBackKey() {
    this._authBackKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBackKeyInput() {
    return this._authBackKey;
  }

  // auth_delta - computed: false, optional: true, required: false
  private _authDelta?: number; 
  public get authDelta() {
    return this.getNumberAttribute('auth_delta');
  }
  public set authDelta(value: number) {
    this._authDelta = value;
  }
  public resetAuthDelta() {
    this._authDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDeltaInput() {
    return this._authDelta;
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_back_key: cdktf.stringToTerraform(this._authBackKey),
      auth_delta: cdktf.numberToTerraform(this._authDelta),
      auth_key: cdktf.stringToTerraform(this._authKey),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_back_key: {
        value: cdktf.stringToHclTerraform(this._authBackKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_delta: {
        value: cdktf.numberToHclTerraform(this._authDelta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
