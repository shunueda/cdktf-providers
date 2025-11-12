// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/nic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable name for the NIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/nic#name Nic#name}
  */
  readonly name: string;
  /**
  * ID of the VM to attach this NIC to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/nic#vm_id Nic#vm_id}
  */
  readonly vmId: string;
  /**
  * ID of the VNIC profile to associate with this NIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/nic#vnic_profile_id Nic#vnic_profile_id}
  */
  readonly vnicProfileId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/nic ovirt_nic}
*/
export class Nic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_nic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nic to import
  * @param importFromId The id of the existing Nic that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/nic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_nic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/nic ovirt_nic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NicConfig
  */
  public constructor(scope: Construct, id: string, config: NicConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_nic',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5',
        providerVersionConstraint: '2.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._vmId = config.vmId;
    this._vnicProfileId = config.vnicProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // vnic_profile_id - computed: false, optional: false, required: true
  private _vnicProfileId?: string; 
  public get vnicProfileId() {
    return this.getStringAttribute('vnic_profile_id');
  }
  public set vnicProfileId(value: string) {
    this._vnicProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicProfileIdInput() {
    return this._vnicProfileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      vm_id: cdktf.stringToTerraform(this._vmId),
      vnic_profile_id: cdktf.stringToTerraform(this._vnicProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnic_profile_id: {
        value: cdktf.stringToHclTerraform(this._vnicProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
