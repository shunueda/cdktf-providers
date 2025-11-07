// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoUserProvisioningRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The condition of the auto user provisioning rule. Possible conditions include:
  * 	1) `This group` - User must belong to the specified group
  * 	2) `ANY of these groups` - User must belong to at least one of the specified groups
  * 	3) `ALL of these groups` - User must belong to all the specified groups
  * 	4) `Group CONTAINS this keyword` - User's group must contain the specified keyword
  * 	5) `Group CONTAINS ANY of these keywords` - User's group must contain at least one of the specified keywords
  * 	6) `Group CONTAINS ALL of these keywords` - User's group must contain all the specified keywords
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule#condition AutoUserProvisioningRule#condition}
  */
  readonly condition: string;
  /**
  * The name of the auto user provisioning rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule#name AutoUserProvisioningRule#name}
  */
  readonly name: string;
  /**
  * List of Clumio organizational unit identifiers to be assigned to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule#organizational_unit_ids AutoUserProvisioningRule#organizational_unit_ids}
  */
  readonly organizationalUnitIds: string[];
  /**
  * Identifier of the Clumio role to be assigned to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule#role_id AutoUserProvisioningRule#role_id}
  */
  readonly roleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule clumio_auto_user_provisioning_rule}
*/
export class AutoUserProvisioningRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_auto_user_provisioning_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoUserProvisioningRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoUserProvisioningRule to import
  * @param importFromId The id of the existing AutoUserProvisioningRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoUserProvisioningRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_auto_user_provisioning_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/auto_user_provisioning_rule clumio_auto_user_provisioning_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoUserProvisioningRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AutoUserProvisioningRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_auto_user_provisioning_rule',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._condition = config.condition;
    this._name = config.name;
    this._organizationalUnitIds = config.organizationalUnitIds;
    this._roleId = config.roleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // organizational_unit_ids - computed: false, optional: false, required: true
  private _organizationalUnitIds?: string[]; 
  public get organizationalUnitIds() {
    return cdktf.Fn.tolist(this.getListAttribute('organizational_unit_ids'));
  }
  public set organizationalUnitIds(value: string[]) {
    this._organizationalUnitIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdsInput() {
    return this._organizationalUnitIds;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition: cdktf.stringToTerraform(this._condition),
      name: cdktf.stringToTerraform(this._name),
      organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationalUnitIds),
      role_id: cdktf.stringToTerraform(this._roleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      organizational_unit_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizationalUnitIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
