// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdcSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Site Detail Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#address_line CdcSite#address_line}
  */
  readonly addressLine: string;
  /**
  * Whether there is an upstream circuit breaker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#breaker_requirement CdcSite#breaker_requirement}
  */
  readonly breakerRequirement?: boolean | cdktf.IResolvable;
  /**
  * Site City.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#city CdcSite#city}
  */
  readonly city: string;
  /**
  * Whether the following environmental conditions are met: n1. There are no material requirements or the acceptance standard on site that will affect the delivery and installation of the CDC device. n2. The following conditions are met for finalized rack positions: Temperature ranges from 41 to 104 degrees F (5 to 40 degrees C). Humidity ranges from 10 degrees F (-12 degrees C) to 70 degrees F (21 degrees C) and relative humidity ranges from 8% RH to 80% RH. Air flows from front to back at the rack position and there is sufficient air in CFM (cubic feet per minute). The air quantity in CFM must be 145.8 times the power consumption (in KVA) of CDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#condition_requirement CdcSite#condition_requirement}
  */
  readonly conditionRequirement?: boolean | cdktf.IResolvable;
  /**
  * Site Country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#country CdcSite#country}
  */
  readonly country: string;
  /**
  * Site Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#description CdcSite#description}
  */
  readonly description?: string;
  /**
  * Whether the following dimension conditions are met: Your loading dock can accommodate one rack container (H x W x D = 94 x 54 x 48). You can provide a clear route from the delivery point of your rack (H x W x D = 80 x 24 x 48) to its final installation location. You should consider platforms, corridors, doors, turns, ramps, freight elevators as well as other access restrictions when measuring the depth. There shall be a 48 or greater front clearance and a 24 or greater rear clearance where the CDC is finally installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#dimension_requirement CdcSite#dimension_requirement}
  */
  readonly dimensionRequirement?: boolean | cdktf.IResolvable;
  /**
  * Site Fiber Type. Using optical fiber type to connect the CDC device to the network SM(Single-Mode) or MM(Multi-Mode) fibers are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#fiber_type CdcSite#fiber_type}
  */
  readonly fiberType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#id CdcSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Site Max Weight capacity (KG).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#max_weight CdcSite#max_weight}
  */
  readonly maxWeight?: number;
  /**
  * Site Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#name CdcSite#name}
  */
  readonly name: string;
  /**
  * Whether you need help from Tencent Cloud for rack installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#need_help CdcSite#need_help}
  */
  readonly needHelp?: boolean | cdktf.IResolvable;
  /**
  * Site Optical Standard. Optical standard used to connect the CDC device to the network This field depends on the uplink speed, optical fiber type, and distance to upstream equipment. Allow value: `SM`, `MM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#optical_standard CdcSite#optical_standard}
  */
  readonly opticalStandard?: string;
  /**
  * Detailed address of the site area (to be added).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#optional_address_line CdcSite#optional_address_line}
  */
  readonly optionalAddressLine?: string;
  /**
  * Site Power Connectors. Example: 380VAC3P.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#power_connectors CdcSite#power_connectors}
  */
  readonly powerConnectors?: string;
  /**
  * Site Power DrawKva (KW).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#power_draw_kva CdcSite#power_draw_kva}
  */
  readonly powerDrawKva?: number;
  /**
  * Site Power Feed Drop. Whether power is supplied from above or below the rack. Allow value: `UP`, `DOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#power_feed_drop CdcSite#power_feed_drop}
  */
  readonly powerFeedDrop?: string;
  /**
  * Site Province.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#province CdcSite#province}
  */
  readonly province: string;
  /**
  * Whether redundant upstream equipment (switch or router) is provided so that both network devices can be connected to the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#redundant_networking CdcSite#redundant_networking}
  */
  readonly redundantNetworking?: boolean | cdktf.IResolvable;
  /**
  * Whether there is power redundancy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#redundant_power CdcSite#redundant_power}
  */
  readonly redundantPower?: boolean | cdktf.IResolvable;
  /**
  * Number of uplinks used by each CDC device (2 devices per rack) when connected to the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#uplink_count CdcSite#uplink_count}
  */
  readonly uplinkCount?: number;
  /**
  * Uplink speed from the network to Tencent Cloud Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#uplink_speed_gbps CdcSite#uplink_speed_gbps}
  */
  readonly uplinkSpeedGbps?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site tencentcloud_cdc_site}
