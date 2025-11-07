// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/authentication_policy_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterAuthenticationPolicyServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/authentication_policy_server#id DataCatalystcenterAuthenticationPolicyServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCatalystcenterAuthenticationPolicyServerCiscoIseDtos {
}

export function dataCatalystcenterAuthenticationPolicyServerCiscoIseDtosToTerraform(struct?: DataCatalystcenterAuthenticationPolicyServerCiscoIseDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterAuthenticationPolicyServerCiscoIseDtosToHclTerraform(struct?: DataCatalystcenterAuthenticationPolicyServerCiscoIseDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterAuthenticationPolicyServerCiscoIseDtosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterAuthenticationPolicyServerCiscoIseDtos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterAuthenticationPolicyServerCiscoIseDtos | undefined) {
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // sshkey - computed: true, optional: false, required: false
  public get sshkey() {
    return this.getStringAttribute('sshkey');
  }

  // subscriber_name - computed: true, optional: false, required: false
  public get subscriberName() {
    return this.getStringAttribute('subscriber_name');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataCatalystcenterAuthenticationPolicyServerCiscoIseDtosList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterAuthenticationPolicyServerCiscoIseDtosOutputReference {
    return new DataCatalystcenterAuthenticationPolicyServerCiscoIseDtosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses {
}

export function dataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToTerraform(struct?: DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToHclTerraform(struct?: DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | undefined) {
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

export class DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference {
    return new DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtos {
}

export function dataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosToTerraform(struct?: DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosToHclTerraform(struct?: DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_cisco_ise_ip_addresses - computed: true, optional: false, required: false
  private _externalCiscoIseIpAddresses = new DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesList(this, "external_cisco_ise_ip_addresses", false);
  public get externalCiscoIseIpAddresses() {
    return this._externalCiscoIseIpAddresses;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosOutputReference {
    return new DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/authentication_policy_server catalystcenter_authentication_policy_server}
*/
export class DataCatalystcenterAuthenticationPolicyServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_authentication_policy_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterAuthenticationPolicyServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterAuthenticationPolicyServer to import
  * @param importFromId The id of the existing DataCatalystcenterAuthenticationPolicyServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/authentication_policy_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterAuthenticationPolicyServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_authentication_policy_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/authentication_policy_server catalystcenter_authentication_policy_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterAuthenticationPolicyServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterAuthenticationPolicyServerConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_authentication_policy_server',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
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

  // accounting_port - computed: true, optional: false, required: false
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }

  // authentication_port - computed: true, optional: false, required: false
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }

  // cisco_ise_dtos - computed: true, optional: false, required: false
  private _ciscoIseDtos = new DataCatalystcenterAuthenticationPolicyServerCiscoIseDtosList(this, "cisco_ise_dtos", false);
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

  // external_cisco_ise_ip_addr_dtos - computed: true, optional: false, required: false
  private _externalCiscoIseIpAddrDtos = new DataCatalystcenterAuthenticationPolicyServerExternalCiscoIseIpAddrDtosList(this, "external_cisco_ise_ip_addr_dtos", false);
  public get externalCiscoIseIpAddrDtos() {
    return this._externalCiscoIseIpAddrDtos;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_ise_enabled - computed: true, optional: false, required: false
  public get isIseEnabled() {
    return this.getBooleanAttribute('is_ise_enabled');
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
    return this.getBooleanAttribute('pxgrid_enabled');
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

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // use_dnac_cert_for_pxgrid - computed: true, optional: false, required: false
  public get useDnacCertForPxgrid() {
    return this.getBooleanAttribute('use_dnac_cert_for_pxgrid');
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
