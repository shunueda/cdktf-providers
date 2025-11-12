// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipLtmMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_monitor#id DataBigipLtmMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the LTM Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_monitor#name DataBigipLtmMonitor#name}
  */
  readonly name: string;
  /**
  * partition of LTM Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_monitor#partition DataBigipLtmMonitor#partition}
  */
  readonly partition: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_monitor bigip_ltm_monitor}
*/
export class DataBigipLtmMonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipLtmMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipLtmMonitor to import
  * @param importFromId The id of the existing DataBigipLtmMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipLtmMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_monitor bigip_ltm_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipLtmMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipLtmMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_monitor',
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
    this._id = config.id;
    this._name = config.name;
    this._partition = config.partition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive - computed: true, optional: false, required: false
  public get adaptive() {
    return this.getStringAttribute('adaptive');
  }

  // adaptive_limit - computed: true, optional: false, required: false
  public get adaptiveLimit() {
    return this.getNumberAttribute('adaptive_limit');
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getStringAttribute('base');
  }

  // chase_referrals - computed: true, optional: false, required: false
  public get chaseReferrals() {
    return this.getStringAttribute('chase_referrals');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // defaults_from - computed: true, optional: false, required: false
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
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

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // ip_dscp - computed: true, optional: false, required: false
  public get ipDscp() {
    return this.getNumberAttribute('ip_dscp');
  }

  // mandatory_attributes - computed: true, optional: false, required: false
  public get mandatoryAttributes() {
    return this.getStringAttribute('mandatory_attributes');
  }

  // manual_resume - computed: true, optional: false, required: false
  public get manualResume() {
    return this.getStringAttribute('manual_resume');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // partition - computed: false, optional: false, required: true
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // receive_disable - computed: true, optional: false, required: false
  public get receiveDisable() {
    return this.getStringAttribute('receive_disable');
  }

  // reverse - computed: true, optional: false, required: false
  public get reverse() {
    return this.getStringAttribute('reverse');
  }

  // security - computed: true, optional: false, required: false
  public get security() {
    return this.getStringAttribute('security');
  }

  // time_until_up - computed: true, optional: false, required: false
  public get timeUntilUp() {
    return this.getNumberAttribute('time_until_up');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // transparent - computed: true, optional: false, required: false
  public get transparent() {
    return this.getStringAttribute('transparent');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
