// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/extended_operation_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryExtendedOperationHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/extended_operation_handler#name DataPingdirectoryExtendedOperationHandler#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/extended_operation_handler pingdirectory_extended_operation_handler}
*/
export class DataPingdirectoryExtendedOperationHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_extended_operation_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryExtendedOperationHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryExtendedOperationHandler to import
  * @param importFromId The id of the existing DataPingdirectoryExtendedOperationHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/extended_operation_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryExtendedOperationHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_extended_operation_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/extended_operation_handler pingdirectory_extended_operation_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryExtendedOperationHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryExtendedOperationHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_extended_operation_handler',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjacent_intervals_to_check - computed: true, optional: false, required: false
  public get adjacentIntervalsToCheck() {
    return this.getNumberAttribute('adjacent_intervals_to_check');
  }

  // allow_remotely_provided_certificates - computed: true, optional: false, required: false
  public get allowRemotelyProvidedCertificates() {
    return this.getBooleanAttribute('allow_remotely_provided_certificates');
  }

  // allowed_operation - computed: true, optional: false, required: false
  public get allowedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operation'));
  }

  // connection_criteria - computed: true, optional: false, required: false
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }

  // default_otp_delivery_mechanism - computed: true, optional: false, required: false
  public get defaultOtpDeliveryMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('default_otp_delivery_mechanism'));
  }

  // default_password_generator - computed: true, optional: false, required: false
  public get defaultPasswordGenerator() {
    return this.getStringAttribute('default_password_generator');
  }

  // default_password_policy - computed: true, optional: false, required: false
  public get defaultPasswordPolicy() {
    return this.getStringAttribute('default_password_policy');
  }

  // default_single_use_token_validity_duration - computed: true, optional: false, required: false
  public get defaultSingleUseTokenValidityDuration() {
    return this.getStringAttribute('default_single_use_token_validity_duration');
  }

  // default_token_delivery_mechanism - computed: true, optional: false, required: false
  public get defaultTokenDeliveryMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('default_token_delivery_mechanism'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_mapper - computed: true, optional: false, required: false
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }

  // maximum_passwords_per_request - computed: true, optional: false, required: false
  public get maximumPasswordsPerRequest() {
    return this.getNumberAttribute('maximum_passwords_per_request');
  }

  // maximum_validation_attempts_per_password - computed: true, optional: false, required: false
  public get maximumValidationAttemptsPerPassword() {
    return this.getNumberAttribute('maximum_validation_attempts_per_password');
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

  // password_generator - computed: true, optional: false, required: false
  public get passwordGenerator() {
    return this.getStringAttribute('password_generator');
  }

  // password_reset_token_validity_duration - computed: true, optional: false, required: false
  public get passwordResetTokenValidityDuration() {
    return this.getStringAttribute('password_reset_token_validity_duration');
  }

  // prevent_totp_reuse - computed: true, optional: false, required: false
  public get preventTotpReuse() {
    return this.getBooleanAttribute('prevent_totp_reuse');
  }

  // reject_insecure_requests - computed: true, optional: false, required: false
  public get rejectInsecureRequests() {
    return this.getBooleanAttribute('reject_insecure_requests');
  }

  // request_criteria - computed: true, optional: false, required: false
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }

  // shared_secret_attribute_type - computed: true, optional: false, required: false
  public get sharedSecretAttributeType() {
    return this.getStringAttribute('shared_secret_attribute_type');
  }

  // time_interval_duration - computed: true, optional: false, required: false
  public get timeIntervalDuration() {
    return this.getStringAttribute('time_interval_duration');
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
