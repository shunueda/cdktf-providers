// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterAuthenticationPolicyServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers#id DataDnacenterAuthenticationPolicyServers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * isIseEnabled query parameter. Valid values are : true, false
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers#is_ise_enabled DataDnacenterAuthenticationPolicyServers#is_ise_enabled}
  */
  readonly isIseEnabled?: boolean | cdktf.IResolvable;
  /**
  * role query parameter. Authentication and Policy Server Role (Example: primary, secondary)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers#role DataDnacenterAuthenticationPolicyServers#role}
  */
  readonly role?: string;
  /**
  * state query parameter. Valid values are: INPROGRESS, ACTIVE, DELETED, RBAC-FAILURE, FAILED
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers#state DataDnacenterAuthenticationPolicyServers#state}
  */
  readonly state?: string;
}
export interface DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses {
}

export function dataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToTerraform(struct?: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToHclTerraform(struct?: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_ip_address - computed: true, optional: false, required: false
  public get externalIpAddress() {
    return this.getStringAttribute('external_ip_address');
  }
}

export class DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference {
    return new DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtos {
}

export function dataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosToTerraform(struct?: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosToHclTerraform(struct?: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_cisco_ise_ip_addresses - computed: true, optional: false, required: false
  private _externalCiscoIseIpAddresses = new DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesList(this, "external_cisco_ise_ip_addresses", false);
  public get externalCiscoIseIpAddresses() {
    return this._externalCiscoIseIpAddresses;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosOutputReference {
    return new DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtos {
}

export function dataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosToTerraform(struct?: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosToHclTerraform(struct?: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_cisco_ise_ip_addr_dtos - computed: true, optional: false, required: false
  private _externalCiscoIseIpAddrDtos = new DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosExternalCiscoIseIpAddrDtosList(this, "external_cisco_ise_ip_addr_dtos", false);
  public get externalCiscoIseIpAddrDtos() {
    return this._externalCiscoIseIpAddrDtos;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // sshkey - computed: true, optional: false, required: false
  public get sshkey() {
    return this.getStringAttribute('sshkey');
  }

  // subscriber_name - computed: true, optional: false, required: false
  public get subscriberName() {
    return this.getStringAttribute('subscriber_name');
  }

  // trust_state - computed: true, optional: false, required: false
  public get trustState() {
    return this.getStringAttribute('trust_state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosOutputReference {
    return new DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAuthenticationPolicyServersItems {
}

export function dataDnacenterAuthenticationPolicyServersItemsToTerraform(struct?: DataDnacenterAuthenticationPolicyServersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAuthenticationPolicyServersItemsToHclTerraform(struct?: DataDnacenterAuthenticationPolicyServersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAuthenticationPolicyServersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAuthenticationPolicyServersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAuthenticationPolicyServersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounting_port - computed: true, optional: false, required: false
  public get accountingPort() {
    return this.getStringAttribute('accounting_port');
  }

  // authentication_port - computed: true, optional: false, required: false
  public get authenticationPort() {
    return this.getStringAttribute('authentication_port');
  }

  // cisco_ise_dtos - computed: true, optional: false, required: false
  private _ciscoIseDtos = new DataDnacenterAuthenticationPolicyServersItemsCiscoIseDtosList(this, "cisco_ise_dtos", false);
  public get ciscoIseDtos() {
    return this._ciscoIseDtos;
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // encryption_scheme - computed: true, optional: false, required: false
  public get encryptionScheme() {
    return this.getStringAttribute('encryption_scheme');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_ise_enabled - computed: true, optional: false, required: false
  public get isIseEnabled() {
    return this.getStringAttribute('is_ise_enabled');
  }

  // ise_enabled - computed: true, optional: false, required: false
  public get iseEnabled() {
    return this.getStringAttribute('ise_enabled');
  }

  // message_key - computed: true, optional: false, required: false
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // pxgrid_enabled - computed: true, optional: false, required: false
  public get pxgridEnabled() {
    return this.getStringAttribute('pxgrid_enabled');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // use_dnac_cert_for_pxgrid - computed: true, optional: false, required: false
  public get useDnacCertForPxgrid() {
    return this.getStringAttribute('use_dnac_cert_for_pxgrid');
  }
}

export class DataDnacenterAuthenticationPolicyServersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAuthenticationPolicyServersItemsOutputReference {
    return new DataDnacenterAuthenticationPolicyServersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers dnacenter_authentication_policy_servers}
*/
export class DataDnacenterAuthenticationPolicyServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_authentication_policy_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterAuthenticationPolicyServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterAuthenticationPolicyServers to import
  * @param importFromId The id of the existing DataDnacenterAuthenticationPolicyServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterAuthenticationPolicyServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_authentication_policy_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/authentication_policy_servers dnacenter_authentication_policy_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterAuthenticationPolicyServersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterAuthenticationPolicyServersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_authentication_policy_servers',
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
    this._isIseEnabled = config.isIseEnabled;
    this._role = config.role;
    this._state = config.state;
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

  // is_ise_enabled - computed: false, optional: true, required: false
  private _isIseEnabled?: boolean | cdktf.IResolvable; 
  public get isIseEnabled() {
    return this.getBooleanAttribute('is_ise_enabled');
  }
  public set isIseEnabled(value: boolean | cdktf.IResolvable) {
    this._isIseEnabled = value;
  }
  public resetIsIseEnabled() {
    this._isIseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIseEnabledInput() {
    return this._isIseEnabled;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterAuthenticationPolicyServersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_ise_enabled: cdktf.booleanToTerraform(this._isIseEnabled),
      role: cdktf.stringToTerraform(this._role),
      state: cdktf.stringToTerraform(this._state),
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
      is_ise_enabled: {
        value: cdktf.booleanToHclTerraform(this._isIseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
