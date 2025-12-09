// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_chain DataSamsungcloudplatformCertificate#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Expiration Date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_expiration_date DataSamsungcloudplatformCertificate#certificate_expiration_date}
  */
  readonly certificateExpirationDate?: string;
  /**
  * Certificate id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_id DataSamsungcloudplatformCertificate#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_name DataSamsungcloudplatformCertificate#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Start Date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_start_date DataSamsungcloudplatformCertificate#certificate_start_date}
  */
  readonly certificateStartDate?: string;
  /**
  * Certificate State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_state DataSamsungcloudplatformCertificate#certificate_state}
  */
  readonly certificateState?: string;
  /**
  * Certificate Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_type DataSamsungcloudplatformCertificate#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Certificate Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#certificate_version DataSamsungcloudplatformCertificate#certificate_version}
  */
  readonly certificateVersion?: string;
  /**
  * Common Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#common_name DataSamsungcloudplatformCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Created By
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#created_by DataSamsungcloudplatformCertificate#created_by}
  */
  readonly createdBy?: string;
  /**
  * Certificate Created By Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#created_by_email DataSamsungcloudplatformCertificate#created_by_email}
  */
  readonly createdByEmail?: string;
  /**
  * Certificate Created By Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#created_by_name DataSamsungcloudplatformCertificate#created_by_name}
  */
  readonly createdByName?: string;
  /**
  * Creation date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#created_dt DataSamsungcloudplatformCertificate#created_dt}
  */
  readonly createdDt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#id DataSamsungcloudplatformCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key Bit Size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#key_bit_size DataSamsungcloudplatformCertificate#key_bit_size}
  */
  readonly keyBitSize?: number;
  /**
  * Modified By
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#modified_by DataSamsungcloudplatformCertificate#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Modified date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#modified_dt DataSamsungcloudplatformCertificate#modified_dt}
  */
  readonly modifiedDt?: string;
  /**
  * Organization Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#organization_name DataSamsungcloudplatformCertificate#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Certificate Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#private_key DataSamsungcloudplatformCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Project Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#project_id DataSamsungcloudplatformCertificate#project_id}
  */
  readonly projectId?: string;
  /**
  * Certificate Public(Body)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#public_certificate DataSamsungcloudplatformCertificate#public_certificate}
  */
  readonly publicCertificate?: string;
  /**
  * Purpose Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#purpose_type DataSamsungcloudplatformCertificate#purpose_type}
  */
  readonly purposeType?: string;
  /**
  * Used Resource Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#used_resource_count DataSamsungcloudplatformCertificate#used_resource_count}
  */
  readonly usedResourceCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate samsungcloudplatform_certificate}
