// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundDnclistConfig extends cdktf.TerraformMetaArguments {
  /**
  * A dnc.com campaignId. Optional if the dncSourceType is dnc.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#campaign_id OutboundDnclist#campaign_id}
  */
  readonly campaignId?: string;
  /**
  * The contact method. Required if dncSourceType is rds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#contact_method OutboundDnclist#contact_method}
  */
  readonly contactMethod?: string;
  /**
  * The column to evaluate exclusion against. Required if the dncSourceType is rds_custom. Since custom_exclusion_column cannot be updated, changing this value after deployment 
  * 				will cause the dnc list to be destroyed and recreated with a new GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#custom_exclusion_column OutboundDnclist#custom_exclusion_column}
  */
  readonly customExclusionColumn?: string;
  /**
  * The division this DNC List belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#division_id OutboundDnclist#division_id}
  */
  readonly divisionId?: string;
  /**
  * The list of dnc.com codes to be treated as DNC. Required if the dncSourceType is dnc.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#dnc_codes OutboundDnclist#dnc_codes}
  */
  readonly dncCodes?: string[];
  /**
  * The type of the DNC List. Changing the dnc_source_attribute will cause the outbound_dnclist object to be dropped and recreated with new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#dnc_source_type OutboundDnclist#dnc_source_type}
  */
  readonly dncSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#id OutboundDnclist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A gryphon license number. Required if the dncSourceType is gryphon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#license_id OutboundDnclist#license_id}
  */
  readonly licenseId?: string;
  /**
  * A dnc.com loginId. Required if the dncSourceType is dnc.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#login_id OutboundDnclist#login_id}
  */
  readonly loginId?: string;
  /**
  * The name of the DncList.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#name OutboundDnclist#name}
  */
  readonly name: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#entries OutboundDnclist#entries}
  */
  readonly entries?: OutboundDnclistEntries[] | cdktf.IResolvable;
}
export interface OutboundDnclistEntries {
  /**
  * Expiration date for DNC phone numbers in yyyy-MM-ddTHH:mmZ format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#expiration_date OutboundDnclist#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Phone numbers to add to a DNC list. Only possible if the dncSourceType is rds.  Phone numbers must be in an E.164 number format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#phone_numbers OutboundDnclist#phone_numbers}
  */
  readonly phoneNumbers?: string[];
}

export function outboundDnclistEntriesToTerraform(struct?: OutboundDnclistEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_date: cdktf.stringToTerraform(struct!.expirationDate),
    phone_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phoneNumbers),
  }
}


