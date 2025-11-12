// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP address used for config sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device#configsync_ip CmDevice#configsync_ip}
  */
  readonly configsyncIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device#id CmDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address used for state mirroring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device#mirror_ip CmDevice#mirror_ip}
  */
  readonly mirrorIp?: string;
  /**
  * Secondary IP address used for state mirroring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device#mirror_secondary_ip CmDevice#mirror_secondary_ip}
  */
  readonly mirrorSecondaryIp?: string;
  /**
  * Address of the Device which needs to be Deviceensed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device#name CmDevice#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device bigip_cm_device}
*/
export class CmDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_cm_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmDevice to import
  * @param importFromId The id of the existing CmDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_cm_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_device bigip_cm_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: CmDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_cm_device',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configsyncIp = config.configsyncIp;
    this._id = config.id;
    this._mirrorIp = config.mirrorIp;
    this._mirrorSecondaryIp = config.mirrorSecondaryIp;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configsync_ip - computed: false, optional: false, required: true
  private _configsyncIp?: string; 
  public get configsyncIp() {
    return this.getStringAttribute('configsync_ip');
  }
  public set configsyncIp(value: string) {
    this._configsyncIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configsyncIpInput() {
    return this._configsyncIp;
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

  // mirror_ip - computed: false, optional: true, required: false
  private _mirrorIp?: string; 
  public get mirrorIp() {
    return this.getStringAttribute('mirror_ip');
  }
  public set mirrorIp(value: string) {
    this._mirrorIp = value;
  }
  public resetMirrorIp() {
    this._mirrorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIpInput() {
    return this._mirrorIp;
  }

  // mirror_secondary_ip - computed: false, optional: true, required: false
  private _mirrorSecondaryIp?: string; 
  public get mirrorSecondaryIp() {
    return this.getStringAttribute('mirror_secondary_ip');
  }
  public set mirrorSecondaryIp(value: string) {
    this._mirrorSecondaryIp = value;
  }
  public resetMirrorSecondaryIp() {
    this._mirrorSecondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorSecondaryIpInput() {
    return this._mirrorSecondaryIp;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configsync_ip: cdktf.stringToTerraform(this._configsyncIp),
      id: cdktf.stringToTerraform(this._id),
      mirror_ip: cdktf.stringToTerraform(this._mirrorIp),
      mirror_secondary_ip: cdktf.stringToTerraform(this._mirrorSecondaryIp),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configsync_ip: {
        value: cdktf.stringToHclTerraform(this._configsyncIp),
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
      mirror_ip: {
        value: cdktf.stringToHclTerraform(this._mirrorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_secondary_ip: {
        value: cdktf.stringToHclTerraform(this._mirrorSecondaryIp),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
