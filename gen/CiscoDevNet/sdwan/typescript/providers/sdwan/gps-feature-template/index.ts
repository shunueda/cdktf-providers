// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpsFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#description GpsFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * Destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#destination_address GpsFeatureTemplate#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#destination_address_variable GpsFeatureTemplate#destination_address_variable}
  */
  readonly destinationAddressVariable?: string;
  /**
  * Destination port
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#destination_port GpsFeatureTemplate#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#destination_port_variable GpsFeatureTemplate#destination_port_variable}
  */
  readonly destinationPortVariable?: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#device_types GpsFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable/disable GPS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#enable GpsFeatureTemplate#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#enable_variable GpsFeatureTemplate#enable_variable}
  */
  readonly enableVariable?: string;
  /**
  * Select GPS mode
  *   - Choices: `ms-based`, `standalone`
  *   - Default value: `ms-based`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#gps_mode GpsFeatureTemplate#gps_mode}
  */
  readonly gpsMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#gps_mode_variable GpsFeatureTemplate#gps_mode_variable}
  */
  readonly gpsModeVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#name GpsFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Enable/disable NMEA data
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#nmea GpsFeatureTemplate#nmea}
  */
  readonly nmea?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#nmea_variable GpsFeatureTemplate#nmea_variable}
  */
  readonly nmeaVariable?: string;
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#source_address GpsFeatureTemplate#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#source_address_variable GpsFeatureTemplate#source_address_variable}
  */
  readonly sourceAddressVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template sdwan_gps_feature_template}
*/
export class GpsFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_gps_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpsFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpsFeatureTemplate to import
  * @param importFromId The id of the existing GpsFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpsFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_gps_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/gps_feature_template sdwan_gps_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpsFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: GpsFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_gps_feature_template',
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
    this._description = config.description;
    this._destinationAddress = config.destinationAddress;
    this._destinationAddressVariable = config.destinationAddressVariable;
    this._destinationPort = config.destinationPort;
    this._destinationPortVariable = config.destinationPortVariable;
    this._deviceTypes = config.deviceTypes;
    this._enable = config.enable;
    this._enableVariable = config.enableVariable;
    this._gpsMode = config.gpsMode;
    this._gpsModeVariable = config.gpsModeVariable;
    this._name = config.name;
    this._nmea = config.nmea;
    this._nmeaVariable = config.nmeaVariable;
    this._sourceAddress = config.sourceAddress;
    this._sourceAddressVariable = config.sourceAddressVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_address_variable - computed: false, optional: true, required: false
  private _destinationAddressVariable?: string; 
  public get destinationAddressVariable() {
    return this.getStringAttribute('destination_address_variable');
  }
  public set destinationAddressVariable(value: string) {
    this._destinationAddressVariable = value;
  }
  public resetDestinationAddressVariable() {
    this._destinationAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressVariableInput() {
    return this._destinationAddressVariable;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_port_variable - computed: false, optional: true, required: false
  private _destinationPortVariable?: string; 
  public get destinationPortVariable() {
    return this.getStringAttribute('destination_port_variable');
  }
  public set destinationPortVariable(value: string) {
    this._destinationPortVariable = value;
  }
  public resetDestinationPortVariable() {
    this._destinationPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortVariableInput() {
    return this._destinationPortVariable;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_variable - computed: false, optional: true, required: false
  private _enableVariable?: string; 
  public get enableVariable() {
    return this.getStringAttribute('enable_variable');
  }
  public set enableVariable(value: string) {
    this._enableVariable = value;
  }
  public resetEnableVariable() {
    this._enableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVariableInput() {
    return this._enableVariable;
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

  // nmea - computed: false, optional: true, required: false
  private _nmea?: boolean | cdktf.IResolvable; 
  public get nmea() {
    return this.getBooleanAttribute('nmea');
  }
  public set nmea(value: boolean | cdktf.IResolvable) {
    this._nmea = value;
  }
  public resetNmea() {
    this._nmea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaInput() {
    return this._nmea;
  }

  // nmea_variable - computed: false, optional: true, required: false
  private _nmeaVariable?: string; 
  public get nmeaVariable() {
    return this.getStringAttribute('nmea_variable');
  }
  public set nmeaVariable(value: string) {
    this._nmeaVariable = value;
  }
  public resetNmeaVariable() {
    this._nmeaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nmeaVariableInput() {
    return this._nmeaVariable;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_variable - computed: false, optional: true, required: false
  private _sourceAddressVariable?: string; 
  public get sourceAddressVariable() {
    return this.getStringAttribute('source_address_variable');
  }
  public set sourceAddressVariable(value: string) {
    this._sourceAddressVariable = value;
  }
  public resetSourceAddressVariable() {
    this._sourceAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressVariableInput() {
    return this._sourceAddressVariable;
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
      description: cdktf.stringToTerraform(this._description),
      destination_address: cdktf.stringToTerraform(this._destinationAddress),
      destination_address_variable: cdktf.stringToTerraform(this._destinationAddressVariable),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      destination_port_variable: cdktf.stringToTerraform(this._destinationPortVariable),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      enable: cdktf.booleanToTerraform(this._enable),
      enable_variable: cdktf.stringToTerraform(this._enableVariable),
      gps_mode: cdktf.stringToTerraform(this._gpsMode),
      gps_mode_variable: cdktf.stringToTerraform(this._gpsModeVariable),
      name: cdktf.stringToTerraform(this._name),
      nmea: cdktf.booleanToTerraform(this._nmea),
      nmea_variable: cdktf.stringToTerraform(this._nmeaVariable),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      source_address_variable: cdktf.stringToTerraform(this._sourceAddressVariable),
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
      destination_address: {
        value: cdktf.stringToHclTerraform(this._destinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address_variable: {
        value: cdktf.stringToHclTerraform(this._destinationAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination_port_variable: {
        value: cdktf.stringToHclTerraform(this._destinationPortVariable),
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
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_variable: {
        value: cdktf.stringToHclTerraform(this._enableVariable),
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
      nmea: {
        value: cdktf.booleanToHclTerraform(this._nmea),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nmea_variable: {
        value: cdktf.stringToHclTerraform(this._nmeaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address_variable: {
        value: cdktf.stringToHclTerraform(this._sourceAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
