// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformDnsRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * User ID who create the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#created_by DataSamsungcloudplatformDnsRecords#created_by}
  */
  readonly createdBy?: string;
  /**
  * DNS Domain Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#dns_domain_id DataSamsungcloudplatformDnsRecords#dns_domain_id}
  */
  readonly dnsDomainId?: string;
  /**
  * DNS Record Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#dns_record_name DataSamsungcloudplatformDnsRecords#dns_record_name}
  */
  readonly dnsRecordName?: string;
  /**
  * DNS Record Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#dns_record_type DataSamsungcloudplatformDnsRecords#dns_record_type}
  */
  readonly dnsRecordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#id DataSamsungcloudplatformDnsRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#page DataSamsungcloudplatformDnsRecords#page}
  */
  readonly page?: number;
  /**
  * DNS Record Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#record_destination DataSamsungcloudplatformDnsRecords#record_destination}
  */
  readonly recordDestination?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#size DataSamsungcloudplatformDnsRecords#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#sort DataSamsungcloudplatformDnsRecords#sort}
  */
  readonly sort?: string;
}
export interface DataSamsungcloudplatformDnsRecordsContents {
}

export function dataSamsungcloudplatformDnsRecordsContentsToTerraform(struct?: DataSamsungcloudplatformDnsRecordsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformDnsRecordsContentsToHclTerraform(struct?: DataSamsungcloudplatformDnsRecordsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformDnsRecordsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformDnsRecordsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformDnsRecordsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_record_id - computed: true, optional: false, required: false
  public get dnsRecordId() {
    return this.getStringAttribute('dns_record_id');
  }

  // dns_record_name - computed: true, optional: false, required: false
  public get dnsRecordName() {
    return this.getStringAttribute('dns_record_name');
  }

  // dns_record_type - computed: true, optional: false, required: false
  public get dnsRecordType() {
    return this.getStringAttribute('dns_record_type');
  }

  // dns_state - computed: true, optional: false, required: false
  public get dnsState() {
    return this.getStringAttribute('dns_state');
  }

  // record_destinations - computed: true, optional: false, required: false
  public get recordDestinations() {
    return this.getListAttribute('record_destinations');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataSamsungcloudplatformDnsRecordsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformDnsRecordsContentsOutputReference {
    return new DataSamsungcloudplatformDnsRecordsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records samsungcloudplatform_dns_records}
*/
export class DataSamsungcloudplatformDnsRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_dns_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformDnsRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformDnsRecords to import
  * @param importFromId The id of the existing DataSamsungcloudplatformDnsRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformDnsRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_dns_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/dns_records samsungcloudplatform_dns_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformDnsRecordsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformDnsRecordsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_dns_records',
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
    this._createdBy = config.createdBy;
    this._dnsDomainId = config.dnsDomainId;
    this._dnsRecordName = config.dnsRecordName;
    this._dnsRecordType = config.dnsRecordType;
    this._id = config.id;
    this._page = config.page;
    this._recordDestination = config.recordDestination;
    this._size = config.size;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformDnsRecordsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // dns_domain_id - computed: false, optional: true, required: false
  private _dnsDomainId?: string; 
  public get dnsDomainId() {
    return this.getStringAttribute('dns_domain_id');
  }
  public set dnsDomainId(value: string) {
    this._dnsDomainId = value;
  }
  public resetDnsDomainId() {
    this._dnsDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainIdInput() {
    return this._dnsDomainId;
  }

  // dns_record_name - computed: false, optional: true, required: false
  private _dnsRecordName?: string; 
  public get dnsRecordName() {
    return this.getStringAttribute('dns_record_name');
  }
  public set dnsRecordName(value: string) {
    this._dnsRecordName = value;
  }
  public resetDnsRecordName() {
    this._dnsRecordName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordNameInput() {
    return this._dnsRecordName;
  }

  // dns_record_type - computed: false, optional: true, required: false
  private _dnsRecordType?: string; 
  public get dnsRecordType() {
    return this.getStringAttribute('dns_record_type');
  }
  public set dnsRecordType(value: string) {
    this._dnsRecordType = value;
  }
  public resetDnsRecordType() {
    this._dnsRecordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordTypeInput() {
    return this._dnsRecordType;
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

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // record_destination - computed: false, optional: true, required: false
  private _recordDestination?: string; 
  public get recordDestination() {
    return this.getStringAttribute('record_destination');
  }
  public set recordDestination(value: string) {
    this._recordDestination = value;
  }
  public resetRecordDestination() {
    this._recordDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDestinationInput() {
    return this._recordDestination;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      dns_domain_id: cdktf.stringToTerraform(this._dnsDomainId),
      dns_record_name: cdktf.stringToTerraform(this._dnsRecordName),
      dns_record_type: cdktf.stringToTerraform(this._dnsRecordType),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      record_destination: cdktf.stringToTerraform(this._recordDestination),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_domain_id: {
        value: cdktf.stringToHclTerraform(this._dnsDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_record_name: {
        value: cdktf.stringToHclTerraform(this._dnsRecordName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_record_type: {
        value: cdktf.stringToHclTerraform(this._dnsRecordType),
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
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_destination: {
        value: cdktf.stringToHclTerraform(this._recordDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
