// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupDirectInterConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure Virtual Network Manager's Alkira ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#azure_network_manager_id GroupDirectInterConnector#azure_network_manager_id}
  */
  readonly azureNetworkManagerId?: number;
  /**
  * The region of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#connector_provider_region GroupDirectInterConnector#connector_provider_region}
  */
  readonly connectorProviderRegion?: string;
  /**
  * The type of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#connector_type GroupDirectInterConnector#connector_type}
  */
  readonly connectorType: string;
  /**
  * The CXP of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#cxp GroupDirectInterConnector#cxp}
  */
  readonly cxp?: string;
  /**
  * The description of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#description GroupDirectInterConnector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#id GroupDirectInterConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#name GroupDirectInterConnector#name}
  */
  readonly name: string;
  /**
  * The segment ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#segment_id GroupDirectInterConnector#segment_id}
  */
  readonly segmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector alkira_group_direct_inter_connector}
*/
export class GroupDirectInterConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_group_direct_inter_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupDirectInterConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupDirectInterConnector to import
  * @param importFromId The id of the existing GroupDirectInterConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupDirectInterConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_group_direct_inter_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/group_direct_inter_connector alkira_group_direct_inter_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupDirectInterConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: GroupDirectInterConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_group_direct_inter_connector',
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
    this._azureNetworkManagerId = config.azureNetworkManagerId;
    this._connectorProviderRegion = config.connectorProviderRegion;
    this._connectorType = config.connectorType;
    this._cxp = config.cxp;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._segmentId = config.segmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_network_manager_id - computed: false, optional: true, required: false
  private _azureNetworkManagerId?: number; 
  public get azureNetworkManagerId() {
    return this.getNumberAttribute('azure_network_manager_id');
  }
  public set azureNetworkManagerId(value: number) {
    this._azureNetworkManagerId = value;
  }
  public resetAzureNetworkManagerId() {
    this._azureNetworkManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetworkManagerIdInput() {
    return this._azureNetworkManagerId;
  }

  // connector_provider_region - computed: false, optional: true, required: false
  private _connectorProviderRegion?: string; 
  public get connectorProviderRegion() {
    return this.getStringAttribute('connector_provider_region');
  }
  public set connectorProviderRegion(value: string) {
    this._connectorProviderRegion = value;
  }
  public resetConnectorProviderRegion() {
    this._connectorProviderRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProviderRegionInput() {
    return this._connectorProviderRegion;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // cxp - computed: false, optional: true, required: false
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  public resetCxp() {
    this._cxp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_network_manager_id: cdktf.numberToTerraform(this._azureNetworkManagerId),
      connector_provider_region: cdktf.stringToTerraform(this._connectorProviderRegion),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      segment_id: cdktf.stringToTerraform(this._segmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_network_manager_id: {
        value: cdktf.numberToHclTerraform(this._azureNetworkManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connector_provider_region: {
        value: cdktf.stringToHclTerraform(this._connectorProviderRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type: {
        value: cdktf.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
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
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
