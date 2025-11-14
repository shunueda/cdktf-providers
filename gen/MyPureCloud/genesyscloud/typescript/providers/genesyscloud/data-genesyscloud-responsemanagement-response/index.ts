// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/responsemanagement_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudResponsemanagementResponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/responsemanagement_response#id DataGenesyscloudResponsemanagementResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the library that contains the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/responsemanagement_response#library_id DataGenesyscloudResponsemanagementResponse#library_id}
  */
  readonly libraryId: string;
  /**
  * Responsemanagement Response name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/responsemanagement_response#name DataGenesyscloudResponsemanagementResponse#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/responsemanagement_response genesyscloud_responsemanagement_response}
*/
export class DataGenesyscloudResponsemanagementResponse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_responsemanagement_response";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudResponsemanagementResponse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudResponsemanagementResponse to import
  * @param importFromId The id of the existing DataGenesyscloudResponsemanagementResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/responsemanagement_response#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudResponsemanagementResponse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_responsemanagement_response", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/data-sources/responsemanagement_response genesyscloud_responsemanagement_response} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudResponsemanagementResponseConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudResponsemanagementResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_responsemanagement_response',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._libraryId = config.libraryId;
    this._name = config.name;
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

  // library_id - computed: false, optional: false, required: true
  private _libraryId?: string; 
  public get libraryId() {
    return this.getStringAttribute('library_id');
  }
  public set libraryId(value: string) {
    this._libraryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryIdInput() {
    return this._libraryId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      library_id: cdktf.stringToTerraform(this._libraryId),
      name: cdktf.stringToTerraform(this._name),
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
      library_id: {
        value: cdktf.stringToHclTerraform(this._libraryId),
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
