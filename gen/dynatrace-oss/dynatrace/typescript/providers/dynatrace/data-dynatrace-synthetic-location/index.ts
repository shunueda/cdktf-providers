// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDynatraceSyntheticLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud provider where the location is hosted. 
  * 
  *  Only applicable to `PUBLIC` locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#cloud_platform DataDynatraceSyntheticLocation#cloud_platform}
  */
  readonly cloudPlatform?: string;
  /**
  * The unique ID of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#entity_id DataDynatraceSyntheticLocation#entity_id}
  */
  readonly entityId?: string;
  /**
  * The Dynatrace GeoLocation ID of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#geo_location_id DataDynatraceSyntheticLocation#geo_location_id}
  */
  readonly geoLocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#id DataDynatraceSyntheticLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of IP addresses assigned to the location. 
  * 
  *  Only applicable to `PUBLIC` locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#ips DataDynatraceSyntheticLocation#ips}
  */
  readonly ips?: string[];
  /**
  * The name of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#name DataDynatraceSyntheticLocation#name}
  */
  readonly name?: string;
  /**
  * The release stage of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#stage DataDynatraceSyntheticLocation#stage}
  */
  readonly stage?: string;
  /**
  * The status of the location: 
  * 
  * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location. 
  * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location. 
  * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#status DataDynatraceSyntheticLocation#status}
  */
  readonly status?: string;
  /**
  * The type of the location. Supported values are `PUBLIC`, `PRIVATE` and `CLUSTER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#type DataDynatraceSyntheticLocation#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location dynatrace_synthetic_location}
*/
export class DataDynatraceSyntheticLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_synthetic_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDynatraceSyntheticLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDynatraceSyntheticLocation to import
  * @param importFromId The id of the existing DataDynatraceSyntheticLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDynatraceSyntheticLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_synthetic_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/data-sources/synthetic_location dynatrace_synthetic_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDynatraceSyntheticLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDynatraceSyntheticLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_synthetic_location',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudPlatform = config.cloudPlatform;
    this._entityId = config.entityId;
    this._geoLocationId = config.geoLocationId;
    this._id = config.id;
    this._ips = config.ips;
    this._name = config.name;
    this._stage = config.stage;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_platform - computed: true, optional: true, required: false
  private _cloudPlatform?: string; 
  public get cloudPlatform() {
    return this.getStringAttribute('cloud_platform');
  }
  public set cloudPlatform(value: string) {
    this._cloudPlatform = value;
  }
  public resetCloudPlatform() {
    this._cloudPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudPlatformInput() {
    return this._cloudPlatform;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // geo_location_id - computed: true, optional: true, required: false
  private _geoLocationId?: string; 
  public get geoLocationId() {
    return this.getStringAttribute('geo_location_id');
  }
  public set geoLocationId(value: string) {
    this._geoLocationId = value;
  }
  public resetGeoLocationId() {
    this._geoLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationIdInput() {
    return this._geoLocationId;
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

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stage - computed: true, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_platform: cdktf.stringToTerraform(this._cloudPlatform),
      entity_id: cdktf.stringToTerraform(this._entityId),
      geo_location_id: cdktf.stringToTerraform(this._geoLocationId),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      name: cdktf.stringToTerraform(this._name),
      stage: cdktf.stringToTerraform(this._stage),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_platform: {
        value: cdktf.stringToHclTerraform(this._cloudPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_location_id: {
        value: cdktf.stringToHclTerraform(this._geoLocationId),
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
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage: {
        value: cdktf.stringToHclTerraform(this._stage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
