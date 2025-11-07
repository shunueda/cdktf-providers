// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the type of the dashboard configuration. Currently, only 'TAGS_SEQUENCE' is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#dashboard_type Dashboard#dashboard_type}
  */
  readonly dashboardType: string;
  /**
  * A JSON-encoded list of groups in the dashboard configuration. Each group is an object with 'name' (the group's name) and 'tags' (a list of tag names belonging to the group). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#groups Dashboard#groups}
  */
  readonly groups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of additional tags that will be used to identify certain resources. They will be displayed before the tags_sequence column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#identifiers Dashboard#identifiers}
  */
  readonly identifiers?: string[];
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * A list of additional tags that will be displayed for the resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#other_tags Dashboard#other_tags}
  */
  readonly otherTags?: string[];
  /**
  * A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#resource_query Dashboard#resource_query}
  */
  readonly resourceQuery?: string;
  /**
  * A JSON-encoded list of objects defining the values and their associated colors in the dashboard configuration. Each object contains: 'color' (the color associated with the values) and 'values' (a list of values corresponding to specific tags). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard shoreline_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/dashboard shoreline_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardType = config.dashboardType;
    this._groups = config.groups;
    this._id = config.id;
    this._identifiers = config.identifiers;
    this._name = config.name;
    this._otherTags = config.otherTags;
    this._resourceQuery = config.resourceQuery;
    this._values = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_type - computed: false, optional: false, required: true
  private _dashboardType?: string; 
  public get dashboardType() {
    return this.getStringAttribute('dashboard_type');
  }
  public set dashboardType(value: string) {
    this._dashboardType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTypeInput() {
    return this._dashboardType;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // identifiers - computed: false, optional: true, required: false
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  public resetIdentifiers() {
    this._identifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
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

  // other_tags - computed: false, optional: true, required: false
  private _otherTags?: string[]; 
  public get otherTags() {
    return this.getListAttribute('other_tags');
  }
  public set otherTags(value: string[]) {
    this._otherTags = value;
  }
  public resetOtherTags() {
    this._otherTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTagsInput() {
    return this._otherTags;
  }

  // resource_query - computed: false, optional: true, required: false
  private _resourceQuery?: string; 
  public get resourceQuery() {
    return this.getStringAttribute('resource_query');
  }
  public set resourceQuery(value: string) {
    this._resourceQuery = value;
  }
  public resetResourceQuery() {
    this._resourceQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQueryInput() {
    return this._resourceQuery;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_type: cdktf.stringToTerraform(this._dashboardType),
      groups: cdktf.stringToTerraform(this._groups),
      id: cdktf.stringToTerraform(this._id),
      identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identifiers),
      name: cdktf.stringToTerraform(this._name),
      other_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherTags),
      resource_query: cdktf.stringToTerraform(this._resourceQuery),
      values: cdktf.stringToTerraform(this._values),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_type: {
        value: cdktf.stringToHclTerraform(this._dashboardType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.stringToHclTerraform(this._groups),
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
      identifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._otherTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_query: {
        value: cdktf.stringToHclTerraform(this._resourceQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values: {
        value: cdktf.stringToHclTerraform(this._values),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
