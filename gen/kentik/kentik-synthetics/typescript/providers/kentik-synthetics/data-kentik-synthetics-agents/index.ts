// https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKentikSyntheticsAgentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents#id DataKentikSyntheticsAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents#latitude DataKentikSyntheticsAgents#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents#longitude DataKentikSyntheticsAgents#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents#max_distance DataKentikSyntheticsAgents#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents#min_distance DataKentikSyntheticsAgents#min_distance}
  */
  readonly minDistance?: number;
}
export interface DataKentikSyntheticsAgentsItems {
}

export function dataKentikSyntheticsAgentsItemsToTerraform(struct?: DataKentikSyntheticsAgentsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKentikSyntheticsAgentsItemsToHclTerraform(struct?: DataKentikSyntheticsAgentsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKentikSyntheticsAgentsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKentikSyntheticsAgentsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKentikSyntheticsAgentsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_impl - computed: true, optional: false, required: false
  public get agentImpl() {
    return this.getStringAttribute('agent_impl');
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // cloud_vpc - computed: true, optional: false, required: false
  public get cloudVpc() {
    return this.getStringAttribute('cloud_vpc');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // last_authed - computed: true, optional: false, required: false
  public get lastAuthed() {
    return this.getStringAttribute('last_authed');
  }

  // lat - computed: true, optional: false, required: false
  public get lat() {
    return this.getNumberAttribute('lat');
  }

  // local_ip - computed: true, optional: false, required: false
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }

  // long - computed: true, optional: false, required: false
  public get long() {
    return this.getNumberAttribute('long');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // test_ids - computed: true, optional: false, required: false
  public get testIds() {
    return this.getListAttribute('test_ids');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataKentikSyntheticsAgentsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataKentikSyntheticsAgentsItemsOutputReference {
    return new DataKentikSyntheticsAgentsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents kentik-synthetics_agents}
*/
export class DataKentikSyntheticsAgents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kentik-synthetics_agents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKentikSyntheticsAgents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKentikSyntheticsAgents to import
  * @param importFromId The id of the existing DataKentikSyntheticsAgents that should be imported. Refer to the {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKentikSyntheticsAgents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kentik-synthetics_agents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/data-sources/agents kentik-synthetics_agents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKentikSyntheticsAgentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKentikSyntheticsAgentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kentik-synthetics_agents',
      terraformGeneratorMetadata: {
        providerName: 'kentik-synthetics',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
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
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._maxDistance = config.maxDistance;
    this._minDistance = config.minDistance;
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

  // invalid_agents_count - computed: true, optional: false, required: false
  public get invalidAgentsCount() {
    return this.getNumberAttribute('invalid_agents_count');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKentikSyntheticsAgentsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // max_distance - computed: false, optional: true, required: false
  private _maxDistance?: number; 
  public get maxDistance() {
    return this.getNumberAttribute('max_distance');
  }
  public set maxDistance(value: number) {
    this._maxDistance = value;
  }
  public resetMaxDistance() {
    this._maxDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDistanceInput() {
    return this._maxDistance;
  }

  // min_distance - computed: false, optional: true, required: false
  private _minDistance?: number; 
  public get minDistance() {
    return this.getNumberAttribute('min_distance');
  }
  public set minDistance(value: number) {
    this._minDistance = value;
  }
  public resetMinDistance() {
    this._minDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDistanceInput() {
    return this._minDistance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      max_distance: cdktf.numberToTerraform(this._maxDistance),
      min_distance: cdktf.numberToTerraform(this._minDistance),
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
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_distance: {
        value: cdktf.numberToHclTerraform(this._maxDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_distance: {
        value: cdktf.numberToHclTerraform(this._minDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
