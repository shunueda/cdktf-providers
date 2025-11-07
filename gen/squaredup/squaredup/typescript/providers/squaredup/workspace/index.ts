// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow dashboards in this workspace to be shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#allow_dashboard_sharing Workspace#allow_dashboard_sharing}
  */
  readonly allowDashboardSharing?: boolean | cdktf.IResolvable;
  /**
  * IDs of Data Sources to link to this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#datasources_links Workspace#datasources_links}
  */
  readonly datasourcesLinks?: string[];
  /**
  * Description for the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#description Workspace#description}
  */
  readonly description?: string;
  /**
  * Display name for the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#display_name Workspace#display_name}
  */
  readonly displayName: string;
  /**
  * IDs of Workspaces linked to this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#read_workspaces_links Workspace#read_workspaces_links}
  */
  readonly readWorkspacesLinks?: string[];
  /**
  * Email domains that are authorized to access share dashboards in this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#sharing_authorized_email_domains Workspace#sharing_authorized_email_domains}
  */
  readonly sharingAuthorizedEmailDomains?: string[];
  /**
  * Tags for the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#tags Workspace#tags}
  */
  readonly tags?: string[];
  /**
  * Workspace type that can be one of: 'service', 'team', 'application', 'platform', 'product', 'business service', 'microservice', 'customer', 'website', 'component', 'resource', 'system', 'folder', 'other'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#type Workspace#type}
  */
  readonly type?: string;
  /**
  * IDs of Workspaces to link to this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#workspaces_links Workspace#workspaces_links}
  */
  readonly workspacesLinks?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace squaredup_workspace}
*/
export class Workspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workspace to import
  * @param importFromId The id of the existing Workspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace squaredup_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_workspace',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDashboardSharing = config.allowDashboardSharing;
    this._datasourcesLinks = config.datasourcesLinks;
    this._description = config.description;
    this._displayName = config.displayName;
    this._readWorkspacesLinks = config.readWorkspacesLinks;
    this._sharingAuthorizedEmailDomains = config.sharingAuthorizedEmailDomains;
    this._tags = config.tags;
    this._type = config.type;
    this._workspacesLinks = config.workspacesLinks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_dashboard_sharing - computed: true, optional: true, required: false
  private _allowDashboardSharing?: boolean | cdktf.IResolvable; 
  public get allowDashboardSharing() {
    return this.getBooleanAttribute('allow_dashboard_sharing');
  }
  public set allowDashboardSharing(value: boolean | cdktf.IResolvable) {
    this._allowDashboardSharing = value;
  }
  public resetAllowDashboardSharing() {
    this._allowDashboardSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDashboardSharingInput() {
    return this._allowDashboardSharing;
  }

  // datasources_links - computed: true, optional: true, required: false
  private _datasourcesLinks?: string[]; 
  public get datasourcesLinks() {
    return this.getListAttribute('datasources_links');
  }
  public set datasourcesLinks(value: string[]) {
    this._datasourcesLinks = value;
  }
  public resetDatasourcesLinks() {
    this._datasourcesLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourcesLinksInput() {
    return this._datasourcesLinks;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // read_workspaces_links - computed: true, optional: true, required: false
  private _readWorkspacesLinks?: string[]; 
  public get readWorkspacesLinks() {
    return this.getListAttribute('read_workspaces_links');
  }
  public set readWorkspacesLinks(value: string[]) {
    this._readWorkspacesLinks = value;
  }
  public resetReadWorkspacesLinks() {
    this._readWorkspacesLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWorkspacesLinksInput() {
    return this._readWorkspacesLinks;
  }

  // sharing_authorized_email_domains - computed: true, optional: true, required: false
  private _sharingAuthorizedEmailDomains?: string[]; 
  public get sharingAuthorizedEmailDomains() {
    return this.getListAttribute('sharing_authorized_email_domains');
  }
  public set sharingAuthorizedEmailDomains(value: string[]) {
    this._sharingAuthorizedEmailDomains = value;
  }
  public resetSharingAuthorizedEmailDomains() {
    this._sharingAuthorizedEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingAuthorizedEmailDomainsInput() {
    return this._sharingAuthorizedEmailDomains;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // workspaces_links - computed: true, optional: true, required: false
  private _workspacesLinks?: string[]; 
  public get workspacesLinks() {
    return this.getListAttribute('workspaces_links');
  }
  public set workspacesLinks(value: string[]) {
    this._workspacesLinks = value;
  }
  public resetWorkspacesLinks() {
    this._workspacesLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacesLinksInput() {
    return this._workspacesLinks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_dashboard_sharing: cdktf.booleanToTerraform(this._allowDashboardSharing),
      datasources_links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datasourcesLinks),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      read_workspaces_links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readWorkspacesLinks),
      sharing_authorized_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharingAuthorizedEmailDomains),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      workspaces_links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspacesLinks),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_dashboard_sharing: {
        value: cdktf.booleanToHclTerraform(this._allowDashboardSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datasources_links: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._datasourcesLinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_workspaces_links: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readWorkspacesLinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sharing_authorized_email_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharingAuthorizedEmailDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspaces_links: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspacesLinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
