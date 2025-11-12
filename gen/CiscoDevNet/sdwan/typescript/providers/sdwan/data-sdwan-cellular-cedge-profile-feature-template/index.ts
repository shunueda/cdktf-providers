// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cellular_cedge_profile_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCellularCedgeProfileFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cellular_cedge_profile_feature_template#id DataSdwanCellularCedgeProfileFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cellular_cedge_profile_feature_template#name DataSdwanCellularCedgeProfileFeatureTemplate#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cellular_cedge_profile_feature_template sdwan_cellular_cedge_profile_feature_template}
*/
export class DataSdwanCellularCedgeProfileFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cellular_cedge_profile_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCellularCedgeProfileFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCellularCedgeProfileFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCellularCedgeProfileFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cellular_cedge_profile_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCellularCedgeProfileFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cellular_cedge_profile_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cellular_cedge_profile_feature_template sdwan_cellular_cedge_profile_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCellularCedgeProfileFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCellularCedgeProfileFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cellular_cedge_profile_feature_template',
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
    this._id = config.id;
    this._name = config.name;
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

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // name - computed: true, optional: true, required: false
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
