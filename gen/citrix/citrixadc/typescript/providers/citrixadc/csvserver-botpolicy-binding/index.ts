// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsvserverBotpolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#bindpoint CsvserverBotpolicyBinding#bindpoint}
  */
  readonly bindpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#gotopriorityexpression CsvserverBotpolicyBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#id CsvserverBotpolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#invoke CsvserverBotpolicyBinding#invoke}
  */
  readonly invoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#labelname CsvserverBotpolicyBinding#labelname}
  */
  readonly labelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#labeltype CsvserverBotpolicyBinding#labeltype}
  */
  readonly labeltype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#name CsvserverBotpolicyBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#policyname CsvserverBotpolicyBinding#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#priority CsvserverBotpolicyBinding#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#targetlbvserver CsvserverBotpolicyBinding#targetlbvserver}
  */
  readonly targetlbvserver?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding citrixadc_csvserver_botpolicy_binding}
*/
export class CsvserverBotpolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_csvserver_botpolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsvserverBotpolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsvserverBotpolicyBinding to import
  * @param importFromId The id of the existing CsvserverBotpolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsvserverBotpolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_csvserver_botpolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/csvserver_botpolicy_binding citrixadc_csvserver_botpolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsvserverBotpolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: CsvserverBotpolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_csvserver_botpolicy_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindpoint = config.bindpoint;
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._id = config.id;
    this._invoke = config.invoke;
    this._labelname = config.labelname;
    this._labeltype = config.labeltype;
    this._name = config.name;
    this._policyname = config.policyname;
    this._priority = config.priority;
    this._targetlbvserver = config.targetlbvserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindpoint - computed: true, optional: true, required: false
  private _bindpoint?: string; 
  public get bindpoint() {
    return this.getStringAttribute('bindpoint');
  }
  public set bindpoint(value: string) {
    this._bindpoint = value;
  }
  public resetBindpoint() {
    this._bindpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpointInput() {
    return this._bindpoint;
  }

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

  // targetlbvserver - computed: true, optional: true, required: false
  private _targetlbvserver?: string; 
  public get targetlbvserver() {
    return this.getStringAttribute('targetlbvserver');
  }
  public set targetlbvserver(value: string) {
    this._targetlbvserver = value;
  }
  public resetTargetlbvserver() {
    this._targetlbvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetlbvserverInput() {
    return this._targetlbvserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bindpoint: cdktf.stringToTerraform(this._bindpoint),
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      id: cdktf.stringToTerraform(this._id),
      invoke: cdktf.booleanToTerraform(this._invoke),
      labelname: cdktf.stringToTerraform(this._labelname),
      labeltype: cdktf.stringToTerraform(this._labeltype),
      name: cdktf.stringToTerraform(this._name),
      policyname: cdktf.stringToTerraform(this._policyname),
      priority: cdktf.numberToTerraform(this._priority),
      targetlbvserver: cdktf.stringToTerraform(this._targetlbvserver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bindpoint: {
        value: cdktf.stringToHclTerraform(this._bindpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      targetlbvserver: {
        value: cdktf.stringToHclTerraform(this._targetlbvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
