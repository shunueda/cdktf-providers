// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDynatraceSyntheticLocationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#id DataDynatraceSyntheticLocations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#name DataDynatraceSyntheticLocations#name}
  */
  readonly name?: string;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#locations DataDynatraceSyntheticLocations#locations}
  */
  readonly locations?: DataDynatraceSyntheticLocationsLocations;
}
export interface DataDynatraceSyntheticLocationsLocations {
  /**
  * The cloud provider where the location is hosted. 
  * 
  *  Only applicable to `PUBLIC` locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#cloud_platform DataDynatraceSyntheticLocations#cloud_platform}
  */
  readonly cloudPlatform?: string;
  /**
  * The unique ID of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#entity_id DataDynatraceSyntheticLocations#entity_id}
  */
  readonly entityId?: string;
  /**
  * The Dynatrace GeoLocation ID of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#geo_location_id DataDynatraceSyntheticLocations#geo_location_id}
  */
  readonly geoLocationId?: string;
  /**
  * The list of IP addresses assigned to the location. 
  * 
  *  Only applicable to `PUBLIC` locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#ips DataDynatraceSyntheticLocations#ips}
  */
  readonly ips?: string[];
  /**
  * The name of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#name DataDynatraceSyntheticLocations#name}
  */
  readonly name?: string;
  /**
  * The release stage of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#stage DataDynatraceSyntheticLocations#stage}
  */
  readonly stage?: string;
  /**
  * The status of the location: 
  * 
  * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location. 
  * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location. 
  * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#status DataDynatraceSyntheticLocations#status}
  */
  readonly status?: string;
  /**
  * The type of the location. Supported values are `PUBLIC`, `PRIVATE` and `CLUSTER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#type DataDynatraceSyntheticLocations#type}
  */
  readonly type?: string;
}

export function dataDynatraceSyntheticLocationsLocationsToTerraform(struct?: DataDynatraceSyntheticLocationsLocationsOutputReference | DataDynatraceSyntheticLocationsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_platform: cdktf.stringToTerraform(struct!.cloudPlatform),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    geo_location_id: cdktf.stringToTerraform(struct!.geoLocationId),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
    stage: cdktf.stringToTerraform(struct!.stage),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataDynatraceSyntheticLocationsLocationsToHclTerraform(struct?: DataDynatraceSyntheticLocationsLocationsOutputReference | DataDynatraceSyntheticLocationsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_platform: {
      value: cdktf.stringToHclTerraform(struct!.cloudPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location_id: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDynatraceSyntheticLocationsLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDynatraceSyntheticLocationsLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudPlatform = this._cloudPlatform;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._geoLocationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationId = this._geoLocationId;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDynatraceSyntheticLocationsLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudPlatform = undefined;
      this._entityId = undefined;
      this._geoLocationId = undefined;
      this._ips = undefined;
      this._name = undefined;
      this._stage = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudPlatform = value.cloudPlatform;
      this._entityId = value.entityId;
      this._geoLocationId = value.geoLocationId;
      this._ips = value.ips;
      this._name = value.name;
      this._stage = value.stage;
      this._status = value.status;
      this._type = value.type;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations dynatrace_synthetic_locations}
*/
export class DataDynatraceSyntheticLocations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_synthetic_locations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDynatraceSyntheticLocations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDynatraceSyntheticLocations to import
  * @param importFromId The id of the existing DataDynatraceSyntheticLocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDynatraceSyntheticLocations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_synthetic_locations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/data-sources/synthetic_locations dynatrace_synthetic_locations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDynatraceSyntheticLocationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDynatraceSyntheticLocationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_synthetic_locations',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._name = config.name;
    this._locations.internalValue = config.locations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // locations - computed: false, optional: true, required: false
  private _locations = new DataDynatraceSyntheticLocationsLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: DataDynatraceSyntheticLocationsLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      locations: dataDynatraceSyntheticLocationsLocationsToTerraform(this._locations.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: dataDynatraceSyntheticLocationsLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDynatraceSyntheticLocationsLocationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
