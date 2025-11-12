// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#automatic Network#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * This argument controls whether the network should enforce VIF locking. This defaults to `false` which means that no filtering rules are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#default_is_locked Network#default_is_locked}
  */
  readonly defaultIsLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#id Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The MTU of the network. Defaults to `1500` if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#mtu Network#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#name_description Network#name_description}
  */
  readonly nameDescription?: string;
  /**
  * The name label of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#name_label Network#name_label}
  */
  readonly nameLabel: string;
  /**
  * Whether the network should use a network block device. Defaults to `false` if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#nbd Network#nbd}
  */
  readonly nbd?: boolean | cdktf.IResolvable;
  /**
  * The pool id that this network should belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#pool_id Network#pool_id}
  */
  readonly poolId: string;
  /**
  * The PIF device (eth0, eth1, etc) that will be used as an input during network creation. This parameter is required if a vlan is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#source_pif_device Network#source_pif_device}
  */
  readonly sourcePifDevice?: string;
  /**
  * The vlan to use for the network. Defaults to `0` meaning no VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#vlan Network#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network xenorchestra_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/network xenorchestra_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_network',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1',
        providerVersionConstraint: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automatic = config.automatic;
    this._defaultIsLocked = config.defaultIsLocked;
    this._id = config.id;
    this._mtu = config.mtu;
    this._nameDescription = config.nameDescription;
    this._nameLabel = config.nameLabel;
    this._nbd = config.nbd;
    this._poolId = config.poolId;
    this._sourcePifDevice = config.sourcePifDevice;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable; 
  public get automatic() {
    return this.getBooleanAttribute('automatic');
  }
  public set automatic(value: boolean | cdktf.IResolvable) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // default_is_locked - computed: false, optional: true, required: false
  private _defaultIsLocked?: boolean | cdktf.IResolvable; 
  public get defaultIsLocked() {
    return this.getBooleanAttribute('default_is_locked');
  }
  public set defaultIsLocked(value: boolean | cdktf.IResolvable) {
    this._defaultIsLocked = value;
  }
  public resetDefaultIsLocked() {
    this._defaultIsLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIsLockedInput() {
    return this._defaultIsLocked;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name_description - computed: false, optional: true, required: false
  private _nameDescription?: string; 
  public get nameDescription() {
    return this.getStringAttribute('name_description');
  }
  public set nameDescription(value: string) {
    this._nameDescription = value;
  }
  public resetNameDescription() {
    this._nameDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDescriptionInput() {
    return this._nameDescription;
  }

  // name_label - computed: false, optional: false, required: true
  private _nameLabel?: string; 
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }
  public set nameLabel(value: string) {
    this._nameLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameLabelInput() {
    return this._nameLabel;
  }

  // nbd - computed: false, optional: true, required: false
  private _nbd?: boolean | cdktf.IResolvable; 
  public get nbd() {
    return this.getBooleanAttribute('nbd');
  }
  public set nbd(value: boolean | cdktf.IResolvable) {
    this._nbd = value;
  }
  public resetNbd() {
    this._nbd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbdInput() {
    return this._nbd;
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // source_pif_device - computed: false, optional: true, required: false
  private _sourcePifDevice?: string; 
  public get sourcePifDevice() {
    return this.getStringAttribute('source_pif_device');
  }
  public set sourcePifDevice(value: string) {
    this._sourcePifDevice = value;
  }
  public resetSourcePifDevice() {
    this._sourcePifDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePifDeviceInput() {
    return this._sourcePifDevice;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic: cdktf.booleanToTerraform(this._automatic),
      default_is_locked: cdktf.booleanToTerraform(this._defaultIsLocked),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name_description: cdktf.stringToTerraform(this._nameDescription),
      name_label: cdktf.stringToTerraform(this._nameLabel),
      nbd: cdktf.booleanToTerraform(this._nbd),
      pool_id: cdktf.stringToTerraform(this._poolId),
      source_pif_device: cdktf.stringToTerraform(this._sourcePifDevice),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic: {
        value: cdktf.booleanToHclTerraform(this._automatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_is_locked: {
        value: cdktf.booleanToHclTerraform(this._defaultIsLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_description: {
        value: cdktf.stringToHclTerraform(this._nameDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_label: {
        value: cdktf.stringToHclTerraform(this._nameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nbd: {
        value: cdktf.booleanToHclTerraform(this._nbd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_pif_device: {
        value: cdktf.stringToHclTerraform(this._sourcePifDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
