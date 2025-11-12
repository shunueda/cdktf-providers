// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination device serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#destination_device Links#destination_device}
  */
  readonly destinationDevice: string;
  /**
  * Destination fabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#destination_fabric Links#destination_fabric}
  */
  readonly destinationFabric: string;
  /**
  * Destination interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#destination_interface Links#destination_interface}
  */
  readonly destinationInterface: string;
  /**
  * Link configuration parameters as key-value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#link_parameters Links#link_parameters}
  */
  readonly linkParameters?: { [key: string]: string };
  /**
  * Source device serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#source_device Links#source_device}
  */
  readonly sourceDevice: string;
  /**
  * Source fabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#source_fabric Links#source_fabric}
  */
  readonly sourceFabric: string;
  /**
  * Source interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#source_interface Links#source_interface}
  */
  readonly sourceInterface: string;
  /**
  * Template name to use for the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#template_name Links#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links ndfc_links}
*/
export class Links extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_links";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Links resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Links to import
  * @param importFromId The id of the existing Links that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Links to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_links", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/links ndfc_links} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinksConfig
  */
  public constructor(scope: Construct, id: string, config: LinksConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_links',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationDevice = config.destinationDevice;
    this._destinationFabric = config.destinationFabric;
    this._destinationInterface = config.destinationInterface;
    this._linkParameters = config.linkParameters;
    this._sourceDevice = config.sourceDevice;
    this._sourceFabric = config.sourceFabric;
    this._sourceInterface = config.sourceInterface;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_device - computed: false, optional: false, required: true
  private _destinationDevice?: string; 
  public get destinationDevice() {
    return this.getStringAttribute('destination_device');
  }
  public set destinationDevice(value: string) {
    this._destinationDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDeviceInput() {
    return this._destinationDevice;
  }

  // destination_fabric - computed: false, optional: false, required: true
  private _destinationFabric?: string; 
  public get destinationFabric() {
    return this.getStringAttribute('destination_fabric');
  }
  public set destinationFabric(value: string) {
    this._destinationFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFabricInput() {
    return this._destinationFabric;
  }

  // destination_interface - computed: false, optional: false, required: true
  private _destinationInterface?: string; 
  public get destinationInterface() {
    return this.getStringAttribute('destination_interface');
  }
  public set destinationInterface(value: string) {
    this._destinationInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInterfaceInput() {
    return this._destinationInterface;
  }

  // destination_switch_name - computed: true, optional: false, required: false
  public get destinationSwitchName() {
    return this.getStringAttribute('destination_switch_name');
  }

  // is_discovered - computed: true, optional: false, required: false
  public get isDiscovered() {
    return this.getBooleanAttribute('is_discovered');
  }

  // is_present - computed: true, optional: false, required: false
  public get isPresent() {
    return this.getBooleanAttribute('is_present');
  }

  // link_parameters - computed: false, optional: true, required: false
  private _linkParameters?: { [key: string]: string }; 
  public get linkParameters() {
    return this.getStringMapAttribute('link_parameters');
  }
  public set linkParameters(value: { [key: string]: string }) {
    this._linkParameters = value;
  }
  public resetLinkParameters() {
    this._linkParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkParametersInput() {
    return this._linkParameters;
  }

  // link_params_computed - computed: true, optional: false, required: false
  private _linkParamsComputed = new cdktf.StringMap(this, "link_params_computed");
  public get linkParamsComputed() {
    return this._linkParamsComputed;
  }

  // link_type - computed: true, optional: false, required: false
  public get linkType() {
    return this.getStringAttribute('link_type');
  }

  // link_uuid - computed: true, optional: false, required: false
  public get linkUuid() {
    return this.getStringAttribute('link_uuid');
  }

  // source_device - computed: false, optional: false, required: true
  private _sourceDevice?: string; 
  public get sourceDevice() {
    return this.getStringAttribute('source_device');
  }
  public set sourceDevice(value: string) {
    this._sourceDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeviceInput() {
    return this._sourceDevice;
  }

  // source_fabric - computed: false, optional: false, required: true
  private _sourceFabric?: string; 
  public get sourceFabric() {
    return this.getStringAttribute('source_fabric');
  }
  public set sourceFabric(value: string) {
    this._sourceFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFabricInput() {
    return this._sourceFabric;
  }

  // source_interface - computed: false, optional: false, required: true
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_switch_name - computed: true, optional: false, required: false
  public get sourceSwitchName() {
    return this.getStringAttribute('source_switch_name');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_device: cdktf.stringToTerraform(this._destinationDevice),
      destination_fabric: cdktf.stringToTerraform(this._destinationFabric),
      destination_interface: cdktf.stringToTerraform(this._destinationInterface),
      link_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._linkParameters),
      source_device: cdktf.stringToTerraform(this._sourceDevice),
      source_fabric: cdktf.stringToTerraform(this._sourceFabric),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_device: {
        value: cdktf.stringToHclTerraform(this._destinationDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_fabric: {
        value: cdktf.stringToHclTerraform(this._destinationFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_interface: {
        value: cdktf.stringToHclTerraform(this._destinationInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._linkParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source_device: {
        value: cdktf.stringToHclTerraform(this._sourceDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_fabric: {
        value: cdktf.stringToHclTerraform(this._sourceFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
