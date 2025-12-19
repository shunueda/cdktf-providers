// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwActiveRuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set#id FwActiveRuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set#name FwActiveRuleSet#name}
  */
  readonly name?: string;
  /**
  * Override NAT idle-timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set#override_nat_aging FwActiveRuleSet#override_nat_aging}
  */
  readonly overrideNatAging?: number;
  /**
  * Session Aging Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set#session_aging FwActiveRuleSet#session_aging}
  */
  readonly sessionAging?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set#uuid FwActiveRuleSet#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set thunder_fw_active_rule_set}
*/
export class FwActiveRuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_active_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwActiveRuleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwActiveRuleSet to import
  * @param importFromId The id of the existing FwActiveRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwActiveRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_active_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_active_rule_set thunder_fw_active_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwActiveRuleSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwActiveRuleSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_active_rule_set',
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
    this._name = config.name;
    this._overrideNatAging = config.overrideNatAging;
    this._sessionAging = config.sessionAging;
    this._uuid = config.uuid;
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

  // override_nat_aging - computed: false, optional: true, required: false
  private _overrideNatAging?: number; 
  public get overrideNatAging() {
    return this.getNumberAttribute('override_nat_aging');
  }
  public set overrideNatAging(value: number) {
    this._overrideNatAging = value;
  }
  public resetOverrideNatAging() {
    this._overrideNatAging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideNatAgingInput() {
    return this._overrideNatAging;
  }

  // session_aging - computed: false, optional: true, required: false
  private _sessionAging?: string; 
  public get sessionAging() {
    return this.getStringAttribute('session_aging');
  }
  public set sessionAging(value: string) {
    this._sessionAging = value;
  }
  public resetSessionAging() {
    this._sessionAging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAgingInput() {
    return this._sessionAging;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      override_nat_aging: cdktf.numberToTerraform(this._overrideNatAging),
      session_aging: cdktf.stringToTerraform(this._sessionAging),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_nat_aging: {
        value: cdktf.numberToHclTerraform(this._overrideNatAging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_aging: {
        value: cdktf.stringToHclTerraform(this._sessionAging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
