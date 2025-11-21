// https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatuspageMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric#is_visible StatuspageMetric#is_visible}
  */
  readonly isVisible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric#name StatuspageMetric#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric#service_id StatuspageMetric#service_id}
  */
  readonly serviceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric#statuspage_id StatuspageMetric#statuspage_id}
  */
  readonly statuspageId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric uptime_statuspage_metric}
*/
export class StatuspageMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatuspageMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatuspageMetric to import
  * @param importFromId The id of the existing StatuspageMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatuspageMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/statuspage_metric uptime_statuspage_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatuspageMetricConfig
  */
  public constructor(scope: Construct, id: string, config: StatuspageMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_metric',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.17.1',
        providerVersionConstraint: '2.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isVisible = config.isVisible;
    this._name = config.name;
    this._serviceId = config.serviceId;
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_visible - computed: true, optional: true, required: false
  private _isVisible?: boolean | cdktf.IResolvable; 
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }
  public set isVisible(value: boolean | cdktf.IResolvable) {
    this._isVisible = value;
  }
  public resetIsVisible() {
    this._isVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisibleInput() {
    return this._isVisible;
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_visible: cdktf.booleanToTerraform(this._isVisible),
      name: cdktf.stringToTerraform(this._name),
      service_id: cdktf.numberToTerraform(this._serviceId),
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_visible: {
        value: cdktf.booleanToHclTerraform(this._isVisible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
