// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbAccountPrivilegeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege#account_name PolardbAccountPrivilege#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege#account_privilege PolardbAccountPrivilege#account_privilege}
  */
  readonly accountPrivilege?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege#db_cluster_id PolardbAccountPrivilege#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege#db_names PolardbAccountPrivilege#db_names}
  */
  readonly dbNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege#id PolardbAccountPrivilege#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege alicloud_polardb_account_privilege}
*/
export class PolardbAccountPrivilege extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_account_privilege";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbAccountPrivilege resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbAccountPrivilege to import
  * @param importFromId The id of the existing PolardbAccountPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbAccountPrivilege to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_account_privilege", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_account_privilege alicloud_polardb_account_privilege} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbAccountPrivilegeConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbAccountPrivilegeConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_account_privilege',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
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
    this._accountPrivilege = config.accountPrivilege;
    this._dbClusterId = config.dbClusterId;
    this._dbNames = config.dbNames;
    this._id = config.id;
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

  // account_privilege - computed: false, optional: true, required: false
  private _accountPrivilege?: string; 
  public get accountPrivilege() {
    return this.getStringAttribute('account_privilege');
  }
  public set accountPrivilege(value: string) {
    this._accountPrivilege = value;
  }
  public resetAccountPrivilege() {
    this._accountPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPrivilegeInput() {
    return this._accountPrivilege;
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

  // db_names - computed: false, optional: false, required: true
  private _dbNames?: string[]; 
  public get dbNames() {
    return cdktf.Fn.tolist(this.getListAttribute('db_names'));
  }
  public set dbNames(value: string[]) {
    this._dbNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNamesInput() {
    return this._dbNames;
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
      account_privilege: cdktf.stringToTerraform(this._accountPrivilege),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      db_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbNames),
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
      account_privilege: {
        value: cdktf.stringToHclTerraform(this._accountPrivilege),
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
      db_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
