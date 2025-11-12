// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_ipv6_tracker_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportIpv6TrackerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_ipv6_tracker_feature#feature_profile_id DataSdwanTransportIpv6TrackerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_ipv6_tracker_feature#id DataSdwanTransportIpv6TrackerFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_ipv6_tracker_feature sdwan_transport_ipv6_tracker_feature}
*/
export class DataSdwanTransportIpv6TrackerFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_ipv6_tracker_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportIpv6TrackerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportIpv6TrackerFeature to import
  * @param importFromId The id of the existing DataSdwanTransportIpv6TrackerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_ipv6_tracker_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportIpv6TrackerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_ipv6_tracker_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_ipv6_tracker_feature sdwan_transport_ipv6_tracker_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportIpv6TrackerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportIpv6TrackerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_ipv6_tracker_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint_api_url - computed: true, optional: false, required: false
  public get endpointApiUrl() {
    return this.getStringAttribute('endpoint_api_url');
  }

  // endpoint_api_url_variable - computed: true, optional: false, required: false
  public get endpointApiUrlVariable() {
    return this.getStringAttribute('endpoint_api_url_variable');
  }

  // endpoint_dns_name - computed: true, optional: false, required: false
  public get endpointDnsName() {
    return this.getStringAttribute('endpoint_dns_name');
  }

  // endpoint_dns_name_variable - computed: true, optional: false, required: false
  public get endpointDnsNameVariable() {
    return this.getStringAttribute('endpoint_dns_name_variable');
  }

  // endpoint_ip - computed: true, optional: false, required: false
  public get endpointIp() {
    return this.getStringAttribute('endpoint_ip');
  }

  // endpoint_ip_variable - computed: true, optional: false, required: false
  public get endpointIpVariable() {
    return this.getStringAttribute('endpoint_ip_variable');
  }

  // endpoint_tracker_type - computed: true, optional: false, required: false
  public get endpointTrackerType() {
    return this.getStringAttribute('endpoint_tracker_type');
  }

  // endpoint_tracker_type_variable - computed: true, optional: false, required: false
  public get endpointTrackerTypeVariable() {
    return this.getStringAttribute('endpoint_tracker_type_variable');
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_variable - computed: true, optional: false, required: false
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }

  // multiplier - computed: true, optional: false, required: false
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }

  // multiplier_variable - computed: true, optional: false, required: false
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // threshold_variable - computed: true, optional: false, required: false
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }

  // tracker_name - computed: true, optional: false, required: false
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }

  // tracker_name_variable - computed: true, optional: false, required: false
  public get trackerNameVariable() {
    return this.getStringAttribute('tracker_name_variable');
  }

  // tracker_type - computed: true, optional: false, required: false
  public get trackerType() {
    return this.getStringAttribute('tracker_type');
  }

  // tracker_type_variable - computed: true, optional: false, required: false
  public get trackerTypeVariable() {
    return this.getStringAttribute('tracker_type_variable');
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
