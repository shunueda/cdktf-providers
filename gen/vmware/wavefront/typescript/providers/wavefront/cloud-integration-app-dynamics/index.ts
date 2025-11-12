// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIntegrationAppDynamicsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#additional_tags CloudIntegrationAppDynamics#additional_tags}
  */
  readonly additionalTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#app_filter_regex CloudIntegrationAppDynamics#app_filter_regex}
  */
  readonly appFilterRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#controller_name CloudIntegrationAppDynamics#controller_name}
  */
  readonly controllerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_app_infra_metrics CloudIntegrationAppDynamics#enable_app_infra_metrics}
  */
  readonly enableAppInfraMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_backend_metrics CloudIntegrationAppDynamics#enable_backend_metrics}
  */
  readonly enableBackendMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_business_trx_metrics CloudIntegrationAppDynamics#enable_business_trx_metrics}
  */
  readonly enableBusinessTrxMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_error_metrics CloudIntegrationAppDynamics#enable_error_metrics}
  */
  readonly enableErrorMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_individual_node_metrics CloudIntegrationAppDynamics#enable_individual_node_metrics}
  */
  readonly enableIndividualNodeMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_overall_perf_metrics CloudIntegrationAppDynamics#enable_overall_perf_metrics}
  */
  readonly enableOverallPerfMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_rollup CloudIntegrationAppDynamics#enable_rollup}
  */
  readonly enableRollup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#enable_service_endpoint_metrics CloudIntegrationAppDynamics#enable_service_endpoint_metrics}
  */
  readonly enableServiceEndpointMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#encrypted_password CloudIntegrationAppDynamics#encrypted_password}
  */
  readonly encryptedPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#force_save CloudIntegrationAppDynamics#force_save}
  */
  readonly forceSave?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#id CloudIntegrationAppDynamics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#name CloudIntegrationAppDynamics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#service CloudIntegrationAppDynamics#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#service_refresh_rate_in_minutes CloudIntegrationAppDynamics#service_refresh_rate_in_minutes}
  */
  readonly serviceRefreshRateInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#user_name CloudIntegrationAppDynamics#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics wavefront_cloud_integration_app_dynamics}
