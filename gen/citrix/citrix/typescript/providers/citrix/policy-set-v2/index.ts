// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The IDs of the delivery groups for the policy set to apply on.
  * 
  * ~> **Please Note** If `delivery_groups` attribute is unset or configured as an empty set, the policy set will not be assigned to any delivery group. None of the policies in the policy set will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2#delivery_groups PolicySetV2#delivery_groups}
  */
  readonly deliveryGroups?: string[];
  /**
  * Description of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2#description PolicySetV2#description}
  */
  readonly description?: string;
  /**
  * Name of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2#name PolicySetV2#name}
  */
  readonly name: string;
  /**
  * The IDs of the scopes for the policy set to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2#scopes PolicySetV2#scopes}
  */
  readonly scopes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2 citrix_policy_set_v2}
*/
export class PolicySetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_policy_set_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySetV2 to import
  * @param importFromId The id of the existing PolicySetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_policy_set_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_set_v2 citrix_policy_set_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetV2Config
  */
  public constructor(scope: Construct, id: string, config: PolicySetV2Config) {
    super(scope, id, {
      terraformResourceType: 'citrix_policy_set_v2',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deliveryGroups = config.deliveryGroups;
    this._description = config.description;
    this._name = config.name;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned - computed: true, optional: false, required: false
  public get assigned() {
    return this.getBooleanAttribute('assigned');
  }

  // delivery_groups - computed: true, optional: true, required: false
  private _deliveryGroups?: string[]; 
  public get deliveryGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_groups'));
  }
  public set deliveryGroups(value: string[]) {
    this._deliveryGroups = value;
  }
  public resetDeliveryGroups() {
    this._deliveryGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupsInput() {
    return this._deliveryGroups;
  }

  // description - computed: true, optional: true, required: false
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

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deliveryGroups),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deliveryGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
