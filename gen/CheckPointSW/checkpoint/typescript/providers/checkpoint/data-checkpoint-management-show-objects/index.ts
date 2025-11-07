// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementShowObjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to dereference "members" field by details level for every object in reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#dereference_group_members DataCheckpointManagementShowObjects#dereference_group_members}
  */
  readonly dereferenceGroupMembers?: boolean | cdktf.IResolvable;
  /**
  * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#domains_to_process DataCheckpointManagementShowObjects#domains_to_process}
  */
  readonly domainsToProcess?: string[];
  /**
  * Search expression to filter objects by. The provided text should be exactly the same as it would be given in Smart Console. The logical operators in the expression ('AND', 'OR') should be provided in capital letters. By default, the search involves both a textual search and a IP search. To use IP search only, set the "ip-only" parameter to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#filter DataCheckpointManagementShowObjects#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#id DataCheckpointManagementShowObjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If using "filter", use this field to search objects by their IP address only, without involving the textual search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#ip_only DataCheckpointManagementShowObjects#ip_only}
  */
  readonly ipOnly?: boolean | cdktf.IResolvable;
  /**
  * The maximal number of returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#limit DataCheckpointManagementShowObjects#limit}
  */
  readonly limit?: number;
  /**
  * Number of the results to initially skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#offset DataCheckpointManagementShowObjects#offset}
  */
  readonly offset?: number;
  /**
  * Indicates whether to calculate and show "groups" field for every object in reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#show_membership DataCheckpointManagementShowObjects#show_membership}
  */
  readonly showMembership?: boolean | cdktf.IResolvable;
  /**
  * The objects' type, e.g.: host, service-tcp, network, address-range...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#type DataCheckpointManagementShowObjects#type}
  */
  readonly type?: string;
  /**
  * List of UIDs of the objects to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#uids DataCheckpointManagementShowObjects#uids}
  */
  readonly uids?: string[];
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#order DataCheckpointManagementShowObjects#order}
  */
  readonly order?: DataCheckpointManagementShowObjectsOrder[] | cdktf.IResolvable;
}
export interface DataCheckpointManagementShowObjectsObjects {
}

