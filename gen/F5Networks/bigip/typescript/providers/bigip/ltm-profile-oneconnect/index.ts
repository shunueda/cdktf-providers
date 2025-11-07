// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileOneconnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use the parent oneconnect profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#defaults_from LtmProfileOneconnect#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#id LtmProfileOneconnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * idleTimeoutOverride can be enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#idle_timeout_override LtmProfileOneconnect#idle_timeout_override}
  */
  readonly idleTimeoutOverride?: string;
  /**
  * Controls how connection limits are enforced in conjunction with OneConnect. The default is None. Supported Values: [None,idle,strict]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#limit_type LtmProfileOneconnect#limit_type}
  */
  readonly limitType?: string;
  /**
  * max_age has integer value typical 3600 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#max_age LtmProfileOneconnect#max_age}
  */
  readonly maxAge?: number;
  /**
  * max_reuse has integer value typical 1000 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#max_reuse LtmProfileOneconnect#max_reuse}
  */
  readonly maxReuse?: number;
  /**
  * max_size has integer value typical 1000 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#max_size LtmProfileOneconnect#max_size}
  */
  readonly maxSize?: number;
  /**
  * Name of the Oneconnect Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#name LtmProfileOneconnect#name}
  */
  readonly name: string;
  /**
  * name of partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#partition LtmProfileOneconnect#partition}
  */
  readonly partition?: string;
  /**
  * sharePools can be enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#share_pools LtmProfileOneconnect#share_pools}
  */
  readonly sharePools?: string;
  /**
  * source_mask can be 255.255.255.255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#source_mask LtmProfileOneconnect#source_mask}
  */
  readonly sourceMask?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect bigip_ltm_profile_oneconnect}
*/
export class LtmProfileOneconnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_oneconnect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileOneconnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileOneconnect to import
  * @param importFromId The id of the existing LtmProfileOneconnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileOneconnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_oneconnect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_oneconnect bigip_ltm_profile_oneconnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileOneconnectConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileOneconnectConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_oneconnect',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultsFrom = config.defaultsFrom;
    this._id = config.id;
    this._idleTimeoutOverride = config.idleTimeoutOverride;
    this._limitType = config.limitType;
    this._maxAge = config.maxAge;
    this._maxReuse = config.maxReuse;
    this._maxSize = config.maxSize;
    this._name = config.name;
    this._partition = config.partition;
    this._sharePools = config.sharePools;
    this._sourceMask = config.sourceMask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaults_from - computed: true, optional: true, required: false
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

  // idle_timeout_override - computed: true, optional: true, required: false
  private _idleTimeoutOverride?: string; 
  public get idleTimeoutOverride() {
    return this.getStringAttribute('idle_timeout_override');
  }
  public set idleTimeoutOverride(value: string) {
    this._idleTimeoutOverride = value;
  }
  public resetIdleTimeoutOverride() {
    this._idleTimeoutOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutOverrideInput() {
    return this._idleTimeoutOverride;
  }

  // limit_type - computed: true, optional: true, required: false
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  public resetLimitType() {
    this._limitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_reuse - computed: true, optional: true, required: false
  private _maxReuse?: number; 
  public get maxReuse() {
    return this.getNumberAttribute('max_reuse');
  }
  public set maxReuse(value: number) {
    this._maxReuse = value;
  }
  public resetMaxReuse() {
    this._maxReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReuseInput() {
    return this._maxReuse;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
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

  // partition - computed: true, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // share_pools - computed: true, optional: true, required: false
  private _sharePools?: string; 
  public get sharePools() {
    return this.getStringAttribute('share_pools');
  }
  public set sharePools(value: string) {
    this._sharePools = value;
  }
  public resetSharePools() {
    this._sharePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePoolsInput() {
    return this._sharePools;
  }

  // source_mask - computed: true, optional: true, required: false
  private _sourceMask?: string; 
  public get sourceMask() {
    return this.getStringAttribute('source_mask');
  }
  public set sourceMask(value: string) {
    this._sourceMask = value;
  }
  public resetSourceMask() {
    this._sourceMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMaskInput() {
    return this._sourceMask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout_override: cdktf.stringToTerraform(this._idleTimeoutOverride),
      limit_type: cdktf.stringToTerraform(this._limitType),
      max_age: cdktf.numberToTerraform(this._maxAge),
      max_reuse: cdktf.numberToTerraform(this._maxReuse),
      max_size: cdktf.numberToTerraform(this._maxSize),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      share_pools: cdktf.stringToTerraform(this._sharePools),
      source_mask: cdktf.stringToTerraform(this._sourceMask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
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
      idle_timeout_override: {
        value: cdktf.stringToHclTerraform(this._idleTimeoutOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_type: {
        value: cdktf.stringToHclTerraform(this._limitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_reuse: {
        value: cdktf.numberToHclTerraform(this._maxReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
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
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_pools: {
        value: cdktf.stringToHclTerraform(this._sharePools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_mask: {
        value: cdktf.stringToHclTerraform(this._sourceMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
