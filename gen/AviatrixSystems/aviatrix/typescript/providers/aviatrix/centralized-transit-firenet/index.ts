// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/centralized_transit_firenet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CentralizedTransitFirenetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/centralized_transit_firenet#id CentralizedTransitFirenet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Primary firenet gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/centralized_transit_firenet#primary_firenet_gw_name CentralizedTransitFirenet#primary_firenet_gw_name}
  */
  readonly primaryFirenetGwName: string;
  /**
  * Secondary firenet gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/centralized_transit_firenet#secondary_firenet_gw_name CentralizedTransitFirenet#secondary_firenet_gw_name}
  */
  readonly secondaryFirenetGwName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/centralized_transit_firenet aviatrix_centralized_transit_firenet}
*/
export class CentralizedTransitFirenet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_centralized_transit_firenet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CentralizedTransitFirenet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CentralizedTransitFirenet to import
  * @param importFromId The id of the existing CentralizedTransitFirenet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/centralized_transit_firenet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CentralizedTransitFirenet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_centralized_transit_firenet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/centralized_transit_firenet aviatrix_centralized_transit_firenet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CentralizedTransitFirenetConfig
  */
  public constructor(scope: Construct, id: string, config: CentralizedTransitFirenetConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_centralized_transit_firenet',
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
    this._primaryFirenetGwName = config.primaryFirenetGwName;
    this._secondaryFirenetGwName = config.secondaryFirenetGwName;
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

  // primary_firenet_gw_name - computed: false, optional: false, required: true
  private _primaryFirenetGwName?: string; 
  public get primaryFirenetGwName() {
    return this.getStringAttribute('primary_firenet_gw_name');
  }
  public set primaryFirenetGwName(value: string) {
    this._primaryFirenetGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryFirenetGwNameInput() {
    return this._primaryFirenetGwName;
  }

  // secondary_firenet_gw_name - computed: false, optional: false, required: true
  private _secondaryFirenetGwName?: string; 
  public get secondaryFirenetGwName() {
    return this.getStringAttribute('secondary_firenet_gw_name');
  }
  public set secondaryFirenetGwName(value: string) {
    this._secondaryFirenetGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryFirenetGwNameInput() {
    return this._secondaryFirenetGwName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      primary_firenet_gw_name: cdktf.stringToTerraform(this._primaryFirenetGwName),
      secondary_firenet_gw_name: cdktf.stringToTerraform(this._secondaryFirenetGwName),
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
      primary_firenet_gw_name: {
        value: cdktf.stringToHclTerraform(this._primaryFirenetGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_firenet_gw_name: {
        value: cdktf.stringToHclTerraform(this._secondaryFirenetGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
