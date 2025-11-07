// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#allow_idp_initiated SourceSaml#allow_idp_initiated}
  */
  readonly allowIdpInitiated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#authentication_flow SourceSaml#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Allowed values:
  *   - `REDIRECT`
  *   - `POST`
  *   - `POST_AUTO`
  *  Defaults to `REDIRECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#binding_type SourceSaml#binding_type}
  */
  readonly bindingType?: string;
  /**
  * Allowed values:
  *   - `http://www.w3.org/2000/09/xmldsig#sha1`
  *   - `http://www.w3.org/2001/04/xmlenc#sha256`
  *   - `http://www.w3.org/2001/04/xmldsig-more#sha384`
  *   - `http://www.w3.org/2001/04/xmlenc#sha512`
  *  Defaults to `http://www.w3.org/2001/04/xmlenc#sha256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#digest_algorithm SourceSaml#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#enabled SourceSaml#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#encryption_kp SourceSaml#encryption_kp}
  */
  readonly encryptionKp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#enrollment_flow SourceSaml#enrollment_flow}
  */
  readonly enrollmentFlow?: string;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `name_link`
  *   - `name_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#group_matching_mode SourceSaml#group_matching_mode}
  */
  readonly groupMatchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#id SourceSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#issuer SourceSaml#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#name SourceSaml#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`
  *   - `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`
  *   - `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName`
  *   - `urn:oasis:names:tc:SAML:2.0:nameid-format:WindowsDomainQualifiedName`
  *   - `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`
  *   - `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`
  *  Defaults to `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#name_id_policy SourceSaml#name_id_policy}
  */
  readonly nameIdPolicy?: string;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#policy_engine_mode SourceSaml#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#pre_authentication_flow SourceSaml#pre_authentication_flow}
  */
  readonly preAuthenticationFlow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#property_mappings SourceSaml#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#property_mappings_group SourceSaml#property_mappings_group}
  */
  readonly propertyMappingsGroup?: string[];
  /**
  * Allowed values:
  *   - `http://www.w3.org/2000/09/xmldsig#rsa-sha1`
  *   - `http://www.w3.org/2001/04/xmldsig-more#rsa-sha256`
  *   - `http://www.w3.org/2001/04/xmldsig-more#rsa-sha384`
  *   - `http://www.w3.org/2001/04/xmldsig-more#rsa-sha512`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha384`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha512`
  *   - `http://www.w3.org/2000/09/xmldsig#dsa-sha1`
  *  Defaults to `http://www.w3.org/2001/04/xmldsig-more#rsa-sha256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#signature_algorithm SourceSaml#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#signing_kp SourceSaml#signing_kp}
  */
  readonly signingKp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#slo_url SourceSaml#slo_url}
  */
  readonly sloUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#slug SourceSaml#slug}
  */
  readonly slug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#sso_url SourceSaml#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `days=1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#temporary_user_delete_after SourceSaml#temporary_user_delete_after}
  */
  readonly temporaryUserDeleteAfter?: string;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `email_link`
  *   - `email_deny`
  *   - `username_link`
  *   - `username_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#user_matching_mode SourceSaml#user_matching_mode}
  */
  readonly userMatchingMode?: string;
  /**
  * Defaults to `goauthentik.io/sources/%(slug)s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#user_path_template SourceSaml#user_path_template}
  */
  readonly userPathTemplate?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#uuid SourceSaml#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#verification_kp SourceSaml#verification_kp}
  */
  readonly verificationKp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml authentik_source_saml}
