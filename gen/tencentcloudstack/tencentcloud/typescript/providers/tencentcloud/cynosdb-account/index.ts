// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name, including alphanumeric _, Start with a letter, end with a letter or number, length 1-16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#account_name CynosdbAccount#account_name}
  */
  readonly accountName: string;
  /**
  * Password, with a length range of 8 to 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#account_password CynosdbAccount#account_password}
  */
  readonly accountPassword: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#cluster_id CynosdbAccount#cluster_id}
  */
  readonly clusterId: string;
  /**
  * describe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#description CynosdbAccount#description}
  */
  readonly description?: string;
  /**
  * main engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#host CynosdbAccount#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#id CynosdbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of user connections cannot be greater than 10240.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#max_user_connections CynosdbAccount#max_user_connections}
  */
  readonly maxUserConnections?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account tencentcloud_cynosdb_account}
*/
export class CynosdbAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbAccount to import
  * @param importFromId The id of the existing CynosdbAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cynosdb_account tencentcloud_cynosdb_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_account',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._accountPassword = config.accountPassword;
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._host = config.host;
    this._id = config.id;
    this._maxUserConnections = config.maxUserConnections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // max_user_connections - computed: false, optional: true, required: false
  private _maxUserConnections?: number; 
  public get maxUserConnections() {
    return this.getNumberAttribute('max_user_connections');
  }
  public set maxUserConnections(value: number) {
    this._maxUserConnections = value;
  }
  public resetMaxUserConnections() {
    this._maxUserConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserConnectionsInput() {
    return this._maxUserConnections;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      account_password: cdktf.stringToTerraform(this._accountPassword),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      max_user_connections: cdktf.numberToTerraform(this._maxUserConnections),
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
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      max_user_connections: {
        value: cdktf.numberToHclTerraform(this._maxUserConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