*/
export class CdcSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdc_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdcSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdcSite to import
  * @param importFromId The id of the existing CdcSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdcSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdc_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cdc_site tencentcloud_cdc_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdcSiteConfig
  */
  public constructor(scope: Construct, id: string, config: CdcSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdc_site',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressLine = config.addressLine;
    this._breakerRequirement = config.breakerRequirement;
    this._city = config.city;
    this._conditionRequirement = config.conditionRequirement;
    this._country = config.country;
    this._description = config.description;
    this._dimensionRequirement = config.dimensionRequirement;
    this._fiberType = config.fiberType;
    this._id = config.id;
    this._maxWeight = config.maxWeight;
    this._name = config.name;
    this._needHelp = config.needHelp;
    this._opticalStandard = config.opticalStandard;
    this._optionalAddressLine = config.optionalAddressLine;
    this._powerConnectors = config.powerConnectors;
    this._powerDrawKva = config.powerDrawKva;
    this._powerFeedDrop = config.powerFeedDrop;
    this._province = config.province;
    this._redundantNetworking = config.redundantNetworking;
    this._redundantPower = config.redundantPower;
    this._uplinkCount = config.uplinkCount;
    this._uplinkSpeedGbps = config.uplinkSpeedGbps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_line - computed: false, optional: false, required: true
  private _addressLine?: string; 
  public get addressLine() {
    return this.getStringAttribute('address_line');
  }
  public set addressLine(value: string) {
    this._addressLine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLineInput() {
    return this._addressLine;
  }

  // breaker_requirement - computed: true, optional: true, required: false
  private _breakerRequirement?: boolean | cdktf.IResolvable; 
  public get breakerRequirement() {
    return this.getBooleanAttribute('breaker_requirement');
  }
  public set breakerRequirement(value: boolean | cdktf.IResolvable) {
    this._breakerRequirement = value;
  }
  public resetBreakerRequirement() {
    this._breakerRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRequirementInput() {
    return this._breakerRequirement;
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // condition_requirement - computed: true, optional: true, required: false
  private _conditionRequirement?: boolean | cdktf.IResolvable; 
  public get conditionRequirement() {
    return this.getBooleanAttribute('condition_requirement');
  }
  public set conditionRequirement(value: boolean | cdktf.IResolvable) {
    this._conditionRequirement = value;
  }
  public resetConditionRequirement() {
    this._conditionRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionRequirementInput() {
    return this._conditionRequirement;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dimension_requirement - computed: true, optional: true, required: false
  private _dimensionRequirement?: boolean | cdktf.IResolvable; 
  public get dimensionRequirement() {
    return this.getBooleanAttribute('dimension_requirement');
  }
  public set dimensionRequirement(value: boolean | cdktf.IResolvable) {
    this._dimensionRequirement = value;
  }
  public resetDimensionRequirement() {
    this._dimensionRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionRequirementInput() {
    return this._dimensionRequirement;
  }

  // fiber_type - computed: false, optional: true, required: false
  private _fiberType?: string; 
  public get fiberType() {
    return this.getStringAttribute('fiber_type');
  }
  public set fiberType(value: string) {
    this._fiberType = value;
  }
  public resetFiberType() {
    this._fiberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiberTypeInput() {
    return this._fiberType;
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

  // max_weight - computed: true, optional: true, required: false
  private _maxWeight?: number; 
  public get maxWeight() {
    return this.getNumberAttribute('max_weight');
  }
  public set maxWeight(value: number) {
    this._maxWeight = value;
  }
  public resetMaxWeight() {
    this._maxWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWeightInput() {
    return this._maxWeight;
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

  // need_help - computed: true, optional: true, required: false
  private _needHelp?: boolean | cdktf.IResolvable; 
  public get needHelp() {
    return this.getBooleanAttribute('need_help');
  }
  public set needHelp(value: boolean | cdktf.IResolvable) {
    this._needHelp = value;
  }
  public resetNeedHelp() {
    this._needHelp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needHelpInput() {
    return this._needHelp;
  }

  // optical_standard - computed: false, optional: true, required: false
  private _opticalStandard?: string; 
  public get opticalStandard() {
    return this.getStringAttribute('optical_standard');
  }
  public set opticalStandard(value: string) {
    this._opticalStandard = value;
  }
  public resetOpticalStandard() {
    this._opticalStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opticalStandardInput() {
    return this._opticalStandard;
  }

  // optional_address_line - computed: false, optional: true, required: false
  private _optionalAddressLine?: string; 
  public get optionalAddressLine() {
    return this.getStringAttribute('optional_address_line');
  }
  public set optionalAddressLine(value: string) {
    this._optionalAddressLine = value;
  }
  public resetOptionalAddressLine() {
    this._optionalAddressLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAddressLineInput() {
    return this._optionalAddressLine;
  }

  // power_connectors - computed: false, optional: true, required: false
  private _powerConnectors?: string; 
  public get powerConnectors() {
    return this.getStringAttribute('power_connectors');
  }
  public set powerConnectors(value: string) {
    this._powerConnectors = value;
  }
  public resetPowerConnectors() {
    this._powerConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerConnectorsInput() {
    return this._powerConnectors;
  }

  // power_draw_kva - computed: true, optional: true, required: false
  private _powerDrawKva?: number; 
  public get powerDrawKva() {
    return this.getNumberAttribute('power_draw_kva');
  }
  public set powerDrawKva(value: number) {
    this._powerDrawKva = value;
  }
  public resetPowerDrawKva() {
    this._powerDrawKva = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerDrawKvaInput() {
    return this._powerDrawKva;
  }

  // power_feed_drop - computed: false, optional: true, required: false
  private _powerFeedDrop?: string; 
  public get powerFeedDrop() {
    return this.getStringAttribute('power_feed_drop');
  }
  public set powerFeedDrop(value: string) {
    this._powerFeedDrop = value;
  }
  public resetPowerFeedDrop() {
    this._powerFeedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerFeedDropInput() {
    return this._powerFeedDrop;
  }

  // province - computed: false, optional: false, required: true
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // redundant_networking - computed: true, optional: true, required: false
  private _redundantNetworking?: boolean | cdktf.IResolvable; 
  public get redundantNetworking() {
    return this.getBooleanAttribute('redundant_networking');
  }
  public set redundantNetworking(value: boolean | cdktf.IResolvable) {
    this._redundantNetworking = value;
  }
  public resetRedundantNetworking() {
    this._redundantNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantNetworkingInput() {
    return this._redundantNetworking;
  }

  // redundant_power - computed: true, optional: true, required: false
  private _redundantPower?: boolean | cdktf.IResolvable; 
  public get redundantPower() {
    return this.getBooleanAttribute('redundant_power');
  }
  public set redundantPower(value: boolean | cdktf.IResolvable) {
    this._redundantPower = value;
  }
  public resetRedundantPower() {
    this._redundantPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantPowerInput() {
    return this._redundantPower;
  }

  // uplink_count - computed: true, optional: true, required: false
  private _uplinkCount?: number; 
  public get uplinkCount() {
    return this.getNumberAttribute('uplink_count');
  }
  public set uplinkCount(value: number) {
    this._uplinkCount = value;
  }
  public resetUplinkCount() {
    this._uplinkCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkCountInput() {
    return this._uplinkCount;
  }

  // uplink_speed_gbps - computed: true, optional: true, required: false
  private _uplinkSpeedGbps?: number; 
  public get uplinkSpeedGbps() {
    return this.getNumberAttribute('uplink_speed_gbps');
  }
  public set uplinkSpeedGbps(value: number) {
    this._uplinkSpeedGbps = value;
  }
  public resetUplinkSpeedGbps() {
    this._uplinkSpeedGbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkSpeedGbpsInput() {
    return this._uplinkSpeedGbps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_line: cdktf.stringToTerraform(this._addressLine),
      breaker_requirement: cdktf.booleanToTerraform(this._breakerRequirement),
      city: cdktf.stringToTerraform(this._city),
      condition_requirement: cdktf.booleanToTerraform(this._conditionRequirement),
      country: cdktf.stringToTerraform(this._country),
      description: cdktf.stringToTerraform(this._description),
      dimension_requirement: cdktf.booleanToTerraform(this._dimensionRequirement),
      fiber_type: cdktf.stringToTerraform(this._fiberType),
      id: cdktf.stringToTerraform(this._id),
      max_weight: cdktf.numberToTerraform(this._maxWeight),
      name: cdktf.stringToTerraform(this._name),
      need_help: cdktf.booleanToTerraform(this._needHelp),
      optical_standard: cdktf.stringToTerraform(this._opticalStandard),
      optional_address_line: cdktf.stringToTerraform(this._optionalAddressLine),
      power_connectors: cdktf.stringToTerraform(this._powerConnectors),
      power_draw_kva: cdktf.numberToTerraform(this._powerDrawKva),
      power_feed_drop: cdktf.stringToTerraform(this._powerFeedDrop),
      province: cdktf.stringToTerraform(this._province),
      redundant_networking: cdktf.booleanToTerraform(this._redundantNetworking),
      redundant_power: cdktf.booleanToTerraform(this._redundantPower),
      uplink_count: cdktf.numberToTerraform(this._uplinkCount),
      uplink_speed_gbps: cdktf.numberToTerraform(this._uplinkSpeedGbps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_line: {
        value: cdktf.stringToHclTerraform(this._addressLine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      breaker_requirement: {
        value: cdktf.booleanToHclTerraform(this._breakerRequirement),
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
      condition_requirement: {
        value: cdktf.booleanToHclTerraform(this._conditionRequirement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimension_requirement: {
        value: cdktf.booleanToHclTerraform(this._dimensionRequirement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fiber_type: {
        value: cdktf.stringToHclTerraform(this._fiberType),
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
      max_weight: {
        value: cdktf.numberToHclTerraform(this._maxWeight),
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
      need_help: {
        value: cdktf.booleanToHclTerraform(this._needHelp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optical_standard: {
        value: cdktf.stringToHclTerraform(this._opticalStandard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_address_line: {
        value: cdktf.stringToHclTerraform(this._optionalAddressLine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_connectors: {
        value: cdktf.stringToHclTerraform(this._powerConnectors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_draw_kva: {
        value: cdktf.numberToHclTerraform(this._powerDrawKva),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      power_feed_drop: {
        value: cdktf.stringToHclTerraform(this._powerFeedDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      province: {
        value: cdktf.stringToHclTerraform(this._province),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundant_networking: {
        value: cdktf.booleanToHclTerraform(this._redundantNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redundant_power: {
        value: cdktf.booleanToHclTerraform(this._redundantPower),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uplink_count: {
        value: cdktf.numberToHclTerraform(this._uplinkCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_speed_gbps: {
        value: cdktf.numberToHclTerraform(this._uplinkSpeedGbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
