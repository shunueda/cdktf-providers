// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/next_available_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataB1DdiNextAvailableIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the IP addresses should belong to a contiguous block.
  * 
  * Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/next_available_ip#contiguous DataB1DdiNextAvailableIp#contiguous}
  */
  readonly contiguous?: boolean | cdktf.IResolvable;
  /**
  * An application specific resource identity of a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/next_available_ip#id DataB1DdiNextAvailableIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The number of IP addresses requested.
  * 
  * Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/next_available_ip#ip_count DataB1DdiNextAvailableIp#ip_count}
  */
  readonly ipCount?: number;
}
export interface DataB1DdiNextAvailableIpResultsDhcpInfo {
}

export function dataB1DdiNextAvailableIpResultsDhcpInfoToTerraform(struct?: DataB1DdiNextAvailableIpResultsDhcpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiNextAvailableIpResultsDhcpInfoToHclTerraform(struct?: DataB1DdiNextAvailableIpResultsDhcpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiNextAvailableIpResultsDhcpInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiNextAvailableIpResultsDhcpInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiNextAvailableIpResultsDhcpInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_hostname - computed: true, optional: false, required: false
  public get clientHostname() {
    return this.getStringAttribute('client_hostname');
  }

  // client_hwaddr - computed: true, optional: false, required: false
  public get clientHwaddr() {
    return this.getStringAttribute('client_hwaddr');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // remain - computed: true, optional: false, required: false
  public get remain() {
    return this.getNumberAttribute('remain');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_ts - computed: true, optional: false, required: false
  public get stateTs() {
    return this.getStringAttribute('state_ts');
  }
}

export class DataB1DdiNextAvailableIpResultsDhcpInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiNextAvailableIpResultsDhcpInfoOutputReference {
    return new DataB1DdiNextAvailableIpResultsDhcpInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiNextAvailableIpResultsNames {
}

export function dataB1DdiNextAvailableIpResultsNamesToTerraform(struct?: DataB1DdiNextAvailableIpResultsNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiNextAvailableIpResultsNamesToHclTerraform(struct?: DataB1DdiNextAvailableIpResultsNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiNextAvailableIpResultsNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiNextAvailableIpResultsNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiNextAvailableIpResultsNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataB1DdiNextAvailableIpResultsNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiNextAvailableIpResultsNamesOutputReference {
    return new DataB1DdiNextAvailableIpResultsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiNextAvailableIpResults {
}

export function dataB1DdiNextAvailableIpResultsToTerraform(struct?: DataB1DdiNextAvailableIpResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiNextAvailableIpResultsToHclTerraform(struct?: DataB1DdiNextAvailableIpResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiNextAvailableIpResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiNextAvailableIpResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiNextAvailableIpResults | undefined) {
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

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dhcp_info - computed: true, optional: false, required: false
  private _dhcpInfo = new DataB1DdiNextAvailableIpResultsDhcpInfoList(this, "dhcp_info", false);
  public get dhcpInfo() {
    return this._dhcpInfo;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // hwaddr - computed: true, optional: false, required: false
  public get hwaddr() {
    return this.getStringAttribute('hwaddr');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // names - computed: true, optional: false, required: false
  private _names = new DataB1DdiNextAvailableIpResultsNamesList(this, "names", false);
  public get names() {
    return this._names;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // space - computed: true, optional: false, required: false
  public get space() {
    return this.getStringAttribute('space');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getListAttribute('usage');
  }
}

export class DataB1DdiNextAvailableIpResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiNextAvailableIpResultsOutputReference {
    return new DataB1DdiNextAvailableIpResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/next_available_ip b1ddi_next_available_ip}
*/
export class DataB1DdiNextAvailableIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi_next_available_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataB1DdiNextAvailableIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataB1DdiNextAvailableIp to import
  * @param importFromId The id of the existing DataB1DdiNextAvailableIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/next_available_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataB1DdiNextAvailableIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi_next_available_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/next_available_ip b1ddi_next_available_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataB1DdiNextAvailableIpConfig
  */
  public constructor(scope: Construct, id: string, config: DataB1DdiNextAvailableIpConfig) {
    super(scope, id, {
      terraformResourceType: 'b1ddi_next_available_ip',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contiguous = config.contiguous;
    this._id = config.id;
    this._ipCount = config.ipCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contiguous - computed: false, optional: true, required: false
  private _contiguous?: boolean | cdktf.IResolvable; 
  public get contiguous() {
    return this.getBooleanAttribute('contiguous');
  }
  public set contiguous(value: boolean | cdktf.IResolvable) {
    this._contiguous = value;
  }
  public resetContiguous() {
    this._contiguous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contiguousInput() {
    return this._contiguous;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_count - computed: false, optional: true, required: false
  private _ipCount?: number; 
  public get ipCount() {
    return this.getNumberAttribute('ip_count');
  }
  public set ipCount(value: number) {
    this._ipCount = value;
  }
  public resetIpCount() {
    this._ipCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCountInput() {
    return this._ipCount;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataB1DdiNextAvailableIpResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contiguous: cdktf.booleanToTerraform(this._contiguous),
      id: cdktf.stringToTerraform(this._id),
      ip_count: cdktf.numberToTerraform(this._ipCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contiguous: {
        value: cdktf.booleanToHclTerraform(this._contiguous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_count: {
        value: cdktf.numberToHclTerraform(this._ipCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
