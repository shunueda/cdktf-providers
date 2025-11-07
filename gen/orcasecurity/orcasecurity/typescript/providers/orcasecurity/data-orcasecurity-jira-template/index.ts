// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/data-sources/jira_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOrcasecurityJiraTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template name at Orca
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/data-sources/jira_template#name DataOrcasecurityJiraTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/data-sources/jira_template orcasecurity_jira_template}
*/
export class DataOrcasecurityJiraTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_jira_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOrcasecurityJiraTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOrcasecurityJiraTemplate to import
  * @param importFromId The id of the existing DataOrcasecurityJiraTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/data-sources/jira_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOrcasecurityJiraTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_jira_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/data-sources/jira_template orcasecurity_jira_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOrcasecurityJiraTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOrcasecurityJiraTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_jira_template',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.23'
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
