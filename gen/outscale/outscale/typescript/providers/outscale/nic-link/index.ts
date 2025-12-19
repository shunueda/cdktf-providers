// https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NicLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link#device_number NicLink#device_number}
  */
  readonly deviceNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link#id NicLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link#nic_id NicLink#nic_id}
  */
  readonly nicId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link#vm_id NicLink#vm_id}
  */
  readonly vmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link outscale_nic_link}
*/
export class NicLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_nic_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NicLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NicLink to import
  * @param importFromId The id of the existing NicLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NicLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_nic_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/nic_link outscale_nic_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NicLinkConfig
  */
  public constructor(scope: Construct, id: string, config: NicLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_nic_link',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceNumber = config.deviceNumber;
    this._id = config.id;
    this._nicId = config.nicId;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_on_vm_deletion - computed: true, optional: false, required: false
  public get deleteOnVmDeletion() {
    return this.getBooleanAttribute('delete_on_vm_deletion');
  }

  // device_number - computed: false, optional: false, required: true
  private _deviceNumber?: number; 
  public get deviceNumber() {
    return this.getNumberAttribute('device_number');
  }
  public set deviceNumber(value: number) {
    this._deviceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNumberInput() {
    return this._deviceNumber;
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

  // link_nic_id - computed: true, optional: false, required: false
  public get linkNicId() {
    return this.getStringAttribute('link_nic_id');
  }

  // nic_id - computed: false, optional: false, required: true
  private _nicId?: string; 
  public get nicId() {
    return this.getStringAttribute('nic_id');
  }
  public set nicId(value: string) {
    this._nicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicIdInput() {
    return this._nicId;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vm_account_id - computed: true, optional: false, required: false
  public get vmAccountId() {
    return this.getStringAttribute('vm_account_id');
  }

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_number: cdktf.numberToTerraform(this._deviceNumber),
      id: cdktf.stringToTerraform(this._id),
      nic_id: cdktf.stringToTerraform(this._nicId),
      vm_id: cdktf.stringToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_number: {
        value: cdktf.numberToHclTerraform(this._deviceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic_id: {
        value: cdktf.stringToHclTerraform(this._nicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
