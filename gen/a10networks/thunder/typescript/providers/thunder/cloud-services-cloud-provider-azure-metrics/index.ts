// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServicesCloudProviderAzureMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Azure Application Insights; 'disable': Disable Azure Application Insights (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#action CloudServicesCloudProviderAzureMetrics#action}
  */
  readonly action?: string;
  /**
  * Specifies the thunder active partition name separated by a comma for multiple values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#active_partitions CloudServicesCloudProviderAzureMetrics#active_partitions}
  */
  readonly activePartitions?: string;
  /**
  * 'enable': Enable CPS Metrics; 'disable': Disable CPS Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#cps CloudServicesCloudProviderAzureMetrics#cps}
  */
  readonly cps?: string;
  /**
  * 'enable': Enable CPU Metrics; 'disable': Disable CPU Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#cpu CloudServicesCloudProviderAzureMetrics#cpu}
  */
  readonly cpu?: string;
  /**
  * 'enable': Enable Disk Metrics; 'disable': Disable Disk Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#disk CloudServicesCloudProviderAzureMetrics#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#id CloudServicesCloudProviderAzureMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable Interfaces Metrics; 'disable': Disable Interfaces Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#interfaces CloudServicesCloudProviderAzureMetrics#interfaces}
  */
  readonly interfaces?: string;
  /**
  * 'enable': Enable Memory Metrics; 'disable': Disable Memory Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#memory CloudServicesCloudProviderAzureMetrics#memory}
  */
  readonly memory?: string;
  /**
  * 'enable': Enable Packet Drop Metrics; 'disable': Disable Packet Drop Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#packet_drop CloudServicesCloudProviderAzureMetrics#packet_drop}
  */
  readonly packetDrop?: string;
  /**
  * 'enable': Enable Packet Rate Metrics; 'disable': Disable Packet Rate Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#packet_rate CloudServicesCloudProviderAzureMetrics#packet_rate}
  */
  readonly packetRate?: string;
  /**
  * Specifies the Azure Application Insights resource ID or Instance Resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#resource_id CloudServicesCloudProviderAzureMetrics#resource_id}
  */
  readonly resourceId?: string;
  /**
  * 'enable': Enable Server Down Count Metrics; 'disable': Disable Server Down Count Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#server_down_count CloudServicesCloudProviderAzureMetrics#server_down_count}
  */
  readonly serverDownCount?: string;
  /**
  * 'enable': Enable Server Down Percentage Metrics; 'disable': Disable Server Down Percentage Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#server_down_percentage CloudServicesCloudProviderAzureMetrics#server_down_percentage}
  */
  readonly serverDownPercentage?: string;
  /**
  * 'enable': Enable Server Error Metrics; 'disable': Disable Server Error Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#server_error CloudServicesCloudProviderAzureMetrics#server_error}
  */
  readonly serverError?: string;
  /**
  * 'enable': Enable Sessions Metrics; 'disable': Disable Sessions Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#sessions CloudServicesCloudProviderAzureMetrics#sessions}
  */
  readonly sessions?: string;
  /**
  * 'enable': Enable SSL Cert Metrics; 'disable': Disable SSL Cert Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#ssl_cert CloudServicesCloudProviderAzureMetrics#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * 'enable': Enable Throughput Metrics; 'disable': Disable Throughput Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#throughput CloudServicesCloudProviderAzureMetrics#throughput}
  */
  readonly throughput?: string;
  /**
  * 'enable': Enable TPS Metrics; 'disable': Disable TPS Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#tps CloudServicesCloudProviderAzureMetrics#tps}
  */
  readonly tps?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#uuid CloudServicesCloudProviderAzureMetrics#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics thunder_cloud_services_cloud_provider_azure_metrics}
