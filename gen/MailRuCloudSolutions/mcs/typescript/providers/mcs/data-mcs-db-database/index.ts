// https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMcsDbDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database#charset DataMcsDbDatabase#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database#collate DataMcsDbDatabase#collate}
  */
  readonly collate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database#dbms_id DataMcsDbDatabase#dbms_id}
  */
  readonly dbmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database#id DataMcsDbDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database#instance_id DataMcsDbDatabase#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database#name DataMcsDbDatabase#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database mcs_db_database}
*/
export class DataMcsDbDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcs_db_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMcsDbDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMcsDbDatabase to import
  * @param importFromId The id of the existing DataMcsDbDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMcsDbDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcs_db_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/db_database mcs_db_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMcsDbDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataMcsDbDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'mcs_db_database',
      terraformGeneratorMetadata: {
        providerName: 'mcs',
        providerVersion: '0.6.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._charset = config.charset;
    this._collate = config.collate;
    this._dbmsId = config.dbmsId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // collate - computed: false, optional: true, required: false
  private _collate?: string; 
  public get collate() {
    return this.getStringAttribute('collate');
  }
  public set collate(value: string) {
    this._collate = value;
  }
  public resetCollate() {
    this._collate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collateInput() {
    return this._collate;
  }

  // dbms_id - computed: false, optional: true, required: false
  private _dbmsId?: string; 
  public get dbmsId() {
    return this.getStringAttribute('dbms_id');
  }
  public set dbmsId(value: string) {
    this._dbmsId = value;
  }
  public resetDbmsId() {
    this._dbmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbmsIdInput() {
    return this._dbmsId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // name - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      charset: cdktf.stringToTerraform(this._charset),
      collate: cdktf.stringToTerraform(this._collate),
      dbms_id: cdktf.stringToTerraform(this._dbmsId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      charset: {
        value: cdktf.stringToHclTerraform(this._charset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collate: {
        value: cdktf.stringToHclTerraform(this._collate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbms_id: {
        value: cdktf.stringToHclTerraform(this._dbmsId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
