// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto upgrade of Chromium is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#auto_update_chromium SyntheticLocation#auto_update_chromium}
  */
  readonly autoUpdateChromium?: boolean | cdktf.IResolvable;
  /**
  * The alerting of location outage is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#availability_location_outage SyntheticLocation#availability_location_outage}
  */
  readonly availabilityLocationOutage?: boolean | cdktf.IResolvable;
  /**
  * The alerting of node outage is enabled (`true`) or disabled (`false`). 
  * 
  *  If enabled, the outage of *any* node in the location triggers an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#availability_node_outage SyntheticLocation#availability_node_outage}
  */
  readonly availabilityNodeOutage?: boolean | cdktf.IResolvable;
  /**
  * The notifications of location and node outage is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#availability_notifications_enabled SyntheticLocation#availability_notifications_enabled}
  */
  readonly availabilityNotificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The city of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#city SyntheticLocation#city}
  */
  readonly city?: string;
  /**
  * The country code of the location. 
  * 
  *  To fetch the list of available country codes, use the [GET all countries](https://dt-url.net/37030go) request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#country_code SyntheticLocation#country_code}
  */
  readonly countryCode?: string;
  /**
  * The deployment type of the location: 
  * 
  * * `STANDARD`: The location is deployed on Windows or Linux.
  * * `KUBERNETES`: The location is deployed on Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#deployment_type SyntheticLocation#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Containerized location property indicating whether FIPS mode is enabled on this location. Possible values: `DISABLED`, `ENABLED`, `ENABLED_WITH_CORPORATE_PROXY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#fips_mode SyntheticLocation#fips_mode}
  */
  readonly fipsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#id SyntheticLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The latitude of the location in `DDD.dddd` format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#latitude SyntheticLocation#latitude}
  */
  readonly latitude: number;
  /**
  * Alert if the location or node outage lasts longer than *X* minutes. 
  * 
  *  Only applicable when **availability_location_outage** or **availability_node_outage** is set to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#location_node_outage_delay_in_minutes SyntheticLocation#location_node_outage_delay_in_minutes}
  */
  readonly locationNodeOutageDelayInMinutes?: number;
  /**
  * The longitude of the location in `DDD.dddd` format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#longitude SyntheticLocation#longitude}
  */
  readonly longitude: number;
  /**
  * The maximum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#max_active_gate_count SyntheticLocation#max_active_gate_count}
  */
  readonly maxActiveGateCount?: number;
  /**
  * The minimum number of Active Gates required for that location. Not required when `deployment_type` is set to `STANDARD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#min_active_gate_count SyntheticLocation#min_active_gate_count}
  */
  readonly minActiveGateCount?: number;
  /**
  * Boolean value describes if icmp monitors will be executed on this location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#nam_execution_supported SyntheticLocation#nam_execution_supported}
  */
  readonly namExecutionSupported?: boolean | cdktf.IResolvable;
  /**
  * The name of the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#name SyntheticLocation#name}
  */
  readonly name: string;
  /**
  * Possible values: `UNSUPPORTED`, `XS`, `S` and `M`. Not required when `deployment_type` is set to `STANDARD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#node_size SyntheticLocation#node_size}
  */
  readonly nodeSize?: string;
  /**
  * A list of synthetic nodes belonging to the location. 
  * 
  *  You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#nodes SyntheticLocation#nodes}
  */
  readonly nodes?: string[];
  /**
  * The region code of the location. 
  * 
  *  To fetch the list of available region codes, use the [GET regions of the country](https://dt-url.net/az230x0) request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#region_code SyntheticLocation#region_code}
  */
  readonly regionCode?: string;
  /**
  * Boolean value describes which kubernetes version will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#use_new_kubernetes_version SyntheticLocation#use_new_kubernetes_version}
  */
  readonly useNewKubernetesVersion?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location dynatrace_synthetic_location}
