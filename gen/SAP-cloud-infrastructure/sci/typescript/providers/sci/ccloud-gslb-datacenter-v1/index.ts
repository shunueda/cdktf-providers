// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcloudGslbDatacenterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#admin_state_up CcloudGslbDatacenterV1#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#city CcloudGslbDatacenterV1#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#continent CcloudGslbDatacenterV1#continent}
  */
  readonly continent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#country CcloudGslbDatacenterV1#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#id CcloudGslbDatacenterV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#latitude CcloudGslbDatacenterV1#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#longitude CcloudGslbDatacenterV1#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#name CcloudGslbDatacenterV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#project_id CcloudGslbDatacenterV1#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#region CcloudGslbDatacenterV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#scope CcloudGslbDatacenterV1#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#service_provider CcloudGslbDatacenterV1#service_provider}
  */
  readonly serviceProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#state_or_province CcloudGslbDatacenterV1#state_or_province}
  */
  readonly stateOrProvince?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1 ccloud_gslb_datacenter_v1}
*/
export class CcloudGslbDatacenterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ccloud_gslb_datacenter_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcloudGslbDatacenterV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcloudGslbDatacenterV1 to import
  * @param importFromId The id of the existing CcloudGslbDatacenterV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcloudGslbDatacenterV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ccloud_gslb_datacenter_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_gslb_datacenter_v1 ccloud_gslb_datacenter_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcloudGslbDatacenterV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: CcloudGslbDatacenterV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ccloud_gslb_datacenter_v1',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminStateUp = config.adminStateUp;
    this._city = config.city;
    this._continent = config.continent;
    this._country = config.country;
    this._id = config.id;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._scope = config.scope;
    this._serviceProvider = config.serviceProvider;
    this._stateOrProvince = config.stateOrProvince;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
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

  // continent - computed: false, optional: true, required: false
  private _continent?: string; 
  public get continent() {
    return this.getStringAttribute('continent');
  }
  public set continent(value: string) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // latitude - computed: true, optional: true, required: false
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

  // longitude - computed: true, optional: true, required: false
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

  // meta - computed: true, optional: false, required: false
  public get meta() {
    return this.getNumberAttribute('meta');
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // region - computed: true, optional: true, required: false
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_provider - computed: false, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // state_or_province - computed: false, optional: true, required: false
  private _stateOrProvince?: string; 
  public get stateOrProvince() {
    return this.getStringAttribute('state_or_province');
  }
  public set stateOrProvince(value: string) {
    this._stateOrProvince = value;
  }
  public resetStateOrProvince() {
    this._stateOrProvince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOrProvinceInput() {
    return this._stateOrProvince;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      city: cdktf.stringToTerraform(this._city),
      continent: cdktf.stringToTerraform(this._continent),
      country: cdktf.stringToTerraform(this._country),
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      scope: cdktf.stringToTerraform(this._scope),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
      state_or_province: cdktf.stringToTerraform(this._stateOrProvince),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state_up: {
        value: cdktf.booleanToHclTerraform(this._adminStateUp),
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
      continent: {
        value: cdktf.stringToHclTerraform(this._continent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_or_province: {
        value: cdktf.stringToHclTerraform(this._stateOrProvince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
