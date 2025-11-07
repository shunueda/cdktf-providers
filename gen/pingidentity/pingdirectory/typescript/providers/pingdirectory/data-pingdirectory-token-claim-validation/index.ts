// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/token_claim_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryTokenClaimValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent ID Token Validator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/token_claim_validation#id_token_validator_name DataPingdirectoryTokenClaimValidation#id_token_validator_name}
  */
  readonly idTokenValidatorName: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/token_claim_validation#name DataPingdirectoryTokenClaimValidation#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/token_claim_validation pingdirectory_token_claim_validation}
*/
export class DataPingdirectoryTokenClaimValidation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_token_claim_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryTokenClaimValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryTokenClaimValidation to import
  * @param importFromId The id of the existing DataPingdirectoryTokenClaimValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/token_claim_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryTokenClaimValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_token_claim_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/token_claim_validation pingdirectory_token_claim_validation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryTokenClaimValidationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryTokenClaimValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_token_claim_validation',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._idTokenValidatorName = config.idTokenValidatorName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_required_value - computed: true, optional: false, required: false
  public get allRequiredValue() {
    return cdktf.Fn.tolist(this.getListAttribute('all_required_value'));
  }

  // any_required_value - computed: true, optional: false, required: false
  public get anyRequiredValue() {
    return cdktf.Fn.tolist(this.getListAttribute('any_required_value'));
  }

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validator_name - computed: false, optional: false, required: true
  private _idTokenValidatorName?: string; 
  public get idTokenValidatorName() {
    return this.getStringAttribute('id_token_validator_name');
  }
  public set idTokenValidatorName(value: string) {
    this._idTokenValidatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidatorNameInput() {
    return this._idTokenValidatorName;
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

  // required_value - computed: true, optional: false, required: false
  public get requiredValue() {
    return this.getStringAttribute('required_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id_token_validator_name: cdktf.stringToTerraform(this._idTokenValidatorName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id_token_validator_name: {
        value: cdktf.stringToHclTerraform(this._idTokenValidatorName),
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