*/
export class CloudIntegrationAppDynamics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_cloud_integration_app_dynamics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudIntegrationAppDynamics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIntegrationAppDynamics to import
  * @param importFromId The id of the existing CloudIntegrationAppDynamics that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIntegrationAppDynamics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_cloud_integration_app_dynamics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_app_dynamics wavefront_cloud_integration_app_dynamics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIntegrationAppDynamicsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIntegrationAppDynamicsConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_cloud_integration_app_dynamics',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalTags = config.additionalTags;
    this._appFilterRegex = config.appFilterRegex;
    this._controllerName = config.controllerName;
    this._enableAppInfraMetrics = config.enableAppInfraMetrics;
    this._enableBackendMetrics = config.enableBackendMetrics;
    this._enableBusinessTrxMetrics = config.enableBusinessTrxMetrics;
    this._enableErrorMetrics = config.enableErrorMetrics;
    this._enableIndividualNodeMetrics = config.enableIndividualNodeMetrics;
    this._enableOverallPerfMetrics = config.enableOverallPerfMetrics;
    this._enableRollup = config.enableRollup;
    this._enableServiceEndpointMetrics = config.enableServiceEndpointMetrics;
    this._encryptedPassword = config.encryptedPassword;
    this._forceSave = config.forceSave;
    this._id = config.id;
    this._name = config.name;
    this._service = config.service;
    this._serviceRefreshRateInMinutes = config.serviceRefreshRateInMinutes;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_tags - computed: false, optional: true, required: false
  private _additionalTags?: { [key: string]: string }; 
  public get additionalTags() {
    return this.getStringMapAttribute('additional_tags');
  }
  public set additionalTags(value: { [key: string]: string }) {
    this._additionalTags = value;
  }
  public resetAdditionalTags() {
    this._additionalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTagsInput() {
    return this._additionalTags;
  }

  // app_filter_regex - computed: false, optional: true, required: false
  private _appFilterRegex?: string[]; 
  public get appFilterRegex() {
    return this.getListAttribute('app_filter_regex');
  }
  public set appFilterRegex(value: string[]) {
    this._appFilterRegex = value;
  }
  public resetAppFilterRegex() {
    this._appFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFilterRegexInput() {
    return this._appFilterRegex;
  }

  // controller_name - computed: false, optional: false, required: true
  private _controllerName?: string; 
  public get controllerName() {
    return this.getStringAttribute('controller_name');
  }
  public set controllerName(value: string) {
    this._controllerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNameInput() {
    return this._controllerName;
  }

  // enable_app_infra_metrics - computed: false, optional: true, required: false
  private _enableAppInfraMetrics?: boolean | cdktf.IResolvable; 
  public get enableAppInfraMetrics() {
    return this.getBooleanAttribute('enable_app_infra_metrics');
  }
  public set enableAppInfraMetrics(value: boolean | cdktf.IResolvable) {
    this._enableAppInfraMetrics = value;
  }
  public resetEnableAppInfraMetrics() {
    this._enableAppInfraMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAppInfraMetricsInput() {
    return this._enableAppInfraMetrics;
  }

  // enable_backend_metrics - computed: false, optional: true, required: false
  private _enableBackendMetrics?: boolean | cdktf.IResolvable; 
  public get enableBackendMetrics() {
    return this.getBooleanAttribute('enable_backend_metrics');
  }
  public set enableBackendMetrics(value: boolean | cdktf.IResolvable) {
    this._enableBackendMetrics = value;
  }
  public resetEnableBackendMetrics() {
    this._enableBackendMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendMetricsInput() {
    return this._enableBackendMetrics;
  }

  // enable_business_trx_metrics - computed: false, optional: true, required: false
  private _enableBusinessTrxMetrics?: boolean | cdktf.IResolvable; 
  public get enableBusinessTrxMetrics() {
    return this.getBooleanAttribute('enable_business_trx_metrics');
  }
  public set enableBusinessTrxMetrics(value: boolean | cdktf.IResolvable) {
    this._enableBusinessTrxMetrics = value;
  }
  public resetEnableBusinessTrxMetrics() {
    this._enableBusinessTrxMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBusinessTrxMetricsInput() {
    return this._enableBusinessTrxMetrics;
  }

  // enable_error_metrics - computed: false, optional: true, required: false
  private _enableErrorMetrics?: boolean | cdktf.IResolvable; 
  public get enableErrorMetrics() {
    return this.getBooleanAttribute('enable_error_metrics');
  }
  public set enableErrorMetrics(value: boolean | cdktf.IResolvable) {
    this._enableErrorMetrics = value;
  }
  public resetEnableErrorMetrics() {
    this._enableErrorMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableErrorMetricsInput() {
    return this._enableErrorMetrics;
  }

  // enable_individual_node_metrics - computed: false, optional: true, required: false
  private _enableIndividualNodeMetrics?: boolean | cdktf.IResolvable; 
  public get enableIndividualNodeMetrics() {
    return this.getBooleanAttribute('enable_individual_node_metrics');
  }
  public set enableIndividualNodeMetrics(value: boolean | cdktf.IResolvable) {
    this._enableIndividualNodeMetrics = value;
  }
  public resetEnableIndividualNodeMetrics() {
    this._enableIndividualNodeMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIndividualNodeMetricsInput() {
    return this._enableIndividualNodeMetrics;
  }

  // enable_overall_perf_metrics - computed: false, optional: true, required: false
  private _enableOverallPerfMetrics?: boolean | cdktf.IResolvable; 
  public get enableOverallPerfMetrics() {
    return this.getBooleanAttribute('enable_overall_perf_metrics');
  }
  public set enableOverallPerfMetrics(value: boolean | cdktf.IResolvable) {
    this._enableOverallPerfMetrics = value;
  }
  public resetEnableOverallPerfMetrics() {
    this._enableOverallPerfMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOverallPerfMetricsInput() {
    return this._enableOverallPerfMetrics;
  }

  // enable_rollup - computed: false, optional: true, required: false
  private _enableRollup?: boolean | cdktf.IResolvable; 
  public get enableRollup() {
    return this.getBooleanAttribute('enable_rollup');
  }
  public set enableRollup(value: boolean | cdktf.IResolvable) {
    this._enableRollup = value;
  }
  public resetEnableRollup() {
    this._enableRollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRollupInput() {
    return this._enableRollup;
  }

  // enable_service_endpoint_metrics - computed: false, optional: true, required: false
  private _enableServiceEndpointMetrics?: boolean | cdktf.IResolvable; 
  public get enableServiceEndpointMetrics() {
    return this.getBooleanAttribute('enable_service_endpoint_metrics');
  }
  public set enableServiceEndpointMetrics(value: boolean | cdktf.IResolvable) {
    this._enableServiceEndpointMetrics = value;
  }
  public resetEnableServiceEndpointMetrics() {
    this._enableServiceEndpointMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceEndpointMetricsInput() {
    return this._enableServiceEndpointMetrics;
  }

  // encrypted_password - computed: false, optional: false, required: true
  private _encryptedPassword?: string; 
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }
  public set encryptedPassword(value: string) {
    this._encryptedPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword;
  }

  // force_save - computed: false, optional: true, required: false
  private _forceSave?: boolean | cdktf.IResolvable; 
  public get forceSave() {
    return this.getBooleanAttribute('force_save');
  }
  public set forceSave(value: boolean | cdktf.IResolvable) {
    this._forceSave = value;
  }
  public resetForceSave() {
    this._forceSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSaveInput() {
    return this._forceSave;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_refresh_rate_in_minutes - computed: false, optional: true, required: false
  private _serviceRefreshRateInMinutes?: number; 
  public get serviceRefreshRateInMinutes() {
    return this.getNumberAttribute('service_refresh_rate_in_minutes');
  }
  public set serviceRefreshRateInMinutes(value: number) {
    this._serviceRefreshRateInMinutes = value;
  }
  public resetServiceRefreshRateInMinutes() {
    this._serviceRefreshRateInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRefreshRateInMinutesInput() {
    return this._serviceRefreshRateInMinutes;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalTags),
      app_filter_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appFilterRegex),
      controller_name: cdktf.stringToTerraform(this._controllerName),
      enable_app_infra_metrics: cdktf.booleanToTerraform(this._enableAppInfraMetrics),
      enable_backend_metrics: cdktf.booleanToTerraform(this._enableBackendMetrics),
      enable_business_trx_metrics: cdktf.booleanToTerraform(this._enableBusinessTrxMetrics),
      enable_error_metrics: cdktf.booleanToTerraform(this._enableErrorMetrics),
      enable_individual_node_metrics: cdktf.booleanToTerraform(this._enableIndividualNodeMetrics),
      enable_overall_perf_metrics: cdktf.booleanToTerraform(this._enableOverallPerfMetrics),
      enable_rollup: cdktf.booleanToTerraform(this._enableRollup),
      enable_service_endpoint_metrics: cdktf.booleanToTerraform(this._enableServiceEndpointMetrics),
      encrypted_password: cdktf.stringToTerraform(this._encryptedPassword),
      force_save: cdktf.booleanToTerraform(this._forceSave),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      service_refresh_rate_in_minutes: cdktf.numberToTerraform(this._serviceRefreshRateInMinutes),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      app_filter_regex: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appFilterRegex),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      controller_name: {
        value: cdktf.stringToHclTerraform(this._controllerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_app_infra_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableAppInfraMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_backend_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableBackendMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_business_trx_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableBusinessTrxMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_error_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableErrorMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_individual_node_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableIndividualNodeMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_overall_perf_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableOverallPerfMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rollup: {
        value: cdktf.booleanToHclTerraform(this._enableRollup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_service_endpoint_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableServiceEndpointMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypted_password: {
        value: cdktf.stringToHclTerraform(this._encryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_save: {
        value: cdktf.booleanToHclTerraform(this._forceSave),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_refresh_rate_in_minutes: {
        value: cdktf.numberToHclTerraform(this._serviceRefreshRateInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
