// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskManagementWorktypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to true, Workitems will be sent to the queue of the Worktype as they are created. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#assignment_enabled TaskManagementWorktype#assignment_enabled}
  */
  readonly assignmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * The default due duration in seconds for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_due_duration_seconds TaskManagementWorktype#default_due_duration_seconds}
  */
  readonly defaultDueDurationSeconds?: number;
  /**
  * The default duration in seconds for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_duration_seconds TaskManagementWorktype#default_duration_seconds}
  */
  readonly defaultDurationSeconds?: number;
  /**
  * The default expiration time in seconds for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_expiration_seconds TaskManagementWorktype#default_expiration_seconds}
  */
  readonly defaultExpirationSeconds?: number;
  /**
  * The default routing language for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_language_id TaskManagementWorktype#default_language_id}
  */
  readonly defaultLanguageId?: string;
  /**
  * The default priority for Workitems created from the Worktype. The valid range is between -25,000,000 and 25,000,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_priority TaskManagementWorktype#default_priority}
  */
  readonly defaultPriority?: number;
  /**
  * The default queue for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_queue_id TaskManagementWorktype#default_queue_id}
  */
  readonly defaultQueueId?: string;
  /**
  * The default script for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_script_id TaskManagementWorktype#default_script_id}
  */
  readonly defaultScriptId?: string;
  /**
  * The default skills for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_skills_ids TaskManagementWorktype#default_skills_ids}
  */
  readonly defaultSkillsIds?: string[];
  /**
  * The default time to time to live in seconds for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_ttl_seconds TaskManagementWorktype#default_ttl_seconds}
  */
  readonly defaultTtlSeconds?: number;
  /**
  * The default Workbin for Workitems created from the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#default_workbin_id TaskManagementWorktype#default_workbin_id}
  */
  readonly defaultWorkbinId: string;
  /**
  * The description of the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#description TaskManagementWorktype#description}
  */
  readonly description?: string;
  /**
  * Optionally set this flag to disable Default Status creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#disable_default_status_creation TaskManagementWorktype#disable_default_status_creation}
  */
  readonly disableDefaultStatusCreation?: boolean | cdktf.IResolvable;
  /**
  * The division to which this entity belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#division_id TaskManagementWorktype#division_id}
  */
  readonly divisionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#id TaskManagementWorktype#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Worktype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#name TaskManagementWorktype#name}
  */
  readonly name: string;
  /**
  * Id of the workitem schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#schema_id TaskManagementWorktype#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Version of the workitem schema to use. If not provided, the worktype will use the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#schema_version TaskManagementWorktype#schema_version}
  */
  readonly schemaVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype genesyscloud_task_management_worktype}
