// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/delegate_approval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DelegateApprovalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to approve the delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/delegate_approval#approve DelegateApproval#approve}
  */
  readonly approve: boolean | cdktf.IResolvable;
  /**
  * The id of the delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/delegate_approval#delegate_id DelegateApproval#delegate_id}
  */
  readonly delegateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/delegate_approval#id DelegateApproval#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/delegate_approval harness_delegate_approval}
*/
export class DelegateApproval extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_delegate_approval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DelegateApproval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DelegateApproval to import
  * @param importFromId The id of the existing DelegateApproval that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/delegate_approval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DelegateApproval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_delegate_approval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/delegate_approval harness_delegate_approval} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DelegateApprovalConfig
  */
  public constructor(scope: Construct, id: string, config: DelegateApprovalConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_delegate_approval',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approve = config.approve;
    this._delegateId = config.delegateId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approve - computed: false, optional: false, required: true
  private _approve?: boolean | cdktf.IResolvable; 
  public get approve() {
    return this.getBooleanAttribute('approve');
  }
  public set approve(value: boolean | cdktf.IResolvable) {
    this._approve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approveInput() {
    return this._approve;
  }

  // delegate_id - computed: false, optional: false, required: true
  private _delegateId?: string; 
  public get delegateId() {
    return this.getStringAttribute('delegate_id');
  }
  public set delegateId(value: string) {
    this._delegateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateIdInput() {
    return this._delegateId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approve: cdktf.booleanToTerraform(this._approve),
      delegate_id: cdktf.stringToTerraform(this._delegateId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approve: {
        value: cdktf.booleanToHclTerraform(this._approve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delegate_id: {
        value: cdktf.stringToHclTerraform(this._delegateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
