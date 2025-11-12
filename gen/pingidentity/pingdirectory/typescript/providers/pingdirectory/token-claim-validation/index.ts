// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenClaimValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of all values that the claim must have to be considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#all_required_value TokenClaimValidation#all_required_value}
  */
  readonly allRequiredValue?: string[];
  /**
  * The set of values that the claim may have to be considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#any_required_value TokenClaimValidation#any_required_value}
  */
  readonly anyRequiredValue?: string[];
  /**
  * The name of the claim to be validated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#claim_name TokenClaimValidation#claim_name}
  */
  readonly claimName: string;
  /**
  * A description for this Token Claim Validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#description TokenClaimValidation#description}
  */
  readonly description?: string;
  /**
  * Name of the parent ID Token Validator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#id_token_validator_name TokenClaimValidation#id_token_validator_name}
  */
  readonly idTokenValidatorName: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#name TokenClaimValidation#name}
  */
  readonly name: string;
  /**
  * Specifies the boolean claim's required value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#required_value TokenClaimValidation#required_value}
  */
  readonly requiredValue?: string;
  /**
  * The type of Token Claim Validation resource. Options are ['string-array', 'boolean', 'string']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#type TokenClaimValidation#type}
  */
  readonly type: string;
}
export interface TokenClaimValidationRequiredActions {
}

export function tokenClaimValidationRequiredActionsToTerraform(struct?: TokenClaimValidationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tokenClaimValidationRequiredActionsToHclTerraform(struct?: TokenClaimValidationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TokenClaimValidationRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TokenClaimValidationRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenClaimValidationRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class TokenClaimValidationRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TokenClaimValidationRequiredActionsOutputReference {
    return new TokenClaimValidationRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation pingdirectory_token_claim_validation}
*/
export class TokenClaimValidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_token_claim_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TokenClaimValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TokenClaimValidation to import
  * @param importFromId The id of the existing TokenClaimValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TokenClaimValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_token_claim_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/token_claim_validation pingdirectory_token_claim_validation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenClaimValidationConfig
  */
  public constructor(scope: Construct, id: string, config: TokenClaimValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_token_claim_validation',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allRequiredValue = config.allRequiredValue;
    this._anyRequiredValue = config.anyRequiredValue;
    this._claimName = config.claimName;
    this._description = config.description;
    this._idTokenValidatorName = config.idTokenValidatorName;
    this._name = config.name;
    this._requiredValue = config.requiredValue;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_required_value - computed: true, optional: true, required: false
  private _allRequiredValue?: string[]; 
  public get allRequiredValue() {
    return cdktf.Fn.tolist(this.getListAttribute('all_required_value'));
  }
  public set allRequiredValue(value: string[]) {
    this._allRequiredValue = value;
  }
  public resetAllRequiredValue() {
    this._allRequiredValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequiredValueInput() {
    return this._allRequiredValue;
  }

  // any_required_value - computed: true, optional: true, required: false
  private _anyRequiredValue?: string[]; 
  public get anyRequiredValue() {
    return cdktf.Fn.tolist(this.getListAttribute('any_required_value'));
  }
  public set anyRequiredValue(value: string[]) {
    this._anyRequiredValue = value;
  }
  public resetAnyRequiredValue() {
    this._anyRequiredValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyRequiredValueInput() {
    return this._anyRequiredValue;
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new TokenClaimValidationRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // required_value - computed: false, optional: true, required: false
  private _requiredValue?: string; 
  public get requiredValue() {
    return this.getStringAttribute('required_value');
  }
  public set requiredValue(value: string) {
    this._requiredValue = value;
  }
  public resetRequiredValue() {
    this._requiredValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredValueInput() {
    return this._requiredValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_required_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allRequiredValue),
      any_required_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyRequiredValue),
      claim_name: cdktf.stringToTerraform(this._claimName),
      description: cdktf.stringToTerraform(this._description),
      id_token_validator_name: cdktf.stringToTerraform(this._idTokenValidatorName),
      name: cdktf.stringToTerraform(this._name),
      required_value: cdktf.stringToTerraform(this._requiredValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_required_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allRequiredValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_required_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyRequiredValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      claim_name: {
        value: cdktf.stringToHclTerraform(this._claimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      required_value: {
        value: cdktf.stringToHclTerraform(this._requiredValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
