// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/connector_aruba_edge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlkiraConnectorArubaEdgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/connector_aruba_edge#id DataAlkiraConnectorArubaEdge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/connector_aruba_edge#name DataAlkiraConnectorArubaEdge#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/connector_aruba_edge alkira_connector_aruba_edge}
*/
export class DataAlkiraConnectorArubaEdge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_aruba_edge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlkiraConnectorArubaEdge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlkiraConnectorArubaEdge to import
  * @param importFromId The id of the existing DataAlkiraConnectorArubaEdge that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/connector_aruba_edge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlkiraConnectorArubaEdge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_aruba_edge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/connector_aruba_edge alkira_connector_aruba_edge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlkiraConnectorArubaEdgeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlkiraConnectorArubaEdgeConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_aruba_edge',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
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

  // implicit_group_id - computed: true, optional: false, required: false
  public get implicitGroupId() {
    return this.getNumberAttribute('implicit_group_id');
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
