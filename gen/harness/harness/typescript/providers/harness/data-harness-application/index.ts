// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application#description DataHarnessApplication#description}
  */
  readonly description?: string;
  /**
  * The id of the git sync connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application#git_sync_connector_id DataHarnessApplication#git_sync_connector_id}
  */
  readonly gitSyncConnectorId?: string;
  /**
  * True if git sync is enabled on this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application#git_sync_enabled DataHarnessApplication#git_sync_enabled}
  */
  readonly gitSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application#id DataHarnessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When this is set to true, all manual triggers will require API Key authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application#is_manual_trigger_authorized DataHarnessApplication#is_manual_trigger_authorized}
  */
  readonly isManualTriggerAuthorized?: boolean | cdktf.IResolvable;
  /**
  * The name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application#name DataHarnessApplication#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application harness_application}
*/
export class DataHarnessApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessApplication to import
  * @param importFromId The id of the existing DataHarnessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/application harness_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHarnessApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harness_application',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gitSyncConnectorId = config.gitSyncConnectorId;
    this._gitSyncEnabled = config.gitSyncEnabled;
    this._id = config.id;
    this._isManualTriggerAuthorized = config.isManualTriggerAuthorized;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // git_sync_connector_id - computed: false, optional: true, required: false
  private _gitSyncConnectorId?: string; 
  public get gitSyncConnectorId() {
    return this.getStringAttribute('git_sync_connector_id');
  }
  public set gitSyncConnectorId(value: string) {
    this._gitSyncConnectorId = value;
  }
  public resetGitSyncConnectorId() {
    this._gitSyncConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSyncConnectorIdInput() {
    return this._gitSyncConnectorId;
  }

  // git_sync_enabled - computed: false, optional: true, required: false
  private _gitSyncEnabled?: boolean | cdktf.IResolvable; 
  public get gitSyncEnabled() {
    return this.getBooleanAttribute('git_sync_enabled');
  }
  public set gitSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._gitSyncEnabled = value;
  }
  public resetGitSyncEnabled() {
    this._gitSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSyncEnabledInput() {
    return this._gitSyncEnabled;
  }

  // id - computed: false, optional: true, required: false
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

  // is_manual_trigger_authorized - computed: false, optional: true, required: false
  private _isManualTriggerAuthorized?: boolean | cdktf.IResolvable; 
  public get isManualTriggerAuthorized() {
    return this.getBooleanAttribute('is_manual_trigger_authorized');
  }
  public set isManualTriggerAuthorized(value: boolean | cdktf.IResolvable) {
    this._isManualTriggerAuthorized = value;
  }
  public resetIsManualTriggerAuthorized() {
    this._isManualTriggerAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManualTriggerAuthorizedInput() {
    return this._isManualTriggerAuthorized;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
      description: cdktf.stringToTerraform(this._description),
      git_sync_connector_id: cdktf.stringToTerraform(this._gitSyncConnectorId),
      git_sync_enabled: cdktf.booleanToTerraform(this._gitSyncEnabled),
      id: cdktf.stringToTerraform(this._id),
      is_manual_trigger_authorized: cdktf.booleanToTerraform(this._isManualTriggerAuthorized),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_sync_connector_id: {
        value: cdktf.stringToHclTerraform(this._gitSyncConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._gitSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_manual_trigger_authorized: {
        value: cdktf.booleanToHclTerraform(this._isManualTriggerAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
