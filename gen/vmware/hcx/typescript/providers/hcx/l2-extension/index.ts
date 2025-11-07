// https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2ExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#appliance_id L2Extension#appliance_id}
  */
  readonly applianceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#destination_t1 L2Extension#destination_t1}
  */
  readonly destinationT1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#egress_optimization L2Extension#egress_optimization}
  */
  readonly egressOptimization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#gateway L2Extension#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#id L2Extension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#mon L2Extension#mon}
  */
  readonly mon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#netmask L2Extension#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#network_type L2Extension#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#service_mesh_id L2Extension#service_mesh_id}
  */
  readonly serviceMeshId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#site_pairing L2Extension#site_pairing}
  */
  readonly sitePairing: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#source_network L2Extension#source_network}
  */
  readonly sourceNetwork: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension hcx_l2_extension}
*/
export class L2Extension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcx_l2_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2Extension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2Extension to import
  * @param importFromId The id of the existing L2Extension that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2Extension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcx_l2_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/l2_extension hcx_l2_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2ExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: L2ExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'hcx_l2_extension',
      terraformGeneratorMetadata: {
        providerName: 'hcx',
        providerVersion: '0.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applianceId = config.applianceId;
    this._destinationT1 = config.destinationT1;
    this._egressOptimization = config.egressOptimization;
    this._gateway = config.gateway;
    this._id = config.id;
    this._mon = config.mon;
    this._netmask = config.netmask;
    this._networkType = config.networkType;
    this._serviceMeshId = config.serviceMeshId;
    this._sitePairing = config.sitePairing;
    this._sourceNetwork = config.sourceNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_id - computed: false, optional: true, required: false
  private _applianceId?: string; 
  public get applianceId() {
    return this.getStringAttribute('appliance_id');
  }
  public set applianceId(value: string) {
    this._applianceId = value;
  }
  public resetApplianceId() {
    this._applianceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceIdInput() {
    return this._applianceId;
  }

  // destination_t1 - computed: false, optional: false, required: true
  private _destinationT1?: string; 
  public get destinationT1() {
    return this.getStringAttribute('destination_t1');
  }
  public set destinationT1(value: string) {
    this._destinationT1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationT1Input() {
    return this._destinationT1;
  }

  // egress_optimization - computed: false, optional: true, required: false
  private _egressOptimization?: boolean | cdktf.IResolvable; 
  public get egressOptimization() {
    return this.getBooleanAttribute('egress_optimization');
  }
  public set egressOptimization(value: boolean | cdktf.IResolvable) {
    this._egressOptimization = value;
  }
  public resetEgressOptimization() {
    this._egressOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressOptimizationInput() {
    return this._egressOptimization;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // mon - computed: false, optional: true, required: false
  private _mon?: boolean | cdktf.IResolvable; 
  public get mon() {
    return this.getBooleanAttribute('mon');
  }
  public set mon(value: boolean | cdktf.IResolvable) {
    this._mon = value;
  }
  public resetMon() {
    this._mon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monInput() {
    return this._mon;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // service_mesh_id - computed: false, optional: false, required: true
  private _serviceMeshId?: string; 
  public get serviceMeshId() {
    return this.getStringAttribute('service_mesh_id');
  }
  public set serviceMeshId(value: string) {
    this._serviceMeshId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMeshIdInput() {
    return this._serviceMeshId;
  }

  // site_pairing - computed: false, optional: false, required: true
  private _sitePairing?: { [key: string]: string }; 
  public get sitePairing() {
    return this.getStringMapAttribute('site_pairing');
  }
  public set sitePairing(value: { [key: string]: string }) {
    this._sitePairing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePairingInput() {
    return this._sitePairing;
  }

  // source_network - computed: false, optional: false, required: true
  private _sourceNetwork?: string; 
  public get sourceNetwork() {
    return this.getStringAttribute('source_network');
  }
  public set sourceNetwork(value: string) {
    this._sourceNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInput() {
    return this._sourceNetwork;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appliance_id: cdktf.stringToTerraform(this._applianceId),
      destination_t1: cdktf.stringToTerraform(this._destinationT1),
      egress_optimization: cdktf.booleanToTerraform(this._egressOptimization),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      mon: cdktf.booleanToTerraform(this._mon),
      netmask: cdktf.stringToTerraform(this._netmask),
      network_type: cdktf.stringToTerraform(this._networkType),
      service_mesh_id: cdktf.stringToTerraform(this._serviceMeshId),
      site_pairing: cdktf.hashMapper(cdktf.stringToTerraform)(this._sitePairing),
      source_network: cdktf.stringToTerraform(this._sourceNetwork),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appliance_id: {
        value: cdktf.stringToHclTerraform(this._applianceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_t1: {
        value: cdktf.stringToHclTerraform(this._destinationT1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_optimization: {
        value: cdktf.booleanToHclTerraform(this._egressOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      mon: {
        value: cdktf.booleanToHclTerraform(this._mon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_mesh_id: {
        value: cdktf.stringToHclTerraform(this._serviceMeshId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_pairing: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sitePairing),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source_network: {
        value: cdktf.stringToHclTerraform(this._sourceNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
