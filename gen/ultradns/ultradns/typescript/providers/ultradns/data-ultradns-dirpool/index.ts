// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUltradnsDirpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool#id DataUltradnsDirpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool#owner_name DataUltradnsDirpool#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool#record_type DataUltradnsDirpool#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool#zone_name DataUltradnsDirpool#zone_name}
  */
  readonly zoneName: string;
}
export interface DataUltradnsDirpoolNoResponseIp {
}

export function dataUltradnsDirpoolNoResponseIpToTerraform(struct?: DataUltradnsDirpoolNoResponseIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsDirpoolNoResponseIpToHclTerraform(struct?: DataUltradnsDirpoolNoResponseIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsDirpoolNoResponseIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsDirpoolNoResponseIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsDirpoolNoResponseIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataUltradnsDirpoolNoResponseIpList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsDirpoolNoResponseIpOutputReference {
    return new DataUltradnsDirpoolNoResponseIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsDirpoolNoResponse {
}

export function dataUltradnsDirpoolNoResponseToTerraform(struct?: DataUltradnsDirpoolNoResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsDirpoolNoResponseToHclTerraform(struct?: DataUltradnsDirpoolNoResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsDirpoolNoResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsDirpoolNoResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsDirpoolNoResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_non_configured - computed: true, optional: false, required: false
  public get allNonConfigured() {
    return this.getBooleanAttribute('all_non_configured');
  }

  // geo_account_level - computed: true, optional: false, required: false
  public get geoAccountLevel() {
    return this.getBooleanAttribute('geo_account_level');
  }

  // geo_codes - computed: true, optional: false, required: false
  public get geoCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('geo_codes'));
  }

  // geo_group_name - computed: true, optional: false, required: false
  public get geoGroupName() {
    return this.getStringAttribute('geo_group_name');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataUltradnsDirpoolNoResponseIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // ip_account_level - computed: true, optional: false, required: false
  public get ipAccountLevel() {
    return this.getBooleanAttribute('ip_account_level');
  }

  // ip_group_name - computed: true, optional: false, required: false
  public get ipGroupName() {
    return this.getStringAttribute('ip_group_name');
  }
}

export class DataUltradnsDirpoolNoResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsDirpoolNoResponseOutputReference {
    return new DataUltradnsDirpoolNoResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsDirpoolRdataInfoIp {
}

export function dataUltradnsDirpoolRdataInfoIpToTerraform(struct?: DataUltradnsDirpoolRdataInfoIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsDirpoolRdataInfoIpToHclTerraform(struct?: DataUltradnsDirpoolRdataInfoIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsDirpoolRdataInfoIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsDirpoolRdataInfoIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsDirpoolRdataInfoIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataUltradnsDirpoolRdataInfoIpList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsDirpoolRdataInfoIpOutputReference {
    return new DataUltradnsDirpoolRdataInfoIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsDirpoolRdataInfo {
}

export function dataUltradnsDirpoolRdataInfoToTerraform(struct?: DataUltradnsDirpoolRdataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsDirpoolRdataInfoToHclTerraform(struct?: DataUltradnsDirpoolRdataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsDirpoolRdataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsDirpoolRdataInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsDirpoolRdataInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_non_configured - computed: true, optional: false, required: false
  public get allNonConfigured() {
    return this.getBooleanAttribute('all_non_configured');
  }

  // geo_account_level - computed: true, optional: false, required: false
  public get geoAccountLevel() {
    return this.getBooleanAttribute('geo_account_level');
  }

  // geo_codes - computed: true, optional: false, required: false
  public get geoCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('geo_codes'));
  }

  // geo_group_name - computed: true, optional: false, required: false
  public get geoGroupName() {
    return this.getStringAttribute('geo_group_name');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataUltradnsDirpoolRdataInfoIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // ip_account_level - computed: true, optional: false, required: false
  public get ipAccountLevel() {
    return this.getBooleanAttribute('ip_account_level');
  }

  // ip_group_name - computed: true, optional: false, required: false
  public get ipGroupName() {
    return this.getStringAttribute('ip_group_name');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataUltradnsDirpoolRdataInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsDirpoolRdataInfoOutputReference {
    return new DataUltradnsDirpoolRdataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool ultradns_dirpool}
*/
export class DataUltradnsDirpool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_dirpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUltradnsDirpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUltradnsDirpool to import
  * @param importFromId The id of the existing DataUltradnsDirpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUltradnsDirpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_dirpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/dirpool ultradns_dirpool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUltradnsDirpoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataUltradnsDirpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_dirpool',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1'
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
    this._ownerName = config.ownerName;
    this._recordType = config.recordType;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conflict_resolve - computed: true, optional: false, required: false
  public get conflictResolve() {
    return this.getStringAttribute('conflict_resolve');
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

  // ignore_ecs - computed: true, optional: false, required: false
  public get ignoreEcs() {
    return this.getBooleanAttribute('ignore_ecs');
  }

  // no_response - computed: true, optional: false, required: false
  private _noResponse = new DataUltradnsDirpoolNoResponseList(this, "no_response", false);
  public get noResponse() {
    return this._noResponse;
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // pool_description - computed: true, optional: false, required: false
  public get poolDescription() {
    return this.getStringAttribute('pool_description');
  }

  // rdata_info - computed: true, optional: false, required: false
  private _rdataInfo = new DataUltradnsDirpoolRdataInfoList(this, "rdata_info", true);
  public get rdataInfo() {
    return this._rdataInfo;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      record_type: cdktf.stringToTerraform(this._recordType),
      zone_name: cdktf.stringToTerraform(this._zoneName),
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
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
