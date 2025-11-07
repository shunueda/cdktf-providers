// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_quorum_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccQuorumPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Fortanix DSM account object id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_quorum_policy#acct_id AccQuorumPolicy#acct_id}
  */
  readonly acctId: string;
  /**
  * The Fortanix DSM account object quorum approval policy definition as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_quorum_policy#approval_policy AccQuorumPolicy#approval_policy}
  */
  readonly approvalPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_quorum_policy#id AccQuorumPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_quorum_policy dsm_acc_quorum_policy}
*/
export class AccQuorumPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_acc_quorum_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccQuorumPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccQuorumPolicy to import
  * @param importFromId The id of the existing AccQuorumPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_quorum_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccQuorumPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_acc_quorum_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_quorum_policy dsm_acc_quorum_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccQuorumPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccQuorumPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_acc_quorum_policy',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acctId = config.acctId;
    this._approvalPolicy = config.approvalPolicy;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: false, optional: false, required: true
  private _acctId?: string; 
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }
  public set acctId(value: string) {
    this._acctId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acctIdInput() {
    return this._acctId;
  }

  // approval_policy - computed: false, optional: false, required: true
  private _approvalPolicy?: string; 
  public get approvalPolicy() {
    return this.getStringAttribute('approval_policy');
  }
  public set approvalPolicy(value: string) {
    this._approvalPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalPolicyInput() {
    return this._approvalPolicy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acct_id: cdktf.stringToTerraform(this._acctId),
      approval_policy: cdktf.stringToTerraform(this._approvalPolicy),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_id: {
        value: cdktf.stringToHclTerraform(this._acctId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_policy: {
        value: cdktf.stringToHclTerraform(this._approvalPolicy),
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
