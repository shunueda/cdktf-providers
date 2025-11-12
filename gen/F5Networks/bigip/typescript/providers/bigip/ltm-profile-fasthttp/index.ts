// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileFasthttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * connpool_maxreuse timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#connpool_maxreuse LtmProfileFasthttp#connpool_maxreuse}
  */
  readonly connpoolMaxreuse?: number;
  /**
  * timer integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#connpool_maxsize LtmProfileFasthttp#connpool_maxsize}
  */
  readonly connpoolMaxsize?: number;
  /**
  * Pool min size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#connpool_minsize LtmProfileFasthttp#connpool_minsize}
  */
  readonly connpoolMinsize?: number;
  /**
  * enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#connpool_replenish LtmProfileFasthttp#connpool_replenish}
  */
  readonly connpoolReplenish?: string;
  /**
  * integer value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#connpool_step LtmProfileFasthttp#connpool_step}
  */
  readonly connpoolStep?: number;
  /**
  * idle_timeout can be given value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#connpoolidle_timeoutoverride LtmProfileFasthttp#connpoolidle_timeoutoverride}
  */
  readonly connpoolidleTimeoutoverride?: number;
  /**
  * Use the parent Fasthttp profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#defaults_from LtmProfileFasthttp#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * disabled or enabled 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#forcehttp_10response LtmProfileFasthttp#forcehttp_10response}
  */
  readonly forcehttp10Response?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#id LtmProfileFasthttp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * integer value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#idle_timeout LtmProfileFasthttp#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * integer value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#maxheader_size LtmProfileFasthttp#maxheader_size}
  */
  readonly maxheaderSize?: number;
  /**
  * Name of the Fasthttp Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#name LtmProfileFasthttp#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp bigip_ltm_profile_fasthttp}
*/
export class LtmProfileFasthttp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_fasthttp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileFasthttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileFasthttp to import
  * @param importFromId The id of the existing LtmProfileFasthttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileFasthttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_fasthttp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_fasthttp bigip_ltm_profile_fasthttp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileFasthttpConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileFasthttpConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_fasthttp',
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
    this._connpoolMaxreuse = config.connpoolMaxreuse;
    this._connpoolMaxsize = config.connpoolMaxsize;
    this._connpoolMinsize = config.connpoolMinsize;
    this._connpoolReplenish = config.connpoolReplenish;
    this._connpoolStep = config.connpoolStep;
    this._connpoolidleTimeoutoverride = config.connpoolidleTimeoutoverride;
    this._defaultsFrom = config.defaultsFrom;
    this._forcehttp10Response = config.forcehttp10Response;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._maxheaderSize = config.maxheaderSize;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connpool_maxreuse - computed: true, optional: true, required: false
  private _connpoolMaxreuse?: number; 
  public get connpoolMaxreuse() {
    return this.getNumberAttribute('connpool_maxreuse');
  }
  public set connpoolMaxreuse(value: number) {
    this._connpoolMaxreuse = value;
  }
  public resetConnpoolMaxreuse() {
    this._connpoolMaxreuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connpoolMaxreuseInput() {
    return this._connpoolMaxreuse;
  }

  // connpool_maxsize - computed: true, optional: true, required: false
  private _connpoolMaxsize?: number; 
  public get connpoolMaxsize() {
    return this.getNumberAttribute('connpool_maxsize');
  }
  public set connpoolMaxsize(value: number) {
    this._connpoolMaxsize = value;
  }
  public resetConnpoolMaxsize() {
    this._connpoolMaxsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connpoolMaxsizeInput() {
    return this._connpoolMaxsize;
  }

  // connpool_minsize - computed: true, optional: true, required: false
  private _connpoolMinsize?: number; 
  public get connpoolMinsize() {
    return this.getNumberAttribute('connpool_minsize');
  }
  public set connpoolMinsize(value: number) {
    this._connpoolMinsize = value;
  }
  public resetConnpoolMinsize() {
    this._connpoolMinsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connpoolMinsizeInput() {
    return this._connpoolMinsize;
  }

  // connpool_replenish - computed: true, optional: true, required: false
  private _connpoolReplenish?: string; 
  public get connpoolReplenish() {
    return this.getStringAttribute('connpool_replenish');
  }
  public set connpoolReplenish(value: string) {
    this._connpoolReplenish = value;
  }
  public resetConnpoolReplenish() {
    this._connpoolReplenish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connpoolReplenishInput() {
    return this._connpoolReplenish;
  }

  // connpool_step - computed: true, optional: true, required: false
  private _connpoolStep?: number; 
  public get connpoolStep() {
    return this.getNumberAttribute('connpool_step');
  }
  public set connpoolStep(value: number) {
    this._connpoolStep = value;
  }
  public resetConnpoolStep() {
    this._connpoolStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connpoolStepInput() {
    return this._connpoolStep;
  }

  // connpoolidle_timeoutoverride - computed: true, optional: true, required: false
  private _connpoolidleTimeoutoverride?: number; 
  public get connpoolidleTimeoutoverride() {
    return this.getNumberAttribute('connpoolidle_timeoutoverride');
  }
  public set connpoolidleTimeoutoverride(value: number) {
    this._connpoolidleTimeoutoverride = value;
  }
  public resetConnpoolidleTimeoutoverride() {
    this._connpoolidleTimeoutoverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connpoolidleTimeoutoverrideInput() {
    return this._connpoolidleTimeoutoverride;
  }

  // defaults_from - computed: false, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // forcehttp_10response - computed: true, optional: true, required: false
  private _forcehttp10Response?: string; 
  public get forcehttp10Response() {
    return this.getStringAttribute('forcehttp_10response');
  }
  public set forcehttp10Response(value: string) {
    this._forcehttp10Response = value;
  }
  public resetForcehttp10Response() {
    this._forcehttp10Response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcehttp10ResponseInput() {
    return this._forcehttp10Response;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // maxheader_size - computed: true, optional: true, required: false
  private _maxheaderSize?: number; 
  public get maxheaderSize() {
    return this.getNumberAttribute('maxheader_size');
  }
  public set maxheaderSize(value: number) {
    this._maxheaderSize = value;
  }
  public resetMaxheaderSize() {
    this._maxheaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxheaderSizeInput() {
    return this._maxheaderSize;
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
      connpool_maxreuse: cdktf.numberToTerraform(this._connpoolMaxreuse),
      connpool_maxsize: cdktf.numberToTerraform(this._connpoolMaxsize),
      connpool_minsize: cdktf.numberToTerraform(this._connpoolMinsize),
      connpool_replenish: cdktf.stringToTerraform(this._connpoolReplenish),
      connpool_step: cdktf.numberToTerraform(this._connpoolStep),
      connpoolidle_timeoutoverride: cdktf.numberToTerraform(this._connpoolidleTimeoutoverride),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      forcehttp_10response: cdktf.stringToTerraform(this._forcehttp10Response),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      maxheader_size: cdktf.numberToTerraform(this._maxheaderSize),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connpool_maxreuse: {
        value: cdktf.numberToHclTerraform(this._connpoolMaxreuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connpool_maxsize: {
        value: cdktf.numberToHclTerraform(this._connpoolMaxsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connpool_minsize: {
        value: cdktf.numberToHclTerraform(this._connpoolMinsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connpool_replenish: {
        value: cdktf.stringToHclTerraform(this._connpoolReplenish),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connpool_step: {
        value: cdktf.numberToHclTerraform(this._connpoolStep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connpoolidle_timeoutoverride: {
        value: cdktf.numberToHclTerraform(this._connpoolidleTimeoutoverride),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forcehttp_10response: {
        value: cdktf.stringToHclTerraform(this._forcehttp10Response),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxheader_size: {
        value: cdktf.numberToHclTerraform(this._maxheaderSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
