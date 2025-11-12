// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsconfigSaveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#all NsconfigSave#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#concurrent_save_interval NsconfigSave#concurrent_save_interval}
  */
  readonly concurrentSaveInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#concurrent_save_ok NsconfigSave#concurrent_save_ok}
  */
  readonly concurrentSaveOk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#concurrent_save_retries NsconfigSave#concurrent_save_retries}
  */
  readonly concurrentSaveRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#concurrent_save_timeout NsconfigSave#concurrent_save_timeout}
  */
  readonly concurrentSaveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#id NsconfigSave#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#save_on_destroy NsconfigSave#save_on_destroy}
  */
  readonly saveOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#timestamp NsconfigSave#timestamp}
  */
  readonly timestamp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save citrixadc_nsconfig_save}
*/
export class NsconfigSave extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsconfig_save";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsconfigSave resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsconfigSave to import
  * @param importFromId The id of the existing NsconfigSave that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsconfigSave to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsconfig_save", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsconfig_save citrixadc_nsconfig_save} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsconfigSaveConfig
  */
  public constructor(scope: Construct, id: string, config: NsconfigSaveConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsconfig_save',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._concurrentSaveInterval = config.concurrentSaveInterval;
    this._concurrentSaveOk = config.concurrentSaveOk;
    this._concurrentSaveRetries = config.concurrentSaveRetries;
    this._concurrentSaveTimeout = config.concurrentSaveTimeout;
    this._id = config.id;
    this._saveOnDestroy = config.saveOnDestroy;
    this._timestamp = config.timestamp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: true, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // concurrent_save_interval - computed: false, optional: true, required: false
  private _concurrentSaveInterval?: string; 
  public get concurrentSaveInterval() {
    return this.getStringAttribute('concurrent_save_interval');
  }
  public set concurrentSaveInterval(value: string) {
    this._concurrentSaveInterval = value;
  }
  public resetConcurrentSaveInterval() {
    this._concurrentSaveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSaveIntervalInput() {
    return this._concurrentSaveInterval;
  }

  // concurrent_save_ok - computed: false, optional: true, required: false
  private _concurrentSaveOk?: boolean | cdktf.IResolvable; 
  public get concurrentSaveOk() {
    return this.getBooleanAttribute('concurrent_save_ok');
  }
  public set concurrentSaveOk(value: boolean | cdktf.IResolvable) {
    this._concurrentSaveOk = value;
  }
  public resetConcurrentSaveOk() {
    this._concurrentSaveOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSaveOkInput() {
    return this._concurrentSaveOk;
  }

  // concurrent_save_retries - computed: false, optional: true, required: false
  private _concurrentSaveRetries?: number; 
  public get concurrentSaveRetries() {
    return this.getNumberAttribute('concurrent_save_retries');
  }
  public set concurrentSaveRetries(value: number) {
    this._concurrentSaveRetries = value;
  }
  public resetConcurrentSaveRetries() {
    this._concurrentSaveRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSaveRetriesInput() {
    return this._concurrentSaveRetries;
  }

  // concurrent_save_timeout - computed: false, optional: true, required: false
  private _concurrentSaveTimeout?: string; 
  public get concurrentSaveTimeout() {
    return this.getStringAttribute('concurrent_save_timeout');
  }
  public set concurrentSaveTimeout(value: string) {
    this._concurrentSaveTimeout = value;
  }
  public resetConcurrentSaveTimeout() {
    this._concurrentSaveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSaveTimeoutInput() {
    return this._concurrentSaveTimeout;
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

  // save_on_destroy - computed: false, optional: true, required: false
  private _saveOnDestroy?: boolean | cdktf.IResolvable; 
  public get saveOnDestroy() {
    return this.getBooleanAttribute('save_on_destroy');
  }
  public set saveOnDestroy(value: boolean | cdktf.IResolvable) {
    this._saveOnDestroy = value;
  }
  public resetSaveOnDestroy() {
    this._saveOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveOnDestroyInput() {
    return this._saveOnDestroy;
  }

  // timestamp - computed: false, optional: false, required: true
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.booleanToTerraform(this._all),
      concurrent_save_interval: cdktf.stringToTerraform(this._concurrentSaveInterval),
      concurrent_save_ok: cdktf.booleanToTerraform(this._concurrentSaveOk),
      concurrent_save_retries: cdktf.numberToTerraform(this._concurrentSaveRetries),
      concurrent_save_timeout: cdktf.stringToTerraform(this._concurrentSaveTimeout),
      id: cdktf.stringToTerraform(this._id),
      save_on_destroy: cdktf.booleanToTerraform(this._saveOnDestroy),
      timestamp: cdktf.stringToTerraform(this._timestamp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.booleanToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      concurrent_save_interval: {
        value: cdktf.stringToHclTerraform(this._concurrentSaveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrent_save_ok: {
        value: cdktf.booleanToHclTerraform(this._concurrentSaveOk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      concurrent_save_retries: {
        value: cdktf.numberToHclTerraform(this._concurrentSaveRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_save_timeout: {
        value: cdktf.stringToHclTerraform(this._concurrentSaveTimeout),
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
      save_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._saveOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
