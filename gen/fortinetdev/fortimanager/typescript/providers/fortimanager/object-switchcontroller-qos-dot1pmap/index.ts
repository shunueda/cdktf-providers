// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerQosDot1PmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#adom ObjectSwitchcontrollerQosDot1Pmap#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#description ObjectSwitchcontrollerQosDot1Pmap#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#egress_pri_tagging ObjectSwitchcontrollerQosDot1Pmap#egress_pri_tagging}
  */
  readonly egressPriTagging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#id ObjectSwitchcontrollerQosDot1Pmap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#name ObjectSwitchcontrollerQosDot1Pmap#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_0 ObjectSwitchcontrollerQosDot1Pmap#priority_0}
  */
  readonly priority0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_1 ObjectSwitchcontrollerQosDot1Pmap#priority_1}
  */
  readonly priority1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_2 ObjectSwitchcontrollerQosDot1Pmap#priority_2}
  */
  readonly priority2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_3 ObjectSwitchcontrollerQosDot1Pmap#priority_3}
  */
  readonly priority3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_4 ObjectSwitchcontrollerQosDot1Pmap#priority_4}
  */
  readonly priority4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_5 ObjectSwitchcontrollerQosDot1Pmap#priority_5}
  */
  readonly priority5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_6 ObjectSwitchcontrollerQosDot1Pmap#priority_6}
  */
  readonly priority6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#priority_7 ObjectSwitchcontrollerQosDot1Pmap#priority_7}
  */
  readonly priority7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#scopetype ObjectSwitchcontrollerQosDot1Pmap#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap fortimanager_object_switchcontroller_qos_dot1pmap}
*/
export class ObjectSwitchcontrollerQosDot1Pmap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_qos_dot1pmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerQosDot1Pmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerQosDot1Pmap to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerQosDot1Pmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerQosDot1Pmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_qos_dot1pmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_dot1pmap fortimanager_object_switchcontroller_qos_dot1pmap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerQosDot1PmapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerQosDot1PmapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_qos_dot1pmap',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._description = config.description;
    this._egressPriTagging = config.egressPriTagging;
    this._id = config.id;
    this._name = config.name;
    this._priority0 = config.priority0;
    this._priority1 = config.priority1;
    this._priority2 = config.priority2;
    this._priority3 = config.priority3;
    this._priority4 = config.priority4;
    this._priority5 = config.priority5;
    this._priority6 = config.priority6;
    this._priority7 = config.priority7;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // egress_pri_tagging - computed: true, optional: true, required: false
  private _egressPriTagging?: string; 
  public get egressPriTagging() {
    return this.getStringAttribute('egress_pri_tagging');
  }
  public set egressPriTagging(value: string) {
    this._egressPriTagging = value;
  }
  public resetEgressPriTagging() {
    this._egressPriTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPriTaggingInput() {
    return this._egressPriTagging;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority_0 - computed: true, optional: true, required: false
  private _priority0?: string; 
  public get priority0() {
    return this.getStringAttribute('priority_0');
  }
  public set priority0(value: string) {
    this._priority0 = value;
  }
  public resetPriority0() {
    this._priority0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority0Input() {
    return this._priority0;
  }

  // priority_1 - computed: true, optional: true, required: false
  private _priority1?: string; 
  public get priority1() {
    return this.getStringAttribute('priority_1');
  }
  public set priority1(value: string) {
    this._priority1 = value;
  }
  public resetPriority1() {
    this._priority1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority1Input() {
    return this._priority1;
  }

  // priority_2 - computed: true, optional: true, required: false
  private _priority2?: string; 
  public get priority2() {
    return this.getStringAttribute('priority_2');
  }
  public set priority2(value: string) {
    this._priority2 = value;
  }
  public resetPriority2() {
    this._priority2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority2Input() {
    return this._priority2;
  }

  // priority_3 - computed: true, optional: true, required: false
  private _priority3?: string; 
  public get priority3() {
    return this.getStringAttribute('priority_3');
  }
  public set priority3(value: string) {
    this._priority3 = value;
  }
  public resetPriority3() {
    this._priority3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority3Input() {
    return this._priority3;
  }

  // priority_4 - computed: true, optional: true, required: false
  private _priority4?: string; 
  public get priority4() {
    return this.getStringAttribute('priority_4');
  }
  public set priority4(value: string) {
    this._priority4 = value;
  }
  public resetPriority4() {
    this._priority4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority4Input() {
    return this._priority4;
  }

  // priority_5 - computed: true, optional: true, required: false
  private _priority5?: string; 
  public get priority5() {
    return this.getStringAttribute('priority_5');
  }
  public set priority5(value: string) {
    this._priority5 = value;
  }
  public resetPriority5() {
    this._priority5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority5Input() {
    return this._priority5;
  }

  // priority_6 - computed: true, optional: true, required: false
  private _priority6?: string; 
  public get priority6() {
    return this.getStringAttribute('priority_6');
  }
  public set priority6(value: string) {
    this._priority6 = value;
  }
  public resetPriority6() {
    this._priority6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority6Input() {
    return this._priority6;
  }

  // priority_7 - computed: true, optional: true, required: false
  private _priority7?: string; 
  public get priority7() {
    return this.getStringAttribute('priority_7');
  }
  public set priority7(value: string) {
    this._priority7 = value;
  }
  public resetPriority7() {
    this._priority7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority7Input() {
    return this._priority7;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      description: cdktf.stringToTerraform(this._description),
      egress_pri_tagging: cdktf.stringToTerraform(this._egressPriTagging),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority_0: cdktf.stringToTerraform(this._priority0),
      priority_1: cdktf.stringToTerraform(this._priority1),
      priority_2: cdktf.stringToTerraform(this._priority2),
      priority_3: cdktf.stringToTerraform(this._priority3),
      priority_4: cdktf.stringToTerraform(this._priority4),
      priority_5: cdktf.stringToTerraform(this._priority5),
      priority_6: cdktf.stringToTerraform(this._priority6),
      priority_7: cdktf.stringToTerraform(this._priority7),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_pri_tagging: {
        value: cdktf.stringToHclTerraform(this._egressPriTagging),
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
      priority_0: {
        value: cdktf.stringToHclTerraform(this._priority0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_1: {
        value: cdktf.stringToHclTerraform(this._priority1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_2: {
        value: cdktf.stringToHclTerraform(this._priority2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_3: {
        value: cdktf.stringToHclTerraform(this._priority3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_4: {
        value: cdktf.stringToHclTerraform(this._priority4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_5: {
        value: cdktf.stringToHclTerraform(this._priority5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_6: {
        value: cdktf.stringToHclTerraform(this._priority6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_7: {
        value: cdktf.stringToHclTerraform(this._priority7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
