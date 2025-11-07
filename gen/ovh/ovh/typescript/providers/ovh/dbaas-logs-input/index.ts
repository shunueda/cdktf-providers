// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasLogsInputConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#allowed_networks DbaasLogsInput#allowed_networks}
  */
  readonly allowedNetworks?: string[];
  /**
  * Whether the workload is auto-scaled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#autoscale DbaasLogsInput#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Input description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#description DbaasLogsInput#description}
  */
  readonly description: string;
  /**
  * Input engine ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#engine_id DbaasLogsInput#engine_id}
  */
  readonly engineId: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#exposed_port DbaasLogsInput#exposed_port}
  */
  readonly exposedPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#id DbaasLogsInput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of instances in auto-scaled mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#max_scale_instance DbaasLogsInput#max_scale_instance}
  */
  readonly maxScaleInstance?: number;
  /**
  * Minimum number of instances in auto-scaled mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#min_scale_instance DbaasLogsInput#min_scale_instance}
  */
  readonly minScaleInstance?: number;
  /**
  * Number of instance running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#nb_instance DbaasLogsInput#nb_instance}
  */
  readonly nbInstance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#service_name DbaasLogsInput#service_name}
  */
  readonly serviceName: string;
  /**
  * Associated Graylog stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#stream_id DbaasLogsInput#stream_id}
  */
  readonly streamId: string;
  /**
  * Input title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#title DbaasLogsInput#title}
  */
  readonly title: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#configuration DbaasLogsInput#configuration}
  */
  readonly configuration: DbaasLogsInputConfiguration;
}
export interface DbaasLogsInputConfigurationFlowgger {
  /**
  * Type of format to decode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#log_format DbaasLogsInput#log_format}
  */
  readonly logFormat: string;
  /**
  * Indicates how messages are delimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#log_framing DbaasLogsInput#log_framing}
  */
  readonly logFraming: string;
}

export function dbaasLogsInputConfigurationFlowggerToTerraform(struct?: DbaasLogsInputConfigurationFlowggerOutputReference | DbaasLogsInputConfigurationFlowgger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_framing: cdktf.stringToTerraform(struct!.logFraming),
  }
}


export function dbaasLogsInputConfigurationFlowggerToHclTerraform(struct?: DbaasLogsInputConfigurationFlowggerOutputReference | DbaasLogsInputConfigurationFlowgger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_framing: {
      value: cdktf.stringToHclTerraform(struct!.logFraming),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasLogsInputConfigurationFlowggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbaasLogsInputConfigurationFlowgger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logFraming !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFraming = this._logFraming;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasLogsInputConfigurationFlowgger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logFormat = undefined;
      this._logFraming = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logFormat = value.logFormat;
      this._logFraming = value.logFraming;
    }
  }

  // log_format - computed: false, optional: false, required: true
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_framing - computed: false, optional: false, required: true
  private _logFraming?: string; 
  public get logFraming() {
    return this.getStringAttribute('log_framing');
  }
  public set logFraming(value: string) {
    this._logFraming = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFramingInput() {
    return this._logFraming;
  }
}
export interface DbaasLogsInputConfigurationLogstash {
  /**
  * The filter section of logstash.conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#filter_section DbaasLogsInput#filter_section}
  */
  readonly filterSection?: string;
  /**
  * The filter section of logstash.conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#input_section DbaasLogsInput#input_section}
  */
  readonly inputSection: string;
  /**
  * The list of customs Grok patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#pattern_section DbaasLogsInput#pattern_section}
  */
  readonly patternSection?: string;
}

export function dbaasLogsInputConfigurationLogstashToTerraform(struct?: DbaasLogsInputConfigurationLogstashOutputReference | DbaasLogsInputConfigurationLogstash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_section: cdktf.stringToTerraform(struct!.filterSection),
    input_section: cdktf.stringToTerraform(struct!.inputSection),
    pattern_section: cdktf.stringToTerraform(struct!.patternSection),
  }
}


