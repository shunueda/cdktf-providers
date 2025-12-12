// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPolardbClusterAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#account_description ApsarastackPolardbClusterAccount#account_description}
  */
  readonly accountDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#account_lock_state ApsarastackPolardbClusterAccount#account_lock_state}
  */
  readonly accountLockState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#account_name ApsarastackPolardbClusterAccount#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#account_password ApsarastackPolardbClusterAccount#account_password}
  */
  readonly accountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#account_type ApsarastackPolardbClusterAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#db_cluster_id ApsarastackPolardbClusterAccount#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#id ApsarastackPolardbClusterAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account apsarastack_polardb_cluster_account}
*/
export class ApsarastackPolardbClusterAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_cluster_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPolardbClusterAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPolardbClusterAccount to import
  * @param importFromId The id of the existing ApsarastackPolardbClusterAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPolardbClusterAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_cluster_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_cluster_account apsarastack_polardb_cluster_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPolardbClusterAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPolardbClusterAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_cluster_account',
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
    this._accountLockState = config.accountLockState;
    this._accountName = config.accountName;
    this._accountPassword = config.accountPassword;
    this._accountType = config.accountType;
    this._dbClusterId = config.dbClusterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_description - computed: false, optional: true, required: false
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

  // account_lock_state - computed: true, optional: true, required: false
  private _accountLockState?: string; 
  public get accountLockState() {
    return this.getStringAttribute('account_lock_state');
  }
  public set accountLockState(value: string) {
    this._accountLockState = value;
  }
  public resetAccountLockState() {
    this._accountLockState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLockStateInput() {
    return this._accountLockState;
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

  // account_password - computed: false, optional: true, required: false
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  public resetAccountPassword() {
    this._accountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

  // account_password_valid_time - computed: true, optional: false, required: false
  public get accountPasswordValidTime() {
    return this.getStringAttribute('account_password_valid_time');
  }

  // account_status - computed: true, optional: false, required: false
  public get accountStatus() {
    return this.getStringAttribute('account_status');
  }

  // account_type - computed: false, optional: true, required: false
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

  // db_cluster_id - computed: false, optional: false, required: true
  private _dbClusterId?: string; 
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }
  public set dbClusterId(value: string) {
    this._dbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdInput() {
    return this._dbClusterId;
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
      account_description: cdktf.stringToTerraform(this._accountDescription),
      account_lock_state: cdktf.stringToTerraform(this._accountLockState),
      account_name: cdktf.stringToTerraform(this._accountName),
      account_password: cdktf.stringToTerraform(this._accountPassword),
      account_type: cdktf.stringToTerraform(this._accountType),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      id: cdktf.stringToTerraform(this._id),
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
      account_lock_state: {
        value: cdktf.stringToHclTerraform(this._accountLockState),
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
      db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
