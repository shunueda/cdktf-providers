// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PimStaticRpGroupListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group list address information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list#address PimStaticRpGroupList#address}
  */
  readonly address: string;
  /**
  * Flag to treat Group Ranges as BiDir.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list#bidir PimStaticRpGroupList#bidir}
  */
  readonly bidir?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list#device PimStaticRpGroupList#device}
  */
  readonly device?: string;
  /**
  * Flag to override RP preference to use Static over Dynamic RP.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list#override PimStaticRpGroupList#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * RP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list#rp_address PimStaticRpGroupList#rp_address}
  */
  readonly rpAddress: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list#vrf_name PimStaticRpGroupList#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list nxos_pim_static_rp_group_list}
*/
export class PimStaticRpGroupList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_pim_static_rp_group_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PimStaticRpGroupList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PimStaticRpGroupList to import
  * @param importFromId The id of the existing PimStaticRpGroupList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PimStaticRpGroupList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_pim_static_rp_group_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_static_rp_group_list nxos_pim_static_rp_group_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PimStaticRpGroupListConfig
  */
  public constructor(scope: Construct, id: string, config: PimStaticRpGroupListConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_pim_static_rp_group_list',
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
    this._address = config.address;
    this._bidir = config.bidir;
    this._device = config.device;
    this._override = config.override;
    this._rpAddress = config.rpAddress;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // bidir - computed: true, optional: true, required: false
  private _bidir?: boolean | cdktf.IResolvable; 
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }
  public set bidir(value: boolean | cdktf.IResolvable) {
    this._bidir = value;
  }
  public resetBidir() {
    this._bidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidirInput() {
    return this._bidir;
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

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // rp_address - computed: false, optional: false, required: true
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
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
      address: cdktf.stringToTerraform(this._address),
      bidir: cdktf.booleanToTerraform(this._bidir),
      device: cdktf.stringToTerraform(this._device),
      override: cdktf.booleanToTerraform(this._override),
      rp_address: cdktf.stringToTerraform(this._rpAddress),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bidir: {
        value: cdktf.booleanToHclTerraform(this._bidir),
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
      override: {
        value: cdktf.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rp_address: {
        value: cdktf.stringToHclTerraform(this._rpAddress),
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
