// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellularCedgeProfileFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set access point name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#access_point_name CellularCedgeProfileFeatureTemplate#access_point_name}
  */
  readonly accessPointName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#access_point_name_variable CellularCedgeProfileFeatureTemplate#access_point_name_variable}
  */
  readonly accessPointNameVariable?: string;
  /**
  * Set authentication type
  *   - Choices: `none`, `pap`, `chap`, `pap_chap`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#authentication_type CellularCedgeProfileFeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#authentication_type_variable CellularCedgeProfileFeatureTemplate#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#description CellularCedgeProfileFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#device_types CellularCedgeProfileFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#name CellularCedgeProfileFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * No Overwrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#no_overwrite CellularCedgeProfileFeatureTemplate#no_overwrite}
  */
  readonly noOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#no_overwrite_variable CellularCedgeProfileFeatureTemplate#no_overwrite_variable}
  */
  readonly noOverwriteVariable?: string;
  /**
  * Set packet data network type
  *   - Choices: `ipv4`, `ipv4v6`, `ipv6`
  *   - Default value: `ipv4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#packet_data_network_type CellularCedgeProfileFeatureTemplate#packet_data_network_type}
  */
  readonly packetDataNetworkType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#packet_data_network_type_variable CellularCedgeProfileFeatureTemplate#packet_data_network_type_variable}
  */
  readonly packetDataNetworkTypeVariable?: string;
  /**
  * Set Profile ID
  *   - Range: `1`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#profile_id CellularCedgeProfileFeatureTemplate#profile_id}
  */
  readonly profileId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#profile_id_variable CellularCedgeProfileFeatureTemplate#profile_id_variable}
  */
  readonly profileIdVariable?: string;
  /**
  * Set the profile password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#profile_password CellularCedgeProfileFeatureTemplate#profile_password}
  */
  readonly profilePassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#profile_password_variable CellularCedgeProfileFeatureTemplate#profile_password_variable}
  */
  readonly profilePasswordVariable?: string;
  /**
  * Set the profile username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#profile_username CellularCedgeProfileFeatureTemplate#profile_username}
  */
  readonly profileUsername?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#profile_username_variable CellularCedgeProfileFeatureTemplate#profile_username_variable}
  */
  readonly profileUsernameVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template sdwan_cellular_cedge_profile_feature_template}
