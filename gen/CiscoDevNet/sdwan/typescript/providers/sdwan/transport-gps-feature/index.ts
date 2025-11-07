// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportGpsFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#description TransportGpsFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#feature_profile_id TransportGpsFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Enable/disable GPS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#gps_enable TransportGpsFeature#gps_enable}
  */
  readonly gpsEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#gps_enable_variable TransportGpsFeature#gps_enable_variable}
  */
  readonly gpsEnableVariable?: string;
  /**
  * Select GPS mode
  *   - Choices: `ms-based`, `standalone`
  *   - Default value: `ms-based`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#gps_mode TransportGpsFeature#gps_mode}
  */
  readonly gpsMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#gps_mode_variable TransportGpsFeature#gps_mode_variable}
  */
  readonly gpsModeVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#name TransportGpsFeature#name}
  */
  readonly name: string;
  /**
  * Destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_destination_address TransportGpsFeature#nmea_destination_address}
  */
  readonly nmeaDestinationAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_destination_address_variable TransportGpsFeature#nmea_destination_address_variable}
  */
  readonly nmeaDestinationAddressVariable?: string;
  /**
  * Destination port
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_destination_port TransportGpsFeature#nmea_destination_port}
  */
  readonly nmeaDestinationPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_destination_port_variable TransportGpsFeature#nmea_destination_port_variable}
  */
  readonly nmeaDestinationPortVariable?: string;
  /**
  * Enable/disable NMEA data
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_enable TransportGpsFeature#nmea_enable}
  */
  readonly nmeaEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_enable_variable TransportGpsFeature#nmea_enable_variable}
  */
  readonly nmeaEnableVariable?: string;
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_source_address TransportGpsFeature#nmea_source_address}
  */
  readonly nmeaSourceAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#nmea_source_address_variable TransportGpsFeature#nmea_source_address_variable}
  */
  readonly nmeaSourceAddressVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature sdwan_transport_gps_feature}
