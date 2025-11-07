// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the description of the agreement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement#description Agreement#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to associate the agreement with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement#environment_id Agreement#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the name of the agreement to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement#name Agreement#name}
  */
  readonly name: string;
  /**
  * A number that specifies the number of days until a user consent to this agreement expires, and users must then be prompted for reconsent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement#reconsent_period_days Agreement#reconsent_period_days}
  */
  readonly reconsentPeriodDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement pingone_agreement}
*/
export class Agreement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_agreement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agreement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agreement to import
  * @param importFromId The id of the existing Agreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agreement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_agreement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement pingone_agreement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgreementConfig
  */
  public constructor(scope: Construct, id: string, config: AgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_agreement',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._reconsentPeriodDays = config.reconsentPeriodDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // reconsent_period_days - computed: false, optional: true, required: false
  private _reconsentPeriodDays?: number; 
  public get reconsentPeriodDays() {
    return this.getNumberAttribute('reconsent_period_days');
  }
  public set reconsentPeriodDays(value: number) {
    this._reconsentPeriodDays = value;
  }
  public resetReconsentPeriodDays() {
    this._reconsentPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconsentPeriodDaysInput() {
    return this._reconsentPeriodDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      reconsent_period_days: cdktf.numberToTerraform(this._reconsentPeriodDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      reconsent_period_days: {
        value: cdktf.numberToHclTerraform(this._reconsentPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
