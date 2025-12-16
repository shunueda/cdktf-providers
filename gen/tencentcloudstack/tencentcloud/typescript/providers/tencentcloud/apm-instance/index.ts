// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description Of Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#description ApmInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#id ApmInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name Of Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#name ApmInstance#name}
  */
  readonly name: string;
  /**
  * Modify the billing mode: `1` means prepaid, `0` means pay-as-you-go, the default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#pay_mode ApmInstance#pay_mode}
  */
  readonly payMode?: number;
  /**
  * Quota Of Instance Reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#span_daily_counters ApmInstance#span_daily_counters}
  */
  readonly spanDailyCounters?: number;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#tags ApmInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Duration Of Trace Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#trace_duration ApmInstance#trace_duration}
  */
  readonly traceDuration?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance tencentcloud_apm_instance}
*/
export class ApmInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_apm_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmInstance to import
  * @param importFromId The id of the existing ApmInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_apm_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_instance tencentcloud_apm_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApmInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_apm_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._id = config.id;
    this._name = config.name;
    this._payMode = config.payMode;
    this._spanDailyCounters = config.spanDailyCounters;
    this._tags = config.tags;
    this._traceDuration = config.traceDuration;
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

  // pay_mode - computed: false, optional: true, required: false
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // public_collector_url - computed: true, optional: false, required: false
  public get publicCollectorUrl() {
    return this.getStringAttribute('public_collector_url');
  }

  // span_daily_counters - computed: false, optional: true, required: false
  private _spanDailyCounters?: number; 
  public get spanDailyCounters() {
    return this.getNumberAttribute('span_daily_counters');
  }
  public set spanDailyCounters(value: number) {
    this._spanDailyCounters = value;
  }
  public resetSpanDailyCounters() {
    this._spanDailyCounters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanDailyCountersInput() {
    return this._spanDailyCounters;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // trace_duration - computed: true, optional: true, required: false
  private _traceDuration?: number; 
  public get traceDuration() {
    return this.getNumberAttribute('trace_duration');
  }
  public set traceDuration(value: number) {
    this._traceDuration = value;
  }
  public resetTraceDuration() {
    this._traceDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceDurationInput() {
    return this._traceDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      span_daily_counters: cdktf.numberToTerraform(this._spanDailyCounters),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trace_duration: cdktf.numberToTerraform(this._traceDuration),
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
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      span_daily_counters: {
        value: cdktf.numberToHclTerraform(this._spanDailyCounters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trace_duration: {
        value: cdktf.numberToHclTerraform(this._traceDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
