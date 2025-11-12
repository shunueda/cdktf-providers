// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#alert_categories AlertRule#alert_categories}
  */
  readonly alertCategories?: string[];
  /**
  * List of alert channels for the alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#alert_channels AlertRule#alert_channels}
  */
  readonly alertChannels?: string[];
  /**
  * List of alert sources for the alert rule. Valid sources are: Agent, AWS, Azure, GCP, K8s, OCI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#alert_sources AlertRule#alert_sources}
  */
  readonly alertSources?: string[];
  /**
  * List of alert subcategories for the alert rule. Valid categories are: Compliance, Application, Cloud Activity, File, Machine, User, Platform, Kubernetes Activity, Registry, SystemCall, Host Vulnerability, Container Vulnerability, Threat Intel, App, Cloud, K8sActivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#alert_subcategories AlertRule#alert_subcategories}
  */
  readonly alertSubcategories?: string[];
  /**
  * The description of the alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#description AlertRule#description}
  */
  readonly description?: string;
  /**
  * The state of the alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#enabled AlertRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of event categories for the alert rule. Valid categories are: Compliance, Application, Cloud Activity, File, Machine, User, Platform, Kubernetes Activity, Registry, SystemCall, Host Vulnerability, Container Vulnerability, Threat Intel, App, Cloud, K8sActivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#event_categories AlertRule#event_categories}
  */
  readonly eventCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#id AlertRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#name AlertRule#name}
  */
  readonly name: string;
  /**
  * List of resource groups for the alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#resource_groups AlertRule#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#severities AlertRule#severities}
  */
  readonly severities: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule lacework_alert_rule}
*/
export class AlertRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertRule to import
  * @param importFromId The id of the existing AlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/alert_rule lacework_alert_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10',
        providerVersionConstraint: '2.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertCategories = config.alertCategories;
    this._alertChannels = config.alertChannels;
    this._alertSources = config.alertSources;
    this._alertSubcategories = config.alertSubcategories;
    this._description = config.description;
    this._enabled = config.enabled;
    this._eventCategories = config.eventCategories;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroups = config.resourceGroups;
    this._severities = config.severities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_categories - computed: false, optional: true, required: false
  private _alertCategories?: string[]; 
  public get alertCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_categories'));
  }
  public set alertCategories(value: string[]) {
    this._alertCategories = value;
  }
  public resetAlertCategories() {
    this._alertCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertCategoriesInput() {
    return this._alertCategories;
  }

  // alert_channels - computed: false, optional: true, required: false
  private _alertChannels?: string[]; 
  public get alertChannels() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_channels'));
  }
  public set alertChannels(value: string[]) {
    this._alertChannels = value;
  }
  public resetAlertChannels() {
    this._alertChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertChannelsInput() {
    return this._alertChannels;
  }

  // alert_sources - computed: false, optional: true, required: false
  private _alertSources?: string[]; 
  public get alertSources() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_sources'));
  }
  public set alertSources(value: string[]) {
    this._alertSources = value;
  }
  public resetAlertSources() {
    this._alertSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourcesInput() {
    return this._alertSources;
  }

  // alert_subcategories - computed: false, optional: true, required: false
  private _alertSubcategories?: string[]; 
  public get alertSubcategories() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_subcategories'));
  }
  public set alertSubcategories(value: string[]) {
    this._alertSubcategories = value;
  }
  public resetAlertSubcategories() {
    this._alertSubcategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSubcategoriesInput() {
    return this._alertSubcategories;
  }

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
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

  // event_categories - computed: false, optional: true, required: false
  private _eventCategories?: string[]; 
  public get eventCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('event_categories'));
  }
  public set eventCategories(value: string[]) {
    this._eventCategories = value;
  }
  public resetEventCategories() {
    this._eventCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoriesInput() {
    return this._eventCategories;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_groups'));
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // severities - computed: false, optional: false, required: true
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
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
      alert_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertCategories),
      alert_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertChannels),
      alert_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertSources),
      alert_subcategories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertSubcategories),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventCategories),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceGroups),
      severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severities),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertChannels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertSources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_subcategories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertSubcategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      event_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      resource_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
