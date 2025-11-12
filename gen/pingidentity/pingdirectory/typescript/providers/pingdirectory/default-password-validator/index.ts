// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPasswordValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to accept the proposed password if an error occurs while attempting to interact with the Pwned Passwords service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#accept_password_on_service_error DefaultPasswordValidator#accept_password_on_service_error}
  */
  readonly acceptPasswordOnServiceError?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether passwords will be allowed to include characters from outside the ASCII character set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#allow_non_ascii_characters DefaultPasswordValidator#allow_non_ascii_characters}
  */
  readonly allowNonAsciiCharacters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this password validator allows passwords to contain characters outside of any of the user-defined character sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#allow_unclassified_characters DefaultPasswordValidator#allow_unclassified_characters}
  */
  readonly allowUnclassifiedCharacters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether passwords will be allowed to include characters that are not recognized by the JVM's Unicode support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#allow_unknown_characters DefaultPasswordValidator#allow_unknown_characters}
  */
  readonly allowUnknownCharacters?: boolean | cdktf.IResolvable;
  /**
  * Specifies the set of character types that are allowed to be present in passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#allowed_character_type DefaultPasswordValidator#allowed_character_type}
  */
  readonly allowedCharacterType?: string[];
  /**
  * Provides a set of character substitutions that can be applied to the proposed password when checking to see if it is in the provided dictionary. Each mapping should consist of a single character followed by a colon and a list of the alternative characters that may be used in place of that character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#alternative_password_character_mapping DefaultPasswordValidator#alternative_password_character_mapping}
  */
  readonly alternativePasswordCharacterMapping?: string[];
  /**
  * The number of password guesses per second that a potential attacker may be expected to make.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#assumed_password_guesses_per_second DefaultPasswordValidator#assumed_password_guesses_per_second}
  */
  readonly assumedPasswordGuessesPerSecond?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`repeated-characters`, `unique-characters`]: Indicates whether this password validator should treat password characters in a case-sensitive manner.
  *   - `dictionary`: Indicates whether this password validator is to treat password characters in a case-sensitive manner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#case_sensitive_validation DefaultPasswordValidator#case_sensitive_validation}
  */
  readonly caseSensitiveValidation?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `character-set`: Specifies a character set containing characters that a password may contain and a value indicating the minimum number of characters required from that set.
  *   - `repeated-characters`: Specifies a set of characters that should be considered equivalent for the purpose of this password validator. This can be used, for example, to ensure that passwords contain no more than three consecutive digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#character_set DefaultPasswordValidator#character_set}
  */
  readonly characterSet?: string[];
  /**
  * A description for this Password Validator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#description DefaultPasswordValidator#description}
  */
  readonly description?: string;
  /**
  * Specifies the path to the file containing a list of words that cannot be used as passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#dictionary_file DefaultPasswordValidator#dictionary_file}
  */
  readonly dictionaryFile?: string;
  /**
  * A set of characters that will not be allowed anywhere in a password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#disallowed_characters DefaultPasswordValidator#disallowed_characters}
  */
  readonly disallowedCharacters?: string;
  /**
  * A set of characters that will not be allowed as the first character of the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#disallowed_leading_characters DefaultPasswordValidator#disallowed_leading_characters}
  */
  readonly disallowedLeadingCharacters?: string;
  /**
  * A set of characters that will not be allowed as the last character of the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#disallowed_trailing_characters DefaultPasswordValidator#disallowed_trailing_characters}
  */
  readonly disallowedTrailingCharacters?: string;
  /**
  * Indicates whether the password validator is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#enabled DefaultPasswordValidator#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Password Validator. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#extension_argument DefaultPasswordValidator#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Password Validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#extension_class DefaultPasswordValidator#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. The maximum length of time to wait to obtain an HTTP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#http_connect_timeout DefaultPasswordValidator#http_connect_timeout}
  */
  readonly httpConnectTimeout?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the Pwned Passwords service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#http_proxy_external_server DefaultPasswordValidator#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. The maximum length of time to wait for a response to an HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#http_response_timeout DefaultPasswordValidator#http_response_timeout}
  */
  readonly httpResponseTimeout?: string;
  /**
  * Indicates whether to ignore any digits, symbols, or other non-alphabetic characters that may appear at the beginning of a proposed password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#ignore_leading_non_alphabetic_characters DefaultPasswordValidator#ignore_leading_non_alphabetic_characters}
  */
  readonly ignoreLeadingNonAlphabeticCharacters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to ignore any digits, symbols, or other non-alphabetic characters that may appear at the end of a proposed password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#ignore_trailing_non_alphabetic_characters DefaultPasswordValidator#ignore_trailing_non_alphabetic_characters}
  */
  readonly ignoreTrailingNonAlphabeticCharacters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this password validator should be used to validate clear-text passwords provided in LDAP add requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#invoke_for_add DefaultPasswordValidator#invoke_for_add}
  */
  readonly invokeForAdd?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this password validator should be used to validate clear-text passwords provided by administrators when changing the password for another user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#invoke_for_admin_reset DefaultPasswordValidator#invoke_for_admin_reset}
  */
  readonly invokeForAdminReset?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this password validator should be used to validate clear-text passwords provided by an end user in the course of changing their own password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#invoke_for_self_change DefaultPasswordValidator#invoke_for_self_change}
  */
  readonly invokeForSelfChange?: boolean | cdktf.IResolvable;
  /**
  * Specifies which key manager provider should be used to obtain a client certificate to present to the validation server when performing HTTPS communication. This may be left undefined if communication will not be secured with HTTPS, or if there is no need to present a client certificate to the validation service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#key_manager_provider DefaultPasswordValidator#key_manager_provider}
  */
  readonly keyManagerProvider?: string;
  /**
  * Specifies the name(s) of the attribute(s) whose values should be checked to determine whether they match the provided password. If no values are provided, then the server checks if the proposed password matches the value of any user attribute in the target user's entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#match_attribute DefaultPasswordValidator#match_attribute}
  */
  readonly matchAttribute?: string[];
  /**
  * The behavior to exhibit if a user's proposed password matches the regular expression defined in the match-pattern property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#match_behavior DefaultPasswordValidator#match_behavior}
  */
  readonly matchBehavior?: string;
  /**
  * The regular expression to use for this password validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#match_pattern DefaultPasswordValidator#match_pattern}
  */
  readonly matchPattern?: string;
  /**
  * Specifies the maximum number of times that any character can appear consecutively in a password value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#max_consecutive_length DefaultPasswordValidator#max_consecutive_length}
  */
  readonly maxConsecutiveLength?: number;
  /**
  * Specifies the maximum number of characters that can be included in a proposed password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#max_password_length DefaultPasswordValidator#max_password_length}
  */
  readonly maxPasswordLength?: number;
  /**
  * The maximum allowed percent of a proposed password that any single dictionary word is allowed to comprise. A value of 100 indicates that a proposed password will only be rejected if the dictionary contains the entire proposed password (after any configured transformations have been applied).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#maximum_allowed_percent_of_password DefaultPasswordValidator#maximum_allowed_percent_of_password}
  */
  readonly maximumAllowedPercentOfPassword?: number;
  /**
  * Specifies the minimum difference of new and old password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#min_password_difference DefaultPasswordValidator#min_password_difference}
  */
  readonly minPasswordDifference?: number;
  /**
  * Specifies the minimum number of characters that must be included in a proposed password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#min_password_length DefaultPasswordValidator#min_password_length}
  */
  readonly minPasswordLength?: number;
  /**
  * Specifies the minimum number of unique characters that a password will be allowed to contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#min_unique_characters DefaultPasswordValidator#min_unique_characters}
  */
  readonly minUniqueCharacters?: number;
  /**
  * The minimum length of time (using the configured number of password guesses per second) required to exhaust the entire search space for a proposed password in order for that password to be considered acceptable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#minimum_acceptable_time_to_exhaust_search_space DefaultPasswordValidator#minimum_acceptable_time_to_exhaust_search_space}
  */
  readonly minimumAcceptableTimeToExhaustSearchSpace?: string;
  /**
  * The minimum length that an attribute value must have for it to be considered when rejecting passwords that contain the value of another attribute as a substring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#minimum_attribute_value_length_for_substring_matches DefaultPasswordValidator#minimum_attribute_value_length_for_substring_matches}
  */
  readonly minimumAttributeValueLengthForSubstringMatches?: number;
  /**
  * Specifies the minimum number of character sets that must be represented in a proposed password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#minimum_required_character_sets DefaultPasswordValidator#minimum_required_character_sets}
  */
  readonly minimumRequiredCharacterSets?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#name DefaultPasswordValidator#name}
  */
  readonly name: string;
  /**
  * The base URL for requests used to interact with the Pwned Passwords service. The first five characters of the hexadecimal representation of the unsalted SHA-1 digest of a proposed password will be appended to this base URL to construct the HTTP GET request used to obtain information about potential matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#pwned_passwords_base_url DefaultPasswordValidator#pwned_passwords_base_url}
  */
  readonly pwnedPasswordsBaseUrl?: string;
  /**
  * The set of arguments used to customize the behavior for the Scripted Password Validator. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#script_argument DefaultPasswordValidator#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Password Validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#script_class DefaultPasswordValidator#script_class}
  */
  readonly scriptClass?: string;
  /**
  * Indicates whether to strip characters of any diacritical marks (like accents, cedillas, circumflexes, diaereses, tildes, and umlauts) they may contain. Any characters with a diacritical mark would be replaced with a base version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#strip_diacritical_marks DefaultPasswordValidator#strip_diacritical_marks}
  */
  readonly stripDiacriticalMarks?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to reject any proposed password in which a value in one of the match attributes in the target user's entry is a substring of that password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#test_attribute_value_substring_of_password DefaultPasswordValidator#test_attribute_value_substring_of_password}
  */
  readonly testAttributeValueSubstringOfPassword?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to reject any proposed password that is a substring of a value in one of the match attributes in the target user's entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#test_password_substring_of_attribute_value DefaultPasswordValidator#test_password_substring_of_attribute_value}
  */
  readonly testPasswordSubstringOfAttributeValue?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `attribute-value`: Indicates whether to perform matching against the reversed value of the provided password in addition to the order in which it was given.
  *   - `dictionary`: Indicates whether this password validator is to test the reversed value of the provided password as well as the order in which it was given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#test_reversed_password DefaultPasswordValidator#test_reversed_password}
  */
  readonly testReversedPassword?: boolean | cdktf.IResolvable;
  /**
  * Specifies which trust manager provider should be used to determine whether to trust the certificate presented by the server when performing HTTPS communication. This may be left undefined if HTTPS communication is not needed, or if the validation service presents a certificate that is trusted by the default JVM configuration (which should be the case for the Pwned Password servers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#trust_manager_provider DefaultPasswordValidator#trust_manager_provider}
  */
  readonly trustManagerProvider?: string;
  /**
  * Specifies a message that may be provided to the end user in the event that a proposed password is rejected by this validator. If a value is provided for this property, then it will override any failure message that may have otherwise been generated by the validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#validator_failure_message DefaultPasswordValidator#validator_failure_message}
  */
  readonly validatorFailureMessage?: string;
  /**
  * Specifies a message that can be used to describe the requirements imposed by this password validator to end users. If a value is provided for this property, then it will override any description that may have otherwise been generated by the validator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#validator_requirement_description DefaultPasswordValidator#validator_requirement_description}
  */
  readonly validatorRequirementDescription?: string;
}
export interface DefaultPasswordValidatorRequiredActions {
}

