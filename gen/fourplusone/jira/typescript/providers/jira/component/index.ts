// https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default assignee type. Can be one of project_default, component_lead, project_lead or unassigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component#assignee_type Component#assignee_type}
  */
  readonly assigneeType?: string;
  /**
  * Description of the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component#description Component#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component#id Component#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Component lead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component#lead Component#lead}
  */
  readonly lead?: string;
  /**
  * Name of the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component#name Component#name}
  */
  readonly name: string;
  /**
  * Project Key (for example PRJ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component#project_key Component#project_key}
  */
  readonly projectKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component jira_component}
*/
export class Component extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jira_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Component resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Component to import
  * @param importFromId The id of the existing Component that should be imported. Refer to the {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Component to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jira_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/component jira_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComponentConfig
  */
  public constructor(scope: Construct, id: string, config: ComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'jira_component',
      terraformGeneratorMetadata: {
        providerName: 'jira',
        providerVersion: '0.1.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assigneeType = config.assigneeType;
    this._description = config.description;
    this._id = config.id;
    this._lead = config.lead;
    this._name = config.name;
    this._projectKey = config.projectKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignee_type - computed: false, optional: true, required: false
  private _assigneeType?: string; 
  public get assigneeType() {
    return this.getStringAttribute('assignee_type');
  }
  public set assigneeType(value: string) {
    this._assigneeType = value;
  }
  public resetAssigneeType() {
    this._assigneeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeTypeInput() {
    return this._assigneeType;
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

  // lead - computed: false, optional: true, required: false
  private _lead?: string; 
  public get lead() {
    return this.getStringAttribute('lead');
  }
  public set lead(value: string) {
    this._lead = value;
  }
  public resetLead() {
    this._lead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadInput() {
    return this._lead;
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

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee_type: cdktf.stringToTerraform(this._assigneeType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lead: cdktf.stringToTerraform(this._lead),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignee_type: {
        value: cdktf.stringToHclTerraform(this._assigneeType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lead: {
        value: cdktf.stringToHclTerraform(this._lead),
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