*/
export class CloudServicesCloudProviderAzureMetrics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_cloud_provider_azure_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServicesCloudProviderAzureMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServicesCloudProviderAzureMetrics to import
  * @param importFromId The id of the existing CloudServicesCloudProviderAzureMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServicesCloudProviderAzureMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_cloud_provider_azure_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_azure_metrics thunder_cloud_services_cloud_provider_azure_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServicesCloudProviderAzureMetricsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudServicesCloudProviderAzureMetricsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_cloud_provider_azure_metrics',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._activePartitions = config.activePartitions;
    this._cps = config.cps;
    this._cpu = config.cpu;
    this._disk = config.disk;
    this._id = config.id;
    this._interfaces = config.interfaces;
    this._memory = config.memory;
    this._packetDrop = config.packetDrop;
    this._packetRate = config.packetRate;
    this._resourceId = config.resourceId;
    this._serverDownCount = config.serverDownCount;
    this._serverDownPercentage = config.serverDownPercentage;
    this._serverError = config.serverError;
    this._sessions = config.sessions;
    this._sslCert = config.sslCert;
    this._throughput = config.throughput;
    this._tps = config.tps;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // active_partitions - computed: false, optional: true, required: false
  private _activePartitions?: string; 
  public get activePartitions() {
    return this.getStringAttribute('active_partitions');
  }
  public set activePartitions(value: string) {
    this._activePartitions = value;
  }
  public resetActivePartitions() {
    this._activePartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activePartitionsInput() {
    return this._activePartitions;
  }

  // cps - computed: false, optional: true, required: false
  private _cps?: string; 
  public get cps() {
    return this.getStringAttribute('cps');
  }
  public set cps(value: string) {
    this._cps = value;
  }
  public resetCps() {
    this._cps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsInput() {
    return this._cps;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
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

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string; 
  public get interfaces() {
    return this.getStringAttribute('interfaces');
  }
  public set interfaces(value: string) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // packet_drop - computed: false, optional: true, required: false
  private _packetDrop?: string; 
  public get packetDrop() {
    return this.getStringAttribute('packet_drop');
  }
  public set packetDrop(value: string) {
    this._packetDrop = value;
  }
  public resetPacketDrop() {
    this._packetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDropInput() {
    return this._packetDrop;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: string; 
  public get packetRate() {
    return this.getStringAttribute('packet_rate');
  }
  public set packetRate(value: string) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // server_down_count - computed: false, optional: true, required: false
  private _serverDownCount?: string; 
  public get serverDownCount() {
    return this.getStringAttribute('server_down_count');
  }
  public set serverDownCount(value: string) {
    this._serverDownCount = value;
  }
  public resetServerDownCount() {
    this._serverDownCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDownCountInput() {
    return this._serverDownCount;
  }

  // server_down_percentage - computed: false, optional: true, required: false
  private _serverDownPercentage?: string; 
  public get serverDownPercentage() {
    return this.getStringAttribute('server_down_percentage');
  }
  public set serverDownPercentage(value: string) {
    this._serverDownPercentage = value;
  }
  public resetServerDownPercentage() {
    this._serverDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDownPercentageInput() {
    return this._serverDownPercentage;
  }

  // server_error - computed: false, optional: true, required: false
  private _serverError?: string; 
  public get serverError() {
    return this.getStringAttribute('server_error');
  }
  public set serverError(value: string) {
    this._serverError = value;
  }
  public resetServerError() {
    this._serverError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrorInput() {
    return this._serverError;
  }

  // sessions - computed: false, optional: true, required: false
  private _sessions?: string; 
  public get sessions() {
    return this.getStringAttribute('sessions');
  }
  public set sessions(value: string) {
    this._sessions = value;
  }
  public resetSessions() {
    this._sessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions;
  }

  // ssl_cert - computed: false, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // tps - computed: false, optional: true, required: false
  private _tps?: string; 
  public get tps() {
    return this.getStringAttribute('tps');
  }
  public set tps(value: string) {
    this._tps = value;
  }
  public resetTps() {
    this._tps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpsInput() {
    return this._tps;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      active_partitions: cdktf.stringToTerraform(this._activePartitions),
      cps: cdktf.stringToTerraform(this._cps),
      cpu: cdktf.stringToTerraform(this._cpu),
      disk: cdktf.stringToTerraform(this._disk),
      id: cdktf.stringToTerraform(this._id),
      interfaces: cdktf.stringToTerraform(this._interfaces),
      memory: cdktf.stringToTerraform(this._memory),
      packet_drop: cdktf.stringToTerraform(this._packetDrop),
      packet_rate: cdktf.stringToTerraform(this._packetRate),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      server_down_count: cdktf.stringToTerraform(this._serverDownCount),
      server_down_percentage: cdktf.stringToTerraform(this._serverDownPercentage),
      server_error: cdktf.stringToTerraform(this._serverError),
      sessions: cdktf.stringToTerraform(this._sessions),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      throughput: cdktf.stringToTerraform(this._throughput),
      tps: cdktf.stringToTerraform(this._tps),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_partitions: {
        value: cdktf.stringToHclTerraform(this._activePartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cps: {
        value: cdktf.stringToHclTerraform(this._cps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.stringToHclTerraform(this._disk),
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
      interfaces: {
        value: cdktf.stringToHclTerraform(this._interfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_drop: {
        value: cdktf.stringToHclTerraform(this._packetDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_rate: {
        value: cdktf.stringToHclTerraform(this._packetRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_down_count: {
        value: cdktf.stringToHclTerraform(this._serverDownCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_down_percentage: {
        value: cdktf.stringToHclTerraform(this._serverDownPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_error: {
        value: cdktf.stringToHclTerraform(this._serverError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessions: {
        value: cdktf.stringToHclTerraform(this._sessions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert: {
        value: cdktf.stringToHclTerraform(this._sslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktf.stringToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tps: {
        value: cdktf.stringToHclTerraform(this._tps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
