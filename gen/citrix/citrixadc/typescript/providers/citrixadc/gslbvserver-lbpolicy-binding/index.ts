// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbvserverLbpolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#gotopriorityexpression GslbvserverLbpolicyBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#id GslbvserverLbpolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#name GslbvserverLbpolicyBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#order GslbvserverLbpolicyBinding#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#policyname GslbvserverLbpolicyBinding#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#priority GslbvserverLbpolicyBinding#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#type GslbvserverLbpolicyBinding#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding citrixadc_gslbvserver_lbpolicy_binding}
*/
export class GslbvserverLbpolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbvserver_lbpolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbvserverLbpolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbvserverLbpolicyBinding to import
  * @param importFromId The id of the existing GslbvserverLbpolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbvserverLbpolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbvserver_lbpolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_lbpolicy_binding citrixadc_gslbvserver_lbpolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbvserverLbpolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GslbvserverLbpolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbvserver_lbpolicy_binding',
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
    this._name = config.name;
    this._order = config.order;
    this._policyname = config.policyname;
    this._priority = config.priority;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      policyname: cdktf.stringToTerraform(this._policyname),
      priority: cdktf.numberToTerraform(this._priority),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
