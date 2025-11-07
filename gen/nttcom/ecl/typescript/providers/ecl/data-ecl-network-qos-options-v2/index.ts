// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclNetworkQosOptionsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#aws_service_id DataEclNetworkQosOptionsV2#aws_service_id}
  */
  readonly awsServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#azure_service_id DataEclNetworkQosOptionsV2#azure_service_id}
  */
  readonly azureServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#bandwidth DataEclNetworkQosOptionsV2#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#description DataEclNetworkQosOptionsV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#fic_service_id DataEclNetworkQosOptionsV2#fic_service_id}
  */
  readonly ficServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#gcp_service_id DataEclNetworkQosOptionsV2#gcp_service_id}
  */
  readonly gcpServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#id DataEclNetworkQosOptionsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#interdc_service_id DataEclNetworkQosOptionsV2#interdc_service_id}
  */
  readonly interdcServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#internet_service_id DataEclNetworkQosOptionsV2#internet_service_id}
  */
  readonly internetServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#name DataEclNetworkQosOptionsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#qos_option_id DataEclNetworkQosOptionsV2#qos_option_id}
  */
  readonly qosOptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#qos_type DataEclNetworkQosOptionsV2#qos_type}
  */
  readonly qosType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#service_type DataEclNetworkQosOptionsV2#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#status DataEclNetworkQosOptionsV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#vpn_service_id DataEclNetworkQosOptionsV2#vpn_service_id}
  */
  readonly vpnServiceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2 ecl_network_qos_options_v2}
*/
export class DataEclNetworkQosOptionsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_network_qos_options_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclNetworkQosOptionsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclNetworkQosOptionsV2 to import
  * @param importFromId The id of the existing DataEclNetworkQosOptionsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclNetworkQosOptionsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_network_qos_options_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_qos_options_v2 ecl_network_qos_options_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclNetworkQosOptionsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclNetworkQosOptionsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_network_qos_options_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsServiceId = config.awsServiceId;
    this._azureServiceId = config.azureServiceId;
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._ficServiceId = config.ficServiceId;
    this._gcpServiceId = config.gcpServiceId;
    this._id = config.id;
    this._interdcServiceId = config.interdcServiceId;
    this._internetServiceId = config.internetServiceId;
    this._name = config.name;
    this._qosOptionId = config.qosOptionId;
    this._qosType = config.qosType;
    this._serviceType = config.serviceType;
    this._status = config.status;
    this._vpnServiceId = config.vpnServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_service_id - computed: true, optional: true, required: false
  private _awsServiceId?: string; 
  public get awsServiceId() {
    return this.getStringAttribute('aws_service_id');
  }
  public set awsServiceId(value: string) {
    this._awsServiceId = value;
  }
  public resetAwsServiceId() {
    this._awsServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceIdInput() {
    return this._awsServiceId;
  }

  // azure_service_id - computed: true, optional: true, required: false
  private _azureServiceId?: string; 
  public get azureServiceId() {
    return this.getStringAttribute('azure_service_id');
  }
  public set azureServiceId(value: string) {
    this._azureServiceId = value;
  }
  public resetAzureServiceId() {
    this._azureServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServiceIdInput() {
    return this._azureServiceId;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // description - computed: true, optional: true, required: false
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

  // fic_service_id - computed: true, optional: true, required: false
  private _ficServiceId?: string; 
  public get ficServiceId() {
    return this.getStringAttribute('fic_service_id');
  }
  public set ficServiceId(value: string) {
    this._ficServiceId = value;
  }
  public resetFicServiceId() {
    this._ficServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ficServiceIdInput() {
    return this._ficServiceId;
  }

  // gcp_service_id - computed: true, optional: true, required: false
  private _gcpServiceId?: string; 
  public get gcpServiceId() {
    return this.getStringAttribute('gcp_service_id');
  }
  public set gcpServiceId(value: string) {
    this._gcpServiceId = value;
  }
  public resetGcpServiceId() {
    this._gcpServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceIdInput() {
    return this._gcpServiceId;
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

  // interdc_service_id - computed: true, optional: true, required: false
  private _interdcServiceId?: string; 
  public get interdcServiceId() {
    return this.getStringAttribute('interdc_service_id');
  }
  public set interdcServiceId(value: string) {
    this._interdcServiceId = value;
  }
  public resetInterdcServiceId() {
    this._interdcServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interdcServiceIdInput() {
    return this._interdcServiceId;
  }

  // internet_service_id - computed: true, optional: true, required: false
  private _internetServiceId?: string; 
  public get internetServiceId() {
    return this.getStringAttribute('internet_service_id');
  }
  public set internetServiceId(value: string) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // qos_option_id - computed: true, optional: true, required: false
  private _qosOptionId?: string; 
  public get qosOptionId() {
    return this.getStringAttribute('qos_option_id');
  }
  public set qosOptionId(value: string) {
    this._qosOptionId = value;
  }
  public resetQosOptionId() {
    this._qosOptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosOptionIdInput() {
    return this._qosOptionId;
  }

  // qos_type - computed: true, optional: true, required: false
  private _qosType?: string; 
  public get qosType() {
    return this.getStringAttribute('qos_type');
  }
  public set qosType(value: string) {
    this._qosType = value;
  }
  public resetQosType() {
    this._qosType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosTypeInput() {
    return this._qosType;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vpn_service_id - computed: true, optional: true, required: false
  private _vpnServiceId?: string; 
  public get vpnServiceId() {
    return this.getStringAttribute('vpn_service_id');
  }
  public set vpnServiceId(value: string) {
    this._vpnServiceId = value;
  }
  public resetVpnServiceId() {
    this._vpnServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnServiceIdInput() {
    return this._vpnServiceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_service_id: cdktf.stringToTerraform(this._awsServiceId),
      azure_service_id: cdktf.stringToTerraform(this._azureServiceId),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      fic_service_id: cdktf.stringToTerraform(this._ficServiceId),
      gcp_service_id: cdktf.stringToTerraform(this._gcpServiceId),
      id: cdktf.stringToTerraform(this._id),
      interdc_service_id: cdktf.stringToTerraform(this._interdcServiceId),
      internet_service_id: cdktf.stringToTerraform(this._internetServiceId),
      name: cdktf.stringToTerraform(this._name),
      qos_option_id: cdktf.stringToTerraform(this._qosOptionId),
      qos_type: cdktf.stringToTerraform(this._qosType),
      service_type: cdktf.stringToTerraform(this._serviceType),
      status: cdktf.stringToTerraform(this._status),
      vpn_service_id: cdktf.stringToTerraform(this._vpnServiceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_service_id: {
        value: cdktf.stringToHclTerraform(this._awsServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_service_id: {
        value: cdktf.stringToHclTerraform(this._azureServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
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
      fic_service_id: {
        value: cdktf.stringToHclTerraform(this._ficServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_service_id: {
        value: cdktf.stringToHclTerraform(this._gcpServiceId),
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
      interdc_service_id: {
        value: cdktf.stringToHclTerraform(this._interdcServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_id: {
        value: cdktf.stringToHclTerraform(this._internetServiceId),
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
      qos_option_id: {
        value: cdktf.stringToHclTerraform(this._qosOptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_type: {
        value: cdktf.stringToHclTerraform(this._qosType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_service_id: {
        value: cdktf.stringToHclTerraform(this._vpnServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
