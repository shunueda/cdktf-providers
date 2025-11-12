// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ospfv3AreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Area identifier to which a network or interface belongs in IPv4 address format.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#area_id Ospfv3Area#area_id}
  */
  readonly areaId: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#device Ospfv3Area#device}
  */
  readonly device?: string;
  /**
  * OSPFv3 instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#instance_name Ospfv3Area#instance_name}
  */
  readonly instanceName: string;
  /**
  * Send redistributed LSAs into NSSA area
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#redistribute Ospfv3Area#redistribute}
  */
  readonly redistribute?: boolean | cdktf.IResolvable;
  /**
  * Originate summary LSA into other areas
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#summary Ospfv3Area#summary}
  */
  readonly summary?: boolean | cdktf.IResolvable;
  /**
  * Originate summary LSA into other areas
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#suppress_forward_address Ospfv3Area#suppress_forward_address}
  */
  readonly suppressForwardAddress?: boolean | cdktf.IResolvable;
  /**
  * Configure area type as NSSA or stub
  *   - Choices: `regular`, `stub`, `nssa`
  *   - Default value: `regular`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#type Ospfv3Area#type}
  */
  readonly type?: string;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#vrf_name Ospfv3Area#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area nxos_ospfv3_area}
*/
export class Ospfv3Area extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ospfv3_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ospfv3Area resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ospfv3Area to import
  * @param importFromId The id of the existing Ospfv3Area that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ospfv3Area to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ospfv3_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospfv3_area nxos_ospfv3_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ospfv3AreaConfig
  */
  public constructor(scope: Construct, id: string, config: Ospfv3AreaConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ospfv3_area',
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
    this._areaId = config.areaId;
    this._device = config.device;
    this._instanceName = config.instanceName;
    this._redistribute = config.redistribute;
    this._summary = config.summary;
    this._suppressForwardAddress = config.suppressForwardAddress;
    this._type = config.type;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
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

  // redistribute - computed: true, optional: true, required: false
  private _redistribute?: boolean | cdktf.IResolvable; 
  public get redistribute() {
    return this.getBooleanAttribute('redistribute');
  }
  public set redistribute(value: boolean | cdktf.IResolvable) {
    this._redistribute = value;
  }
  public resetRedistribute() {
    this._redistribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute;
  }

  // summary - computed: true, optional: true, required: false
  private _summary?: boolean | cdktf.IResolvable; 
  public get summary() {
    return this.getBooleanAttribute('summary');
  }
  public set summary(value: boolean | cdktf.IResolvable) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // suppress_forward_address - computed: true, optional: true, required: false
  private _suppressForwardAddress?: boolean | cdktf.IResolvable; 
  public get suppressForwardAddress() {
    return this.getBooleanAttribute('suppress_forward_address');
  }
  public set suppressForwardAddress(value: boolean | cdktf.IResolvable) {
    this._suppressForwardAddress = value;
  }
  public resetSuppressForwardAddress() {
    this._suppressForwardAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressForwardAddressInput() {
    return this._suppressForwardAddress;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_id: cdktf.stringToTerraform(this._areaId),
      device: cdktf.stringToTerraform(this._device),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      redistribute: cdktf.booleanToTerraform(this._redistribute),
      summary: cdktf.booleanToTerraform(this._summary),
      suppress_forward_address: cdktf.booleanToTerraform(this._suppressForwardAddress),
      type: cdktf.stringToTerraform(this._type),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_id: {
        value: cdktf.stringToHclTerraform(this._areaId),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute: {
        value: cdktf.booleanToHclTerraform(this._redistribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      summary: {
        value: cdktf.booleanToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_forward_address: {
        value: cdktf.booleanToHclTerraform(this._suppressForwardAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
