// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#check_interval_sec Alarm#check_interval_sec}
  */
  readonly checkIntervalSec?: string;
  /**
  * The Alarm's resolution condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#clear_query Alarm#clear_query}
  */
  readonly clearQuery?: string;
  /**
  * Kind of check in an Alarm (e.g. above or below) vs a threshold for a Metric. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#condition_type Alarm#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Switching value (threshold) for a Metric in an Alarm. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#condition_value Alarm#condition_value}
  */
  readonly conditionValue?: string;
  /**
  * A user-friendly explanation of an object. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#description Alarm#description}
  */
  readonly description?: string;
  /**
  * If the object is currently enabled or disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#enabled Alarm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * General class for an Action or Bot (e.g., custom, standard, metric, or system check). Defaults to `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#family Alarm#family}
  */
  readonly family?: string;
  /**
  * The long description of the Alarm's triggering condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#fire_long_template Alarm#fire_long_template}
  */
  readonly fireLongTemplate?: string;
  /**
  * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#fire_query Alarm#fire_query}
  */
  readonly fireQuery: string;
  /**
  * The short description of the Alarm's triggering condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#fire_short_template Alarm#fire_short_template}
  */
  readonly fireShortTemplate?: string;
  /**
  * UI title of the Alarm's triggering condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#fire_title_template Alarm#fire_title_template}
  */
  readonly fireTitleTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#id Alarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Alarm's triggering Metric. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#metric_name Alarm#metric_name}
  */
  readonly metricName?: string;
  /**
  * The Alarm's mute condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#mute_query Alarm#mute_query}
  */
  readonly muteQuery?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#name Alarm#name}
  */
  readonly name: string;
  /**
  * Where an Alarm is raised (e.g., local to a resource, or global to the system). Defaults to `local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#raise_for Alarm#raise_for}
  */
  readonly raiseFor?: string;
  /**
  * The long description of the Alarm's resolution. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#resolve_long_template Alarm#resolve_long_template}
  */
  readonly resolveLongTemplate?: string;
  /**
  * The short description of the Alarm's resolution. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#resolve_short_template Alarm#resolve_short_template}
  */
  readonly resolveShortTemplate?: string;
  /**
  * UI title of the Alarm's' resolution. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#resolve_title_template Alarm#resolve_title_template}
  */
  readonly resolveTitleTemplate?: string;
  /**
  * A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#resource_query Alarm#resource_query}
  */
  readonly resourceQuery?: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#resource_type Alarm#resource_type}
  */
  readonly resourceType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm shoreline_alarm}
