// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceVtepConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Device Id of VTEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#device_id DeviceVtep#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#id DeviceVtep#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Neighbor Address literal type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#neighbor_addr_literal_type DeviceVtep#neighbor_addr_literal_type}
  */
  readonly neighborAddrLiteralType?: string;
  /**
  * Neighbor Address literal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#neighbor_addr_literal_value DeviceVtep#neighbor_addr_literal_value}
  */
  readonly neighborAddrLiteralValue?: string;
  /**
  * Neighbor Address Object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#neighbor_addr_object_id DeviceVtep#neighbor_addr_object_id}
  */
  readonly neighborAddrObjectId?: string;
  /**
  * If Object Overridable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#neighbor_addr_object_overridable DeviceVtep#neighbor_addr_object_overridable}
  */
  readonly neighborAddrObjectOverridable?: boolean | cdktf.IResolvable;
  /**
  * NVE Destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#nve_destination_port DeviceVtep#nve_destination_port}
  */
  readonly nveDestinationPort: number;
  /**
  * NVE Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#nve_enabled DeviceVtep#nve_enabled}
  */
  readonly nveEnabled: boolean | cdktf.IResolvable;
  /**
  * NVE Encapsulation type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#nve_encapsulation_type DeviceVtep#nve_encapsulation_type}
  */
  readonly nveEncapsulationType: string;
  /**
  * NVE Discovery type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#nve_neighbor_discovery_type DeviceVtep#nve_neighbor_discovery_type}
  */
  readonly nveNeighborDiscoveryType?: string;
  /**
  * NVE VTEP Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#nve_vtep_id DeviceVtep#nve_vtep_id}
  */
  readonly nveVtepId: number;
  /**
  * Source Interface Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#source_interface_id DeviceVtep#source_interface_id}
  */
  readonly sourceInterfaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep fmc_device_vtep}
