// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/sudo_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaSudoRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/sudo_rule#name DataFreeipaSudoRule#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/sudo_rule freeipa_sudo_rule}
*/
export class DataFreeipaSudoRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaSudoRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaSudoRule to import
  * @param importFromId The id of the existing DataFreeipaSudoRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/sudo_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaSudoRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/sudo_rule freeipa_sudo_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaSudoRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaSudoRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_rule',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3'
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

  // commandcategory - computed: true, optional: false, required: false
  public get commandcategory() {
    return this.getStringAttribute('commandcategory');
  }

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

  // member_allow_sudo_cmd - computed: true, optional: false, required: false
  public get memberAllowSudoCmd() {
    return this.getListAttribute('member_allow_sudo_cmd');
  }

  // member_allow_sudo_cmdgroup - computed: true, optional: false, required: false
  public get memberAllowSudoCmdgroup() {
    return this.getListAttribute('member_allow_sudo_cmdgroup');
  }

  // member_deny_sudo_cmd - computed: true, optional: false, required: false
  public get memberDenySudoCmd() {
    return this.getListAttribute('member_deny_sudo_cmd');
  }

  // member_deny_sudo_cmdgroup - computed: true, optional: false, required: false
  public get memberDenySudoCmdgroup() {
    return this.getListAttribute('member_deny_sudo_cmdgroup');
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

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getListAttribute('option');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // runasgroup - computed: true, optional: false, required: false
  public get runasgroup() {
    return this.getListAttribute('runasgroup');
  }

  // runasgroupcategory - computed: true, optional: false, required: false
  public get runasgroupcategory() {
    return this.getStringAttribute('runasgroupcategory');
  }

  // runasuser - computed: true, optional: false, required: false
  public get runasuser() {
    return this.getListAttribute('runasuser');
  }

  // runasusercategory - computed: true, optional: false, required: false
  public get runasusercategory() {
    return this.getStringAttribute('runasusercategory');
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