*/
export class DataSamsungcloudplatformCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformCertificate to import
  * @param importFromId The id of the existing DataSamsungcloudplatformCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/certificate samsungcloudplatform_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_certificate',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateChain = config.certificateChain;
    this._certificateExpirationDate = config.certificateExpirationDate;
    this._certificateId = config.certificateId;
    this._certificateName = config.certificateName;
    this._certificateStartDate = config.certificateStartDate;
    this._certificateState = config.certificateState;
    this._certificateType = config.certificateType;
    this._certificateVersion = config.certificateVersion;
    this._commonName = config.commonName;
    this._createdBy = config.createdBy;
    this._createdByEmail = config.createdByEmail;
    this._createdByName = config.createdByName;
    this._createdDt = config.createdDt;
    this._id = config.id;
    this._keyBitSize = config.keyBitSize;
    this._modifiedBy = config.modifiedBy;
    this._modifiedDt = config.modifiedDt;
    this._organizationName = config.organizationName;
    this._privateKey = config.privateKey;
    this._projectId = config.projectId;
    this._publicCertificate = config.publicCertificate;
    this._purposeType = config.purposeType;
    this._usedResourceCount = config.usedResourceCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // certificate_expiration_date - computed: false, optional: true, required: false
  private _certificateExpirationDate?: string; 
  public get certificateExpirationDate() {
    return this.getStringAttribute('certificate_expiration_date');
  }
  public set certificateExpirationDate(value: string) {
    this._certificateExpirationDate = value;
  }
  public resetCertificateExpirationDate() {
    this._certificateExpirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateExpirationDateInput() {
    return this._certificateExpirationDate;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // certificate_start_date - computed: false, optional: true, required: false
  private _certificateStartDate?: string; 
  public get certificateStartDate() {
    return this.getStringAttribute('certificate_start_date');
  }
  public set certificateStartDate(value: string) {
    this._certificateStartDate = value;
  }
  public resetCertificateStartDate() {
    this._certificateStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStartDateInput() {
    return this._certificateStartDate;
  }

  // certificate_state - computed: false, optional: true, required: false
  private _certificateState?: string; 
  public get certificateState() {
    return this.getStringAttribute('certificate_state');
  }
  public set certificateState(value: string) {
    this._certificateState = value;
  }
  public resetCertificateState() {
    this._certificateState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStateInput() {
    return this._certificateState;
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // certificate_version - computed: false, optional: true, required: false
  private _certificateVersion?: string; 
  public get certificateVersion() {
    return this.getStringAttribute('certificate_version');
  }
  public set certificateVersion(value: string) {
    this._certificateVersion = value;
  }
  public resetCertificateVersion() {
    this._certificateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateVersionInput() {
    return this._certificateVersion;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_by_email - computed: false, optional: true, required: false
  private _createdByEmail?: string; 
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }
  public set createdByEmail(value: string) {
    this._createdByEmail = value;
  }
  public resetCreatedByEmail() {
    this._createdByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByEmailInput() {
    return this._createdByEmail;
  }

  // created_by_name - computed: false, optional: true, required: false
  private _createdByName?: string; 
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }
  public set createdByName(value: string) {
    this._createdByName = value;
  }
  public resetCreatedByName() {
    this._createdByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByNameInput() {
    return this._createdByName;
  }

  // created_dt - computed: false, optional: true, required: false
  private _createdDt?: string; 
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }
  public set createdDt(value: string) {
    this._createdDt = value;
  }
  public resetCreatedDt() {
    this._createdDt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdDtInput() {
    return this._createdDt;
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

  // key_bit_size - computed: false, optional: true, required: false
  private _keyBitSize?: number; 
  public get keyBitSize() {
    return this.getNumberAttribute('key_bit_size');
  }
  public set keyBitSize(value: number) {
    this._keyBitSize = value;
  }
  public resetKeyBitSize() {
    this._keyBitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitSizeInput() {
    return this._keyBitSize;
  }

  // modified_by - computed: false, optional: true, required: false
  private _modifiedBy?: string; 
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }
  public set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  public resetModifiedBy() {
    this._modifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy;
  }

  // modified_dt - computed: false, optional: true, required: false
  private _modifiedDt?: string; 
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }
  public set modifiedDt(value: string) {
    this._modifiedDt = value;
  }
  public resetModifiedDt() {
    this._modifiedDt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedDtInput() {
    return this._modifiedDt;
  }

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_certificate - computed: false, optional: true, required: false
  private _publicCertificate?: string; 
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string) {
    this._publicCertificate = value;
  }
  public resetPublicCertificate() {
    this._publicCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate;
  }

  // purpose_type - computed: false, optional: true, required: false
  private _purposeType?: string; 
  public get purposeType() {
    return this.getStringAttribute('purpose_type');
  }
  public set purposeType(value: string) {
    this._purposeType = value;
  }
  public resetPurposeType() {
    this._purposeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeTypeInput() {
    return this._purposeType;
  }

  // used_resource_count - computed: false, optional: true, required: false
  private _usedResourceCount?: number; 
  public get usedResourceCount() {
    return this.getNumberAttribute('used_resource_count');
  }
  public set usedResourceCount(value: number) {
    this._usedResourceCount = value;
  }
  public resetUsedResourceCount() {
    this._usedResourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedResourceCountInput() {
    return this._usedResourceCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      certificate_expiration_date: cdktf.stringToTerraform(this._certificateExpirationDate),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      certificate_start_date: cdktf.stringToTerraform(this._certificateStartDate),
      certificate_state: cdktf.stringToTerraform(this._certificateState),
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      certificate_version: cdktf.stringToTerraform(this._certificateVersion),
      common_name: cdktf.stringToTerraform(this._commonName),
      created_by: cdktf.stringToTerraform(this._createdBy),
      created_by_email: cdktf.stringToTerraform(this._createdByEmail),
      created_by_name: cdktf.stringToTerraform(this._createdByName),
      created_dt: cdktf.stringToTerraform(this._createdDt),
      id: cdktf.stringToTerraform(this._id),
      key_bit_size: cdktf.numberToTerraform(this._keyBitSize),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      modified_dt: cdktf.stringToTerraform(this._modifiedDt),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      private_key: cdktf.stringToTerraform(this._privateKey),
      project_id: cdktf.stringToTerraform(this._projectId),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
      purpose_type: cdktf.stringToTerraform(this._purposeType),
      used_resource_count: cdktf.numberToTerraform(this._usedResourceCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_chain: {
        value: cdktf.stringToHclTerraform(this._certificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_expiration_date: {
        value: cdktf.stringToHclTerraform(this._certificateExpirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_start_date: {
        value: cdktf.stringToHclTerraform(this._certificateStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_state: {
        value: cdktf.stringToHclTerraform(this._certificateState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_version: {
        value: cdktf.stringToHclTerraform(this._certificateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by_email: {
        value: cdktf.stringToHclTerraform(this._createdByEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by_name: {
        value: cdktf.stringToHclTerraform(this._createdByName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_dt: {
        value: cdktf.stringToHclTerraform(this._createdDt),
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
      key_bit_size: {
        value: cdktf.numberToHclTerraform(this._keyBitSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      modified_by: {
        value: cdktf.stringToHclTerraform(this._modifiedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_dt: {
        value: cdktf.stringToHclTerraform(this._modifiedDt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_certificate: {
        value: cdktf.stringToHclTerraform(this._publicCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose_type: {
        value: cdktf.stringToHclTerraform(this._purposeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      used_resource_count: {
        value: cdktf.numberToHclTerraform(this._usedResourceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
