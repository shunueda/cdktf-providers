// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultExtendedOperationHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of adjacent time intervals (both before and after the current time) that should be checked when performing authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#adjacent_intervals_to_check DefaultExtendedOperationHandler#adjacent_intervals_to_check}
  */
  readonly adjacentIntervalsToCheck?: number;
  /**
  * Indicates whether clients should be allowed to directly provide a new listener or inter-server certificate chain in the extended request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#allow_remotely_provided_certificates DefaultExtendedOperationHandler#allow_remotely_provided_certificates}
  */
  readonly allowRemotelyProvidedCertificates?: boolean | cdktf.IResolvable;
  /**
  * The types of replace certificate operations that clients will be allowed to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#allowed_operation DefaultExtendedOperationHandler#allowed_operation}
  */
  readonly allowedOperation?: string[];
  /**
  * A set of criteria that client connections must satisfy before they will be allowed to request the associated extended operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#connection_criteria DefaultExtendedOperationHandler#connection_criteria}
  */
  readonly connectionCriteria?: string;
  /**
  * When the `type` attribute is set to:
  *   - `single-use-tokens`: The set of delivery mechanisms that may be used to deliver single-use tokens to users in requests that do not specify one or more preferred delivery mechanisms.
  *   - `deliver-otp`: The set of delivery mechanisms that may be used to deliver one-time passwords to users in requests that do not specify one or more preferred delivery mechanisms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#default_otp_delivery_mechanism DefaultExtendedOperationHandler#default_otp_delivery_mechanism}
  */
  readonly defaultOtpDeliveryMechanism?: string[];
  /**
  * The default password generator that will be used if the selected password policy is not configured with a password generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#default_password_generator DefaultExtendedOperationHandler#default_password_generator}
  */
  readonly defaultPasswordGenerator?: string;
  /**
  * The default password policy that should be used when generating and validating passwords if the request does not specify an alternate policy. If this is not provided, then this Generate Password Extended Operation Handler will use the default password policy defined in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#default_password_policy DefaultExtendedOperationHandler#default_password_policy}
  */
  readonly defaultPasswordPolicy?: string;
  /**
  * The default length of time that a single-use token will be considered valid by the server if the client doesn't specify a duration in the deliver single-use token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#default_single_use_token_validity_duration DefaultExtendedOperationHandler#default_single_use_token_validity_duration}
  */
  readonly defaultSingleUseTokenValidityDuration?: string;
  /**
  * The set of delivery mechanisms that may be used to deliver password reset tokens to users for requests that do not specify one or more preferred delivery mechanisms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#default_token_delivery_mechanism DefaultExtendedOperationHandler#default_token_delivery_mechanism}
  */
  readonly defaultTokenDeliveryMechanism?: string[];
  /**
  * A description for this Extended Operation Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#description DefaultExtendedOperationHandler#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Extended Operation Handler is enabled (that is, whether the types of extended operations are allowed in the server).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#enabled DefaultExtendedOperationHandler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Extended Operation Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#extension_argument DefaultExtendedOperationHandler#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Extended Operation Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#extension_class DefaultExtendedOperationHandler#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * When the `type` attribute is set to:
  *   - `password-modify`: Specifies the name of the identity mapper that should be used in conjunction with the password modify extended operation.
  *   - `deliver-otp`: The identity mapper that should be used to identify the user(s) targeted by the authentication identity contained in the extended request. This will only be used for "u:"-style authentication identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#identity_mapper DefaultExtendedOperationHandler#identity_mapper}
  */
  readonly identityMapper?: string;
  /**
  * The maximum number of passwords that may be generated and returned to the client for a single request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#maximum_passwords_per_request DefaultExtendedOperationHandler#maximum_passwords_per_request}
  */
  readonly maximumPasswordsPerRequest?: number;
  /**
  * The maximum number of attempts that the server may use to generate a password that passes validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#maximum_validation_attempts_per_password DefaultExtendedOperationHandler#maximum_validation_attempts_per_password}
  */
  readonly maximumValidationAttemptsPerPassword?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#name DefaultExtendedOperationHandler#name}
  */
  readonly name: string;
  /**
  * When the `type` attribute is set to:
  *   - `single-use-tokens`: The password generator that will be used to create the single-use token values to be delivered to the end user.
  *   - `deliver-password-reset-token`: The password generator that will be used to create the password reset token values to be delivered to the end user.
  *   - `deliver-otp`: The password generator that will be used to create the one-time password values to be delivered to the end user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#password_generator DefaultExtendedOperationHandler#password_generator}
  */
  readonly passwordGenerator?: string;
  /**
  * The maximum length of time that a password reset token should be considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#password_reset_token_validity_duration DefaultExtendedOperationHandler#password_reset_token_validity_duration}
  */
  readonly passwordResetTokenValidityDuration?: string;
  /**
  * Indicates whether to prevent clients from re-using TOTP passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#prevent_totp_reuse DefaultExtendedOperationHandler#prevent_totp_reuse}
  */
  readonly preventTotpReuse?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should reject attempts to use this extended operation over an insecure connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#reject_insecure_requests DefaultExtendedOperationHandler#reject_insecure_requests}
  */
  readonly rejectInsecureRequests?: boolean | cdktf.IResolvable;
  /**
  * A set of criteria that the extended requests must satisfy before they will be processed by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#request_criteria DefaultExtendedOperationHandler#request_criteria}
  */
  readonly requestCriteria?: string;
  /**
  * The name or OID of the attribute that will be used to hold the shared secret key used during TOTP processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#shared_secret_attribute_type DefaultExtendedOperationHandler#shared_secret_attribute_type}
  */
  readonly sharedSecretAttributeType?: string;
  /**
  * The duration of the time interval used for TOTP processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#time_interval_duration DefaultExtendedOperationHandler#time_interval_duration}
  */
  readonly timeIntervalDuration?: string;
}
export interface DefaultExtendedOperationHandlerRequiredActions {
}

