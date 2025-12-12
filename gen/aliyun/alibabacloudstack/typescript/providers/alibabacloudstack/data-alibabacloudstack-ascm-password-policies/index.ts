// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackAscmPasswordPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#hard_expiry DataAlibabacloudstackAscmPasswordPolicies#hard_expiry}
  */
  readonly hardExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#id DataAlibabacloudstackAscmPasswordPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#ids DataAlibabacloudstackAscmPasswordPolicies#ids}
  */
  readonly ids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#max_login_attempts DataAlibabacloudstackAscmPasswordPolicies#max_login_attempts}
  */
  readonly maxLoginAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#max_password_age DataAlibabacloudstackAscmPasswordPolicies#max_password_age}
  */
  readonly maxPasswordAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#minimum_password_length DataAlibabacloudstackAscmPasswordPolicies#minimum_password_length}
  */
  readonly minimumPasswordLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#output_file DataAlibabacloudstackAscmPasswordPolicies#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#password_reuse_prevention DataAlibabacloudstackAscmPasswordPolicies#password_reuse_prevention}
  */
  readonly passwordReusePrevention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#require_lowercase_characters DataAlibabacloudstackAscmPasswordPolicies#require_lowercase_characters}
  */
  readonly requireLowercaseCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#require_numbers DataAlibabacloudstackAscmPasswordPolicies#require_numbers}
  */
  readonly requireNumbers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#require_symbols DataAlibabacloudstackAscmPasswordPolicies#require_symbols}
  */
  readonly requireSymbols?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#require_uppercase_characters DataAlibabacloudstackAscmPasswordPolicies#require_uppercase_characters}
  */
  readonly requireUppercaseCharacters?: boolean | cdktf.IResolvable;
}
export interface DataAlibabacloudstackAscmPasswordPoliciesPolicies {
}

export function dataAlibabacloudstackAscmPasswordPoliciesPoliciesToTerraform(struct?: DataAlibabacloudstackAscmPasswordPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackAscmPasswordPoliciesPoliciesToHclTerraform(struct?: DataAlibabacloudstackAscmPasswordPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackAscmPasswordPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackAscmPasswordPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackAscmPasswordPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_expiry - computed: true, optional: false, required: false
  public get hardExpiry() {
    return this.getBooleanAttribute('hard_expiry');
  }

  // max_login_attempts - computed: true, optional: false, required: false
  public get maxLoginAttempts() {
    return this.getNumberAttribute('max_login_attempts');
  }

  // max_password_age - computed: true, optional: false, required: false
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
  }

  // minimum_password_length - computed: true, optional: false, required: false
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }

  // password_reuse_prevention - computed: true, optional: false, required: false
  public get passwordReusePrevention() {
    return this.getNumberAttribute('password_reuse_prevention');
  }

  // require_lowercase_characters - computed: true, optional: false, required: false
  public get requireLowercaseCharacters() {
    return this.getBooleanAttribute('require_lowercase_characters');
  }

  // require_numbers - computed: true, optional: false, required: false
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers');
  }

  // require_symbols - computed: true, optional: false, required: false
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols');
  }

  // require_uppercase_characters - computed: true, optional: false, required: false
  public get requireUppercaseCharacters() {
    return this.getBooleanAttribute('require_uppercase_characters');
  }
}

export class DataAlibabacloudstackAscmPasswordPoliciesPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackAscmPasswordPoliciesPoliciesOutputReference {
    return new DataAlibabacloudstackAscmPasswordPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies alibabacloudstack_ascm_password_policies}
