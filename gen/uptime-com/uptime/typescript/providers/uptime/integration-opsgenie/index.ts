// https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationOpsgenieConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#api_endpoint IntegrationOpsgenie#api_endpoint}
  */
  readonly apiEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#api_key IntegrationOpsgenie#api_key}
  */
  readonly apiKey: string;
  /**
  * Automatically resolve incident once the check is back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#auto_resolve IntegrationOpsgenie#auto_resolve}
  */
  readonly autoResolve?: boolean | cdktf.IResolvable;
  /**
  * List of contact group names to receive notifications.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations)
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  * Set to an empty list to disable notifications at this level and rely on parent check group notifications instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#contact_groups IntegrationOpsgenie#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#name IntegrationOpsgenie#name}
  */
  readonly name: string;
  /**
  * A comma separated list of labels attached to the alert. You may overwrite the quiet hours setting for urgent alerts by adding the OverwriteQuietHours tag. Leave blank to automatically pull the tags from the check instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#tags IntegrationOpsgenie#tags}
  */
  readonly tags?: string;
  /**
  * A comma separated list of team names which will be responsible for the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#teams IntegrationOpsgenie#teams}
  */
  readonly teams?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie uptime_integration_opsgenie}
*/
export class IntegrationOpsgenie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_opsgenie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationOpsgenie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationOpsgenie to import
  * @param importFromId The id of the existing IntegrationOpsgenie that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationOpsgenie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_opsgenie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/integration_opsgenie uptime_integration_opsgenie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationOpsgenieConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationOpsgenieConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_opsgenie',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.22.0',
        providerVersionConstraint: '2.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiEndpoint = config.apiEndpoint;
    this._apiKey = config.apiKey;
    this._autoResolve = config.autoResolve;
    this._contactGroups = config.contactGroups;
    this._name = config.name;
    this._tags = config.tags;
    this._teams = config.teams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // auto_resolve - computed: true, optional: true, required: false
  private _autoResolve?: boolean | cdktf.IResolvable; 
  public get autoResolve() {
    return this.getBooleanAttribute('auto_resolve');
  }
  public set autoResolve(value: boolean | cdktf.IResolvable) {
    this._autoResolve = value;
  }
  public resetAutoResolve() {
    this._autoResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolveInput() {
    return this._autoResolve;
  }

  // contact_groups - computed: true, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // teams - computed: true, optional: true, required: false
  private _teams?: string; 
  public get teams() {
    return this.getStringAttribute('teams');
  }
  public set teams(value: string) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_endpoint: cdktf.stringToTerraform(this._apiEndpoint),
      api_key: cdktf.stringToTerraform(this._apiKey),
      auto_resolve: cdktf.booleanToTerraform(this._autoResolve),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.stringToTerraform(this._tags),
      teams: cdktf.stringToTerraform(this._teams),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_endpoint: {
        value: cdktf.stringToHclTerraform(this._apiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_resolve: {
        value: cdktf.booleanToHclTerraform(this._autoResolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
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
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teams: {
        value: cdktf.stringToHclTerraform(this._teams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
