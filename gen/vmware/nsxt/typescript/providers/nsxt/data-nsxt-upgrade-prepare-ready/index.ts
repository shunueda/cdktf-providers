// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/upgrade_prepare_ready
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtUpgradePrepareReadyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/upgrade_prepare_ready#id DataNsxtUpgradePrepareReady#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of corresponding nsxt_upgrade_prepare resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/upgrade_prepare_ready#upgrade_prepare_id DataNsxtUpgradePrepareReady#upgrade_prepare_id}
  */
  readonly upgradePrepareId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/upgrade_prepare_ready nsxt_upgrade_prepare_ready}
*/
export class DataNsxtUpgradePrepareReady extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_upgrade_prepare_ready";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtUpgradePrepareReady resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtUpgradePrepareReady to import
  * @param importFromId The id of the existing DataNsxtUpgradePrepareReady that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/upgrade_prepare_ready#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtUpgradePrepareReady to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_upgrade_prepare_ready", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/upgrade_prepare_ready nsxt_upgrade_prepare_ready} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtUpgradePrepareReadyConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsxtUpgradePrepareReadyConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_upgrade_prepare_ready',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._upgradePrepareId = config.upgradePrepareId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // upgrade_prepare_id - computed: false, optional: false, required: true
  private _upgradePrepareId?: string; 
  public get upgradePrepareId() {
    return this.getStringAttribute('upgrade_prepare_id');
  }
  public set upgradePrepareId(value: string) {
    this._upgradePrepareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePrepareIdInput() {
    return this._upgradePrepareId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      upgrade_prepare_id: cdktf.stringToTerraform(this._upgradePrepareId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_prepare_id: {
        value: cdktf.stringToHclTerraform(this._upgradePrepareId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
