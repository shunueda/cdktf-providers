// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricLocationsCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag specifying should only primary locations or locations of any type be returnedDefaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#any_type DataPacketfabricLocationsCloud#any_type}
  */
  readonly anyType?: boolean | cdktf.IResolvable;
  /**
  * Filter locations by the city name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#city DataPacketfabricLocationsCloud#city}
  */
  readonly city?: string;
  /**
  * Filter locations by cloud connection type. Options are: hosted or dedicated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#cloud_connection_type DataPacketfabricLocationsCloud#cloud_connection_type}
  */
  readonly cloudConnectionType: string;
  /**
  * Filter locations by cloud provider. Options are: aws, azure, packet, google, ibm, oracle, salesforce, webex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#cloud_provider DataPacketfabricLocationsCloud#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Flag to look for only cloud-router capable locationsDefaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#has_cloud_router DataPacketfabricLocationsCloud#has_cloud_router}
  */
  readonly hasCloudRouter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#id DataPacketfabricLocationsCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter locations by the market code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#market DataPacketfabricLocationsCloud#market}
  */
  readonly market?: string;
  /**
  * Flag specifying that only locations capable of NAT should be returnedDefaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#nat_capable DataPacketfabricLocationsCloud#nat_capable}
  */
  readonly natCapable?: boolean | cdktf.IResolvable;
  /**
  * Filter locations by the POP name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#pop DataPacketfabricLocationsCloud#pop}
  */
  readonly pop?: string;
  /**
  * Filter locations by the region's short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#region DataPacketfabricLocationsCloud#region}
  */
  readonly region?: string;
  /**
  * Filter locations by the state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#state DataPacketfabricLocationsCloud#state}
  */
  readonly state?: string;
}
export interface DataPacketfabricLocationsCloudCloudLocations {
}