*/
export class CellularCedgeProfileFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cellular_cedge_profile_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CellularCedgeProfileFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CellularCedgeProfileFeatureTemplate to import
  * @param importFromId The id of the existing CellularCedgeProfileFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CellularCedgeProfileFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cellular_cedge_profile_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_cedge_profile_feature_template sdwan_cellular_cedge_profile_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellularCedgeProfileFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CellularCedgeProfileFeatureTemplateConfig) {
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
    this._accessPointName = config.accessPointName;
    this._accessPointNameVariable = config.accessPointNameVariable;
    this._authenticationType = config.authenticationType;
    this._authenticationTypeVariable = config.authenticationTypeVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._name = config.name;
    this._noOverwrite = config.noOverwrite;
    this._noOverwriteVariable = config.noOverwriteVariable;
    this._packetDataNetworkType = config.packetDataNetworkType;
    this._packetDataNetworkTypeVariable = config.packetDataNetworkTypeVariable;
    this._profileId = config.profileId;
    this._profileIdVariable = config.profileIdVariable;
    this._profilePassword = config.profilePassword;
    this._profilePasswordVariable = config.profilePasswordVariable;
    this._profileUsername = config.profileUsername;
    this._profileUsernameVariable = config.profileUsernameVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_name - computed: false, optional: true, required: false
  private _accessPointName?: string; 
  public get accessPointName() {
    return this.getStringAttribute('access_point_name');
  }
  public set accessPointName(value: string) {
    this._accessPointName = value;
  }
  public resetAccessPointName() {
    this._accessPointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointNameInput() {
    return this._accessPointName;
  }

  // access_point_name_variable - computed: false, optional: true, required: false
  private _accessPointNameVariable?: string; 
  public get accessPointNameVariable() {
    return this.getStringAttribute('access_point_name_variable');
  }
  public set accessPointNameVariable(value: string) {
    this._accessPointNameVariable = value;
  }
  public resetAccessPointNameVariable() {
    this._accessPointNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointNameVariableInput() {
    return this._accessPointNameVariable;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // authentication_type_variable - computed: false, optional: true, required: false
  private _authenticationTypeVariable?: string; 
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }
  public set authenticationTypeVariable(value: string) {
    this._authenticationTypeVariable = value;
  }
  public resetAuthenticationTypeVariable() {
    this._authenticationTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeVariableInput() {
    return this._authenticationTypeVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_overwrite - computed: false, optional: true, required: false
  private _noOverwrite?: boolean | cdktf.IResolvable; 
  public get noOverwrite() {
    return this.getBooleanAttribute('no_overwrite');
  }
  public set noOverwrite(value: boolean | cdktf.IResolvable) {
    this._noOverwrite = value;
  }
  public resetNoOverwrite() {
    this._noOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOverwriteInput() {
    return this._noOverwrite;
  }

  // no_overwrite_variable - computed: false, optional: true, required: false
  private _noOverwriteVariable?: string; 
  public get noOverwriteVariable() {
    return this.getStringAttribute('no_overwrite_variable');
  }
  public set noOverwriteVariable(value: string) {
    this._noOverwriteVariable = value;
  }
  public resetNoOverwriteVariable() {
    this._noOverwriteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOverwriteVariableInput() {
    return this._noOverwriteVariable;
  }

  // packet_data_network_type - computed: false, optional: true, required: false
  private _packetDataNetworkType?: string; 
  public get packetDataNetworkType() {
    return this.getStringAttribute('packet_data_network_type');
  }
  public set packetDataNetworkType(value: string) {
    this._packetDataNetworkType = value;
  }
  public resetPacketDataNetworkType() {
    this._packetDataNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDataNetworkTypeInput() {
    return this._packetDataNetworkType;
  }

  // packet_data_network_type_variable - computed: false, optional: true, required: false
  private _packetDataNetworkTypeVariable?: string; 
  public get packetDataNetworkTypeVariable() {
    return this.getStringAttribute('packet_data_network_type_variable');
  }
  public set packetDataNetworkTypeVariable(value: string) {
    this._packetDataNetworkTypeVariable = value;
  }
  public resetPacketDataNetworkTypeVariable() {
    this._packetDataNetworkTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDataNetworkTypeVariableInput() {
    return this._packetDataNetworkTypeVariable;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: number; 
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }
  public set profileId(value: number) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // profile_id_variable - computed: false, optional: true, required: false
  private _profileIdVariable?: string; 
  public get profileIdVariable() {
    return this.getStringAttribute('profile_id_variable');
  }
  public set profileIdVariable(value: string) {
    this._profileIdVariable = value;
  }
  public resetProfileIdVariable() {
    this._profileIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdVariableInput() {
    return this._profileIdVariable;
  }

  // profile_password - computed: false, optional: true, required: false
  private _profilePassword?: string; 
  public get profilePassword() {
    return this.getStringAttribute('profile_password');
  }
  public set profilePassword(value: string) {
    this._profilePassword = value;
  }
  public resetProfilePassword() {
    this._profilePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePasswordInput() {
    return this._profilePassword;
  }

  // profile_password_variable - computed: false, optional: true, required: false
  private _profilePasswordVariable?: string; 
  public get profilePasswordVariable() {
    return this.getStringAttribute('profile_password_variable');
  }
  public set profilePasswordVariable(value: string) {
    this._profilePasswordVariable = value;
  }
  public resetProfilePasswordVariable() {
    this._profilePasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePasswordVariableInput() {
    return this._profilePasswordVariable;
  }

  // profile_username - computed: false, optional: true, required: false
  private _profileUsername?: string; 
  public get profileUsername() {
    return this.getStringAttribute('profile_username');
  }
  public set profileUsername(value: string) {
    this._profileUsername = value;
  }
  public resetProfileUsername() {
    this._profileUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUsernameInput() {
    return this._profileUsername;
  }

  // profile_username_variable - computed: false, optional: true, required: false
  private _profileUsernameVariable?: string; 
  public get profileUsernameVariable() {
    return this.getStringAttribute('profile_username_variable');
  }
  public set profileUsernameVariable(value: string) {
    this._profileUsernameVariable = value;
  }
  public resetProfileUsernameVariable() {
    this._profileUsernameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUsernameVariableInput() {
    return this._profileUsernameVariable;
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
      access_point_name: cdktf.stringToTerraform(this._accessPointName),
      access_point_name_variable: cdktf.stringToTerraform(this._accessPointNameVariable),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      authentication_type_variable: cdktf.stringToTerraform(this._authenticationTypeVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      name: cdktf.stringToTerraform(this._name),
      no_overwrite: cdktf.booleanToTerraform(this._noOverwrite),
      no_overwrite_variable: cdktf.stringToTerraform(this._noOverwriteVariable),
      packet_data_network_type: cdktf.stringToTerraform(this._packetDataNetworkType),
      packet_data_network_type_variable: cdktf.stringToTerraform(this._packetDataNetworkTypeVariable),
      profile_id: cdktf.numberToTerraform(this._profileId),
      profile_id_variable: cdktf.stringToTerraform(this._profileIdVariable),
      profile_password: cdktf.stringToTerraform(this._profilePassword),
      profile_password_variable: cdktf.stringToTerraform(this._profilePasswordVariable),
      profile_username: cdktf.stringToTerraform(this._profileUsername),
      profile_username_variable: cdktf.stringToTerraform(this._profileUsernameVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_name: {
        value: cdktf.stringToHclTerraform(this._accessPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_point_name_variable: {
        value: cdktf.stringToHclTerraform(this._accessPointNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type_variable: {
        value: cdktf.stringToHclTerraform(this._authenticationTypeVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_overwrite: {
        value: cdktf.booleanToHclTerraform(this._noOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_overwrite_variable: {
        value: cdktf.stringToHclTerraform(this._noOverwriteVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_data_network_type: {
        value: cdktf.stringToHclTerraform(this._packetDataNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_data_network_type_variable: {
        value: cdktf.stringToHclTerraform(this._packetDataNetworkTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.numberToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_id_variable: {
        value: cdktf.stringToHclTerraform(this._profileIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_password: {
        value: cdktf.stringToHclTerraform(this._profilePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_password_variable: {
        value: cdktf.stringToHclTerraform(this._profilePasswordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_username: {
        value: cdktf.stringToHclTerraform(this._profileUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_username_variable: {
        value: cdktf.stringToHclTerraform(this._profileUsernameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
