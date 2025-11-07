// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementLsmGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway#id DataCheckpointManagementLsmGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway#name DataCheckpointManagementLsmGateway#name}
  */
  readonly name?: string;
  /**
  * Object uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway#uid DataCheckpointManagementLsmGateway#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange {
}

export function dataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeToTerraform(struct?: DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeToHclTerraform(struct?: DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_ipv4_address - computed: true, optional: false, required: false
  public get fromIpv4Address() {
    return this.getStringAttribute('from_ipv4_address');
  }

  // to_ipv4_address - computed: true, optional: false, required: false
  public get toIpv4Address() {
    return this.getStringAttribute('to_ipv4_address');
  }
}

export class DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference {
    return new DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddresses {
}

export function dataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesToTerraform(struct?: DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesToHclTerraform(struct?: DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_range - computed: true, optional: false, required: false
  private _ipv4AddressRange = new DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesIpv4AddressRangeList(this, "ipv4_address_range", false);
  public get ipv4AddressRange() {
    return this._ipv4AddressRange;
  }
}

export class DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesOutputReference {
    return new DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayDynamicObjects {
}

export function dataCheckpointManagementLsmGatewayDynamicObjectsToTerraform(struct?: DataCheckpointManagementLsmGatewayDynamicObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayDynamicObjectsToHclTerraform(struct?: DataCheckpointManagementLsmGatewayDynamicObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayDynamicObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayDynamicObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayDynamicObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resolved_ip_addresses - computed: true, optional: false, required: false
  private _resolvedIpAddresses = new DataCheckpointManagementLsmGatewayDynamicObjectsResolvedIpAddressesList(this, "resolved_ip_addresses", false);
  public get resolvedIpAddresses() {
    return this._resolvedIpAddresses;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementLsmGatewayDynamicObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayDynamicObjectsOutputReference {
    return new DataCheckpointManagementLsmGatewayDynamicObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayTopologyManualVpnDomain {
}

export function dataCheckpointManagementLsmGatewayTopologyManualVpnDomainToTerraform(struct?: DataCheckpointManagementLsmGatewayTopologyManualVpnDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayTopologyManualVpnDomainToHclTerraform(struct?: DataCheckpointManagementLsmGatewayTopologyManualVpnDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayTopologyManualVpnDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayTopologyManualVpnDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayTopologyManualVpnDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // from_ipv4_address - computed: true, optional: false, required: false
  public get fromIpv4Address() {
    return this.getStringAttribute('from_ipv4_address');
  }

  // to_ipv4_address - computed: true, optional: false, required: false
  public get toIpv4Address() {
    return this.getStringAttribute('to_ipv4_address');
  }
}

export class DataCheckpointManagementLsmGatewayTopologyManualVpnDomainList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayTopologyManualVpnDomainOutputReference {
    return new DataCheckpointManagementLsmGatewayTopologyManualVpnDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayTopology {
}

export function dataCheckpointManagementLsmGatewayTopologyToTerraform(struct?: DataCheckpointManagementLsmGatewayTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayTopologyToHclTerraform(struct?: DataCheckpointManagementLsmGatewayTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manual_vpn_domain - computed: true, optional: false, required: false
  private _manualVpnDomain = new DataCheckpointManagementLsmGatewayTopologyManualVpnDomainList(this, "manual_vpn_domain", false);
  public get manualVpnDomain() {
    return this._manualVpnDomain;
  }

  // vpn_domain - computed: true, optional: false, required: false
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
}

export class DataCheckpointManagementLsmGatewayTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayTopologyOutputReference {
    return new DataCheckpointManagementLsmGatewayTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway checkpoint_management_lsm_gateway}
*/
export class DataCheckpointManagementLsmGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_lsm_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementLsmGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementLsmGateway to import
  * @param importFromId The id of the existing DataCheckpointManagementLsmGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementLsmGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_lsm_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway checkpoint_management_lsm_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementLsmGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementLsmGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_lsm_gateway',
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
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // dynamic_objects - computed: true, optional: false, required: false
  private _dynamicObjects = new DataCheckpointManagementLsmGatewayDynamicObjectsList(this, "dynamic_objects", false);
  public get dynamicObjects() {
    return this._dynamicObjects;
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

  // ignore_errors - computed: true, optional: false, required: false
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }

  // ignore_warnings - computed: true, optional: false, required: false
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // provisioning_settings - computed: true, optional: false, required: false
  private _provisioningSettings = new cdktf.StringMap(this, "provisioning_settings");
  public get provisioningSettings() {
    return this._provisioningSettings;
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }

  // security_profile - computed: true, optional: false, required: false
  public get securityProfile() {
    return this.getStringAttribute('security_profile');
  }

  // sic - computed: true, optional: false, required: false
  private _sic = new cdktf.StringMap(this, "sic");
  public get sic() {
    return this._sic;
  }

  // sic_name - computed: true, optional: false, required: false
  public get sicName() {
    return this.getStringAttribute('sic_name');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // topology - computed: true, optional: false, required: false
  private _topology = new DataCheckpointManagementLsmGatewayTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
