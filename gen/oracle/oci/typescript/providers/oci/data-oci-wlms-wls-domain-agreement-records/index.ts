// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWlmsWlsDomainAgreementRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records#id DataOciWlmsWlsDomainAgreementRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records#wls_domain_id DataOciWlmsWlsDomainAgreementRecords#wls_domain_id}
  */
  readonly wlsDomainId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records#filter DataOciWlmsWlsDomainAgreementRecords#filter}
  */
  readonly filter?: DataOciWlmsWlsDomainAgreementRecordsFilter[] | cdktf.IResolvable;
}
export interface DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItems {
}

export function dataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItemsToTerraform(struct?: DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItemsToHclTerraform(struct?: DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agreement_signature - computed: true, optional: false, required: false
  public get agreementSignature() {
    return this.getStringAttribute('agreement_signature');
  }

  // agreement_uuid - computed: true, optional: false, required: false
  public get agreementUuid() {
    return this.getStringAttribute('agreement_uuid');
  }

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }
}

export class DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItemsOutputReference {
    return new DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollection {
}

export function dataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionToTerraform(struct?: DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionToHclTerraform(struct?: DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agreement_signature - computed: true, optional: false, required: false
  public get agreementSignature() {
    return this.getStringAttribute('agreement_signature');
  }

  // agreement_uuid - computed: true, optional: false, required: false
  public get agreementUuid() {
    return this.getStringAttribute('agreement_uuid');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // wls_domain_id - computed: true, optional: false, required: false
  public get wlsDomainId() {
    return this.getStringAttribute('wls_domain_id');
  }
}

export class DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionOutputReference {
    return new DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWlmsWlsDomainAgreementRecordsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records#name DataOciWlmsWlsDomainAgreementRecords#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records#regex DataOciWlmsWlsDomainAgreementRecords#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records#values DataOciWlmsWlsDomainAgreementRecords#values}
  */
  readonly values: string[];
}

export function dataOciWlmsWlsDomainAgreementRecordsFilterToTerraform(struct?: DataOciWlmsWlsDomainAgreementRecordsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciWlmsWlsDomainAgreementRecordsFilterToHclTerraform(struct?: DataOciWlmsWlsDomainAgreementRecordsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciWlmsWlsDomainAgreementRecordsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWlmsWlsDomainAgreementRecordsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWlmsWlsDomainAgreementRecordsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciWlmsWlsDomainAgreementRecordsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciWlmsWlsDomainAgreementRecordsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciWlmsWlsDomainAgreementRecordsFilterOutputReference {
    return new DataOciWlmsWlsDomainAgreementRecordsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records oci_wlms_wls_domain_agreement_records}
*/
export class DataOciWlmsWlsDomainAgreementRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_wlms_wls_domain_agreement_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWlmsWlsDomainAgreementRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWlmsWlsDomainAgreementRecords to import
  * @param importFromId The id of the existing DataOciWlmsWlsDomainAgreementRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWlmsWlsDomainAgreementRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_wlms_wls_domain_agreement_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/wlms_wls_domain_agreement_records oci_wlms_wls_domain_agreement_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWlmsWlsDomainAgreementRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWlmsWlsDomainAgreementRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_wlms_wls_domain_agreement_records',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._wlsDomainId = config.wlsDomainId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_record_collection - computed: true, optional: false, required: false
  private _agreementRecordCollection = new DataOciWlmsWlsDomainAgreementRecordsAgreementRecordCollectionList(this, "agreement_record_collection", false);
  public get agreementRecordCollection() {
    return this._agreementRecordCollection;
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

  // wls_domain_id - computed: false, optional: false, required: true
  private _wlsDomainId?: string; 
  public get wlsDomainId() {
    return this.getStringAttribute('wls_domain_id');
  }
  public set wlsDomainId(value: string) {
    this._wlsDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wlsDomainIdInput() {
    return this._wlsDomainId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciWlmsWlsDomainAgreementRecordsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciWlmsWlsDomainAgreementRecordsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      wls_domain_id: cdktf.stringToTerraform(this._wlsDomainId),
      filter: cdktf.listMapper(dataOciWlmsWlsDomainAgreementRecordsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wls_domain_id: {
        value: cdktf.stringToHclTerraform(this._wlsDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciWlmsWlsDomainAgreementRecordsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciWlmsWlsDomainAgreementRecordsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
