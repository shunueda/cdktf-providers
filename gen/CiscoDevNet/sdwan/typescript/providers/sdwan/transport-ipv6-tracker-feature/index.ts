// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportIpv6TrackerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#description TransportIpv6TrackerFeature#description}
  */
  readonly description?: string;
  /**
  * API url of endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_api_url TransportIpv6TrackerFeature#endpoint_api_url}
  */
  readonly endpointApiUrl?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_api_url_variable TransportIpv6TrackerFeature#endpoint_api_url_variable}
  */
  readonly endpointApiUrlVariable?: string;
  /**
  * Endpoint DNS Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_dns_name TransportIpv6TrackerFeature#endpoint_dns_name}
  */
  readonly endpointDnsName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_dns_name_variable TransportIpv6TrackerFeature#endpoint_dns_name_variable}
  */
  readonly endpointDnsNameVariable?: string;
  /**
  * Endpoint IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_ip TransportIpv6TrackerFeature#endpoint_ip}
  */
  readonly endpointIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_ip_variable TransportIpv6TrackerFeature#endpoint_ip_variable}
  */
  readonly endpointIpVariable?: string;
  /**
  * Endpoint Tracker Type
  *   - Choices: `ipv6-interface`
  *   - Default value: `ipv6-interface`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_tracker_type TransportIpv6TrackerFeature#endpoint_tracker_type}
  */
  readonly endpointTrackerType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#endpoint_tracker_type_variable TransportIpv6TrackerFeature#endpoint_tracker_type_variable}
  */
  readonly endpointTrackerTypeVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#feature_profile_id TransportIpv6TrackerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Interval
  *   - Range: `20`-`600`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#interval TransportIpv6TrackerFeature#interval}
  */
  readonly interval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#interval_variable TransportIpv6TrackerFeature#interval_variable}
  */
  readonly intervalVariable?: string;
  /**
  * Multiplier
  *   - Range: `1`-`10`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#multiplier TransportIpv6TrackerFeature#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#multiplier_variable TransportIpv6TrackerFeature#multiplier_variable}
  */
  readonly multiplierVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#name TransportIpv6TrackerFeature#name}
  */
  readonly name: string;
  /**
  * Threshold
  *   - Range: `100`-`1000`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#threshold TransportIpv6TrackerFeature#threshold}
  */
  readonly threshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#threshold_variable TransportIpv6TrackerFeature#threshold_variable}
  */
  readonly thresholdVariable?: string;
  /**
  * Tracker Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#tracker_name TransportIpv6TrackerFeature#tracker_name}
  */
  readonly trackerName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#tracker_name_variable TransportIpv6TrackerFeature#tracker_name_variable}
  */
  readonly trackerNameVariable?: string;
  /**
  * Tracker Type
  *   - Choices: `endpoint`
  *   - Default value: `endpoint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#tracker_type TransportIpv6TrackerFeature#tracker_type}
  */
  readonly trackerType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#tracker_type_variable TransportIpv6TrackerFeature#tracker_type_variable}
  */
  readonly trackerTypeVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature sdwan_transport_ipv6_tracker_feature}
