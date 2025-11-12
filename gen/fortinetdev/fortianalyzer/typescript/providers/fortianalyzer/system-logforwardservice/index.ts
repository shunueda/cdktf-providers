// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogforwardserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice#accept_aggregation SystemLogforwardservice#accept_aggregation}
  */
  readonly acceptAggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice#aggregation_disk_quota SystemLogforwardservice#aggregation_disk_quota}
  */
  readonly aggregationDiskQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice#collector_auth SystemLogforwardservice#collector_auth}
  */
  readonly collectorAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice#id SystemLogforwardservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice fortianalyzer_system_logforwardservice}
*/
export class SystemLogforwardservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_logforwardservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogforwardservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogforwardservice to import
  * @param importFromId The id of the existing SystemLogforwardservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogforwardservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_logforwardservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_logforwardservice fortianalyzer_system_logforwardservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogforwardserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogforwardserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_logforwardservice',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptAggregation = config.acceptAggregation;
    this._aggregationDiskQuota = config.aggregationDiskQuota;
    this._collectorAuth = config.collectorAuth;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_aggregation - computed: true, optional: true, required: false
  private _acceptAggregation?: string; 
  public get acceptAggregation() {
    return this.getStringAttribute('accept_aggregation');
  }
  public set acceptAggregation(value: string) {
    this._acceptAggregation = value;
  }
  public resetAcceptAggregation() {
    this._acceptAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAggregationInput() {
    return this._acceptAggregation;
  }

  // aggregation_disk_quota - computed: true, optional: true, required: false
  private _aggregationDiskQuota?: number; 
  public get aggregationDiskQuota() {
    return this.getNumberAttribute('aggregation_disk_quota');
  }
  public set aggregationDiskQuota(value: number) {
    this._aggregationDiskQuota = value;
  }
  public resetAggregationDiskQuota() {
    this._aggregationDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationDiskQuotaInput() {
    return this._aggregationDiskQuota;
  }

  // collector_auth - computed: true, optional: true, required: false
  private _collectorAuth?: string; 
  public get collectorAuth() {
    return this.getStringAttribute('collector_auth');
  }
  public set collectorAuth(value: string) {
    this._collectorAuth = value;
  }
  public resetCollectorAuth() {
    this._collectorAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorAuthInput() {
    return this._collectorAuth;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_aggregation: cdktf.stringToTerraform(this._acceptAggregation),
      aggregation_disk_quota: cdktf.numberToTerraform(this._aggregationDiskQuota),
      collector_auth: cdktf.stringToTerraform(this._collectorAuth),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_aggregation: {
        value: cdktf.stringToHclTerraform(this._acceptAggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregation_disk_quota: {
        value: cdktf.numberToHclTerraform(this._aggregationDiskQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collector_auth: {
        value: cdktf.stringToHclTerraform(this._collectorAuth),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
