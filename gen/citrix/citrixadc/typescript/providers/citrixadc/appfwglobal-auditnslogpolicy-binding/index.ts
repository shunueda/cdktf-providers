// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwglobalAuditnslogpolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#gotopriorityexpression AppfwglobalAuditnslogpolicyBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#id AppfwglobalAuditnslogpolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#invoke AppfwglobalAuditnslogpolicyBinding#invoke}
  */
  readonly invoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#labelname AppfwglobalAuditnslogpolicyBinding#labelname}
  */
  readonly labelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#labeltype AppfwglobalAuditnslogpolicyBinding#labeltype}
  */
  readonly labeltype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#policyname AppfwglobalAuditnslogpolicyBinding#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#priority AppfwglobalAuditnslogpolicyBinding#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#state AppfwglobalAuditnslogpolicyBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#type AppfwglobalAuditnslogpolicyBinding#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding citrixadc_appfwglobal_auditnslogpolicy_binding}
*/
export class AppfwglobalAuditnslogpolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwglobal_auditnslogpolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwglobalAuditnslogpolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwglobalAuditnslogpolicyBinding to import
  * @param importFromId The id of the existing AppfwglobalAuditnslogpolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwglobalAuditnslogpolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwglobal_auditnslogpolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwglobal_auditnslogpolicy_binding citrixadc_appfwglobal_auditnslogpolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwglobalAuditnslogpolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwglobalAuditnslogpolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwglobal_auditnslogpolicy_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._id = config.id;
    this._invoke = config.invoke;
    this._labelname = config.labelname;
    this._labeltype = config.labeltype;
    this._policyname = config.policyname;
    this._priority = config.priority;
    this._state = config.state;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
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

  // invoke - computed: true, optional: true, required: false
  private _invoke?: boolean | cdktf.IResolvable; 
  public get invoke() {
    return this.getBooleanAttribute('invoke');
  }
  public set invoke(value: boolean | cdktf.IResolvable) {
    this._invoke = value;
  }
  public resetInvoke() {
    this._invoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeInput() {
    return this._invoke;
  }

  // labelname - computed: true, optional: true, required: false
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  public resetLabelname() {
    this._labelname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // labeltype - computed: true, optional: true, required: false
  private _labeltype?: string; 
  public get labeltype() {
    return this.getStringAttribute('labeltype');
  }
  public set labeltype(value: string) {
    this._labeltype = value;
  }
  public resetLabeltype() {
    this._labeltype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labeltypeInput() {
    return this._labeltype;
  }

  // policyname - computed: false, optional: false, required: true
  private _policyname?: string; 
  public get policyname() {
    return this.getStringAttribute('policyname');
  }
  public set policyname(value: string) {
    this._policyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policynameInput() {
    return this._policyname;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      id: cdktf.stringToTerraform(this._id),
      invoke: cdktf.booleanToTerraform(this._invoke),
      labelname: cdktf.stringToTerraform(this._labelname),
      labeltype: cdktf.stringToTerraform(this._labeltype),
      policyname: cdktf.stringToTerraform(this._policyname),
      priority: cdktf.numberToTerraform(this._priority),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gotopriorityexpression: {
        value: cdktf.stringToHclTerraform(this._gotopriorityexpression),
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
      invoke: {
        value: cdktf.booleanToHclTerraform(this._invoke),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labelname: {
        value: cdktf.stringToHclTerraform(this._labelname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labeltype: {
        value: cdktf.stringToHclTerraform(this._labeltype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyname: {
        value: cdktf.stringToHclTerraform(this._policyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
