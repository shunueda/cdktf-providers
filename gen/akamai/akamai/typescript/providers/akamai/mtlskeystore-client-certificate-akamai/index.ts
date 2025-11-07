// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MtlskeystoreClientCertificateAkamaiConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the client certificate. Must be between 1 and 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#certificate_name MtlskeystoreClientCertificateAkamai#certificate_name}
  */
  readonly certificateName: string;
  /**
  * The contract assigned to the client certificate. Must have a length of at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#contract_id MtlskeystoreClientCertificateAkamai#contract_id}
  */
  readonly contractId: string;
  /**
  * Specifies the type of network to deploy the client certificate. Possible values: `CORE`, `RUSSIA_AND_CORE`, or `CHINA_AND_CORE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#geography MtlskeystoreClientCertificateAkamai#geography}
  */
  readonly geography: string;
  /**
  * The group assigned to the client certificate. Must be greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#group_id MtlskeystoreClientCertificateAkamai#group_id}
  */
  readonly groupId: number;
  /**
  * The cryptographic algorithm used for key generation. Possible values: `RSA` or `ECDSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#key_algorithm MtlskeystoreClientCertificateAkamai#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * The email addresses to notify for client certificate-related issues. Must have at least one email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#notification_emails MtlskeystoreClientCertificateAkamai#notification_emails}
  */
  readonly notificationEmails: string[];
  /**
  * The common name of the account CA certificate selected to sign the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#preferred_ca MtlskeystoreClientCertificateAkamai#preferred_ca}
  */
  readonly preferredCa?: string;
  /**
  * A set of client certificate versions that should be revoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#revoked_versions MtlskeystoreClientCertificateAkamai#revoked_versions}
  */
  readonly revokedVersions?: number[];
  /**
  * Identifies the network deployment type. Possible values: `STANDARD_TLS` or `ENHANCED_TLS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#secure_network MtlskeystoreClientCertificateAkamai#secure_network}
  */
  readonly secureNetwork: string;
  /**
  * The CA certificate’s key value details. The `CN` attribute is required and included in the subject. When not specified, the subject is constructed in this format: `/C=US/O=Akamai Technologies, Inc./OU={vcd_id} {contract_id} {group_id}/CN={certificate_name}/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#subject MtlskeystoreClientCertificateAkamai#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#timeouts MtlskeystoreClientCertificateAkamai#timeouts}
  */
  readonly timeouts?: MtlskeystoreClientCertificateAkamaiTimeouts;
}
export interface MtlskeystoreClientCertificateAkamaiTimeouts {
  /**
  * Optional configurable resource create timeout. By default it's 30m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#create MtlskeystoreClientCertificateAkamai#create}
  */
  readonly create?: string;
  /**
  * Optional configurable resource update timeout. By default it's 30m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#update MtlskeystoreClientCertificateAkamai#update}
  */
  readonly update?: string;
}

