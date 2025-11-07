// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Project ID assignments, optional with THIRD_PARTY (GraphQL API type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account#assigned_projects ServiceAccount#assigned_projects}
  */
  readonly assignedProjects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account#name ServiceAccount#name}
  */
  readonly name: string;
  /**
  * Recreate the resource if rotated outside Terraform? This can be used to ensure the state contains valid authentication information. This option should be disabled if external tools are used to manage the credentials for this service account.
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account#recreate_if_rotated ServiceAccount#recreate_if_rotated}
  */
  readonly recreateIfRotated?: boolean | cdktf.IResolvable;
  /**
  * Scopes, required with THIRD_PARTY (GraphQL API type).
  *     - Allowed values: 
  *         - admin:all
  *         - admin:audit
  *         - admin:digital_trust_settings
  *         - admin:identity_providers
  *         - admin:projects
  *         - admin:reports
  *         - admin:security_settings
  *         - admin:users
  *         - create:action_templates
  *         - create:admission_controllers
  *         - create:all
  *         - create:automation_actions
  *         - create:automation_rules
  *         - create:cloud_configuration
  *         - create:cloud_event_rules
  *         - create:connectors
  *         - create:controls
  *         - create:host_configuration
  *         - create:integrations
  *         - create:outposts
  *         - create:reports
  *         - create:run_action
  *         - create:run_control
  *         - create:saved_cloud_event_filters
  *         - create:saved_graph_queries
  *         - create:scan_policies
  *         - create:security_frameworks
  *         - create:security_scans
  *         - create:service_accounts
  *         - create:service_tickets
  *         - delete:action_templates
  *         - delete:all
  *         - delete:automation_actions
  *         - delete:automation_rules
  *         - delete:cloud_configuration
  *         - delete:cloud_event_rules
  *         - delete:connectors
  *         - delete:controls
  *         - delete:host_configuration
  *         - delete:integrations
  *         - delete:outposts
  *         - delete:reports
  *         - delete:saved_cloud_event_filters
  *         - delete:saved_graph_queries
  *         - delete:scan_policies
  *         - delete:security_frameworks
  *         - delete:security_scans
  *         - delete:service_accounts
  *         - read:action_templates
  *         - read:admission_controllers
  *         - read:all
  *         - read:automation_actions
  *         - read:automation_rules
  *         - read:benchmarks
  *         - read:cloud_accounts
  *         - read:cloud_configuration
  *         - read:cloud_event_rules
  *         - read:cloud_events
  *         - read:connectors
  *         - read:controls
  *         - read:digital_trust_settings
  *         - read:host_configuration
  *         - read:integrations
  *         - read:inventory
  *         - read:issue_settings
  *         - read:issues
  *         - read:kubernetes_clusters
  *         - read:licenses
  *         - read:outposts
  *         - read:projects
  *         - read:reports
  *         - read:resources
  *         - read:saved_cloud_event_filters
  *         - read:saved_graph_queries
  *         - read:scan_policies
  *         - read:scanner_settings
  *         - read:security_frameworks
  *         - read:security_scans
  *         - read:security_settings
  *         - read:service_accounts
  *         - read:system_activities
  *         - read:users
  *         - read:vulnerabilities
  *         - update:admission_controllers
  *         - update:all
  *         - update:automation_actions
  *         - update:automation_rules
  *         - update:cloud_configuration
  *         - update:cloud_event_rules
  *         - update:connectors
  *         - update:controls
  *         - update:host_configuration
  *         - update:integrations
  *         - update:inventory
  *         - update:issue_settings
  *         - update:issues
  *         - update:outposts
  *         - update:reports
  *         - update:resources
  *         - update:saved_cloud_event_filters
  *         - update:saved_graph_queries
  *         - update:scan_policies
  *         - update:scanner_settings
  *         - update:security_frameworks
  *         - update:security_scans
  *         - update:service_accounts
  *         - update:vulnerabilities
  *         - write:all
  *         - write:automation_actions
  *         - write:automation_rules
  *         - write:cloud_configuration
  *         - write:cloud_event_rules
  *         - write:connectors
  *         - write:controls
  *         - write:host_configuration
  *         - write:issue_settings
  *         - write:issues
  *         - write:outposts
  *         - write:reports
  *         - write:saved_cloud_event_filters
  *         - write:saved_graph_queries
  *         - write:scan_policies
  *         - write:scanner_settings
  *         - write:security_frameworks
  *         - write:security_scans
  *         - write:service_accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account#scopes ServiceAccount#scopes}
  */
  readonly scopes?: string[];
  /**
  * Service account type, for Helm use `BROKER` type.`
  *     - Allowed values: 
  *         - THIRD_PARTY
  *         - SENSOR
  *         - KUBERNETES_ADMISSION_CONTROLLER
  *         - BROKER
  *         - KUBERNETES_CONNECTOR
  *         - FIRST_PARTY
  * 
  *     - Defaults to `THIRD_PARTY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account#type ServiceAccount#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account wiz_service_account}
*/
export class ServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccount to import
  * @param importFromId The id of the existing ServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/service_account wiz_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_service_account',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedProjects = config.assignedProjects;
    this._name = config.name;
    this._recreateIfRotated = config.recreateIfRotated;
    this._scopes = config.scopes;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_projects - computed: false, optional: true, required: false
  private _assignedProjects?: string[]; 
  public get assignedProjects() {
    return this.getListAttribute('assigned_projects');
  }
  public set assignedProjects(value: string[]) {
    this._assignedProjects = value;
  }
  public resetAssignedProjects() {
    this._assignedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedProjectsInput() {
    return this._assignedProjects;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_rotated_at - computed: true, optional: false, required: false
  public get lastRotatedAt() {
    return this.getStringAttribute('last_rotated_at');
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

  // recreate_if_rotated - computed: false, optional: true, required: false
  private _recreateIfRotated?: boolean | cdktf.IResolvable; 
  public get recreateIfRotated() {
    return this.getBooleanAttribute('recreate_if_rotated');
  }
  public set recreateIfRotated(value: boolean | cdktf.IResolvable) {
    this._recreateIfRotated = value;
  }
  public resetRecreateIfRotated() {
    this._recreateIfRotated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreateIfRotatedInput() {
    return this._recreateIfRotated;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // type - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedProjects),
      name: cdktf.stringToTerraform(this._name),
      recreate_if_rotated: cdktf.booleanToTerraform(this._recreateIfRotated),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedProjects),
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
      recreate_if_rotated: {
        value: cdktf.booleanToHclTerraform(this._recreateIfRotated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
