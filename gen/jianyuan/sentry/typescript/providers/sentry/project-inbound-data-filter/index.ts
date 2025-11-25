// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectInboundDataFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter#active ProjectInboundDataFilter#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The type of filter toggle to update. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter#filter_id ProjectInboundDataFilter#filter_id}
  */
  readonly filterId: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter#organization ProjectInboundDataFilter#organization}
  */
  readonly organization: string;
  /**
  * The project of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter#project ProjectInboundDataFilter#project}
  */
  readonly project: string;
  /**
  * Specifies which legacy browser filters should be active. Anything excluded from the list will be disabled. See the [Sentry documentation](https://docs.sentry.io/api/projects/update-an-inbound-data-filter/) for a list of available subfilters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter#subfilters ProjectInboundDataFilter#subfilters}
  */
  readonly subfilters?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter sentry_project_inbound_data_filter}
*/
export class ProjectInboundDataFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_project_inbound_data_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectInboundDataFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectInboundDataFilter to import
  * @param importFromId The id of the existing ProjectInboundDataFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectInboundDataFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_project_inbound_data_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_inbound_data_filter sentry_project_inbound_data_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectInboundDataFilterConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectInboundDataFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_project_inbound_data_filter',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._filterId = config.filterId;
    this._organization = config.organization;
    this._project = config.project;
    this._subfilters = config.subfilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // subfilters - computed: false, optional: true, required: false
  private _subfilters?: string[]; 
  public get subfilters() {
    return cdktf.Fn.tolist(this.getListAttribute('subfilters'));
  }
  public set subfilters(value: string[]) {
    this._subfilters = value;
  }
  public resetSubfilters() {
    this._subfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfiltersInput() {
    return this._subfilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      filter_id: cdktf.stringToTerraform(this._filterId),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
      subfilters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subfilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_id: {
        value: cdktf.stringToHclTerraform(this._filterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subfilters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subfilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
