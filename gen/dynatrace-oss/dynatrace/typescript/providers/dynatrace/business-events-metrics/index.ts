// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessEventsMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#dimensions BusinessEventsMetrics#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#enabled BusinessEventsMetrics#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#id BusinessEventsMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#key BusinessEventsMetrics#key}
  */
  readonly key: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#matcher BusinessEventsMetrics#matcher}
  */
  readonly matcher: string;
  /**
  * Possible Values: `ATTRIBUTE`, `OCCURRENCE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#measure BusinessEventsMetrics#measure}
  */
  readonly measure: string;
  /**
  * Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#measure_attribute BusinessEventsMetrics#measure_attribute}
  */
  readonly measureAttribute?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics dynatrace_business_events_metrics}
*/
export class BusinessEventsMetrics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_business_events_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessEventsMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessEventsMetrics to import
  * @param importFromId The id of the existing BusinessEventsMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessEventsMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_business_events_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/business_events_metrics dynatrace_business_events_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessEventsMetricsConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessEventsMetricsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_business_events_metrics',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dimensions = config.dimensions;
    this._enabled = config.enabled;
    this._id = config.id;
    this._key = config.key;
    this._matcher = config.matcher;
    this._measure = config.measure;
    this._measureAttribute = config.measureAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('dimensions'));
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // measure - computed: false, optional: false, required: true
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
  }

  // measure_attribute - computed: false, optional: true, required: false
  private _measureAttribute?: string; 
  public get measureAttribute() {
    return this.getStringAttribute('measure_attribute');
  }
  public set measureAttribute(value: string) {
    this._measureAttribute = value;
  }
  public resetMeasureAttribute() {
    this._measureAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureAttributeInput() {
    return this._measureAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dimensions),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      matcher: cdktf.stringToTerraform(this._matcher),
      measure: cdktf.stringToTerraform(this._measure),
      measure_attribute: cdktf.stringToTerraform(this._measureAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dimensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dimensions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matcher: {
        value: cdktf.stringToHclTerraform(this._matcher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      measure: {
        value: cdktf.stringToHclTerraform(this._measure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      measure_attribute: {
        value: cdktf.stringToHclTerraform(this._measureAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
