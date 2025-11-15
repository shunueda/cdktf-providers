// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * When this is set to true, all manual triggers will require API Key authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application#is_manual_trigger_authorized Application#is_manual_trigger_authorized}
  */
  readonly isManualTriggerAuthorized?: boolean | cdktf.IResolvable;
  /**
  * The name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application#tags Application#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application harness_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/application harness_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_application',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
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
    this._isManualTriggerAuthorized = config.isManualTriggerAuthorized;
    this._name = config.name;
    this._tags = config.tags;
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

  // git_sync_connector_id - computed: true, optional: false, required: false
  public get gitSyncConnectorId() {
    return this.getStringAttribute('git_sync_connector_id');
  }

  // git_sync_enabled - computed: true, optional: false, required: false
  public get gitSyncEnabled() {
    return this.getBooleanAttribute('git_sync_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      is_manual_trigger_authorized: cdktf.booleanToTerraform(this._isManualTriggerAuthorized),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
