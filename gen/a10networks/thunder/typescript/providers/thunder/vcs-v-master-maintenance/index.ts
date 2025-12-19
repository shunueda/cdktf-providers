// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_v_master_maintenance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsVMasterMaintenanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_v_master_maintenance#id VcsVMasterMaintenance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the seconds vMaster will be maintained, 60 by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_v_master_maintenance#vmaster_maintenance VcsVMasterMaintenance#vmaster_maintenance}
  */
  readonly vmasterMaintenance?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_v_master_maintenance thunder_vcs_vMaster_maintenance}
*/
export class VcsVMasterMaintenance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_vMaster_maintenance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsVMasterMaintenance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsVMasterMaintenance to import
  * @param importFromId The id of the existing VcsVMasterMaintenance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_v_master_maintenance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsVMasterMaintenance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_vMaster_maintenance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_v_master_maintenance thunder_vcs_vMaster_maintenance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsVMasterMaintenanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsVMasterMaintenanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_vMaster_maintenance',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._vmasterMaintenance = config.vmasterMaintenance;
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

  // vmaster_maintenance - computed: false, optional: true, required: false
  private _vmasterMaintenance?: number; 
  public get vmasterMaintenance() {
    return this.getNumberAttribute('vmaster_maintenance');
  }
  public set vmasterMaintenance(value: number) {
    this._vmasterMaintenance = value;
  }
  public resetVmasterMaintenance() {
    this._vmasterMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmasterMaintenanceInput() {
    return this._vmasterMaintenance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vmaster_maintenance: cdktf.numberToTerraform(this._vmasterMaintenance),
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
      vmaster_maintenance: {
        value: cdktf.numberToHclTerraform(this._vmasterMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
