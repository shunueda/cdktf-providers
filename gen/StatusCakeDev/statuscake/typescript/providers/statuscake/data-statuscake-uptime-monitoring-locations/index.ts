// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/uptime_monitoring_locations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStatuscakeUptimeMonitoringLocationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/uptime_monitoring_locations#id DataStatuscakeUptimeMonitoringLocations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location region code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/uptime_monitoring_locations#region_code DataStatuscakeUptimeMonitoringLocations#region_code}
  */
  readonly regionCode?: string;
}
export interface DataStatuscakeUptimeMonitoringLocationsLocations {
}

export function dataStatuscakeUptimeMonitoringLocationsLocationsToTerraform(struct?: DataStatuscakeUptimeMonitoringLocationsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStatuscakeUptimeMonitoringLocationsLocationsToHclTerraform(struct?: DataStatuscakeUptimeMonitoringLocationsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStatuscakeUptimeMonitoringLocationsLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataStatuscakeUptimeMonitoringLocationsLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStatuscakeUptimeMonitoringLocationsLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataStatuscakeUptimeMonitoringLocationsLocationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataStatuscakeUptimeMonitoringLocationsLocationsOutputReference {
    return new DataStatuscakeUptimeMonitoringLocationsLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/uptime_monitoring_locations statuscake_uptime_monitoring_locations}
*/
export class DataStatuscakeUptimeMonitoringLocations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_uptime_monitoring_locations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStatuscakeUptimeMonitoringLocations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStatuscakeUptimeMonitoringLocations to import
  * @param importFromId The id of the existing DataStatuscakeUptimeMonitoringLocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/uptime_monitoring_locations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStatuscakeUptimeMonitoringLocations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_uptime_monitoring_locations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/uptime_monitoring_locations statuscake_uptime_monitoring_locations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStatuscakeUptimeMonitoringLocationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataStatuscakeUptimeMonitoringLocationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'statuscake_uptime_monitoring_locations',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2'
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
    this._regionCode = config.regionCode;
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

  // locations - computed: true, optional: false, required: false
  private _locations = new DataStatuscakeUptimeMonitoringLocationsLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }

  // region_code - computed: false, optional: true, required: false
  private _regionCode?: string; 
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
  public set regionCode(value: string) {
    this._regionCode = value;
  }
  public resetRegionCode() {
    this._regionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region_code: cdktf.stringToTerraform(this._regionCode),
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
      region_code: {
        value: cdktf.stringToHclTerraform(this._regionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