*/
export class Alarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alarm to import
  * @param importFromId The id of the existing Alarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/alarm shoreline_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlarmConfig
  */
  public constructor(scope: Construct, id: string, config: AlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_alarm',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38',
        providerVersionConstraint: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkIntervalSec = config.checkIntervalSec;
    this._clearQuery = config.clearQuery;
    this._conditionType = config.conditionType;
    this._conditionValue = config.conditionValue;
    this._description = config.description;
    this._enabled = config.enabled;
    this._family = config.family;
    this._fireLongTemplate = config.fireLongTemplate;
    this._fireQuery = config.fireQuery;
    this._fireShortTemplate = config.fireShortTemplate;
    this._fireTitleTemplate = config.fireTitleTemplate;
    this._id = config.id;
    this._metricName = config.metricName;
    this._muteQuery = config.muteQuery;
    this._name = config.name;
    this._raiseFor = config.raiseFor;
    this._resolveLongTemplate = config.resolveLongTemplate;
    this._resolveShortTemplate = config.resolveShortTemplate;
    this._resolveTitleTemplate = config.resolveTitleTemplate;
    this._resourceQuery = config.resourceQuery;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval_sec - computed: false, optional: true, required: false
  private _checkIntervalSec?: string; 
  public get checkIntervalSec() {
    return this.getStringAttribute('check_interval_sec');
  }
  public set checkIntervalSec(value: string) {
    this._checkIntervalSec = value;
  }
  public resetCheckIntervalSec() {
    this._checkIntervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalSecInput() {
    return this._checkIntervalSec;
  }

  // clear_query - computed: false, optional: true, required: false
  private _clearQuery?: string; 
  public get clearQuery() {
    return this.getStringAttribute('clear_query');
  }
  public set clearQuery(value: string) {
    this._clearQuery = value;
  }
  public resetClearQuery() {
    this._clearQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearQueryInput() {
    return this._clearQuery;
  }

  // condition_type - computed: false, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // condition_value - computed: false, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // fire_long_template - computed: false, optional: true, required: false
  private _fireLongTemplate?: string; 
  public get fireLongTemplate() {
    return this.getStringAttribute('fire_long_template');
  }
  public set fireLongTemplate(value: string) {
    this._fireLongTemplate = value;
  }
  public resetFireLongTemplate() {
    this._fireLongTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireLongTemplateInput() {
    return this._fireLongTemplate;
  }

  // fire_query - computed: false, optional: false, required: true
  private _fireQuery?: string; 
  public get fireQuery() {
    return this.getStringAttribute('fire_query');
  }
  public set fireQuery(value: string) {
    this._fireQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fireQueryInput() {
    return this._fireQuery;
  }

  // fire_short_template - computed: false, optional: true, required: false
  private _fireShortTemplate?: string; 
  public get fireShortTemplate() {
    return this.getStringAttribute('fire_short_template');
  }
  public set fireShortTemplate(value: string) {
    this._fireShortTemplate = value;
  }
  public resetFireShortTemplate() {
    this._fireShortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireShortTemplateInput() {
    return this._fireShortTemplate;
  }

  // fire_title_template - computed: false, optional: true, required: false
  private _fireTitleTemplate?: string; 
  public get fireTitleTemplate() {
    return this.getStringAttribute('fire_title_template');
  }
  public set fireTitleTemplate(value: string) {
    this._fireTitleTemplate = value;
  }
  public resetFireTitleTemplate() {
    this._fireTitleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireTitleTemplateInput() {
    return this._fireTitleTemplate;
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

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // mute_query - computed: false, optional: true, required: false
  private _muteQuery?: string; 
  public get muteQuery() {
    return this.getStringAttribute('mute_query');
  }
  public set muteQuery(value: string) {
    this._muteQuery = value;
  }
  public resetMuteQuery() {
    this._muteQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteQueryInput() {
    return this._muteQuery;
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

  // raise_for - computed: false, optional: true, required: false
  private _raiseFor?: string; 
  public get raiseFor() {
    return this.getStringAttribute('raise_for');
  }
  public set raiseFor(value: string) {
    this._raiseFor = value;
  }
  public resetRaiseFor() {
    this._raiseFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raiseForInput() {
    return this._raiseFor;
  }

  // resolve_long_template - computed: false, optional: true, required: false
  private _resolveLongTemplate?: string; 
  public get resolveLongTemplate() {
    return this.getStringAttribute('resolve_long_template');
  }
  public set resolveLongTemplate(value: string) {
    this._resolveLongTemplate = value;
  }
  public resetResolveLongTemplate() {
    this._resolveLongTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveLongTemplateInput() {
    return this._resolveLongTemplate;
  }

  // resolve_short_template - computed: false, optional: true, required: false
  private _resolveShortTemplate?: string; 
  public get resolveShortTemplate() {
    return this.getStringAttribute('resolve_short_template');
  }
  public set resolveShortTemplate(value: string) {
    this._resolveShortTemplate = value;
  }
  public resetResolveShortTemplate() {
    this._resolveShortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveShortTemplateInput() {
    return this._resolveShortTemplate;
  }

  // resolve_title_template - computed: false, optional: true, required: false
  private _resolveTitleTemplate?: string; 
  public get resolveTitleTemplate() {
    return this.getStringAttribute('resolve_title_template');
  }
  public set resolveTitleTemplate(value: string) {
    this._resolveTitleTemplate = value;
  }
  public resetResolveTitleTemplate() {
    this._resolveTitleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveTitleTemplateInput() {
    return this._resolveTitleTemplate;
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

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_interval_sec: cdktf.stringToTerraform(this._checkIntervalSec),
      clear_query: cdktf.stringToTerraform(this._clearQuery),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      condition_value: cdktf.stringToTerraform(this._conditionValue),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      family: cdktf.stringToTerraform(this._family),
      fire_long_template: cdktf.stringToTerraform(this._fireLongTemplate),
      fire_query: cdktf.stringToTerraform(this._fireQuery),
      fire_short_template: cdktf.stringToTerraform(this._fireShortTemplate),
      fire_title_template: cdktf.stringToTerraform(this._fireTitleTemplate),
      id: cdktf.stringToTerraform(this._id),
      metric_name: cdktf.stringToTerraform(this._metricName),
      mute_query: cdktf.stringToTerraform(this._muteQuery),
      name: cdktf.stringToTerraform(this._name),
      raise_for: cdktf.stringToTerraform(this._raiseFor),
      resolve_long_template: cdktf.stringToTerraform(this._resolveLongTemplate),
      resolve_short_template: cdktf.stringToTerraform(this._resolveShortTemplate),
      resolve_title_template: cdktf.stringToTerraform(this._resolveTitleTemplate),
      resource_query: cdktf.stringToTerraform(this._resourceQuery),
      resource_type: cdktf.stringToTerraform(this._resourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_interval_sec: {
        value: cdktf.stringToHclTerraform(this._checkIntervalSec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_query: {
        value: cdktf.stringToHclTerraform(this._clearQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_value: {
        value: cdktf.stringToHclTerraform(this._conditionValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_long_template: {
        value: cdktf.stringToHclTerraform(this._fireLongTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_query: {
        value: cdktf.stringToHclTerraform(this._fireQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_short_template: {
        value: cdktf.stringToHclTerraform(this._fireShortTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_title_template: {
        value: cdktf.stringToHclTerraform(this._fireTitleTemplate),
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
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mute_query: {
        value: cdktf.stringToHclTerraform(this._muteQuery),
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
      raise_for: {
        value: cdktf.stringToHclTerraform(this._raiseFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_long_template: {
        value: cdktf.stringToHclTerraform(this._resolveLongTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_short_template: {
        value: cdktf.stringToHclTerraform(this._resolveShortTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_title_template: {
        value: cdktf.stringToHclTerraform(this._resolveTitleTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_query: {
        value: cdktf.stringToHclTerraform(this._resourceQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
