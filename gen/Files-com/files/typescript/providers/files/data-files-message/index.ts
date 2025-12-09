// https://registry.terraform.io/providers/files-com/files/0.1.403/docs/data-sources/message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Message ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/data-sources/message#id DataFilesMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/data-sources/message files_message}
*/
export class DataFilesMessage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesMessage to import
  * @param importFromId The id of the existing DataFilesMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/data-sources/message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/data-sources/message files_message} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesMessageConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'files_message',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.403',
        providerVersionConstraint: '0.1.403'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // comments - computed: true, optional: false, required: false
  private _comments = new cdktf.AnyMap(this, "comments");
  public get comments() {
    return this._comments;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
