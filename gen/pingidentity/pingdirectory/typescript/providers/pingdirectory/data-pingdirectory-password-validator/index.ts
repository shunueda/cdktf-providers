// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPasswordValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_validator#name DataPingdirectoryPasswordValidator#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_validator pingdirectory_password_validator}
*/
export class DataPingdirectoryPasswordValidator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_password_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPasswordValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPasswordValidator to import
  * @param importFromId The id of the existing DataPingdirectoryPasswordValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPasswordValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_password_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_validator pingdirectory_password_validator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPasswordValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPasswordValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_password_validator',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_password_on_service_error - computed: true, optional: false, required: false
  public get acceptPasswordOnServiceError() {
    return this.getBooleanAttribute('accept_password_on_service_error');
  }

  // allow_non_ascii_characters - computed: true, optional: false, required: false
  public get allowNonAsciiCharacters() {
    return this.getBooleanAttribute('allow_non_ascii_characters');
  }

  // allow_unclassified_characters - computed: true, optional: false, required: false
  public get allowUnclassifiedCharacters() {
    return this.getBooleanAttribute('allow_unclassified_characters');
  }

  // allow_unknown_characters - computed: true, optional: false, required: false
  public get allowUnknownCharacters() {
    return this.getBooleanAttribute('allow_unknown_characters');
  }

  // allowed_character_type - computed: true, optional: false, required: false
  public get allowedCharacterType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_character_type'));
  }

  // alternative_password_character_mapping - computed: true, optional: false, required: false
  public get alternativePasswordCharacterMapping() {
    return cdktf.Fn.tolist(this.getListAttribute('alternative_password_character_mapping'));
  }

  // assumed_password_guesses_per_second - computed: true, optional: false, required: false
  public get assumedPasswordGuessesPerSecond() {
    return this.getStringAttribute('assumed_password_guesses_per_second');
  }

  // case_sensitive_validation - computed: true, optional: false, required: false
  public get caseSensitiveValidation() {
    return this.getBooleanAttribute('case_sensitive_validation');
  }

  // character_set - computed: true, optional: false, required: false
  public get characterSet() {
    return cdktf.Fn.tolist(this.getListAttribute('character_set'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dictionary_file - computed: true, optional: false, required: false
  public get dictionaryFile() {
    return this.getStringAttribute('dictionary_file');
  }

  // disallowed_characters - computed: true, optional: false, required: false
  public get disallowedCharacters() {
    return this.getStringAttribute('disallowed_characters');
  }

  // disallowed_leading_characters - computed: true, optional: false, required: false
  public get disallowedLeadingCharacters() {
    return this.getStringAttribute('disallowed_leading_characters');
  }

  // disallowed_trailing_characters - computed: true, optional: false, required: false
  public get disallowedTrailingCharacters() {
    return this.getStringAttribute('disallowed_trailing_characters');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // http_connect_timeout - computed: true, optional: false, required: false
  public get httpConnectTimeout() {
    return this.getStringAttribute('http_connect_timeout');
  }

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // http_response_timeout - computed: true, optional: false, required: false
  public get httpResponseTimeout() {
    return this.getStringAttribute('http_response_timeout');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_leading_non_alphabetic_characters - computed: true, optional: false, required: false
  public get ignoreLeadingNonAlphabeticCharacters() {
    return this.getBooleanAttribute('ignore_leading_non_alphabetic_characters');
  }

  // ignore_trailing_non_alphabetic_characters - computed: true, optional: false, required: false
  public get ignoreTrailingNonAlphabeticCharacters() {
    return this.getBooleanAttribute('ignore_trailing_non_alphabetic_characters');
  }

  // invoke_for_add - computed: true, optional: false, required: false
  public get invokeForAdd() {
    return this.getBooleanAttribute('invoke_for_add');
  }

  // invoke_for_admin_reset - computed: true, optional: false, required: false
  public get invokeForAdminReset() {
    return this.getBooleanAttribute('invoke_for_admin_reset');
  }

  // invoke_for_self_change - computed: true, optional: false, required: false
  public get invokeForSelfChange() {
    return this.getBooleanAttribute('invoke_for_self_change');
  }

  // key_manager_provider - computed: true, optional: false, required: false
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }

  // match_attribute - computed: true, optional: false, required: false
  public get matchAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('match_attribute'));
  }

  // match_behavior - computed: true, optional: false, required: false
  public get matchBehavior() {
    return this.getStringAttribute('match_behavior');
  }

  // match_pattern - computed: true, optional: false, required: false
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }

  // max_consecutive_length - computed: true, optional: false, required: false
  public get maxConsecutiveLength() {
    return this.getNumberAttribute('max_consecutive_length');
  }

  // max_password_length - computed: true, optional: false, required: false
  public get maxPasswordLength() {
    return this.getNumberAttribute('max_password_length');
  }

  // maximum_allowed_percent_of_password - computed: true, optional: false, required: false
  public get maximumAllowedPercentOfPassword() {
    return this.getNumberAttribute('maximum_allowed_percent_of_password');
  }

  // min_password_difference - computed: true, optional: false, required: false
  public get minPasswordDifference() {
    return this.getNumberAttribute('min_password_difference');
  }

  // min_password_length - computed: true, optional: false, required: false
  public get minPasswordLength() {
    return this.getNumberAttribute('min_password_length');
  }

  // min_unique_characters - computed: true, optional: false, required: false
  public get minUniqueCharacters() {
    return this.getNumberAttribute('min_unique_characters');
  }

  // minimum_acceptable_time_to_exhaust_search_space - computed: true, optional: false, required: false
  public get minimumAcceptableTimeToExhaustSearchSpace() {
    return this.getStringAttribute('minimum_acceptable_time_to_exhaust_search_space');
  }

  // minimum_attribute_value_length_for_substring_matches - computed: true, optional: false, required: false
  public get minimumAttributeValueLengthForSubstringMatches() {
    return this.getNumberAttribute('minimum_attribute_value_length_for_substring_matches');
  }

  // minimum_required_character_sets - computed: true, optional: false, required: false
  public get minimumRequiredCharacterSets() {
    return this.getNumberAttribute('minimum_required_character_sets');
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

  // pwned_passwords_base_url - computed: true, optional: false, required: false
  public get pwnedPasswordsBaseUrl() {
    return this.getStringAttribute('pwned_passwords_base_url');
  }

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }

  // strip_diacritical_marks - computed: true, optional: false, required: false
  public get stripDiacriticalMarks() {
    return this.getBooleanAttribute('strip_diacritical_marks');
  }

  // test_attribute_value_substring_of_password - computed: true, optional: false, required: false
  public get testAttributeValueSubstringOfPassword() {
    return this.getBooleanAttribute('test_attribute_value_substring_of_password');
  }

  // test_password_substring_of_attribute_value - computed: true, optional: false, required: false
  public get testPasswordSubstringOfAttributeValue() {
    return this.getBooleanAttribute('test_password_substring_of_attribute_value');
  }

  // test_reversed_password - computed: true, optional: false, required: false
  public get testReversedPassword() {
    return this.getBooleanAttribute('test_reversed_password');
  }

  // trust_manager_provider - computed: true, optional: false, required: false
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validator_failure_message - computed: true, optional: false, required: false
  public get validatorFailureMessage() {
    return this.getStringAttribute('validator_failure_message');
  }

  // validator_requirement_description - computed: true, optional: false, required: false
  public get validatorRequirementDescription() {
    return this.getStringAttribute('validator_requirement_description');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