*/
export class TransportIpv6TrackerFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_ipv6_tracker_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportIpv6TrackerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportIpv6TrackerFeature to import
  * @param importFromId The id of the existing TransportIpv6TrackerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportIpv6TrackerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_ipv6_tracker_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_feature sdwan_transport_ipv6_tracker_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportIpv6TrackerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportIpv6TrackerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_ipv6_tracker_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._endpointApiUrl = config.endpointApiUrl;
    this._endpointApiUrlVariable = config.endpointApiUrlVariable;
    this._endpointDnsName = config.endpointDnsName;
    this._endpointDnsNameVariable = config.endpointDnsNameVariable;
    this._endpointIp = config.endpointIp;
    this._endpointIpVariable = config.endpointIpVariable;
    this._endpointTrackerType = config.endpointTrackerType;
    this._endpointTrackerTypeVariable = config.endpointTrackerTypeVariable;
    this._featureProfileId = config.featureProfileId;
    this._interval = config.interval;
    this._intervalVariable = config.intervalVariable;
    this._multiplier = config.multiplier;
    this._multiplierVariable = config.multiplierVariable;
    this._name = config.name;
    this._threshold = config.threshold;
    this._thresholdVariable = config.thresholdVariable;
    this._trackerName = config.trackerName;
    this._trackerNameVariable = config.trackerNameVariable;
    this._trackerType = config.trackerType;
    this._trackerTypeVariable = config.trackerTypeVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // endpoint_api_url - computed: false, optional: true, required: false
  private _endpointApiUrl?: string; 
  public get endpointApiUrl() {
    return this.getStringAttribute('endpoint_api_url');
  }
  public set endpointApiUrl(value: string) {
    this._endpointApiUrl = value;
  }
  public resetEndpointApiUrl() {
    this._endpointApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointApiUrlInput() {
    return this._endpointApiUrl;
  }

  // endpoint_api_url_variable - computed: false, optional: true, required: false
  private _endpointApiUrlVariable?: string; 
  public get endpointApiUrlVariable() {
    return this.getStringAttribute('endpoint_api_url_variable');
  }
  public set endpointApiUrlVariable(value: string) {
    this._endpointApiUrlVariable = value;
  }
  public resetEndpointApiUrlVariable() {
    this._endpointApiUrlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointApiUrlVariableInput() {
    return this._endpointApiUrlVariable;
  }

  // endpoint_dns_name - computed: false, optional: true, required: false
  private _endpointDnsName?: string; 
  public get endpointDnsName() {
    return this.getStringAttribute('endpoint_dns_name');
  }
  public set endpointDnsName(value: string) {
    this._endpointDnsName = value;
  }
  public resetEndpointDnsName() {
    this._endpointDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDnsNameInput() {
    return this._endpointDnsName;
  }

  // endpoint_dns_name_variable - computed: false, optional: true, required: false
  private _endpointDnsNameVariable?: string; 
  public get endpointDnsNameVariable() {
    return this.getStringAttribute('endpoint_dns_name_variable');
  }
  public set endpointDnsNameVariable(value: string) {
    this._endpointDnsNameVariable = value;
  }
  public resetEndpointDnsNameVariable() {
    this._endpointDnsNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDnsNameVariableInput() {
    return this._endpointDnsNameVariable;
  }

  // endpoint_ip - computed: false, optional: true, required: false
  private _endpointIp?: string; 
  public get endpointIp() {
    return this.getStringAttribute('endpoint_ip');
  }
  public set endpointIp(value: string) {
    this._endpointIp = value;
  }
  public resetEndpointIp() {
    this._endpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpInput() {
    return this._endpointIp;
  }

  // endpoint_ip_variable - computed: false, optional: true, required: false
  private _endpointIpVariable?: string; 
  public get endpointIpVariable() {
    return this.getStringAttribute('endpoint_ip_variable');
  }
  public set endpointIpVariable(value: string) {
    this._endpointIpVariable = value;
  }
  public resetEndpointIpVariable() {
    this._endpointIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpVariableInput() {
    return this._endpointIpVariable;
  }

  // endpoint_tracker_type - computed: false, optional: true, required: false
  private _endpointTrackerType?: string; 
  public get endpointTrackerType() {
    return this.getStringAttribute('endpoint_tracker_type');
  }
  public set endpointTrackerType(value: string) {
    this._endpointTrackerType = value;
  }
  public resetEndpointTrackerType() {
    this._endpointTrackerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTrackerTypeInput() {
    return this._endpointTrackerType;
  }

  // endpoint_tracker_type_variable - computed: false, optional: true, required: false
  private _endpointTrackerTypeVariable?: string; 
  public get endpointTrackerTypeVariable() {
    return this.getStringAttribute('endpoint_tracker_type_variable');
  }
  public set endpointTrackerTypeVariable(value: string) {
    this._endpointTrackerTypeVariable = value;
  }
  public resetEndpointTrackerTypeVariable() {
    this._endpointTrackerTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTrackerTypeVariableInput() {
    return this._endpointTrackerTypeVariable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_variable - computed: false, optional: true, required: false
  private _intervalVariable?: string; 
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }
  public set intervalVariable(value: string) {
    this._intervalVariable = value;
  }
  public resetIntervalVariable() {
    this._intervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalVariableInput() {
    return this._intervalVariable;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // multiplier_variable - computed: false, optional: true, required: false
  private _multiplierVariable?: string; 
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }
  public set multiplierVariable(value: string) {
    this._multiplierVariable = value;
  }
  public resetMultiplierVariable() {
    this._multiplierVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierVariableInput() {
    return this._multiplierVariable;
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_variable - computed: false, optional: true, required: false
  private _thresholdVariable?: string; 
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }
  public set thresholdVariable(value: string) {
    this._thresholdVariable = value;
  }
  public resetThresholdVariable() {
    this._thresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVariableInput() {
    return this._thresholdVariable;
  }

  // tracker_name - computed: false, optional: true, required: false
  private _trackerName?: string; 
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  public resetTrackerName() {
    this._trackerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName;
  }

  // tracker_name_variable - computed: false, optional: true, required: false
  private _trackerNameVariable?: string; 
  public get trackerNameVariable() {
    return this.getStringAttribute('tracker_name_variable');
  }
  public set trackerNameVariable(value: string) {
    this._trackerNameVariable = value;
  }
  public resetTrackerNameVariable() {
    this._trackerNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameVariableInput() {
    return this._trackerNameVariable;
  }

  // tracker_type - computed: false, optional: true, required: false
  private _trackerType?: string; 
  public get trackerType() {
    return this.getStringAttribute('tracker_type');
  }
  public set trackerType(value: string) {
    this._trackerType = value;
  }
  public resetTrackerType() {
    this._trackerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerTypeInput() {
    return this._trackerType;
  }

  // tracker_type_variable - computed: false, optional: true, required: false
  private _trackerTypeVariable?: string; 
  public get trackerTypeVariable() {
    return this.getStringAttribute('tracker_type_variable');
  }
  public set trackerTypeVariable(value: string) {
    this._trackerTypeVariable = value;
  }
  public resetTrackerTypeVariable() {
    this._trackerTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerTypeVariableInput() {
    return this._trackerTypeVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      endpoint_api_url: cdktf.stringToTerraform(this._endpointApiUrl),
      endpoint_api_url_variable: cdktf.stringToTerraform(this._endpointApiUrlVariable),
      endpoint_dns_name: cdktf.stringToTerraform(this._endpointDnsName),
      endpoint_dns_name_variable: cdktf.stringToTerraform(this._endpointDnsNameVariable),
      endpoint_ip: cdktf.stringToTerraform(this._endpointIp),
      endpoint_ip_variable: cdktf.stringToTerraform(this._endpointIpVariable),
      endpoint_tracker_type: cdktf.stringToTerraform(this._endpointTrackerType),
      endpoint_tracker_type_variable: cdktf.stringToTerraform(this._endpointTrackerTypeVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      interval: cdktf.numberToTerraform(this._interval),
      interval_variable: cdktf.stringToTerraform(this._intervalVariable),
      multiplier: cdktf.numberToTerraform(this._multiplier),
      multiplier_variable: cdktf.stringToTerraform(this._multiplierVariable),
      name: cdktf.stringToTerraform(this._name),
      threshold: cdktf.numberToTerraform(this._threshold),
      threshold_variable: cdktf.stringToTerraform(this._thresholdVariable),
      tracker_name: cdktf.stringToTerraform(this._trackerName),
      tracker_name_variable: cdktf.stringToTerraform(this._trackerNameVariable),
      tracker_type: cdktf.stringToTerraform(this._trackerType),
      tracker_type_variable: cdktf.stringToTerraform(this._trackerTypeVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_api_url: {
        value: cdktf.stringToHclTerraform(this._endpointApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_api_url_variable: {
        value: cdktf.stringToHclTerraform(this._endpointApiUrlVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_dns_name: {
        value: cdktf.stringToHclTerraform(this._endpointDnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_dns_name_variable: {
        value: cdktf.stringToHclTerraform(this._endpointDnsNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._endpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_ip_variable: {
        value: cdktf.stringToHclTerraform(this._endpointIpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_tracker_type: {
        value: cdktf.stringToHclTerraform(this._endpointTrackerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_tracker_type_variable: {
        value: cdktf.stringToHclTerraform(this._endpointTrackerTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval_variable: {
        value: cdktf.stringToHclTerraform(this._intervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiplier: {
        value: cdktf.numberToHclTerraform(this._multiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiplier_variable: {
        value: cdktf.stringToHclTerraform(this._multiplierVariable),
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
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_variable: {
        value: cdktf.stringToHclTerraform(this._thresholdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_name: {
        value: cdktf.stringToHclTerraform(this._trackerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_name_variable: {
        value: cdktf.stringToHclTerraform(this._trackerNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_type: {
        value: cdktf.stringToHclTerraform(this._trackerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_type_variable: {
        value: cdktf.stringToHclTerraform(this._trackerTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
