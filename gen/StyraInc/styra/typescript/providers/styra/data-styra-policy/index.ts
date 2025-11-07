// https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStyraPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * include dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/policy#dependencies DataStyraPolicy#dependencies}
  */
  readonly dependencies?: boolean | cdktf.IResolvable;
  /**
  * policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/policy#policy DataStyraPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/policy styra_policy}
*/
export class DataStyraPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "styra_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStyraPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStyraPolicy to import
  * @param importFromId The id of the existing DataStyraPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStyraPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "styra_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/policy styra_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStyraPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataStyraPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'styra_policy',
      terraformGeneratorMetadata: {
        providerName: 'styra',
        providerVersion: '0.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dependencies = config.dependencies;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: boolean | cdktf.IResolvable; 
  public get dependencies() {
    return this.getBooleanAttribute('dependencies');
  }
  public set dependencies(value: boolean | cdktf.IResolvable) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependencies: cdktf.booleanToTerraform(this._dependencies),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependencies: {
        value: cdktf.booleanToHclTerraform(this._dependencies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