export function defaultPasswordValidatorRequiredActionsToTerraform(struct?: DefaultPasswordValidatorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultPasswordValidatorRequiredActionsToHclTerraform(struct?: DefaultPasswordValidatorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultPasswordValidatorRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultPasswordValidatorRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultPasswordValidatorRequiredActions | undefined) {
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

export class DefaultPasswordValidatorRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultPasswordValidatorRequiredActionsOutputReference {
    return new DefaultPasswordValidatorRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator pingdirectory_default_password_validator}
*/
export class DefaultPasswordValidator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_password_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPasswordValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPasswordValidator to import
  * @param importFromId The id of the existing DefaultPasswordValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPasswordValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_password_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_password_validator pingdirectory_default_password_validator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPasswordValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultPasswordValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_password_validator',
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
    this._acceptPasswordOnServiceError = config.acceptPasswordOnServiceError;
    this._allowNonAsciiCharacters = config.allowNonAsciiCharacters;
    this._allowUnclassifiedCharacters = config.allowUnclassifiedCharacters;
    this._allowUnknownCharacters = config.allowUnknownCharacters;
    this._allowedCharacterType = config.allowedCharacterType;
    this._alternativePasswordCharacterMapping = config.alternativePasswordCharacterMapping;
    this._assumedPasswordGuessesPerSecond = config.assumedPasswordGuessesPerSecond;
    this._caseSensitiveValidation = config.caseSensitiveValidation;
    this._characterSet = config.characterSet;
    this._description = config.description;
    this._dictionaryFile = config.dictionaryFile;
    this._disallowedCharacters = config.disallowedCharacters;
    this._disallowedLeadingCharacters = config.disallowedLeadingCharacters;
    this._disallowedTrailingCharacters = config.disallowedTrailingCharacters;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpConnectTimeout = config.httpConnectTimeout;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._httpResponseTimeout = config.httpResponseTimeout;
    this._ignoreLeadingNonAlphabeticCharacters = config.ignoreLeadingNonAlphabeticCharacters;
    this._ignoreTrailingNonAlphabeticCharacters = config.ignoreTrailingNonAlphabeticCharacters;
    this._invokeForAdd = config.invokeForAdd;
    this._invokeForAdminReset = config.invokeForAdminReset;
    this._invokeForSelfChange = config.invokeForSelfChange;
    this._keyManagerProvider = config.keyManagerProvider;
    this._matchAttribute = config.matchAttribute;
    this._matchBehavior = config.matchBehavior;
    this._matchPattern = config.matchPattern;
    this._maxConsecutiveLength = config.maxConsecutiveLength;
    this._maxPasswordLength = config.maxPasswordLength;
    this._maximumAllowedPercentOfPassword = config.maximumAllowedPercentOfPassword;
    this._minPasswordDifference = config.minPasswordDifference;
    this._minPasswordLength = config.minPasswordLength;
    this._minUniqueCharacters = config.minUniqueCharacters;
    this._minimumAcceptableTimeToExhaustSearchSpace = config.minimumAcceptableTimeToExhaustSearchSpace;
    this._minimumAttributeValueLengthForSubstringMatches = config.minimumAttributeValueLengthForSubstringMatches;
    this._minimumRequiredCharacterSets = config.minimumRequiredCharacterSets;
    this._name = config.name;
    this._pwnedPasswordsBaseUrl = config.pwnedPasswordsBaseUrl;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._stripDiacriticalMarks = config.stripDiacriticalMarks;
    this._testAttributeValueSubstringOfPassword = config.testAttributeValueSubstringOfPassword;
    this._testPasswordSubstringOfAttributeValue = config.testPasswordSubstringOfAttributeValue;
    this._testReversedPassword = config.testReversedPassword;
    this._trustManagerProvider = config.trustManagerProvider;
    this._validatorFailureMessage = config.validatorFailureMessage;
    this._validatorRequirementDescription = config.validatorRequirementDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_password_on_service_error - computed: true, optional: true, required: false
  private _acceptPasswordOnServiceError?: boolean | cdktf.IResolvable; 
  public get acceptPasswordOnServiceError() {
    return this.getBooleanAttribute('accept_password_on_service_error');
  }
  public set acceptPasswordOnServiceError(value: boolean | cdktf.IResolvable) {
    this._acceptPasswordOnServiceError = value;
  }
  public resetAcceptPasswordOnServiceError() {
    this._acceptPasswordOnServiceError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptPasswordOnServiceErrorInput() {
    return this._acceptPasswordOnServiceError;
  }

  // allow_non_ascii_characters - computed: true, optional: true, required: false
  private _allowNonAsciiCharacters?: boolean | cdktf.IResolvable; 
  public get allowNonAsciiCharacters() {
    return this.getBooleanAttribute('allow_non_ascii_characters');
  }
  public set allowNonAsciiCharacters(value: boolean | cdktf.IResolvable) {
    this._allowNonAsciiCharacters = value;
  }
  public resetAllowNonAsciiCharacters() {
    this._allowNonAsciiCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonAsciiCharactersInput() {
    return this._allowNonAsciiCharacters;
  }

  // allow_unclassified_characters - computed: true, optional: true, required: false
  private _allowUnclassifiedCharacters?: boolean | cdktf.IResolvable; 
  public get allowUnclassifiedCharacters() {
    return this.getBooleanAttribute('allow_unclassified_characters');
  }
  public set allowUnclassifiedCharacters(value: boolean | cdktf.IResolvable) {
    this._allowUnclassifiedCharacters = value;
  }
  public resetAllowUnclassifiedCharacters() {
    this._allowUnclassifiedCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnclassifiedCharactersInput() {
    return this._allowUnclassifiedCharacters;
  }

  // allow_unknown_characters - computed: true, optional: true, required: false
  private _allowUnknownCharacters?: boolean | cdktf.IResolvable; 
  public get allowUnknownCharacters() {
    return this.getBooleanAttribute('allow_unknown_characters');
  }
  public set allowUnknownCharacters(value: boolean | cdktf.IResolvable) {
    this._allowUnknownCharacters = value;
  }
  public resetAllowUnknownCharacters() {
    this._allowUnknownCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownCharactersInput() {
    return this._allowUnknownCharacters;
  }

  // allowed_character_type - computed: true, optional: true, required: false
  private _allowedCharacterType?: string[]; 
  public get allowedCharacterType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_character_type'));
  }
  public set allowedCharacterType(value: string[]) {
    this._allowedCharacterType = value;
  }
  public resetAllowedCharacterType() {
    this._allowedCharacterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCharacterTypeInput() {
    return this._allowedCharacterType;
  }

  // alternative_password_character_mapping - computed: true, optional: true, required: false
  private _alternativePasswordCharacterMapping?: string[]; 
  public get alternativePasswordCharacterMapping() {
    return cdktf.Fn.tolist(this.getListAttribute('alternative_password_character_mapping'));
  }
  public set alternativePasswordCharacterMapping(value: string[]) {
    this._alternativePasswordCharacterMapping = value;
  }
  public resetAlternativePasswordCharacterMapping() {
    this._alternativePasswordCharacterMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativePasswordCharacterMappingInput() {
    return this._alternativePasswordCharacterMapping;
  }

  // assumed_password_guesses_per_second - computed: true, optional: true, required: false
  private _assumedPasswordGuessesPerSecond?: string; 
  public get assumedPasswordGuessesPerSecond() {
    return this.getStringAttribute('assumed_password_guesses_per_second');
  }
  public set assumedPasswordGuessesPerSecond(value: string) {
    this._assumedPasswordGuessesPerSecond = value;
  }
  public resetAssumedPasswordGuessesPerSecond() {
    this._assumedPasswordGuessesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumedPasswordGuessesPerSecondInput() {
    return this._assumedPasswordGuessesPerSecond;
  }

  // case_sensitive_validation - computed: true, optional: true, required: false
  private _caseSensitiveValidation?: boolean | cdktf.IResolvable; 
  public get caseSensitiveValidation() {
    return this.getBooleanAttribute('case_sensitive_validation');
  }
  public set caseSensitiveValidation(value: boolean | cdktf.IResolvable) {
    this._caseSensitiveValidation = value;
  }
  public resetCaseSensitiveValidation() {
    this._caseSensitiveValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveValidationInput() {
    return this._caseSensitiveValidation;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string[]; 
  public get characterSet() {
    return cdktf.Fn.tolist(this.getListAttribute('character_set'));
  }
  public set characterSet(value: string[]) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // description - computed: true, optional: true, required: false
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

  // dictionary_file - computed: true, optional: true, required: false
  private _dictionaryFile?: string; 
  public get dictionaryFile() {
    return this.getStringAttribute('dictionary_file');
  }
  public set dictionaryFile(value: string) {
    this._dictionaryFile = value;
  }
  public resetDictionaryFile() {
    this._dictionaryFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryFileInput() {
    return this._dictionaryFile;
  }

  // disallowed_characters - computed: true, optional: true, required: false
  private _disallowedCharacters?: string; 
  public get disallowedCharacters() {
    return this.getStringAttribute('disallowed_characters');
  }
  public set disallowedCharacters(value: string) {
    this._disallowedCharacters = value;
  }
  public resetDisallowedCharacters() {
    this._disallowedCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedCharactersInput() {
    return this._disallowedCharacters;
  }

  // disallowed_leading_characters - computed: true, optional: true, required: false
  private _disallowedLeadingCharacters?: string; 
  public get disallowedLeadingCharacters() {
    return this.getStringAttribute('disallowed_leading_characters');
  }
  public set disallowedLeadingCharacters(value: string) {
    this._disallowedLeadingCharacters = value;
  }
  public resetDisallowedLeadingCharacters() {
    this._disallowedLeadingCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedLeadingCharactersInput() {
    return this._disallowedLeadingCharacters;
  }

  // disallowed_trailing_characters - computed: true, optional: true, required: false
  private _disallowedTrailingCharacters?: string; 
  public get disallowedTrailingCharacters() {
    return this.getStringAttribute('disallowed_trailing_characters');
  }
  public set disallowedTrailingCharacters(value: string) {
    this._disallowedTrailingCharacters = value;
  }
  public resetDisallowedTrailingCharacters() {
    this._disallowedTrailingCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedTrailingCharactersInput() {
    return this._disallowedTrailingCharacters;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: true, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // http_connect_timeout - computed: true, optional: true, required: false
  private _httpConnectTimeout?: string; 
  public get httpConnectTimeout() {
    return this.getStringAttribute('http_connect_timeout');
  }
  public set httpConnectTimeout(value: string) {
    this._httpConnectTimeout = value;
  }
  public resetHttpConnectTimeout() {
    this._httpConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectTimeoutInput() {
    return this._httpConnectTimeout;
  }

  // http_proxy_external_server - computed: true, optional: true, required: false
  private _httpProxyExternalServer?: string; 
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }
  public set httpProxyExternalServer(value: string) {
    this._httpProxyExternalServer = value;
  }
  public resetHttpProxyExternalServer() {
    this._httpProxyExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyExternalServerInput() {
    return this._httpProxyExternalServer;
  }

  // http_response_timeout - computed: true, optional: true, required: false
  private _httpResponseTimeout?: string; 
  public get httpResponseTimeout() {
    return this.getStringAttribute('http_response_timeout');
  }
  public set httpResponseTimeout(value: string) {
    this._httpResponseTimeout = value;
  }
  public resetHttpResponseTimeout() {
    this._httpResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseTimeoutInput() {
    return this._httpResponseTimeout;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_leading_non_alphabetic_characters - computed: true, optional: true, required: false
  private _ignoreLeadingNonAlphabeticCharacters?: boolean | cdktf.IResolvable; 
  public get ignoreLeadingNonAlphabeticCharacters() {
    return this.getBooleanAttribute('ignore_leading_non_alphabetic_characters');
  }
  public set ignoreLeadingNonAlphabeticCharacters(value: boolean | cdktf.IResolvable) {
    this._ignoreLeadingNonAlphabeticCharacters = value;
  }
  public resetIgnoreLeadingNonAlphabeticCharacters() {
    this._ignoreLeadingNonAlphabeticCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLeadingNonAlphabeticCharactersInput() {
    return this._ignoreLeadingNonAlphabeticCharacters;
  }

  // ignore_trailing_non_alphabetic_characters - computed: true, optional: true, required: false
  private _ignoreTrailingNonAlphabeticCharacters?: boolean | cdktf.IResolvable; 
  public get ignoreTrailingNonAlphabeticCharacters() {
    return this.getBooleanAttribute('ignore_trailing_non_alphabetic_characters');
  }
  public set ignoreTrailingNonAlphabeticCharacters(value: boolean | cdktf.IResolvable) {
    this._ignoreTrailingNonAlphabeticCharacters = value;
  }
  public resetIgnoreTrailingNonAlphabeticCharacters() {
    this._ignoreTrailingNonAlphabeticCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTrailingNonAlphabeticCharactersInput() {
    return this._ignoreTrailingNonAlphabeticCharacters;
  }

  // invoke_for_add - computed: true, optional: true, required: false
  private _invokeForAdd?: boolean | cdktf.IResolvable; 
  public get invokeForAdd() {
    return this.getBooleanAttribute('invoke_for_add');
  }
  public set invokeForAdd(value: boolean | cdktf.IResolvable) {
    this._invokeForAdd = value;
  }
  public resetInvokeForAdd() {
    this._invokeForAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeForAddInput() {
    return this._invokeForAdd;
  }

  // invoke_for_admin_reset - computed: true, optional: true, required: false
  private _invokeForAdminReset?: boolean | cdktf.IResolvable; 
  public get invokeForAdminReset() {
    return this.getBooleanAttribute('invoke_for_admin_reset');
  }
  public set invokeForAdminReset(value: boolean | cdktf.IResolvable) {
    this._invokeForAdminReset = value;
  }
  public resetInvokeForAdminReset() {
    this._invokeForAdminReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeForAdminResetInput() {
    return this._invokeForAdminReset;
  }

  // invoke_for_self_change - computed: true, optional: true, required: false
  private _invokeForSelfChange?: boolean | cdktf.IResolvable; 
  public get invokeForSelfChange() {
    return this.getBooleanAttribute('invoke_for_self_change');
  }
  public set invokeForSelfChange(value: boolean | cdktf.IResolvable) {
    this._invokeForSelfChange = value;
  }
  public resetInvokeForSelfChange() {
    this._invokeForSelfChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeForSelfChangeInput() {
    return this._invokeForSelfChange;
  }

  // key_manager_provider - computed: true, optional: true, required: false
  private _keyManagerProvider?: string; 
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }
  public set keyManagerProvider(value: string) {
    this._keyManagerProvider = value;
  }
  public resetKeyManagerProvider() {
    this._keyManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagerProviderInput() {
    return this._keyManagerProvider;
  }

  // match_attribute - computed: true, optional: true, required: false
  private _matchAttribute?: string[]; 
  public get matchAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('match_attribute'));
  }
  public set matchAttribute(value: string[]) {
    this._matchAttribute = value;
  }
  public resetMatchAttribute() {
    this._matchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAttributeInput() {
    return this._matchAttribute;
  }

  // match_behavior - computed: true, optional: true, required: false
  private _matchBehavior?: string; 
  public get matchBehavior() {
    return this.getStringAttribute('match_behavior');
  }
  public set matchBehavior(value: string) {
    this._matchBehavior = value;
  }
  public resetMatchBehavior() {
    this._matchBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBehaviorInput() {
    return this._matchBehavior;
  }

  // match_pattern - computed: true, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }

  // max_consecutive_length - computed: true, optional: true, required: false
  private _maxConsecutiveLength?: number; 
  public get maxConsecutiveLength() {
    return this.getNumberAttribute('max_consecutive_length');
  }
  public set maxConsecutiveLength(value: number) {
    this._maxConsecutiveLength = value;
  }
  public resetMaxConsecutiveLength() {
    this._maxConsecutiveLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConsecutiveLengthInput() {
    return this._maxConsecutiveLength;
  }

  // max_password_length - computed: true, optional: true, required: false
  private _maxPasswordLength?: number; 
  public get maxPasswordLength() {
    return this.getNumberAttribute('max_password_length');
  }
  public set maxPasswordLength(value: number) {
    this._maxPasswordLength = value;
  }
  public resetMaxPasswordLength() {
    this._maxPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordLengthInput() {
    return this._maxPasswordLength;
  }

  // maximum_allowed_percent_of_password - computed: true, optional: true, required: false
  private _maximumAllowedPercentOfPassword?: number; 
  public get maximumAllowedPercentOfPassword() {
    return this.getNumberAttribute('maximum_allowed_percent_of_password');
  }
  public set maximumAllowedPercentOfPassword(value: number) {
    this._maximumAllowedPercentOfPassword = value;
  }
  public resetMaximumAllowedPercentOfPassword() {
    this._maximumAllowedPercentOfPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAllowedPercentOfPasswordInput() {
    return this._maximumAllowedPercentOfPassword;
  }

  // min_password_difference - computed: true, optional: true, required: false
  private _minPasswordDifference?: number; 
  public get minPasswordDifference() {
    return this.getNumberAttribute('min_password_difference');
  }
  public set minPasswordDifference(value: number) {
    this._minPasswordDifference = value;
  }
  public resetMinPasswordDifference() {
    this._minPasswordDifference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordDifferenceInput() {
    return this._minPasswordDifference;
  }

  // min_password_length - computed: true, optional: true, required: false
  private _minPasswordLength?: number; 
  public get minPasswordLength() {
    return this.getNumberAttribute('min_password_length');
  }
  public set minPasswordLength(value: number) {
    this._minPasswordLength = value;
  }
  public resetMinPasswordLength() {
    this._minPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordLengthInput() {
    return this._minPasswordLength;
  }

  // min_unique_characters - computed: true, optional: true, required: false
  private _minUniqueCharacters?: number; 
  public get minUniqueCharacters() {
    return this.getNumberAttribute('min_unique_characters');
  }
  public set minUniqueCharacters(value: number) {
    this._minUniqueCharacters = value;
  }
  public resetMinUniqueCharacters() {
    this._minUniqueCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUniqueCharactersInput() {
    return this._minUniqueCharacters;
  }

  // minimum_acceptable_time_to_exhaust_search_space - computed: true, optional: true, required: false
  private _minimumAcceptableTimeToExhaustSearchSpace?: string; 
  public get minimumAcceptableTimeToExhaustSearchSpace() {
    return this.getStringAttribute('minimum_acceptable_time_to_exhaust_search_space');
  }
  public set minimumAcceptableTimeToExhaustSearchSpace(value: string) {
    this._minimumAcceptableTimeToExhaustSearchSpace = value;
  }
  public resetMinimumAcceptableTimeToExhaustSearchSpace() {
    this._minimumAcceptableTimeToExhaustSearchSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAcceptableTimeToExhaustSearchSpaceInput() {
    return this._minimumAcceptableTimeToExhaustSearchSpace;
  }

  // minimum_attribute_value_length_for_substring_matches - computed: true, optional: true, required: false
  private _minimumAttributeValueLengthForSubstringMatches?: number; 
  public get minimumAttributeValueLengthForSubstringMatches() {
    return this.getNumberAttribute('minimum_attribute_value_length_for_substring_matches');
  }
  public set minimumAttributeValueLengthForSubstringMatches(value: number) {
    this._minimumAttributeValueLengthForSubstringMatches = value;
  }
  public resetMinimumAttributeValueLengthForSubstringMatches() {
    this._minimumAttributeValueLengthForSubstringMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAttributeValueLengthForSubstringMatchesInput() {
    return this._minimumAttributeValueLengthForSubstringMatches;
  }

  // minimum_required_character_sets - computed: true, optional: true, required: false
  private _minimumRequiredCharacterSets?: number; 
  public get minimumRequiredCharacterSets() {
    return this.getNumberAttribute('minimum_required_character_sets');
  }
  public set minimumRequiredCharacterSets(value: number) {
    this._minimumRequiredCharacterSets = value;
  }
  public resetMinimumRequiredCharacterSets() {
    this._minimumRequiredCharacterSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRequiredCharacterSetsInput() {
    return this._minimumRequiredCharacterSets;
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

  // pwned_passwords_base_url - computed: true, optional: true, required: false
  private _pwnedPasswordsBaseUrl?: string; 
  public get pwnedPasswordsBaseUrl() {
    return this.getStringAttribute('pwned_passwords_base_url');
  }
  public set pwnedPasswordsBaseUrl(value: string) {
    this._pwnedPasswordsBaseUrl = value;
  }
  public resetPwnedPasswordsBaseUrl() {
    this._pwnedPasswordsBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwnedPasswordsBaseUrlInput() {
    return this._pwnedPasswordsBaseUrl;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultPasswordValidatorRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: true, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
  }

  // strip_diacritical_marks - computed: true, optional: true, required: false
  private _stripDiacriticalMarks?: boolean | cdktf.IResolvable; 
  public get stripDiacriticalMarks() {
    return this.getBooleanAttribute('strip_diacritical_marks');
  }
  public set stripDiacriticalMarks(value: boolean | cdktf.IResolvable) {
    this._stripDiacriticalMarks = value;
  }
  public resetStripDiacriticalMarks() {
    this._stripDiacriticalMarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripDiacriticalMarksInput() {
    return this._stripDiacriticalMarks;
  }

  // test_attribute_value_substring_of_password - computed: true, optional: true, required: false
  private _testAttributeValueSubstringOfPassword?: boolean | cdktf.IResolvable; 
  public get testAttributeValueSubstringOfPassword() {
    return this.getBooleanAttribute('test_attribute_value_substring_of_password');
  }
  public set testAttributeValueSubstringOfPassword(value: boolean | cdktf.IResolvable) {
    this._testAttributeValueSubstringOfPassword = value;
  }
  public resetTestAttributeValueSubstringOfPassword() {
    this._testAttributeValueSubstringOfPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testAttributeValueSubstringOfPasswordInput() {
    return this._testAttributeValueSubstringOfPassword;
  }

  // test_password_substring_of_attribute_value - computed: true, optional: true, required: false
  private _testPasswordSubstringOfAttributeValue?: boolean | cdktf.IResolvable; 
  public get testPasswordSubstringOfAttributeValue() {
    return this.getBooleanAttribute('test_password_substring_of_attribute_value');
  }
  public set testPasswordSubstringOfAttributeValue(value: boolean | cdktf.IResolvable) {
    this._testPasswordSubstringOfAttributeValue = value;
  }
  public resetTestPasswordSubstringOfAttributeValue() {
    this._testPasswordSubstringOfAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testPasswordSubstringOfAttributeValueInput() {
    return this._testPasswordSubstringOfAttributeValue;
  }

  // test_reversed_password - computed: true, optional: true, required: false
  private _testReversedPassword?: boolean | cdktf.IResolvable; 
  public get testReversedPassword() {
    return this.getBooleanAttribute('test_reversed_password');
  }
  public set testReversedPassword(value: boolean | cdktf.IResolvable) {
    this._testReversedPassword = value;
  }
  public resetTestReversedPassword() {
    this._testReversedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testReversedPasswordInput() {
    return this._testReversedPassword;
  }

  // trust_manager_provider - computed: true, optional: true, required: false
  private _trustManagerProvider?: string; 
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }
  public set trustManagerProvider(value: string) {
    this._trustManagerProvider = value;
  }
  public resetTrustManagerProvider() {
    this._trustManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustManagerProviderInput() {
    return this._trustManagerProvider;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validator_failure_message - computed: true, optional: true, required: false
  private _validatorFailureMessage?: string; 
  public get validatorFailureMessage() {
    return this.getStringAttribute('validator_failure_message');
  }
  public set validatorFailureMessage(value: string) {
    this._validatorFailureMessage = value;
  }
  public resetValidatorFailureMessage() {
    this._validatorFailureMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorFailureMessageInput() {
    return this._validatorFailureMessage;
  }

  // validator_requirement_description - computed: true, optional: true, required: false
  private _validatorRequirementDescription?: string; 
  public get validatorRequirementDescription() {
    return this.getStringAttribute('validator_requirement_description');
  }
  public set validatorRequirementDescription(value: string) {
    this._validatorRequirementDescription = value;
  }
  public resetValidatorRequirementDescription() {
    this._validatorRequirementDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorRequirementDescriptionInput() {
    return this._validatorRequirementDescription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_password_on_service_error: cdktf.booleanToTerraform(this._acceptPasswordOnServiceError),
      allow_non_ascii_characters: cdktf.booleanToTerraform(this._allowNonAsciiCharacters),
      allow_unclassified_characters: cdktf.booleanToTerraform(this._allowUnclassifiedCharacters),
      allow_unknown_characters: cdktf.booleanToTerraform(this._allowUnknownCharacters),
      allowed_character_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCharacterType),
      alternative_password_character_mapping: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alternativePasswordCharacterMapping),
      assumed_password_guesses_per_second: cdktf.stringToTerraform(this._assumedPasswordGuessesPerSecond),
      case_sensitive_validation: cdktf.booleanToTerraform(this._caseSensitiveValidation),
      character_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._characterSet),
      description: cdktf.stringToTerraform(this._description),
      dictionary_file: cdktf.stringToTerraform(this._dictionaryFile),
      disallowed_characters: cdktf.stringToTerraform(this._disallowedCharacters),
      disallowed_leading_characters: cdktf.stringToTerraform(this._disallowedLeadingCharacters),
      disallowed_trailing_characters: cdktf.stringToTerraform(this._disallowedTrailingCharacters),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_connect_timeout: cdktf.stringToTerraform(this._httpConnectTimeout),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      http_response_timeout: cdktf.stringToTerraform(this._httpResponseTimeout),
      ignore_leading_non_alphabetic_characters: cdktf.booleanToTerraform(this._ignoreLeadingNonAlphabeticCharacters),
      ignore_trailing_non_alphabetic_characters: cdktf.booleanToTerraform(this._ignoreTrailingNonAlphabeticCharacters),
      invoke_for_add: cdktf.booleanToTerraform(this._invokeForAdd),
      invoke_for_admin_reset: cdktf.booleanToTerraform(this._invokeForAdminReset),
      invoke_for_self_change: cdktf.booleanToTerraform(this._invokeForSelfChange),
      key_manager_provider: cdktf.stringToTerraform(this._keyManagerProvider),
      match_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchAttribute),
      match_behavior: cdktf.stringToTerraform(this._matchBehavior),
      match_pattern: cdktf.stringToTerraform(this._matchPattern),
      max_consecutive_length: cdktf.numberToTerraform(this._maxConsecutiveLength),
      max_password_length: cdktf.numberToTerraform(this._maxPasswordLength),
      maximum_allowed_percent_of_password: cdktf.numberToTerraform(this._maximumAllowedPercentOfPassword),
      min_password_difference: cdktf.numberToTerraform(this._minPasswordDifference),
      min_password_length: cdktf.numberToTerraform(this._minPasswordLength),
      min_unique_characters: cdktf.numberToTerraform(this._minUniqueCharacters),
      minimum_acceptable_time_to_exhaust_search_space: cdktf.stringToTerraform(this._minimumAcceptableTimeToExhaustSearchSpace),
      minimum_attribute_value_length_for_substring_matches: cdktf.numberToTerraform(this._minimumAttributeValueLengthForSubstringMatches),
      minimum_required_character_sets: cdktf.numberToTerraform(this._minimumRequiredCharacterSets),
      name: cdktf.stringToTerraform(this._name),
      pwned_passwords_base_url: cdktf.stringToTerraform(this._pwnedPasswordsBaseUrl),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      strip_diacritical_marks: cdktf.booleanToTerraform(this._stripDiacriticalMarks),
      test_attribute_value_substring_of_password: cdktf.booleanToTerraform(this._testAttributeValueSubstringOfPassword),
      test_password_substring_of_attribute_value: cdktf.booleanToTerraform(this._testPasswordSubstringOfAttributeValue),
      test_reversed_password: cdktf.booleanToTerraform(this._testReversedPassword),
      trust_manager_provider: cdktf.stringToTerraform(this._trustManagerProvider),
      validator_failure_message: cdktf.stringToTerraform(this._validatorFailureMessage),
      validator_requirement_description: cdktf.stringToTerraform(this._validatorRequirementDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_password_on_service_error: {
        value: cdktf.booleanToHclTerraform(this._acceptPasswordOnServiceError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_non_ascii_characters: {
        value: cdktf.booleanToHclTerraform(this._allowNonAsciiCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_unclassified_characters: {
        value: cdktf.booleanToHclTerraform(this._allowUnclassifiedCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_unknown_characters: {
        value: cdktf.booleanToHclTerraform(this._allowUnknownCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_character_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCharacterType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alternative_password_character_mapping: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alternativePasswordCharacterMapping),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      assumed_password_guesses_per_second: {
        value: cdktf.stringToHclTerraform(this._assumedPasswordGuessesPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case_sensitive_validation: {
        value: cdktf.booleanToHclTerraform(this._caseSensitiveValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      character_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._characterSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary_file: {
        value: cdktf.stringToHclTerraform(this._dictionaryFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowed_characters: {
        value: cdktf.stringToHclTerraform(this._disallowedCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowed_leading_characters: {
        value: cdktf.stringToHclTerraform(this._disallowedLeadingCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowed_trailing_characters: {
        value: cdktf.stringToHclTerraform(this._disallowedTrailingCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_connect_timeout: {
        value: cdktf.stringToHclTerraform(this._httpConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_timeout: {
        value: cdktf.stringToHclTerraform(this._httpResponseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_leading_non_alphabetic_characters: {
        value: cdktf.booleanToHclTerraform(this._ignoreLeadingNonAlphabeticCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_trailing_non_alphabetic_characters: {
        value: cdktf.booleanToHclTerraform(this._ignoreTrailingNonAlphabeticCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      invoke_for_add: {
        value: cdktf.booleanToHclTerraform(this._invokeForAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      invoke_for_admin_reset: {
        value: cdktf.booleanToHclTerraform(this._invokeForAdminReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      invoke_for_self_change: {
        value: cdktf.booleanToHclTerraform(this._invokeForSelfChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_manager_provider: {
        value: cdktf.stringToHclTerraform(this._keyManagerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      match_behavior: {
        value: cdktf.stringToHclTerraform(this._matchBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_pattern: {
        value: cdktf.stringToHclTerraform(this._matchPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_consecutive_length: {
        value: cdktf.numberToHclTerraform(this._maxConsecutiveLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_password_length: {
        value: cdktf.numberToHclTerraform(this._maxPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_allowed_percent_of_password: {
        value: cdktf.numberToHclTerraform(this._maximumAllowedPercentOfPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_password_difference: {
        value: cdktf.numberToHclTerraform(this._minPasswordDifference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_password_length: {
        value: cdktf.numberToHclTerraform(this._minPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_unique_characters: {
        value: cdktf.numberToHclTerraform(this._minUniqueCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_acceptable_time_to_exhaust_search_space: {
        value: cdktf.stringToHclTerraform(this._minimumAcceptableTimeToExhaustSearchSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_attribute_value_length_for_substring_matches: {
        value: cdktf.numberToHclTerraform(this._minimumAttributeValueLengthForSubstringMatches),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_required_character_sets: {
        value: cdktf.numberToHclTerraform(this._minimumRequiredCharacterSets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwned_passwords_base_url: {
        value: cdktf.stringToHclTerraform(this._pwnedPasswordsBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_diacritical_marks: {
        value: cdktf.booleanToHclTerraform(this._stripDiacriticalMarks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_attribute_value_substring_of_password: {
        value: cdktf.booleanToHclTerraform(this._testAttributeValueSubstringOfPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_password_substring_of_attribute_value: {
        value: cdktf.booleanToHclTerraform(this._testPasswordSubstringOfAttributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_reversed_password: {
        value: cdktf.booleanToHclTerraform(this._testReversedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trust_manager_provider: {
        value: cdktf.stringToHclTerraform(this._trustManagerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validator_failure_message: {
        value: cdktf.stringToHclTerraform(this._validatorFailureMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validator_requirement_description: {
        value: cdktf.stringToHclTerraform(this._validatorRequirementDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
