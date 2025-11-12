// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExistingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Fortanix DSM group object quorum approval policy definition as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group#approval_policy ExistingGroup#approval_policy}
  */
  readonly approvalPolicy?: string;
  /**
  * The Fortanix DSM group object description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group#description ExistingGroup#description}
  */
  readonly description?: string;
  /**
  * The Fortanix DSM group object HMS/KMS definition as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group#hmg ExistingGroup#hmg}
  */
  readonly hmg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group#id ExistingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Fortanix DSM group object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group#name ExistingGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group dsm_existing_group}
*/
export class ExistingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_existing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExistingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExistingGroup to import
  * @param importFromId The id of the existing ExistingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExistingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_existing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/existing_group dsm_existing_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExistingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ExistingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_existing_group',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36',
        providerVersionConstraint: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalPolicy = config.approvalPolicy;
    this._description = config.description;
    this._hmg = config.hmg;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // approval_policy - computed: false, optional: true, required: false
  private _approvalPolicy?: string; 
  public get approvalPolicy() {
    return this.getStringAttribute('approval_policy');
  }
  public set approvalPolicy(value: string) {
    this._approvalPolicy = value;
  }
  public resetApprovalPolicy() {
    this._approvalPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalPolicyInput() {
    return this._approvalPolicy;
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new cdktf.StringMap(this, "creator");
  public get creator() {
    return this._creator;
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // hmg - computed: false, optional: true, required: false
  private _hmg?: string; 
  public get hmg() {
    return this.getStringAttribute('hmg');
  }
  public set hmg(value: string) {
    this._hmg = value;
  }
  public resetHmg() {
    this._hmg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmgInput() {
    return this._hmg;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_policy: cdktf.stringToTerraform(this._approvalPolicy),
      description: cdktf.stringToTerraform(this._description),
      hmg: cdktf.stringToTerraform(this._hmg),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_policy: {
        value: cdktf.stringToHclTerraform(this._approvalPolicy),
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
      hmg: {
        value: cdktf.stringToHclTerraform(this._hmg),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
