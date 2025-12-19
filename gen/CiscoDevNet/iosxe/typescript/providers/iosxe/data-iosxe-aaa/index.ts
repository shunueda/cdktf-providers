// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/aaa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeAaaConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/aaa#device DataIosxeAaa#device}
  */
  readonly device?: string;
}
export interface DataIosxeAaaGroupServerRadiusServerNames {
}

export function dataIosxeAaaGroupServerRadiusServerNamesToTerraform(struct?: DataIosxeAaaGroupServerRadiusServerNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaGroupServerRadiusServerNamesToHclTerraform(struct?: DataIosxeAaaGroupServerRadiusServerNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaGroupServerRadiusServerNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaGroupServerRadiusServerNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaGroupServerRadiusServerNames | undefined) {
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
}

export class DataIosxeAaaGroupServerRadiusServerNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaGroupServerRadiusServerNamesOutputReference {
    return new DataIosxeAaaGroupServerRadiusServerNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaGroupServerRadius {
}

export function dataIosxeAaaGroupServerRadiusToTerraform(struct?: DataIosxeAaaGroupServerRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaGroupServerRadiusToHclTerraform(struct?: DataIosxeAaaGroupServerRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaGroupServerRadiusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaGroupServerRadius | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaGroupServerRadius | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deadtime - computed: true, optional: false, required: false
  public get deadtime() {
    return this.getNumberAttribute('deadtime');
  }

  // ip_radius_source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_five_gigabit_ethernet');
  }

  // ip_radius_source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_forty_gigabit_ethernet');
  }

  // ip_radius_source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_gigabit_ethernet');
  }

  // ip_radius_source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_hundred_gigabit_ethernet');
  }

  // ip_radius_source_interface_loopback - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_radius_source_interface_loopback');
  }

  // ip_radius_source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_ten_gigabit_ethernet');
  }

  // ip_radius_source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_twenty_five_gigabit_ethernet');
  }

  // ip_radius_source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_two_gigabit_ethernet');
  }

  // ip_radius_source_interface_vlan - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_radius_source_interface_vlan');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_names - computed: true, optional: false, required: false
  private _serverNames = new DataIosxeAaaGroupServerRadiusServerNamesList(this, "server_names", false);
  public get serverNames() {
    return this._serverNames;
  }
}

export class DataIosxeAaaGroupServerRadiusList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaGroupServerRadiusOutputReference {
    return new DataIosxeAaaGroupServerRadiusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaGroupServerTacacsplusServerNames {
}

export function dataIosxeAaaGroupServerTacacsplusServerNamesToTerraform(struct?: DataIosxeAaaGroupServerTacacsplusServerNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaGroupServerTacacsplusServerNamesToHclTerraform(struct?: DataIosxeAaaGroupServerTacacsplusServerNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaGroupServerTacacsplusServerNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaGroupServerTacacsplusServerNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaGroupServerTacacsplusServerNames | undefined) {
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
}

export class DataIosxeAaaGroupServerTacacsplusServerNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaGroupServerTacacsplusServerNamesOutputReference {
    return new DataIosxeAaaGroupServerTacacsplusServerNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaGroupServerTacacsplus {
}

export function dataIosxeAaaGroupServerTacacsplusToTerraform(struct?: DataIosxeAaaGroupServerTacacsplus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaGroupServerTacacsplusToHclTerraform(struct?: DataIosxeAaaGroupServerTacacsplus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaGroupServerTacacsplusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaGroupServerTacacsplus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaGroupServerTacacsplus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_tacacs_source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_five_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_forty_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_hundred_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_loopback - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_tacacs_source_interface_loopback');
  }

  // ip_tacacs_source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_ten_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_twenty_five_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_two_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_vlan - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_tacacs_source_interface_vlan');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_names - computed: true, optional: false, required: false
  private _serverNames = new DataIosxeAaaGroupServerTacacsplusServerNamesList(this, "server_names", false);
  public get serverNames() {
    return this._serverNames;
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeAaaGroupServerTacacsplusList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaGroupServerTacacsplusOutputReference {
    return new DataIosxeAaaGroupServerTacacsplusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaServerRadiusDynamicAuthorClients {
}

export function dataIosxeAaaServerRadiusDynamicAuthorClientsToTerraform(struct?: DataIosxeAaaServerRadiusDynamicAuthorClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaServerRadiusDynamicAuthorClientsToHclTerraform(struct?: DataIosxeAaaServerRadiusDynamicAuthorClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaServerRadiusDynamicAuthorClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaServerRadiusDynamicAuthorClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaServerRadiusDynamicAuthorClients | undefined) {
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

  // server_key - computed: true, optional: false, required: false
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }

  // server_key_type - computed: true, optional: false, required: false
  public get serverKeyType() {
    return this.getStringAttribute('server_key_type');
  }
}

export class DataIosxeAaaServerRadiusDynamicAuthorClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaServerRadiusDynamicAuthorClientsOutputReference {
    return new DataIosxeAaaServerRadiusDynamicAuthorClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/aaa iosxe_aaa}
*/
export class DataIosxeAaa extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeAaa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeAaa to import
  * @param importFromId The id of the existing DataIosxeAaa that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/aaa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeAaa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/aaa iosxe_aaa} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeAaaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeAaaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // group_server_radius - computed: true, optional: false, required: false
  private _groupServerRadius = new DataIosxeAaaGroupServerRadiusList(this, "group_server_radius", false);
  public get groupServerRadius() {
    return this._groupServerRadius;
  }

  // group_server_tacacsplus - computed: true, optional: false, required: false
  private _groupServerTacacsplus = new DataIosxeAaaGroupServerTacacsplusList(this, "group_server_tacacsplus", false);
  public get groupServerTacacsplus() {
    return this._groupServerTacacsplus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_authentication_max_fail_attempts - computed: true, optional: false, required: false
  public get localAuthenticationMaxFailAttempts() {
    return this.getNumberAttribute('local_authentication_max_fail_attempts');
  }

  // local_authentication_type - computed: true, optional: false, required: false
  public get localAuthenticationType() {
    return this.getStringAttribute('local_authentication_type');
  }

  // local_authorization - computed: true, optional: false, required: false
  public get localAuthorization() {
    return this.getStringAttribute('local_authorization');
  }

  // new_model - computed: true, optional: false, required: false
  public get newModel() {
    return this.getBooleanAttribute('new_model');
  }

  // server_radius_dynamic_author - computed: true, optional: false, required: false
  public get serverRadiusDynamicAuthor() {
    return this.getBooleanAttribute('server_radius_dynamic_author');
  }

  // server_radius_dynamic_author_clients - computed: true, optional: false, required: false
  private _serverRadiusDynamicAuthorClients = new DataIosxeAaaServerRadiusDynamicAuthorClientsList(this, "server_radius_dynamic_author_clients", false);
  public get serverRadiusDynamicAuthorClients() {
    return this._serverRadiusDynamicAuthorClients;
  }

  // session_id - computed: true, optional: false, required: false
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
