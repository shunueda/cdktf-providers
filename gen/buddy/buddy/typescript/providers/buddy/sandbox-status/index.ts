// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SandboxStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status#domain SandboxStatus#domain}
  */
  readonly domain: string;
  /**
  * The sandbox's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status#sandbox_id SandboxStatus#sandbox_id}
  */
  readonly sandboxId: string;
  /**
  * The sandbox's status to achive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status#status SandboxStatus#status}
  */
  readonly status: string;
  /**
  * Wait until sandbox is in required status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status#wait_for_status SandboxStatus#wait_for_status}
  */
  readonly waitForStatus?: boolean | cdktf.IResolvable;
  /**
  * Seconds to wait until sandbox is in required status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status#wait_for_status_timeout SandboxStatus#wait_for_status_timeout}
  */
  readonly waitForStatusTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status buddy_sandbox_status}
*/
export class SandboxStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_sandbox_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SandboxStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SandboxStatus to import
  * @param importFromId The id of the existing SandboxStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SandboxStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_sandbox_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/sandbox_status buddy_sandbox_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SandboxStatusConfig
  */
  public constructor(scope: Construct, id: string, config: SandboxStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_sandbox_status',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._sandboxId = config.sandboxId;
    this._status = config.status;
    this._waitForStatus = config.waitForStatus;
    this._waitForStatusTimeout = config.waitForStatusTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sandbox_id - computed: false, optional: false, required: true
  private _sandboxId?: string; 
  public get sandboxId() {
    return this.getStringAttribute('sandbox_id');
  }
  public set sandboxId(value: string) {
    this._sandboxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxIdInput() {
    return this._sandboxId;
  }

  // sandbox_status - computed: true, optional: false, required: false
  public get sandboxStatus() {
    return this.getStringAttribute('sandbox_status');
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // wait_for_status - computed: true, optional: true, required: false
  private _waitForStatus?: boolean | cdktf.IResolvable; 
  public get waitForStatus() {
    return this.getBooleanAttribute('wait_for_status');
  }
  public set waitForStatus(value: boolean | cdktf.IResolvable) {
    this._waitForStatus = value;
  }
  public resetWaitForStatus() {
    this._waitForStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForStatusInput() {
    return this._waitForStatus;
  }

  // wait_for_status_timeout - computed: true, optional: true, required: false
  private _waitForStatusTimeout?: number; 
  public get waitForStatusTimeout() {
    return this.getNumberAttribute('wait_for_status_timeout');
  }
  public set waitForStatusTimeout(value: number) {
    this._waitForStatusTimeout = value;
  }
  public resetWaitForStatusTimeout() {
    this._waitForStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForStatusTimeoutInput() {
    return this._waitForStatusTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      sandbox_id: cdktf.stringToTerraform(this._sandboxId),
      status: cdktf.stringToTerraform(this._status),
      wait_for_status: cdktf.booleanToTerraform(this._waitForStatus),
      wait_for_status_timeout: cdktf.numberToTerraform(this._waitForStatusTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox_id: {
        value: cdktf.stringToHclTerraform(this._sandboxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_status: {
        value: cdktf.booleanToHclTerraform(this._waitForStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_status_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForStatusTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
