// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSysdigFargateWorkloadAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * use bare pdig to instrument the containers in the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#bare_pdig_on_containers DataSysdigFargateWorkloadAgent#bare_pdig_on_containers}
  */
  readonly barePdigOnContainers?: string[];
  /**
  * the collector host to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#collector_host DataSysdigFargateWorkloadAgent#collector_host}
  */
  readonly collectorHost?: string;
  /**
  * the collector port to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#collector_port DataSysdigFargateWorkloadAgent#collector_port}
  */
  readonly collectorPort?: string;
  /**
  * the input Fargate container definitions to instrument with the Sysdig workload agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#container_definitions DataSysdigFargateWorkloadAgent#container_definitions}
  */
  readonly containerDefinitions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#id DataSysdigFargateWorkloadAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * list of containers to not add instrumentation to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#ignore_containers DataSysdigFargateWorkloadAgent#ignore_containers}
  */
  readonly ignoreContainers?: string[];
  /**
  * registry authentication secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#image_auth_secret DataSysdigFargateWorkloadAgent#image_auth_secret}
  */
  readonly imageAuthSecret?: string;
  /**
  * The number of cpu units dedicated to the instrumentation container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#instrumentation_cpu DataSysdigFargateWorkloadAgent#instrumentation_cpu}
  */
  readonly instrumentationCpu?: number;
  /**
  * Should the instrumentation container be marked as essential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#instrumentation_essential DataSysdigFargateWorkloadAgent#instrumentation_essential}
  */
  readonly instrumentationEssential?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount (in MiB) of memory used by the instrumentation container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#instrumentation_memory_limit DataSysdigFargateWorkloadAgent#instrumentation_memory_limit}
  */
  readonly instrumentationMemoryLimit?: number;
  /**
  * The minimum amount (in MiB) of memory reserved for the instrumentation container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#instrumentation_memory_reservation DataSysdigFargateWorkloadAgent#instrumentation_memory_reservation}
  */
  readonly instrumentationMemoryReservation?: number;
  /**
  * the orchestrator host to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#orchestrator_host DataSysdigFargateWorkloadAgent#orchestrator_host}
  */
  readonly orchestratorHost?: string;
  /**
  * the orchestrator port to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#orchestrator_port DataSysdigFargateWorkloadAgent#orchestrator_port}
  */
  readonly orchestratorPort?: string;
  /**
  * The priority of the agent. Can be 'security' or 'availability'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#priority DataSysdigFargateWorkloadAgent#priority}
  */
  readonly priority?: string;
  /**
  * Sidecar mode: auto/force/(empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#sidecar DataSysdigFargateWorkloadAgent#sidecar}
  */
  readonly sidecar?: string;
  /**
  * the Sysdig access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#sysdig_access_key DataSysdigFargateWorkloadAgent#sysdig_access_key}
  */
  readonly sysdigAccessKey?: string;
  /**
  * the instrumentation logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#sysdig_logging DataSysdigFargateWorkloadAgent#sysdig_logging}
  */
  readonly sysdigLogging?: string;
  /**
  * the Sysdig workload agent image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#workload_agent_image DataSysdigFargateWorkloadAgent#workload_agent_image}
  */
  readonly workloadAgentImage: string;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#log_configuration DataSysdigFargateWorkloadAgent#log_configuration}
  */
  readonly logConfiguration?: DataSysdigFargateWorkloadAgentLogConfiguration;
}
export interface DataSysdigFargateWorkloadAgentLogConfiguration {
  /**
  * The log group where the awslogs driver will send log streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#group DataSysdigFargateWorkloadAgent#group}
  */
  readonly group: string;
  /**
  * Region for the log group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#region DataSysdigFargateWorkloadAgent#region}
  */
  readonly region: string;
  /**
  * Prefix for the instrumentation log stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#stream_prefix DataSysdigFargateWorkloadAgent#stream_prefix}
  */
  readonly streamPrefix: string;
}

export function dataSysdigFargateWorkloadAgentLogConfigurationToTerraform(struct?: DataSysdigFargateWorkloadAgentLogConfigurationOutputReference | DataSysdigFargateWorkloadAgentLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    region: cdktf.stringToTerraform(struct!.region),
    stream_prefix: cdktf.stringToTerraform(struct!.streamPrefix),
  }
}


