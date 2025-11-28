// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmRebootInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter has been disused. We recommend using StopType instead. Note that ForceReboot and StopType parameters cannot be specified at the same time. Whether to forcibly restart an instance after a normal restart fails. Valid values are `TRUE` and `FALSE`. Default value: FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance#force_reboot CvmRebootInstance#force_reboot}
  */
  readonly forceReboot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance#id CvmRebootInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance#instance_id CvmRebootInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Shutdown type. Valid values: `SOFT`: soft shutdown; `HARD`: hard shutdown; `SOFT_FIRST`: perform a soft shutdown first, and perform a hard shutdown if the soft shutdown fails. Default value: SOFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance#stop_type CvmRebootInstance#stop_type}
  */
  readonly stopType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance tencentcloud_cvm_reboot_instance}
*/
export class CvmRebootInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_reboot_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmRebootInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmRebootInstance to import
  * @param importFromId The id of the existing CvmRebootInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmRebootInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_reboot_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_reboot_instance tencentcloud_cvm_reboot_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmRebootInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CvmRebootInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_reboot_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceReboot = config.forceReboot;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._stopType = config.stopType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_reboot - computed: false, optional: true, required: false
  private _forceReboot?: boolean | cdktf.IResolvable; 
  public get forceReboot() {
    return this.getBooleanAttribute('force_reboot');
  }
  public set forceReboot(value: boolean | cdktf.IResolvable) {
    this._forceReboot = value;
  }
  public resetForceReboot() {
    this._forceReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRebootInput() {
    return this._forceReboot;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // stop_type - computed: false, optional: true, required: false
  private _stopType?: string; 
  public get stopType() {
    return this.getStringAttribute('stop_type');
  }
  public set stopType(value: string) {
    this._stopType = value;
  }
  public resetStopType() {
    this._stopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTypeInput() {
    return this._stopType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_reboot: cdktf.booleanToTerraform(this._forceReboot),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      stop_type: cdktf.stringToTerraform(this._stopType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_reboot: {
        value: cdktf.booleanToHclTerraform(this._forceReboot),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_type: {
        value: cdktf.stringToHclTerraform(this._stopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
