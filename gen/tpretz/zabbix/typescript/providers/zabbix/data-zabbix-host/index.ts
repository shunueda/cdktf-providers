// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZabbixHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable host for monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#enabled DataZabbixHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * FQDN of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#host DataZabbixHost#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#hostid DataZabbixHost#hostid}
  */
  readonly hostid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#id DataZabbixHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inventory Mode, one of: automatic, disabled, manual
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#inventory_mode DataZabbixHost#inventory_mode}
  */
  readonly inventoryMode?: string;
  /**
  * Zabbix host displayname, defaults to the value of "host"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#name DataZabbixHost#name}
  */
  readonly name?: string;
  /**
  * Template IDs to attach to this host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#templates DataZabbixHost#templates}
  */
  readonly templates?: string[];
  /**
  * macro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#macro DataZabbixHost#macro}
  */
  readonly macro?: DataZabbixHostMacro[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#tag DataZabbixHost#tag}
  */
  readonly tag?: DataZabbixHostTag[] | cdktf.IResolvable;
}
export interface DataZabbixHostInterface {
}

export function dataZabbixHostInterfaceToTerraform(struct?: DataZabbixHostInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZabbixHostInterfaceToHclTerraform(struct?: DataZabbixHostInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZabbixHostInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZabbixHostInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZabbixHostInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // main - computed: true, optional: false, required: false
  public get main() {
    return this.getBooleanAttribute('main');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // snmp3_authpassphrase - computed: true, optional: false, required: false
  public get snmp3Authpassphrase() {
    return this.getStringAttribute('snmp3_authpassphrase');
  }

  // snmp3_authprotocol - computed: true, optional: false, required: false
  public get snmp3Authprotocol() {
    return this.getStringAttribute('snmp3_authprotocol');
  }

  // snmp3_contextname - computed: true, optional: false, required: false
  public get snmp3Contextname() {
    return this.getStringAttribute('snmp3_contextname');
  }

  // snmp3_privpassphrase - computed: true, optional: false, required: false
  public get snmp3Privpassphrase() {
    return this.getStringAttribute('snmp3_privpassphrase');
  }

  // snmp3_privprotocol - computed: true, optional: false, required: false
  public get snmp3Privprotocol() {
    return this.getStringAttribute('snmp3_privprotocol');
  }

  // snmp3_securitylevel - computed: true, optional: false, required: false
  public get snmp3Securitylevel() {
    return this.getStringAttribute('snmp3_securitylevel');
  }

  // snmp3_securityname - computed: true, optional: false, required: false
  public get snmp3Securityname() {
    return this.getStringAttribute('snmp3_securityname');
  }

  // snmp_bulk - computed: true, optional: false, required: false
  public get snmpBulk() {
    return this.getBooleanAttribute('snmp_bulk');
  }

  // snmp_community - computed: true, optional: false, required: false
  public get snmpCommunity() {
    return this.getStringAttribute('snmp_community');
  }

  // snmp_version - computed: true, optional: false, required: false
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZabbixHostInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataZabbixHostInterfaceOutputReference {
    return new DataZabbixHostInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZabbixHostInventory {
}

export function dataZabbixHostInventoryToTerraform(struct?: DataZabbixHostInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZabbixHostInventoryToHclTerraform(struct?: DataZabbixHostInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZabbixHostInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZabbixHostInventory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZabbixHostInventory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // asset_tag - computed: true, optional: false, required: false
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }

  // chassis - computed: true, optional: false, required: false
  public get chassis() {
    return this.getStringAttribute('chassis');
  }

  // contact - computed: true, optional: false, required: false
  public get contact() {
    return this.getStringAttribute('contact');
  }

  // contract_number - computed: true, optional: false, required: false
  public get contractNumber() {
    return this.getStringAttribute('contract_number');
  }

  // date_hw_decomm - computed: true, optional: false, required: false
  public get dateHwDecomm() {
    return this.getStringAttribute('date_hw_decomm');
  }

  // date_hw_expiry - computed: true, optional: false, required: false
  public get dateHwExpiry() {
    return this.getStringAttribute('date_hw_expiry');
  }

  // date_hw_install - computed: true, optional: false, required: false
  public get dateHwInstall() {
    return this.getStringAttribute('date_hw_install');
  }

  // date_hw_purchase - computed: true, optional: false, required: false
  public get dateHwPurchase() {
    return this.getStringAttribute('date_hw_purchase');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // hardware - computed: true, optional: false, required: false
  public get hardware() {
    return this.getStringAttribute('hardware');
  }

  // hardware_full - computed: true, optional: false, required: false
  public get hardwareFull() {
    return this.getStringAttribute('hardware_full');
  }

  // host_netmask - computed: true, optional: false, required: false
  public get hostNetmask() {
    return this.getStringAttribute('host_netmask');
  }

  // host_networks - computed: true, optional: false, required: false
  public get hostNetworks() {
    return this.getStringAttribute('host_networks');
  }

  // host_router - computed: true, optional: false, required: false
  public get hostRouter() {
    return this.getStringAttribute('host_router');
  }

  // hw_arch - computed: true, optional: false, required: false
  public get hwArch() {
    return this.getStringAttribute('hw_arch');
  }

  // installer_name - computed: true, optional: false, required: false
  public get installerName() {
    return this.getStringAttribute('installer_name');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_lat - computed: true, optional: false, required: false
  public get locationLat() {
    return this.getStringAttribute('location_lat');
  }

  // location_lon - computed: true, optional: false, required: false
  public get locationLon() {
    return this.getStringAttribute('location_lon');
  }

  // macaddress_a - computed: true, optional: false, required: false
  public get macaddressA() {
    return this.getStringAttribute('macaddress_a');
  }

  // macaddress_b - computed: true, optional: false, required: false
  public get macaddressB() {
    return this.getStringAttribute('macaddress_b');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // oob_ip - computed: true, optional: false, required: false
  public get oobIp() {
    return this.getStringAttribute('oob_ip');
  }

  // oob_netmask - computed: true, optional: false, required: false
  public get oobNetmask() {
    return this.getStringAttribute('oob_netmask');
  }

  // oob_router - computed: true, optional: false, required: false
  public get oobRouter() {
    return this.getStringAttribute('oob_router');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // os_full - computed: true, optional: false, required: false
  public get osFull() {
    return this.getStringAttribute('os_full');
  }

  // os_short - computed: true, optional: false, required: false
  public get osShort() {
    return this.getStringAttribute('os_short');
  }

  // poc_1_cell - computed: true, optional: false, required: false
  public get poc1Cell() {
    return this.getStringAttribute('poc_1_cell');
  }

  // poc_1_email - computed: true, optional: false, required: false
  public get poc1Email() {
    return this.getStringAttribute('poc_1_email');
  }

  // poc_1_name - computed: true, optional: false, required: false
  public get poc1Name() {
    return this.getStringAttribute('poc_1_name');
  }

  // poc_1_notes - computed: true, optional: false, required: false
  public get poc1Notes() {
    return this.getStringAttribute('poc_1_notes');
  }

  // poc_1_phone_a - computed: true, optional: false, required: false
  public get poc1PhoneA() {
    return this.getStringAttribute('poc_1_phone_a');
  }

  // poc_1_phone_b - computed: true, optional: false, required: false
  public get poc1PhoneB() {
    return this.getStringAttribute('poc_1_phone_b');
  }

  // poc_1_screen - computed: true, optional: false, required: false
  public get poc1Screen() {
    return this.getStringAttribute('poc_1_screen');
  }

  // poc_2_cell - computed: true, optional: false, required: false
  public get poc2Cell() {
    return this.getStringAttribute('poc_2_cell');
  }

  // poc_2_email - computed: true, optional: false, required: false
  public get poc2Email() {
    return this.getStringAttribute('poc_2_email');
  }

  // poc_2_name - computed: true, optional: false, required: false
  public get poc2Name() {
    return this.getStringAttribute('poc_2_name');
  }

  // poc_2_notes - computed: true, optional: false, required: false
  public get poc2Notes() {
    return this.getStringAttribute('poc_2_notes');
  }

  // poc_2_phone_a - computed: true, optional: false, required: false
  public get poc2PhoneA() {
    return this.getStringAttribute('poc_2_phone_a');
  }

  // poc_2_phone_b - computed: true, optional: false, required: false
  public get poc2PhoneB() {
    return this.getStringAttribute('poc_2_phone_b');
  }

  // poc_2_screen - computed: true, optional: false, required: false
  public get poc2Screen() {
    return this.getStringAttribute('poc_2_screen');
  }

  // serialno_a - computed: true, optional: false, required: false
  public get serialnoA() {
    return this.getStringAttribute('serialno_a');
  }

  // serialno_b - computed: true, optional: false, required: false
  public get serialnoB() {
    return this.getStringAttribute('serialno_b');
  }

  // site_address_a - computed: true, optional: false, required: false
  public get siteAddressA() {
    return this.getStringAttribute('site_address_a');
  }

  // site_address_b - computed: true, optional: false, required: false
  public get siteAddressB() {
    return this.getStringAttribute('site_address_b');
  }

  // site_address_c - computed: true, optional: false, required: false
  public get siteAddressC() {
    return this.getStringAttribute('site_address_c');
  }

  // site_city - computed: true, optional: false, required: false
  public get siteCity() {
    return this.getStringAttribute('site_city');
  }

  // site_country - computed: true, optional: false, required: false
  public get siteCountry() {
    return this.getStringAttribute('site_country');
  }

  // site_notes - computed: true, optional: false, required: false
  public get siteNotes() {
    return this.getStringAttribute('site_notes');
  }

  // site_rack - computed: true, optional: false, required: false
  public get siteRack() {
    return this.getStringAttribute('site_rack');
  }

  // site_state - computed: true, optional: false, required: false
  public get siteState() {
    return this.getStringAttribute('site_state');
  }

  // site_zip - computed: true, optional: false, required: false
  public get siteZip() {
    return this.getStringAttribute('site_zip');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getStringAttribute('software');
  }

  // software_app_a - computed: true, optional: false, required: false
  public get softwareAppA() {
    return this.getStringAttribute('software_app_a');
  }

  // software_app_b - computed: true, optional: false, required: false
  public get softwareAppB() {
    return this.getStringAttribute('software_app_b');
  }

  // software_app_c - computed: true, optional: false, required: false
  public get softwareAppC() {
    return this.getStringAttribute('software_app_c');
  }

  // software_app_d - computed: true, optional: false, required: false
  public get softwareAppD() {
    return this.getStringAttribute('software_app_d');
  }

  // software_app_e - computed: true, optional: false, required: false
  public get softwareAppE() {
    return this.getStringAttribute('software_app_e');
  }

  // software_full - computed: true, optional: false, required: false
  public get softwareFull() {
    return this.getStringAttribute('software_full');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_full - computed: true, optional: false, required: false
  public get typeFull() {
    return this.getStringAttribute('type_full');
  }

  // url_a - computed: true, optional: false, required: false
  public get urlA() {
    return this.getStringAttribute('url_a');
  }

  // url_b - computed: true, optional: false, required: false
  public get urlB() {
    return this.getStringAttribute('url_b');
  }

  // url_c - computed: true, optional: false, required: false
  public get urlC() {
    return this.getStringAttribute('url_c');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataZabbixHostInventoryList extends cdktf.ComplexList {

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
  public get(index: number): DataZabbixHostInventoryOutputReference {
    return new DataZabbixHostInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZabbixHostMacro {
  /**
  * Macro Name (key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#name DataZabbixHost#name}
  */
  readonly name: string;
  /**
  * Macro Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#value DataZabbixHost#value}
  */
  readonly value: string;
}

export function dataZabbixHostMacroToTerraform(struct?: DataZabbixHostMacro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZabbixHostMacroToHclTerraform(struct?: DataZabbixHostMacro | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZabbixHostMacroOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZabbixHostMacro | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZabbixHostMacro | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZabbixHostMacroList extends cdktf.ComplexList {
  public internalValue? : DataZabbixHostMacro[] | cdktf.IResolvable

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
  public get(index: number): DataZabbixHostMacroOutputReference {
    return new DataZabbixHostMacroOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZabbixHostTag {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#key DataZabbixHost#key}
  */
  readonly key: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#value DataZabbixHost#value}
  */
  readonly value?: string;
}

export function dataZabbixHostTagToTerraform(struct?: DataZabbixHostTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZabbixHostTagToHclTerraform(struct?: DataZabbixHostTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZabbixHostTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZabbixHostTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZabbixHostTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZabbixHostTagList extends cdktf.ComplexList {
  public internalValue? : DataZabbixHostTag[] | cdktf.IResolvable

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
  public get(index: number): DataZabbixHostTagOutputReference {
    return new DataZabbixHostTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host zabbix_host}
*/
export class DataZabbixHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZabbixHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZabbixHost to import
  * @param importFromId The id of the existing DataZabbixHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZabbixHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/data-sources/host zabbix_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZabbixHostConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZabbixHostConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zabbix_host',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._host = config.host;
    this._hostid = config.hostid;
    this._id = config.id;
    this._inventoryMode = config.inventoryMode;
    this._name = config.name;
    this._templates = config.templates;
    this._macro.internalValue = config.macro;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hostid - computed: false, optional: true, required: false
  private _hostid?: string; 
  public get hostid() {
    return this.getStringAttribute('hostid');
  }
  public set hostid(value: string) {
    this._hostid = value;
  }
  public resetHostid() {
    this._hostid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostidInput() {
    return this._hostid;
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

  // interface - computed: true, optional: false, required: false
  private _interface = new DataZabbixHostInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // inventory - computed: true, optional: false, required: false
  private _inventory = new DataZabbixHostInventoryList(this, "inventory", false);
  public get inventory() {
    return this._inventory;
  }

  // inventory_mode - computed: false, optional: true, required: false
  private _inventoryMode?: string; 
  public get inventoryMode() {
    return this.getStringAttribute('inventory_mode');
  }
  public set inventoryMode(value: string) {
    this._inventoryMode = value;
  }
  public resetInventoryMode() {
    this._inventoryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryModeInput() {
    return this._inventoryMode;
  }

  // name - computed: true, optional: true, required: false
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

  // proxyid - computed: true, optional: false, required: false
  public get proxyid() {
    return this.getStringAttribute('proxyid');
  }

  // templates - computed: true, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return cdktf.Fn.tolist(this.getListAttribute('templates'));
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // macro - computed: false, optional: true, required: false
  private _macro = new DataZabbixHostMacroList(this, "macro", false);
  public get macro() {
    return this._macro;
  }
  public putMacro(value: DataZabbixHostMacro[] | cdktf.IResolvable) {
    this._macro.internalValue = value;
  }
  public resetMacro() {
    this._macro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataZabbixHostTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataZabbixHostTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      host: cdktf.stringToTerraform(this._host),
      hostid: cdktf.stringToTerraform(this._hostid),
      id: cdktf.stringToTerraform(this._id),
      inventory_mode: cdktf.stringToTerraform(this._inventoryMode),
      name: cdktf.stringToTerraform(this._name),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      macro: cdktf.listMapper(dataZabbixHostMacroToTerraform, true)(this._macro.internalValue),
      tag: cdktf.listMapper(dataZabbixHostTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostid: {
        value: cdktf.stringToHclTerraform(this._hostid),
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
      inventory_mode: {
        value: cdktf.stringToHclTerraform(this._inventoryMode),
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
      templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      macro: {
        value: cdktf.listMapperHcl(dataZabbixHostMacroToHclTerraform, true)(this._macro.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZabbixHostMacroList",
      },
      tag: {
        value: cdktf.listMapperHcl(dataZabbixHostTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZabbixHostTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
