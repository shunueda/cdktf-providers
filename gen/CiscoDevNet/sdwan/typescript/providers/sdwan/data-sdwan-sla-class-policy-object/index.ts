// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/sla_class_policy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSlaClassPolicyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/sla_class_policy_object#id DataSdwanSlaClassPolicyObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/sla_class_policy_object sdwan_sla_class_policy_object}
*/
export class DataSdwanSlaClassPolicyObject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_sla_class_policy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSlaClassPolicyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSlaClassPolicyObject to import
  * @param importFromId The id of the existing DataSdwanSlaClassPolicyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/sla_class_policy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSlaClassPolicyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_sla_class_policy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/sla_class_policy_object sdwan_sla_class_policy_object} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSlaClassPolicyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSlaClassPolicyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_sla_class_policy_object',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_probe_class_id - computed: true, optional: false, required: false
  public get appProbeClassId() {
    return this.getStringAttribute('app_probe_class_id');
  }

  // app_probe_class_version - computed: true, optional: false, required: false
  public get appProbeClassVersion() {
    return this.getNumberAttribute('app_probe_class_version');
  }

  // fallback_best_tunnel_criteria - computed: true, optional: false, required: false
  public get fallbackBestTunnelCriteria() {
    return this.getStringAttribute('fallback_best_tunnel_criteria');
  }

  // fallback_best_tunnel_jitter - computed: true, optional: false, required: false
  public get fallbackBestTunnelJitter() {
    return this.getNumberAttribute('fallback_best_tunnel_jitter');
  }

  // fallback_best_tunnel_latency - computed: true, optional: false, required: false
  public get fallbackBestTunnelLatency() {
    return this.getNumberAttribute('fallback_best_tunnel_latency');
  }

  // fallback_best_tunnel_loss - computed: true, optional: false, required: false
  public get fallbackBestTunnelLoss() {
    return this.getNumberAttribute('fallback_best_tunnel_loss');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // jitter - computed: true, optional: false, required: false
  public get jitter() {
    return this.getNumberAttribute('jitter');
  }

  // latency - computed: true, optional: false, required: false
  public get latency() {
    return this.getNumberAttribute('latency');
  }

  // loss - computed: true, optional: false, required: false
  public get loss() {
    return this.getNumberAttribute('loss');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
