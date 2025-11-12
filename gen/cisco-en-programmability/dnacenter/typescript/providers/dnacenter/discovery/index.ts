// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#id Discovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#parameters Discovery#parameters}
  */
  readonly parameters?: DiscoveryParameters[] | cdktf.IResolvable;
}
export interface DiscoveryItemHttpReadCredential {
}

export function discoveryItemHttpReadCredentialToTerraform(struct?: DiscoveryItemHttpReadCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function discoveryItemHttpReadCredentialToHclTerraform(struct?: DiscoveryItemHttpReadCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryItemHttpReadCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryItemHttpReadCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryItemHttpReadCredential | undefined) {
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

export class DiscoveryItemHttpReadCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DiscoveryItemHttpReadCredentialOutputReference {
    return new DiscoveryItemHttpReadCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryItemHttpWriteCredential {
}

export function discoveryItemHttpWriteCredentialToTerraform(struct?: DiscoveryItemHttpWriteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function discoveryItemHttpWriteCredentialToHclTerraform(struct?: DiscoveryItemHttpWriteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryItemHttpWriteCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryItemHttpWriteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryItemHttpWriteCredential | undefined) {
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

export class DiscoveryItemHttpWriteCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DiscoveryItemHttpWriteCredentialOutputReference {
    return new DiscoveryItemHttpWriteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryItem {
}

export function discoveryItemToTerraform(struct?: DiscoveryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function discoveryItemToHclTerraform(struct?: DiscoveryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryItem | undefined) {
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
  private _httpReadCredential = new DiscoveryItemHttpReadCredentialList(this, "http_read_credential", false);
  public get httpReadCredential() {
    return this._httpReadCredential;
  }

  // http_write_credential - computed: true, optional: false, required: false
  private _httpWriteCredential = new DiscoveryItemHttpWriteCredentialList(this, "http_write_credential", false);
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

export class DiscoveryItemList extends cdktf.ComplexList {

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
  public get(index: number): DiscoveryItemOutputReference {
    return new DiscoveryItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryParametersHttpReadCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#comments Discovery#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#credential_type Discovery#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#description Discovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#id Discovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#instance_tenant_id Discovery#instance_tenant_id}
  */
  readonly instanceTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#instance_uuid Discovery#instance_uuid}
  */
  readonly instanceUuid?: string;
  /**
  * HTTP(S) password
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#password Discovery#password}
  */
  readonly password?: string;
  /**
  * HTTP(S) port
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#port Discovery#port}
  */
  readonly port?: number;
  /**
  * Flag for HTTPS
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#secure Discovery#secure}
  */
  readonly secure?: string;
  /**
  * HTTP(S) username
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#username Discovery#username}
  */
  readonly username?: string;
}

export function discoveryParametersHttpReadCredentialToTerraform(struct?: DiscoveryParametersHttpReadCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    instance_tenant_id: cdktf.stringToTerraform(struct!.instanceTenantId),
    instance_uuid: cdktf.stringToTerraform(struct!.instanceUuid),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secure: cdktf.stringToTerraform(struct!.secure),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function discoveryParametersHttpReadCredentialToHclTerraform(struct?: DiscoveryParametersHttpReadCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_uuid: {
      value: cdktf.stringToHclTerraform(struct!.instanceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure: {
      value: cdktf.stringToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryParametersHttpReadCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryParametersHttpReadCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instanceTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTenantId = this._instanceTenantId;
    }
    if (this._instanceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUuid = this._instanceUuid;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryParametersHttpReadCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._credentialType = undefined;
      this._description = undefined;
      this._id = undefined;
      this._instanceTenantId = undefined;
      this._instanceUuid = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secure = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._credentialType = value.credentialType;
      this._description = value.description;
      this._id = value.id;
      this._instanceTenantId = value.instanceTenantId;
      this._instanceUuid = value.instanceUuid;
      this._password = value.password;
      this._port = value.port;
      this._secure = value.secure;
      this._username = value.username;
    }
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_tenant_id - computed: true, optional: true, required: false
  private _instanceTenantId?: string; 
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }
  public set instanceTenantId(value: string) {
    this._instanceTenantId = value;
  }
  public resetInstanceTenantId() {
    this._instanceTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenantIdInput() {
    return this._instanceTenantId;
  }

  // instance_uuid - computed: true, optional: true, required: false
  private _instanceUuid?: string; 
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }
  public set instanceUuid(value: string) {
    this._instanceUuid = value;
  }
  public resetInstanceUuid() {
    this._instanceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUuidInput() {
    return this._instanceUuid;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DiscoveryParametersHttpReadCredentialList extends cdktf.ComplexList {
  public internalValue? : DiscoveryParametersHttpReadCredential[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryParametersHttpReadCredentialOutputReference {
    return new DiscoveryParametersHttpReadCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryParametersHttpWriteCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#comments Discovery#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#credential_type Discovery#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#description Discovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#id Discovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#instance_tenant_id Discovery#instance_tenant_id}
  */
  readonly instanceTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#instance_uuid Discovery#instance_uuid}
  */
  readonly instanceUuid?: string;
  /**
  * HTTP(S) password
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#password Discovery#password}
  */
  readonly password?: string;
  /**
  * HTTP(S) port
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#port Discovery#port}
  */
  readonly port?: number;
  /**
  * Flag for HTTPS
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#secure Discovery#secure}
  */
  readonly secure?: string;
  /**
  * HTTP(S) username
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#username Discovery#username}
  */
  readonly username?: string;
}

export function discoveryParametersHttpWriteCredentialToTerraform(struct?: DiscoveryParametersHttpWriteCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    instance_tenant_id: cdktf.stringToTerraform(struct!.instanceTenantId),
    instance_uuid: cdktf.stringToTerraform(struct!.instanceUuid),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secure: cdktf.stringToTerraform(struct!.secure),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function discoveryParametersHttpWriteCredentialToHclTerraform(struct?: DiscoveryParametersHttpWriteCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_uuid: {
      value: cdktf.stringToHclTerraform(struct!.instanceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure: {
      value: cdktf.stringToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryParametersHttpWriteCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryParametersHttpWriteCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instanceTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTenantId = this._instanceTenantId;
    }
    if (this._instanceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUuid = this._instanceUuid;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryParametersHttpWriteCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._credentialType = undefined;
      this._description = undefined;
      this._id = undefined;
      this._instanceTenantId = undefined;
      this._instanceUuid = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secure = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._credentialType = value.credentialType;
      this._description = value.description;
      this._id = value.id;
      this._instanceTenantId = value.instanceTenantId;
      this._instanceUuid = value.instanceUuid;
      this._password = value.password;
      this._port = value.port;
      this._secure = value.secure;
      this._username = value.username;
    }
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_tenant_id - computed: true, optional: true, required: false
  private _instanceTenantId?: string; 
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }
  public set instanceTenantId(value: string) {
    this._instanceTenantId = value;
  }
  public resetInstanceTenantId() {
    this._instanceTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenantIdInput() {
    return this._instanceTenantId;
  }

  // instance_uuid - computed: true, optional: true, required: false
  private _instanceUuid?: string; 
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }
  public set instanceUuid(value: string) {
    this._instanceUuid = value;
  }
  public resetInstanceUuid() {
    this._instanceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUuidInput() {
    return this._instanceUuid;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DiscoveryParametersHttpWriteCredentialList extends cdktf.ComplexList {
  public internalValue? : DiscoveryParametersHttpWriteCredential[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryParametersHttpWriteCredentialOutputReference {
    return new DiscoveryParametersHttpWriteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#attribute_info Discovery#attribute_info}
  */
  readonly attributeInfo?: string;
  /**
  * CDP level to which neighbor devices to be discovered
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#cdp_level Discovery#cdp_level}
  */
  readonly cdpLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#device_ids Discovery#device_ids}
  */
  readonly deviceIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#discovery_condition Discovery#discovery_condition}
  */
  readonly discoveryCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#discovery_status Discovery#discovery_status}
  */
  readonly discoveryStatus?: string;
  /**
  * Type of Discovery. 'SINGLE', 'RANGE', 'MULTI RANGE', 'CDP', 'LLDP', 'CIDR'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#discovery_type Discovery#discovery_type}
  */
  readonly discoveryType?: string;
  /**
  * Enable Password of the devices to be discovered
  * 
  * ERROR: Different types for param enablePasswordList schema.TypeList schema.TypeString
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#enable_password_list Discovery#enable_password_list}
  */
  readonly enablePasswordList?: string[];
  /**
  * Global Credential Ids to be used for discovery
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#global_credential_id_list Discovery#global_credential_id_list}
  */
  readonly globalCredentialIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#id Discovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Address of devices to be discovered. Ex: '172.30.0.1' for SINGLE, CDP and LLDP; '72.30.0.1-172.30.0.4' for RANGE; '72.30.0.1-172.30.0.4,172.31.0.1-172.31.0.4' for MULTI RANGE; '172.30.0.1/20' for CIDR
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#ip_address_list Discovery#ip_address_list}
  */
  readonly ipAddressList?: string;
  /**
  * IP Addresses of the devices to be filtered out during discovery
  * 
  * ERROR: Different types for param ipFilterList schema.TypeList schema.TypeString
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#ip_filter_list Discovery#ip_filter_list}
  */
  readonly ipFilterList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#is_auto_cdp Discovery#is_auto_cdp}
  */
  readonly isAutoCdp?: string;
  /**
  * LLDP level to which neighbor devices to be discovered
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#lldp_level Discovery#lldp_level}
  */
  readonly lldpLevel?: number;
  /**
  * Name of the discovery
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Netconf Port. It will need valid SSH credentials to work
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#netconf_port Discovery#netconf_port}
  */
  readonly netconfPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#num_devices Discovery#num_devices}
  */
  readonly numDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#parent_discovery_id Discovery#parent_discovery_id}
  */
  readonly parentDiscoveryId?: string;
  /**
  * Password of the devices to be discovered
  * 
  * ERROR: Different types for param passwordList schema.TypeList schema.TypeString
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#password_list Discovery#password_list}
  */
  readonly passwordList?: string[];
  /**
  * Preferred Management IP Method.'None' or 'UseLoopBack'. Default is 'None'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#preferred_mgmt_ipmethod Discovery#preferred_mgmt_ipmethod}
  */
  readonly preferredMgmtIpmethod?: string;
  /**
  * Order of protocol (ssh/telnet) in which device connection will be tried. Ex: 'telnet': only telnet; 'ssh,telnet': ssh with higher order than telnet
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#protocol_order Discovery#protocol_order}
  */
  readonly protocolOrder?: string;
  /**
  * Number of times to try establishing connection to device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#retry Discovery#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#retry_count Discovery#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Auth Pass phrase for SNMP
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_auth_passphrase Discovery#snmp_auth_passphrase}
  */
  readonly snmpAuthPassphrase?: string;
  /**
  * SNMP auth protocol. SHA' or 'MD5'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_auth_protocol Discovery#snmp_auth_protocol}
  */
  readonly snmpAuthProtocol?: string;
  /**
  * Mode of SNMP. 'AUTHPRIV' or 'AUTHNOPRIV' or 'NOAUTHNOPRIV'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_mode Discovery#snmp_mode}
  */
  readonly snmpMode?: string;
  /**
  * Pass phrase for SNMP privacy
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_priv_passphrase Discovery#snmp_priv_passphrase}
  */
  readonly snmpPrivPassphrase?: string;
  /**
  * SNMP privacy protocol. 'DES' or 'AES128'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_priv_protocol Discovery#snmp_priv_protocol}
  */
  readonly snmpPrivProtocol?: string;
  /**
  * Snmp RO community of the devices to be discovered
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_ro_community Discovery#snmp_ro_community}
  */
  readonly snmpRoCommunity?: string;
  /**
  * Description for Snmp RO community
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_ro_community_desc Discovery#snmp_ro_community_desc}
  */
  readonly snmpRoCommunityDesc?: string;
  /**
  * Snmp RW community of the devices to be discovered
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_rw_community Discovery#snmp_rw_community}
  */
  readonly snmpRwCommunity?: string;
  /**
  * Description for Snmp RW community
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_rw_community_desc Discovery#snmp_rw_community_desc}
  */
  readonly snmpRwCommunityDesc?: string;
  /**
  * SNMP username of the device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_user_name Discovery#snmp_user_name}
  */
  readonly snmpUserName?: string;
  /**
  * Version of SNMP. v2 or v3
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#snmp_version Discovery#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#time_out Discovery#time_out}
  */
  readonly timeOut?: number;
  /**
  * Time to wait for device response in seconds
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#timeout Discovery#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#update_mgmt_ip Discovery#update_mgmt_ip}
  */
  readonly updateMgmtIp?: string;
  /**
  * Username of the devices to be discovered
  * 
  * ERROR: Different types for param userNameList schema.TypeList schema.TypeString
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#user_name_list Discovery#user_name_list}
  */
  readonly userNameList?: string[];
  /**
  * http_read_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#http_read_credential Discovery#http_read_credential}
  */
  readonly httpReadCredential?: DiscoveryParametersHttpReadCredential[] | cdktf.IResolvable;
  /**
  * http_write_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#http_write_credential Discovery#http_write_credential}
  */
  readonly httpWriteCredential?: DiscoveryParametersHttpWriteCredential[] | cdktf.IResolvable;
}

export function discoveryParametersToTerraform(struct?: DiscoveryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_info: cdktf.stringToTerraform(struct!.attributeInfo),
    cdp_level: cdktf.numberToTerraform(struct!.cdpLevel),
    device_ids: cdktf.stringToTerraform(struct!.deviceIds),
    discovery_condition: cdktf.stringToTerraform(struct!.discoveryCondition),
    discovery_status: cdktf.stringToTerraform(struct!.discoveryStatus),
    discovery_type: cdktf.stringToTerraform(struct!.discoveryType),
    enable_password_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enablePasswordList),
    global_credential_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalCredentialIdList),
    id: cdktf.stringToTerraform(struct!.id),
    ip_address_list: cdktf.stringToTerraform(struct!.ipAddressList),
    ip_filter_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterList),
    is_auto_cdp: cdktf.stringToTerraform(struct!.isAutoCdp),
    lldp_level: cdktf.numberToTerraform(struct!.lldpLevel),
    name: cdktf.stringToTerraform(struct!.name),
    netconf_port: cdktf.stringToTerraform(struct!.netconfPort),
    num_devices: cdktf.numberToTerraform(struct!.numDevices),
    parent_discovery_id: cdktf.stringToTerraform(struct!.parentDiscoveryId),
    password_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.passwordList),
    preferred_mgmt_ipmethod: cdktf.stringToTerraform(struct!.preferredMgmtIpmethod),
    protocol_order: cdktf.stringToTerraform(struct!.protocolOrder),
    retry: cdktf.numberToTerraform(struct!.retry),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    snmp_auth_passphrase: cdktf.stringToTerraform(struct!.snmpAuthPassphrase),
    snmp_auth_protocol: cdktf.stringToTerraform(struct!.snmpAuthProtocol),
    snmp_mode: cdktf.stringToTerraform(struct!.snmpMode),
    snmp_priv_passphrase: cdktf.stringToTerraform(struct!.snmpPrivPassphrase),
    snmp_priv_protocol: cdktf.stringToTerraform(struct!.snmpPrivProtocol),
    snmp_ro_community: cdktf.stringToTerraform(struct!.snmpRoCommunity),
    snmp_ro_community_desc: cdktf.stringToTerraform(struct!.snmpRoCommunityDesc),
    snmp_rw_community: cdktf.stringToTerraform(struct!.snmpRwCommunity),
    snmp_rw_community_desc: cdktf.stringToTerraform(struct!.snmpRwCommunityDesc),
    snmp_user_name: cdktf.stringToTerraform(struct!.snmpUserName),
    snmp_version: cdktf.stringToTerraform(struct!.snmpVersion),
    time_out: cdktf.numberToTerraform(struct!.timeOut),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    update_mgmt_ip: cdktf.stringToTerraform(struct!.updateMgmtIp),
    user_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userNameList),
    http_read_credential: cdktf.listMapper(discoveryParametersHttpReadCredentialToTerraform, true)(struct!.httpReadCredential),
    http_write_credential: cdktf.listMapper(discoveryParametersHttpWriteCredentialToTerraform, true)(struct!.httpWriteCredential),
  }
}


export function discoveryParametersToHclTerraform(struct?: DiscoveryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_info: {
      value: cdktf.stringToHclTerraform(struct!.attributeInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdp_level: {
      value: cdktf.numberToHclTerraform(struct!.cdpLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_ids: {
      value: cdktf.stringToHclTerraform(struct!.deviceIds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_condition: {
      value: cdktf.stringToHclTerraform(struct!.discoveryCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_status: {
      value: cdktf.stringToHclTerraform(struct!.discoveryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_type: {
      value: cdktf.stringToHclTerraform(struct!.discoveryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_password_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enablePasswordList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    global_credential_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globalCredentialIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_list: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filter_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilterList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_auto_cdp: {
      value: cdktf.stringToHclTerraform(struct!.isAutoCdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_level: {
      value: cdktf.numberToHclTerraform(struct!.lldpLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netconf_port: {
      value: cdktf.stringToHclTerraform(struct!.netconfPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_devices: {
      value: cdktf.numberToHclTerraform(struct!.numDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent_discovery_id: {
      value: cdktf.stringToHclTerraform(struct!.parentDiscoveryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.passwordList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_mgmt_ipmethod: {
      value: cdktf.stringToHclTerraform(struct!.preferredMgmtIpmethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_order: {
      value: cdktf.stringToHclTerraform(struct!.protocolOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp_auth_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.snmpAuthPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.snmpAuthProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_mode: {
      value: cdktf.stringToHclTerraform(struct!.snmpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_priv_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.snmpPrivPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_priv_protocol: {
      value: cdktf.stringToHclTerraform(struct!.snmpPrivProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_ro_community: {
      value: cdktf.stringToHclTerraform(struct!.snmpRoCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_ro_community_desc: {
      value: cdktf.stringToHclTerraform(struct!.snmpRoCommunityDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_rw_community: {
      value: cdktf.stringToHclTerraform(struct!.snmpRwCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_rw_community_desc: {
      value: cdktf.stringToHclTerraform(struct!.snmpRwCommunityDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_user_name: {
      value: cdktf.stringToHclTerraform(struct!.snmpUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_version: {
      value: cdktf.stringToHclTerraform(struct!.snmpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_out: {
      value: cdktf.numberToHclTerraform(struct!.timeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_mgmt_ip: {
      value: cdktf.stringToHclTerraform(struct!.updateMgmtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userNameList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_read_credential: {
      value: cdktf.listMapperHcl(discoveryParametersHttpReadCredentialToHclTerraform, true)(struct!.httpReadCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryParametersHttpReadCredentialList",
    },
    http_write_credential: {
      value: cdktf.listMapperHcl(discoveryParametersHttpWriteCredentialToHclTerraform, true)(struct!.httpWriteCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryParametersHttpWriteCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeInfo = this._attributeInfo;
    }
    if (this._cdpLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdpLevel = this._cdpLevel;
    }
    if (this._deviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIds = this._deviceIds;
    }
    if (this._discoveryCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryCondition = this._discoveryCondition;
    }
    if (this._discoveryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryStatus = this._discoveryStatus;
    }
    if (this._discoveryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryType = this._discoveryType;
    }
    if (this._enablePasswordList !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePasswordList = this._enablePasswordList;
    }
    if (this._globalCredentialIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalCredentialIdList = this._globalCredentialIdList;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddressList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressList = this._ipAddressList;
    }
    if (this._ipFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterList = this._ipFilterList;
    }
    if (this._isAutoCdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoCdp = this._isAutoCdp;
    }
    if (this._lldpLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpLevel = this._lldpLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._netconfPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.netconfPort = this._netconfPort;
    }
    if (this._numDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDevices = this._numDevices;
    }
    if (this._parentDiscoveryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentDiscoveryId = this._parentDiscoveryId;
    }
    if (this._passwordList !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordList = this._passwordList;
    }
    if (this._preferredMgmtIpmethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredMgmtIpmethod = this._preferredMgmtIpmethod;
    }
    if (this._protocolOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolOrder = this._protocolOrder;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._snmpAuthPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpAuthPassphrase = this._snmpAuthPassphrase;
    }
    if (this._snmpAuthProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpAuthProtocol = this._snmpAuthProtocol;
    }
    if (this._snmpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpMode = this._snmpMode;
    }
    if (this._snmpPrivPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpPrivPassphrase = this._snmpPrivPassphrase;
    }
    if (this._snmpPrivProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpPrivProtocol = this._snmpPrivProtocol;
    }
    if (this._snmpRoCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpRoCommunity = this._snmpRoCommunity;
    }
    if (this._snmpRoCommunityDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpRoCommunityDesc = this._snmpRoCommunityDesc;
    }
    if (this._snmpRwCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpRwCommunity = this._snmpRwCommunity;
    }
    if (this._snmpRwCommunityDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpRwCommunityDesc = this._snmpRwCommunityDesc;
    }
    if (this._snmpUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpUserName = this._snmpUserName;
    }
    if (this._snmpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpVersion = this._snmpVersion;
    }
    if (this._timeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOut = this._timeOut;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._updateMgmtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMgmtIp = this._updateMgmtIp;
    }
    if (this._userNameList !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameList = this._userNameList;
    }
    if (this._httpReadCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReadCredential = this._httpReadCredential?.internalValue;
    }
    if (this._httpWriteCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpWriteCredential = this._httpWriteCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeInfo = undefined;
      this._cdpLevel = undefined;
      this._deviceIds = undefined;
      this._discoveryCondition = undefined;
      this._discoveryStatus = undefined;
      this._discoveryType = undefined;
      this._enablePasswordList = undefined;
      this._globalCredentialIdList = undefined;
      this._id = undefined;
      this._ipAddressList = undefined;
      this._ipFilterList = undefined;
      this._isAutoCdp = undefined;
      this._lldpLevel = undefined;
      this._name = undefined;
      this._netconfPort = undefined;
      this._numDevices = undefined;
      this._parentDiscoveryId = undefined;
      this._passwordList = undefined;
      this._preferredMgmtIpmethod = undefined;
      this._protocolOrder = undefined;
      this._retry = undefined;
      this._retryCount = undefined;
      this._snmpAuthPassphrase = undefined;
      this._snmpAuthProtocol = undefined;
      this._snmpMode = undefined;
      this._snmpPrivPassphrase = undefined;
      this._snmpPrivProtocol = undefined;
      this._snmpRoCommunity = undefined;
      this._snmpRoCommunityDesc = undefined;
      this._snmpRwCommunity = undefined;
      this._snmpRwCommunityDesc = undefined;
      this._snmpUserName = undefined;
      this._snmpVersion = undefined;
      this._timeOut = undefined;
      this._timeout = undefined;
      this._updateMgmtIp = undefined;
      this._userNameList = undefined;
      this._httpReadCredential.internalValue = undefined;
      this._httpWriteCredential.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeInfo = value.attributeInfo;
      this._cdpLevel = value.cdpLevel;
      this._deviceIds = value.deviceIds;
      this._discoveryCondition = value.discoveryCondition;
      this._discoveryStatus = value.discoveryStatus;
      this._discoveryType = value.discoveryType;
      this._enablePasswordList = value.enablePasswordList;
      this._globalCredentialIdList = value.globalCredentialIdList;
      this._id = value.id;
      this._ipAddressList = value.ipAddressList;
      this._ipFilterList = value.ipFilterList;
      this._isAutoCdp = value.isAutoCdp;
      this._lldpLevel = value.lldpLevel;
      this._name = value.name;
      this._netconfPort = value.netconfPort;
      this._numDevices = value.numDevices;
      this._parentDiscoveryId = value.parentDiscoveryId;
      this._passwordList = value.passwordList;
      this._preferredMgmtIpmethod = value.preferredMgmtIpmethod;
      this._protocolOrder = value.protocolOrder;
      this._retry = value.retry;
      this._retryCount = value.retryCount;
      this._snmpAuthPassphrase = value.snmpAuthPassphrase;
      this._snmpAuthProtocol = value.snmpAuthProtocol;
      this._snmpMode = value.snmpMode;
      this._snmpPrivPassphrase = value.snmpPrivPassphrase;
      this._snmpPrivProtocol = value.snmpPrivProtocol;
      this._snmpRoCommunity = value.snmpRoCommunity;
      this._snmpRoCommunityDesc = value.snmpRoCommunityDesc;
      this._snmpRwCommunity = value.snmpRwCommunity;
      this._snmpRwCommunityDesc = value.snmpRwCommunityDesc;
      this._snmpUserName = value.snmpUserName;
      this._snmpVersion = value.snmpVersion;
      this._timeOut = value.timeOut;
      this._timeout = value.timeout;
      this._updateMgmtIp = value.updateMgmtIp;
      this._userNameList = value.userNameList;
      this._httpReadCredential.internalValue = value.httpReadCredential;
      this._httpWriteCredential.internalValue = value.httpWriteCredential;
    }
  }

  // attribute_info - computed: true, optional: true, required: false
  private _attributeInfo?: string; 
  public get attributeInfo() {
    return this.getStringAttribute('attribute_info');
  }
  public set attributeInfo(value: string) {
    this._attributeInfo = value;
  }
  public resetAttributeInfo() {
    this._attributeInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInfoInput() {
    return this._attributeInfo;
  }

  // cdp_level - computed: true, optional: true, required: false
  private _cdpLevel?: number; 
  public get cdpLevel() {
    return this.getNumberAttribute('cdp_level');
  }
  public set cdpLevel(value: number) {
    this._cdpLevel = value;
  }
  public resetCdpLevel() {
    this._cdpLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpLevelInput() {
    return this._cdpLevel;
  }

  // device_ids - computed: true, optional: true, required: false
  private _deviceIds?: string; 
  public get deviceIds() {
    return this.getStringAttribute('device_ids');
  }
  public set deviceIds(value: string) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // discovery_condition - computed: true, optional: true, required: false
  private _discoveryCondition?: string; 
  public get discoveryCondition() {
    return this.getStringAttribute('discovery_condition');
  }
  public set discoveryCondition(value: string) {
    this._discoveryCondition = value;
  }
  public resetDiscoveryCondition() {
    this._discoveryCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryConditionInput() {
    return this._discoveryCondition;
  }

  // discovery_status - computed: true, optional: true, required: false
  private _discoveryStatus?: string; 
  public get discoveryStatus() {
    return this.getStringAttribute('discovery_status');
  }
  public set discoveryStatus(value: string) {
    this._discoveryStatus = value;
  }
  public resetDiscoveryStatus() {
    this._discoveryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryStatusInput() {
    return this._discoveryStatus;
  }

  // discovery_type - computed: true, optional: true, required: false
  private _discoveryType?: string; 
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }
  public set discoveryType(value: string) {
    this._discoveryType = value;
  }
  public resetDiscoveryType() {
    this._discoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTypeInput() {
    return this._discoveryType;
  }

  // enable_password_list - computed: true, optional: true, required: false
  private _enablePasswordList?: string[]; 
  public get enablePasswordList() {
    return this.getListAttribute('enable_password_list');
  }
  public set enablePasswordList(value: string[]) {
    this._enablePasswordList = value;
  }
  public resetEnablePasswordList() {
    this._enablePasswordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordListInput() {
    return this._enablePasswordList;
  }

  // global_credential_id_list - computed: true, optional: true, required: false
  private _globalCredentialIdList?: string[]; 
  public get globalCredentialIdList() {
    return this.getListAttribute('global_credential_id_list');
  }
  public set globalCredentialIdList(value: string[]) {
    this._globalCredentialIdList = value;
  }
  public resetGlobalCredentialIdList() {
    this._globalCredentialIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCredentialIdListInput() {
    return this._globalCredentialIdList;
  }

  // id - computed: false, optional: true, required: false
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

  // ip_address_list - computed: true, optional: true, required: false
  private _ipAddressList?: string; 
  public get ipAddressList() {
    return this.getStringAttribute('ip_address_list');
  }
  public set ipAddressList(value: string) {
    this._ipAddressList = value;
  }
  public resetIpAddressList() {
    this._ipAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressListInput() {
    return this._ipAddressList;
  }

  // ip_filter_list - computed: true, optional: true, required: false
  private _ipFilterList?: string[]; 
  public get ipFilterList() {
    return this.getListAttribute('ip_filter_list');
  }
  public set ipFilterList(value: string[]) {
    this._ipFilterList = value;
  }
  public resetIpFilterList() {
    this._ipFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterListInput() {
    return this._ipFilterList;
  }

  // is_auto_cdp - computed: true, optional: true, required: false
  private _isAutoCdp?: string; 
  public get isAutoCdp() {
    return this.getStringAttribute('is_auto_cdp');
  }
  public set isAutoCdp(value: string) {
    this._isAutoCdp = value;
  }
  public resetIsAutoCdp() {
    this._isAutoCdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoCdpInput() {
    return this._isAutoCdp;
  }

  // lldp_level - computed: true, optional: true, required: false
  private _lldpLevel?: number; 
  public get lldpLevel() {
    return this.getNumberAttribute('lldp_level');
  }
  public set lldpLevel(value: number) {
    this._lldpLevel = value;
  }
  public resetLldpLevel() {
    this._lldpLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpLevelInput() {
    return this._lldpLevel;
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

  // netconf_port - computed: true, optional: true, required: false
  private _netconfPort?: string; 
  public get netconfPort() {
    return this.getStringAttribute('netconf_port');
  }
  public set netconfPort(value: string) {
    this._netconfPort = value;
  }
  public resetNetconfPort() {
    this._netconfPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netconfPortInput() {
    return this._netconfPort;
  }

  // num_devices - computed: true, optional: true, required: false
  private _numDevices?: number; 
  public get numDevices() {
    return this.getNumberAttribute('num_devices');
  }
  public set numDevices(value: number) {
    this._numDevices = value;
  }
  public resetNumDevices() {
    this._numDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDevicesInput() {
    return this._numDevices;
  }

  // parent_discovery_id - computed: true, optional: true, required: false
  private _parentDiscoveryId?: string; 
  public get parentDiscoveryId() {
    return this.getStringAttribute('parent_discovery_id');
  }
  public set parentDiscoveryId(value: string) {
    this._parentDiscoveryId = value;
  }
  public resetParentDiscoveryId() {
    this._parentDiscoveryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDiscoveryIdInput() {
    return this._parentDiscoveryId;
  }

  // password_list - computed: true, optional: true, required: false
  private _passwordList?: string[]; 
  public get passwordList() {
    return this.getListAttribute('password_list');
  }
  public set passwordList(value: string[]) {
    this._passwordList = value;
  }
  public resetPasswordList() {
    this._passwordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordListInput() {
    return this._passwordList;
  }

  // preferred_mgmt_ipmethod - computed: true, optional: true, required: false
  private _preferredMgmtIpmethod?: string; 
  public get preferredMgmtIpmethod() {
    return this.getStringAttribute('preferred_mgmt_ipmethod');
  }
  public set preferredMgmtIpmethod(value: string) {
    this._preferredMgmtIpmethod = value;
  }
  public resetPreferredMgmtIpmethod() {
    this._preferredMgmtIpmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMgmtIpmethodInput() {
    return this._preferredMgmtIpmethod;
  }

  // protocol_order - computed: true, optional: true, required: false
  private _protocolOrder?: string; 
  public get protocolOrder() {
    return this.getStringAttribute('protocol_order');
  }
  public set protocolOrder(value: string) {
    this._protocolOrder = value;
  }
  public resetProtocolOrder() {
    this._protocolOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolOrderInput() {
    return this._protocolOrder;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_count - computed: true, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // snmp_auth_passphrase - computed: true, optional: true, required: false
  private _snmpAuthPassphrase?: string; 
  public get snmpAuthPassphrase() {
    return this.getStringAttribute('snmp_auth_passphrase');
  }
  public set snmpAuthPassphrase(value: string) {
    this._snmpAuthPassphrase = value;
  }
  public resetSnmpAuthPassphrase() {
    this._snmpAuthPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAuthPassphraseInput() {
    return this._snmpAuthPassphrase;
  }

  // snmp_auth_protocol - computed: true, optional: true, required: false
  private _snmpAuthProtocol?: string; 
  public get snmpAuthProtocol() {
    return this.getStringAttribute('snmp_auth_protocol');
  }
  public set snmpAuthProtocol(value: string) {
    this._snmpAuthProtocol = value;
  }
  public resetSnmpAuthProtocol() {
    this._snmpAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAuthProtocolInput() {
    return this._snmpAuthProtocol;
  }

  // snmp_mode - computed: true, optional: true, required: false
  private _snmpMode?: string; 
  public get snmpMode() {
    return this.getStringAttribute('snmp_mode');
  }
  public set snmpMode(value: string) {
    this._snmpMode = value;
  }
  public resetSnmpMode() {
    this._snmpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpModeInput() {
    return this._snmpMode;
  }

  // snmp_priv_passphrase - computed: true, optional: true, required: false
  private _snmpPrivPassphrase?: string; 
  public get snmpPrivPassphrase() {
    return this.getStringAttribute('snmp_priv_passphrase');
  }
  public set snmpPrivPassphrase(value: string) {
    this._snmpPrivPassphrase = value;
  }
  public resetSnmpPrivPassphrase() {
    this._snmpPrivPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPrivPassphraseInput() {
    return this._snmpPrivPassphrase;
  }

  // snmp_priv_protocol - computed: true, optional: true, required: false
  private _snmpPrivProtocol?: string; 
  public get snmpPrivProtocol() {
    return this.getStringAttribute('snmp_priv_protocol');
  }
  public set snmpPrivProtocol(value: string) {
    this._snmpPrivProtocol = value;
  }
  public resetSnmpPrivProtocol() {
    this._snmpPrivProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPrivProtocolInput() {
    return this._snmpPrivProtocol;
  }

  // snmp_ro_community - computed: true, optional: true, required: false
  private _snmpRoCommunity?: string; 
  public get snmpRoCommunity() {
    return this.getStringAttribute('snmp_ro_community');
  }
  public set snmpRoCommunity(value: string) {
    this._snmpRoCommunity = value;
  }
  public resetSnmpRoCommunity() {
    this._snmpRoCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRoCommunityInput() {
    return this._snmpRoCommunity;
  }

  // snmp_ro_community_desc - computed: true, optional: true, required: false
  private _snmpRoCommunityDesc?: string; 
  public get snmpRoCommunityDesc() {
    return this.getStringAttribute('snmp_ro_community_desc');
  }
  public set snmpRoCommunityDesc(value: string) {
    this._snmpRoCommunityDesc = value;
  }
  public resetSnmpRoCommunityDesc() {
    this._snmpRoCommunityDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRoCommunityDescInput() {
    return this._snmpRoCommunityDesc;
  }

  // snmp_rw_community - computed: true, optional: true, required: false
  private _snmpRwCommunity?: string; 
  public get snmpRwCommunity() {
    return this.getStringAttribute('snmp_rw_community');
  }
  public set snmpRwCommunity(value: string) {
    this._snmpRwCommunity = value;
  }
  public resetSnmpRwCommunity() {
    this._snmpRwCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRwCommunityInput() {
    return this._snmpRwCommunity;
  }

  // snmp_rw_community_desc - computed: true, optional: true, required: false
  private _snmpRwCommunityDesc?: string; 
  public get snmpRwCommunityDesc() {
    return this.getStringAttribute('snmp_rw_community_desc');
  }
  public set snmpRwCommunityDesc(value: string) {
    this._snmpRwCommunityDesc = value;
  }
  public resetSnmpRwCommunityDesc() {
    this._snmpRwCommunityDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRwCommunityDescInput() {
    return this._snmpRwCommunityDesc;
  }

  // snmp_user_name - computed: true, optional: true, required: false
  private _snmpUserName?: string; 
  public get snmpUserName() {
    return this.getStringAttribute('snmp_user_name');
  }
  public set snmpUserName(value: string) {
    this._snmpUserName = value;
  }
  public resetSnmpUserName() {
    this._snmpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpUserNameInput() {
    return this._snmpUserName;
  }

  // snmp_version - computed: true, optional: true, required: false
  private _snmpVersion?: string; 
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }
  public set snmpVersion(value: string) {
    this._snmpVersion = value;
  }
  public resetSnmpVersion() {
    this._snmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpVersionInput() {
    return this._snmpVersion;
  }

  // time_out - computed: true, optional: true, required: false
  private _timeOut?: number; 
  public get timeOut() {
    return this.getNumberAttribute('time_out');
  }
  public set timeOut(value: number) {
    this._timeOut = value;
  }
  public resetTimeOut() {
    this._timeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutInput() {
    return this._timeOut;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // update_mgmt_ip - computed: true, optional: true, required: false
  private _updateMgmtIp?: string; 
  public get updateMgmtIp() {
    return this.getStringAttribute('update_mgmt_ip');
  }
  public set updateMgmtIp(value: string) {
    this._updateMgmtIp = value;
  }
  public resetUpdateMgmtIp() {
    this._updateMgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMgmtIpInput() {
    return this._updateMgmtIp;
  }

  // user_name_list - computed: true, optional: true, required: false
  private _userNameList?: string[]; 
  public get userNameList() {
    return this.getListAttribute('user_name_list');
  }
  public set userNameList(value: string[]) {
    this._userNameList = value;
  }
  public resetUserNameList() {
    this._userNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameListInput() {
    return this._userNameList;
  }

  // http_read_credential - computed: false, optional: true, required: false
  private _httpReadCredential = new DiscoveryParametersHttpReadCredentialList(this, "http_read_credential", false);
  public get httpReadCredential() {
    return this._httpReadCredential;
  }
  public putHttpReadCredential(value: DiscoveryParametersHttpReadCredential[] | cdktf.IResolvable) {
    this._httpReadCredential.internalValue = value;
  }
  public resetHttpReadCredential() {
    this._httpReadCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReadCredentialInput() {
    return this._httpReadCredential.internalValue;
  }

  // http_write_credential - computed: false, optional: true, required: false
  private _httpWriteCredential = new DiscoveryParametersHttpWriteCredentialList(this, "http_write_credential", false);
  public get httpWriteCredential() {
    return this._httpWriteCredential;
  }
  public putHttpWriteCredential(value: DiscoveryParametersHttpWriteCredential[] | cdktf.IResolvable) {
    this._httpWriteCredential.internalValue = value;
  }
  public resetHttpWriteCredential() {
    this._httpWriteCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpWriteCredentialInput() {
    return this._httpWriteCredential.internalValue;
  }
}

export class DiscoveryParametersList extends cdktf.ComplexList {
  public internalValue? : DiscoveryParameters[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryParametersOutputReference {
    return new DiscoveryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery dnacenter_discovery}
*/
export class Discovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Discovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Discovery to import
  * @param importFromId The id of the existing Discovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Discovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/discovery dnacenter_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DiscoveryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_discovery',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new DiscoveryItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DiscoveryParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DiscoveryParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(discoveryParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(discoveryParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
