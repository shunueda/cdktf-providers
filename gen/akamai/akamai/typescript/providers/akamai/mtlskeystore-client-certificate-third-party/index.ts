// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MtlskeystoreClientCertificateThirdPartyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the client certificate. Must be between 1 and 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#certificate_name MtlskeystoreClientCertificateThirdParty#certificate_name}
  */
  readonly certificateName: string;
  /**
  * The contract assigned to the client certificate. Must have a length of at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#contract_id MtlskeystoreClientCertificateThirdParty#contract_id}
  */
  readonly contractId: string;
  /**
  * Specifies the type of network to deploy the client certificate. Possible values: `CORE`, `RUSSIA_AND_CORE`, or `CHINA_AND_CORE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#geography MtlskeystoreClientCertificateThirdParty#geography}
  */
  readonly geography: string;
  /**
  * The group assigned to the client certificate. Must be greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#group_id MtlskeystoreClientCertificateThirdParty#group_id}
  */
  readonly groupId: number;
  /**
  * The cryptographic algorithm used for key generation. Possible values: `RSA` or `ECDSA`. The default is `RSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#key_algorithm MtlskeystoreClientCertificateThirdParty#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * The email addresses to notify for client certificate-related issues. Must have at least one email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#notification_emails MtlskeystoreClientCertificateThirdParty#notification_emails}
  */
  readonly notificationEmails: string[];
  /**
  * Identifies the network deployment type. Possible values: `STANDARD_TLS` or `ENHANCED_TLS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#secure_network MtlskeystoreClientCertificateThirdParty#secure_network}
  */
  readonly secureNetwork: string;
  /**
  * The CA certificate’s key value details. The `CN` attribute is required and included in the subject. When not specified, the subject is constructed in this format: `/C=US/O=Akamai Technologies, Inc./OU={vcd_id} {contract_id} {group_id}/CN={certificate_name}/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#subject MtlskeystoreClientCertificateThirdParty#subject}
  */
  readonly subject?: string;
  /**
  * A map of client certificate versions as a value and user defined identifier as a key. Each version represents a specific iteration of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#versions MtlskeystoreClientCertificateThirdParty#versions}
  */
  readonly versions: { [key: string]: MtlskeystoreClientCertificateThirdPartyVersions } | cdktf.IResolvable;
}
export interface MtlskeystoreClientCertificateThirdPartyVersionsCertificateBlock {
}

