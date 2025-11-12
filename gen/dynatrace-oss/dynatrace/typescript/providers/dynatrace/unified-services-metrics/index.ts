// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/unified_services_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnifiedServicesMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should metrics be written for endpoints? Please be aware that this setting has billing implications. Check out this [documentation](https://dt-url.net/td23cgh) for further details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/unified_services_metrics#enable_endpoint_metrics UnifiedServicesMetrics#enable_endpoint_metrics}
  */
  readonly enableEndpointMetrics: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/unified_services_metrics#id UnifiedServicesMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/unified_services_metrics#service_id UnifiedServicesMetrics#service_id}
  */
  readonly serviceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/unified_services_metrics dynatrace_unified_services_metrics}
*/
export class UnifiedServicesMetrics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_unified_services_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnifiedServicesMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnifiedServicesMetrics to import
  * @param importFromId The id of the existing UnifiedServicesMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/unified_services_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnifiedServicesMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_unified_services_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/unified_services_metrics dynatrace_unified_services_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnifiedServicesMetricsConfig
  */
  public constructor(scope: Construct, id: string, config: UnifiedServicesMetricsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_unified_services_metrics',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableEndpointMetrics = config.enableEndpointMetrics;
    this._id = config.id;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_endpoint_metrics - computed: false, optional: false, required: true
  private _enableEndpointMetrics?: boolean | cdktf.IResolvable; 
  public get enableEndpointMetrics() {
    return this.getBooleanAttribute('enable_endpoint_metrics');
  }
  public set enableEndpointMetrics(value: boolean | cdktf.IResolvable) {
    this._enableEndpointMetrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndpointMetricsInput() {
    return this._enableEndpointMetrics;
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

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_endpoint_metrics: cdktf.booleanToTerraform(this._enableEndpointMetrics),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_endpoint_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableEndpointMetrics),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
