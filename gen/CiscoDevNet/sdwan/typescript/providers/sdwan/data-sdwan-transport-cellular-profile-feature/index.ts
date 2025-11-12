// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_profile_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportCellularProfileFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_profile_feature#feature_profile_id DataSdwanTransportCellularProfileFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_profile_feature#id DataSdwanTransportCellularProfileFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_profile_feature sdwan_transport_cellular_profile_feature}
*/
export class DataSdwanTransportCellularProfileFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_cellular_profile_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportCellularProfileFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportCellularProfileFeature to import
  * @param importFromId The id of the existing DataSdwanTransportCellularProfileFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_profile_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportCellularProfileFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_cellular_profile_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_profile_feature sdwan_transport_cellular_profile_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportCellularProfileFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportCellularProfileFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_cellular_profile_feature',
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

  // access_point_name - computed: true, optional: false, required: false
  public get accessPointName() {
    return this.getStringAttribute('access_point_name');
  }

  // access_point_name_variable - computed: true, optional: false, required: false
  public get accessPointNameVariable() {
    return this.getStringAttribute('access_point_name_variable');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // authentication_type_variable - computed: true, optional: false, required: false
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }

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

  // no_overwrite - computed: true, optional: false, required: false
  public get noOverwrite() {
    return this.getBooleanAttribute('no_overwrite');
  }

  // no_overwrite_variable - computed: true, optional: false, required: false
  public get noOverwriteVariable() {
    return this.getStringAttribute('no_overwrite_variable');
  }

  // packet_data_network_type - computed: true, optional: false, required: false
  public get packetDataNetworkType() {
    return this.getStringAttribute('packet_data_network_type');
  }

  // packet_data_network_type_variable - computed: true, optional: false, required: false
  public get packetDataNetworkTypeVariable() {
    return this.getStringAttribute('packet_data_network_type_variable');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // profile_id_variable - computed: true, optional: false, required: false
  public get profileIdVariable() {
    return this.getStringAttribute('profile_id_variable');
  }

  // profile_password - computed: true, optional: false, required: false
  public get profilePassword() {
    return this.getStringAttribute('profile_password');
  }

  // profile_password_variable - computed: true, optional: false, required: false
  public get profilePasswordVariable() {
    return this.getStringAttribute('profile_password_variable');
  }

  // profile_username - computed: true, optional: false, required: false
  public get profileUsername() {
    return this.getStringAttribute('profile_username');
  }

  // profile_username_variable - computed: true, optional: false, required: false
  public get profileUsernameVariable() {
    return this.getStringAttribute('profile_username_variable');
  }

  // requires_authentication - computed: true, optional: false, required: false
  public get requiresAuthentication() {
    return this.getBooleanAttribute('requires_authentication');
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
