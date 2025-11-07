// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4InterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#device Ipv4Interface#device}
  */
  readonly device?: string;
  /**
  * ip drop-glean enabled/disabled.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#drop_glean Ipv4Interface#drop_glean}
  */
  readonly dropGlean?: string;
  /**
  * ip forward enabled/disabled.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#forward Ipv4Interface#forward}
  */
  readonly forward?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#interface_id Ipv4Interface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * IP unnumbered. Reference to interface must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#unnumbered Ipv4Interface#unnumbered}
  */
  readonly unnumbered?: string;
  /**
  * URPF (unicast Reverse Path Forwarding).
  *   - Choices: `disabled`, `strict`, `loose`, `loose-allow-default`, `strict-allow-vni-hosts`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#urpf Ipv4Interface#urpf}
  */
  readonly urpf?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#vrf Ipv4Interface#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface nxos_ipv4_interface}
*/
export class Ipv4Interface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ipv4_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4Interface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4Interface to import
  * @param importFromId The id of the existing Ipv4Interface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4Interface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ipv4_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_interface nxos_ipv4_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4InterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4InterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ipv4_interface',
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
    this._device = config.device;
    this._dropGlean = config.dropGlean;
    this._forward = config.forward;
    this._interfaceId = config.interfaceId;
    this._unnumbered = config.unnumbered;
    this._urpf = config.urpf;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // drop_glean - computed: true, optional: true, required: false
  private _dropGlean?: string; 
  public get dropGlean() {
    return this.getStringAttribute('drop_glean');
  }
  public set dropGlean(value: string) {
    this._dropGlean = value;
  }
  public resetDropGlean() {
    this._dropGlean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropGleanInput() {
    return this._dropGlean;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
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

  // unnumbered - computed: true, optional: true, required: false
  private _unnumbered?: string; 
  public get unnumbered() {
    return this.getStringAttribute('unnumbered');
  }
  public set unnumbered(value: string) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
  }

  // urpf - computed: true, optional: true, required: false
  private _urpf?: string; 
  public get urpf() {
    return this.getStringAttribute('urpf');
  }
  public set urpf(value: string) {
    this._urpf = value;
  }
  public resetUrpf() {
    this._urpf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urpfInput() {
    return this._urpf;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      drop_glean: cdktf.stringToTerraform(this._dropGlean),
      forward: cdktf.stringToTerraform(this._forward),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      unnumbered: cdktf.stringToTerraform(this._unnumbered),
      urpf: cdktf.stringToTerraform(this._urpf),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_glean: {
        value: cdktf.stringToHclTerraform(this._dropGlean),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
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
      unnumbered: {
        value: cdktf.stringToHclTerraform(this._unnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urpf: {
        value: cdktf.stringToHclTerraform(this._urpf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