*/
export class TaskManagementWorktype extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_task_management_worktype";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskManagementWorktype resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskManagementWorktype to import
  * @param importFromId The id of the existing TaskManagementWorktype that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskManagementWorktype to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_task_management_worktype", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype genesyscloud_task_management_worktype} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskManagementWorktypeConfig
  */
  public constructor(scope: Construct, id: string, config: TaskManagementWorktypeConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_task_management_worktype',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignmentEnabled = config.assignmentEnabled;
    this._defaultDueDurationSeconds = config.defaultDueDurationSeconds;
    this._defaultDurationSeconds = config.defaultDurationSeconds;
    this._defaultExpirationSeconds = config.defaultExpirationSeconds;
    this._defaultLanguageId = config.defaultLanguageId;
    this._defaultPriority = config.defaultPriority;
    this._defaultQueueId = config.defaultQueueId;
    this._defaultScriptId = config.defaultScriptId;
    this._defaultSkillsIds = config.defaultSkillsIds;
    this._defaultTtlSeconds = config.defaultTtlSeconds;
    this._defaultWorkbinId = config.defaultWorkbinId;
    this._description = config.description;
    this._disableDefaultStatusCreation = config.disableDefaultStatusCreation;
    this._divisionId = config.divisionId;
    this._id = config.id;
    this._name = config.name;
    this._schemaId = config.schemaId;
    this._schemaVersion = config.schemaVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_enabled - computed: false, optional: true, required: false
  private _assignmentEnabled?: boolean | cdktf.IResolvable; 
  public get assignmentEnabled() {
    return this.getBooleanAttribute('assignment_enabled');
  }
  public set assignmentEnabled(value: boolean | cdktf.IResolvable) {
    this._assignmentEnabled = value;
  }
  public resetAssignmentEnabled() {
    this._assignmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentEnabledInput() {
    return this._assignmentEnabled;
  }

  // default_due_duration_seconds - computed: true, optional: true, required: false
  private _defaultDueDurationSeconds?: number; 
  public get defaultDueDurationSeconds() {
    return this.getNumberAttribute('default_due_duration_seconds');
  }
  public set defaultDueDurationSeconds(value: number) {
    this._defaultDueDurationSeconds = value;
  }
  public resetDefaultDueDurationSeconds() {
    this._defaultDueDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDueDurationSecondsInput() {
    return this._defaultDueDurationSeconds;
  }

  // default_duration_seconds - computed: true, optional: true, required: false
  private _defaultDurationSeconds?: number; 
  public get defaultDurationSeconds() {
    return this.getNumberAttribute('default_duration_seconds');
  }
  public set defaultDurationSeconds(value: number) {
    this._defaultDurationSeconds = value;
  }
  public resetDefaultDurationSeconds() {
    this._defaultDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDurationSecondsInput() {
    return this._defaultDurationSeconds;
  }

  // default_expiration_seconds - computed: true, optional: true, required: false
  private _defaultExpirationSeconds?: number; 
  public get defaultExpirationSeconds() {
    return this.getNumberAttribute('default_expiration_seconds');
  }
  public set defaultExpirationSeconds(value: number) {
    this._defaultExpirationSeconds = value;
  }
  public resetDefaultExpirationSeconds() {
    this._defaultExpirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpirationSecondsInput() {
    return this._defaultExpirationSeconds;
  }

  // default_language_id - computed: false, optional: true, required: false
  private _defaultLanguageId?: string; 
  public get defaultLanguageId() {
    return this.getStringAttribute('default_language_id');
  }
  public set defaultLanguageId(value: string) {
    this._defaultLanguageId = value;
  }
  public resetDefaultLanguageId() {
    this._defaultLanguageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageIdInput() {
    return this._defaultLanguageId;
  }

  // default_priority - computed: true, optional: true, required: false
  private _defaultPriority?: number; 
  public get defaultPriority() {
    return this.getNumberAttribute('default_priority');
  }
  public set defaultPriority(value: number) {
    this._defaultPriority = value;
  }
  public resetDefaultPriority() {
    this._defaultPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPriorityInput() {
    return this._defaultPriority;
  }

  // default_queue_id - computed: false, optional: true, required: false
  private _defaultQueueId?: string; 
  public get defaultQueueId() {
    return this.getStringAttribute('default_queue_id');
  }
  public set defaultQueueId(value: string) {
    this._defaultQueueId = value;
  }
  public resetDefaultQueueId() {
    this._defaultQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQueueIdInput() {
    return this._defaultQueueId;
  }

  // default_script_id - computed: false, optional: true, required: false
  private _defaultScriptId?: string; 
  public get defaultScriptId() {
    return this.getStringAttribute('default_script_id');
  }
  public set defaultScriptId(value: string) {
    this._defaultScriptId = value;
  }
  public resetDefaultScriptId() {
    this._defaultScriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScriptIdInput() {
    return this._defaultScriptId;
  }

  // default_skills_ids - computed: false, optional: true, required: false
  private _defaultSkillsIds?: string[]; 
  public get defaultSkillsIds() {
    return this.getListAttribute('default_skills_ids');
  }
  public set defaultSkillsIds(value: string[]) {
    this._defaultSkillsIds = value;
  }
  public resetDefaultSkillsIds() {
    this._defaultSkillsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSkillsIdsInput() {
    return this._defaultSkillsIds;
  }

  // default_ttl_seconds - computed: true, optional: true, required: false
  private _defaultTtlSeconds?: number; 
  public get defaultTtlSeconds() {
    return this.getNumberAttribute('default_ttl_seconds');
  }
  public set defaultTtlSeconds(value: number) {
    this._defaultTtlSeconds = value;
  }
  public resetDefaultTtlSeconds() {
    this._defaultTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlSecondsInput() {
    return this._defaultTtlSeconds;
  }

  // default_workbin_id - computed: false, optional: false, required: true
  private _defaultWorkbinId?: string; 
  public get defaultWorkbinId() {
    return this.getStringAttribute('default_workbin_id');
  }
  public set defaultWorkbinId(value: string) {
    this._defaultWorkbinId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWorkbinIdInput() {
    return this._defaultWorkbinId;
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

  // disable_default_status_creation - computed: true, optional: true, required: false
  private _disableDefaultStatusCreation?: boolean | cdktf.IResolvable; 
  public get disableDefaultStatusCreation() {
    return this.getBooleanAttribute('disable_default_status_creation');
  }
  public set disableDefaultStatusCreation(value: boolean | cdktf.IResolvable) {
    this._disableDefaultStatusCreation = value;
  }
  public resetDisableDefaultStatusCreation() {
    this._disableDefaultStatusCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultStatusCreationInput() {
    return this._disableDefaultStatusCreation;
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
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

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // schema_version - computed: false, optional: true, required: false
  private _schemaVersion?: number; 
  public get schemaVersion() {
    return this.getNumberAttribute('schema_version');
  }
  public set schemaVersion(value: number) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignment_enabled: cdktf.booleanToTerraform(this._assignmentEnabled),
      default_due_duration_seconds: cdktf.numberToTerraform(this._defaultDueDurationSeconds),
      default_duration_seconds: cdktf.numberToTerraform(this._defaultDurationSeconds),
      default_expiration_seconds: cdktf.numberToTerraform(this._defaultExpirationSeconds),
      default_language_id: cdktf.stringToTerraform(this._defaultLanguageId),
      default_priority: cdktf.numberToTerraform(this._defaultPriority),
      default_queue_id: cdktf.stringToTerraform(this._defaultQueueId),
      default_script_id: cdktf.stringToTerraform(this._defaultScriptId),
      default_skills_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultSkillsIds),
      default_ttl_seconds: cdktf.numberToTerraform(this._defaultTtlSeconds),
      default_workbin_id: cdktf.stringToTerraform(this._defaultWorkbinId),
      description: cdktf.stringToTerraform(this._description),
      disable_default_status_creation: cdktf.booleanToTerraform(this._disableDefaultStatusCreation),
      division_id: cdktf.stringToTerraform(this._divisionId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      schema_version: cdktf.numberToTerraform(this._schemaVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_enabled: {
        value: cdktf.booleanToHclTerraform(this._assignmentEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_due_duration_seconds: {
        value: cdktf.numberToHclTerraform(this._defaultDueDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_duration_seconds: {
        value: cdktf.numberToHclTerraform(this._defaultDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_expiration_seconds: {
        value: cdktf.numberToHclTerraform(this._defaultExpirationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_language_id: {
        value: cdktf.stringToHclTerraform(this._defaultLanguageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_priority: {
        value: cdktf.numberToHclTerraform(this._defaultPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_queue_id: {
        value: cdktf.stringToHclTerraform(this._defaultQueueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_script_id: {
        value: cdktf.stringToHclTerraform(this._defaultScriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_skills_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultSkillsIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_ttl_seconds: {
        value: cdktf.numberToHclTerraform(this._defaultTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_workbin_id: {
        value: cdktf.stringToHclTerraform(this._defaultWorkbinId),
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
      disable_default_status_creation: {
        value: cdktf.booleanToHclTerraform(this._disableDefaultStatusCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_version: {
        value: cdktf.numberToHclTerraform(this._schemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
