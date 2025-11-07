// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmStartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Force stop/shutdown even if a backup is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start#force_stop VmStart#force_stop}
  */
  readonly forceStop?: boolean | cdktf.IResolvable;
  /**
  * Desired status of the VM. The only valid value is "up".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start#status VmStart#status}
  */
  readonly status?: string;
  /**
  * Use "stop" to power-off the machine, or "shutdown" (default) to send an ACPI shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start#stop_behavior VmStart#stop_behavior}
  */
  readonly stopBehavior?: string;
  /**
  * oVirt ID of the VM to be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start#vm_id VmStart#vm_id}
  */
  readonly vmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start ovirt_vm_start}
*/
export class VmStart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_vm_start";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmStart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmStart to import
  * @param importFromId The id of the existing VmStart that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmStart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_vm_start", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_start ovirt_vm_start} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmStartConfig
  */
  public constructor(scope: Construct, id: string, config: VmStartConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_vm_start',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceStop = config.forceStop;
    this._status = config.status;
    this._stopBehavior = config.stopBehavior;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_stop - computed: false, optional: true, required: false
  private _forceStop?: boolean | cdktf.IResolvable; 
  public get forceStop() {
    return this.getBooleanAttribute('force_stop');
  }
  public set forceStop(value: boolean | cdktf.IResolvable) {
    this._forceStop = value;
  }
  public resetForceStop() {
    this._forceStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStopInput() {
    return this._forceStop;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // stop_behavior - computed: false, optional: true, required: false
  private _stopBehavior?: string; 
  public get stopBehavior() {
    return this.getStringAttribute('stop_behavior');
  }
  public set stopBehavior(value: string) {
    this._stopBehavior = value;
  }
  public resetStopBehavior() {
    this._stopBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopBehaviorInput() {
    return this._stopBehavior;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_stop: cdktf.booleanToTerraform(this._forceStop),
      status: cdktf.stringToTerraform(this._status),
      stop_behavior: cdktf.stringToTerraform(this._stopBehavior),
      vm_id: cdktf.stringToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_stop: {
        value: cdktf.booleanToHclTerraform(this._forceStop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_behavior: {
        value: cdktf.stringToHclTerraform(this._stopBehavior),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
