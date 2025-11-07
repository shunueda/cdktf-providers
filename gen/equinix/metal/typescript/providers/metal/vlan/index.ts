// https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan#description Vlan#description}
  */
  readonly description?: string;
  /**
  * Facility where to create the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan#facility Vlan#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan#id Vlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan#metro Vlan#metro}
  */
  readonly metro?: string;
  /**
  * ID of parent project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan#project_id Vlan#project_id}
  */
  readonly projectId: string;
  /**
  * VLAN ID, must be unique in metro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan#vxlan Vlan#vxlan}
  */
  readonly vxlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan metal_vlan}
*/
export class Vlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metal_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vlan to import
  * @param importFromId The id of the existing Vlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metal_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/vlan metal_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanConfig
  */
  public constructor(scope: Construct, id: string, config: VlanConfig) {
    super(scope, id, {
      terraformResourceType: 'metal_vlan',
      terraformGeneratorMetadata: {
        providerName: 'metal',
        providerVersion: '3.3.0'
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
    this._facility = config.facility;
    this._id = config.id;
    this._metro = config.metro;
    this._projectId = config.projectId;
    this._vxlan = config.vxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
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

  // metro - computed: false, optional: true, required: false
  private _metro?: string; 
  public get metro() {
    return this.getStringAttribute('metro');
  }
  public set metro(value: string) {
    this._metro = value;
  }
  public resetMetro() {
    this._metro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroInput() {
    return this._metro;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // vxlan - computed: true, optional: true, required: false
  private _vxlan?: number; 
  public get vxlan() {
    return this.getNumberAttribute('vxlan');
  }
  public set vxlan(value: number) {
    this._vxlan = value;
  }
  public resetVxlan() {
    this._vxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      facility: cdktf.stringToTerraform(this._facility),
      id: cdktf.stringToTerraform(this._id),
      metro: cdktf.stringToTerraform(this._metro),
      project_id: cdktf.stringToTerraform(this._projectId),
      vxlan: cdktf.numberToTerraform(this._vxlan),
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
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
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
      metro: {
        value: cdktf.stringToHclTerraform(this._metro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan: {
        value: cdktf.numberToHclTerraform(this._vxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
