// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dasb_bind_device_account_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbBindDeviceAccountPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dasb_bind_device_account_password#device_account_id DasbBindDeviceAccountPassword#device_account_id}
  */
  readonly deviceAccountId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dasb_bind_device_account_password#id DasbBindDeviceAccountPassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Host account password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dasb_bind_device_account_password#password DasbBindDeviceAccountPassword#password}
  */
  readonly password: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dasb_bind_device_account_password tencentcloud_dasb_bind_device_account_password}
*/
export class DasbBindDeviceAccountPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_bind_device_account_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbBindDeviceAccountPassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbBindDeviceAccountPassword to import
  * @param importFromId The id of the existing DasbBindDeviceAccountPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dasb_bind_device_account_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbBindDeviceAccountPassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_bind_device_account_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dasb_bind_device_account_password tencentcloud_dasb_bind_device_account_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbBindDeviceAccountPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: DasbBindDeviceAccountPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_bind_device_account_password',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._password = config.password;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_account_id: cdktf.numberToTerraform(this._deviceAccountId),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