export function defaultExtendedOperationHandlerRequiredActionsToTerraform(struct?: DefaultExtendedOperationHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultExtendedOperationHandlerRequiredActionsToHclTerraform(struct?: DefaultExtendedOperationHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultExtendedOperationHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultExtendedOperationHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultExtendedOperationHandlerRequiredActions | undefined) {
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

export class DefaultExtendedOperationHandlerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultExtendedOperationHandlerRequiredActionsOutputReference {
    return new DefaultExtendedOperationHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler pingdirectory_default_extended_operation_handler}
*/
export class DefaultExtendedOperationHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_extended_operation_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultExtendedOperationHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultExtendedOperationHandler to import
  * @param importFromId The id of the existing DefaultExtendedOperationHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultExtendedOperationHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_extended_operation_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_extended_operation_handler pingdirectory_default_extended_operation_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultExtendedOperationHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultExtendedOperationHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_extended_operation_handler',
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
    this._adjacentIntervalsToCheck = config.adjacentIntervalsToCheck;
    this._allowRemotelyProvidedCertificates = config.allowRemotelyProvidedCertificates;
    this._allowedOperation = config.allowedOperation;
    this._connectionCriteria = config.connectionCriteria;
    this._defaultOtpDeliveryMechanism = config.defaultOtpDeliveryMechanism;
    this._defaultPasswordGenerator = config.defaultPasswordGenerator;
    this._defaultPasswordPolicy = config.defaultPasswordPolicy;
    this._defaultSingleUseTokenValidityDuration = config.defaultSingleUseTokenValidityDuration;
    this._defaultTokenDeliveryMechanism = config.defaultTokenDeliveryMechanism;
    this._description = config.description;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._identityMapper = config.identityMapper;
    this._maximumPasswordsPerRequest = config.maximumPasswordsPerRequest;
    this._maximumValidationAttemptsPerPassword = config.maximumValidationAttemptsPerPassword;
    this._name = config.name;
    this._passwordGenerator = config.passwordGenerator;
    this._passwordResetTokenValidityDuration = config.passwordResetTokenValidityDuration;
    this._preventTotpReuse = config.preventTotpReuse;
    this._rejectInsecureRequests = config.rejectInsecureRequests;
    this._requestCriteria = config.requestCriteria;
    this._sharedSecretAttributeType = config.sharedSecretAttributeType;
    this._timeIntervalDuration = config.timeIntervalDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjacent_intervals_to_check - computed: true, optional: true, required: false
  private _adjacentIntervalsToCheck?: number; 
  public get adjacentIntervalsToCheck() {
    return this.getNumberAttribute('adjacent_intervals_to_check');
  }
  public set adjacentIntervalsToCheck(value: number) {
    this._adjacentIntervalsToCheck = value;
  }
  public resetAdjacentIntervalsToCheck() {
    this._adjacentIntervalsToCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacentIntervalsToCheckInput() {
    return this._adjacentIntervalsToCheck;
  }

  // allow_remotely_provided_certificates - computed: true, optional: true, required: false
  private _allowRemotelyProvidedCertificates?: boolean | cdktf.IResolvable; 
  public get allowRemotelyProvidedCertificates() {
    return this.getBooleanAttribute('allow_remotely_provided_certificates');
  }
  public set allowRemotelyProvidedCertificates(value: boolean | cdktf.IResolvable) {
    this._allowRemotelyProvidedCertificates = value;
  }
  public resetAllowRemotelyProvidedCertificates() {
    this._allowRemotelyProvidedCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemotelyProvidedCertificatesInput() {
    return this._allowRemotelyProvidedCertificates;
  }

  // allowed_operation - computed: true, optional: true, required: false
  private _allowedOperation?: string[]; 
  public get allowedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operation'));
  }
  public set allowedOperation(value: string[]) {
    this._allowedOperation = value;
  }
  public resetAllowedOperation() {
    this._allowedOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOperationInput() {
    return this._allowedOperation;
  }

  // connection_criteria - computed: true, optional: true, required: false
  private _connectionCriteria?: string; 
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }
  public set connectionCriteria(value: string) {
    this._connectionCriteria = value;
  }
  public resetConnectionCriteria() {
    this._connectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCriteriaInput() {
    return this._connectionCriteria;
  }

  // default_otp_delivery_mechanism - computed: true, optional: true, required: false
  private _defaultOtpDeliveryMechanism?: string[]; 
  public get defaultOtpDeliveryMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('default_otp_delivery_mechanism'));
  }
  public set defaultOtpDeliveryMechanism(value: string[]) {
    this._defaultOtpDeliveryMechanism = value;
  }
  public resetDefaultOtpDeliveryMechanism() {
    this._defaultOtpDeliveryMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOtpDeliveryMechanismInput() {
    return this._defaultOtpDeliveryMechanism;
  }

  // default_password_generator - computed: true, optional: true, required: false
  private _defaultPasswordGenerator?: string; 
  public get defaultPasswordGenerator() {
    return this.getStringAttribute('default_password_generator');
  }
  public set defaultPasswordGenerator(value: string) {
    this._defaultPasswordGenerator = value;
  }
  public resetDefaultPasswordGenerator() {
    this._defaultPasswordGenerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPasswordGeneratorInput() {
    return this._defaultPasswordGenerator;
  }

  // default_password_policy - computed: true, optional: true, required: false
  private _defaultPasswordPolicy?: string; 
  public get defaultPasswordPolicy() {
    return this.getStringAttribute('default_password_policy');
  }
  public set defaultPasswordPolicy(value: string) {
    this._defaultPasswordPolicy = value;
  }
  public resetDefaultPasswordPolicy() {
    this._defaultPasswordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPasswordPolicyInput() {
    return this._defaultPasswordPolicy;
  }

  // default_single_use_token_validity_duration - computed: true, optional: true, required: false
  private _defaultSingleUseTokenValidityDuration?: string; 
  public get defaultSingleUseTokenValidityDuration() {
    return this.getStringAttribute('default_single_use_token_validity_duration');
  }
  public set defaultSingleUseTokenValidityDuration(value: string) {
    this._defaultSingleUseTokenValidityDuration = value;
  }
  public resetDefaultSingleUseTokenValidityDuration() {
    this._defaultSingleUseTokenValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSingleUseTokenValidityDurationInput() {
    return this._defaultSingleUseTokenValidityDuration;
  }

  // default_token_delivery_mechanism - computed: true, optional: true, required: false
  private _defaultTokenDeliveryMechanism?: string[]; 
  public get defaultTokenDeliveryMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('default_token_delivery_mechanism'));
  }
  public set defaultTokenDeliveryMechanism(value: string[]) {
    this._defaultTokenDeliveryMechanism = value;
  }
  public resetDefaultTokenDeliveryMechanism() {
    this._defaultTokenDeliveryMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTokenDeliveryMechanismInput() {
    return this._defaultTokenDeliveryMechanism;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_mapper - computed: true, optional: true, required: false
  private _identityMapper?: string; 
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }
  public set identityMapper(value: string) {
    this._identityMapper = value;
  }
  public resetIdentityMapper() {
    this._identityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMapperInput() {
    return this._identityMapper;
  }

  // maximum_passwords_per_request - computed: true, optional: true, required: false
  private _maximumPasswordsPerRequest?: number; 
  public get maximumPasswordsPerRequest() {
    return this.getNumberAttribute('maximum_passwords_per_request');
  }
  public set maximumPasswordsPerRequest(value: number) {
    this._maximumPasswordsPerRequest = value;
  }
  public resetMaximumPasswordsPerRequest() {
    this._maximumPasswordsPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPasswordsPerRequestInput() {
    return this._maximumPasswordsPerRequest;
  }

  // maximum_validation_attempts_per_password - computed: true, optional: true, required: false
  private _maximumValidationAttemptsPerPassword?: number; 
  public get maximumValidationAttemptsPerPassword() {
    return this.getNumberAttribute('maximum_validation_attempts_per_password');
  }
  public set maximumValidationAttemptsPerPassword(value: number) {
    this._maximumValidationAttemptsPerPassword = value;
  }
  public resetMaximumValidationAttemptsPerPassword() {
    this._maximumValidationAttemptsPerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValidationAttemptsPerPasswordInput() {
    return this._maximumValidationAttemptsPerPassword;
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

  // password_generator - computed: true, optional: true, required: false
  private _passwordGenerator?: string; 
  public get passwordGenerator() {
    return this.getStringAttribute('password_generator');
  }
  public set passwordGenerator(value: string) {
    this._passwordGenerator = value;
  }
  public resetPasswordGenerator() {
    this._passwordGenerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGeneratorInput() {
    return this._passwordGenerator;
  }

  // password_reset_token_validity_duration - computed: true, optional: true, required: false
  private _passwordResetTokenValidityDuration?: string; 
  public get passwordResetTokenValidityDuration() {
    return this.getStringAttribute('password_reset_token_validity_duration');
  }
  public set passwordResetTokenValidityDuration(value: string) {
    this._passwordResetTokenValidityDuration = value;
  }
  public resetPasswordResetTokenValidityDuration() {
    this._passwordResetTokenValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetTokenValidityDurationInput() {
    return this._passwordResetTokenValidityDuration;
  }

  // prevent_totp_reuse - computed: true, optional: true, required: false
  private _preventTotpReuse?: boolean | cdktf.IResolvable; 
  public get preventTotpReuse() {
    return this.getBooleanAttribute('prevent_totp_reuse');
  }
  public set preventTotpReuse(value: boolean | cdktf.IResolvable) {
    this._preventTotpReuse = value;
  }
  public resetPreventTotpReuse() {
    this._preventTotpReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventTotpReuseInput() {
    return this._preventTotpReuse;
  }

  // reject_insecure_requests - computed: true, optional: true, required: false
  private _rejectInsecureRequests?: boolean | cdktf.IResolvable; 
  public get rejectInsecureRequests() {
    return this.getBooleanAttribute('reject_insecure_requests');
  }
  public set rejectInsecureRequests(value: boolean | cdktf.IResolvable) {
    this._rejectInsecureRequests = value;
  }
  public resetRejectInsecureRequests() {
    this._rejectInsecureRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectInsecureRequestsInput() {
    return this._rejectInsecureRequests;
  }

  // request_criteria - computed: true, optional: true, required: false
  private _requestCriteria?: string; 
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }
  public set requestCriteria(value: string) {
    this._requestCriteria = value;
  }
  public resetRequestCriteria() {
    this._requestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCriteriaInput() {
    return this._requestCriteria;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultExtendedOperationHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // shared_secret_attribute_type - computed: true, optional: true, required: false
  private _sharedSecretAttributeType?: string; 
  public get sharedSecretAttributeType() {
    return this.getStringAttribute('shared_secret_attribute_type');
  }
  public set sharedSecretAttributeType(value: string) {
    this._sharedSecretAttributeType = value;
  }
  public resetSharedSecretAttributeType() {
    this._sharedSecretAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretAttributeTypeInput() {
    return this._sharedSecretAttributeType;
  }

  // time_interval_duration - computed: true, optional: true, required: false
  private _timeIntervalDuration?: string; 
  public get timeIntervalDuration() {
    return this.getStringAttribute('time_interval_duration');
  }
  public set timeIntervalDuration(value: string) {
    this._timeIntervalDuration = value;
  }
  public resetTimeIntervalDuration() {
    this._timeIntervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalDurationInput() {
    return this._timeIntervalDuration;
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
      adjacent_intervals_to_check: cdktf.numberToTerraform(this._adjacentIntervalsToCheck),
      allow_remotely_provided_certificates: cdktf.booleanToTerraform(this._allowRemotelyProvidedCertificates),
      allowed_operation: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOperation),
      connection_criteria: cdktf.stringToTerraform(this._connectionCriteria),
      default_otp_delivery_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultOtpDeliveryMechanism),
      default_password_generator: cdktf.stringToTerraform(this._defaultPasswordGenerator),
      default_password_policy: cdktf.stringToTerraform(this._defaultPasswordPolicy),
      default_single_use_token_validity_duration: cdktf.stringToTerraform(this._defaultSingleUseTokenValidityDuration),
      default_token_delivery_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultTokenDeliveryMechanism),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      identity_mapper: cdktf.stringToTerraform(this._identityMapper),
      maximum_passwords_per_request: cdktf.numberToTerraform(this._maximumPasswordsPerRequest),
      maximum_validation_attempts_per_password: cdktf.numberToTerraform(this._maximumValidationAttemptsPerPassword),
      name: cdktf.stringToTerraform(this._name),
      password_generator: cdktf.stringToTerraform(this._passwordGenerator),
      password_reset_token_validity_duration: cdktf.stringToTerraform(this._passwordResetTokenValidityDuration),
      prevent_totp_reuse: cdktf.booleanToTerraform(this._preventTotpReuse),
      reject_insecure_requests: cdktf.booleanToTerraform(this._rejectInsecureRequests),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
      shared_secret_attribute_type: cdktf.stringToTerraform(this._sharedSecretAttributeType),
      time_interval_duration: cdktf.stringToTerraform(this._timeIntervalDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjacent_intervals_to_check: {
        value: cdktf.numberToHclTerraform(this._adjacentIntervalsToCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_remotely_provided_certificates: {
        value: cdktf.booleanToHclTerraform(this._allowRemotelyProvidedCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_operation: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOperation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_criteria: {
        value: cdktf.stringToHclTerraform(this._connectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_otp_delivery_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultOtpDeliveryMechanism),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_password_generator: {
        value: cdktf.stringToHclTerraform(this._defaultPasswordGenerator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_password_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPasswordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_single_use_token_validity_duration: {
        value: cdktf.stringToHclTerraform(this._defaultSingleUseTokenValidityDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_token_delivery_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultTokenDeliveryMechanism),
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
      identity_mapper: {
        value: cdktf.stringToHclTerraform(this._identityMapper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_passwords_per_request: {
        value: cdktf.numberToHclTerraform(this._maximumPasswordsPerRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_validation_attempts_per_password: {
        value: cdktf.numberToHclTerraform(this._maximumValidationAttemptsPerPassword),
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
      password_generator: {
        value: cdktf.stringToHclTerraform(this._passwordGenerator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_reset_token_validity_duration: {
        value: cdktf.stringToHclTerraform(this._passwordResetTokenValidityDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_totp_reuse: {
        value: cdktf.booleanToHclTerraform(this._preventTotpReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject_insecure_requests: {
        value: cdktf.booleanToHclTerraform(this._rejectInsecureRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_criteria: {
        value: cdktf.stringToHclTerraform(this._requestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret_attribute_type: {
        value: cdktf.stringToHclTerraform(this._sharedSecretAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_interval_duration: {
        value: cdktf.stringToHclTerraform(this._timeIntervalDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
