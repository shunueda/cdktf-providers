// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TriggerDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of users that should be able to use the Trigger Definition. One of `admins`, `everyone`, `service_owners`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#access_control TriggerDefinition#access_control}
  */
  readonly accessControl: string;
  /**
  * The action that will be triggered by the Trigger Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#action TriggerDefinition#action}
  */
  readonly action: string;
  /**
  * Flag indicating approval is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#approval_required TriggerDefinition#approval_required}
  */
  readonly approvalRequired?: boolean | cdktf.IResolvable;
  /**
  * Teams that can approve this Trigger Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#approval_teams TriggerDefinition#approval_teams}
  */
  readonly approvalTeams?: string[];
  /**
  * Users that can approve this Trigger Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#approval_users TriggerDefinition#approval_users}
  */
  readonly approvalUsers?: string[];
  /**
  * The description of what the Trigger Definition will do.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#description TriggerDefinition#description}
  */
  readonly description?: string;
  /**
  * The entity type to associate with the Trigger Definition. One of `GLOBAL`, `SERVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#entity_type TriggerDefinition#entity_type}
  */
  readonly entityType?: string;
  /**
  * The set of additional teams who can invoke this Trigger Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#extended_team_access TriggerDefinition#extended_team_access}
  */
  readonly extendedTeamAccess?: string[];
  /**
  * A filter defining which services this Trigger Definition applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#filter TriggerDefinition#filter}
  */
  readonly filter?: string;
  /**
  * The YAML definition of any custom inputs for this Trigger Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#manual_inputs_definition TriggerDefinition#manual_inputs_definition}
  */
  readonly manualInputsDefinition?: string;
  /**
  * The name of the Trigger Definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#name TriggerDefinition#name}
  */
  readonly name: string;
  /**
  * The owner of the Trigger Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#owner TriggerDefinition#owner}
  */
  readonly owner: string;
  /**
  * The published state of the Custom Action; true if the Trigger Definition is ready for use; false if it is a draft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#published TriggerDefinition#published}
  */
  readonly published: boolean | cdktf.IResolvable;
  /**
  * The liquid template used to parse the response from the Webhook Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#response_template TriggerDefinition#response_template}
  */
  readonly responseTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition opslevel_trigger_definition}
*/
export class TriggerDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_trigger_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TriggerDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TriggerDefinition to import
  * @param importFromId The id of the existing TriggerDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TriggerDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_trigger_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/trigger_definition opslevel_trigger_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TriggerDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: TriggerDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_trigger_definition',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3',
        providerVersionConstraint: '1.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControl = config.accessControl;
    this._action = config.action;
    this._approvalRequired = config.approvalRequired;
    this._approvalTeams = config.approvalTeams;
    this._approvalUsers = config.approvalUsers;
    this._description = config.description;
    this._entityType = config.entityType;
    this._extendedTeamAccess = config.extendedTeamAccess;
    this._filter = config.filter;
    this._manualInputsDefinition = config.manualInputsDefinition;
    this._name = config.name;
    this._owner = config.owner;
    this._published = config.published;
    this._responseTemplate = config.responseTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control - computed: false, optional: false, required: true
  private _accessControl?: string; 
  public get accessControl() {
    return this.getStringAttribute('access_control');
  }
  public set accessControl(value: string) {
    this._accessControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl;
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // approval_required - computed: true, optional: true, required: false
  private _approvalRequired?: boolean | cdktf.IResolvable; 
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }
  public set approvalRequired(value: boolean | cdktf.IResolvable) {
    this._approvalRequired = value;
  }
  public resetApprovalRequired() {
    this._approvalRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRequiredInput() {
    return this._approvalRequired;
  }

  // approval_teams - computed: true, optional: true, required: false
  private _approvalTeams?: string[]; 
  public get approvalTeams() {
    return this.getListAttribute('approval_teams');
  }
  public set approvalTeams(value: string[]) {
    this._approvalTeams = value;
  }
  public resetApprovalTeams() {
    this._approvalTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalTeamsInput() {
    return this._approvalTeams;
  }

  // approval_users - computed: true, optional: true, required: false
  private _approvalUsers?: string[]; 
  public get approvalUsers() {
    return this.getListAttribute('approval_users');
  }
  public set approvalUsers(value: string[]) {
    this._approvalUsers = value;
  }
  public resetApprovalUsers() {
    this._approvalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalUsersInput() {
    return this._approvalUsers;
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

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // extended_team_access - computed: false, optional: true, required: false
  private _extendedTeamAccess?: string[]; 
  public get extendedTeamAccess() {
    return this.getListAttribute('extended_team_access');
  }
  public set extendedTeamAccess(value: string[]) {
    this._extendedTeamAccess = value;
  }
  public resetExtendedTeamAccess() {
    this._extendedTeamAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedTeamAccessInput() {
    return this._extendedTeamAccess;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manual_inputs_definition - computed: false, optional: true, required: false
  private _manualInputsDefinition?: string; 
  public get manualInputsDefinition() {
    return this.getStringAttribute('manual_inputs_definition');
  }
  public set manualInputsDefinition(value: string) {
    this._manualInputsDefinition = value;
  }
  public resetManualInputsDefinition() {
    this._manualInputsDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInputsDefinitionInput() {
    return this._manualInputsDefinition;
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // published - computed: false, optional: false, required: true
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // response_template - computed: false, optional: true, required: false
  private _responseTemplate?: string; 
  public get responseTemplate() {
    return this.getStringAttribute('response_template');
  }
  public set responseTemplate(value: string) {
    this._responseTemplate = value;
  }
  public resetResponseTemplate() {
    this._responseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplateInput() {
    return this._responseTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control: cdktf.stringToTerraform(this._accessControl),
      action: cdktf.stringToTerraform(this._action),
      approval_required: cdktf.booleanToTerraform(this._approvalRequired),
      approval_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvalTeams),
      approval_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvalUsers),
      description: cdktf.stringToTerraform(this._description),
      entity_type: cdktf.stringToTerraform(this._entityType),
      extended_team_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extendedTeamAccess),
      filter: cdktf.stringToTerraform(this._filter),
      manual_inputs_definition: cdktf.stringToTerraform(this._manualInputsDefinition),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      published: cdktf.booleanToTerraform(this._published),
      response_template: cdktf.stringToTerraform(this._responseTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control: {
        value: cdktf.stringToHclTerraform(this._accessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_required: {
        value: cdktf.booleanToHclTerraform(this._approvalRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approval_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvalTeams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approval_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvalUsers),
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
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_team_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extendedTeamAccess),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manual_inputs_definition: {
        value: cdktf.stringToHclTerraform(this._manualInputsDefinition),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published: {
        value: cdktf.booleanToHclTerraform(this._published),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_template: {
        value: cdktf.stringToHclTerraform(this._responseTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
