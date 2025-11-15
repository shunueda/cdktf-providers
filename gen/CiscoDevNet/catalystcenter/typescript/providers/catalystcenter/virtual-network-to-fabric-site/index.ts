// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/virtual_network_to_fabric_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkToFabricSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric this Layer 3 Virtual Network is to be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/virtual_network_to_fabric_site#fabric_site_id VirtualNetworkToFabricSite#fabric_site_id}
  */
  readonly fabricSiteId: string;
  /**
  * ID of the Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/virtual_network_to_fabric_site#virtual_network_id VirtualNetworkToFabricSite#virtual_network_id}
  */
  readonly virtualNetworkId: string;
  /**
  * Virtual Network Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/virtual_network_to_fabric_site#virtual_network_name VirtualNetworkToFabricSite#virtual_network_name}
  */
  readonly virtualNetworkName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/virtual_network_to_fabric_site catalystcenter_virtual_network_to_fabric_site}
*/
export class VirtualNetworkToFabricSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_virtual_network_to_fabric_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetworkToFabricSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetworkToFabricSite to import
  * @param importFromId The id of the existing VirtualNetworkToFabricSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/virtual_network_to_fabric_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetworkToFabricSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_virtual_network_to_fabric_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/virtual_network_to_fabric_site catalystcenter_virtual_network_to_fabric_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkToFabricSiteConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkToFabricSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_virtual_network_to_fabric_site',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricSiteId = config.fabricSiteId;
    this._virtualNetworkId = config.virtualNetworkId;
    this._virtualNetworkName = config.virtualNetworkName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_site_id - computed: false, optional: false, required: true
  private _fabricSiteId?: string; 
  public get fabricSiteId() {
    return this.getStringAttribute('fabric_site_id');
  }
  public set fabricSiteId(value: string) {
    this._fabricSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSiteIdInput() {
    return this._fabricSiteId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
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
      fabric_site_id: cdktf.stringToTerraform(this._fabricSiteId),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_site_id: {
        value: cdktf.stringToHclTerraform(this._fabricSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