export function dataCheckpointManagementShowObjectsObjectsToTerraform(struct?: DataCheckpointManagementShowObjectsObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementShowObjectsObjectsToHclTerraform(struct?: DataCheckpointManagementShowObjectsObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementShowObjectsObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementShowObjectsObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementShowObjectsObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  private _domain = new cdktf.StringMap(this, "domain");
  public get domain() {
    return this._domain;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementShowObjectsObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementShowObjectsObjectsOutputReference {
    return new DataCheckpointManagementShowObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementShowObjectsOrder {
  /**
  * Sorts results by the given field in ascending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#asc DataCheckpointManagementShowObjects#asc}
  */
  readonly asc?: string;
  /**
  * Sorts results by the given field in descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#desc DataCheckpointManagementShowObjects#desc}
  */
  readonly desc?: string;
}

export function dataCheckpointManagementShowObjectsOrderToTerraform(struct?: DataCheckpointManagementShowObjectsOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asc: cdktf.stringToTerraform(struct!.asc),
    desc: cdktf.stringToTerraform(struct!.desc),
  }
}


export function dataCheckpointManagementShowObjectsOrderToHclTerraform(struct?: DataCheckpointManagementShowObjectsOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asc: {
      value: cdktf.stringToHclTerraform(struct!.asc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCheckpointManagementShowObjectsOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementShowObjectsOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asc !== undefined) {
      hasAnyValues = true;
      internalValueResult.asc = this._asc;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementShowObjectsOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asc = undefined;
      this._desc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asc = value.asc;
      this._desc = value.desc;
    }
  }

  // asc - computed: false, optional: true, required: false
  private _asc?: string; 
  public get asc() {
    return this.getStringAttribute('asc');
  }
  public set asc(value: string) {
    this._asc = value;
  }
  public resetAsc() {
    this._asc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascInput() {
    return this._asc;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }
}

export class DataCheckpointManagementShowObjectsOrderList extends cdktf.ComplexList {
  public internalValue? : DataCheckpointManagementShowObjectsOrder[] | cdktf.IResolvable

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
  public get(index: number): DataCheckpointManagementShowObjectsOrderOutputReference {
    return new DataCheckpointManagementShowObjectsOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects checkpoint_management_show_objects}
*/
export class DataCheckpointManagementShowObjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_show_objects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementShowObjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementShowObjects to import
  * @param importFromId The id of the existing DataCheckpointManagementShowObjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementShowObjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_show_objects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_objects checkpoint_management_show_objects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementShowObjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementShowObjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_show_objects',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dereferenceGroupMembers = config.dereferenceGroupMembers;
    this._domainsToProcess = config.domainsToProcess;
    this._filter = config.filter;
    this._id = config.id;
    this._ipOnly = config.ipOnly;
    this._limit = config.limit;
    this._offset = config.offset;
    this._showMembership = config.showMembership;
    this._type = config.type;
    this._uids = config.uids;
    this._order.internalValue = config.order;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dereference_group_members - computed: false, optional: true, required: false
  private _dereferenceGroupMembers?: boolean | cdktf.IResolvable; 
  public get dereferenceGroupMembers() {
    return this.getBooleanAttribute('dereference_group_members');
  }
  public set dereferenceGroupMembers(value: boolean | cdktf.IResolvable) {
    this._dereferenceGroupMembers = value;
  }
  public resetDereferenceGroupMembers() {
    this._dereferenceGroupMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dereferenceGroupMembersInput() {
    return this._dereferenceGroupMembers;
  }

  // domains_to_process - computed: false, optional: true, required: false
  private _domainsToProcess?: string[]; 
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }
  public set domainsToProcess(value: string[]) {
    this._domainsToProcess = value;
  }
  public resetDomainsToProcess() {
    this._domainsToProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsToProcessInput() {
    return this._domainsToProcess;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
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

  // ip_only - computed: false, optional: true, required: false
  private _ipOnly?: boolean | cdktf.IResolvable; 
  public get ipOnly() {
    return this.getBooleanAttribute('ip_only');
  }
  public set ipOnly(value: boolean | cdktf.IResolvable) {
    this._ipOnly = value;
  }
  public resetIpOnly() {
    this._ipOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyInput() {
    return this._ipOnly;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // objects - computed: true, optional: false, required: false
  private _objects = new DataCheckpointManagementShowObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }

  // show_membership - computed: false, optional: true, required: false
  private _showMembership?: boolean | cdktf.IResolvable; 
  public get showMembership() {
    return this.getBooleanAttribute('show_membership');
  }
  public set showMembership(value: boolean | cdktf.IResolvable) {
    this._showMembership = value;
  }
  public resetShowMembership() {
    this._showMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMembershipInput() {
    return this._showMembership;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uids - computed: false, optional: true, required: false
  private _uids?: string[]; 
  public get uids() {
    return cdktf.Fn.tolist(this.getListAttribute('uids'));
  }
  public set uids(value: string[]) {
    this._uids = value;
  }
  public resetUids() {
    this._uids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidsInput() {
    return this._uids;
  }

  // order - computed: false, optional: true, required: false
  private _order = new DataCheckpointManagementShowObjectsOrderList(this, "order", false);
  public get order() {
    return this._order;
  }
  public putOrder(value: DataCheckpointManagementShowObjectsOrder[] | cdktf.IResolvable) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dereference_group_members: cdktf.booleanToTerraform(this._dereferenceGroupMembers),
      domains_to_process: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainsToProcess),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      ip_only: cdktf.booleanToTerraform(this._ipOnly),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      show_membership: cdktf.booleanToTerraform(this._showMembership),
      type: cdktf.stringToTerraform(this._type),
      uids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uids),
      order: cdktf.listMapper(dataCheckpointManagementShowObjectsOrderToTerraform, true)(this._order.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dereference_group_members: {
        value: cdktf.booleanToHclTerraform(this._dereferenceGroupMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domains_to_process: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainsToProcess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      ip_only: {
        value: cdktf.booleanToHclTerraform(this._ipOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show_membership: {
        value: cdktf.booleanToHclTerraform(this._showMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.listMapperHcl(dataCheckpointManagementShowObjectsOrderToHclTerraform, true)(this._order.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCheckpointManagementShowObjectsOrderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
