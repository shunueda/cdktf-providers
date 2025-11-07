// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexPeerSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#filter DataPowerflexPeerSystem#filter}
  */
  readonly filter?: DataPowerflexPeerSystemFilter;
}
export interface DataPowerflexPeerSystemPeerSystemDetailsIpListStruct {
}

export function dataPowerflexPeerSystemPeerSystemDetailsIpListStructToTerraform(struct?: DataPowerflexPeerSystemPeerSystemDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexPeerSystemPeerSystemDetailsIpListStructToHclTerraform(struct?: DataPowerflexPeerSystemPeerSystemDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexPeerSystemPeerSystemDetailsIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexPeerSystemPeerSystemDetailsIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexPeerSystemPeerSystemDetailsIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class DataPowerflexPeerSystemPeerSystemDetailsIpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexPeerSystemPeerSystemDetailsIpListStructOutputReference {
    return new DataPowerflexPeerSystemPeerSystemDetailsIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexPeerSystemPeerSystemDetails {
}

export function dataPowerflexPeerSystemPeerSystemDetailsToTerraform(struct?: DataPowerflexPeerSystemPeerSystemDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexPeerSystemPeerSystemDetailsToHclTerraform(struct?: DataPowerflexPeerSystemPeerSystemDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexPeerSystemPeerSystemDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexPeerSystemPeerSystemDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexPeerSystemPeerSystemDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coupling_rc - computed: true, optional: false, required: false
  public get couplingRc() {
    return this.getStringAttribute('coupling_rc');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataPowerflexPeerSystemPeerSystemDetailsIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }

  // membership_state - computed: true, optional: false, required: false
  public get membershipState() {
    return this.getStringAttribute('membership_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // peer_system_id - computed: true, optional: false, required: false
  public get peerSystemId() {
    return this.getStringAttribute('peer_system_id');
  }

  // perf_profile - computed: true, optional: false, required: false
  public get perfProfile() {
    return this.getStringAttribute('perf_profile');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // software_version_info - computed: true, optional: false, required: false
  public get softwareVersionInfo() {
    return this.getStringAttribute('software_version_info');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
}

export class DataPowerflexPeerSystemPeerSystemDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexPeerSystemPeerSystemDetailsOutputReference {
    return new DataPowerflexPeerSystemPeerSystemDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexPeerSystemFilter {
  /**
  * List of coupling_rc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#coupling_rc DataPowerflexPeerSystem#coupling_rc}
  */
  readonly couplingRc?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#id DataPowerflexPeerSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of membership_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#membership_state DataPowerflexPeerSystem#membership_state}
  */
  readonly membershipState?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#name DataPowerflexPeerSystem#name}
  */
  readonly name?: string[];
  /**
  * List of network_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#network_type DataPowerflexPeerSystem#network_type}
  */
  readonly networkType?: string[];
  /**
  * List of peer_system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#peer_system_id DataPowerflexPeerSystem#peer_system_id}
  */
  readonly peerSystemId?: string[];
  /**
  * List of perf_profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#perf_profile DataPowerflexPeerSystem#perf_profile}
  */
  readonly perfProfile?: string[];
  /**
  * List of port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#port DataPowerflexPeerSystem#port}
  */
  readonly port?: number[];
  /**
  * List of software_version_info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#software_version_info DataPowerflexPeerSystem#software_version_info}
  */
  readonly softwareVersionInfo?: string[];
  /**
  * List of system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#system_id DataPowerflexPeerSystem#system_id}
  */
  readonly systemId?: string[];
}

export function dataPowerflexPeerSystemFilterToTerraform(struct?: DataPowerflexPeerSystemFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coupling_rc: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.couplingRc),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    membership_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.membershipState),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    network_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkType),
    peer_system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peerSystemId),
    perf_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perfProfile),
    port: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.port),
    software_version_info: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.softwareVersionInfo),
    system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemId),
  }
}


