// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_as3_deploy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmAs3DeployConfig extends cdktf.TerraformMetaArguments {
  /**
  * AS3 Json Declaration to be post onto BIG-IP Next
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_as3_deploy#as3_json CmAs3Deploy#as3_json}
  */
  readonly as3Json: string;
  /**
  * Target Address of the Device Inventory on BIG-IP Next CM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_as3_deploy#target_address CmAs3Deploy#target_address}
  */
  readonly targetAddress: string;
  /**
  * The number of seconds to wait for instance deployment to finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_as3_deploy#timeout CmAs3Deploy#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_as3_deploy bigipnext_cm_as3_deploy}
*/
export class CmAs3Deploy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_as3_deploy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmAs3Deploy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmAs3Deploy to import
  * @param importFromId The id of the existing CmAs3Deploy that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_as3_deploy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmAs3Deploy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_as3_deploy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_as3_deploy bigipnext_cm_as3_deploy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmAs3DeployConfig
  */
  public constructor(scope: Construct, id: string, config: CmAs3DeployConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_as3_deploy',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._as3Json = config.as3Json;
    this._targetAddress = config.targetAddress;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as3_json - computed: false, optional: false, required: true
  private _as3Json?: string; 
  public get as3Json() {
    return this.getStringAttribute('as3_json');
  }
  public set as3Json(value: string) {
    this._as3Json = value;
  }
  // Temporarily expose input value. Use with caution.
  public get as3JsonInput() {
    return this._as3Json;
  }

  // deploy_id - computed: true, optional: false, required: false
  public get deployId() {
    return this.getStringAttribute('deploy_id');
  }

  // draft_id - computed: true, optional: false, required: false
  public get draftId() {
    return this.getStringAttribute('draft_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target_address - computed: false, optional: false, required: true
  private _targetAddress?: string; 
  public get targetAddress() {
    return this.getStringAttribute('target_address');
  }
  public set targetAddress(value: string) {
    this._targetAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAddressInput() {
    return this._targetAddress;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as3_json: cdktf.stringToTerraform(this._as3Json),
      target_address: cdktf.stringToTerraform(this._targetAddress),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as3_json: {
        value: cdktf.stringToHclTerraform(this._as3Json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_address: {
        value: cdktf.stringToHclTerraform(this._targetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