*/
export class DeviceVtep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_device_vtep";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceVtep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceVtep to import
  * @param importFromId The id of the existing DeviceVtep that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceVtep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_device_vtep", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vtep fmc_device_vtep} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceVtepConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceVtepConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_device_vtep',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._id = config.id;
    this._neighborAddrLiteralType = config.neighborAddrLiteralType;
    this._neighborAddrLiteralValue = config.neighborAddrLiteralValue;
    this._neighborAddrObjectId = config.neighborAddrObjectId;
    this._neighborAddrObjectOverridable = config.neighborAddrObjectOverridable;
    this._nveDestinationPort = config.nveDestinationPort;
    this._nveEnabled = config.nveEnabled;
    this._nveEncapsulationType = config.nveEncapsulationType;
    this._nveNeighborDiscoveryType = config.nveNeighborDiscoveryType;
    this._nveVtepId = config.nveVtepId;
    this._sourceInterfaceId = config.sourceInterfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // neighbor_addr_literal_type - computed: false, optional: true, required: false
  private _neighborAddrLiteralType?: string; 
  public get neighborAddrLiteralType() {
    return this.getStringAttribute('neighbor_addr_literal_type');
  }
  public set neighborAddrLiteralType(value: string) {
    this._neighborAddrLiteralType = value;
  }
  public resetNeighborAddrLiteralType() {
    this._neighborAddrLiteralType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddrLiteralTypeInput() {
    return this._neighborAddrLiteralType;
  }

  // neighbor_addr_literal_value - computed: false, optional: true, required: false
  private _neighborAddrLiteralValue?: string; 
  public get neighborAddrLiteralValue() {
    return this.getStringAttribute('neighbor_addr_literal_value');
  }
  public set neighborAddrLiteralValue(value: string) {
    this._neighborAddrLiteralValue = value;
  }
  public resetNeighborAddrLiteralValue() {
    this._neighborAddrLiteralValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddrLiteralValueInput() {
    return this._neighborAddrLiteralValue;
  }

  // neighbor_addr_object_id - computed: false, optional: true, required: false
  private _neighborAddrObjectId?: string; 
  public get neighborAddrObjectId() {
    return this.getStringAttribute('neighbor_addr_object_id');
  }
  public set neighborAddrObjectId(value: string) {
    this._neighborAddrObjectId = value;
  }
  public resetNeighborAddrObjectId() {
    this._neighborAddrObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddrObjectIdInput() {
    return this._neighborAddrObjectId;
  }

  // neighbor_addr_object_overridable - computed: false, optional: true, required: false
  private _neighborAddrObjectOverridable?: boolean | cdktf.IResolvable; 
  public get neighborAddrObjectOverridable() {
    return this.getBooleanAttribute('neighbor_addr_object_overridable');
  }
  public set neighborAddrObjectOverridable(value: boolean | cdktf.IResolvable) {
    this._neighborAddrObjectOverridable = value;
  }
  public resetNeighborAddrObjectOverridable() {
    this._neighborAddrObjectOverridable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddrObjectOverridableInput() {
    return this._neighborAddrObjectOverridable;
  }

  // nve_destination_port - computed: false, optional: false, required: true
  private _nveDestinationPort?: number; 
  public get nveDestinationPort() {
    return this.getNumberAttribute('nve_destination_port');
  }
  public set nveDestinationPort(value: number) {
    this._nveDestinationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nveDestinationPortInput() {
    return this._nveDestinationPort;
  }

  // nve_enabled - computed: false, optional: false, required: true
  private _nveEnabled?: boolean | cdktf.IResolvable; 
  public get nveEnabled() {
    return this.getBooleanAttribute('nve_enabled');
  }
  public set nveEnabled(value: boolean | cdktf.IResolvable) {
    this._nveEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nveEnabledInput() {
    return this._nveEnabled;
  }

  // nve_encapsulation_type - computed: false, optional: false, required: true
  private _nveEncapsulationType?: string; 
  public get nveEncapsulationType() {
    return this.getStringAttribute('nve_encapsulation_type');
  }
  public set nveEncapsulationType(value: string) {
    this._nveEncapsulationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nveEncapsulationTypeInput() {
    return this._nveEncapsulationType;
  }

  // nve_neighbor_discovery_type - computed: false, optional: true, required: false
  private _nveNeighborDiscoveryType?: string; 
  public get nveNeighborDiscoveryType() {
    return this.getStringAttribute('nve_neighbor_discovery_type');
  }
  public set nveNeighborDiscoveryType(value: string) {
    this._nveNeighborDiscoveryType = value;
  }
  public resetNveNeighborDiscoveryType() {
    this._nveNeighborDiscoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nveNeighborDiscoveryTypeInput() {
    return this._nveNeighborDiscoveryType;
  }

  // nve_vtep_id - computed: false, optional: false, required: true
  private _nveVtepId?: number; 
  public get nveVtepId() {
    return this.getNumberAttribute('nve_vtep_id');
  }
  public set nveVtepId(value: number) {
    this._nveVtepId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nveVtepIdInput() {
    return this._nveVtepId;
  }

  // source_interface_id - computed: false, optional: false, required: true
  private _sourceInterfaceId?: string; 
  public get sourceInterfaceId() {
    return this.getStringAttribute('source_interface_id');
  }
  public set sourceInterfaceId(value: string) {
    this._sourceInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceIdInput() {
    return this._sourceInterfaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      neighbor_addr_literal_type: cdktf.stringToTerraform(this._neighborAddrLiteralType),
      neighbor_addr_literal_value: cdktf.stringToTerraform(this._neighborAddrLiteralValue),
      neighbor_addr_object_id: cdktf.stringToTerraform(this._neighborAddrObjectId),
      neighbor_addr_object_overridable: cdktf.booleanToTerraform(this._neighborAddrObjectOverridable),
      nve_destination_port: cdktf.numberToTerraform(this._nveDestinationPort),
      nve_enabled: cdktf.booleanToTerraform(this._nveEnabled),
      nve_encapsulation_type: cdktf.stringToTerraform(this._nveEncapsulationType),
      nve_neighbor_discovery_type: cdktf.stringToTerraform(this._nveNeighborDiscoveryType),
      nve_vtep_id: cdktf.numberToTerraform(this._nveVtepId),
      source_interface_id: cdktf.stringToTerraform(this._sourceInterfaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
      neighbor_addr_literal_type: {
        value: cdktf.stringToHclTerraform(this._neighborAddrLiteralType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_addr_literal_value: {
        value: cdktf.stringToHclTerraform(this._neighborAddrLiteralValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_addr_object_id: {
        value: cdktf.stringToHclTerraform(this._neighborAddrObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_addr_object_overridable: {
        value: cdktf.booleanToHclTerraform(this._neighborAddrObjectOverridable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nve_destination_port: {
        value: cdktf.numberToHclTerraform(this._nveDestinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nve_enabled: {
        value: cdktf.booleanToHclTerraform(this._nveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nve_encapsulation_type: {
        value: cdktf.stringToHclTerraform(this._nveEncapsulationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nve_neighbor_discovery_type: {
        value: cdktf.stringToHclTerraform(this._nveNeighborDiscoveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nve_vtep_id: {
        value: cdktf.numberToHclTerraform(this._nveVtepId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_interface_id: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
