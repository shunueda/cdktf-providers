// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_stack_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformStackAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application ID. Specify either group_id or application_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_stack_access#application_id PlatformStackAccess#application_id}
  */
  readonly applicationId?: string;
  /**
  * User Group ID. Specify either group_id or application_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_stack_access#group_id PlatformStackAccess#group_id}
  */
  readonly groupId?: string;
  /**
  * ID of Stack to grant access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_stack_access#stack_id PlatformStackAccess#stack_id}
  */
  readonly stackId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_stack_access kaleido_platform_stack_access}
*/
export class PlatformStackAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_stack_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformStackAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformStackAccess to import
  * @param importFromId The id of the existing PlatformStackAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_stack_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformStackAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_stack_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_stack_access kaleido_platform_stack_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformStackAccessConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformStackAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_stack_access',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._groupId = config.groupId;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      group_id: cdktf.stringToTerraform(this._groupId),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
