// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServicesCloudProviderVmwareLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable VMware vRealize Log Insight; 'disable': Disable VMware vRealize Log Insight (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log#action CloudServicesCloudProviderVmwareLog#action}
  */
  readonly action?: string;
  /**
  * Specifies the thunder active partition name separated by a comma for multiple values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log#active_partitions CloudServicesCloudProviderVmwareLog#active_partitions}
  */
  readonly activePartitions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log#id CloudServicesCloudProviderVmwareLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log#uuid CloudServicesCloudProviderVmwareLog#uuid}
  */
  readonly uuid?: string;
  /**
  * Specifies the VMware vRLI host IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log#vrli_host CloudServicesCloudProviderVmwareLog#vrli_host}
  */
  readonly vrliHost?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log thunder_cloud_services_cloud_provider_vmware_log}
*/
export class CloudServicesCloudProviderVmwareLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_cloud_provider_vmware_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServicesCloudProviderVmwareLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServicesCloudProviderVmwareLog to import
  * @param importFromId The id of the existing CloudServicesCloudProviderVmwareLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServicesCloudProviderVmwareLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_cloud_provider_vmware_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cloud_services_cloud_provider_vmware_log thunder_cloud_services_cloud_provider_vmware_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServicesCloudProviderVmwareLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudServicesCloudProviderVmwareLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_cloud_provider_vmware_log',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._vrliHost = config.vrliHost;
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

  // vrli_host - computed: false, optional: true, required: false
  private _vrliHost?: string; 
  public get vrliHost() {
    return this.getStringAttribute('vrli_host');
  }
  public set vrliHost(value: string) {
    this._vrliHost = value;
  }
  public resetVrliHost() {
    this._vrliHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrliHostInput() {
    return this._vrliHost;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      active_partitions: cdktf.stringToTerraform(this._activePartitions),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrli_host: cdktf.stringToTerraform(this._vrliHost),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      vrli_host: {
        value: cdktf.stringToHclTerraform(this._vrliHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
