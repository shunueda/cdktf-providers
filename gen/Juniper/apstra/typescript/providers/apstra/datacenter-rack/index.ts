// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterRackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra ID of the Blueprint where the Rack should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack#blueprint_id DatacenterRack#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Name of the Rack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack#name DatacenterRack#name}
  */
  readonly name: string;
  /**
  * Graph node ID of Pod (3-stage topology) where the new rack should be created. Required only in Pod-Based (5-stage) Blueprints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack#pod_id DatacenterRack#pod_id}
  */
  readonly podId?: string;
  /**
  * Because this resource only manages the Rack, names of Systems and other embedded elements with names derived from the Rack name are not within this resource's control. When `true` during initial Rack creation, those elements will be renamed to match the `name` attribute. Subsequent changes to the `name` attribute will not affect those elements. It's a create-time operation only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack#rack_elements_name_one_shot DatacenterRack#rack_elements_name_one_shot}
  */
  readonly rackElementsNameOneShot?: boolean | cdktf.IResolvable;
  /**
  * ID of the Global Catalog Rack Type design object to use as a template for this Rack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack#rack_type_id DatacenterRack#rack_type_id}
  */
  readonly rackTypeId: string;
  /**
  * Because this resource only manages the Rack, names of Systems defined within the Rack are not within this resource's control. When `system_name_one_shot` is `true` during initial Rack creation, Systems within the Rack will be renamed to match the rack's `name`. Subsequent modifications to the `name` attribute will not affect the names of those systems. It's a create-time one-shot operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack#system_name_one_shot DatacenterRack#system_name_one_shot}
  */
  readonly systemNameOneShot?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack apstra_datacenter_rack}
*/
export class DatacenterRack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_rack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterRack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterRack to import
  * @param importFromId The id of the existing DatacenterRack that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterRack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_rack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_rack apstra_datacenter_rack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterRackConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterRackConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_rack',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._name = config.name;
    this._podId = config.podId;
    this._rackElementsNameOneShot = config.rackElementsNameOneShot;
    this._rackTypeId = config.rackTypeId;
    this._systemNameOneShot = config.systemNameOneShot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pod_id - computed: false, optional: true, required: false
  private _podId?: string; 
  public get podId() {
    return this.getStringAttribute('pod_id');
  }
  public set podId(value: string) {
    this._podId = value;
  }
  public resetPodId() {
    this._podId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdInput() {
    return this._podId;
  }

  // rack_elements_name_one_shot - computed: false, optional: true, required: false
  private _rackElementsNameOneShot?: boolean | cdktf.IResolvable; 
  public get rackElementsNameOneShot() {
    return this.getBooleanAttribute('rack_elements_name_one_shot');
  }
  public set rackElementsNameOneShot(value: boolean | cdktf.IResolvable) {
    this._rackElementsNameOneShot = value;
  }
  public resetRackElementsNameOneShot() {
    this._rackElementsNameOneShot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackElementsNameOneShotInput() {
    return this._rackElementsNameOneShot;
  }

  // rack_type_id - computed: false, optional: false, required: true
  private _rackTypeId?: string; 
  public get rackTypeId() {
    return this.getStringAttribute('rack_type_id');
  }
  public set rackTypeId(value: string) {
    this._rackTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rackTypeIdInput() {
    return this._rackTypeId;
  }

  // system_name_one_shot - computed: false, optional: true, required: false
  private _systemNameOneShot?: boolean | cdktf.IResolvable; 
  public get systemNameOneShot() {
    return this.getBooleanAttribute('system_name_one_shot');
  }
  public set systemNameOneShot(value: boolean | cdktf.IResolvable) {
    this._systemNameOneShot = value;
  }
  public resetSystemNameOneShot() {
    this._systemNameOneShot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameOneShotInput() {
    return this._systemNameOneShot;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      name: cdktf.stringToTerraform(this._name),
      pod_id: cdktf.stringToTerraform(this._podId),
      rack_elements_name_one_shot: cdktf.booleanToTerraform(this._rackElementsNameOneShot),
      rack_type_id: cdktf.stringToTerraform(this._rackTypeId),
      system_name_one_shot: cdktf.booleanToTerraform(this._systemNameOneShot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
      pod_id: {
        value: cdktf.stringToHclTerraform(this._podId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rack_elements_name_one_shot: {
        value: cdktf.booleanToHclTerraform(this._rackElementsNameOneShot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rack_type_id: {
        value: cdktf.stringToHclTerraform(this._rackTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_name_one_shot: {
        value: cdktf.booleanToHclTerraform(this._systemNameOneShot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
