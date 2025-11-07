// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/it_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSite24X7ItAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/it_automation#id DataSite24X7ItAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Regular expression denoting the name of the IT action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/it_automation#name_regex DataSite24X7ItAutomation#name_regex}
  */
  readonly nameRegex: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/it_automation site24x7_it_automation}
*/
export class DataSite24X7ItAutomation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_it_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSite24X7ItAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSite24X7ItAutomation to import
  * @param importFromId The id of the existing DataSite24X7ItAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/it_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSite24X7ItAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_it_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/it_automation site24x7_it_automation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSite24X7ItAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: DataSite24X7ItAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_it_automation',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getNumberAttribute('action_type');
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // custom_parameters - computed: true, optional: false, required: false
  public get customParameters() {
    return this.getStringAttribute('custom_parameters');
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

  // matching_ids - computed: true, optional: false, required: false
  public get matchingIds() {
    return this.getListAttribute('matching_ids');
  }

  // matching_ids_and_names - computed: true, optional: false, required: false
  public get matchingIdsAndNames() {
    return this.getListAttribute('matching_ids_and_names');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // name_regex - computed: false, optional: false, required: true
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // send_custom_parameters - computed: true, optional: false, required: false
  public get sendCustomParameters() {
    return this.getBooleanAttribute('send_custom_parameters');
  }

  // send_email - computed: true, optional: false, required: false
  public get sendEmail() {
    return this.getBooleanAttribute('send_email');
  }

  // send_in_json_format - computed: true, optional: false, required: false
  public get sendInJsonFormat() {
    return this.getBooleanAttribute('send_in_json_format');
  }

  // send_incident_parameters - computed: true, optional: false, required: false
  public get sendIncidentParameters() {
    return this.getBooleanAttribute('send_incident_parameters');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
