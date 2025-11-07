// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips#id SystemIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips#override_signature_hold_by_id SystemIps#override_signature_hold_by_id}
  */
  readonly overrideSignatureHoldById?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips#signature_hold_time SystemIps#signature_hold_time}
  */
  readonly signatureHoldTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips#vdomparam SystemIps#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips fortios_system_ips}
*/
export class SystemIps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIps to import
  * @param importFromId The id of the existing SystemIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ips fortios_system_ips} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_ips',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._overrideSignatureHoldById = config.overrideSignatureHoldById;
    this._signatureHoldTime = config.signatureHoldTime;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // override_signature_hold_by_id - computed: true, optional: true, required: false
  private _overrideSignatureHoldById?: string; 
  public get overrideSignatureHoldById() {
    return this.getStringAttribute('override_signature_hold_by_id');
  }
  public set overrideSignatureHoldById(value: string) {
    this._overrideSignatureHoldById = value;
  }
  public resetOverrideSignatureHoldById() {
    this._overrideSignatureHoldById = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSignatureHoldByIdInput() {
    return this._overrideSignatureHoldById;
  }

  // signature_hold_time - computed: true, optional: true, required: false
  private _signatureHoldTime?: string; 
  public get signatureHoldTime() {
    return this.getStringAttribute('signature_hold_time');
  }
  public set signatureHoldTime(value: string) {
    this._signatureHoldTime = value;
  }
  public resetSignatureHoldTime() {
    this._signatureHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHoldTimeInput() {
    return this._signatureHoldTime;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      override_signature_hold_by_id: cdktf.stringToTerraform(this._overrideSignatureHoldById),
      signature_hold_time: cdktf.stringToTerraform(this._signatureHoldTime),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_signature_hold_by_id: {
        value: cdktf.stringToHclTerraform(this._overrideSignatureHoldById),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_hold_time: {
        value: cdktf.stringToHclTerraform(this._signatureHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
