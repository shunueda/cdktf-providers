// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtPolicyTransitGatewayNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat#description DataNsxtPolicyTransitGatewayNat#description}
  */
  readonly description?: string;
  /**
  * Display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat#display_name DataNsxtPolicyTransitGatewayNat#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat#id DataNsxtPolicyTransitGatewayNat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nat Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat#nat_type DataNsxtPolicyTransitGatewayNat#nat_type}
  */
  readonly natType?: string;
  /**
  * Transit Gateway Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat#transit_gateway_path DataNsxtPolicyTransitGatewayNat#transit_gateway_path}
  */
  readonly transitGatewayPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat nsxt_policy_transit_gateway_nat}
*/
export class DataNsxtPolicyTransitGatewayNat extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_transit_gateway_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtPolicyTransitGatewayNat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtPolicyTransitGatewayNat to import
  * @param importFromId The id of the existing DataNsxtPolicyTransitGatewayNat that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtPolicyTransitGatewayNat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_transit_gateway_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_transit_gateway_nat nsxt_policy_transit_gateway_nat} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtPolicyTransitGatewayNatConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsxtPolicyTransitGatewayNatConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_transit_gateway_nat',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._natType = config.natType;
    this._transitGatewayPath = config.transitGatewayPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // nat_type - computed: false, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // transit_gateway_path - computed: false, optional: false, required: true
  private _transitGatewayPath?: string; 
  public get transitGatewayPath() {
    return this.getStringAttribute('transit_gateway_path');
  }
  public set transitGatewayPath(value: string) {
    this._transitGatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayPathInput() {
    return this._transitGatewayPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      nat_type: cdktf.stringToTerraform(this._natType),
      transit_gateway_path: cdktf.stringToTerraform(this._transitGatewayPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      nat_type: {
        value: cdktf.stringToHclTerraform(this._natType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_path: {
        value: cdktf.stringToHclTerraform(this._transitGatewayPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
