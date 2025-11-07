// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataXenorchestraPifConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the network device. Examples include eth0, eth1, etc. See `ifconfig` for possible devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif#device DataXenorchestraPif#device}
  */
  readonly device: string;
  /**
  * The ID of the host that the PIF belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif#host_id DataXenorchestraPif#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif#id DataXenorchestraPif#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The VLAN the PIF belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif#vlan DataXenorchestraPif#vlan}
  */
  readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif xenorchestra_pif}
*/
export class DataXenorchestraPif extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_pif";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataXenorchestraPif resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataXenorchestraPif to import
  * @param importFromId The id of the existing DataXenorchestraPif that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataXenorchestraPif to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_pif", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pif xenorchestra_pif} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataXenorchestraPifConfig
  */
  public constructor(scope: Construct, id: string, config: DataXenorchestraPifConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_pif',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._hostId = config.hostId;
    this._id = config.id;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
