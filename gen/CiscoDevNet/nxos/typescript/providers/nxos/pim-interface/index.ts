// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PimInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#admin_state PimInterface#admin_state}
  */
  readonly adminState?: string;
  /**
  * BFD.
  *   - Choices: `none`, `enabled`, `disabled`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#bfd PimInterface#bfd}
  */
  readonly bfd?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#device PimInterface#device}
  */
  readonly device?: string;
  /**
  * Designated Router priority level.
  *   - Range: `1`-`4294967295`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#dr_priority PimInterface#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#interface_id PimInterface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Passive interface.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#passive PimInterface#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Sparse mode.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#sparse_mode PimInterface#sparse_mode}
  */
  readonly sparseMode?: boolean | cdktf.IResolvable;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#vrf_name PimInterface#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface nxos_pim_interface}
*/
export class PimInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_pim_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PimInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PimInterface to import
  * @param importFromId The id of the existing PimInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PimInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_pim_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_interface nxos_pim_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PimInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: PimInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_pim_interface',
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
    this._bfd = config.bfd;
    this._device = config.device;
    this._drPriority = config.drPriority;
    this._interfaceId = config.interfaceId;
    this._passive = config.passive;
    this._sparseMode = config.sparseMode;
    this._vrfName = config.vrfName;
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

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
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

  // dr_priority - computed: true, optional: true, required: false
  private _drPriority?: number; 
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }
  public set drPriority(value: number) {
    this._drPriority = value;
  }
  public resetDrPriority() {
    this._drPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drPriorityInput() {
    return this._drPriority;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // sparse_mode - computed: true, optional: true, required: false
  private _sparseMode?: boolean | cdktf.IResolvable; 
  public get sparseMode() {
    return this.getBooleanAttribute('sparse_mode');
  }
  public set sparseMode(value: boolean | cdktf.IResolvable) {
    this._sparseMode = value;
  }
  public resetSparseMode() {
    this._sparseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseModeInput() {
    return this._sparseMode;
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
      admin_state: cdktf.stringToTerraform(this._adminState),
      bfd: cdktf.stringToTerraform(this._bfd),
      device: cdktf.stringToTerraform(this._device),
      dr_priority: cdktf.numberToTerraform(this._drPriority),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      passive: cdktf.booleanToTerraform(this._passive),
      sparse_mode: cdktf.booleanToTerraform(this._sparseMode),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
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
      dr_priority: {
        value: cdktf.numberToHclTerraform(this._drPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sparse_mode: {
        value: cdktf.booleanToHclTerraform(this._sparseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
