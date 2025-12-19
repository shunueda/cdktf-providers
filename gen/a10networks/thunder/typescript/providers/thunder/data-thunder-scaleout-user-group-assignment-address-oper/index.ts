// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutUserGroupAssignmentAddressOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#id DataThunderScaleoutUserGroupAssignmentAddressOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#oper DataThunderScaleoutUserGroupAssignmentAddressOper#oper}
  */
  readonly oper?: DataThunderScaleoutUserGroupAssignmentAddressOperOper;
}
export interface DataThunderScaleoutUserGroupAssignmentAddressOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#active_node DataThunderScaleoutUserGroupAssignmentAddressOper#active_node}
  */
  readonly activeNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#application_type DataThunderScaleoutUserGroupAssignmentAddressOper#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#ip DataThunderScaleoutUserGroupAssignmentAddressOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#ipv6 DataThunderScaleoutUserGroupAssignmentAddressOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#service_template DataThunderScaleoutUserGroupAssignmentAddressOper#service_template}
  */
  readonly serviceTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#standby_node DataThunderScaleoutUserGroupAssignmentAddressOper#standby_node}
  */
  readonly standbyNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#user_group DataThunderScaleoutUserGroupAssignmentAddressOper#user_group}
  */
  readonly userGroup?: number;
}

export function dataThunderScaleoutUserGroupAssignmentAddressOperOperToTerraform(struct?: DataThunderScaleoutUserGroupAssignmentAddressOperOperOutputReference | DataThunderScaleoutUserGroupAssignmentAddressOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_node: cdktf.numberToTerraform(struct!.activeNode),
    application_type: cdktf.stringToTerraform(struct!.applicationType),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    service_template: cdktf.stringToTerraform(struct!.serviceTemplate),
    standby_node: cdktf.numberToTerraform(struct!.standbyNode),
    user_group: cdktf.numberToTerraform(struct!.userGroup),
  }
}


export function dataThunderScaleoutUserGroupAssignmentAddressOperOperToHclTerraform(struct?: DataThunderScaleoutUserGroupAssignmentAddressOperOperOutputReference | DataThunderScaleoutUserGroupAssignmentAddressOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_node: {
      value: cdktf.numberToHclTerraform(struct!.activeNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application_type: {
      value: cdktf.stringToHclTerraform(struct!.applicationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_template: {
      value: cdktf.stringToHclTerraform(struct!.serviceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_node: {
      value: cdktf.numberToHclTerraform(struct!.standbyNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group: {
      value: cdktf.numberToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutUserGroupAssignmentAddressOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutUserGroupAssignmentAddressOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNode = this._activeNode;
    }
    if (this._applicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._serviceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplate = this._serviceTemplate;
    }
    if (this._standbyNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyNode = this._standbyNode;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutUserGroupAssignmentAddressOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeNode = undefined;
      this._applicationType = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._serviceTemplate = undefined;
      this._standbyNode = undefined;
      this._userGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeNode = value.activeNode;
      this._applicationType = value.applicationType;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._serviceTemplate = value.serviceTemplate;
      this._standbyNode = value.standbyNode;
      this._userGroup = value.userGroup;
    }
  }

  // active_node - computed: false, optional: true, required: false
  private _activeNode?: number; 
  public get activeNode() {
    return this.getNumberAttribute('active_node');
  }
  public set activeNode(value: number) {
    this._activeNode = value;
  }
  public resetActiveNode() {
    this._activeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodeInput() {
    return this._activeNode;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // service_template - computed: false, optional: true, required: false
  private _serviceTemplate?: string; 
  public get serviceTemplate() {
    return this.getStringAttribute('service_template');
  }
  public set serviceTemplate(value: string) {
    this._serviceTemplate = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate;
  }

  // standby_node - computed: false, optional: true, required: false
  private _standbyNode?: number; 
  public get standbyNode() {
    return this.getNumberAttribute('standby_node');
  }
  public set standbyNode(value: number) {
    this._standbyNode = value;
  }
  public resetStandbyNode() {
    this._standbyNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNodeInput() {
    return this._standbyNode;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: number; 
  public get userGroup() {
    return this.getNumberAttribute('user_group');
  }
  public set userGroup(value: number) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper thunder_scaleout_user_group_assignment_address_oper}
*/
export class DataThunderScaleoutUserGroupAssignmentAddressOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_user_group_assignment_address_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutUserGroupAssignmentAddressOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutUserGroupAssignmentAddressOper to import
  * @param importFromId The id of the existing DataThunderScaleoutUserGroupAssignmentAddressOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutUserGroupAssignmentAddressOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_user_group_assignment_address_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_address_oper thunder_scaleout_user_group_assignment_address_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutUserGroupAssignmentAddressOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutUserGroupAssignmentAddressOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_user_group_assignment_address_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderScaleoutUserGroupAssignmentAddressOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutUserGroupAssignmentAddressOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderScaleoutUserGroupAssignmentAddressOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderScaleoutUserGroupAssignmentAddressOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutUserGroupAssignmentAddressOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
