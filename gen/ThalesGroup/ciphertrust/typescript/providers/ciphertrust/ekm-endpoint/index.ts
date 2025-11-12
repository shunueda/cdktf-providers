// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EkmEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * EKM key algorithm. Default is AES256 if key_type is symmetric otherwise it must be specified. Options: AES256, RSA_SIGN_PSS_2048_SHA256, RSA_SIGN_PSS_3072_SHA256, RSA_SIGN_PSS_4096_SHA256, RSA_SIGN_PSS_4096_SHA512, RSA_SIGN_PKCS1_2048_SHA256, RSA_SIGN_PKCS1_3072_SHA256, RSA_SIGN_PKCS1_4096_SHA256, RSA_SIGN_PKCS1_4096_SHA512, EC_SIGN_P256_SHA256 and EC_SIGN_P384_SHA384. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#algorithm EkmEndpoint#algorithm}
  */
  readonly algorithm?: string;
  /**
  * (Updateable) Applicable to UDE endpoints only. Set to true if unwrap requests must originate from a confidential VM. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#cvm_required_for_unwrap EkmEndpoint#cvm_required_for_unwrap}
  */
  readonly cvmRequiredForUnwrap?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Applicable to UDE endpoints only. Set to true if wrap requests must originate from a confidential VM. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#cvm_required_for_wrap EkmEndpoint#cvm_required_for_wrap}
  */
  readonly cvmRequiredForWrap?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) True by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#enabled EkmEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * EKM endpoint type. Options: ekm or ekm-ude. Default is ekm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#endpoint_type EkmEndpoint#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * For migration from another CM deployment. ID of an existing key to use. If not supplied a new key will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#existing_key_id EkmEndpoint#existing_key_id}
  */
  readonly existingKeyId?: string;
  /**
  * EKM key type. Only symmetric keys are valid for UDE endpoints. Options: symmetric or asymmetric. Default is symmetric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#key_type EkmEndpoint#key_type}
  */
  readonly keyType?: string;
  /**
  * (Updateable) Base URL hostname for the key URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#key_uri_hostname EkmEndpoint#key_uri_hostname}
  */
  readonly keyUriHostname: string;
  /**
  * (Updateable) A list of key:value pairs to store with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#meta EkmEndpoint#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Unique name for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#name EkmEndpoint#name}
  */
  readonly name: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#policy EkmEndpoint#policy}
  */
  readonly policy: EkmEndpointPolicy;
}
export interface EkmEndpointPolicy {
  /**
  * Allowed instance names. Applicable to UDE endpoints only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#attestation_instance_names EkmEndpoint#attestation_instance_names}
  */
  readonly attestationInstanceNames?: string[];
  /**
  * Allowed project IDs. Applicable to UDE endpoints only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#attestation_project_ids EkmEndpoint#attestation_project_ids}
  */
  readonly attestationProjectIds?: string[];
  /**
  * Allowed zones. Applicable to UDE endpoints only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#attestation_zones EkmEndpoint#attestation_zones}
  */
  readonly attestationZones?: string[];
  /**
  * Allowed Service Accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#clients EkmEndpoint#clients}
  */
  readonly clients: string[];
  /**
  * Can not be empty if justification_required is true. Allowed key access justification reasons. Options: REASON_UNSPECIFIED, CUSTOMER_INITIATED_SUPPORT, GOOGLE_INITIATED_SERVICE, THIRD_PARTY_DATA_REQUEST, GOOGLE_INITIATED_REVIEW, CUSTOMER_INITIATED_ACCESS, GOOGLE_INITIATED_SYSTEM_OPERATION, REASON_NOT_EXPECTED, MODIFIED_CUSTOMER_INITIATED_ACCESS and GOOGLE_RESPONSE_TO_PRODUCTION_ALERT. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#justification_reason EkmEndpoint#justification_reason}
  */
  readonly justificationReason?: string[];
  /**
  * Set to true if key access justification should be enforced. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#justification_required EkmEndpoint#justification_required}
  */
  readonly justificationRequired?: boolean | cdktf.IResolvable;
}

