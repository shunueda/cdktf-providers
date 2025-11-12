// https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElementswVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#account ElementswVolume#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#attributes ElementswVolume#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#burst_iops ElementswVolume#burst_iops}
  */
  readonly burstIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#enable512e ElementswVolume#enable512e}
  */
  readonly enable512E: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#id ElementswVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#max_iops ElementswVolume#max_iops}
  */
  readonly maxIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#min_iops ElementswVolume#min_iops}
  */
  readonly minIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#name ElementswVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#total_size ElementswVolume#total_size}
  */
  readonly totalSize: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume elementsw_volume}
*/
export class ElementswVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elementsw_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElementswVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElementswVolume to import
  * @param importFromId The id of the existing ElementswVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElementswVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elementsw_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_volume elementsw_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElementswVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: ElementswVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'elementsw_volume',
      terraformGeneratorMetadata: {
        providerName: 'netapp-elementsw',
        providerVersion: '20.11.0',
        providerVersionConstraint: '20.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._attributes = config.attributes;
    this._burstIops = config.burstIops;
    this._enable512E = config.enable512E;
    this._id = config.id;
    this._maxIops = config.maxIops;
    this._minIops = config.minIops;
    this._name = config.name;
    this._totalSize = config.totalSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // burst_iops - computed: false, optional: true, required: false
  private _burstIops?: number; 
  public get burstIops() {
    return this.getNumberAttribute('burst_iops');
  }
  public set burstIops(value: number) {
    this._burstIops = value;
  }
  public resetBurstIops() {
    this._burstIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstIopsInput() {
    return this._burstIops;
  }

  // enable512e - computed: false, optional: false, required: true
  private _enable512E?: boolean | cdktf.IResolvable; 
  public get enable512E() {
    return this.getBooleanAttribute('enable512e');
  }
  public set enable512E(value: boolean | cdktf.IResolvable) {
    this._enable512E = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enable512EInput() {
    return this._enable512E;
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

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // max_iops - computed: false, optional: true, required: false
  private _maxIops?: number; 
  public get maxIops() {
    return this.getNumberAttribute('max_iops');
  }
  public set maxIops(value: number) {
    this._maxIops = value;
  }
  public resetMaxIops() {
    this._maxIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIopsInput() {
    return this._maxIops;
  }

  // min_iops - computed: false, optional: true, required: false
  private _minIops?: number; 
  public get minIops() {
    return this.getNumberAttribute('min_iops');
  }
  public set minIops(value: number) {
    this._minIops = value;
  }
  public resetMinIops() {
    this._minIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIopsInput() {
    return this._minIops;
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

  // total_size - computed: false, optional: false, required: true
  private _totalSize?: number; 
  public get totalSize() {
    return this.getNumberAttribute('total_size');
  }
  public set totalSize(value: number) {
    this._totalSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSizeInput() {
    return this._totalSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      burst_iops: cdktf.numberToTerraform(this._burstIops),
      enable512e: cdktf.booleanToTerraform(this._enable512E),
      id: cdktf.stringToTerraform(this._id),
      max_iops: cdktf.numberToTerraform(this._maxIops),
      min_iops: cdktf.numberToTerraform(this._minIops),
      name: cdktf.stringToTerraform(this._name),
      total_size: cdktf.numberToTerraform(this._totalSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      burst_iops: {
        value: cdktf.numberToHclTerraform(this._burstIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable512e: {
        value: cdktf.booleanToHclTerraform(this._enable512E),
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
      max_iops: {
        value: cdktf.numberToHclTerraform(this._maxIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_iops: {
        value: cdktf.numberToHclTerraform(this._minIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_size: {
        value: cdktf.numberToHclTerraform(this._totalSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
