// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#account_description PolardbAccount#account_description}
  */
  readonly accountDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#account_name PolardbAccount#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#account_password PolardbAccount#account_password}
  */
  readonly accountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#account_type PolardbAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#data_base_instance_id PolardbAccount#data_base_instance_id}
  */
  readonly dataBaseInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#id PolardbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#priv_exceeded PolardbAccount#priv_exceeded}
  */
  readonly privExceeded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#status PolardbAccount#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account alibabacloudstack_polardb_account}
*/
export class PolardbAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbAccount to import
  * @param importFromId The id of the existing PolardbAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_account alibabacloudstack_polardb_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_account',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountDescription = config.accountDescription;
    this._accountName = config.accountName;
    this._accountPassword = config.accountPassword;
    this._accountType = config.accountType;
    this._dataBaseInstanceId = config.dataBaseInstanceId;
    this._id = config.id;
    this._privExceeded = config.privExceeded;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_description - computed: true, optional: true, required: false
  private _accountDescription?: string; 
  public get accountDescription() {
    return this.getStringAttribute('account_description');
  }
  public set accountDescription(value: string) {
    this._accountDescription = value;
  }
  public resetAccountDescription() {
    this._accountDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDescriptionInput() {
    return this._accountDescription;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_password - computed: false, optional: false, required: true
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // data_base_instance_id - computed: false, optional: false, required: true
  private _dataBaseInstanceId?: string; 
  public get dataBaseInstanceId() {
    return this.getStringAttribute('data_base_instance_id');
  }
  public set dataBaseInstanceId(value: string) {
    this._dataBaseInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseInstanceIdInput() {
    return this._dataBaseInstanceId;
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

  // priv_exceeded - computed: true, optional: true, required: false
  private _privExceeded?: string; 
  public get privExceeded() {
    return this.getStringAttribute('priv_exceeded');
  }
  public set privExceeded(value: string) {
    this._privExceeded = value;
  }
  public resetPrivExceeded() {
    this._privExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privExceededInput() {
    return this._privExceeded;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_description: cdktf.stringToTerraform(this._accountDescription),
      account_name: cdktf.stringToTerraform(this._accountName),
      account_password: cdktf.stringToTerraform(this._accountPassword),
      account_type: cdktf.stringToTerraform(this._accountType),
      data_base_instance_id: cdktf.stringToTerraform(this._dataBaseInstanceId),
      id: cdktf.stringToTerraform(this._id),
      priv_exceeded: cdktf.stringToTerraform(this._privExceeded),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_description: {
        value: cdktf.stringToHclTerraform(this._accountDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_base_instance_id: {
        value: cdktf.stringToHclTerraform(this._dataBaseInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priv_exceeded: {
        value: cdktf.stringToHclTerraform(this._privExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
