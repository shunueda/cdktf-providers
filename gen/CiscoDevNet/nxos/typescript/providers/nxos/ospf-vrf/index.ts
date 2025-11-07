// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspfVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#admin_state OspfVrf#admin_state}
  */
  readonly adminState?: string;
  /**
  * Bandwidth reference value.
  *   - Range: `0`-`4294967295`
  *   - Default value: `40000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#bandwidth_reference OspfVrf#bandwidth_reference}
  */
  readonly bandwidthReference?: number;
  /**
  * Bandwidth reference unit.
  *   - Choices: `mbps`, `gbps`
  *   - Default value: `mbps`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#bandwidth_reference_unit OspfVrf#bandwidth_reference_unit}
  */
  readonly bandwidthReferenceUnit?: string;
  /**
  * Controls. Choices: `unspecified`, `bfd`, `name-lookup`, `default-passive`, `segrt`. Can be an empty string. Allowed formats:
  *   - Single value. Example: `bfd`
  *   - Multiple values (comma-separated). Example: `bfd,default-passive`. In this case values must be in alphabetical order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#control OspfVrf#control}
  */
  readonly control?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#device OspfVrf#device}
  */
  readonly device?: string;
  /**
  * Administrative distance preference.
  *   - Range: `1`-`255`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#distance OspfVrf#distance}
  */
  readonly distance?: number;
  /**
  * OSPF instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#instance_name OspfVrf#instance_name}
  */
  readonly instanceName: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
  /**
  * Router ID.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#router_id OspfVrf#router_id}
  */
  readonly routerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf nxos_ospf_vrf}
*/
export class OspfVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ospf_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OspfVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OspfVrf to import
  * @param importFromId The id of the existing OspfVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OspfVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ospf_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_vrf nxos_ospf_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspfVrfConfig
  */
  public constructor(scope: Construct, id: string, config: OspfVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ospf_vrf',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
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
    this._control = config.control;
    this._device = config.device;
    this._distance = config.distance;
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

  // control - computed: false, optional: true, required: false
  private _control?: string; 
  public get control() {
    return this.getStringAttribute('control');
  }
  public set control(value: string) {
    this._control = value;
  }
  public resetControl() {
    this._control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control;
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

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
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
      control: cdktf.stringToTerraform(this._control),
      device: cdktf.stringToTerraform(this._device),
      distance: cdktf.numberToTerraform(this._distance),
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
      control: {
        value: cdktf.stringToHclTerraform(this._control),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