export function mtlskeystoreClientCertificateAkamaiTimeoutsToTerraform(struct?: MtlskeystoreClientCertificateAkamaiTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mtlskeystoreClientCertificateAkamaiTimeoutsToHclTerraform(struct?: MtlskeystoreClientCertificateAkamaiTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MtlskeystoreClientCertificateAkamaiTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MtlskeystoreClientCertificateAkamaiTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MtlskeystoreClientCertificateAkamaiTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface MtlskeystoreClientCertificateAkamaiVersionsCertificateBlock {
}

export function mtlskeystoreClientCertificateAkamaiVersionsCertificateBlockToTerraform(struct?: MtlskeystoreClientCertificateAkamaiVersionsCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mtlskeystoreClientCertificateAkamaiVersionsCertificateBlockToHclTerraform(struct?: MtlskeystoreClientCertificateAkamaiVersionsCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MtlskeystoreClientCertificateAkamaiVersionsCertificateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MtlskeystoreClientCertificateAkamaiVersionsCertificateBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MtlskeystoreClientCertificateAkamaiVersionsCertificateBlock | undefined) {
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
export interface MtlskeystoreClientCertificateAkamaiVersions {
}

export function mtlskeystoreClientCertificateAkamaiVersionsToTerraform(struct?: MtlskeystoreClientCertificateAkamaiVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mtlskeystoreClientCertificateAkamaiVersionsToHclTerraform(struct?: MtlskeystoreClientCertificateAkamaiVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MtlskeystoreClientCertificateAkamaiVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MtlskeystoreClientCertificateAkamaiVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MtlskeystoreClientCertificateAkamaiVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_block - computed: true, optional: false, required: false
  private _certificateBlock = new MtlskeystoreClientCertificateAkamaiVersionsCertificateBlockOutputReference(this, "certificate_block");
  public get certificateBlock() {
    return this._certificateBlock;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

export class MtlskeystoreClientCertificateAkamaiVersionsList extends cdktf.ComplexList {

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
  public get(index: number): MtlskeystoreClientCertificateAkamaiVersionsOutputReference {
    return new MtlskeystoreClientCertificateAkamaiVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai akamai_mtlskeystore_client_certificate_akamai}
*/
export class MtlskeystoreClientCertificateAkamai extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlskeystore_client_certificate_akamai";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MtlskeystoreClientCertificateAkamai resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MtlskeystoreClientCertificateAkamai to import
  * @param importFromId The id of the existing MtlskeystoreClientCertificateAkamai that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MtlskeystoreClientCertificateAkamai to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlskeystore_client_certificate_akamai", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_akamai akamai_mtlskeystore_client_certificate_akamai} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MtlskeystoreClientCertificateAkamaiConfig
  */
  public constructor(scope: Construct, id: string, config: MtlskeystoreClientCertificateAkamaiConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlskeystore_client_certificate_akamai',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
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
    this._preferredCa = config.preferredCa;
    this._revokedVersions = config.revokedVersions;
    this._secureNetwork = config.secureNetwork;
    this._subject = config.subject;
    this._timeouts.internalValue = config.timeouts;
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

  // current_guid - computed: true, optional: false, required: false
  public get currentGuid() {
    return this.getStringAttribute('current_guid');
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

  // preferred_ca - computed: false, optional: true, required: false
  private _preferredCa?: string; 
  public get preferredCa() {
    return this.getStringAttribute('preferred_ca');
  }
  public set preferredCa(value: string) {
    this._preferredCa = value;
  }
  public resetPreferredCa() {
    this._preferredCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCaInput() {
    return this._preferredCa;
  }

  // previous_guid - computed: true, optional: false, required: false
  public get previousGuid() {
    return this.getStringAttribute('previous_guid');
  }

  // revoked_versions - computed: false, optional: true, required: false
  private _revokedVersions?: number[]; 
  public get revokedVersions() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('revoked_versions')));
  }
  public set revokedVersions(value: number[]) {
    this._revokedVersions = value;
  }
  public resetRevokedVersions() {
    this._revokedVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedVersionsInput() {
    return this._revokedVersions;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MtlskeystoreClientCertificateAkamaiTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MtlskeystoreClientCertificateAkamaiTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new MtlskeystoreClientCertificateAkamaiVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
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
      preferred_ca: cdktf.stringToTerraform(this._preferredCa),
      revoked_versions: cdktf.listMapper(cdktf.numberToTerraform, false)(this._revokedVersions),
      secure_network: cdktf.stringToTerraform(this._secureNetwork),
      subject: cdktf.stringToTerraform(this._subject),
      timeouts: mtlskeystoreClientCertificateAkamaiTimeoutsToTerraform(this._timeouts.internalValue),
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
      preferred_ca: {
        value: cdktf.stringToHclTerraform(this._preferredCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoked_versions: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._revokedVersions),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      timeouts: {
        value: mtlskeystoreClientCertificateAkamaiTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MtlskeystoreClientCertificateAkamaiTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
