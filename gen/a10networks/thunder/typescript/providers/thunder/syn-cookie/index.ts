// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynCookieConfig extends cdktf.TerraformMetaArguments {
  /**
  * Global Syn-Cookie Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie#enable SynCookie#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie#id SynCookie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * off-threshold for Syn-cookie. (default 0) (Decimal number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie#off_threshold SynCookie#off_threshold}
  */
  readonly offThreshold?: number;
  /**
  * on-threshold for Syn-cookie. (default 0) (Decimal number, 0 for turning on Syn-cookie without threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie#on_threshold SynCookie#on_threshold}
  */
  readonly onThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie#uuid SynCookie#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie thunder_syn_cookie}
*/
export class SynCookie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_syn_cookie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynCookie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynCookie to import
  * @param importFromId The id of the existing SynCookie that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynCookie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_syn_cookie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/syn_cookie thunder_syn_cookie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynCookieConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SynCookieConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_syn_cookie',
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
    this._enable = config.enable;
    this._id = config.id;
    this._offThreshold = config.offThreshold;
    this._onThreshold = config.onThreshold;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // off_threshold - computed: false, optional: true, required: false
  private _offThreshold?: number; 
  public get offThreshold() {
    return this.getNumberAttribute('off_threshold');
  }
  public set offThreshold(value: number) {
    this._offThreshold = value;
  }
  public resetOffThreshold() {
    this._offThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offThresholdInput() {
    return this._offThreshold;
  }

  // on_threshold - computed: false, optional: true, required: false
  private _onThreshold?: number; 
  public get onThreshold() {
    return this.getNumberAttribute('on_threshold');
  }
  public set onThreshold(value: number) {
    this._onThreshold = value;
  }
  public resetOnThreshold() {
    this._onThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onThresholdInput() {
    return this._onThreshold;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      off_threshold: cdktf.numberToTerraform(this._offThreshold),
      on_threshold: cdktf.numberToTerraform(this._onThreshold),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      off_threshold: {
        value: cdktf.numberToHclTerraform(this._offThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_threshold: {
        value: cdktf.numberToHclTerraform(this._onThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
