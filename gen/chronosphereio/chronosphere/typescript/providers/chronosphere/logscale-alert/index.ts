// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogscaleAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#action_ids LogscaleAlert#action_ids}
  */
  readonly actionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#alert_type LogscaleAlert#alert_type}
  */
  readonly alertType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#description LogscaleAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#disabled LogscaleAlert#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#id LogscaleAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#name LogscaleAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#query LogscaleAlert#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#repository LogscaleAlert#repository}
  */
  readonly repository: string;
  /**
  * Email of the user that the alert runs on behalf of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#run_as_user LogscaleAlert#run_as_user}
  */
  readonly runAsUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#slug LogscaleAlert#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#tags LogscaleAlert#tags}
  */
  readonly tags?: string[];
  /**
  * Required for STANDARD type alerts, optional for FILTER type alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#throttle_duration LogscaleAlert#throttle_duration}
  */
  readonly throttleDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#throttle_field LogscaleAlert#throttle_field}
  */
  readonly throttleField?: string;
  /**
  * Required for STANDARD type alerts, ignored for FILTER type alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#time_window LogscaleAlert#time_window}
  */
  readonly timeWindow?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert chronosphere_logscale_alert}
*/
export class LogscaleAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_logscale_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogscaleAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogscaleAlert to import
  * @param importFromId The id of the existing LogscaleAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogscaleAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_logscale_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/logscale_alert chronosphere_logscale_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogscaleAlertConfig
  */
  public constructor(scope: Construct, id: string, config: LogscaleAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_logscale_alert',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionIds = config.actionIds;
    this._alertType = config.alertType;
    this._description = config.description;
    this._disabled = config.disabled;
    this._id = config.id;
    this._name = config.name;
    this._query = config.query;
    this._repository = config.repository;
    this._runAsUser = config.runAsUser;
    this._slug = config.slug;
    this._tags = config.tags;
    this._throttleDuration = config.throttleDuration;
    this._throttleField = config.throttleField;
    this._timeWindow = config.timeWindow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_ids - computed: false, optional: true, required: false
  private _actionIds?: string[]; 
  public get actionIds() {
    return this.getListAttribute('action_ids');
  }
  public set actionIds(value: string[]) {
    this._actionIds = value;
  }
  public resetActionIds() {
    this._actionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdsInput() {
    return this._actionIds;
  }

  // alert_type - computed: false, optional: false, required: true
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // run_as_user - computed: false, optional: false, required: true
  private _runAsUser?: string; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string) {
    this._runAsUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // tags - computed: false, optional: true, required: false
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

  // throttle_duration - computed: false, optional: true, required: false
  private _throttleDuration?: string; 
  public get throttleDuration() {
    return this.getStringAttribute('throttle_duration');
  }
  public set throttleDuration(value: string) {
    this._throttleDuration = value;
  }
  public resetThrottleDuration() {
    this._throttleDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleDurationInput() {
    return this._throttleDuration;
  }

  // throttle_field - computed: false, optional: true, required: false
  private _throttleField?: string; 
  public get throttleField() {
    return this.getStringAttribute('throttle_field');
  }
  public set throttleField(value: string) {
    this._throttleField = value;
  }
  public resetThrottleField() {
    this._throttleField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleFieldInput() {
    return this._throttleField;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actionIds),
      alert_type: cdktf.stringToTerraform(this._alertType),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      repository: cdktf.stringToTerraform(this._repository),
      run_as_user: cdktf.stringToTerraform(this._runAsUser),
      slug: cdktf.stringToTerraform(this._slug),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      throttle_duration: cdktf.stringToTerraform(this._throttleDuration),
      throttle_field: cdktf.stringToTerraform(this._throttleField),
      time_window: cdktf.stringToTerraform(this._timeWindow),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_as_user: {
        value: cdktf.stringToHclTerraform(this._runAsUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      throttle_duration: {
        value: cdktf.stringToHclTerraform(this._throttleDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttle_field: {
        value: cdktf.stringToHclTerraform(this._throttleField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_window: {
        value: cdktf.stringToHclTerraform(this._timeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
