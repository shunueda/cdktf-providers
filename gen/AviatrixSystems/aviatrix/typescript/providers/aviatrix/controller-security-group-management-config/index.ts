// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_security_group_management_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerSecurityGroupManagementConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud account name of user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_security_group_management_config#account_name ControllerSecurityGroupManagementConfig#account_name}
  */
  readonly accountName?: string;
  /**
  * Used to manage the Controller instance’s inbound rules from gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_security_group_management_config#enable_security_group_management ControllerSecurityGroupManagementConfig#enable_security_group_management}
  */
  readonly enableSecurityGroupManagement: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_security_group_management_config#id ControllerSecurityGroupManagementConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_security_group_management_config aviatrix_controller_security_group_management_config}
*/
export class ControllerSecurityGroupManagementConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_security_group_management_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerSecurityGroupManagementConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerSecurityGroupManagementConfig to import
  * @param importFromId The id of the existing ControllerSecurityGroupManagementConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_security_group_management_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerSecurityGroupManagementConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_security_group_management_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_security_group_management_config aviatrix_controller_security_group_management_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerSecurityGroupManagementConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerSecurityGroupManagementConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_security_group_management_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._enableSecurityGroupManagement = config.enableSecurityGroupManagement;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // enable_security_group_management - computed: false, optional: false, required: true
  private _enableSecurityGroupManagement?: boolean | cdktf.IResolvable; 
  public get enableSecurityGroupManagement() {
    return this.getBooleanAttribute('enable_security_group_management');
  }
  public set enableSecurityGroupManagement(value: boolean | cdktf.IResolvable) {
    this._enableSecurityGroupManagement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecurityGroupManagementInput() {
    return this._enableSecurityGroupManagement;
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
      account_name: cdktf.stringToTerraform(this._accountName),
      enable_security_group_management: cdktf.booleanToTerraform(this._enableSecurityGroupManagement),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_security_group_management: {
        value: cdktf.booleanToHclTerraform(this._enableSecurityGroupManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
