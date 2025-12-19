// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlmSendAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Send a ELM HA status request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send#ha_status GlmSendA#ha_status}
  */
  readonly haStatus?: number;
  /**
  * Harmony specific single GLM license request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send#harmony GlmSendA#harmony}
  */
  readonly harmony?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send#id GlmSendA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Immediately send a single GLM license request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send#license_request GlmSendA#license_request}
  */
  readonly licenseRequest?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send thunder_glm_send}
*/
export class GlmSendA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_glm_send";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlmSendA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlmSendA to import
  * @param importFromId The id of the existing GlmSendA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlmSendA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_glm_send", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_send thunder_glm_send} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlmSendAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlmSendAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_glm_send',
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
    this._haStatus = config.haStatus;
    this._harmony = config.harmony;
    this._id = config.id;
    this._licenseRequest = config.licenseRequest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ha_status - computed: false, optional: true, required: false
  private _haStatus?: number; 
  public get haStatus() {
    return this.getNumberAttribute('ha_status');
  }
  public set haStatus(value: number) {
    this._haStatus = value;
  }
  public resetHaStatus() {
    this._haStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStatusInput() {
    return this._haStatus;
  }

  // harmony - computed: false, optional: true, required: false
  private _harmony?: number; 
  public get harmony() {
    return this.getNumberAttribute('harmony');
  }
  public set harmony(value: number) {
    this._harmony = value;
  }
  public resetHarmony() {
    this._harmony = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harmonyInput() {
    return this._harmony;
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

  // license_request - computed: false, optional: true, required: false
  private _licenseRequest?: number; 
  public get licenseRequest() {
    return this.getNumberAttribute('license_request');
  }
  public set licenseRequest(value: number) {
    this._licenseRequest = value;
  }
  public resetLicenseRequest() {
    this._licenseRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRequestInput() {
    return this._licenseRequest;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ha_status: cdktf.numberToTerraform(this._haStatus),
      harmony: cdktf.numberToTerraform(this._harmony),
      id: cdktf.stringToTerraform(this._id),
      license_request: cdktf.numberToTerraform(this._licenseRequest),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ha_status: {
        value: cdktf.numberToHclTerraform(this._haStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      harmony: {
        value: cdktf.numberToHclTerraform(this._harmony),
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
      license_request: {
        value: cdktf.numberToHclTerraform(this._licenseRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