export function dbaasLogsInputConfigurationLogstashToHclTerraform(struct?: DbaasLogsInputConfigurationLogstashOutputReference | DbaasLogsInputConfigurationLogstash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_section: {
      value: cdktf.stringToHclTerraform(struct!.filterSection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_section: {
      value: cdktf.stringToHclTerraform(struct!.inputSection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_section: {
      value: cdktf.stringToHclTerraform(struct!.patternSection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasLogsInputConfigurationLogstashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbaasLogsInputConfigurationLogstash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSection = this._filterSection;
    }
    if (this._inputSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSection = this._inputSection;
    }
    if (this._patternSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSection = this._patternSection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasLogsInputConfigurationLogstash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterSection = undefined;
      this._inputSection = undefined;
      this._patternSection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterSection = value.filterSection;
      this._inputSection = value.inputSection;
      this._patternSection = value.patternSection;
    }
  }

  // filter_section - computed: false, optional: true, required: false
  private _filterSection?: string; 
  public get filterSection() {
    return this.getStringAttribute('filter_section');
  }
  public set filterSection(value: string) {
    this._filterSection = value;
  }
  public resetFilterSection() {
    this._filterSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSectionInput() {
    return this._filterSection;
  }

  // input_section - computed: false, optional: false, required: true
  private _inputSection?: string; 
  public get inputSection() {
    return this.getStringAttribute('input_section');
  }
  public set inputSection(value: string) {
    this._inputSection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSectionInput() {
    return this._inputSection;
  }

  // pattern_section - computed: false, optional: true, required: false
  private _patternSection?: string; 
  public get patternSection() {
    return this.getStringAttribute('pattern_section');
  }
  public set patternSection(value: string) {
    this._patternSection = value;
  }
  public resetPatternSection() {
    this._patternSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSectionInput() {
    return this._patternSection;
  }
}
export interface DbaasLogsInputConfiguration {
  /**
  * flowgger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#flowgger DbaasLogsInput#flowgger}
  */
  readonly flowgger?: DbaasLogsInputConfigurationFlowgger;
  /**
  * logstash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#logstash DbaasLogsInput#logstash}
  */
  readonly logstash?: DbaasLogsInputConfigurationLogstash;
}

export function dbaasLogsInputConfigurationToTerraform(struct?: DbaasLogsInputConfigurationOutputReference | DbaasLogsInputConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flowgger: dbaasLogsInputConfigurationFlowggerToTerraform(struct!.flowgger),
    logstash: dbaasLogsInputConfigurationLogstashToTerraform(struct!.logstash),
  }
}


export function dbaasLogsInputConfigurationToHclTerraform(struct?: DbaasLogsInputConfigurationOutputReference | DbaasLogsInputConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flowgger: {
      value: dbaasLogsInputConfigurationFlowggerToHclTerraform(struct!.flowgger),
      isBlock: true,
      type: "list",
      storageClassType: "DbaasLogsInputConfigurationFlowggerList",
    },
    logstash: {
      value: dbaasLogsInputConfigurationLogstashToHclTerraform(struct!.logstash),
      isBlock: true,
      type: "list",
      storageClassType: "DbaasLogsInputConfigurationLogstashList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasLogsInputConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbaasLogsInputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowgger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowgger = this._flowgger?.internalValue;
    }
    if (this._logstash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstash = this._logstash?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasLogsInputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flowgger.internalValue = undefined;
      this._logstash.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flowgger.internalValue = value.flowgger;
      this._logstash.internalValue = value.logstash;
    }
  }

  // flowgger - computed: false, optional: true, required: false
  private _flowgger = new DbaasLogsInputConfigurationFlowggerOutputReference(this, "flowgger");
  public get flowgger() {
    return this._flowgger;
  }
  public putFlowgger(value: DbaasLogsInputConfigurationFlowgger) {
    this._flowgger.internalValue = value;
  }
  public resetFlowgger() {
    this._flowgger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowggerInput() {
    return this._flowgger.internalValue;
  }

  // logstash - computed: false, optional: true, required: false
  private _logstash = new DbaasLogsInputConfigurationLogstashOutputReference(this, "logstash");
  public get logstash() {
    return this._logstash;
  }
  public putLogstash(value: DbaasLogsInputConfigurationLogstash) {
    this._logstash.internalValue = value;
  }
  public resetLogstash() {
    this._logstash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashInput() {
    return this._logstash.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input ovh_dbaas_logs_input}
*/
export class DbaasLogsInput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dbaas_logs_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasLogsInput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasLogsInput to import
  * @param importFromId The id of the existing DbaasLogsInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasLogsInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dbaas_logs_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_input ovh_dbaas_logs_input} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasLogsInputConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasLogsInputConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dbaas_logs_input',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedNetworks = config.allowedNetworks;
    this._autoscale = config.autoscale;
    this._description = config.description;
    this._engineId = config.engineId;
    this._exposedPort = config.exposedPort;
    this._id = config.id;
    this._maxScaleInstance = config.maxScaleInstance;
    this._minScaleInstance = config.minScaleInstance;
    this._nbInstance = config.nbInstance;
    this._serviceName = config.serviceName;
    this._streamId = config.streamId;
    this._title = config.title;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_networks - computed: true, optional: true, required: false
  private _allowedNetworks?: string[]; 
  public get allowedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_networks'));
  }
  public set allowedNetworks(value: string[]) {
    this._allowedNetworks = value;
  }
  public resetAllowedNetworks() {
    this._allowedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNetworksInput() {
    return this._allowedNetworks;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_nb_instance - computed: true, optional: false, required: false
  public get currentNbInstance() {
    return this.getNumberAttribute('current_nb_instance');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // exposed_port - computed: true, optional: true, required: false
  private _exposedPort?: string; 
  public get exposedPort() {
    return this.getStringAttribute('exposed_port');
  }
  public set exposedPort(value: string) {
    this._exposedPort = value;
  }
  public resetExposedPort() {
    this._exposedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedPortInput() {
    return this._exposedPort;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // input_id - computed: true, optional: false, required: false
  public get inputId() {
    return this.getStringAttribute('input_id');
  }

  // is_restart_required - computed: true, optional: false, required: false
  public get isRestartRequired() {
    return this.getBooleanAttribute('is_restart_required');
  }

  // max_scale_instance - computed: false, optional: true, required: false
  private _maxScaleInstance?: number; 
  public get maxScaleInstance() {
    return this.getNumberAttribute('max_scale_instance');
  }
  public set maxScaleInstance(value: number) {
    this._maxScaleInstance = value;
  }
  public resetMaxScaleInstance() {
    this._maxScaleInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleInstanceInput() {
    return this._maxScaleInstance;
  }

  // min_scale_instance - computed: false, optional: true, required: false
  private _minScaleInstance?: number; 
  public get minScaleInstance() {
    return this.getNumberAttribute('min_scale_instance');
  }
  public set minScaleInstance(value: number) {
    this._minScaleInstance = value;
  }
  public resetMinScaleInstance() {
    this._minScaleInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScaleInstanceInput() {
    return this._minScaleInstance;
  }

  // nb_instance - computed: false, optional: true, required: false
  private _nbInstance?: number; 
  public get nbInstance() {
    return this.getNumberAttribute('nb_instance');
  }
  public set nbInstance(value: number) {
    this._nbInstance = value;
  }
  public resetNbInstance() {
    this._nbInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbInstanceInput() {
    return this._nbInstance;
  }

  // public_address - computed: true, optional: false, required: false
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // ssl_certificate - computed: true, optional: false, required: false
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DbaasLogsInputConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DbaasLogsInputConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedNetworks),
      autoscale: cdktf.booleanToTerraform(this._autoscale),
      description: cdktf.stringToTerraform(this._description),
      engine_id: cdktf.stringToTerraform(this._engineId),
      exposed_port: cdktf.stringToTerraform(this._exposedPort),
      id: cdktf.stringToTerraform(this._id),
      max_scale_instance: cdktf.numberToTerraform(this._maxScaleInstance),
      min_scale_instance: cdktf.numberToTerraform(this._minScaleInstance),
      nb_instance: cdktf.numberToTerraform(this._nbInstance),
      service_name: cdktf.stringToTerraform(this._serviceName),
      stream_id: cdktf.stringToTerraform(this._streamId),
      title: cdktf.stringToTerraform(this._title),
      configuration: dbaasLogsInputConfigurationToTerraform(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      autoscale: {
        value: cdktf.booleanToHclTerraform(this._autoscale),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exposed_port: {
        value: cdktf.stringToHclTerraform(this._exposedPort),
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
      max_scale_instance: {
        value: cdktf.numberToHclTerraform(this._maxScaleInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_scale_instance: {
        value: cdktf.numberToHclTerraform(this._minScaleInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nb_instance: {
        value: cdktf.numberToHclTerraform(this._nbInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: dbaasLogsInputConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbaasLogsInputConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
