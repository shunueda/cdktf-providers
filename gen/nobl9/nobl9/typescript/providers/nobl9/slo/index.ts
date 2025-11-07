// generated from terraform resource schema

import { SloAnomalyConfig, 
sloAnomalyConfigToTerraform, 
sloAnomalyConfigToHclTerraform, 
SloAnomalyConfigList, 
SloAttachment, 
sloAttachmentToTerraform, 
sloAttachmentToHclTerraform, 
SloAttachmentList, 
SloComposite, 
sloCompositeToTerraform, 
sloCompositeToHclTerraform, 
SloCompositeList, 
SloIndicator, 
sloIndicatorToTerraform, 
sloIndicatorToHclTerraform, 
SloIndicatorList, 
SloLabel, 
sloLabelToTerraform, 
sloLabelToHclTerraform, 
SloLabelList, 
SloObjective, 
sloObjectiveToTerraform, 
sloObjectiveToHclTerraform, 
SloObjectiveList, 
SloTimeWindow, 
sloTimeWindowToTerraform, 
sloTimeWindowToHclTerraform, 
SloTimeWindowList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert Policies attached to SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#alert_policies Slo#alert_policies}
  */
  readonly alertPolicies?: string[];
  /**
  * [Metadata annotations](https://docs.nobl9.com/features/labels/#metadata-annotations) attached to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#annotations Slo#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Method which will be use to calculate budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#budgeting_method Slo#budgeting_method}
  */
  readonly budgetingMethod: string;
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#display_name Slo#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique name of the resource, must conform to the [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names) naming convention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names) naming convention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project Slo#project}
  */
  readonly project: string;
  /**
  * If set, the retrieval of historical data for a newly created SLO will be triggered, starting from the specified date. Needs to be RFC3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#retrieve_historical_data_from Slo#retrieve_historical_data_from}
  */
  readonly retrieveHistoricalDataFrom?: string;
  /**
  * Name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#service Slo#service}
  */
  readonly service: string;
  /**
  * Internal field, do not use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tier Slo#tier}
  */
  readonly tier?: string;
  /**
  * anomaly_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#anomaly_config Slo#anomaly_config}
  */
  readonly anomalyConfig?: SloAnomalyConfig[] | cdktf.IResolvable;
  /**
  * attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#attachment Slo#attachment}
  */
  readonly attachment?: SloAttachment[] | cdktf.IResolvable;
  /**
  * composite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#composite Slo#composite}
  */
  readonly composite?: SloComposite[] | cdktf.IResolvable;
  /**
  * indicator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#indicator Slo#indicator}
  */
  readonly indicator?: SloIndicator[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#label Slo#label}
  */
  readonly label?: SloLabel[] | cdktf.IResolvable;
  /**
  * objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#objective Slo#objective}
  */
  readonly objective?: SloObjective[] | cdktf.IResolvable;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#time_window Slo#time_window}
  */
  readonly timeWindow?: SloTimeWindow[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo nobl9_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Slo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Slo to import
  * @param importFromId The id of the existing Slo that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Slo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo nobl9_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_slo',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.44.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertPolicies = config.alertPolicies;
    this._annotations = config.annotations;
    this._budgetingMethod = config.budgetingMethod;
    this._description = config.description;
    this._displayName = config.displayName;
    this._name = config.name;
    this._project = config.project;
    this._retrieveHistoricalDataFrom = config.retrieveHistoricalDataFrom;
    this._service = config.service;
    this._tier = config.tier;
    this._anomalyConfig.internalValue = config.anomalyConfig;
    this._attachment.internalValue = config.attachment;
    this._composite.internalValue = config.composite;
    this._indicator.internalValue = config.indicator;
    this._label.internalValue = config.label;
    this._objective.internalValue = config.objective;
    this._timeWindow.internalValue = config.timeWindow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_policies - computed: false, optional: true, required: false
  private _alertPolicies?: string[]; 
  public get alertPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_policies'));
  }
  public set alertPolicies(value: string[]) {
    this._alertPolicies = value;
  }
  public resetAlertPolicies() {
    this._alertPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPoliciesInput() {
    return this._alertPolicies;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // budgeting_method - computed: false, optional: false, required: true
  private _budgetingMethod?: string; 
  public get budgetingMethod() {
    return this.getStringAttribute('budgeting_method');
  }
  public set budgetingMethod(value: string) {
    this._budgetingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetingMethodInput() {
    return this._budgetingMethod;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // retrieve_historical_data_from - computed: false, optional: true, required: false
  private _retrieveHistoricalDataFrom?: string; 
  public get retrieveHistoricalDataFrom() {
    return this.getStringAttribute('retrieve_historical_data_from');
  }
  public set retrieveHistoricalDataFrom(value: string) {
    this._retrieveHistoricalDataFrom = value;
  }
  public resetRetrieveHistoricalDataFrom() {
    this._retrieveHistoricalDataFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveHistoricalDataFromInput() {
    return this._retrieveHistoricalDataFrom;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // anomaly_config - computed: false, optional: true, required: false
  private _anomalyConfig = new SloAnomalyConfigList(this, "anomaly_config", false);
  public get anomalyConfig() {
    return this._anomalyConfig;
  }
  public putAnomalyConfig(value: SloAnomalyConfig[] | cdktf.IResolvable) {
    this._anomalyConfig.internalValue = value;
  }
  public resetAnomalyConfig() {
    this._anomalyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyConfigInput() {
    return this._anomalyConfig.internalValue;
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment = new SloAttachmentList(this, "attachment", false);
  public get attachment() {
    return this._attachment;
  }
  public putAttachment(value: SloAttachment[] | cdktf.IResolvable) {
    this._attachment.internalValue = value;
  }
  public resetAttachment() {
    this._attachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment.internalValue;
  }

  // composite - computed: false, optional: true, required: false
  private _composite = new SloCompositeList(this, "composite", false);
  public get composite() {
    return this._composite;
  }
  public putComposite(value: SloComposite[] | cdktf.IResolvable) {
    this._composite.internalValue = value;
  }
  public resetComposite() {
    this._composite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite.internalValue;
  }

  // indicator - computed: false, optional: true, required: false
  private _indicator = new SloIndicatorList(this, "indicator", false);
  public get indicator() {
    return this._indicator;
  }
  public putIndicator(value: SloIndicator[] | cdktf.IResolvable) {
    this._indicator.internalValue = value;
  }
  public resetIndicator() {
    this._indicator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorInput() {
    return this._indicator.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new SloLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: SloLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // objective - computed: false, optional: true, required: false
  private _objective = new SloObjectiveList(this, "objective", false);
  public get objective() {
    return this._objective;
  }
  public putObjective(value: SloObjective[] | cdktf.IResolvable) {
    this._objective.internalValue = value;
  }
  public resetObjective() {
    this._objective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new SloTimeWindowList(this, "time_window", false);
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: SloTimeWindow[] | cdktf.IResolvable) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertPolicies),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      budgeting_method: cdktf.stringToTerraform(this._budgetingMethod),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      retrieve_historical_data_from: cdktf.stringToTerraform(this._retrieveHistoricalDataFrom),
      service: cdktf.stringToTerraform(this._service),
      tier: cdktf.stringToTerraform(this._tier),
      anomaly_config: cdktf.listMapper(sloAnomalyConfigToTerraform, true)(this._anomalyConfig.internalValue),
      attachment: cdktf.listMapper(sloAttachmentToTerraform, true)(this._attachment.internalValue),
      composite: cdktf.listMapper(sloCompositeToTerraform, true)(this._composite.internalValue),
      indicator: cdktf.listMapper(sloIndicatorToTerraform, true)(this._indicator.internalValue),
      label: cdktf.listMapper(sloLabelToTerraform, true)(this._label.internalValue),
      objective: cdktf.listMapper(sloObjectiveToTerraform, true)(this._objective.internalValue),
      time_window: cdktf.listMapper(sloTimeWindowToTerraform, true)(this._timeWindow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      budgeting_method: {
        value: cdktf.stringToHclTerraform(this._budgetingMethod),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrieve_historical_data_from: {
        value: cdktf.stringToHclTerraform(this._retrieveHistoricalDataFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anomaly_config: {
        value: cdktf.listMapperHcl(sloAnomalyConfigToHclTerraform, true)(this._anomalyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloAnomalyConfigList",
      },
      attachment: {
        value: cdktf.listMapperHcl(sloAttachmentToHclTerraform, true)(this._attachment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloAttachmentList",
      },
      composite: {
        value: cdktf.listMapperHcl(sloCompositeToHclTerraform, true)(this._composite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloCompositeList",
      },
      indicator: {
        value: cdktf.listMapperHcl(sloIndicatorToHclTerraform, true)(this._indicator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloIndicatorList",
      },
      label: {
        value: cdktf.listMapperHcl(sloLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloLabelList",
      },
      objective: {
        value: cdktf.listMapperHcl(sloObjectiveToHclTerraform, true)(this._objective.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloObjectiveList",
      },
      time_window: {
        value: cdktf.listMapperHcl(sloTimeWindowToHclTerraform, true)(this._timeWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SloTimeWindowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