export function dataPowerflexPeerSystemFilterToHclTerraform(struct?: DataPowerflexPeerSystemFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coupling_rc: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.couplingRc),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    membership_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.membershipState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    network_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    peer_system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peerSystemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    perf_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perfProfile),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.port),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    software_version_info: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.softwareVersionInfo),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexPeerSystemFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexPeerSystemFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._couplingRc !== undefined) {
      hasAnyValues = true;
      internalValueResult.couplingRc = this._couplingRc;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._membershipState !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipState = this._membershipState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._peerSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSystemId = this._peerSystemId;
    }
    if (this._perfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfProfile = this._perfProfile;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._softwareVersionInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVersionInfo = this._softwareVersionInfo;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexPeerSystemFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._couplingRc = undefined;
      this._id = undefined;
      this._membershipState = undefined;
      this._name = undefined;
      this._networkType = undefined;
      this._peerSystemId = undefined;
      this._perfProfile = undefined;
      this._port = undefined;
      this._softwareVersionInfo = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._couplingRc = value.couplingRc;
      this._id = value.id;
      this._membershipState = value.membershipState;
      this._name = value.name;
      this._networkType = value.networkType;
      this._peerSystemId = value.peerSystemId;
      this._perfProfile = value.perfProfile;
      this._port = value.port;
      this._softwareVersionInfo = value.softwareVersionInfo;
      this._systemId = value.systemId;
    }
  }

  // coupling_rc - computed: false, optional: true, required: false
  private _couplingRc?: string[]; 
  public get couplingRc() {
    return cdktf.Fn.tolist(this.getListAttribute('coupling_rc'));
  }
  public set couplingRc(value: string[]) {
    this._couplingRc = value;
  }
  public resetCouplingRc() {
    this._couplingRc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get couplingRcInput() {
    return this._couplingRc;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // membership_state - computed: false, optional: true, required: false
  private _membershipState?: string[]; 
  public get membershipState() {
    return cdktf.Fn.tolist(this.getListAttribute('membership_state'));
  }
  public set membershipState(value: string[]) {
    this._membershipState = value;
  }
  public resetMembershipState() {
    this._membershipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipStateInput() {
    return this._membershipState;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string[]; 
  public get networkType() {
    return cdktf.Fn.tolist(this.getListAttribute('network_type'));
  }
  public set networkType(value: string[]) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // peer_system_id - computed: false, optional: true, required: false
  private _peerSystemId?: string[]; 
  public get peerSystemId() {
    return cdktf.Fn.tolist(this.getListAttribute('peer_system_id'));
  }
  public set peerSystemId(value: string[]) {
    this._peerSystemId = value;
  }
  public resetPeerSystemId() {
    this._peerSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSystemIdInput() {
    return this._peerSystemId;
  }

  // perf_profile - computed: false, optional: true, required: false
  private _perfProfile?: string[]; 
  public get perfProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('perf_profile'));
  }
  public set perfProfile(value: string[]) {
    this._perfProfile = value;
  }
  public resetPerfProfile() {
    this._perfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfProfileInput() {
    return this._perfProfile;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number[]; 
  public get port() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('port')));
  }
  public set port(value: number[]) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // software_version_info - computed: false, optional: true, required: false
  private _softwareVersionInfo?: string[]; 
  public get softwareVersionInfo() {
    return cdktf.Fn.tolist(this.getListAttribute('software_version_info'));
  }
  public set softwareVersionInfo(value: string[]) {
    this._softwareVersionInfo = value;
  }
  public resetSoftwareVersionInfo() {
    this._softwareVersionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInfoInput() {
    return this._softwareVersionInfo;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string[]; 
  public get systemId() {
    return cdktf.Fn.tolist(this.getListAttribute('system_id'));
  }
  public set systemId(value: string[]) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system powerflex_peer_system}
*/
export class DataPowerflexPeerSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_peer_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexPeerSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexPeerSystem to import
  * @param importFromId The id of the existing DataPowerflexPeerSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexPeerSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_peer_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/peer_system powerflex_peer_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexPeerSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexPeerSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_peer_system',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_system_details - computed: true, optional: false, required: false
  private _peerSystemDetails = new DataPowerflexPeerSystemPeerSystemDetailsList(this, "peer_system_details", false);
  public get peerSystemDetails() {
    return this._peerSystemDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexPeerSystemFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexPeerSystemFilter) {
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
      filter: dataPowerflexPeerSystemFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexPeerSystemFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexPeerSystemFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
