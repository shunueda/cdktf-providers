// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricL3VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fabric ID of the fabric site this layer 3 virtual network is to be anchored at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_virtual_network#anchored_site_id FabricL3VirtualNetwork#anchored_site_id}
  */
  readonly anchoredSiteId?: string;
  /**
  * IDs of the fabrics this layer 3 virtual network is to be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_virtual_network#fabric_ids FabricL3VirtualNetwork#fabric_ids}
  */
  readonly fabricIds?: string[];
  /**
  * Name of the layer 3 virtual network. If `INFRA_VN` or `DEFAULT_VN` is used, those layer 3 virtual networks will be updated instead of created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_virtual_network#virtual_network_name FabricL3VirtualNetwork#virtual_network_name}
  */
  readonly virtualNetworkName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_virtual_network catalystcenter_fabric_l3_virtual_network}
*/
export class FabricL3VirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l3_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricL3VirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricL3VirtualNetwork to import
  * @param importFromId The id of the existing FabricL3VirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricL3VirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l3_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_virtual_network catalystcenter_fabric_l3_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricL3VirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: FabricL3VirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l3_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anchoredSiteId = config.anchoredSiteId;
    this._fabricIds = config.fabricIds;
    this._virtualNetworkName = config.virtualNetworkName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anchored_site_id - computed: false, optional: true, required: false
  private _anchoredSiteId?: string; 
  public get anchoredSiteId() {
    return this.getStringAttribute('anchored_site_id');
  }
  public set anchoredSiteId(value: string) {
    this._anchoredSiteId = value;
  }
  public resetAnchoredSiteId() {
    this._anchoredSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anchoredSiteIdInput() {
    return this._anchoredSiteId;
  }

  // fabric_ids - computed: false, optional: true, required: false
  private _fabricIds?: string[]; 
  public get fabricIds() {
    return cdktf.Fn.tolist(this.getListAttribute('fabric_ids'));
  }
  public set fabricIds(value: string[]) {
    this._fabricIds = value;
  }
  public resetFabricIds() {
    this._fabricIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdsInput() {
    return this._fabricIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anchored_site_id: cdktf.stringToTerraform(this._anchoredSiteId),
      fabric_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fabricIds),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anchored_site_id: {
        value: cdktf.stringToHclTerraform(this._anchoredSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fabricIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
