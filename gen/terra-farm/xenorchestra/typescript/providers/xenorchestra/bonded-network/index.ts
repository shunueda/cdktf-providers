// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BondedNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#automatic BondedNetwork#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * The bond mode that should be used for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#bond_mode BondedNetwork#bond_mode}
  */
  readonly bondMode?: string;
  /**
  * This argument controls whether the network should enforce VIF locking. This defaults to `false` which means that no filtering rules are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#default_is_locked BondedNetwork#default_is_locked}
  */
  readonly defaultIsLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#id BondedNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The MTU of the network. Defaults to `1500` if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#mtu BondedNetwork#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#name_description BondedNetwork#name_description}
  */
  readonly nameDescription?: string;
  /**
  * The name label of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#name_label BondedNetwork#name_label}
  */
  readonly nameLabel: string;
  /**
  * The pifs (uuid) that should be used for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#pif_ids BondedNetwork#pif_ids}
  */
  readonly pifIds?: string[];
  /**
  * The pool id that this network should belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#pool_id BondedNetwork#pool_id}
  */
  readonly poolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network xenorchestra_bonded_network}
*/
export class BondedNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_bonded_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BondedNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BondedNetwork to import
  * @param importFromId The id of the existing BondedNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BondedNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_bonded_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/bonded_network xenorchestra_bonded_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BondedNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: BondedNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_bonded_network',
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
    this._bondMode = config.bondMode;
    this._defaultIsLocked = config.defaultIsLocked;
    this._id = config.id;
    this._mtu = config.mtu;
    this._nameDescription = config.nameDescription;
    this._nameLabel = config.nameLabel;
    this._pifIds = config.pifIds;
    this._poolId = config.poolId;
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

  // bond_mode - computed: false, optional: true, required: false
  private _bondMode?: string; 
  public get bondMode() {
    return this.getStringAttribute('bond_mode');
  }
  public set bondMode(value: string) {
    this._bondMode = value;
  }
  public resetBondMode() {
    this._bondMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondModeInput() {
    return this._bondMode;
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

  // pif_ids - computed: false, optional: true, required: false
  private _pifIds?: string[]; 
  public get pifIds() {
    return this.getListAttribute('pif_ids');
  }
  public set pifIds(value: string[]) {
    this._pifIds = value;
  }
  public resetPifIds() {
    this._pifIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pifIdsInput() {
    return this._pifIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic: cdktf.booleanToTerraform(this._automatic),
      bond_mode: cdktf.stringToTerraform(this._bondMode),
      default_is_locked: cdktf.booleanToTerraform(this._defaultIsLocked),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name_description: cdktf.stringToTerraform(this._nameDescription),
      name_label: cdktf.stringToTerraform(this._nameLabel),
      pif_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pifIds),
      pool_id: cdktf.stringToTerraform(this._poolId),
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
      bond_mode: {
        value: cdktf.stringToHclTerraform(this._bondMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      pif_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pifIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
