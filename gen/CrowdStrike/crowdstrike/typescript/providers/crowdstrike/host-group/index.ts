// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The assignment rule used for dynamic host groups. Required if `type` is `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group#assignment_rule HostGroup#assignment_rule}
  */
  readonly assignmentRule?: string;
  /**
  * A description for the host group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group#description HostGroup#description}
  */
  readonly description: string;
  /**
  * A set of host IDs to include in a staticByID host group. Required if `type` is `staticByID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group#host_ids HostGroup#host_ids}
  */
  readonly hostIds?: string[];
  /**
  * A set of hostnames to include in a static host group. Required if `type` is `static`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group#hostnames HostGroup#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * The display name for the host group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group#name HostGroup#name}
  */
  readonly name: string;
  /**
  * The type of host group. Valid values: `dynamic`, `static`, `staticByID`. This value is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group#type HostGroup#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group crowdstrike_host_group}
*/
export class HostGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_host_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostGroup to import
  * @param importFromId The id of the existing HostGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_host_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/host_group crowdstrike_host_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostGroupConfig
  */
  public constructor(scope: Construct, id: string, config: HostGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_host_group',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.48',
        providerVersionConstraint: '0.0.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignmentRule = config.assignmentRule;
    this._description = config.description;
    this._hostIds = config.hostIds;
    this._hostnames = config.hostnames;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_rule - computed: false, optional: true, required: false
  private _assignmentRule?: string; 
  public get assignmentRule() {
    return this.getStringAttribute('assignment_rule');
  }
  public set assignmentRule(value: string) {
    this._assignmentRule = value;
  }
  public resetAssignmentRule() {
    this._assignmentRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentRuleInput() {
    return this._assignmentRule;
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

  // host_ids - computed: false, optional: true, required: false
  private _hostIds?: string[]; 
  public get hostIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_ids'));
  }
  public set hostIds(value: string[]) {
    this._hostIds = value;
  }
  public resetHostIds() {
    this._hostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignment_rule: cdktf.stringToTerraform(this._assignmentRule),
      description: cdktf.stringToTerraform(this._description),
      host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostIds),
      hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_rule: {
        value: cdktf.stringToHclTerraform(this._assignmentRule),
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
      host_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
