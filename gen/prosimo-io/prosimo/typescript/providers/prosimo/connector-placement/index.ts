// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/connector_placement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorPlacementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/connector_placement#connector_placement_app_vpc ConnectorPlacement#connector_placement_app_vpc}
  */
  readonly connectorPlacementAppVpc: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/connector_placement#id ConnectorPlacement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/connector_placement prosimo_connector_placement}
*/
export class ConnectorPlacement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_connector_placement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorPlacement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorPlacement to import
  * @param importFromId The id of the existing ConnectorPlacement that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/connector_placement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorPlacement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_connector_placement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/connector_placement prosimo_connector_placement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorPlacementConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorPlacementConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_connector_placement',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorPlacementAppVpc = config.connectorPlacementAppVpc;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_placement_app_vpc - computed: false, optional: false, required: true
  private _connectorPlacementAppVpc?: boolean | cdktf.IResolvable; 
  public get connectorPlacementAppVpc() {
    return this.getBooleanAttribute('connector_placement_app_vpc');
  }
  public set connectorPlacementAppVpc(value: boolean | cdktf.IResolvable) {
    this._connectorPlacementAppVpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorPlacementAppVpcInput() {
    return this._connectorPlacementAppVpc;
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
      connector_placement_app_vpc: cdktf.booleanToTerraform(this._connectorPlacementAppVpc),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_placement_app_vpc: {
        value: cdktf.booleanToHclTerraform(this._connectorPlacementAppVpc),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
