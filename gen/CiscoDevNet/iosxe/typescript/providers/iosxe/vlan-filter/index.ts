// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/vlan_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/vlan_filter#device VlanFilter#device}
  */
  readonly device?: string;
  /**
  * VLANs to apply filter to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/vlan_filter#vlan_lists VlanFilter#vlan_lists}
  */
  readonly vlanLists: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/vlan_filter#word VlanFilter#word}
  */
  readonly word: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/vlan_filter iosxe_vlan_filter}
*/
export class VlanFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vlan_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanFilter to import
  * @param importFromId The id of the existing VlanFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/vlan_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vlan_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/vlan_filter iosxe_vlan_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanFilterConfig
  */
  public constructor(scope: Construct, id: string, config: VlanFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vlan_filter',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
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
    this._vlanLists = config.vlanLists;
    this._word = config.word;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vlan_lists - computed: false, optional: false, required: true
  private _vlanLists?: number[]; 
  public get vlanLists() {
    return this.getNumberListAttribute('vlan_lists');
  }
  public set vlanLists(value: number[]) {
    this._vlanLists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanListsInput() {
    return this._vlanLists;
  }

  // word - computed: false, optional: false, required: true
  private _word?: string; 
  public get word() {
    return this.getStringAttribute('word');
  }
  public set word(value: string) {
    this._word = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordInput() {
    return this._word;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      vlan_lists: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vlanLists),
      word: cdktf.stringToTerraform(this._word),
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
      vlan_lists: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vlanLists),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      word: {
        value: cdktf.stringToHclTerraform(this._word),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