export function dataSysdigFargateWorkloadAgentLogConfigurationToHclTerraform(struct?: DataSysdigFargateWorkloadAgentLogConfigurationOutputReference | DataSysdigFargateWorkloadAgentLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_prefix: {
      value: cdktf.stringToHclTerraform(struct!.streamPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSysdigFargateWorkloadAgentLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSysdigFargateWorkloadAgentLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._streamPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamPrefix = this._streamPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigFargateWorkloadAgentLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._region = undefined;
      this._streamPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._region = value.region;
      this._streamPrefix = value.streamPrefix;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // stream_prefix - computed: false, optional: false, required: true
  private _streamPrefix?: string; 
  public get streamPrefix() {
    return this.getStringAttribute('stream_prefix');
  }
  public set streamPrefix(value: string) {
    this._streamPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPrefixInput() {
    return this._streamPrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent sysdig_fargate_workload_agent}
*/
export class DataSysdigFargateWorkloadAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_fargate_workload_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSysdigFargateWorkloadAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSysdigFargateWorkloadAgent to import
  * @param importFromId The id of the existing DataSysdigFargateWorkloadAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSysdigFargateWorkloadAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_fargate_workload_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/fargate_workload_agent sysdig_fargate_workload_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSysdigFargateWorkloadAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataSysdigFargateWorkloadAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_fargate_workload_agent',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.3.1',
        providerVersionConstraint: '3.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._barePdigOnContainers = config.barePdigOnContainers;
    this._collectorHost = config.collectorHost;
    this._collectorPort = config.collectorPort;
    this._containerDefinitions = config.containerDefinitions;
    this._id = config.id;
    this._ignoreContainers = config.ignoreContainers;
    this._imageAuthSecret = config.imageAuthSecret;
    this._instrumentationCpu = config.instrumentationCpu;
    this._instrumentationEssential = config.instrumentationEssential;
    this._instrumentationMemoryLimit = config.instrumentationMemoryLimit;
    this._instrumentationMemoryReservation = config.instrumentationMemoryReservation;
    this._orchestratorHost = config.orchestratorHost;
    this._orchestratorPort = config.orchestratorPort;
    this._priority = config.priority;
    this._sidecar = config.sidecar;
    this._sysdigAccessKey = config.sysdigAccessKey;
    this._sysdigLogging = config.sysdigLogging;
    this._workloadAgentImage = config.workloadAgentImage;
    this._logConfiguration.internalValue = config.logConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bare_pdig_on_containers - computed: false, optional: true, required: false
  private _barePdigOnContainers?: string[]; 
  public get barePdigOnContainers() {
    return this.getListAttribute('bare_pdig_on_containers');
  }
  public set barePdigOnContainers(value: string[]) {
    this._barePdigOnContainers = value;
  }
  public resetBarePdigOnContainers() {
    this._barePdigOnContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barePdigOnContainersInput() {
    return this._barePdigOnContainers;
  }

  // collector_host - computed: false, optional: true, required: false
  private _collectorHost?: string; 
  public get collectorHost() {
    return this.getStringAttribute('collector_host');
  }
  public set collectorHost(value: string) {
    this._collectorHost = value;
  }
  public resetCollectorHost() {
    this._collectorHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorHostInput() {
    return this._collectorHost;
  }

  // collector_port - computed: false, optional: true, required: false
  private _collectorPort?: string; 
  public get collectorPort() {
    return this.getStringAttribute('collector_port');
  }
  public set collectorPort(value: string) {
    this._collectorPort = value;
  }
  public resetCollectorPort() {
    this._collectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPortInput() {
    return this._collectorPort;
  }

  // container_definitions - computed: false, optional: false, required: true
  private _containerDefinitions?: string; 
  public get containerDefinitions() {
    return this.getStringAttribute('container_definitions');
  }
  public set containerDefinitions(value: string) {
    this._containerDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionsInput() {
    return this._containerDefinitions;
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

  // ignore_containers - computed: false, optional: true, required: false
  private _ignoreContainers?: string[]; 
  public get ignoreContainers() {
    return this.getListAttribute('ignore_containers');
  }
  public set ignoreContainers(value: string[]) {
    this._ignoreContainers = value;
  }
  public resetIgnoreContainers() {
    this._ignoreContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreContainersInput() {
    return this._ignoreContainers;
  }

  // image_auth_secret - computed: false, optional: true, required: false
  private _imageAuthSecret?: string; 
  public get imageAuthSecret() {
    return this.getStringAttribute('image_auth_secret');
  }
  public set imageAuthSecret(value: string) {
    this._imageAuthSecret = value;
  }
  public resetImageAuthSecret() {
    this._imageAuthSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAuthSecretInput() {
    return this._imageAuthSecret;
  }

  // instrumentation_cpu - computed: false, optional: true, required: false
  private _instrumentationCpu?: number; 
  public get instrumentationCpu() {
    return this.getNumberAttribute('instrumentation_cpu');
  }
  public set instrumentationCpu(value: number) {
    this._instrumentationCpu = value;
  }
  public resetInstrumentationCpu() {
    this._instrumentationCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationCpuInput() {
    return this._instrumentationCpu;
  }

  // instrumentation_essential - computed: false, optional: true, required: false
  private _instrumentationEssential?: boolean | cdktf.IResolvable; 
  public get instrumentationEssential() {
    return this.getBooleanAttribute('instrumentation_essential');
  }
  public set instrumentationEssential(value: boolean | cdktf.IResolvable) {
    this._instrumentationEssential = value;
  }
  public resetInstrumentationEssential() {
    this._instrumentationEssential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationEssentialInput() {
    return this._instrumentationEssential;
  }

  // instrumentation_memory_limit - computed: false, optional: true, required: false
  private _instrumentationMemoryLimit?: number; 
  public get instrumentationMemoryLimit() {
    return this.getNumberAttribute('instrumentation_memory_limit');
  }
  public set instrumentationMemoryLimit(value: number) {
    this._instrumentationMemoryLimit = value;
  }
  public resetInstrumentationMemoryLimit() {
    this._instrumentationMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationMemoryLimitInput() {
    return this._instrumentationMemoryLimit;
  }

  // instrumentation_memory_reservation - computed: false, optional: true, required: false
  private _instrumentationMemoryReservation?: number; 
  public get instrumentationMemoryReservation() {
    return this.getNumberAttribute('instrumentation_memory_reservation');
  }
  public set instrumentationMemoryReservation(value: number) {
    this._instrumentationMemoryReservation = value;
  }
  public resetInstrumentationMemoryReservation() {
    this._instrumentationMemoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationMemoryReservationInput() {
    return this._instrumentationMemoryReservation;
  }

  // orchestrator_host - computed: false, optional: true, required: false
  private _orchestratorHost?: string; 
  public get orchestratorHost() {
    return this.getStringAttribute('orchestrator_host');
  }
  public set orchestratorHost(value: string) {
    this._orchestratorHost = value;
  }
  public resetOrchestratorHost() {
    this._orchestratorHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorHostInput() {
    return this._orchestratorHost;
  }

  // orchestrator_port - computed: false, optional: true, required: false
  private _orchestratorPort?: string; 
  public get orchestratorPort() {
    return this.getStringAttribute('orchestrator_port');
  }
  public set orchestratorPort(value: string) {
    this._orchestratorPort = value;
  }
  public resetOrchestratorPort() {
    this._orchestratorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorPortInput() {
    return this._orchestratorPort;
  }

  // output_container_definitions - computed: true, optional: false, required: false
  public get outputContainerDefinitions() {
    return this.getStringAttribute('output_container_definitions');
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // sidecar - computed: false, optional: true, required: false
  private _sidecar?: string; 
  public get sidecar() {
    return this.getStringAttribute('sidecar');
  }
  public set sidecar(value: string) {
    this._sidecar = value;
  }
  public resetSidecar() {
    this._sidecar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInput() {
    return this._sidecar;
  }

  // sysdig_access_key - computed: false, optional: true, required: false
  private _sysdigAccessKey?: string; 
  public get sysdigAccessKey() {
    return this.getStringAttribute('sysdig_access_key');
  }
  public set sysdigAccessKey(value: string) {
    this._sysdigAccessKey = value;
  }
  public resetSysdigAccessKey() {
    this._sysdigAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigAccessKeyInput() {
    return this._sysdigAccessKey;
  }

  // sysdig_logging - computed: false, optional: true, required: false
  private _sysdigLogging?: string; 
  public get sysdigLogging() {
    return this.getStringAttribute('sysdig_logging');
  }
  public set sysdigLogging(value: string) {
    this._sysdigLogging = value;
  }
  public resetSysdigLogging() {
    this._sysdigLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigLoggingInput() {
    return this._sysdigLogging;
  }

  // workload_agent_image - computed: false, optional: false, required: true
  private _workloadAgentImage?: string; 
  public get workloadAgentImage() {
    return this.getStringAttribute('workload_agent_image');
  }
  public set workloadAgentImage(value: string) {
    this._workloadAgentImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadAgentImageInput() {
    return this._workloadAgentImage;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new DataSysdigFargateWorkloadAgentLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: DataSysdigFargateWorkloadAgentLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bare_pdig_on_containers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._barePdigOnContainers),
      collector_host: cdktf.stringToTerraform(this._collectorHost),
      collector_port: cdktf.stringToTerraform(this._collectorPort),
      container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
      id: cdktf.stringToTerraform(this._id),
      ignore_containers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreContainers),
      image_auth_secret: cdktf.stringToTerraform(this._imageAuthSecret),
      instrumentation_cpu: cdktf.numberToTerraform(this._instrumentationCpu),
      instrumentation_essential: cdktf.booleanToTerraform(this._instrumentationEssential),
      instrumentation_memory_limit: cdktf.numberToTerraform(this._instrumentationMemoryLimit),
      instrumentation_memory_reservation: cdktf.numberToTerraform(this._instrumentationMemoryReservation),
      orchestrator_host: cdktf.stringToTerraform(this._orchestratorHost),
      orchestrator_port: cdktf.stringToTerraform(this._orchestratorPort),
      priority: cdktf.stringToTerraform(this._priority),
      sidecar: cdktf.stringToTerraform(this._sidecar),
      sysdig_access_key: cdktf.stringToTerraform(this._sysdigAccessKey),
      sysdig_logging: cdktf.stringToTerraform(this._sysdigLogging),
      workload_agent_image: cdktf.stringToTerraform(this._workloadAgentImage),
      log_configuration: dataSysdigFargateWorkloadAgentLogConfigurationToTerraform(this._logConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bare_pdig_on_containers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._barePdigOnContainers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      collector_host: {
        value: cdktf.stringToHclTerraform(this._collectorHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_port: {
        value: cdktf.stringToHclTerraform(this._collectorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_definitions: {
        value: cdktf.stringToHclTerraform(this._containerDefinitions),
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
      ignore_containers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreContainers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      image_auth_secret: {
        value: cdktf.stringToHclTerraform(this._imageAuthSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instrumentation_cpu: {
        value: cdktf.numberToHclTerraform(this._instrumentationCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instrumentation_essential: {
        value: cdktf.booleanToHclTerraform(this._instrumentationEssential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instrumentation_memory_limit: {
        value: cdktf.numberToHclTerraform(this._instrumentationMemoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instrumentation_memory_reservation: {
        value: cdktf.numberToHclTerraform(this._instrumentationMemoryReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      orchestrator_host: {
        value: cdktf.stringToHclTerraform(this._orchestratorHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orchestrator_port: {
        value: cdktf.stringToHclTerraform(this._orchestratorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sidecar: {
        value: cdktf.stringToHclTerraform(this._sidecar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_access_key: {
        value: cdktf.stringToHclTerraform(this._sysdigAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_logging: {
        value: cdktf.stringToHclTerraform(this._sysdigLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_agent_image: {
        value: cdktf.stringToHclTerraform(this._workloadAgentImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_configuration: {
        value: dataSysdigFargateWorkloadAgentLogConfigurationToHclTerraform(this._logConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSysdigFargateWorkloadAgentLogConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
