// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssPushAuthKeyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Valid time, unit: second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config#auth_delta CssPushAuthKeyConfig#auth_delta}
  */
  readonly authDelta?: number;
  /**
  * Standby authentication key. No transfer means that the current value is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config#backup_auth_key CssPushAuthKeyConfig#backup_auth_key}
  */
  readonly backupAuthKey?: string;
  /**
  * Domain Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config#domain_name CssPushAuthKeyConfig#domain_name}
  */
  readonly domainName: string;
  /**
  * Enable or not, 0: Close, 1: Enable. No transfer means that the current value is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config#enable CssPushAuthKeyConfig#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config#id CssPushAuthKeyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Primary authentication key. No transfer means that the current value is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config#master_auth_key CssPushAuthKeyConfig#master_auth_key}
  */
  readonly masterAuthKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config tencentcloud_css_push_auth_key_config}
*/
export class CssPushAuthKeyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_push_auth_key_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssPushAuthKeyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssPushAuthKeyConfig to import
  * @param importFromId The id of the existing CssPushAuthKeyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssPushAuthKeyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_push_auth_key_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_push_auth_key_config tencentcloud_css_push_auth_key_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssPushAuthKeyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CssPushAuthKeyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_push_auth_key_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authDelta = config.authDelta;
    this._backupAuthKey = config.backupAuthKey;
    this._domainName = config.domainName;
    this._enable = config.enable;
    this._id = config.id;
    this._masterAuthKey = config.masterAuthKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // backup_auth_key - computed: false, optional: true, required: false
  private _backupAuthKey?: string; 
  public get backupAuthKey() {
    return this.getStringAttribute('backup_auth_key');
  }
  public set backupAuthKey(value: string) {
    this._backupAuthKey = value;
  }
  public resetBackupAuthKey() {
    this._backupAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAuthKeyInput() {
    return this._backupAuthKey;
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

  // master_auth_key - computed: false, optional: true, required: false
  private _masterAuthKey?: string; 
  public get masterAuthKey() {
    return this.getStringAttribute('master_auth_key');
  }
  public set masterAuthKey(value: string) {
    this._masterAuthKey = value;
  }
  public resetMasterAuthKey() {
    this._masterAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthKeyInput() {
    return this._masterAuthKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_delta: cdktf.numberToTerraform(this._authDelta),
      backup_auth_key: cdktf.stringToTerraform(this._backupAuthKey),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      master_auth_key: cdktf.stringToTerraform(this._masterAuthKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_delta: {
        value: cdktf.numberToHclTerraform(this._authDelta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_auth_key: {
        value: cdktf.stringToHclTerraform(this._backupAuthKey),
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
      master_auth_key: {
        value: cdktf.stringToHclTerraform(this._masterAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
