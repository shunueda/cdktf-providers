// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSpokeNativePeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering#id AzureSpokeNativePeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An Aviatrix account that corresponds to a subscription in Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering#spoke_account_name AzureSpokeNativePeering#spoke_account_name}
  */
  readonly spokeAccountName: string;
  /**
  * Spoke VNet region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering#spoke_region AzureSpokeNativePeering#spoke_region}
  */
  readonly spokeRegion: string;
  /**
  * Combination of the Spoke VNet name and resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering#spoke_vpc_id AzureSpokeNativePeering#spoke_vpc_id}
  */
  readonly spokeVpcId: string;
  /**
  * Name of an azure transit gateway with transit firenet enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering#transit_gateway_name AzureSpokeNativePeering#transit_gateway_name}
  */
  readonly transitGatewayName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering aviatrix_azure_spoke_native_peering}
*/
export class AzureSpokeNativePeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_azure_spoke_native_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureSpokeNativePeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureSpokeNativePeering to import
  * @param importFromId The id of the existing AzureSpokeNativePeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureSpokeNativePeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_azure_spoke_native_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/azure_spoke_native_peering aviatrix_azure_spoke_native_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSpokeNativePeeringConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSpokeNativePeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_azure_spoke_native_peering',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
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
    this._spokeAccountName = config.spokeAccountName;
    this._spokeRegion = config.spokeRegion;
    this._spokeVpcId = config.spokeVpcId;
    this._transitGatewayName = config.transitGatewayName;
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

  // spoke_account_name - computed: false, optional: false, required: true
  private _spokeAccountName?: string; 
  public get spokeAccountName() {
    return this.getStringAttribute('spoke_account_name');
  }
  public set spokeAccountName(value: string) {
    this._spokeAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeAccountNameInput() {
    return this._spokeAccountName;
  }

  // spoke_region - computed: false, optional: false, required: true
  private _spokeRegion?: string; 
  public get spokeRegion() {
    return this.getStringAttribute('spoke_region');
  }
  public set spokeRegion(value: string) {
    this._spokeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeRegionInput() {
    return this._spokeRegion;
  }

  // spoke_vpc_id - computed: false, optional: false, required: true
  private _spokeVpcId?: string; 
  public get spokeVpcId() {
    return this.getStringAttribute('spoke_vpc_id');
  }
  public set spokeVpcId(value: string) {
    this._spokeVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeVpcIdInput() {
    return this._spokeVpcId;
  }

  // transit_gateway_name - computed: false, optional: false, required: true
  private _transitGatewayName?: string; 
  public get transitGatewayName() {
    return this.getStringAttribute('transit_gateway_name');
  }
  public set transitGatewayName(value: string) {
    this._transitGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayNameInput() {
    return this._transitGatewayName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      spoke_account_name: cdktf.stringToTerraform(this._spokeAccountName),
      spoke_region: cdktf.stringToTerraform(this._spokeRegion),
      spoke_vpc_id: cdktf.stringToTerraform(this._spokeVpcId),
      transit_gateway_name: cdktf.stringToTerraform(this._transitGatewayName),
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
      spoke_account_name: {
        value: cdktf.stringToHclTerraform(this._spokeAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_region: {
        value: cdktf.stringToHclTerraform(this._spokeRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_vpc_id: {
        value: cdktf.stringToHclTerraform(this._spokeVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_name: {
        value: cdktf.stringToHclTerraform(this._transitGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
