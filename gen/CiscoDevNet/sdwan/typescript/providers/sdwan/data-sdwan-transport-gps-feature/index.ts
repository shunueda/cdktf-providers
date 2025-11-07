// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_gps_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportGpsFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_gps_feature#feature_profile_id DataSdwanTransportGpsFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_gps_feature#id DataSdwanTransportGpsFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_gps_feature sdwan_transport_gps_feature}
*/
export class DataSdwanTransportGpsFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_gps_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportGpsFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportGpsFeature to import
  * @param importFromId The id of the existing DataSdwanTransportGpsFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_gps_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportGpsFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_gps_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_gps_feature sdwan_transport_gps_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportGpsFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportGpsFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_gps_feature',
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

  // gps_enable - computed: true, optional: false, required: false
  public get gpsEnable() {
    return this.getBooleanAttribute('gps_enable');
  }

  // gps_enable_variable - computed: true, optional: false, required: false
  public get gpsEnableVariable() {
    return this.getStringAttribute('gps_enable_variable');
  }

  // gps_mode - computed: true, optional: false, required: false
  public get gpsMode() {
    return this.getStringAttribute('gps_mode');
  }

  // gps_mode_variable - computed: true, optional: false, required: false
  public get gpsModeVariable() {
    return this.getStringAttribute('gps_mode_variable');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nmea_destination_address - computed: true, optional: false, required: false
  public get nmeaDestinationAddress() {
    return this.getStringAttribute('nmea_destination_address');
  }

  // nmea_destination_address_variable - computed: true, optional: false, required: false
  public get nmeaDestinationAddressVariable() {
    return this.getStringAttribute('nmea_destination_address_variable');
  }

  // nmea_destination_port - computed: true, optional: false, required: false
  public get nmeaDestinationPort() {
    return this.getNumberAttribute('nmea_destination_port');
  }

  // nmea_destination_port_variable - computed: true, optional: false, required: false
  public get nmeaDestinationPortVariable() {
    return this.getStringAttribute('nmea_destination_port_variable');
  }

  // nmea_enable - computed: true, optional: false, required: false
  public get nmeaEnable() {
    return this.getBooleanAttribute('nmea_enable');
  }

  // nmea_enable_variable - computed: true, optional: false, required: false
  public get nmeaEnableVariable() {
    return this.getStringAttribute('nmea_enable_variable');
  }

  // nmea_source_address - computed: true, optional: false, required: false
  public get nmeaSourceAddress() {
    return this.getStringAttribute('nmea_source_address');
  }

  // nmea_source_address_variable - computed: true, optional: false, required: false
  public get nmeaSourceAddressVariable() {
    return this.getStringAttribute('nmea_source_address_variable');
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
