// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/data-sources/pagerduty_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSignalfxPagerdutyIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/data-sources/pagerduty_integration#id DataSignalfxPagerdutyIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This is the configured name of the PagerDuty integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/data-sources/pagerduty_integration#name DataSignalfxPagerdutyIntegration#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/data-sources/pagerduty_integration signalfx_pagerduty_integration}
*/
export class DataSignalfxPagerdutyIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_pagerduty_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSignalfxPagerdutyIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSignalfxPagerdutyIntegration to import
  * @param importFromId The id of the existing DataSignalfxPagerdutyIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/data-sources/pagerduty_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSignalfxPagerdutyIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_pagerduty_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/data-sources/pagerduty_integration signalfx_pagerduty_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSignalfxPagerdutyIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataSignalfxPagerdutyIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_pagerduty_integration',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
