// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#description Cache#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#environment_name Cache#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#expiry_date Cache#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#expiry_time_of_day Cache#expiry_time_of_day}
  */
  readonly expiryTimeOfDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#expiry_timeout_in_sec Cache#expiry_timeout_in_sec}
  */
  readonly expiryTimeoutInSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#id Cache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#name Cache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#skip_cache_if_element_size_in_kb_exceeds Cache#skip_cache_if_element_size_in_kb_exceeds}
  */
  readonly skipCacheIfElementSizeInKbExceeds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache apigee_cache}
*/
export class Cache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cache to import
  * @param importFromId The id of the existing Cache that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/cache apigee_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CacheConfig
  */
  public constructor(scope: Construct, id: string, config: CacheConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_cache',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53',
        providerVersionConstraint: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._environmentName = config.environmentName;
    this._expiryDate = config.expiryDate;
    this._expiryTimeOfDay = config.expiryTimeOfDay;
    this._expiryTimeoutInSec = config.expiryTimeoutInSec;
    this._id = config.id;
    this._name = config.name;
    this._skipCacheIfElementSizeInKbExceeds = config.skipCacheIfElementSizeInKbExceeds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // expiry_date - computed: false, optional: true, required: false
  private _expiryDate?: string; 
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }
  public set expiryDate(value: string) {
    this._expiryDate = value;
  }
  public resetExpiryDate() {
    this._expiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDateInput() {
    return this._expiryDate;
  }

  // expiry_time_of_day - computed: false, optional: true, required: false
  private _expiryTimeOfDay?: string; 
  public get expiryTimeOfDay() {
    return this.getStringAttribute('expiry_time_of_day');
  }
  public set expiryTimeOfDay(value: string) {
    this._expiryTimeOfDay = value;
  }
  public resetExpiryTimeOfDay() {
    this._expiryTimeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeOfDayInput() {
    return this._expiryTimeOfDay;
  }

  // expiry_timeout_in_sec - computed: false, optional: true, required: false
  private _expiryTimeoutInSec?: number; 
  public get expiryTimeoutInSec() {
    return this.getNumberAttribute('expiry_timeout_in_sec');
  }
  public set expiryTimeoutInSec(value: number) {
    this._expiryTimeoutInSec = value;
  }
  public resetExpiryTimeoutInSec() {
    this._expiryTimeoutInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeoutInSecInput() {
    return this._expiryTimeoutInSec;
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

  // skip_cache_if_element_size_in_kb_exceeds - computed: false, optional: true, required: false
  private _skipCacheIfElementSizeInKbExceeds?: number; 
  public get skipCacheIfElementSizeInKbExceeds() {
    return this.getNumberAttribute('skip_cache_if_element_size_in_kb_exceeds');
  }
  public set skipCacheIfElementSizeInKbExceeds(value: number) {
    this._skipCacheIfElementSizeInKbExceeds = value;
  }
  public resetSkipCacheIfElementSizeInKbExceeds() {
    this._skipCacheIfElementSizeInKbExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCacheIfElementSizeInKbExceedsInput() {
    return this._skipCacheIfElementSizeInKbExceeds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      expiry_time_of_day: cdktf.stringToTerraform(this._expiryTimeOfDay),
      expiry_timeout_in_sec: cdktf.numberToTerraform(this._expiryTimeoutInSec),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      skip_cache_if_element_size_in_kb_exceeds: cdktf.numberToTerraform(this._skipCacheIfElementSizeInKbExceeds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_date: {
        value: cdktf.stringToHclTerraform(this._expiryDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_time_of_day: {
        value: cdktf.stringToHclTerraform(this._expiryTimeOfDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_timeout_in_sec: {
        value: cdktf.numberToHclTerraform(this._expiryTimeoutInSec),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_cache_if_element_size_in_kb_exceeds: {
        value: cdktf.numberToHclTerraform(this._skipCacheIfElementSizeInKbExceeds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