export function mtlskeystoreClientCertificateThirdPartyVersionsCertificateBlockToTerraform(struct?: MtlskeystoreClientCertificateThirdPartyVersionsCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mtlskeystoreClientCertificateThirdPartyVersionsCertificateBlockToHclTerraform(struct?: MtlskeystoreClientCertificateThirdPartyVersionsCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MtlskeystoreClientCertificateThirdPartyVersionsCertificateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MtlskeystoreClientCertificateThirdPartyVersionsCertificateBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MtlskeystoreClientCertificateThirdPartyVersionsCertificateBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // trust_chain - computed: true, optional: false, required: false
  public get trustChain() {
    return this.getStringAttribute('trust_chain');
  }
}
export interface MtlskeystoreClientCertificateThirdPartyVersionsCsrBlock {
}

export function mtlskeystoreClientCertificateThirdPartyVersionsCsrBlockToTerraform(struct?: MtlskeystoreClientCertificateThirdPartyVersionsCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mtlskeystoreClientCertificateThirdPartyVersionsCsrBlockToHclTerraform(struct?: MtlskeystoreClientCertificateThirdPartyVersionsCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MtlskeystoreClientCertificateThirdPartyVersionsCsrBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MtlskeystoreClientCertificateThirdPartyVersionsCsrBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MtlskeystoreClientCertificateThirdPartyVersionsCsrBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
}
export interface MtlskeystoreClientCertificateThirdPartyVersions {
}

export function mtlskeystoreClientCertificateThirdPartyVersionsToTerraform(struct?: MtlskeystoreClientCertificateThirdPartyVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mtlskeystoreClientCertificateThirdPartyVersionsToHclTerraform(struct?: MtlskeystoreClientCertificateThirdPartyVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MtlskeystoreClientCertificateThirdPartyVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MtlskeystoreClientCertificateThirdPartyVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MtlskeystoreClientCertificateThirdPartyVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // certificate_block - computed: true, optional: false, required: false
  private _certificateBlock = new MtlskeystoreClientCertificateThirdPartyVersionsCertificateBlockOutputReference(this, "certificate_block");
  public get certificateBlock() {
    return this._certificateBlock;
  }

  // certificate_submitted_by - computed: true, optional: false, required: false
  public get certificateSubmittedBy() {
    return this.getStringAttribute('certificate_submitted_by');
  }

  // certificate_submitted_date - computed: true, optional: false, required: false
  public get certificateSubmittedDate() {
    return this.getStringAttribute('certificate_submitted_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // csr_block - computed: true, optional: false, required: false
  private _csrBlock = new MtlskeystoreClientCertificateThirdPartyVersionsCsrBlockOutputReference(this, "csr_block");
  public get csrBlock() {
    return this._csrBlock;
  }

  // delete_requested_date - computed: true, optional: false, required: false
  public get deleteRequestedDate() {
    return this.getStringAttribute('delete_requested_date');
  }

  // elliptic_curve - computed: true, optional: false, required: false
  public get ellipticCurve() {
    return this.getStringAttribute('elliptic_curve');
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }

  // issued_date - computed: true, optional: false, required: false
  public get issuedDate() {
    return this.getStringAttribute('issued_date');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size_in_bytes - computed: true, optional: false, required: false
  public get keySizeInBytes() {
    return this.getStringAttribute('key_size_in_bytes');
  }

  // scheduled_delete_date - computed: true, optional: false, required: false
  public get scheduledDeleteDate() {
    return this.getStringAttribute('scheduled_delete_date');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_guid - computed: true, optional: false, required: false
  public get versionGuid() {
    return this.getStringAttribute('version_guid');
  }
}

export class MtlskeystoreClientCertificateThirdPartyVersionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: MtlskeystoreClientCertificateThirdPartyVersions } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MtlskeystoreClientCertificateThirdPartyVersionsOutputReference {
    return new MtlskeystoreClientCertificateThirdPartyVersionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party akamai_mtlskeystore_client_certificate_third_party}
*/
export class MtlskeystoreClientCertificateThirdParty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlskeystore_client_certificate_third_party";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MtlskeystoreClientCertificateThirdParty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MtlskeystoreClientCertificateThirdParty to import
  * @param importFromId The id of the existing MtlskeystoreClientCertificateThirdParty that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MtlskeystoreClientCertificateThirdParty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlskeystore_client_certificate_third_party", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_third_party akamai_mtlskeystore_client_certificate_third_party} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MtlskeystoreClientCertificateThirdPartyConfig
  */
  public constructor(scope: Construct, id: string, config: MtlskeystoreClientCertificateThirdPartyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlskeystore_client_certificate_third_party',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateName = config.certificateName;
    this._contractId = config.contractId;
    this._geography = config.geography;
    this._groupId = config.groupId;
    this._keyAlgorithm = config.keyAlgorithm;
    this._notificationEmails = config.notificationEmails;
    this._secureNetwork = config.secureNetwork;
    this._subject = config.subject;
    this._versions.internalValue = config.versions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // geography - computed: false, optional: false, required: true
  private _geography?: string; 
  public get geography() {
    return this.getStringAttribute('geography');
  }
  public set geography(value: string) {
    this._geography = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geographyInput() {
    return this._geography;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // notification_emails - computed: false, optional: false, required: true
  private _notificationEmails?: string[]; 
  public get notificationEmails() {
    return this.getListAttribute('notification_emails');
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails;
  }

  // secure_network - computed: false, optional: false, required: true
  private _secureNetwork?: string; 
  public get secureNetwork() {
    return this.getStringAttribute('secure_network');
  }
  public set secureNetwork(value: string) {
    this._secureNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secureNetworkInput() {
    return this._secureNetwork;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // versions - computed: false, optional: false, required: true
  private _versions = new MtlskeystoreClientCertificateThirdPartyVersionsMap(this, "versions");
  public get versions() {
    return this._versions;
  }
  public putVersions(value: { [key: string]: MtlskeystoreClientCertificateThirdPartyVersions } | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      contract_id: cdktf.stringToTerraform(this._contractId),
      geography: cdktf.stringToTerraform(this._geography),
      group_id: cdktf.numberToTerraform(this._groupId),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationEmails),
      secure_network: cdktf.stringToTerraform(this._secureNetwork),
      subject: cdktf.stringToTerraform(this._subject),
      versions: cdktf.hashMapper(mtlskeystoreClientCertificateThirdPartyVersionsToTerraform)(this._versions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geography: {
        value: cdktf.stringToHclTerraform(this._geography),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secure_network: {
        value: cdktf.stringToHclTerraform(this._secureNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versions: {
        value: cdktf.hashMapperHcl(mtlskeystoreClientCertificateThirdPartyVersionsToHclTerraform)(this._versions.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "MtlskeystoreClientCertificateThirdPartyVersionsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