*/
export class SyntheticLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_synthetic_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticLocation to import
  * @param importFromId The id of the existing SyntheticLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_synthetic_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/synthetic_location dynatrace_synthetic_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticLocationConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_synthetic_location',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoUpdateChromium = config.autoUpdateChromium;
    this._availabilityLocationOutage = config.availabilityLocationOutage;
    this._availabilityNodeOutage = config.availabilityNodeOutage;
    this._availabilityNotificationsEnabled = config.availabilityNotificationsEnabled;
    this._city = config.city;
    this._countryCode = config.countryCode;
    this._deploymentType = config.deploymentType;
    this._fipsMode = config.fipsMode;
    this._id = config.id;
    this._latitude = config.latitude;
    this._locationNodeOutageDelayInMinutes = config.locationNodeOutageDelayInMinutes;
    this._longitude = config.longitude;
    this._maxActiveGateCount = config.maxActiveGateCount;
    this._minActiveGateCount = config.minActiveGateCount;
    this._namExecutionSupported = config.namExecutionSupported;
    this._name = config.name;
    this._nodeSize = config.nodeSize;
    this._nodes = config.nodes;
    this._regionCode = config.regionCode;
    this._useNewKubernetesVersion = config.useNewKubernetesVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_update_chromium - computed: false, optional: true, required: false
  private _autoUpdateChromium?: boolean | cdktf.IResolvable; 
  public get autoUpdateChromium() {
    return this.getBooleanAttribute('auto_update_chromium');
  }
  public set autoUpdateChromium(value: boolean | cdktf.IResolvable) {
    this._autoUpdateChromium = value;
  }
  public resetAutoUpdateChromium() {
    this._autoUpdateChromium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateChromiumInput() {
    return this._autoUpdateChromium;
  }

  // availability_location_outage - computed: false, optional: true, required: false
  private _availabilityLocationOutage?: boolean | cdktf.IResolvable; 
  public get availabilityLocationOutage() {
    return this.getBooleanAttribute('availability_location_outage');
  }
  public set availabilityLocationOutage(value: boolean | cdktf.IResolvable) {
    this._availabilityLocationOutage = value;
  }
  public resetAvailabilityLocationOutage() {
    this._availabilityLocationOutage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityLocationOutageInput() {
    return this._availabilityLocationOutage;
  }

  // availability_node_outage - computed: false, optional: true, required: false
  private _availabilityNodeOutage?: boolean | cdktf.IResolvable; 
  public get availabilityNodeOutage() {
    return this.getBooleanAttribute('availability_node_outage');
  }
  public set availabilityNodeOutage(value: boolean | cdktf.IResolvable) {
    this._availabilityNodeOutage = value;
  }
  public resetAvailabilityNodeOutage() {
    this._availabilityNodeOutage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityNodeOutageInput() {
    return this._availabilityNodeOutage;
  }

  // availability_notifications_enabled - computed: false, optional: true, required: false
  private _availabilityNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get availabilityNotificationsEnabled() {
    return this.getBooleanAttribute('availability_notifications_enabled');
  }
  public set availabilityNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._availabilityNotificationsEnabled = value;
  }
  public resetAvailabilityNotificationsEnabled() {
    this._availabilityNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityNotificationsEnabledInput() {
    return this._availabilityNotificationsEnabled;
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

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // fips_mode - computed: false, optional: true, required: false
  private _fipsMode?: string; 
  public get fipsMode() {
    return this.getStringAttribute('fips_mode');
  }
  public set fipsMode(value: string) {
    this._fipsMode = value;
  }
  public resetFipsMode() {
    this._fipsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsModeInput() {
    return this._fipsMode;
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

  // latitude - computed: false, optional: false, required: true
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // location_node_outage_delay_in_minutes - computed: false, optional: true, required: false
  private _locationNodeOutageDelayInMinutes?: number; 
  public get locationNodeOutageDelayInMinutes() {
    return this.getNumberAttribute('location_node_outage_delay_in_minutes');
  }
  public set locationNodeOutageDelayInMinutes(value: number) {
    this._locationNodeOutageDelayInMinutes = value;
  }
  public resetLocationNodeOutageDelayInMinutes() {
    this._locationNodeOutageDelayInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNodeOutageDelayInMinutesInput() {
    return this._locationNodeOutageDelayInMinutes;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // max_active_gate_count - computed: false, optional: true, required: false
  private _maxActiveGateCount?: number; 
  public get maxActiveGateCount() {
    return this.getNumberAttribute('max_active_gate_count');
  }
  public set maxActiveGateCount(value: number) {
    this._maxActiveGateCount = value;
  }
  public resetMaxActiveGateCount() {
    this._maxActiveGateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxActiveGateCountInput() {
    return this._maxActiveGateCount;
  }

  // min_active_gate_count - computed: false, optional: true, required: false
  private _minActiveGateCount?: number; 
  public get minActiveGateCount() {
    return this.getNumberAttribute('min_active_gate_count');
  }
  public set minActiveGateCount(value: number) {
    this._minActiveGateCount = value;
  }
  public resetMinActiveGateCount() {
    this._minActiveGateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minActiveGateCountInput() {
    return this._minActiveGateCount;
  }

  // nam_execution_supported - computed: false, optional: true, required: false
  private _namExecutionSupported?: boolean | cdktf.IResolvable; 
  public get namExecutionSupported() {
    return this.getBooleanAttribute('nam_execution_supported');
  }
  public set namExecutionSupported(value: boolean | cdktf.IResolvable) {
    this._namExecutionSupported = value;
  }
  public resetNamExecutionSupported() {
    this._namExecutionSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namExecutionSupportedInput() {
    return this._namExecutionSupported;
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

  // node_size - computed: false, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
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

  // use_new_kubernetes_version - computed: false, optional: true, required: false
  private _useNewKubernetesVersion?: boolean | cdktf.IResolvable; 
  public get useNewKubernetesVersion() {
    return this.getBooleanAttribute('use_new_kubernetes_version');
  }
  public set useNewKubernetesVersion(value: boolean | cdktf.IResolvable) {
    this._useNewKubernetesVersion = value;
  }
  public resetUseNewKubernetesVersion() {
    this._useNewKubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNewKubernetesVersionInput() {
    return this._useNewKubernetesVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_update_chromium: cdktf.booleanToTerraform(this._autoUpdateChromium),
      availability_location_outage: cdktf.booleanToTerraform(this._availabilityLocationOutage),
      availability_node_outage: cdktf.booleanToTerraform(this._availabilityNodeOutage),
      availability_notifications_enabled: cdktf.booleanToTerraform(this._availabilityNotificationsEnabled),
      city: cdktf.stringToTerraform(this._city),
      country_code: cdktf.stringToTerraform(this._countryCode),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      fips_mode: cdktf.stringToTerraform(this._fipsMode),
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.numberToTerraform(this._latitude),
      location_node_outage_delay_in_minutes: cdktf.numberToTerraform(this._locationNodeOutageDelayInMinutes),
      longitude: cdktf.numberToTerraform(this._longitude),
      max_active_gate_count: cdktf.numberToTerraform(this._maxActiveGateCount),
      min_active_gate_count: cdktf.numberToTerraform(this._minActiveGateCount),
      nam_execution_supported: cdktf.booleanToTerraform(this._namExecutionSupported),
      name: cdktf.stringToTerraform(this._name),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      region_code: cdktf.stringToTerraform(this._regionCode),
      use_new_kubernetes_version: cdktf.booleanToTerraform(this._useNewKubernetesVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_update_chromium: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateChromium),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_location_outage: {
        value: cdktf.booleanToHclTerraform(this._availabilityLocationOutage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_node_outage: {
        value: cdktf.booleanToHclTerraform(this._availabilityNodeOutage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._availabilityNotificationsEnabled),
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
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips_mode: {
        value: cdktf.stringToHclTerraform(this._fipsMode),
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
      location_node_outage_delay_in_minutes: {
        value: cdktf.numberToHclTerraform(this._locationNodeOutageDelayInMinutes),
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
      max_active_gate_count: {
        value: cdktf.numberToHclTerraform(this._maxActiveGateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_active_gate_count: {
        value: cdktf.numberToHclTerraform(this._minActiveGateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nam_execution_supported: {
        value: cdktf.booleanToHclTerraform(this._namExecutionSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_size: {
        value: cdktf.stringToHclTerraform(this._nodeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region_code: {
        value: cdktf.stringToHclTerraform(this._regionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_new_kubernetes_version: {
        value: cdktf.booleanToHclTerraform(this._useNewKubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
