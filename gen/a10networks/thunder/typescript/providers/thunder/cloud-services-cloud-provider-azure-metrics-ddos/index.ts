// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServicesCloudProviderAzureMetricsDdosAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable All DDoS Entries and Zones Stats; 'disable': Disable All DDoS Entries and Zones Stats;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos#entry_zone CloudServicesCloudProviderAzureMetricsDdosA#entry_zone}
  */
  readonly entryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos#id CloudServicesCloudProviderAzureMetricsDdosA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable All Port Metrics; 'disable': Disable All Port Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos#port CloudServicesCloudProviderAzureMetricsDdosA#port}
  */
  readonly port?: string;
  /**
  * 'enable': Enable All TCP Metrics; 'disable': Disable All TCP Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos#tcp CloudServicesCloudProviderAzureMetricsDdosA#tcp}
  */
  readonly tcp?: string;
  /**
  * 'enable': Enable All UDP Metrics; 'disable': Disable All UDP Metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos#udp CloudServicesCloudProviderAzureMetricsDdosA#udp}
  */
  readonly udp?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos#uuid CloudServicesCloudProviderAzureMetricsDdosA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos thunder_cloud_services_cloud_provider_azure_metrics_ddos}
*/
export class CloudServicesCloudProviderAzureMetricsDdosA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_cloud_provider_azure_metrics_ddos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServicesCloudProviderAzureMetricsDdosA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServicesCloudProviderAzureMetricsDdosA to import
  * @param importFromId The id of the existing CloudServicesCloudProviderAzureMetricsDdosA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServicesCloudProviderAzureMetricsDdosA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_cloud_provider_azure_metrics_ddos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_azure_metrics_ddos thunder_cloud_services_cloud_provider_azure_metrics_ddos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServicesCloudProviderAzureMetricsDdosAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudServicesCloudProviderAzureMetricsDdosAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_cloud_provider_azure_metrics_ddos',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entryZone = config.entryZone;
    this._id = config.id;
    this._port = config.port;
    this._tcp = config.tcp;
    this._udp = config.udp;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entry_zone - computed: false, optional: true, required: false
  private _entryZone?: string; 
  public get entryZone() {
    return this.getStringAttribute('entry_zone');
  }
  public set entryZone(value: string) {
    this._entryZone = value;
  }
  public resetEntryZone() {
    this._entryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryZoneInput() {
    return this._entryZone;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
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
      entry_zone: cdktf.stringToTerraform(this._entryZone),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.stringToTerraform(this._port),
      tcp: cdktf.stringToTerraform(this._tcp),
      udp: cdktf.stringToTerraform(this._udp),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry_zone: {
        value: cdktf.stringToHclTerraform(this._entryZone),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp: {
        value: cdktf.stringToHclTerraform(this._tcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp: {
        value: cdktf.stringToHclTerraform(this._udp),
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
