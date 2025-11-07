// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInternetservicenameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#city_id FirewallInternetservicename#city_id}
  */
  readonly cityId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#country_id FirewallInternetservicename#country_id}
  */
  readonly countryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#id FirewallInternetservicename#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#internet_service_id FirewallInternetservicename#internet_service_id}
  */
  readonly internetServiceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#name FirewallInternetservicename#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#region_id FirewallInternetservicename#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#type FirewallInternetservicename#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#vdomparam FirewallInternetservicename#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename fortios_firewall_internetservicename}
*/
export class FirewallInternetservicename extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_internetservicename";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInternetservicename resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInternetservicename to import
  * @param importFromId The id of the existing FirewallInternetservicename that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInternetservicename to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_internetservicename", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicename fortios_firewall_internetservicename} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInternetservicenameConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallInternetservicenameConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_internetservicename',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cityId = config.cityId;
    this._countryId = config.countryId;
    this._id = config.id;
    this._internetServiceId = config.internetServiceId;
    this._name = config.name;
    this._regionId = config.regionId;
    this._type = config.type;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city_id - computed: false, optional: true, required: false
  private _cityId?: number; 
  public get cityId() {
    return this.getNumberAttribute('city_id');
  }
  public set cityId(value: number) {
    this._cityId = value;
  }
  public resetCityId() {
    this._cityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityIdInput() {
    return this._cityId;
  }

  // country_id - computed: false, optional: true, required: false
  private _countryId?: number; 
  public get countryId() {
    return this.getNumberAttribute('country_id');
  }
  public set countryId(value: number) {
    this._countryId = value;
  }
  public resetCountryId() {
    this._countryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryIdInput() {
    return this._countryId;
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

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId?: number; 
  public get internetServiceId() {
    return this.getNumberAttribute('internet_service_id');
  }
  public set internetServiceId(value: number) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
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

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // type - computed: true, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city_id: cdktf.numberToTerraform(this._cityId),
      country_id: cdktf.numberToTerraform(this._countryId),
      id: cdktf.stringToTerraform(this._id),
      internet_service_id: cdktf.numberToTerraform(this._internetServiceId),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.numberToTerraform(this._regionId),
      type: cdktf.stringToTerraform(this._type),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city_id: {
        value: cdktf.numberToHclTerraform(this._cityId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      country_id: {
        value: cdktf.numberToHclTerraform(this._countryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_id: {
        value: cdktf.numberToHclTerraform(this._internetServiceId),
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
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
