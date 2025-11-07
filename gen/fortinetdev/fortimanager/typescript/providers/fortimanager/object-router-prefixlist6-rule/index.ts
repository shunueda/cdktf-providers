// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectRouterPrefixlist6RuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#action ObjectRouterPrefixlist6RuleA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#adom ObjectRouterPrefixlist6RuleA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#flags ObjectRouterPrefixlist6RuleA#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#fosid ObjectRouterPrefixlist6RuleA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#ge ObjectRouterPrefixlist6RuleA#ge}
  */
  readonly ge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#id ObjectRouterPrefixlist6RuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#le ObjectRouterPrefixlist6RuleA#le}
  */
  readonly le?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#prefix6 ObjectRouterPrefixlist6RuleA#prefix6}
  */
  readonly prefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#prefix_list6 ObjectRouterPrefixlist6RuleA#prefix_list6}
  */
  readonly prefixList6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#scopetype ObjectRouterPrefixlist6RuleA#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule fortimanager_object_router_prefixlist6_rule}
*/
export class ObjectRouterPrefixlist6RuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_router_prefixlist6_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectRouterPrefixlist6RuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectRouterPrefixlist6RuleA to import
  * @param importFromId The id of the existing ObjectRouterPrefixlist6RuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectRouterPrefixlist6RuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_router_prefixlist6_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_prefixlist6_rule fortimanager_object_router_prefixlist6_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectRouterPrefixlist6RuleAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectRouterPrefixlist6RuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_router_prefixlist6_rule',
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
    this._action = config.action;
    this._adom = config.adom;
    this._flags = config.flags;
    this._fosid = config.fosid;
    this._ge = config.ge;
    this._id = config.id;
    this._le = config.le;
    this._prefix6 = config.prefix6;
    this._prefixList6 = config.prefixList6;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // flags - computed: false, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // ge - computed: false, optional: true, required: false
  private _ge?: number; 
  public get ge() {
    return this.getNumberAttribute('ge');
  }
  public set ge(value: number) {
    this._ge = value;
  }
  public resetGe() {
    this._ge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geInput() {
    return this._ge;
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

  // le - computed: false, optional: true, required: false
  private _le?: number; 
  public get le() {
    return this.getNumberAttribute('le');
  }
  public set le(value: number) {
    this._le = value;
  }
  public resetLe() {
    this._le = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leInput() {
    return this._le;
  }

  // prefix6 - computed: false, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }

  // prefix_list6 - computed: false, optional: false, required: true
  private _prefixList6?: string; 
  public get prefixList6() {
    return this.getStringAttribute('prefix_list6');
  }
  public set prefixList6(value: string) {
    this._prefixList6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixList6Input() {
    return this._prefixList6;
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
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      flags: cdktf.numberToTerraform(this._flags),
      fosid: cdktf.numberToTerraform(this._fosid),
      ge: cdktf.numberToTerraform(this._ge),
      id: cdktf.stringToTerraform(this._id),
      le: cdktf.numberToTerraform(this._le),
      prefix6: cdktf.stringToTerraform(this._prefix6),
      prefix_list6: cdktf.stringToTerraform(this._prefixList6),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flags: {
        value: cdktf.numberToHclTerraform(this._flags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ge: {
        value: cdktf.numberToHclTerraform(this._ge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      le: {
        value: cdktf.numberToHclTerraform(this._le),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix6: {
        value: cdktf.stringToHclTerraform(this._prefix6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list6: {
        value: cdktf.stringToHclTerraform(this._prefixList6),
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
