// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSignonPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, the default rule of the policy is set access to `DENY`. Otherwise default behavior of the default rule is to leave access at `ALLOW`.  **WARNING** setting this attribute to false changes policy rule's default behavior. Use at your own risk. This is only applied during creation and does not affect import or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy#catch_all AppSignonPolicy#catch_all}
  */
  readonly catchAll?: boolean | cdktf.IResolvable;
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy#description AppSignonPolicy#description}
  */
  readonly description: string;
  /**
  * Name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy#name AppSignonPolicy#name}
  */
  readonly name: string;
  /**
  * Priority of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy#priority AppSignonPolicy#priority}
  */
  readonly priority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy okta_app_signon_policy}
*/
export class AppSignonPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_signon_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppSignonPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppSignonPolicy to import
  * @param importFromId The id of the existing AppSignonPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppSignonPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_signon_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/app_signon_policy okta_app_signon_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSignonPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AppSignonPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_signon_policy',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catchAll = config.catchAll;
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catch_all - computed: true, optional: true, required: false
  private _catchAll?: boolean | cdktf.IResolvable; 
  public get catchAll() {
    return this.getBooleanAttribute('catch_all');
  }
  public set catchAll(value: boolean | cdktf.IResolvable) {
    this._catchAll = value;
  }
  public resetCatchAll() {
    this._catchAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchAllInput() {
    return this._catchAll;
  }

  // default_rule_id - computed: true, optional: false, required: false
  public get defaultRuleId() {
    return this.getStringAttribute('default_rule_id');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catch_all: cdktf.booleanToTerraform(this._catchAll),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catch_all: {
        value: cdktf.booleanToHclTerraform(this._catchAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