*/
export class DataAlibabacloudstackAscmPasswordPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_password_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackAscmPasswordPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackAscmPasswordPolicies to import
  * @param importFromId The id of the existing DataAlibabacloudstackAscmPasswordPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackAscmPasswordPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_password_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/ascm_password_policies alibabacloudstack_ascm_password_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackAscmPasswordPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackAscmPasswordPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_password_policies',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hardExpiry = config.hardExpiry;
    this._id = config.id;
    this._ids = config.ids;
    this._maxLoginAttempts = config.maxLoginAttempts;
    this._maxPasswordAge = config.maxPasswordAge;
    this._minimumPasswordLength = config.minimumPasswordLength;
    this._outputFile = config.outputFile;
    this._passwordReusePrevention = config.passwordReusePrevention;
    this._requireLowercaseCharacters = config.requireLowercaseCharacters;
    this._requireNumbers = config.requireNumbers;
    this._requireSymbols = config.requireSymbols;
    this._requireUppercaseCharacters = config.requireUppercaseCharacters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hard_expiry - computed: true, optional: true, required: false
  private _hardExpiry?: boolean | cdktf.IResolvable; 
  public get hardExpiry() {
    return this.getBooleanAttribute('hard_expiry');
  }
  public set hardExpiry(value: boolean | cdktf.IResolvable) {
    this._hardExpiry = value;
  }
  public resetHardExpiry() {
    this._hardExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardExpiryInput() {
    return this._hardExpiry;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: number[]; 
  public get ids() {
    return this.getNumberListAttribute('ids');
  }
  public set ids(value: number[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // max_login_attempts - computed: false, optional: true, required: false
  private _maxLoginAttempts?: number; 
  public get maxLoginAttempts() {
    return this.getNumberAttribute('max_login_attempts');
  }
  public set maxLoginAttempts(value: number) {
    this._maxLoginAttempts = value;
  }
  public resetMaxLoginAttempts() {
    this._maxLoginAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLoginAttemptsInput() {
    return this._maxLoginAttempts;
  }

  // max_password_age - computed: true, optional: true, required: false
  private _maxPasswordAge?: number; 
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
  }
  public set maxPasswordAge(value: number) {
    this._maxPasswordAge = value;
  }
  public resetMaxPasswordAge() {
    this._maxPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordAgeInput() {
    return this._maxPasswordAge;
  }

  // minimum_password_length - computed: true, optional: true, required: false
  private _minimumPasswordLength?: number; 
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: number) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // password_reuse_prevention - computed: true, optional: true, required: false
  private _passwordReusePrevention?: number; 
  public get passwordReusePrevention() {
    return this.getNumberAttribute('password_reuse_prevention');
  }
  public set passwordReusePrevention(value: number) {
    this._passwordReusePrevention = value;
  }
  public resetPasswordReusePrevention() {
    this._passwordReusePrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordReusePreventionInput() {
    return this._passwordReusePrevention;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAlibabacloudstackAscmPasswordPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // require_lowercase_characters - computed: true, optional: true, required: false
  private _requireLowercaseCharacters?: boolean | cdktf.IResolvable; 
  public get requireLowercaseCharacters() {
    return this.getBooleanAttribute('require_lowercase_characters');
  }
  public set requireLowercaseCharacters(value: boolean | cdktf.IResolvable) {
    this._requireLowercaseCharacters = value;
  }
  public resetRequireLowercaseCharacters() {
    this._requireLowercaseCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLowercaseCharactersInput() {
    return this._requireLowercaseCharacters;
  }

  // require_numbers - computed: true, optional: true, required: false
  private _requireNumbers?: boolean | cdktf.IResolvable; 
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers');
  }
  public set requireNumbers(value: boolean | cdktf.IResolvable) {
    this._requireNumbers = value;
  }
  public resetRequireNumbers() {
    this._requireNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNumbersInput() {
    return this._requireNumbers;
  }

  // require_symbols - computed: true, optional: true, required: false
  private _requireSymbols?: boolean | cdktf.IResolvable; 
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols');
  }
  public set requireSymbols(value: boolean | cdktf.IResolvable) {
    this._requireSymbols = value;
  }
  public resetRequireSymbols() {
    this._requireSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSymbolsInput() {
    return this._requireSymbols;
  }

  // require_uppercase_characters - computed: true, optional: true, required: false
  private _requireUppercaseCharacters?: boolean | cdktf.IResolvable; 
  public get requireUppercaseCharacters() {
    return this.getBooleanAttribute('require_uppercase_characters');
  }
  public set requireUppercaseCharacters(value: boolean | cdktf.IResolvable) {
    this._requireUppercaseCharacters = value;
  }
  public resetRequireUppercaseCharacters() {
    this._requireUppercaseCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireUppercaseCharactersInput() {
    return this._requireUppercaseCharacters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ids),
      max_login_attempts: cdktf.numberToTerraform(this._maxLoginAttempts),
      max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
      minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
      output_file: cdktf.stringToTerraform(this._outputFile),
      password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
      require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
      require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
      require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
      require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hard_expiry: {
        value: cdktf.booleanToHclTerraform(this._hardExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      max_login_attempts: {
        value: cdktf.numberToHclTerraform(this._maxLoginAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_password_age: {
        value: cdktf.numberToHclTerraform(this._maxPasswordAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_length: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_reuse_prevention: {
        value: cdktf.numberToHclTerraform(this._passwordReusePrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_lowercase_characters: {
        value: cdktf.booleanToHclTerraform(this._requireLowercaseCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_numbers: {
        value: cdktf.booleanToHclTerraform(this._requireNumbers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_symbols: {
        value: cdktf.booleanToHclTerraform(this._requireSymbols),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_uppercase_characters: {
        value: cdktf.booleanToHclTerraform(this._requireUppercaseCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
