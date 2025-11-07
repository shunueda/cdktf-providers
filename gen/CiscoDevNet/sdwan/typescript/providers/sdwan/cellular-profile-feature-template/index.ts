// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellularProfileFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set access point name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#access_point_name CellularProfileFeatureTemplate#access_point_name}
  */
  readonly accessPointName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#access_point_name_variable CellularProfileFeatureTemplate#access_point_name_variable}
  */
  readonly accessPointNameVariable?: string;
  /**
  * Set authentication type
  *   - Choices: `None`, `PAP`, `CHAP`, `PAP/CHAP`
  *   - Default value: `None`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#authentication_type CellularProfileFeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#authentication_type_variable CellularProfileFeatureTemplate#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#description CellularProfileFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#device_types CellularProfileFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#if_name CellularProfileFeatureTemplate#if_name}
  */
  readonly ifName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#if_name_variable CellularProfileFeatureTemplate#if_name_variable}
  */
  readonly ifNameVariable?: string;
  /**
  * Set IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#ip_address CellularProfileFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#ip_address_variable CellularProfileFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#name CellularProfileFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Set packet data network type
  *   - Choices: `ipv4`, `ipv6`, `ipv46`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#packet_data_network_type CellularProfileFeatureTemplate#packet_data_network_type}
  */
  readonly packetDataNetworkType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#packet_data_network_type_variable CellularProfileFeatureTemplate#packet_data_network_type_variable}
  */
  readonly packetDataNetworkTypeVariable?: string;
  /**
  * Set the address of the primary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#primary_dns_address CellularProfileFeatureTemplate#primary_dns_address}
  */
  readonly primaryDnsAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#primary_dns_address_variable CellularProfileFeatureTemplate#primary_dns_address_variable}
  */
  readonly primaryDnsAddressVariable?: string;
  /**
  * Set Profile ID
  *   - Range: `1`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_id CellularProfileFeatureTemplate#profile_id}
  */
  readonly profileId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_id_variable CellularProfileFeatureTemplate#profile_id_variable}
  */
  readonly profileIdVariable?: string;
  /**
  * Set profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_name CellularProfileFeatureTemplate#profile_name}
  */
  readonly profileName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_name_variable CellularProfileFeatureTemplate#profile_name_variable}
  */
  readonly profileNameVariable?: string;
  /**
  * Set the profile password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_password CellularProfileFeatureTemplate#profile_password}
  */
  readonly profilePassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_password_variable CellularProfileFeatureTemplate#profile_password_variable}
  */
  readonly profilePasswordVariable?: string;
  /**
  * Set the profile username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_username CellularProfileFeatureTemplate#profile_username}
  */
  readonly profileUsername?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#profile_username_variable CellularProfileFeatureTemplate#profile_username_variable}
  */
  readonly profileUsernameVariable?: string;
  /**
  * Set the address of the secondary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#secondary_dns_address CellularProfileFeatureTemplate#secondary_dns_address}
  */
  readonly secondaryDnsAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#secondary_dns_address_variable CellularProfileFeatureTemplate#secondary_dns_address_variable}
  */
  readonly secondaryDnsAddressVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template sdwan_cellular_profile_feature_template}