export function outboundDnclistEntriesToHclTerraform(struct?: OutboundDnclistEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_date: {
      value: cdktf.stringToHclTerraform(struct!.expirationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phoneNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDnclistEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OutboundDnclistEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDate = this._expirationDate;
    }
    if (this._phoneNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumbers = this._phoneNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDnclistEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationDate = undefined;
      this._phoneNumbers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationDate = value.expirationDate;
      this._phoneNumbers = value.phoneNumbers;
    }
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // phone_numbers - computed: false, optional: true, required: false
  private _phoneNumbers?: string[]; 
  public get phoneNumbers() {
    return this.getListAttribute('phone_numbers');
  }
  public set phoneNumbers(value: string[]) {
    this._phoneNumbers = value;
  }
  public resetPhoneNumbers() {
    this._phoneNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumbersInput() {
    return this._phoneNumbers;
  }
}

export class OutboundDnclistEntriesList extends cdktf.ComplexList {
  public internalValue? : OutboundDnclistEntries[] | cdktf.IResolvable

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
  public get(index: number): OutboundDnclistEntriesOutputReference {
    return new OutboundDnclistEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist genesyscloud_outbound_dnclist}
*/
export class OutboundDnclist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_dnclist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundDnclist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundDnclist to import
  * @param importFromId The id of the existing OutboundDnclist that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundDnclist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_dnclist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_dnclist genesyscloud_outbound_dnclist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundDnclistConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundDnclistConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_dnclist',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._campaignId = config.campaignId;
    this._contactMethod = config.contactMethod;
    this._customExclusionColumn = config.customExclusionColumn;
    this._divisionId = config.divisionId;
    this._dncCodes = config.dncCodes;
    this._dncSourceType = config.dncSourceType;
    this._id = config.id;
    this._licenseId = config.licenseId;
    this._loginId = config.loginId;
    this._name = config.name;
    this._entries.internalValue = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // campaign_id - computed: false, optional: true, required: false
  private _campaignId?: string; 
  public get campaignId() {
    return this.getStringAttribute('campaign_id');
  }
  public set campaignId(value: string) {
    this._campaignId = value;
  }
  public resetCampaignId() {
    this._campaignId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignIdInput() {
    return this._campaignId;
  }

  // contact_method - computed: true, optional: true, required: false
  private _contactMethod?: string; 
  public get contactMethod() {
    return this.getStringAttribute('contact_method');
  }
  public set contactMethod(value: string) {
    this._contactMethod = value;
  }
  public resetContactMethod() {
    this._contactMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactMethodInput() {
    return this._contactMethod;
  }

  // custom_exclusion_column - computed: false, optional: true, required: false
  private _customExclusionColumn?: string; 
  public get customExclusionColumn() {
    return this.getStringAttribute('custom_exclusion_column');
  }
  public set customExclusionColumn(value: string) {
    this._customExclusionColumn = value;
  }
  public resetCustomExclusionColumn() {
    this._customExclusionColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customExclusionColumnInput() {
    return this._customExclusionColumn;
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // dnc_codes - computed: false, optional: true, required: false
  private _dncCodes?: string[]; 
  public get dncCodes() {
    return this.getListAttribute('dnc_codes');
  }
  public set dncCodes(value: string[]) {
    this._dncCodes = value;
  }
  public resetDncCodes() {
    this._dncCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dncCodesInput() {
    return this._dncCodes;
  }

  // dnc_source_type - computed: false, optional: false, required: true
  private _dncSourceType?: string; 
  public get dncSourceType() {
    return this.getStringAttribute('dnc_source_type');
  }
  public set dncSourceType(value: string) {
    this._dncSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dncSourceTypeInput() {
    return this._dncSourceType;
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

  // license_id - computed: false, optional: true, required: false
  private _licenseId?: string; 
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }
  public set licenseId(value: string) {
    this._licenseId = value;
  }
  public resetLicenseId() {
    this._licenseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseIdInput() {
    return this._licenseId;
  }

  // login_id - computed: false, optional: true, required: false
  private _loginId?: string; 
  public get loginId() {
    return this.getStringAttribute('login_id');
  }
  public set loginId(value: string) {
    this._loginId = value;
  }
  public resetLoginId() {
    this._loginId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdInput() {
    return this._loginId;
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

  // entries - computed: false, optional: true, required: false
  private _entries = new OutboundDnclistEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: OutboundDnclistEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      campaign_id: cdktf.stringToTerraform(this._campaignId),
      contact_method: cdktf.stringToTerraform(this._contactMethod),
      custom_exclusion_column: cdktf.stringToTerraform(this._customExclusionColumn),
      division_id: cdktf.stringToTerraform(this._divisionId),
      dnc_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dncCodes),
      dnc_source_type: cdktf.stringToTerraform(this._dncSourceType),
      id: cdktf.stringToTerraform(this._id),
      license_id: cdktf.stringToTerraform(this._licenseId),
      login_id: cdktf.stringToTerraform(this._loginId),
      name: cdktf.stringToTerraform(this._name),
      entries: cdktf.listMapper(outboundDnclistEntriesToTerraform, true)(this._entries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      campaign_id: {
        value: cdktf.stringToHclTerraform(this._campaignId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_method: {
        value: cdktf.stringToHclTerraform(this._contactMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_exclusion_column: {
        value: cdktf.stringToHclTerraform(this._customExclusionColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnc_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dncCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dnc_source_type: {
        value: cdktf.stringToHclTerraform(this._dncSourceType),
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
      license_id: {
        value: cdktf.stringToHclTerraform(this._licenseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_id: {
        value: cdktf.stringToHclTerraform(this._loginId),
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
      entries: {
        value: cdktf.listMapperHcl(outboundDnclistEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundDnclistEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
