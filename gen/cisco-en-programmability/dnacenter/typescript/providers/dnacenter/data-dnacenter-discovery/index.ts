// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * id path parameter. Discovery ID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery#id DataDnacenterDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataDnacenterDiscoveryItemHttpReadCredential {
}

export function dataDnacenterDiscoveryItemHttpReadCredentialToTerraform(struct?: DataDnacenterDiscoveryItemHttpReadCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDiscoveryItemHttpReadCredentialToHclTerraform(struct?: DataDnacenterDiscoveryItemHttpReadCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDiscoveryItemHttpReadCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDiscoveryItemHttpReadCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDiscoveryItemHttpReadCredential | undefined) {
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

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getStringAttribute('secure');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataDnacenterDiscoveryItemHttpReadCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDiscoveryItemHttpReadCredentialOutputReference {
    return new DataDnacenterDiscoveryItemHttpReadCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDiscoveryItemHttpWriteCredential {
}

export function dataDnacenterDiscoveryItemHttpWriteCredentialToTerraform(struct?: DataDnacenterDiscoveryItemHttpWriteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDiscoveryItemHttpWriteCredentialToHclTerraform(struct?: DataDnacenterDiscoveryItemHttpWriteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDiscoveryItemHttpWriteCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDiscoveryItemHttpWriteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDiscoveryItemHttpWriteCredential | undefined) {
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

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getStringAttribute('secure');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataDnacenterDiscoveryItemHttpWriteCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDiscoveryItemHttpWriteCredentialOutputReference {
    return new DataDnacenterDiscoveryItemHttpWriteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDiscoveryItem {
}

export function dataDnacenterDiscoveryItemToTerraform(struct?: DataDnacenterDiscoveryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDiscoveryItemToHclTerraform(struct?: DataDnacenterDiscoveryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDiscoveryItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDiscoveryItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDiscoveryItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_info - computed: true, optional: false, required: false
  public get attributeInfo() {
    return this.getStringAttribute('attribute_info');
  }

  // cdp_level - computed: true, optional: false, required: false
  public get cdpLevel() {
    return this.getNumberAttribute('cdp_level');
  }

  // device_ids - computed: true, optional: false, required: false
  public get deviceIds() {
    return this.getStringAttribute('device_ids');
  }

  // discovery_condition - computed: true, optional: false, required: false
  public get discoveryCondition() {
    return this.getStringAttribute('discovery_condition');
  }

  // discovery_status - computed: true, optional: false, required: false
  public get discoveryStatus() {
    return this.getStringAttribute('discovery_status');
  }

  // discovery_type - computed: true, optional: false, required: false
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }

  // enable_password_list - computed: true, optional: false, required: false
  public get enablePasswordList() {
    return this.getStringAttribute('enable_password_list');
  }

  // global_credential_id_list - computed: true, optional: false, required: false
  public get globalCredentialIdList() {
    return this.getListAttribute('global_credential_id_list');
  }

  // http_read_credential - computed: true, optional: false, required: false
  private _httpReadCredential = new DataDnacenterDiscoveryItemHttpReadCredentialList(this, "http_read_credential", false);
  public get httpReadCredential() {
    return this._httpReadCredential;
  }

  // http_write_credential - computed: true, optional: false, required: false
  private _httpWriteCredential = new DataDnacenterDiscoveryItemHttpWriteCredentialList(this, "http_write_credential", false);
  public get httpWriteCredential() {
    return this._httpWriteCredential;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address_list - computed: true, optional: false, required: false
  public get ipAddressList() {
    return this.getStringAttribute('ip_address_list');
  }

  // ip_filter_list - computed: true, optional: false, required: false
  public get ipFilterList() {
    return this.getStringAttribute('ip_filter_list');
  }

  // is_auto_cdp - computed: true, optional: false, required: false
  public get isAutoCdp() {
    return this.getStringAttribute('is_auto_cdp');
  }

  // lldp_level - computed: true, optional: false, required: false
  public get lldpLevel() {
    return this.getNumberAttribute('lldp_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // netconf_port - computed: true, optional: false, required: false
  public get netconfPort() {
    return this.getStringAttribute('netconf_port');
  }

  // num_devices - computed: true, optional: false, required: false
  public get numDevices() {
    return this.getNumberAttribute('num_devices');
  }

  // parent_discovery_id - computed: true, optional: false, required: false
  public get parentDiscoveryId() {
    return this.getStringAttribute('parent_discovery_id');
  }

  // password_list - computed: true, optional: false, required: false
  public get passwordList() {
    return this.getStringAttribute('password_list');
  }

  // preferred_mgmt_ipmethod - computed: true, optional: false, required: false
  public get preferredMgmtIpmethod() {
    return this.getStringAttribute('preferred_mgmt_ipmethod');
  }

  // protocol_order - computed: true, optional: false, required: false
  public get protocolOrder() {
    return this.getStringAttribute('protocol_order');
  }

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // snmp_auth_passphrase - computed: true, optional: false, required: false
  public get snmpAuthPassphrase() {
    return this.getStringAttribute('snmp_auth_passphrase');
  }

  // snmp_auth_protocol - computed: true, optional: false, required: false
  public get snmpAuthProtocol() {
    return this.getStringAttribute('snmp_auth_protocol');
  }

  // snmp_mode - computed: true, optional: false, required: false
  public get snmpMode() {
    return this.getStringAttribute('snmp_mode');
  }

  // snmp_priv_passphrase - computed: true, optional: false, required: false
  public get snmpPrivPassphrase() {
    return this.getStringAttribute('snmp_priv_passphrase');
  }

  // snmp_priv_protocol - computed: true, optional: false, required: false
  public get snmpPrivProtocol() {
    return this.getStringAttribute('snmp_priv_protocol');
  }

  // snmp_ro_community - computed: true, optional: false, required: false
  public get snmpRoCommunity() {
    return this.getStringAttribute('snmp_ro_community');
  }

  // snmp_ro_community_desc - computed: true, optional: false, required: false
  public get snmpRoCommunityDesc() {
    return this.getStringAttribute('snmp_ro_community_desc');
  }

  // snmp_rw_community - computed: true, optional: false, required: false
  public get snmpRwCommunity() {
    return this.getStringAttribute('snmp_rw_community');
  }

  // snmp_rw_community_desc - computed: true, optional: false, required: false
  public get snmpRwCommunityDesc() {
    return this.getStringAttribute('snmp_rw_community_desc');
  }

  // snmp_user_name - computed: true, optional: false, required: false
  public get snmpUserName() {
    return this.getStringAttribute('snmp_user_name');
  }

  // time_out - computed: true, optional: false, required: false
  public get timeOut() {
    return this.getNumberAttribute('time_out');
  }

  // update_mgmt_ip - computed: true, optional: false, required: false
  public get updateMgmtIp() {
    return this.getStringAttribute('update_mgmt_ip');
  }

  // user_name_list - computed: true, optional: false, required: false
  public get userNameList() {
    return this.getStringAttribute('user_name_list');
  }
}

export class DataDnacenterDiscoveryItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDiscoveryItemOutputReference {
    return new DataDnacenterDiscoveryItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery dnacenter_discovery}
*/
export class DataDnacenterDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDiscovery to import
  * @param importFromId The id of the existing DataDnacenterDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery dnacenter_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_discovery',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterDiscoveryItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
