// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmOtaEnrollmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the optional MDM ACME issuer linked to the OTA enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#acme_issuer_id MdmOtaEnrollment#acme_issuer_id}
  */
  readonly acmeIssuerId?: string;
  /**
  * `ID` of the MDM blueprint linked to the OTA enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#blueprint_id MdmOtaEnrollment#blueprint_id}
  */
  readonly blueprintId?: number;
  /**
  * Name of the MDM OTA enrollment as displayed on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#display_name MdmOtaEnrollment#display_name}
  */
  readonly displayName?: string;
  /**
  * The `ID` of the meta business unit the machine will be assigned to at enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#meta_business_unit_id MdmOtaEnrollment#meta_business_unit_id}
  */
  readonly metaBusinessUnitId: number;
  /**
  * Name of the MDM OTA enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#name MdmOtaEnrollment#name}
  */
  readonly name: string;
  /**
  * `ID` of the MDM push certificate linked to the OTA enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#push_certificate_id MdmOtaEnrollment#push_certificate_id}
  */
  readonly pushCertificateId: number;
  /**
  * The number of time the enrollment can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#quota MdmOtaEnrollment#quota}
  */
  readonly quota?: number;
  /**
  * `UUID` of the identity realm linked to the OTA enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#realm_uuid MdmOtaEnrollment#realm_uuid}
  */
  readonly realmUuid?: string;
  /**
  * `ID` of the MDM SCEP issuer linked to the OTA enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#scep_issuer_id MdmOtaEnrollment#scep_issuer_id}
  */
  readonly scepIssuerId: string;
  /**
  * The serial numbers the enrollment is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#serial_numbers MdmOtaEnrollment#serial_numbers}
  */
  readonly serialNumbers?: string[];
  /**
  * The `ID`s of the tags that the machine will get at enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#tag_ids MdmOtaEnrollment#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * The `UDID`s the enrollment is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#udids MdmOtaEnrollment#udids}
  */
  readonly udids?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment zentral_mdm_ota_enrollment}
*/
export class MdmOtaEnrollment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_ota_enrollment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmOtaEnrollment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmOtaEnrollment to import
  * @param importFromId The id of the existing MdmOtaEnrollment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmOtaEnrollment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_ota_enrollment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_ota_enrollment zentral_mdm_ota_enrollment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmOtaEnrollmentConfig
  */
  public constructor(scope: Construct, id: string, config: MdmOtaEnrollmentConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_ota_enrollment',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acmeIssuerId = config.acmeIssuerId;
    this._blueprintId = config.blueprintId;
    this._displayName = config.displayName;
    this._metaBusinessUnitId = config.metaBusinessUnitId;
    this._name = config.name;
    this._pushCertificateId = config.pushCertificateId;
    this._quota = config.quota;
    this._realmUuid = config.realmUuid;
    this._scepIssuerId = config.scepIssuerId;
    this._serialNumbers = config.serialNumbers;
    this._tagIds = config.tagIds;
    this._udids = config.udids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_issuer_id - computed: false, optional: true, required: false
  private _acmeIssuerId?: string; 
  public get acmeIssuerId() {
    return this.getStringAttribute('acme_issuer_id');
  }
  public set acmeIssuerId(value: string) {
    this._acmeIssuerId = value;
  }
  public resetAcmeIssuerId() {
    this._acmeIssuerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeIssuerIdInput() {
    return this._acmeIssuerId;
  }

  // blueprint_id - computed: false, optional: true, required: false
  private _blueprintId?: number; 
  public get blueprintId() {
    return this.getNumberAttribute('blueprint_id');
  }
  public set blueprintId(value: number) {
    this._blueprintId = value;
  }
  public resetBlueprintId() {
    this._blueprintId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // meta_business_unit_id - computed: false, optional: false, required: true
  private _metaBusinessUnitId?: number; 
  public get metaBusinessUnitId() {
    return this.getNumberAttribute('meta_business_unit_id');
  }
  public set metaBusinessUnitId(value: number) {
    this._metaBusinessUnitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaBusinessUnitIdInput() {
    return this._metaBusinessUnitId;
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

  // push_certificate_id - computed: false, optional: false, required: true
  private _pushCertificateId?: number; 
  public get pushCertificateId() {
    return this.getNumberAttribute('push_certificate_id');
  }
  public set pushCertificateId(value: number) {
    this._pushCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushCertificateIdInput() {
    return this._pushCertificateId;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // realm_uuid - computed: false, optional: true, required: false
  private _realmUuid?: string; 
  public get realmUuid() {
    return this.getStringAttribute('realm_uuid');
  }
  public set realmUuid(value: string) {
    this._realmUuid = value;
  }
  public resetRealmUuid() {
    this._realmUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmUuidInput() {
    return this._realmUuid;
  }

  // scep_issuer_id - computed: false, optional: false, required: true
  private _scepIssuerId?: string; 
  public get scepIssuerId() {
    return this.getStringAttribute('scep_issuer_id');
  }
  public set scepIssuerId(value: string) {
    this._scepIssuerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scepIssuerIdInput() {
    return this._scepIssuerId;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // serial_numbers - computed: true, optional: true, required: false
  private _serialNumbers?: string[]; 
  public get serialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_numbers'));
  }
  public set serialNumbers(value: string[]) {
    this._serialNumbers = value;
  }
  public resetSerialNumbers() {
    this._serialNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumbersInput() {
    return this._serialNumbers;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // udids - computed: true, optional: true, required: false
  private _udids?: string[]; 
  public get udids() {
    return cdktf.Fn.tolist(this.getListAttribute('udids'));
  }
  public set udids(value: string[]) {
    this._udids = value;
  }
  public resetUdids() {
    this._udids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udidsInput() {
    return this._udids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acme_issuer_id: cdktf.stringToTerraform(this._acmeIssuerId),
      blueprint_id: cdktf.numberToTerraform(this._blueprintId),
      display_name: cdktf.stringToTerraform(this._displayName),
      meta_business_unit_id: cdktf.numberToTerraform(this._metaBusinessUnitId),
      name: cdktf.stringToTerraform(this._name),
      push_certificate_id: cdktf.numberToTerraform(this._pushCertificateId),
      quota: cdktf.numberToTerraform(this._quota),
      realm_uuid: cdktf.stringToTerraform(this._realmUuid),
      scep_issuer_id: cdktf.stringToTerraform(this._scepIssuerId),
      serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumbers),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      udids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acme_issuer_id: {
        value: cdktf.stringToHclTerraform(this._acmeIssuerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_id: {
        value: cdktf.numberToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_business_unit_id: {
        value: cdktf.numberToHclTerraform(this._metaBusinessUnitId),
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
      push_certificate_id: {
        value: cdktf.numberToHclTerraform(this._pushCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota: {
        value: cdktf.numberToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      realm_uuid: {
        value: cdktf.stringToHclTerraform(this._realmUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_issuer_id: {
        value: cdktf.stringToHclTerraform(this._scepIssuerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      udids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._udids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
