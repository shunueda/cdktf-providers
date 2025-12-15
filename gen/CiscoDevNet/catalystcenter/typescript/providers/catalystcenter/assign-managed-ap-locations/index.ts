// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/assign_managed_ap_locations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssignManagedApLocationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/assign_managed_ap_locations#device_id AssignManagedApLocations#device_id}
  */
  readonly deviceId: string;
  /**
  * Site IDs of Primary Managed AP Locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/assign_managed_ap_locations#primary_managed_ap_locations_site_ids AssignManagedApLocations#primary_managed_ap_locations_site_ids}
  */
  readonly primaryManagedApLocationsSiteIds?: string[];
  /**
  * Site IDs of Secondary Managed AP Locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/assign_managed_ap_locations#secondary_managed_ap_locations_site_ids AssignManagedApLocations#secondary_managed_ap_locations_site_ids}
  */
  readonly secondaryManagedApLocationsSiteIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/assign_managed_ap_locations catalystcenter_assign_managed_ap_locations}
*/
export class AssignManagedApLocations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_assign_managed_ap_locations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssignManagedApLocations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssignManagedApLocations to import
  * @param importFromId The id of the existing AssignManagedApLocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/assign_managed_ap_locations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssignManagedApLocations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_assign_managed_ap_locations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/assign_managed_ap_locations catalystcenter_assign_managed_ap_locations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssignManagedApLocationsConfig
  */
  public constructor(scope: Construct, id: string, config: AssignManagedApLocationsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_assign_managed_ap_locations',
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
    this._deviceId = config.deviceId;
    this._primaryManagedApLocationsSiteIds = config.primaryManagedApLocationsSiteIds;
    this._secondaryManagedApLocationsSiteIds = config.secondaryManagedApLocationsSiteIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_managed_ap_locations_site_ids - computed: false, optional: true, required: false
  private _primaryManagedApLocationsSiteIds?: string[]; 
  public get primaryManagedApLocationsSiteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_managed_ap_locations_site_ids'));
  }
  public set primaryManagedApLocationsSiteIds(value: string[]) {
    this._primaryManagedApLocationsSiteIds = value;
  }
  public resetPrimaryManagedApLocationsSiteIds() {
    this._primaryManagedApLocationsSiteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryManagedApLocationsSiteIdsInput() {
    return this._primaryManagedApLocationsSiteIds;
  }

  // secondary_managed_ap_locations_site_ids - computed: false, optional: true, required: false
  private _secondaryManagedApLocationsSiteIds?: string[]; 
  public get secondaryManagedApLocationsSiteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_managed_ap_locations_site_ids'));
  }
  public set secondaryManagedApLocationsSiteIds(value: string[]) {
    this._secondaryManagedApLocationsSiteIds = value;
  }
  public resetSecondaryManagedApLocationsSiteIds() {
    this._secondaryManagedApLocationsSiteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryManagedApLocationsSiteIdsInput() {
    return this._secondaryManagedApLocationsSiteIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      primary_managed_ap_locations_site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaryManagedApLocationsSiteIds),
      secondary_managed_ap_locations_site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryManagedApLocationsSiteIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_managed_ap_locations_site_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaryManagedApLocationsSiteIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secondary_managed_ap_locations_site_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryManagedApLocationsSiteIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