*/
export class TransportGpsFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_gps_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportGpsFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportGpsFeature to import
  * @param importFromId The id of the existing TransportGpsFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportGpsFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_gps_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_gps_feature sdwan_transport_gps_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportGpsFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportGpsFeatureConfig) {
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
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._gpsEnable = config.gpsEnable;
    this._gpsEnableVariable = config.gpsEnableVariable;
    this._gpsMode = config.gpsMode;
    this._gpsModeVariable = config.gpsModeVariable;
    this._name = config.name;
    this._nmeaDestinationAddress = config.nmeaDestinationAddress;
    this._nmeaDestinationAddressVariable = config.nmeaDestinationAddressVariable;
    this._nmeaDestinationPort = config.nmeaDestinationPort;
    this._nmeaDestinationPortVariable = config.nmeaDestinationPortVariable;
    this._nmeaEnable = config.nmeaEnable;
    this._nmeaEnableVariable = config.nmeaEnableVariable;
    this._nmeaSourceAddress = config.nmeaSourceAddress;
    this._nmeaSourceAddressVariable = config.nmeaSourceAddressVariable;
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

  // gps_enable - computed: false, optional: true, required: false
  private _gpsEnable?: boolean | cdktf.IResolvable; 
  public get gpsEnable() {
    return this.getBooleanAttribute('gps_enable');
  }
  public set gpsEnable(value: boolean | cdktf.IResolvable) {
    this._gpsEnable = value;
  }
  public resetGpsEnable() {
    this._gpsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsEnableInput() {
    return this._gpsEnable;
  }

  // gps_enable_variable - computed: false, optional: true, required: false
  private _gpsEnableVariable?: string; 
  public get gpsEnableVariable() {
    return this.getStringAttribute('gps_enable_variable');
  }
  public set gpsEnableVariable(value: string) {
    this._gpsEnableVariable = value;
  }
  public resetGpsEnableVariable() {
    this._gpsEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsEnableVariableInput() {
    return this._gpsEnableVariable;
  }

  // gps_mode - computed: false, optional: true, required: false
  private _gpsMode?: string; 
  public get gpsMode() {
    return this.getStringAttribute('gps_mode');
  }
  public set gpsMode(value: string) {
    this._gpsMode = value;
  }
  public resetGpsMode() {
    this._gpsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsModeInput() {
    return this._gpsMode;
  }

  // gps_mode_variable - computed: false, optional: true, required: false
  private _gpsModeVariable?: string; 
  public get gpsModeVariable() {
    return this.getStringAttribute('gps_mode_variable');
  }
  public set gpsModeVariable(value: string) {
    this._gpsModeVariable = value;
  }
  public resetGpsModeVariable() {
    this._gpsModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsModeVariableInput() {
    return this._gpsModeVariable;
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

  // nmea_destination_address - computed: false, optional: true, required: false
  private _nmeaDestinationAddress?: string; 
  public get nmeaDestinationAddress() {
    return this.getStringAttribute('nmea_destination_address');
  }
  public set nmeaDestinationAddress(value: string) {
    this._nmeaDestinationAddress = value;
  }
  public resetNmeaDestinationAddress() {
    this._nmeaDestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaDestinationAddressInput() {
    return this._nmeaDestinationAddress;
  }

  // nmea_destination_address_variable - computed: false, optional: true, required: false
  private _nmeaDestinationAddressVariable?: string; 
  public get nmeaDestinationAddressVariable() {
    return this.getStringAttribute('nmea_destination_address_variable');
  }
  public set nmeaDestinationAddressVariable(value: string) {
    this._nmeaDestinationAddressVariable = value;
  }
  public resetNmeaDestinationAddressVariable() {
    this._nmeaDestinationAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaDestinationAddressVariableInput() {
    return this._nmeaDestinationAddressVariable;
  }

  // nmea_destination_port - computed: false, optional: true, required: false
  private _nmeaDestinationPort?: number; 
  public get nmeaDestinationPort() {
    return this.getNumberAttribute('nmea_destination_port');
  }
  public set nmeaDestinationPort(value: number) {
    this._nmeaDestinationPort = value;
  }
  public resetNmeaDestinationPort() {
    this._nmeaDestinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaDestinationPortInput() {
    return this._nmeaDestinationPort;
  }

  // nmea_destination_port_variable - computed: false, optional: true, required: false
  private _nmeaDestinationPortVariable?: string; 
  public get nmeaDestinationPortVariable() {
    return this.getStringAttribute('nmea_destination_port_variable');
  }
  public set nmeaDestinationPortVariable(value: string) {
    this._nmeaDestinationPortVariable = value;
  }
  public resetNmeaDestinationPortVariable() {
    this._nmeaDestinationPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaDestinationPortVariableInput() {
    return this._nmeaDestinationPortVariable;
  }

  // nmea_enable - computed: false, optional: true, required: false
  private _nmeaEnable?: boolean | cdktf.IResolvable; 
  public get nmeaEnable() {
    return this.getBooleanAttribute('nmea_enable');
  }
  public set nmeaEnable(value: boolean | cdktf.IResolvable) {
    this._nmeaEnable = value;
  }
  public resetNmeaEnable() {
    this._nmeaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaEnableInput() {
    return this._nmeaEnable;
  }

  // nmea_enable_variable - computed: false, optional: true, required: false
  private _nmeaEnableVariable?: string; 
  public get nmeaEnableVariable() {
    return this.getStringAttribute('nmea_enable_variable');
  }
  public set nmeaEnableVariable(value: string) {
    this._nmeaEnableVariable = value;
  }
  public resetNmeaEnableVariable() {
    this._nmeaEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaEnableVariableInput() {
    return this._nmeaEnableVariable;
  }

  // nmea_source_address - computed: false, optional: true, required: false
  private _nmeaSourceAddress?: string; 
  public get nmeaSourceAddress() {
    return this.getStringAttribute('nmea_source_address');
  }
  public set nmeaSourceAddress(value: string) {
    this._nmeaSourceAddress = value;
  }
  public resetNmeaSourceAddress() {
    this._nmeaSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaSourceAddressInput() {
    return this._nmeaSourceAddress;
  }

  // nmea_source_address_variable - computed: false, optional: true, required: false
  private _nmeaSourceAddressVariable?: string; 
  public get nmeaSourceAddressVariable() {
    return this.getStringAttribute('nmea_source_address_variable');
  }
  public set nmeaSourceAddressVariable(value: string) {
    this._nmeaSourceAddressVariable = value;
  }
  public resetNmeaSourceAddressVariable() {
    this._nmeaSourceAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaSourceAddressVariableInput() {
    return this._nmeaSourceAddressVariable;
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      gps_enable: cdktf.booleanToTerraform(this._gpsEnable),
      gps_enable_variable: cdktf.stringToTerraform(this._gpsEnableVariable),
      gps_mode: cdktf.stringToTerraform(this._gpsMode),
      gps_mode_variable: cdktf.stringToTerraform(this._gpsModeVariable),
      name: cdktf.stringToTerraform(this._name),
      nmea_destination_address: cdktf.stringToTerraform(this._nmeaDestinationAddress),
      nmea_destination_address_variable: cdktf.stringToTerraform(this._nmeaDestinationAddressVariable),
      nmea_destination_port: cdktf.numberToTerraform(this._nmeaDestinationPort),
      nmea_destination_port_variable: cdktf.stringToTerraform(this._nmeaDestinationPortVariable),
      nmea_enable: cdktf.booleanToTerraform(this._nmeaEnable),
      nmea_enable_variable: cdktf.stringToTerraform(this._nmeaEnableVariable),
      nmea_source_address: cdktf.stringToTerraform(this._nmeaSourceAddress),
      nmea_source_address_variable: cdktf.stringToTerraform(this._nmeaSourceAddressVariable),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_enable: {
        value: cdktf.booleanToHclTerraform(this._gpsEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gps_enable_variable: {
        value: cdktf.stringToHclTerraform(this._gpsEnableVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_mode: {
        value: cdktf.stringToHclTerraform(this._gpsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_mode_variable: {
        value: cdktf.stringToHclTerraform(this._gpsModeVariable),
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
      nmea_destination_address: {
        value: cdktf.stringToHclTerraform(this._nmeaDestinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nmea_destination_address_variable: {
        value: cdktf.stringToHclTerraform(this._nmeaDestinationAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nmea_destination_port: {
        value: cdktf.numberToHclTerraform(this._nmeaDestinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nmea_destination_port_variable: {
        value: cdktf.stringToHclTerraform(this._nmeaDestinationPortVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nmea_enable: {
        value: cdktf.booleanToHclTerraform(this._nmeaEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nmea_enable_variable: {
        value: cdktf.stringToHclTerraform(this._nmeaEnableVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nmea_source_address: {
        value: cdktf.stringToHclTerraform(this._nmeaSourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nmea_source_address_variable: {
        value: cdktf.stringToHclTerraform(this._nmeaSourceAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