*/
export class CellularProfileFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cellular_profile_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CellularProfileFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CellularProfileFeatureTemplate to import
  * @param importFromId The id of the existing CellularProfileFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CellularProfileFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cellular_profile_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_profile_feature_template sdwan_cellular_profile_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellularProfileFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CellularProfileFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cellular_profile_feature_template',
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
    this._accessPointName = config.accessPointName;
    this._accessPointNameVariable = config.accessPointNameVariable;
    this._authenticationType = config.authenticationType;
    this._authenticationTypeVariable = config.authenticationTypeVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._ifName = config.ifName;
    this._ifNameVariable = config.ifNameVariable;
    this._ipAddress = config.ipAddress;
    this._ipAddressVariable = config.ipAddressVariable;
    this._name = config.name;
    this._packetDataNetworkType = config.packetDataNetworkType;
    this._packetDataNetworkTypeVariable = config.packetDataNetworkTypeVariable;
    this._primaryDnsAddress = config.primaryDnsAddress;
    this._primaryDnsAddressVariable = config.primaryDnsAddressVariable;
    this._profileId = config.profileId;
    this._profileIdVariable = config.profileIdVariable;
    this._profileName = config.profileName;
    this._profileNameVariable = config.profileNameVariable;
    this._profilePassword = config.profilePassword;
    this._profilePasswordVariable = config.profilePasswordVariable;
    this._profileUsername = config.profileUsername;
    this._profileUsernameVariable = config.profileUsernameVariable;
    this._secondaryDnsAddress = config.secondaryDnsAddress;
    this._secondaryDnsAddressVariable = config.secondaryDnsAddressVariable;
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

  // if_name - computed: false, optional: true, required: false
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  public resetIfName() {
    this._ifName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // if_name_variable - computed: false, optional: true, required: false
  private _ifNameVariable?: string; 
  public get ifNameVariable() {
    return this.getStringAttribute('if_name_variable');
  }
  public set ifNameVariable(value: string) {
    this._ifNameVariable = value;
  }
  public resetIfNameVariable() {
    this._ifNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameVariableInput() {
    return this._ifNameVariable;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_variable - computed: false, optional: true, required: false
  private _ipAddressVariable?: string; 
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }
  public set ipAddressVariable(value: string) {
    this._ipAddressVariable = value;
  }
  public resetIpAddressVariable() {
    this._ipAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVariableInput() {
    return this._ipAddressVariable;
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

  // primary_dns_address - computed: false, optional: true, required: false
  private _primaryDnsAddress?: string; 
  public get primaryDnsAddress() {
    return this.getStringAttribute('primary_dns_address');
  }
  public set primaryDnsAddress(value: string) {
    this._primaryDnsAddress = value;
  }
  public resetPrimaryDnsAddress() {
    this._primaryDnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsAddressInput() {
    return this._primaryDnsAddress;
  }

  // primary_dns_address_variable - computed: false, optional: true, required: false
  private _primaryDnsAddressVariable?: string; 
  public get primaryDnsAddressVariable() {
    return this.getStringAttribute('primary_dns_address_variable');
  }
  public set primaryDnsAddressVariable(value: string) {
    this._primaryDnsAddressVariable = value;
  }
  public resetPrimaryDnsAddressVariable() {
    this._primaryDnsAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsAddressVariableInput() {
    return this._primaryDnsAddressVariable;
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

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profile_name_variable - computed: false, optional: true, required: false
  private _profileNameVariable?: string; 
  public get profileNameVariable() {
    return this.getStringAttribute('profile_name_variable');
  }
  public set profileNameVariable(value: string) {
    this._profileNameVariable = value;
  }
  public resetProfileNameVariable() {
    this._profileNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameVariableInput() {
    return this._profileNameVariable;
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

  // secondary_dns_address - computed: false, optional: true, required: false
  private _secondaryDnsAddress?: string; 
  public get secondaryDnsAddress() {
    return this.getStringAttribute('secondary_dns_address');
  }
  public set secondaryDnsAddress(value: string) {
    this._secondaryDnsAddress = value;
  }
  public resetSecondaryDnsAddress() {
    this._secondaryDnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsAddressInput() {
    return this._secondaryDnsAddress;
  }

  // secondary_dns_address_variable - computed: false, optional: true, required: false
  private _secondaryDnsAddressVariable?: string; 
  public get secondaryDnsAddressVariable() {
    return this.getStringAttribute('secondary_dns_address_variable');
  }
  public set secondaryDnsAddressVariable(value: string) {
    this._secondaryDnsAddressVariable = value;
  }
  public resetSecondaryDnsAddressVariable() {
    this._secondaryDnsAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsAddressVariableInput() {
    return this._secondaryDnsAddressVariable;
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
      if_name: cdktf.stringToTerraform(this._ifName),
      if_name_variable: cdktf.stringToTerraform(this._ifNameVariable),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_address_variable: cdktf.stringToTerraform(this._ipAddressVariable),
      name: cdktf.stringToTerraform(this._name),
      packet_data_network_type: cdktf.stringToTerraform(this._packetDataNetworkType),
      packet_data_network_type_variable: cdktf.stringToTerraform(this._packetDataNetworkTypeVariable),
      primary_dns_address: cdktf.stringToTerraform(this._primaryDnsAddress),
      primary_dns_address_variable: cdktf.stringToTerraform(this._primaryDnsAddressVariable),
      profile_id: cdktf.numberToTerraform(this._profileId),
      profile_id_variable: cdktf.stringToTerraform(this._profileIdVariable),
      profile_name: cdktf.stringToTerraform(this._profileName),
      profile_name_variable: cdktf.stringToTerraform(this._profileNameVariable),
      profile_password: cdktf.stringToTerraform(this._profilePassword),
      profile_password_variable: cdktf.stringToTerraform(this._profilePasswordVariable),
      profile_username: cdktf.stringToTerraform(this._profileUsername),
      profile_username_variable: cdktf.stringToTerraform(this._profileUsernameVariable),
      secondary_dns_address: cdktf.stringToTerraform(this._secondaryDnsAddress),
      secondary_dns_address_variable: cdktf.stringToTerraform(this._secondaryDnsAddressVariable),
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
      if_name: {
        value: cdktf.stringToHclTerraform(this._ifName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if_name_variable: {
        value: cdktf.stringToHclTerraform(this._ifNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipAddressVariable),
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
      primary_dns_address: {
        value: cdktf.stringToHclTerraform(this._primaryDnsAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns_address_variable: {
        value: cdktf.stringToHclTerraform(this._primaryDnsAddressVariable),
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
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name_variable: {
        value: cdktf.stringToHclTerraform(this._profileNameVariable),
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
      secondary_dns_address: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns_address_variable: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
