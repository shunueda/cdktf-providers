// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbBindDeviceAccountPrivateKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key#device_account_id DasbBindDeviceAccountPrivateKey#device_account_id}
  */
  readonly deviceAccountId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key#id DasbBindDeviceAccountPrivateKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Host account private key, the latest length is 128 bytes, the maximum length is 8192 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key#private_key DasbBindDeviceAccountPrivateKey#private_key}
  */
  readonly privateKey: string;
  /**
  * Host account private key password, maximum length 256 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key#private_key_password DasbBindDeviceAccountPrivateKey#private_key_password}
  */
  readonly privateKeyPassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key tencentcloud_dasb_bind_device_account_private_key}
*/
export class DasbBindDeviceAccountPrivateKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_bind_device_account_private_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbBindDeviceAccountPrivateKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbBindDeviceAccountPrivateKey to import
  * @param importFromId The id of the existing DasbBindDeviceAccountPrivateKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbBindDeviceAccountPrivateKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_bind_device_account_private_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dasb_bind_device_account_private_key tencentcloud_dasb_bind_device_account_private_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbBindDeviceAccountPrivateKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DasbBindDeviceAccountPrivateKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_bind_device_account_private_key',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceAccountId = config.deviceAccountId;
    this._id = config.id;
    this._privateKey = config.privateKey;
    this._privateKeyPassword = config.privateKeyPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_account_id - computed: false, optional: false, required: true
  private _deviceAccountId?: number; 
  public get deviceAccountId() {
    return this.getNumberAttribute('device_account_id');
  }
  public set deviceAccountId(value: number) {
    this._deviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAccountIdInput() {
    return this._deviceAccountId;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_password - computed: false, optional: true, required: false
  private _privateKeyPassword?: string; 
  public get privateKeyPassword() {
    return this.getStringAttribute('private_key_password');
  }
  public set privateKeyPassword(value: string) {
    this._privateKeyPassword = value;
  }
  public resetPrivateKeyPassword() {
    this._privateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPasswordInput() {
    return this._privateKeyPassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_account_id: cdktf.numberToTerraform(this._deviceAccountId),
      id: cdktf.stringToTerraform(this._id),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_password: cdktf.stringToTerraform(this._privateKeyPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_account_id: {
        value: cdktf.numberToHclTerraform(this._deviceAccountId),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_password: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
