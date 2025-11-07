// https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_control_disablement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityHubControlDisablementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ARN of the Security Hub Standards Control to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_control_disablement#control_arn SecurityHubControlDisablement#control_arn}
  */
  readonly controlArn: string;
  /**
  * The reason the control is being disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_control_disablement#reason SecurityHubControlDisablement#reason}
  */
  readonly reason?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_control_disablement awsutils_security_hub_control_disablement}
*/
export class SecurityHubControlDisablement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsutils_security_hub_control_disablement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityHubControlDisablement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityHubControlDisablement to import
  * @param importFromId The id of the existing SecurityHubControlDisablement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_control_disablement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityHubControlDisablement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsutils_security_hub_control_disablement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_control_disablement awsutils_security_hub_control_disablement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityHubControlDisablementConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityHubControlDisablementConfig) {
    super(scope, id, {
      terraformResourceType: 'awsutils_security_hub_control_disablement',
      terraformGeneratorMetadata: {
        providerName: 'awsutils',
        providerVersion: '0.20.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlArn = config.controlArn;
    this._reason = config.reason;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_arn - computed: false, optional: false, required: true
  private _controlArn?: string; 
  public get controlArn() {
    return this.getStringAttribute('control_arn');
  }
  public set controlArn(value: string) {
    this._controlArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlArnInput() {
    return this._controlArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_arn: cdktf.stringToTerraform(this._controlArn),
      reason: cdktf.stringToTerraform(this._reason),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_arn: {
        value: cdktf.stringToHclTerraform(this._controlArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
