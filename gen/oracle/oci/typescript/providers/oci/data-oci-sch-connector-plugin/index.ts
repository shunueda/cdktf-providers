// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/sch_connector_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciSchConnectorPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/sch_connector_plugin#connector_plugin_name DataOciSchConnectorPlugin#connector_plugin_name}
  */
  readonly connectorPluginName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/sch_connector_plugin#id DataOciSchConnectorPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/sch_connector_plugin oci_sch_connector_plugin}
*/
export class DataOciSchConnectorPlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_sch_connector_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciSchConnectorPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciSchConnectorPlugin to import
  * @param importFromId The id of the existing DataOciSchConnectorPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/sch_connector_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciSchConnectorPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_sch_connector_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/sch_connector_plugin oci_sch_connector_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciSchConnectorPluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciSchConnectorPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_sch_connector_plugin',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorPluginName = config.connectorPluginName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_plugin_name - computed: false, optional: false, required: true
  private _connectorPluginName?: string; 
  public get connectorPluginName() {
    return this.getStringAttribute('connector_plugin_name');
  }
  public set connectorPluginName(value: string) {
    this._connectorPluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorPluginNameInput() {
    return this._connectorPluginName;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_throughput - computed: true, optional: false, required: false
  public get estimatedThroughput() {
    return this.getStringAttribute('estimated_throughput');
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // max_retention - computed: true, optional: false, required: false
  public get maxRetention() {
    return this.getStringAttribute('max_retention');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_plugin_name: cdktf.stringToTerraform(this._connectorPluginName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_plugin_name: {
        value: cdktf.stringToHclTerraform(this._connectorPluginName),
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
