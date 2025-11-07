// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/modular_device_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModularDeviceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Object ID of the Chassis Device Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/modular_device_profile#chassis_profile_id ModularDeviceProfile#chassis_profile_id}
  */
  readonly chassisProfileId: string;
  /**
  * A map of Line Card Device Profile IDs, keyed by slot number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/modular_device_profile#line_card_profile_ids ModularDeviceProfile#line_card_profile_ids}
  */
  readonly lineCardProfileIds: { [key: string]: string };
  /**
  * Name displayed in web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/modular_device_profile#name ModularDeviceProfile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/modular_device_profile apstra_modular_device_profile}
*/
export class ModularDeviceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_modular_device_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ModularDeviceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModularDeviceProfile to import
  * @param importFromId The id of the existing ModularDeviceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/modular_device_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModularDeviceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_modular_device_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/modular_device_profile apstra_modular_device_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModularDeviceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ModularDeviceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_modular_device_profile',
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
    this._chassisProfileId = config.chassisProfileId;
    this._lineCardProfileIds = config.lineCardProfileIds;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chassis_profile_id - computed: false, optional: false, required: true
  private _chassisProfileId?: string; 
  public get chassisProfileId() {
    return this.getStringAttribute('chassis_profile_id');
  }
  public set chassisProfileId(value: string) {
    this._chassisProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisProfileIdInput() {
    return this._chassisProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // line_card_profile_ids - computed: false, optional: false, required: true
  private _lineCardProfileIds?: { [key: string]: string }; 
  public get lineCardProfileIds() {
    return this.getStringMapAttribute('line_card_profile_ids');
  }
  public set lineCardProfileIds(value: { [key: string]: string }) {
    this._lineCardProfileIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineCardProfileIdsInput() {
    return this._lineCardProfileIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chassis_profile_id: cdktf.stringToTerraform(this._chassisProfileId),
      line_card_profile_ids: cdktf.hashMapper(cdktf.stringToTerraform)(this._lineCardProfileIds),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chassis_profile_id: {
        value: cdktf.stringToHclTerraform(this._chassisProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line_card_profile_ids: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._lineCardProfileIds),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
