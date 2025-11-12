// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/meta_business_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetaBusinessUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables API enrollments. Once enabled, it **CANNOT** be disabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/meta_business_unit#api_enrollment_enabled MetaBusinessUnit#api_enrollment_enabled}
  */
  readonly apiEnrollmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the meta business unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/meta_business_unit#name MetaBusinessUnit#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/meta_business_unit zentral_meta_business_unit}
*/
export class MetaBusinessUnit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_meta_business_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetaBusinessUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetaBusinessUnit to import
  * @param importFromId The id of the existing MetaBusinessUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/meta_business_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetaBusinessUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_meta_business_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/meta_business_unit zentral_meta_business_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetaBusinessUnitConfig
  */
  public constructor(scope: Construct, id: string, config: MetaBusinessUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_meta_business_unit',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiEnrollmentEnabled = config.apiEnrollmentEnabled;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_enrollment_enabled - computed: true, optional: true, required: false
  private _apiEnrollmentEnabled?: boolean | cdktf.IResolvable; 
  public get apiEnrollmentEnabled() {
    return this.getBooleanAttribute('api_enrollment_enabled');
  }
  public set apiEnrollmentEnabled(value: boolean | cdktf.IResolvable) {
    this._apiEnrollmentEnabled = value;
  }
  public resetApiEnrollmentEnabled() {
    this._apiEnrollmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEnrollmentEnabledInput() {
    return this._apiEnrollmentEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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
      api_enrollment_enabled: cdktf.booleanToTerraform(this._apiEnrollmentEnabled),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_enrollment_enabled: {
        value: cdktf.booleanToHclTerraform(this._apiEnrollmentEnabled),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