*/
export class SourceSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_source_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceSaml to import
  * @param importFromId The id of the existing SourceSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_source_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_saml authentik_source_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceSamlConfig
  */
  public constructor(scope: Construct, id: string, config: SourceSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_source_saml',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowIdpInitiated = config.allowIdpInitiated;
    this._authenticationFlow = config.authenticationFlow;
    this._bindingType = config.bindingType;
    this._digestAlgorithm = config.digestAlgorithm;
    this._enabled = config.enabled;
    this._encryptionKp = config.encryptionKp;
    this._enrollmentFlow = config.enrollmentFlow;
    this._groupMatchingMode = config.groupMatchingMode;
    this._id = config.id;
    this._issuer = config.issuer;
    this._name = config.name;
    this._nameIdPolicy = config.nameIdPolicy;
    this._policyEngineMode = config.policyEngineMode;
    this._preAuthenticationFlow = config.preAuthenticationFlow;
    this._propertyMappings = config.propertyMappings;
    this._propertyMappingsGroup = config.propertyMappingsGroup;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._signingKp = config.signingKp;
    this._sloUrl = config.sloUrl;
    this._slug = config.slug;
    this._ssoUrl = config.ssoUrl;
    this._temporaryUserDeleteAfter = config.temporaryUserDeleteAfter;
    this._userMatchingMode = config.userMatchingMode;
    this._userPathTemplate = config.userPathTemplate;
    this._uuid = config.uuid;
    this._verificationKp = config.verificationKp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_idp_initiated - computed: false, optional: true, required: false
  private _allowIdpInitiated?: boolean | cdktf.IResolvable; 
  public get allowIdpInitiated() {
    return this.getBooleanAttribute('allow_idp_initiated');
  }
  public set allowIdpInitiated(value: boolean | cdktf.IResolvable) {
    this._allowIdpInitiated = value;
  }
  public resetAllowIdpInitiated() {
    this._allowIdpInitiated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIdpInitiatedInput() {
    return this._allowIdpInitiated;
  }

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow?: string; 
  public get authenticationFlow() {
    return this.getStringAttribute('authentication_flow');
  }
  public set authenticationFlow(value: string) {
    this._authenticationFlow = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow;
  }

  // binding_type - computed: false, optional: true, required: false
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  public resetBindingType() {
    this._bindingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
  }

  // digest_algorithm - computed: false, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
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

  // encryption_kp - computed: false, optional: true, required: false
  private _encryptionKp?: string; 
  public get encryptionKp() {
    return this.getStringAttribute('encryption_kp');
  }
  public set encryptionKp(value: string) {
    this._encryptionKp = value;
  }
  public resetEncryptionKp() {
    this._encryptionKp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKpInput() {
    return this._encryptionKp;
  }

  // enrollment_flow - computed: false, optional: true, required: false
  private _enrollmentFlow?: string; 
  public get enrollmentFlow() {
    return this.getStringAttribute('enrollment_flow');
  }
  public set enrollmentFlow(value: string) {
    this._enrollmentFlow = value;
  }
  public resetEnrollmentFlow() {
    this._enrollmentFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlowInput() {
    return this._enrollmentFlow;
  }

  // group_matching_mode - computed: false, optional: true, required: false
  private _groupMatchingMode?: string; 
  public get groupMatchingMode() {
    return this.getStringAttribute('group_matching_mode');
  }
  public set groupMatchingMode(value: string) {
    this._groupMatchingMode = value;
  }
  public resetGroupMatchingMode() {
    this._groupMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMatchingModeInput() {
    return this._groupMatchingMode;
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

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
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

  // name_id_policy - computed: false, optional: true, required: false
  private _nameIdPolicy?: string; 
  public get nameIdPolicy() {
    return this.getStringAttribute('name_id_policy');
  }
  public set nameIdPolicy(value: string) {
    this._nameIdPolicy = value;
  }
  public resetNameIdPolicy() {
    this._nameIdPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdPolicyInput() {
    return this._nameIdPolicy;
  }

  // policy_engine_mode - computed: false, optional: true, required: false
  private _policyEngineMode?: string; 
  public get policyEngineMode() {
    return this.getStringAttribute('policy_engine_mode');
  }
  public set policyEngineMode(value: string) {
    this._policyEngineMode = value;
  }
  public resetPolicyEngineMode() {
    this._policyEngineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEngineModeInput() {
    return this._policyEngineMode;
  }

  // pre_authentication_flow - computed: false, optional: false, required: true
  private _preAuthenticationFlow?: string; 
  public get preAuthenticationFlow() {
    return this.getStringAttribute('pre_authentication_flow');
  }
  public set preAuthenticationFlow(value: string) {
    this._preAuthenticationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthenticationFlowInput() {
    return this._preAuthenticationFlow;
  }

  // property_mappings - computed: false, optional: true, required: false
  private _propertyMappings?: string[]; 
  public get propertyMappings() {
    return this.getListAttribute('property_mappings');
  }
  public set propertyMappings(value: string[]) {
    this._propertyMappings = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings;
  }

  // property_mappings_group - computed: false, optional: true, required: false
  private _propertyMappingsGroup?: string[]; 
  public get propertyMappingsGroup() {
    return this.getListAttribute('property_mappings_group');
  }
  public set propertyMappingsGroup(value: string[]) {
    this._propertyMappingsGroup = value;
  }
  public resetPropertyMappingsGroup() {
    this._propertyMappingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsGroupInput() {
    return this._propertyMappingsGroup;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signing_kp - computed: false, optional: true, required: false
  private _signingKp?: string; 
  public get signingKp() {
    return this.getStringAttribute('signing_kp');
  }
  public set signingKp(value: string) {
    this._signingKp = value;
  }
  public resetSigningKp() {
    this._signingKp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKpInput() {
    return this._signingKp;
  }

  // slo_url - computed: false, optional: true, required: false
  private _sloUrl?: string; 
  public get sloUrl() {
    return this.getStringAttribute('slo_url');
  }
  public set sloUrl(value: string) {
    this._sloUrl = value;
  }
  public resetSloUrl() {
    this._sloUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloUrlInput() {
    return this._sloUrl;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // temporary_user_delete_after - computed: false, optional: true, required: false
  private _temporaryUserDeleteAfter?: string; 
  public get temporaryUserDeleteAfter() {
    return this.getStringAttribute('temporary_user_delete_after');
  }
  public set temporaryUserDeleteAfter(value: string) {
    this._temporaryUserDeleteAfter = value;
  }
  public resetTemporaryUserDeleteAfter() {
    this._temporaryUserDeleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryUserDeleteAfterInput() {
    return this._temporaryUserDeleteAfter;
  }

  // user_matching_mode - computed: false, optional: true, required: false
  private _userMatchingMode?: string; 
  public get userMatchingMode() {
    return this.getStringAttribute('user_matching_mode');
  }
  public set userMatchingMode(value: string) {
    this._userMatchingMode = value;
  }
  public resetUserMatchingMode() {
    this._userMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchingModeInput() {
    return this._userMatchingMode;
  }

  // user_path_template - computed: false, optional: true, required: false
  private _userPathTemplate?: string; 
  public get userPathTemplate() {
    return this.getStringAttribute('user_path_template');
  }
  public set userPathTemplate(value: string) {
    this._userPathTemplate = value;
  }
  public resetUserPathTemplate() {
    this._userPathTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPathTemplateInput() {
    return this._userPathTemplate;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // verification_kp - computed: false, optional: true, required: false
  private _verificationKp?: string; 
  public get verificationKp() {
    return this.getStringAttribute('verification_kp');
  }
  public set verificationKp(value: string) {
    this._verificationKp = value;
  }
  public resetVerificationKp() {
    this._verificationKp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationKpInput() {
    return this._verificationKp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_idp_initiated: cdktf.booleanToTerraform(this._allowIdpInitiated),
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      binding_type: cdktf.stringToTerraform(this._bindingType),
      digest_algorithm: cdktf.stringToTerraform(this._digestAlgorithm),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encryption_kp: cdktf.stringToTerraform(this._encryptionKp),
      enrollment_flow: cdktf.stringToTerraform(this._enrollmentFlow),
      group_matching_mode: cdktf.stringToTerraform(this._groupMatchingMode),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      name_id_policy: cdktf.stringToTerraform(this._nameIdPolicy),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      pre_authentication_flow: cdktf.stringToTerraform(this._preAuthenticationFlow),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      property_mappings_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappingsGroup),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      signing_kp: cdktf.stringToTerraform(this._signingKp),
      slo_url: cdktf.stringToTerraform(this._sloUrl),
      slug: cdktf.stringToTerraform(this._slug),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      temporary_user_delete_after: cdktf.stringToTerraform(this._temporaryUserDeleteAfter),
      user_matching_mode: cdktf.stringToTerraform(this._userMatchingMode),
      user_path_template: cdktf.stringToTerraform(this._userPathTemplate),
      uuid: cdktf.stringToTerraform(this._uuid),
      verification_kp: cdktf.stringToTerraform(this._verificationKp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_idp_initiated: {
        value: cdktf.booleanToHclTerraform(this._allowIdpInitiated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_flow: {
        value: cdktf.stringToHclTerraform(this._authenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_type: {
        value: cdktf.stringToHclTerraform(this._bindingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_algorithm: {
        value: cdktf.stringToHclTerraform(this._digestAlgorithm),
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
      encryption_kp: {
        value: cdktf.stringToHclTerraform(this._encryptionKp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enrollment_flow: {
        value: cdktf.stringToHclTerraform(this._enrollmentFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_matching_mode: {
        value: cdktf.stringToHclTerraform(this._groupMatchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      name_id_policy: {
        value: cdktf.stringToHclTerraform(this._nameIdPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_engine_mode: {
        value: cdktf.stringToHclTerraform(this._policyEngineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_authentication_flow: {
        value: cdktf.stringToHclTerraform(this._preAuthenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      property_mappings_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappingsGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_kp: {
        value: cdktf.stringToHclTerraform(this._signingKp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slo_url: {
        value: cdktf.stringToHclTerraform(this._sloUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_url: {
        value: cdktf.stringToHclTerraform(this._ssoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_user_delete_after: {
        value: cdktf.stringToHclTerraform(this._temporaryUserDeleteAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_matching_mode: {
        value: cdktf.stringToHclTerraform(this._userMatchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_path_template: {
        value: cdktf.stringToHclTerraform(this._userPathTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_kp: {
        value: cdktf.stringToHclTerraform(this._verificationKp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
