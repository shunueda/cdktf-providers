// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpVirtualAccountAddConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#id PnpVirtualAccountAdd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#parameters PnpVirtualAccountAdd#parameters}
  */
  readonly parameters: PnpVirtualAccountAddParameters;
}
export interface PnpVirtualAccountAddItemProfile {
}

export function pnpVirtualAccountAddItemProfileToTerraform(struct?: PnpVirtualAccountAddItemProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpVirtualAccountAddItemProfileToHclTerraform(struct?: PnpVirtualAccountAddItemProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpVirtualAccountAddItemProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpVirtualAccountAddItemProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddItemProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_fqdn - computed: true, optional: false, required: false
  public get addressFqdn() {
    return this.getStringAttribute('address_fqdn');
  }

  // address_ip_v4 - computed: true, optional: false, required: false
  public get addressIpV4() {
    return this.getStringAttribute('address_ip_v4');
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // make_default - computed: true, optional: false, required: false
  public get makeDefault() {
    return this.getStringAttribute('make_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
}

export class PnpVirtualAccountAddItemProfileList extends cdktf.ComplexList {

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
  public get(index: number): PnpVirtualAccountAddItemProfileOutputReference {
    return new PnpVirtualAccountAddItemProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpVirtualAccountAddItemSyncResultSyncListStruct {
}

export function pnpVirtualAccountAddItemSyncResultSyncListStructToTerraform(struct?: PnpVirtualAccountAddItemSyncResultSyncListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpVirtualAccountAddItemSyncResultSyncListStructToHclTerraform(struct?: PnpVirtualAccountAddItemSyncResultSyncListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpVirtualAccountAddItemSyncResultSyncListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpVirtualAccountAddItemSyncResultSyncListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddItemSyncResultSyncListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_sn_list - computed: true, optional: false, required: false
  public get deviceSnList() {
    return this.getListAttribute('device_sn_list');
  }

  // sync_type - computed: true, optional: false, required: false
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
}

export class PnpVirtualAccountAddItemSyncResultSyncListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpVirtualAccountAddItemSyncResultSyncListStructOutputReference {
    return new PnpVirtualAccountAddItemSyncResultSyncListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpVirtualAccountAddItemSyncResult {
}

export function pnpVirtualAccountAddItemSyncResultToTerraform(struct?: PnpVirtualAccountAddItemSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpVirtualAccountAddItemSyncResultToHclTerraform(struct?: PnpVirtualAccountAddItemSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpVirtualAccountAddItemSyncResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpVirtualAccountAddItemSyncResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddItemSyncResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sync_list - computed: true, optional: false, required: false
  private _syncList = new PnpVirtualAccountAddItemSyncResultSyncListStructList(this, "sync_list", false);
  public get syncList() {
    return this._syncList;
  }

  // sync_msg - computed: true, optional: false, required: false
  public get syncMsg() {
    return this.getStringAttribute('sync_msg');
  }
}

export class PnpVirtualAccountAddItemSyncResultList extends cdktf.ComplexList {

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
  public get(index: number): PnpVirtualAccountAddItemSyncResultOutputReference {
    return new PnpVirtualAccountAddItemSyncResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpVirtualAccountAddItem {
}

export function pnpVirtualAccountAddItemToTerraform(struct?: PnpVirtualAccountAddItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpVirtualAccountAddItemToHclTerraform(struct?: PnpVirtualAccountAddItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpVirtualAccountAddItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpVirtualAccountAddItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_sync_period - computed: true, optional: false, required: false
  public get autoSyncPeriod() {
    return this.getNumberAttribute('auto_sync_period');
  }

  // cco_user - computed: true, optional: false, required: false
  public get ccoUser() {
    return this.getStringAttribute('cco_user');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }

  // last_sync - computed: true, optional: false, required: false
  public get lastSync() {
    return this.getNumberAttribute('last_sync');
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new PnpVirtualAccountAddItemProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }

  // smart_account_id - computed: true, optional: false, required: false
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }

  // sync_result - computed: true, optional: false, required: false
  private _syncResult = new PnpVirtualAccountAddItemSyncResultList(this, "sync_result", false);
  public get syncResult() {
    return this._syncResult;
  }

  // sync_result_str - computed: true, optional: false, required: false
  public get syncResultStr() {
    return this.getStringAttribute('sync_result_str');
  }

  // sync_start_time - computed: true, optional: false, required: false
  public get syncStartTime() {
    return this.getNumberAttribute('sync_start_time');
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // virtual_account_id - computed: true, optional: false, required: false
  public get virtualAccountId() {
    return this.getStringAttribute('virtual_account_id');
  }
}

export class PnpVirtualAccountAddItemList extends cdktf.ComplexList {

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
  public get(index: number): PnpVirtualAccountAddItemOutputReference {
    return new PnpVirtualAccountAddItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpVirtualAccountAddParametersProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#address_fqdn PnpVirtualAccountAdd#address_fqdn}
  */
  readonly addressFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#address_ip_v4 PnpVirtualAccountAdd#address_ip_v4}
  */
  readonly addressIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#cert PnpVirtualAccountAdd#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#make_default PnpVirtualAccountAdd#make_default}
  */
  readonly makeDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#name PnpVirtualAccountAdd#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#port PnpVirtualAccountAdd#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#profile_id PnpVirtualAccountAdd#profile_id}
  */
  readonly profileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#proxy PnpVirtualAccountAdd#proxy}
  */
  readonly proxy?: string;
}

export function pnpVirtualAccountAddParametersProfileToTerraform(struct?: PnpVirtualAccountAddParametersProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_fqdn: cdktf.stringToTerraform(struct!.addressFqdn),
    address_ip_v4: cdktf.stringToTerraform(struct!.addressIpV4),
    cert: cdktf.stringToTerraform(struct!.cert),
    make_default: cdktf.stringToTerraform(struct!.makeDefault),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    proxy: cdktf.stringToTerraform(struct!.proxy),
  }
}


export function pnpVirtualAccountAddParametersProfileToHclTerraform(struct?: PnpVirtualAccountAddParametersProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.addressFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_ip_v4: {
      value: cdktf.stringToHclTerraform(struct!.addressIpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    make_default: {
      value: cdktf.stringToHclTerraform(struct!.makeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpVirtualAccountAddParametersProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpVirtualAccountAddParametersProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFqdn = this._addressFqdn;
    }
    if (this._addressIpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressIpV4 = this._addressIpV4;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._makeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.makeDefault = this._makeDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddParametersProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFqdn = undefined;
      this._addressIpV4 = undefined;
      this._cert = undefined;
      this._makeDefault = undefined;
      this._name = undefined;
      this._port = undefined;
      this._profileId = undefined;
      this._proxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFqdn = value.addressFqdn;
      this._addressIpV4 = value.addressIpV4;
      this._cert = value.cert;
      this._makeDefault = value.makeDefault;
      this._name = value.name;
      this._port = value.port;
      this._profileId = value.profileId;
      this._proxy = value.proxy;
    }
  }

  // address_fqdn - computed: true, optional: true, required: false
  private _addressFqdn?: string; 
  public get addressFqdn() {
    return this.getStringAttribute('address_fqdn');
  }
  public set addressFqdn(value: string) {
    this._addressFqdn = value;
  }
  public resetAddressFqdn() {
    this._addressFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFqdnInput() {
    return this._addressFqdn;
  }

  // address_ip_v4 - computed: true, optional: true, required: false
  private _addressIpV4?: string; 
  public get addressIpV4() {
    return this.getStringAttribute('address_ip_v4');
  }
  public set addressIpV4(value: string) {
    this._addressIpV4 = value;
  }
  public resetAddressIpV4() {
    this._addressIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpV4Input() {
    return this._addressIpV4;
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // make_default - computed: true, optional: true, required: false
  private _makeDefault?: string; 
  public get makeDefault() {
    return this.getStringAttribute('make_default');
  }
  public set makeDefault(value: string) {
    this._makeDefault = value;
  }
  public resetMakeDefault() {
    this._makeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeDefaultInput() {
    return this._makeDefault;
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

  // profile_id - computed: true, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }
}

export class PnpVirtualAccountAddParametersProfileList extends cdktf.ComplexList {
  public internalValue? : PnpVirtualAccountAddParametersProfile[] | cdktf.IResolvable

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
  public get(index: number): PnpVirtualAccountAddParametersProfileOutputReference {
    return new PnpVirtualAccountAddParametersProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpVirtualAccountAddParametersSyncResultSyncListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#device_sn_list PnpVirtualAccountAdd#device_sn_list}
  */
  readonly deviceSnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#sync_type PnpVirtualAccountAdd#sync_type}
  */
  readonly syncType?: string;
}

export function pnpVirtualAccountAddParametersSyncResultSyncListStructToTerraform(struct?: PnpVirtualAccountAddParametersSyncResultSyncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_sn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceSnList),
    sync_type: cdktf.stringToTerraform(struct!.syncType),
  }
}


export function pnpVirtualAccountAddParametersSyncResultSyncListStructToHclTerraform(struct?: PnpVirtualAccountAddParametersSyncResultSyncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_sn_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceSnList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sync_type: {
      value: cdktf.stringToHclTerraform(struct!.syncType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpVirtualAccountAddParametersSyncResultSyncListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpVirtualAccountAddParametersSyncResultSyncListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceSnList !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSnList = this._deviceSnList;
    }
    if (this._syncType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncType = this._syncType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddParametersSyncResultSyncListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceSnList = undefined;
      this._syncType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceSnList = value.deviceSnList;
      this._syncType = value.syncType;
    }
  }

  // device_sn_list - computed: true, optional: true, required: false
  private _deviceSnList?: string[]; 
  public get deviceSnList() {
    return this.getListAttribute('device_sn_list');
  }
  public set deviceSnList(value: string[]) {
    this._deviceSnList = value;
  }
  public resetDeviceSnList() {
    this._deviceSnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSnListInput() {
    return this._deviceSnList;
  }

  // sync_type - computed: true, optional: true, required: false
  private _syncType?: string; 
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
  public set syncType(value: string) {
    this._syncType = value;
  }
  public resetSyncType() {
    this._syncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
  }
}

export class PnpVirtualAccountAddParametersSyncResultSyncListStructList extends cdktf.ComplexList {
  public internalValue? : PnpVirtualAccountAddParametersSyncResultSyncListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpVirtualAccountAddParametersSyncResultSyncListStructOutputReference {
    return new PnpVirtualAccountAddParametersSyncResultSyncListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpVirtualAccountAddParametersSyncResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#sync_msg PnpVirtualAccountAdd#sync_msg}
  */
  readonly syncMsg?: string;
  /**
  * sync_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#sync_list PnpVirtualAccountAdd#sync_list}
  */
  readonly syncList?: PnpVirtualAccountAddParametersSyncResultSyncListStruct[] | cdktf.IResolvable;
}

export function pnpVirtualAccountAddParametersSyncResultToTerraform(struct?: PnpVirtualAccountAddParametersSyncResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_msg: cdktf.stringToTerraform(struct!.syncMsg),
    sync_list: cdktf.listMapper(pnpVirtualAccountAddParametersSyncResultSyncListStructToTerraform, true)(struct!.syncList),
  }
}


export function pnpVirtualAccountAddParametersSyncResultToHclTerraform(struct?: PnpVirtualAccountAddParametersSyncResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_msg: {
      value: cdktf.stringToHclTerraform(struct!.syncMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_list: {
      value: cdktf.listMapperHcl(pnpVirtualAccountAddParametersSyncResultSyncListStructToHclTerraform, true)(struct!.syncList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpVirtualAccountAddParametersSyncResultSyncListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpVirtualAccountAddParametersSyncResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpVirtualAccountAddParametersSyncResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMsg = this._syncMsg;
    }
    if (this._syncList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncList = this._syncList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddParametersSyncResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._syncMsg = undefined;
      this._syncList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._syncMsg = value.syncMsg;
      this._syncList.internalValue = value.syncList;
    }
  }

  // sync_msg - computed: true, optional: true, required: false
  private _syncMsg?: string; 
  public get syncMsg() {
    return this.getStringAttribute('sync_msg');
  }
  public set syncMsg(value: string) {
    this._syncMsg = value;
  }
  public resetSyncMsg() {
    this._syncMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMsgInput() {
    return this._syncMsg;
  }

  // sync_list - computed: false, optional: true, required: false
  private _syncList = new PnpVirtualAccountAddParametersSyncResultSyncListStructList(this, "sync_list", false);
  public get syncList() {
    return this._syncList;
  }
  public putSyncList(value: PnpVirtualAccountAddParametersSyncResultSyncListStruct[] | cdktf.IResolvable) {
    this._syncList.internalValue = value;
  }
  public resetSyncList() {
    this._syncList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncListInput() {
    return this._syncList.internalValue;
  }
}

export class PnpVirtualAccountAddParametersSyncResultList extends cdktf.ComplexList {
  public internalValue? : PnpVirtualAccountAddParametersSyncResult[] | cdktf.IResolvable

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
  public get(index: number): PnpVirtualAccountAddParametersSyncResultOutputReference {
    return new PnpVirtualAccountAddParametersSyncResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpVirtualAccountAddParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#auto_sync_period PnpVirtualAccountAdd#auto_sync_period}
  */
  readonly autoSyncPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#cco_user PnpVirtualAccountAdd#cco_user}
  */
  readonly ccoUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#expiry PnpVirtualAccountAdd#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#last_sync PnpVirtualAccountAdd#last_sync}
  */
  readonly lastSync?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#smart_account_id PnpVirtualAccountAdd#smart_account_id}
  */
  readonly smartAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#sync_result_str PnpVirtualAccountAdd#sync_result_str}
  */
  readonly syncResultStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#sync_start_time PnpVirtualAccountAdd#sync_start_time}
  */
  readonly syncStartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#sync_status PnpVirtualAccountAdd#sync_status}
  */
  readonly syncStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#tenant_id PnpVirtualAccountAdd#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#token PnpVirtualAccountAdd#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#virtual_account_id PnpVirtualAccountAdd#virtual_account_id}
  */
  readonly virtualAccountId?: string;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#profile PnpVirtualAccountAdd#profile}
  */
  readonly profile?: PnpVirtualAccountAddParametersProfile[] | cdktf.IResolvable;
  /**
  * sync_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#sync_result PnpVirtualAccountAdd#sync_result}
  */
  readonly syncResult?: PnpVirtualAccountAddParametersSyncResult[] | cdktf.IResolvable;
}

export function pnpVirtualAccountAddParametersToTerraform(struct?: PnpVirtualAccountAddParametersOutputReference | PnpVirtualAccountAddParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_sync_period: cdktf.numberToTerraform(struct!.autoSyncPeriod),
    cco_user: cdktf.stringToTerraform(struct!.ccoUser),
    expiry: cdktf.numberToTerraform(struct!.expiry),
    last_sync: cdktf.numberToTerraform(struct!.lastSync),
    smart_account_id: cdktf.stringToTerraform(struct!.smartAccountId),
    sync_result_str: cdktf.stringToTerraform(struct!.syncResultStr),
    sync_start_time: cdktf.numberToTerraform(struct!.syncStartTime),
    sync_status: cdktf.stringToTerraform(struct!.syncStatus),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    token: cdktf.stringToTerraform(struct!.token),
    virtual_account_id: cdktf.stringToTerraform(struct!.virtualAccountId),
    profile: cdktf.listMapper(pnpVirtualAccountAddParametersProfileToTerraform, true)(struct!.profile),
    sync_result: cdktf.listMapper(pnpVirtualAccountAddParametersSyncResultToTerraform, true)(struct!.syncResult),
  }
}


export function pnpVirtualAccountAddParametersToHclTerraform(struct?: PnpVirtualAccountAddParametersOutputReference | PnpVirtualAccountAddParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_sync_period: {
      value: cdktf.numberToHclTerraform(struct!.autoSyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cco_user: {
      value: cdktf.stringToHclTerraform(struct!.ccoUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_sync: {
      value: cdktf.numberToHclTerraform(struct!.lastSync),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_account_id: {
      value: cdktf.stringToHclTerraform(struct!.smartAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_result_str: {
      value: cdktf.stringToHclTerraform(struct!.syncResultStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_start_time: {
      value: cdktf.numberToHclTerraform(struct!.syncStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_status: {
      value: cdktf.stringToHclTerraform(struct!.syncStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_account_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.listMapperHcl(pnpVirtualAccountAddParametersProfileToHclTerraform, true)(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "PnpVirtualAccountAddParametersProfileList",
    },
    sync_result: {
      value: cdktf.listMapperHcl(pnpVirtualAccountAddParametersSyncResultToHclTerraform, true)(struct!.syncResult),
      isBlock: true,
      type: "list",
      storageClassType: "PnpVirtualAccountAddParametersSyncResultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpVirtualAccountAddParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpVirtualAccountAddParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSyncPeriod = this._autoSyncPeriod;
    }
    if (this._ccoUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccoUser = this._ccoUser;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._lastSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSync = this._lastSync;
    }
    if (this._smartAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartAccountId = this._smartAccountId;
    }
    if (this._syncResultStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncResultStr = this._syncResultStr;
    }
    if (this._syncStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStartTime = this._syncStartTime;
    }
    if (this._syncStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStatus = this._syncStatus;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._virtualAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAccountId = this._virtualAccountId;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._syncResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncResult = this._syncResult?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpVirtualAccountAddParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoSyncPeriod = undefined;
      this._ccoUser = undefined;
      this._expiry = undefined;
      this._lastSync = undefined;
      this._smartAccountId = undefined;
      this._syncResultStr = undefined;
      this._syncStartTime = undefined;
      this._syncStatus = undefined;
      this._tenantId = undefined;
      this._token = undefined;
      this._virtualAccountId = undefined;
      this._profile.internalValue = undefined;
      this._syncResult.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoSyncPeriod = value.autoSyncPeriod;
      this._ccoUser = value.ccoUser;
      this._expiry = value.expiry;
      this._lastSync = value.lastSync;
      this._smartAccountId = value.smartAccountId;
      this._syncResultStr = value.syncResultStr;
      this._syncStartTime = value.syncStartTime;
      this._syncStatus = value.syncStatus;
      this._tenantId = value.tenantId;
      this._token = value.token;
      this._virtualAccountId = value.virtualAccountId;
      this._profile.internalValue = value.profile;
      this._syncResult.internalValue = value.syncResult;
    }
  }

  // auto_sync_period - computed: true, optional: true, required: false
  private _autoSyncPeriod?: number; 
  public get autoSyncPeriod() {
    return this.getNumberAttribute('auto_sync_period');
  }
  public set autoSyncPeriod(value: number) {
    this._autoSyncPeriod = value;
  }
  public resetAutoSyncPeriod() {
    this._autoSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncPeriodInput() {
    return this._autoSyncPeriod;
  }

  // cco_user - computed: true, optional: true, required: false
  private _ccoUser?: string; 
  public get ccoUser() {
    return this.getStringAttribute('cco_user');
  }
  public set ccoUser(value: string) {
    this._ccoUser = value;
  }
  public resetCcoUser() {
    this._ccoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccoUserInput() {
    return this._ccoUser;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // last_sync - computed: true, optional: true, required: false
  private _lastSync?: number; 
  public get lastSync() {
    return this.getNumberAttribute('last_sync');
  }
  public set lastSync(value: number) {
    this._lastSync = value;
  }
  public resetLastSync() {
    this._lastSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSyncInput() {
    return this._lastSync;
  }

  // smart_account_id - computed: true, optional: true, required: false
  private _smartAccountId?: string; 
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }
  public set smartAccountId(value: string) {
    this._smartAccountId = value;
  }
  public resetSmartAccountId() {
    this._smartAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // sync_result_str - computed: true, optional: true, required: false
  private _syncResultStr?: string; 
  public get syncResultStr() {
    return this.getStringAttribute('sync_result_str');
  }
  public set syncResultStr(value: string) {
    this._syncResultStr = value;
  }
  public resetSyncResultStr() {
    this._syncResultStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResultStrInput() {
    return this._syncResultStr;
  }

  // sync_start_time - computed: true, optional: true, required: false
  private _syncStartTime?: number; 
  public get syncStartTime() {
    return this.getNumberAttribute('sync_start_time');
  }
  public set syncStartTime(value: number) {
    this._syncStartTime = value;
  }
  public resetSyncStartTime() {
    this._syncStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStartTimeInput() {
    return this._syncStartTime;
  }

  // sync_status - computed: true, optional: true, required: false
  private _syncStatus?: string; 
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }
  public set syncStatus(value: string) {
    this._syncStatus = value;
  }
  public resetSyncStatus() {
    this._syncStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStatusInput() {
    return this._syncStatus;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // virtual_account_id - computed: true, optional: true, required: false
  private _virtualAccountId?: string; 
  public get virtualAccountId() {
    return this.getStringAttribute('virtual_account_id');
  }
  public set virtualAccountId(value: string) {
    this._virtualAccountId = value;
  }
  public resetVirtualAccountId() {
    this._virtualAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountIdInput() {
    return this._virtualAccountId;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new PnpVirtualAccountAddParametersProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }
  public putProfile(value: PnpVirtualAccountAddParametersProfile[] | cdktf.IResolvable) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // sync_result - computed: false, optional: true, required: false
  private _syncResult = new PnpVirtualAccountAddParametersSyncResultList(this, "sync_result", false);
  public get syncResult() {
    return this._syncResult;
  }
  public putSyncResult(value: PnpVirtualAccountAddParametersSyncResult[] | cdktf.IResolvable) {
    this._syncResult.internalValue = value;
  }
  public resetSyncResult() {
    this._syncResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResultInput() {
    return this._syncResult.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add dnacenter_pnp_virtual_account_add}
*/
export class PnpVirtualAccountAdd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_virtual_account_add";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpVirtualAccountAdd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpVirtualAccountAdd to import
  * @param importFromId The id of the existing PnpVirtualAccountAdd that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpVirtualAccountAdd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_virtual_account_add", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_virtual_account_add dnacenter_pnp_virtual_account_add} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpVirtualAccountAddConfig
  */
  public constructor(scope: Construct, id: string, config: PnpVirtualAccountAddConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_virtual_account_add',
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
  private _item = new PnpVirtualAccountAddItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new PnpVirtualAccountAddParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PnpVirtualAccountAddParameters) {
    this._parameters.internalValue = value;
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
      parameters: pnpVirtualAccountAddParametersToTerraform(this._parameters.internalValue),
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
        value: pnpVirtualAccountAddParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpVirtualAccountAddParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
