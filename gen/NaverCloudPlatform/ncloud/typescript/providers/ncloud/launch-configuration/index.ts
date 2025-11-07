// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#id LaunchConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#init_script_no LaunchConfiguration#init_script_no}
  */
  readonly initScriptNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#is_encrypted_volume LaunchConfiguration#is_encrypted_volume}
  */
  readonly isEncryptedVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#login_key_name LaunchConfiguration#login_key_name}
  */
  readonly loginKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#member_server_image_no LaunchConfiguration#member_server_image_no}
  */
  readonly memberServerImageNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#name LaunchConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#server_image_product_code LaunchConfiguration#server_image_product_code}
  */
  readonly serverImageProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#server_product_code LaunchConfiguration#server_product_code}
  */
  readonly serverProductCode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration ncloud_launch_configuration}
*/
export class LaunchConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_launch_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LaunchConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LaunchConfiguration to import
  * @param importFromId The id of the existing LaunchConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LaunchConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_launch_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/launch_configuration ncloud_launch_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaunchConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LaunchConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_launch_configuration',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._initScriptNo = config.initScriptNo;
    this._isEncryptedVolume = config.isEncryptedVolume;
    this._loginKeyName = config.loginKeyName;
    this._memberServerImageNo = config.memberServerImageNo;
    this._name = config.name;
    this._serverImageProductCode = config.serverImageProductCode;
    this._serverProductCode = config.serverProductCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // init_script_no - computed: false, optional: true, required: false
  private _initScriptNo?: string; 
  public get initScriptNo() {
    return this.getStringAttribute('init_script_no');
  }
  public set initScriptNo(value: string) {
    this._initScriptNo = value;
  }
  public resetInitScriptNo() {
    this._initScriptNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptNoInput() {
    return this._initScriptNo;
  }

  // is_encrypted_volume - computed: true, optional: true, required: false
  private _isEncryptedVolume?: boolean | cdktf.IResolvable; 
  public get isEncryptedVolume() {
    return this.getBooleanAttribute('is_encrypted_volume');
  }
  public set isEncryptedVolume(value: boolean | cdktf.IResolvable) {
    this._isEncryptedVolume = value;
  }
  public resetIsEncryptedVolume() {
    this._isEncryptedVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncryptedVolumeInput() {
    return this._isEncryptedVolume;
  }

  // launch_configuration_no - computed: true, optional: false, required: false
  public get launchConfigurationNo() {
    return this.getStringAttribute('launch_configuration_no');
  }

  // login_key_name - computed: true, optional: true, required: false
  private _loginKeyName?: string; 
  public get loginKeyName() {
    return this.getStringAttribute('login_key_name');
  }
  public set loginKeyName(value: string) {
    this._loginKeyName = value;
  }
  public resetLoginKeyName() {
    this._loginKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginKeyNameInput() {
    return this._loginKeyName;
  }

  // member_server_image_no - computed: false, optional: true, required: false
  private _memberServerImageNo?: string; 
  public get memberServerImageNo() {
    return this.getStringAttribute('member_server_image_no');
  }
  public set memberServerImageNo(value: string) {
    this._memberServerImageNo = value;
  }
  public resetMemberServerImageNo() {
    this._memberServerImageNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberServerImageNoInput() {
    return this._memberServerImageNo;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // server_image_product_code - computed: true, optional: true, required: false
  private _serverImageProductCode?: string; 
  public get serverImageProductCode() {
    return this.getStringAttribute('server_image_product_code');
  }
  public set serverImageProductCode(value: string) {
    this._serverImageProductCode = value;
  }
  public resetServerImageProductCode() {
    this._serverImageProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverImageProductCodeInput() {
    return this._serverImageProductCode;
  }

  // server_product_code - computed: true, optional: true, required: false
  private _serverProductCode?: string; 
  public get serverProductCode() {
    return this.getStringAttribute('server_product_code');
  }
  public set serverProductCode(value: string) {
    this._serverProductCode = value;
  }
  public resetServerProductCode() {
    this._serverProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProductCodeInput() {
    return this._serverProductCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      init_script_no: cdktf.stringToTerraform(this._initScriptNo),
      is_encrypted_volume: cdktf.booleanToTerraform(this._isEncryptedVolume),
      login_key_name: cdktf.stringToTerraform(this._loginKeyName),
      member_server_image_no: cdktf.stringToTerraform(this._memberServerImageNo),
      name: cdktf.stringToTerraform(this._name),
      server_image_product_code: cdktf.stringToTerraform(this._serverImageProductCode),
      server_product_code: cdktf.stringToTerraform(this._serverProductCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_script_no: {
        value: cdktf.stringToHclTerraform(this._initScriptNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_encrypted_volume: {
        value: cdktf.booleanToHclTerraform(this._isEncryptedVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_key_name: {
        value: cdktf.stringToHclTerraform(this._loginKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_server_image_no: {
        value: cdktf.stringToHclTerraform(this._memberServerImageNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_image_product_code: {
        value: cdktf.stringToHclTerraform(this._serverImageProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_product_code: {
        value: cdktf.stringToHclTerraform(this._serverProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
