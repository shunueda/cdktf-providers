// https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAccessControlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls#allow_list DatabaseAccessControls#allow_list}
  */
  readonly allowList: string[];
  /**
  * The ID of the database to manage the allow list for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls#database_id DatabaseAccessControls#database_id}
  */
  readonly databaseId: number;
  /**
  * The type of the  database to manage the allow list for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls#database_type DatabaseAccessControls#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls#id DatabaseAccessControls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls linode_database_access_controls}
*/
export class DatabaseAccessControls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_access_controls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAccessControls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAccessControls to import
  * @param importFromId The id of the existing DatabaseAccessControls that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAccessControls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_access_controls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/database_access_controls linode_database_access_controls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAccessControlsConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAccessControlsConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_database_access_controls',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.1',
        providerVersionConstraint: '3.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList = config.allowList;
    this._databaseId = config.databaseId;
    this._databaseType = config.databaseType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: false, optional: false, required: true
  private _allowList?: string[]; 
  public get allowList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_list'));
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: number; 
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }
  public set databaseId(value: number) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
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
      allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowList),
      database_id: cdktf.numberToTerraform(this._databaseId),
      database_type: cdktf.stringToTerraform(this._databaseType),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      database_id: {
        value: cdktf.numberToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
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
