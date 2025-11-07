// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonolithEnrollmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the Monolith manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment#manifest_id MonolithEnrollment#manifest_id}
  */
  readonly manifestId: number;
  /**
  * The `ID` of the meta business unit the machine will be assigned to at enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment#meta_business_unit_id MonolithEnrollment#meta_business_unit_id}
  */
  readonly metaBusinessUnitId: number;
  /**
  * The number of time the enrollment can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment#quota MonolithEnrollment#quota}
  */
  readonly quota?: number;
  /**
  * The serial numbers the enrollment is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment#serial_numbers MonolithEnrollment#serial_numbers}
  */
  readonly serialNumbers?: string[];
  /**
  * The `ID`s of the tags that the machine will get at enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment#tag_ids MonolithEnrollment#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * The `UDID`s the enrollment is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment#udids MonolithEnrollment#udids}
  */
  readonly udids?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment zentral_monolith_enrollment}
*/
export class MonolithEnrollment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_enrollment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonolithEnrollment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonolithEnrollment to import
  * @param importFromId The id of the existing MonolithEnrollment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonolithEnrollment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_enrollment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_enrollment zentral_monolith_enrollment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonolithEnrollmentConfig
  */
  public constructor(scope: Construct, id: string, config: MonolithEnrollmentConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_enrollment',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._manifestId = config.manifestId;
    this._metaBusinessUnitId = config.metaBusinessUnitId;
    this._quota = config.quota;
    this._serialNumbers = config.serialNumbers;
    this._tagIds = config.tagIds;
    this._udids = config.udids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_profile_url - computed: true, optional: false, required: false
  public get configurationProfileUrl() {
    return this.getStringAttribute('configuration_profile_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // manifest_id - computed: false, optional: false, required: true
  private _manifestId?: number; 
  public get manifestId() {
    return this.getNumberAttribute('manifest_id');
  }
  public set manifestId(value: number) {
    this._manifestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestIdInput() {
    return this._manifestId;
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

  // plist_url - computed: true, optional: false, required: false
  public get plistUrl() {
    return this.getStringAttribute('plist_url');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      manifest_id: cdktf.numberToTerraform(this._manifestId),
      meta_business_unit_id: cdktf.numberToTerraform(this._metaBusinessUnitId),
      quota: cdktf.numberToTerraform(this._quota),
      serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumbers),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      udids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      manifest_id: {
        value: cdktf.numberToHclTerraform(this._manifestId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      meta_business_unit_id: {
        value: cdktf.numberToHclTerraform(this._metaBusinessUnitId),
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
