// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemWorkflowApprovalmatrixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#adom_name SystemWorkflowApprovalmatrix#adom_name}
  */
  readonly adomName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#dynamic_sort_subtable SystemWorkflowApprovalmatrix#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#id SystemWorkflowApprovalmatrix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#mail_server SystemWorkflowApprovalmatrix#mail_server}
  */
  readonly mailServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#notify SystemWorkflowApprovalmatrix#notify}
  */
  readonly notify?: string;
  /**
  * approver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#approver SystemWorkflowApprovalmatrix#approver}
  */
  readonly approver?: SystemWorkflowApprovalmatrixApprover[] | cdktf.IResolvable;
}
export interface SystemWorkflowApprovalmatrixApprover {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#member SystemWorkflowApprovalmatrix#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#seq_num SystemWorkflowApprovalmatrix#seq_num}
  */
  readonly seqNum?: number;
}

export function systemWorkflowApprovalmatrixApproverToTerraform(struct?: SystemWorkflowApprovalmatrixApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member: cdktf.stringToTerraform(struct!.member),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
  }
}


export function systemWorkflowApprovalmatrixApproverToHclTerraform(struct?: SystemWorkflowApprovalmatrixApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemWorkflowApprovalmatrixApproverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemWorkflowApprovalmatrixApprover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemWorkflowApprovalmatrixApprover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._member = undefined;
      this._seqNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._member = value.member;
      this._seqNum = value.seqNum;
    }
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
}

export class SystemWorkflowApprovalmatrixApproverList extends cdktf.ComplexList {
  public internalValue? : SystemWorkflowApprovalmatrixApprover[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemWorkflowApprovalmatrixApproverOutputReference {
    return new SystemWorkflowApprovalmatrixApproverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix fortimanager_system_workflow_approvalmatrix}
*/
export class SystemWorkflowApprovalmatrix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_workflow_approvalmatrix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemWorkflowApprovalmatrix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemWorkflowApprovalmatrix to import
  * @param importFromId The id of the existing SystemWorkflowApprovalmatrix that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemWorkflowApprovalmatrix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_workflow_approvalmatrix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_workflow_approvalmatrix fortimanager_system_workflow_approvalmatrix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemWorkflowApprovalmatrixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemWorkflowApprovalmatrixConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_workflow_approvalmatrix',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adomName = config.adomName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._mailServer = config.mailServer;
    this._notify = config.notify;
    this._approver.internalValue = config.approver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom_name - computed: false, optional: true, required: false
  private _adomName?: string; 
  public get adomName() {
    return this.getStringAttribute('adom_name');
  }
  public set adomName(value: string) {
    this._adomName = value;
  }
  public resetAdomName() {
    this._adomName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomNameInput() {
    return this._adomName;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // mail_server - computed: false, optional: true, required: false
  private _mailServer?: string; 
  public get mailServer() {
    return this.getStringAttribute('mail_server');
  }
  public set mailServer(value: string) {
    this._mailServer = value;
  }
  public resetMailServer() {
    this._mailServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailServerInput() {
    return this._mailServer;
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: string; 
  public get notify() {
    return this.getStringAttribute('notify');
  }
  public set notify(value: string) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // approver - computed: false, optional: true, required: false
  private _approver = new SystemWorkflowApprovalmatrixApproverList(this, "approver", false);
  public get approver() {
    return this._approver;
  }
  public putApprover(value: SystemWorkflowApprovalmatrixApprover[] | cdktf.IResolvable) {
    this._approver.internalValue = value;
  }
  public resetApprover() {
    this._approver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverInput() {
    return this._approver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom_name: cdktf.stringToTerraform(this._adomName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      mail_server: cdktf.stringToTerraform(this._mailServer),
      notify: cdktf.stringToTerraform(this._notify),
      approver: cdktf.listMapper(systemWorkflowApprovalmatrixApproverToTerraform, true)(this._approver.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom_name: {
        value: cdktf.stringToHclTerraform(this._adomName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      mail_server: {
        value: cdktf.stringToHclTerraform(this._mailServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify: {
        value: cdktf.stringToHclTerraform(this._notify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approver: {
        value: cdktf.listMapperHcl(systemWorkflowApprovalmatrixApproverToHclTerraform, true)(this._approver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemWorkflowApprovalmatrixApproverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