export function ekmEndpointPolicyToTerraform(struct?: EkmEndpointPolicyOutputReference | EkmEndpointPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attestation_instance_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attestationInstanceNames),
    attestation_project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attestationProjectIds),
    attestation_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attestationZones),
    clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clients),
    justification_reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.justificationReason),
    justification_required: cdktf.booleanToTerraform(struct!.justificationRequired),
  }
}


export function ekmEndpointPolicyToHclTerraform(struct?: EkmEndpointPolicyOutputReference | EkmEndpointPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attestation_instance_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attestationInstanceNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attestation_project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attestationProjectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attestation_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attestationZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    justification_reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.justificationReason),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    justification_required: {
      value: cdktf.booleanToHclTerraform(struct!.justificationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EkmEndpointPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EkmEndpointPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attestationInstanceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationInstanceNames = this._attestationInstanceNames;
    }
    if (this._attestationProjectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationProjectIds = this._attestationProjectIds;
    }
    if (this._attestationZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationZones = this._attestationZones;
    }
    if (this._clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients;
    }
    if (this._justificationReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.justificationReason = this._justificationReason;
    }
    if (this._justificationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.justificationRequired = this._justificationRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EkmEndpointPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attestationInstanceNames = undefined;
      this._attestationProjectIds = undefined;
      this._attestationZones = undefined;
      this._clients = undefined;
      this._justificationReason = undefined;
      this._justificationRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attestationInstanceNames = value.attestationInstanceNames;
      this._attestationProjectIds = value.attestationProjectIds;
      this._attestationZones = value.attestationZones;
      this._clients = value.clients;
      this._justificationReason = value.justificationReason;
      this._justificationRequired = value.justificationRequired;
    }
  }

  // attestation_instance_names - computed: true, optional: true, required: false
  private _attestationInstanceNames?: string[]; 
  public get attestationInstanceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('attestation_instance_names'));
  }
  public set attestationInstanceNames(value: string[]) {
    this._attestationInstanceNames = value;
  }
  public resetAttestationInstanceNames() {
    this._attestationInstanceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationInstanceNamesInput() {
    return this._attestationInstanceNames;
  }

  // attestation_project_ids - computed: true, optional: true, required: false
  private _attestationProjectIds?: string[]; 
  public get attestationProjectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('attestation_project_ids'));
  }
  public set attestationProjectIds(value: string[]) {
    this._attestationProjectIds = value;
  }
  public resetAttestationProjectIds() {
    this._attestationProjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationProjectIdsInput() {
    return this._attestationProjectIds;
  }

  // attestation_zones - computed: true, optional: true, required: false
  private _attestationZones?: string[]; 
  public get attestationZones() {
    return cdktf.Fn.tolist(this.getListAttribute('attestation_zones'));
  }
  public set attestationZones(value: string[]) {
    this._attestationZones = value;
  }
  public resetAttestationZones() {
    this._attestationZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationZonesInput() {
    return this._attestationZones;
  }

  // clients - computed: false, optional: false, required: true
  private _clients?: string[]; 
  public get clients() {
    return cdktf.Fn.tolist(this.getListAttribute('clients'));
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // justification_reason - computed: true, optional: true, required: false
  private _justificationReason?: string[]; 
  public get justificationReason() {
    return cdktf.Fn.tolist(this.getListAttribute('justification_reason'));
  }
  public set justificationReason(value: string[]) {
    this._justificationReason = value;
  }
  public resetJustificationReason() {
    this._justificationReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationReasonInput() {
    return this._justificationReason;
  }

  // justification_required - computed: true, optional: true, required: false
  private _justificationRequired?: boolean | cdktf.IResolvable; 
  public get justificationRequired() {
    return this.getBooleanAttribute('justification_required');
  }
  public set justificationRequired(value: boolean | cdktf.IResolvable) {
    this._justificationRequired = value;
  }
  public resetJustificationRequired() {
    this._justificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationRequiredInput() {
    return this._justificationRequired;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint ciphertrust_ekm_endpoint}
*/
export class EkmEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_ekm_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EkmEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EkmEndpoint to import
  * @param importFromId The id of the existing EkmEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EkmEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_ekm_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/ekm_endpoint ciphertrust_ekm_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EkmEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EkmEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_ekm_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._cvmRequiredForUnwrap = config.cvmRequiredForUnwrap;
    this._cvmRequiredForWrap = config.cvmRequiredForWrap;
    this._enabled = config.enabled;
    this._endpointType = config.endpointType;
    this._existingKeyId = config.existingKeyId;
    this._keyType = config.keyType;
    this._keyUriHostname = config.keyUriHostname;
    this._meta = config.meta;
    this._name = config.name;
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // cvm_required_for_unwrap - computed: false, optional: true, required: false
  private _cvmRequiredForUnwrap?: boolean | cdktf.IResolvable; 
  public get cvmRequiredForUnwrap() {
    return this.getBooleanAttribute('cvm_required_for_unwrap');
  }
  public set cvmRequiredForUnwrap(value: boolean | cdktf.IResolvable) {
    this._cvmRequiredForUnwrap = value;
  }
  public resetCvmRequiredForUnwrap() {
    this._cvmRequiredForUnwrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmRequiredForUnwrapInput() {
    return this._cvmRequiredForUnwrap;
  }

  // cvm_required_for_wrap - computed: false, optional: true, required: false
  private _cvmRequiredForWrap?: boolean | cdktf.IResolvable; 
  public get cvmRequiredForWrap() {
    return this.getBooleanAttribute('cvm_required_for_wrap');
  }
  public set cvmRequiredForWrap(value: boolean | cdktf.IResolvable) {
    this._cvmRequiredForWrap = value;
  }
  public resetCvmRequiredForWrap() {
    this._cvmRequiredForWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmRequiredForWrapInput() {
    return this._cvmRequiredForWrap;
  }

  // enabled - computed: false, optional: true, required: false
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

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // existing_key_id - computed: false, optional: true, required: false
  private _existingKeyId?: string; 
  public get existingKeyId() {
    return this.getStringAttribute('existing_key_id');
  }
  public set existingKeyId(value: string) {
    this._existingKeyId = value;
  }
  public resetExistingKeyId() {
    this._existingKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingKeyIdInput() {
    return this._existingKeyId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kek_id - computed: true, optional: false, required: false
  public get kekId() {
    return this.getStringAttribute('kek_id');
  }

  // kek_name - computed: true, optional: false, required: false
  public get kekName() {
    return this.getStringAttribute('kek_name');
  }

  // kek_version - computed: true, optional: false, required: false
  public get kekVersion() {
    return this.getStringAttribute('kek_version');
  }

  // key_path - computed: true, optional: false, required: false
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // key_uri - computed: true, optional: false, required: false
  public get keyUri() {
    return this.getStringAttribute('key_uri');
  }

  // key_uri_hostname - computed: false, optional: false, required: true
  private _keyUriHostname?: string; 
  public get keyUriHostname() {
    return this.getStringAttribute('key_uri_hostname');
  }
  public set keyUriHostname(value: string) {
    this._keyUriHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUriHostnameInput() {
    return this._keyUriHostname;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
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

  // raw_policy - computed: true, optional: false, required: false
  public get rawPolicy() {
    return this.getStringAttribute('raw_policy');
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new EkmEndpointPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: EkmEndpointPolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      cvm_required_for_unwrap: cdktf.booleanToTerraform(this._cvmRequiredForUnwrap),
      cvm_required_for_wrap: cdktf.booleanToTerraform(this._cvmRequiredForWrap),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      existing_key_id: cdktf.stringToTerraform(this._existingKeyId),
      key_type: cdktf.stringToTerraform(this._keyType),
      key_uri_hostname: cdktf.stringToTerraform(this._keyUriHostname),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      policy: ekmEndpointPolicyToTerraform(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cvm_required_for_unwrap: {
        value: cdktf.booleanToHclTerraform(this._cvmRequiredForUnwrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cvm_required_for_wrap: {
        value: cdktf.booleanToHclTerraform(this._cvmRequiredForWrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_key_id: {
        value: cdktf.stringToHclTerraform(this._existingKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_uri_hostname: {
        value: cdktf.stringToHclTerraform(this._keyUriHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: ekmEndpointPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EkmEndpointPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
