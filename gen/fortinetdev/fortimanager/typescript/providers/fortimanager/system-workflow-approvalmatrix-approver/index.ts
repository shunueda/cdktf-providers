// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemWorkflowApprovalmatrixApproverAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver#approval_matrix SystemWorkflowApprovalmatrixApproverA#approval_matrix}
  */
  readonly approvalMatrix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver#id SystemWorkflowApprovalmatrixApproverA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver#member SystemWorkflowApprovalmatrixApproverA#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver#seq_num SystemWorkflowApprovalmatrixApproverA#seq_num}
  */
  readonly seqNum?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver fortimanager_system_workflow_approvalmatrix_approver}
*/
export class SystemWorkflowApprovalmatrixApproverA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_workflow_approvalmatrix_approver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemWorkflowApprovalmatrixApproverA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemWorkflowApprovalmatrixApproverA to import
  * @param importFromId The id of the existing SystemWorkflowApprovalmatrixApproverA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemWorkflowApprovalmatrixApproverA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_workflow_approvalmatrix_approver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_workflow_approvalmatrix_approver fortimanager_system_workflow_approvalmatrix_approver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemWorkflowApprovalmatrixApproverAConfig
  */
  public constructor(scope: Construct, id: string, config: SystemWorkflowApprovalmatrixApproverAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_workflow_approvalmatrix_approver',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalMatrix = config.approvalMatrix;
    this._id = config.id;
    this._member = config.member;
    this._seqNum = config.seqNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_matrix - computed: false, optional: false, required: true
  private _approvalMatrix?: string; 
  public get approvalMatrix() {
    return this.getStringAttribute('approval_matrix');
  }
  public set approvalMatrix(value: string) {
    this._approvalMatrix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalMatrixInput() {
    return this._approvalMatrix;
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

  // member - computed: false, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_matrix: cdktf.stringToTerraform(this._approvalMatrix),
      id: cdktf.stringToTerraform(this._id),
      member: cdktf.stringToTerraform(this._member),
      seq_num: cdktf.numberToTerraform(this._seqNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_matrix: {
        value: cdktf.stringToHclTerraform(this._approvalMatrix),
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
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
