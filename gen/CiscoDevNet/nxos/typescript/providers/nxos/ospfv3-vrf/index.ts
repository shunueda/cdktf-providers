// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ospfv3VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#admin_state Ospfv3Vrf#admin_state}
  */
  readonly adminState?: string;
  /**
  * Bandwidth reference value
  *   - Range: `0`-`4294967295`
  *   - Default value: `40000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#bandwidth_reference Ospfv3Vrf#bandwidth_reference}
  */
  readonly bandwidthReference?: number;
  /**
  * Bandwidth reference unit
  *   - Choices: `mbps`, `gbps`
  *   - Default value: `mbps`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#bandwidth_reference_unit Ospfv3Vrf#bandwidth_reference_unit}
  */
  readonly bandwidthReferenceUnit?: string;
  /**
  * Holds the controls for bfd
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#bfd_control Ospfv3Vrf#bfd_control}
  */
  readonly bfdControl?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#device Ospfv3Vrf#device}
  */
  readonly device?: string;
  /**
  * OSPFv3 instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#instance_name Ospfv3Vrf#instance_name}
  */
  readonly instanceName: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#name Ospfv3Vrf#name}
  */
  readonly name: string;
  /**
  * Router ID
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#router_id Ospfv3Vrf#router_id}
  */
  readonly routerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf nxos_ospfv3_vrf}
*/
export class Ospfv3Vrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ospfv3_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ospfv3Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ospfv3Vrf to import
  * @param importFromId The id of the existing Ospfv3Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ospfv3Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ospfv3_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_vrf nxos_ospfv3_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ospfv3VrfConfig
  */
  public constructor(scope: Construct, id: string, config: Ospfv3VrfConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ospfv3_vrf',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._bandwidthReference = config.bandwidthReference;
    this._bandwidthReferenceUnit = config.bandwidthReferenceUnit;
    this._bfdControl = config.bfdControl;
    this._device = config.device;
    this._instanceName = config.instanceName;
    this._name = config.name;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // bandwidth_reference - computed: true, optional: true, required: false
  private _bandwidthReference?: number; 
  public get bandwidthReference() {
    return this.getNumberAttribute('bandwidth_reference');
  }
  public set bandwidthReference(value: number) {
    this._bandwidthReference = value;
  }
  public resetBandwidthReference() {
    this._bandwidthReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthReferenceInput() {
    return this._bandwidthReference;
  }

  // bandwidth_reference_unit - computed: true, optional: true, required: false
  private _bandwidthReferenceUnit?: string; 
  public get bandwidthReferenceUnit() {
    return this.getStringAttribute('bandwidth_reference_unit');
  }
  public set bandwidthReferenceUnit(value: string) {
    this._bandwidthReferenceUnit = value;
  }
  public resetBandwidthReferenceUnit() {
    this._bandwidthReferenceUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthReferenceUnitInput() {
    return this._bandwidthReferenceUnit;
  }

  // bfd_control - computed: true, optional: true, required: false
  private _bfdControl?: boolean | cdktf.IResolvable; 
  public get bfdControl() {
    return this.getBooleanAttribute('bfd_control');
  }
  public set bfdControl(value: boolean | cdktf.IResolvable) {
    this._bfdControl = value;
  }
  public resetBfdControl() {
    this._bfdControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdControlInput() {
    return this._bfdControl;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      bandwidth_reference: cdktf.numberToTerraform(this._bandwidthReference),
      bandwidth_reference_unit: cdktf.stringToTerraform(this._bandwidthReferenceUnit),
      bfd_control: cdktf.booleanToTerraform(this._bfdControl),
      device: cdktf.stringToTerraform(this._device),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      name: cdktf.stringToTerraform(this._name),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_reference: {
        value: cdktf.numberToHclTerraform(this._bandwidthReference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_reference_unit: {
        value: cdktf.stringToHclTerraform(this._bandwidthReferenceUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_control: {
        value: cdktf.booleanToHclTerraform(this._bfdControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
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
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
