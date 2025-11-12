// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#archived Certificate#archived}
  */
  readonly archived?: string;
  /**
  * The encoded data of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#certificate_data Certificate#certificate_data}
  */
  readonly certificateData: string;
  /**
  * Specifies the archive file format used for storing cryptography objects in the certificate. Valid formats are `Der`, `Pem`, `Pkcs12`, or `Unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#certificate_data_format Certificate#certificate_data_format}
  */
  readonly certificateDataFormat?: string;
  /**
  * A set of environment IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#environments Certificate#environments}
  */
  readonly environments?: string[];
  /**
  * Indicates if the certificate has a private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#has_private_key Certificate#has_private_key}
  */
  readonly hasPrivateKey?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the certificate has expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#is_expired Certificate#is_expired}
  */
  readonly isExpired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#issuer_common_name Certificate#issuer_common_name}
  */
  readonly issuerCommonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#issuer_distinguished_name Certificate#issuer_distinguished_name}
  */
  readonly issuerDistinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#issuer_organization Certificate#issuer_organization}
  */
  readonly issuerOrganization?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#name Certificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#not_after Certificate#not_after}
  */
  readonly notAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#not_before Certificate#not_before}
  */
  readonly notBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#notes Certificate#notes}
  */
  readonly notes?: string;
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#password Certificate#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#replaced_by Certificate#replaced_by}
  */
  readonly replacedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#self_signed Certificate#self_signed}
  */
  readonly selfSigned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#serial_number Certificate#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#signature_algorithm_name Certificate#signature_algorithm_name}
  */
  readonly signatureAlgorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#space_id Certificate#space_id}
  */
  readonly spaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#subject_common_name Certificate#subject_common_name}
  */
  readonly subjectCommonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#subject_distinguished_name Certificate#subject_distinguished_name}
  */
  readonly subjectDistinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#subject_organization Certificate#subject_organization}
  */
  readonly subjectOrganization?: string;
  /**
  * A list of tenant tags associated with this certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#tenant_tags Certificate#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#tenanted_deployment_participation Certificate#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#tenants Certificate#tenants}
  */
  readonly tenants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#thumbprint Certificate#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#version Certificate#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate octopusdeploy_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/certificate octopusdeploy_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_certificate',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archived = config.archived;
    this._certificateData = config.certificateData;
    this._certificateDataFormat = config.certificateDataFormat;
    this._environments = config.environments;
    this._hasPrivateKey = config.hasPrivateKey;
    this._isExpired = config.isExpired;
    this._issuerCommonName = config.issuerCommonName;
    this._issuerDistinguishedName = config.issuerDistinguishedName;
    this._issuerOrganization = config.issuerOrganization;
    this._name = config.name;
    this._notAfter = config.notAfter;
    this._notBefore = config.notBefore;
    this._notes = config.notes;
    this._password = config.password;
    this._replacedBy = config.replacedBy;
    this._selfSigned = config.selfSigned;
    this._serialNumber = config.serialNumber;
    this._signatureAlgorithmName = config.signatureAlgorithmName;
    this._spaceId = config.spaceId;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._subjectCommonName = config.subjectCommonName;
    this._subjectDistinguishedName = config.subjectDistinguishedName;
    this._subjectOrganization = config.subjectOrganization;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
    this._thumbprint = config.thumbprint;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: true, optional: true, required: false
  private _archived?: string; 
  public get archived() {
    return this.getStringAttribute('archived');
  }
  public set archived(value: string) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // certificate_data - computed: false, optional: false, required: true
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // certificate_data_format - computed: true, optional: true, required: false
  private _certificateDataFormat?: string; 
  public get certificateDataFormat() {
    return this.getStringAttribute('certificate_data_format');
  }
  public set certificateDataFormat(value: string) {
    this._certificateDataFormat = value;
  }
  public resetCertificateDataFormat() {
    this._certificateDataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataFormatInput() {
    return this._certificateDataFormat;
  }

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // has_private_key - computed: true, optional: true, required: false
  private _hasPrivateKey?: boolean | cdktf.IResolvable; 
  public get hasPrivateKey() {
    return this.getBooleanAttribute('has_private_key');
  }
  public set hasPrivateKey(value: boolean | cdktf.IResolvable) {
    this._hasPrivateKey = value;
  }
  public resetHasPrivateKey() {
    this._hasPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasPrivateKeyInput() {
    return this._hasPrivateKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_expired - computed: true, optional: true, required: false
  private _isExpired?: boolean | cdktf.IResolvable; 
  public get isExpired() {
    return this.getBooleanAttribute('is_expired');
  }
  public set isExpired(value: boolean | cdktf.IResolvable) {
    this._isExpired = value;
  }
  public resetIsExpired() {
    this._isExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExpiredInput() {
    return this._isExpired;
  }

  // issuer_common_name - computed: true, optional: true, required: false
  private _issuerCommonName?: string; 
  public get issuerCommonName() {
    return this.getStringAttribute('issuer_common_name');
  }
  public set issuerCommonName(value: string) {
    this._issuerCommonName = value;
  }
  public resetIssuerCommonName() {
    this._issuerCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCommonNameInput() {
    return this._issuerCommonName;
  }

  // issuer_distinguished_name - computed: true, optional: true, required: false
  private _issuerDistinguishedName?: string; 
  public get issuerDistinguishedName() {
    return this.getStringAttribute('issuer_distinguished_name');
  }
  public set issuerDistinguishedName(value: string) {
    this._issuerDistinguishedName = value;
  }
  public resetIssuerDistinguishedName() {
    this._issuerDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerDistinguishedNameInput() {
    return this._issuerDistinguishedName;
  }

  // issuer_organization - computed: true, optional: true, required: false
  private _issuerOrganization?: string; 
  public get issuerOrganization() {
    return this.getStringAttribute('issuer_organization');
  }
  public set issuerOrganization(value: string) {
    this._issuerOrganization = value;
  }
  public resetIssuerOrganization() {
    this._issuerOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerOrganizationInput() {
    return this._issuerOrganization;
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

  // not_after - computed: true, optional: true, required: false
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before - computed: true, optional: true, required: false
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // replaced_by - computed: true, optional: true, required: false
  private _replacedBy?: string; 
  public get replacedBy() {
    return this.getStringAttribute('replaced_by');
  }
  public set replacedBy(value: string) {
    this._replacedBy = value;
  }
  public resetReplacedBy() {
    this._replacedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacedByInput() {
    return this._replacedBy;
  }

  // self_signed - computed: true, optional: true, required: false
  private _selfSigned?: boolean | cdktf.IResolvable; 
  public get selfSigned() {
    return this.getBooleanAttribute('self_signed');
  }
  public set selfSigned(value: boolean | cdktf.IResolvable) {
    this._selfSigned = value;
  }
  public resetSelfSigned() {
    this._selfSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfSignedInput() {
    return this._selfSigned;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // signature_algorithm_name - computed: true, optional: true, required: false
  private _signatureAlgorithmName?: string; 
  public get signatureAlgorithmName() {
    return this.getStringAttribute('signature_algorithm_name');
  }
  public set signatureAlgorithmName(value: string) {
    this._signatureAlgorithmName = value;
  }
  public resetSignatureAlgorithmName() {
    this._signatureAlgorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmNameInput() {
    return this._signatureAlgorithmName;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // subject_alternative_names - computed: true, optional: true, required: false
  private _subjectAlternativeNames?: string[]; 
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames;
  }

  // subject_common_name - computed: true, optional: true, required: false
  private _subjectCommonName?: string; 
  public get subjectCommonName() {
    return this.getStringAttribute('subject_common_name');
  }
  public set subjectCommonName(value: string) {
    this._subjectCommonName = value;
  }
  public resetSubjectCommonName() {
    this._subjectCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectCommonNameInput() {
    return this._subjectCommonName;
  }

  // subject_distinguished_name - computed: true, optional: true, required: false
  private _subjectDistinguishedName?: string; 
  public get subjectDistinguishedName() {
    return this.getStringAttribute('subject_distinguished_name');
  }
  public set subjectDistinguishedName(value: string) {
    this._subjectDistinguishedName = value;
  }
  public resetSubjectDistinguishedName() {
    this._subjectDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDistinguishedNameInput() {
    return this._subjectDistinguishedName;
  }

  // subject_organization - computed: true, optional: true, required: false
  private _subjectOrganization?: string; 
  public get subjectOrganization() {
    return this.getStringAttribute('subject_organization');
  }
  public set subjectOrganization(value: string) {
    this._subjectOrganization = value;
  }
  public resetSubjectOrganization() {
    this._subjectOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectOrganizationInput() {
    return this._subjectOrganization;
  }

  // tenant_tags - computed: false, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }

  // tenanted_deployment_participation - computed: true, optional: true, required: false
  private _tenantedDeploymentParticipation?: string; 
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }
  public set tenantedDeploymentParticipation(value: string) {
    this._tenantedDeploymentParticipation = value;
  }
  public resetTenantedDeploymentParticipation() {
    this._tenantedDeploymentParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantedDeploymentParticipationInput() {
    return this._tenantedDeploymentParticipation;
  }

  // tenants - computed: true, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }

  // thumbprint - computed: true, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.stringToTerraform(this._archived),
      certificate_data: cdktf.stringToTerraform(this._certificateData),
      certificate_data_format: cdktf.stringToTerraform(this._certificateDataFormat),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      has_private_key: cdktf.booleanToTerraform(this._hasPrivateKey),
      is_expired: cdktf.booleanToTerraform(this._isExpired),
      issuer_common_name: cdktf.stringToTerraform(this._issuerCommonName),
      issuer_distinguished_name: cdktf.stringToTerraform(this._issuerDistinguishedName),
      issuer_organization: cdktf.stringToTerraform(this._issuerOrganization),
      name: cdktf.stringToTerraform(this._name),
      not_after: cdktf.stringToTerraform(this._notAfter),
      not_before: cdktf.stringToTerraform(this._notBefore),
      notes: cdktf.stringToTerraform(this._notes),
      password: cdktf.stringToTerraform(this._password),
      replaced_by: cdktf.stringToTerraform(this._replacedBy),
      self_signed: cdktf.booleanToTerraform(this._selfSigned),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      signature_algorithm_name: cdktf.stringToTerraform(this._signatureAlgorithmName),
      space_id: cdktf.stringToTerraform(this._spaceId),
      subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectAlternativeNames),
      subject_common_name: cdktf.stringToTerraform(this._subjectCommonName),
      subject_distinguished_name: cdktf.stringToTerraform(this._subjectDistinguishedName),
      subject_organization: cdktf.stringToTerraform(this._subjectOrganization),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archived: {
        value: cdktf.stringToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_data: {
        value: cdktf.stringToHclTerraform(this._certificateData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_data_format: {
        value: cdktf.stringToHclTerraform(this._certificateDataFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      has_private_key: {
        value: cdktf.booleanToHclTerraform(this._hasPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_expired: {
        value: cdktf.booleanToHclTerraform(this._isExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer_common_name: {
        value: cdktf.stringToHclTerraform(this._issuerCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_distinguished_name: {
        value: cdktf.stringToHclTerraform(this._issuerDistinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_organization: {
        value: cdktf.stringToHclTerraform(this._issuerOrganization),
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
      not_after: {
        value: cdktf.stringToHclTerraform(this._notAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_before: {
        value: cdktf.stringToHclTerraform(this._notBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replaced_by: {
        value: cdktf.stringToHclTerraform(this._replacedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_signed: {
        value: cdktf.booleanToHclTerraform(this._selfSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm_name: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_alternative_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjectAlternativeNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subject_common_name: {
        value: cdktf.stringToHclTerraform(this._subjectCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_distinguished_name: {
        value: cdktf.stringToHclTerraform(this._subjectDistinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_organization: {
        value: cdktf.stringToHclTerraform(this._subjectOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenanted_deployment_participation: {
        value: cdktf.stringToHclTerraform(this._tenantedDeploymentParticipation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      thumbprint: {
        value: cdktf.stringToHclTerraform(this._thumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
