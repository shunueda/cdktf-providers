// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpanningTreeInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The administrative state of the object or policy.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#admin_state SpanningTreeInterface#admin_state}
  */
  readonly adminState?: string;
  /**
  * BPDU filter mode.
  *   - Choices: `default`, `enable`, `disable`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#bpdu_filter SpanningTreeInterface#bpdu_filter}
  */
  readonly bpduFilter?: string;
  /**
  * BPDU guard mode.
  *   - Choices: `default`, `enable`, `disable`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#bpdu_guard SpanningTreeInterface#bpdu_guard}
  */
  readonly bpduGuard?: string;
  /**
  * Port path cost.
  *   - Range: `0`-`200000000`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#cost SpanningTreeInterface#cost}
  */
  readonly cost?: number;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#device SpanningTreeInterface#device}
  */
  readonly device?: string;
  /**
  * Guard mode.
  *   - Choices: `default`, `root`, `loop`, `none`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#guard SpanningTreeInterface#guard}
  */
  readonly guard?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#interface_id SpanningTreeInterface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Link type.
  *   - Choices: `auto`, `p2p`, `shared`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#link_type SpanningTreeInterface#link_type}
  */
  readonly linkType?: string;
  /**
  * Port mode.
  *   - Choices: `default`, `edge`, `network`, `normal`, `trunk`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#mode SpanningTreeInterface#mode}
  */
  readonly mode?: string;
  /**
  * Port priority.
  *   - Range: `0`-`224`
  *   - Default value: `128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#priority SpanningTreeInterface#priority}
  */
  readonly priority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface nxos_spanning_tree_interface}
*/
export class SpanningTreeInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_spanning_tree_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpanningTreeInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpanningTreeInterface to import
  * @param importFromId The id of the existing SpanningTreeInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpanningTreeInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_spanning_tree_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/spanning_tree_interface nxos_spanning_tree_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpanningTreeInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: SpanningTreeInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_spanning_tree_interface',
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
    this._bpduFilter = config.bpduFilter;
    this._bpduGuard = config.bpduGuard;
    this._cost = config.cost;
    this._device = config.device;
    this._guard = config.guard;
    this._interfaceId = config.interfaceId;
    this._linkType = config.linkType;
    this._mode = config.mode;
    this._priority = config.priority;
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

  // bpdu_filter - computed: true, optional: true, required: false
  private _bpduFilter?: string; 
  public get bpduFilter() {
    return this.getStringAttribute('bpdu_filter');
  }
  public set bpduFilter(value: string) {
    this._bpduFilter = value;
  }
  public resetBpduFilter() {
    this._bpduFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduFilterInput() {
    return this._bpduFilter;
  }

  // bpdu_guard - computed: true, optional: true, required: false
  private _bpduGuard?: string; 
  public get bpduGuard() {
    return this.getStringAttribute('bpdu_guard');
  }
  public set bpduGuard(value: string) {
    this._bpduGuard = value;
  }
  public resetBpduGuard() {
    this._bpduGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduGuardInput() {
    return this._bpduGuard;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
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

  // guard - computed: true, optional: true, required: false
  private _guard?: string; 
  public get guard() {
    return this.getStringAttribute('guard');
  }
  public set guard(value: string) {
    this._guard = value;
  }
  public resetGuard() {
    this._guard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardInput() {
    return this._guard;
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

  // link_type - computed: true, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      bpdu_filter: cdktf.stringToTerraform(this._bpduFilter),
      bpdu_guard: cdktf.stringToTerraform(this._bpduGuard),
      cost: cdktf.numberToTerraform(this._cost),
      device: cdktf.stringToTerraform(this._device),
      guard: cdktf.stringToTerraform(this._guard),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      link_type: cdktf.stringToTerraform(this._linkType),
      mode: cdktf.stringToTerraform(this._mode),
      priority: cdktf.numberToTerraform(this._priority),
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
      bpdu_filter: {
        value: cdktf.stringToHclTerraform(this._bpduFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bpdu_guard: {
        value: cdktf.stringToHclTerraform(this._bpduGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guard: {
        value: cdktf.stringToHclTerraform(this._guard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_type: {
        value: cdktf.stringToHclTerraform(this._linkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
