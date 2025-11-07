// https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowsFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter#id FlowsFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Python code defining the `get_flows` reducer for the FlowsFilter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter#implementation FlowsFilter#implementation}
  */
  readonly implementation: string;
  /**
  * A map of Integrations available when executing this FlowsFilter's implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter#integrations FlowsFilter#integrations}
  */
  readonly integrations?: { [key: string]: string };
  /**
  * A map of variables and their values to pass to this FlowsFilter implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter#vars FlowsFilter#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter sym_flows_filter}
*/
export class FlowsFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sym_flows_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowsFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowsFilter to import
  * @param importFromId The id of the existing FlowsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowsFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sym_flows_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flows_filter sym_flows_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowsFilterConfig
  */
  public constructor(scope: Construct, id: string, config: FlowsFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'sym_flows_filter',
      terraformGeneratorMetadata: {
        providerName: 'sym',
        providerVersion: '3.6.0'
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
    this._implementation = config.implementation;
    this._integrations = config.integrations;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
  }

  // integrations - computed: false, optional: true, required: false
  private _integrations?: { [key: string]: string }; 
  public get integrations() {
    return this.getStringMapAttribute('integrations');
  }
  public set integrations(value: { [key: string]: string }) {
    this._integrations = value;
  }
  public resetIntegrations() {
    this._integrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      implementation: cdktf.stringToTerraform(this._implementation),
      integrations: cdktf.hashMapper(cdktf.stringToTerraform)(this._integrations),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
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
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integrations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._integrations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