export function dataPacketfabricLocationsCloudCloudLocationsToTerraform(struct?: DataPacketfabricLocationsCloudCloudLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricLocationsCloudCloudLocationsToHclTerraform(struct?: DataPacketfabricLocationsCloudCloudLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricLocationsCloudCloudLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricLocationsCloudCloudLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricLocationsCloudCloudLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address1 - computed: true, optional: false, required: false
  public get address1() {
    return this.getStringAttribute('address1');
  }

  // address2 - computed: true, optional: false, required: false
  public get address2() {
    return this.getStringAttribute('address2');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // cloud_connection_hosted_type - computed: true, optional: false, required: false
  public get cloudConnectionHostedType() {
    return this.getStringAttribute('cloud_connection_hosted_type');
  }

  // cloud_connection_region - computed: true, optional: false, required: false
  public get cloudConnectionRegion() {
    return this.getStringAttribute('cloud_connection_region');
  }

  // cloud_connection_region_description - computed: true, optional: false, required: false
  public get cloudConnectionRegionDescription() {
    return this.getStringAttribute('cloud_connection_region_description');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // enni_supported - computed: true, optional: false, required: false
  public get enniSupported() {
    return this.getBooleanAttribute('enni_supported');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // lead_time - computed: true, optional: false, required: false
  public get leadTime() {
    return this.getStringAttribute('lead_time');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // market_description - computed: true, optional: false, required: false
  public get marketDescription() {
    return this.getStringAttribute('market_description');
  }

  // network_provider - computed: true, optional: false, required: false
  public get networkProvider() {
    return this.getStringAttribute('network_provider');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // pcode - computed: true, optional: false, required: false
  public get pcode() {
    return this.getNumberAttribute('pcode');
  }

  // pop - computed: true, optional: false, required: false
  public get pop() {
    return this.getStringAttribute('pop');
  }

  // postal - computed: true, optional: false, required: false
  public get postal() {
    return this.getStringAttribute('postal');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // single_armed - computed: true, optional: false, required: false
  public get singleArmed() {
    return this.getBooleanAttribute('single_armed');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // site_code - computed: true, optional: false, required: false
  public get siteCode() {
    return this.getStringAttribute('site_code');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}

export class DataPacketfabricLocationsCloudCloudLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricLocationsCloudCloudLocationsOutputReference {
    return new DataPacketfabricLocationsCloudCloudLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud packetfabric_locations_cloud}
*/
export class DataPacketfabricLocationsCloud extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_locations_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricLocationsCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricLocationsCloud to import
  * @param importFromId The id of the existing DataPacketfabricLocationsCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricLocationsCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_locations_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_cloud packetfabric_locations_cloud} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricLocationsCloudConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricLocationsCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_locations_cloud',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anyType = config.anyType;
    this._city = config.city;
    this._cloudConnectionType = config.cloudConnectionType;
    this._cloudProvider = config.cloudProvider;
    this._hasCloudRouter = config.hasCloudRouter;
    this._id = config.id;
    this._market = config.market;
    this._natCapable = config.natCapable;
    this._pop = config.pop;
    this._region = config.region;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // any_type - computed: false, optional: true, required: false
  private _anyType?: boolean | cdktf.IResolvable; 
  public get anyType() {
    return this.getBooleanAttribute('any_type');
  }
  public set anyType(value: boolean | cdktf.IResolvable) {
    this._anyType = value;
  }
  public resetAnyType() {
    this._anyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyTypeInput() {
    return this._anyType;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // cloud_connection_type - computed: false, optional: false, required: true
  private _cloudConnectionType?: string; 
  public get cloudConnectionType() {
    return this.getStringAttribute('cloud_connection_type');
  }
  public set cloudConnectionType(value: string) {
    this._cloudConnectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectionTypeInput() {
    return this._cloudConnectionType;
  }

  // cloud_locations - computed: true, optional: false, required: false
  private _cloudLocations = new DataPacketfabricLocationsCloudCloudLocationsList(this, "cloud_locations", false);
  public get cloudLocations() {
    return this._cloudLocations;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // has_cloud_router - computed: false, optional: true, required: false
  private _hasCloudRouter?: boolean | cdktf.IResolvable; 
  public get hasCloudRouter() {
    return this.getBooleanAttribute('has_cloud_router');
  }
  public set hasCloudRouter(value: boolean | cdktf.IResolvable) {
    this._hasCloudRouter = value;
  }
  public resetHasCloudRouter() {
    this._hasCloudRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasCloudRouterInput() {
    return this._hasCloudRouter;
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

  // market - computed: false, optional: true, required: false
  private _market?: string; 
  public get market() {
    return this.getStringAttribute('market');
  }
  public set market(value: string) {
    this._market = value;
  }
  public resetMarket() {
    this._market = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketInput() {
    return this._market;
  }

  // nat_capable - computed: false, optional: true, required: false
  private _natCapable?: boolean | cdktf.IResolvable; 
  public get natCapable() {
    return this.getBooleanAttribute('nat_capable');
  }
  public set natCapable(value: boolean | cdktf.IResolvable) {
    this._natCapable = value;
  }
  public resetNatCapable() {
    this._natCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natCapableInput() {
    return this._natCapable;
  }

  // pop - computed: false, optional: true, required: false
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  public resetPop() {
    this._pop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      any_type: cdktf.booleanToTerraform(this._anyType),
      city: cdktf.stringToTerraform(this._city),
      cloud_connection_type: cdktf.stringToTerraform(this._cloudConnectionType),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      has_cloud_router: cdktf.booleanToTerraform(this._hasCloudRouter),
      id: cdktf.stringToTerraform(this._id),
      market: cdktf.stringToTerraform(this._market),
      nat_capable: cdktf.booleanToTerraform(this._natCapable),
      pop: cdktf.stringToTerraform(this._pop),
      region: cdktf.stringToTerraform(this._region),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      any_type: {
        value: cdktf.booleanToHclTerraform(this._anyType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_connection_type: {
        value: cdktf.stringToHclTerraform(this._cloudConnectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_cloud_router: {
        value: cdktf.booleanToHclTerraform(this._hasCloudRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      market: {
        value: cdktf.stringToHclTerraform(this._market),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_capable: {
        value: cdktf.booleanToHclTerraform(this._natCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
