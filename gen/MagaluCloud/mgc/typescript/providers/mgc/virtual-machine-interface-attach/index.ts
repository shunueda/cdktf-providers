// https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/virtual_machine_interface_attach
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineInterfaceAttachConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the VM instance to attach the interface to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/virtual_machine_interface_attach#instance_id VirtualMachineInterfaceAttach#instance_id}
  */
  readonly instanceId: string;
  /**
  * ID of the network interface to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/virtual_machine_interface_attach#interface_id VirtualMachineInterfaceAttach#interface_id}
  */
  readonly interfaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/virtual_machine_interface_attach mgc_virtual_machine_interface_attach}
*/
export class VirtualMachineInterfaceAttach extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_virtual_machine_interface_attach";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachineInterfaceAttach resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachineInterfaceAttach to import
  * @param importFromId The id of the existing VirtualMachineInterfaceAttach that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/virtual_machine_interface_attach#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachineInterfaceAttach to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_virtual_machine_interface_attach", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/virtual_machine_interface_attach mgc_virtual_machine_interface_attach} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineInterfaceAttachConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineInterfaceAttachConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_virtual_machine_interface_attach',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceId = config.instanceId;
    this._interfaceId = config.interfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
