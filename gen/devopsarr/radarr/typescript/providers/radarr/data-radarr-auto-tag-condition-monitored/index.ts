// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/auto_tag_condition_monitored
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrAutoTagConditionMonitoredConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/auto_tag_condition_monitored#name DataRadarrAutoTagConditionMonitored#name}
  */
  readonly name: string;
  /**
  * Negate flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/auto_tag_condition_monitored#negate DataRadarrAutoTagConditionMonitored#negate}
  */
  readonly negate: boolean | cdktf.IResolvable;
  /**
  * Computed flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/auto_tag_condition_monitored#required DataRadarrAutoTagConditionMonitored#required}
  */
  readonly required: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/auto_tag_condition_monitored radarr_auto_tag_condition_monitored}
*/
export class DataRadarrAutoTagConditionMonitored extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_auto_tag_condition_monitored";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrAutoTagConditionMonitored resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrAutoTagConditionMonitored to import
  * @param importFromId The id of the existing DataRadarrAutoTagConditionMonitored that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/auto_tag_condition_monitored#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrAutoTagConditionMonitored to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_auto_tag_condition_monitored", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/auto_tag_condition_monitored radarr_auto_tag_condition_monitored} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrAutoTagConditionMonitoredConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrAutoTagConditionMonitoredConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_auto_tag_condition_monitored',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._negate = config.negate;
    this._required = config.required;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
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

  // negate - computed: false, optional: false, required: true
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      negate: cdktf.booleanToTerraform(this._negate),
      required: cdktf.booleanToTerraform(this._required),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negate: {
        value: cdktf.booleanToHclTerraform(this._negate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
