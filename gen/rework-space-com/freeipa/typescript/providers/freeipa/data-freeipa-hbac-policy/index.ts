// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hbac_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaHbacPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the hbac policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hbac_policy#name DataFreeipaHbacPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hbac_policy freeipa_hbac_policy}
*/
export class DataFreeipaHbacPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_hbac_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaHbacPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaHbacPolicy to import
  * @param importFromId The id of the existing DataFreeipaHbacPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hbac_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaHbacPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_hbac_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hbac_policy freeipa_hbac_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaHbacPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaHbacPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_hbac_policy',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3',
        providerVersionConstraint: '5.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // hostcategory - computed: true, optional: false, required: false
  public get hostcategory() {
    return this.getStringAttribute('hostcategory');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_group - computed: true, optional: false, required: false
  public get memberGroup() {
    return this.getListAttribute('member_group');
  }

  // member_host - computed: true, optional: false, required: false
  public get memberHost() {
    return this.getListAttribute('member_host');
  }

  // member_hostgroup - computed: true, optional: false, required: false
  public get memberHostgroup() {
    return this.getListAttribute('member_hostgroup');
  }

  // member_service - computed: true, optional: false, required: false
  public get memberService() {
    return this.getListAttribute('member_service');
  }

  // member_servicegroup - computed: true, optional: false, required: false
  public get memberServicegroup() {
    return this.getListAttribute('member_servicegroup');
  }

  // member_user - computed: true, optional: false, required: false
  public get memberUser() {
    return this.getListAttribute('member_user');
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

  // servicecategory - computed: true, optional: false, required: false
  public get servicecategory() {
    return this.getStringAttribute('servicecategory');
  }

  // usercategory - computed: true, optional: false, required: false
  public get usercategory() {
    return this.getStringAttribute('usercategory');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
