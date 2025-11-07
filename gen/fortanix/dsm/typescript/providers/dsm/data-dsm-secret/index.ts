// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/data-sources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDsmSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Exports the secret based on the value shown. The value is either true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/data-sources/secret#export DataDsmSecret#export}
  */
  readonly export?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/data-sources/secret#id DataDsmSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The secret security object name in Fortanix DSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/data-sources/secret#name DataDsmSecret#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/data-sources/secret dsm_secret}
*/
export class DataDsmSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDsmSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDsmSecret to import
  * @param importFromId The id of the existing DataDsmSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/data-sources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDsmSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/data-sources/secret dsm_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDsmSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataDsmSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_secret',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._export = config.export;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new cdktf.StringMap(this, "creator");
  public get creator() {
    return this._creator;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // export - computed: false, optional: true, required: false
  private _export?: boolean | cdktf.IResolvable; 
  public get export() {
    return this.getBooleanAttribute('export');
  }
  public set export(value: boolean | cdktf.IResolvable) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
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

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pub_key - computed: true, optional: false, required: false
  public get pubKey() {
    return this.getStringAttribute('pub_key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export: cdktf.booleanToTerraform(this._export),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export: {
        value: cdktf.booleanToHclTerraform(this._export),
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
