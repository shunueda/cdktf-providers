// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensestatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#id Licensestatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#tenant_uuid Licensestatus#tenant_uuid}
  */
  readonly tenantUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#uuid Licensestatus#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#configpb_attributes Licensestatus#configpb_attributes}
  */
  readonly configpbAttributes?: LicensestatusConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * saas_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#saas_status Licensestatus#saas_status}
  */
  readonly saasStatus?: LicensestatusSaasStatus[] | cdktf.IResolvable;
  /**
  * service_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#service_update Licensestatus#service_update}
  */
  readonly serviceUpdate?: LicensestatusServiceUpdate[] | cdktf.IResolvable;
}
export interface LicensestatusConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#version Licensestatus#version}
  */
  readonly version?: string;
}

export function licensestatusConfigpbAttributesToTerraform(struct?: LicensestatusConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function licensestatusConfigpbAttributesToHclTerraform(struct?: LicensestatusConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensestatusConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensestatusConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensestatusConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class LicensestatusConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : LicensestatusConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): LicensestatusConfigpbAttributesOutputReference {
    return new LicensestatusConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensestatusSaasStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#connected Licensestatus#connected}
  */
  readonly connected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#enabled Licensestatus#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#expired Licensestatus#expired}
  */
  readonly expired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#last_refreshed_at Licensestatus#last_refreshed_at}
  */
  readonly lastRefreshedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#message Licensestatus#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#name Licensestatus#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#public_key Licensestatus#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#refresh_status Licensestatus#refresh_status}
  */
  readonly refreshStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#refreshed_at Licensestatus#refreshed_at}
  */
  readonly refreshedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#reserve_service_units Licensestatus#reserve_service_units}
  */
  readonly reserveServiceUnits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#state Licensestatus#state}
  */
  readonly state?: string;
}

export function licensestatusSaasStatusToTerraform(struct?: LicensestatusSaasStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: cdktf.stringToTerraform(struct!.connected),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    expired: cdktf.stringToTerraform(struct!.expired),
    last_refreshed_at: cdktf.stringToTerraform(struct!.lastRefreshedAt),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    refresh_status: cdktf.stringToTerraform(struct!.refreshStatus),
    refreshed_at: cdktf.stringToTerraform(struct!.refreshedAt),
    reserve_service_units: cdktf.stringToTerraform(struct!.reserveServiceUnits),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function licensestatusSaasStatusToHclTerraform(struct?: LicensestatusSaasStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected: {
      value: cdktf.stringToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired: {
      value: cdktf.stringToHclTerraform(struct!.expired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_refreshed_at: {
      value: cdktf.stringToHclTerraform(struct!.lastRefreshedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_status: {
      value: cdktf.stringToHclTerraform(struct!.refreshStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refreshed_at: {
      value: cdktf.stringToHclTerraform(struct!.refreshedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserve_service_units: {
      value: cdktf.stringToHclTerraform(struct!.reserveServiceUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensestatusSaasStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensestatusSaasStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expired = this._expired;
    }
    if (this._lastRefreshedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRefreshedAt = this._lastRefreshedAt;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._refreshStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshStatus = this._refreshStatus;
    }
    if (this._refreshedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshedAt = this._refreshedAt;
    }
    if (this._reserveServiceUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveServiceUnits = this._reserveServiceUnits;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensestatusSaasStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connected = undefined;
      this._enabled = undefined;
      this._expired = undefined;
      this._lastRefreshedAt = undefined;
      this._message = undefined;
      this._name = undefined;
      this._publicKey = undefined;
      this._refreshStatus = undefined;
      this._refreshedAt = undefined;
      this._reserveServiceUnits = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connected = value.connected;
      this._enabled = value.enabled;
      this._expired = value.expired;
      this._lastRefreshedAt = value.lastRefreshedAt;
      this._message = value.message;
      this._name = value.name;
      this._publicKey = value.publicKey;
      this._refreshStatus = value.refreshStatus;
      this._refreshedAt = value.refreshedAt;
      this._reserveServiceUnits = value.reserveServiceUnits;
      this._state = value.state;
    }
  }

  // connected - computed: true, optional: true, required: false
  private _connected?: string; 
  public get connected() {
    return this.getStringAttribute('connected');
  }
  public set connected(value: string) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expired - computed: true, optional: true, required: false
  private _expired?: string; 
  public get expired() {
    return this.getStringAttribute('expired');
  }
  public set expired(value: string) {
    this._expired = value;
  }
  public resetExpired() {
    this._expired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredInput() {
    return this._expired;
  }

  // last_refreshed_at - computed: true, optional: true, required: false
  private _lastRefreshedAt?: string; 
  public get lastRefreshedAt() {
    return this.getStringAttribute('last_refreshed_at');
  }
  public set lastRefreshedAt(value: string) {
    this._lastRefreshedAt = value;
  }
  public resetLastRefreshedAt() {
    this._lastRefreshedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRefreshedAtInput() {
    return this._lastRefreshedAt;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // refresh_status - computed: true, optional: true, required: false
  private _refreshStatus?: string; 
  public get refreshStatus() {
    return this.getStringAttribute('refresh_status');
  }
  public set refreshStatus(value: string) {
    this._refreshStatus = value;
  }
  public resetRefreshStatus() {
    this._refreshStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshStatusInput() {
    return this._refreshStatus;
  }

  // refreshed_at - computed: true, optional: true, required: false
  private _refreshedAt?: string; 
  public get refreshedAt() {
    return this.getStringAttribute('refreshed_at');
  }
  public set refreshedAt(value: string) {
    this._refreshedAt = value;
  }
  public resetRefreshedAt() {
    this._refreshedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshedAtInput() {
    return this._refreshedAt;
  }

  // reserve_service_units - computed: true, optional: true, required: false
  private _reserveServiceUnits?: string; 
  public get reserveServiceUnits() {
    return this.getStringAttribute('reserve_service_units');
  }
  public set reserveServiceUnits(value: string) {
    this._reserveServiceUnits = value;
  }
  public resetReserveServiceUnits() {
    this._reserveServiceUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveServiceUnitsInput() {
    return this._reserveServiceUnits;
  }

  // state - computed: true, optional: true, required: false
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
}

export class LicensestatusSaasStatusList extends cdktf.ComplexList {
  public internalValue? : LicensestatusSaasStatus[] | cdktf.IResolvable

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
  public get(index: number): LicensestatusSaasStatusOutputReference {
    return new LicensestatusSaasStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensestatusServiceUpdateServiceUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#available_service_units Licensestatus#available_service_units}
  */
  readonly availableServiceUnits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#org_id Licensestatus#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#used_service_units Licensestatus#used_service_units}
  */
  readonly usedServiceUnits?: string;
}

export function licensestatusServiceUpdateServiceUnitsToTerraform(struct?: LicensestatusServiceUpdateServiceUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available_service_units: cdktf.stringToTerraform(struct!.availableServiceUnits),
    org_id: cdktf.stringToTerraform(struct!.orgId),
    used_service_units: cdktf.stringToTerraform(struct!.usedServiceUnits),
  }
}


export function licensestatusServiceUpdateServiceUnitsToHclTerraform(struct?: LicensestatusServiceUpdateServiceUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available_service_units: {
      value: cdktf.stringToHclTerraform(struct!.availableServiceUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used_service_units: {
      value: cdktf.stringToHclTerraform(struct!.usedServiceUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensestatusServiceUpdateServiceUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensestatusServiceUpdateServiceUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availableServiceUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableServiceUnits = this._availableServiceUnits;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._usedServiceUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedServiceUnits = this._usedServiceUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensestatusServiceUpdateServiceUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availableServiceUnits = undefined;
      this._orgId = undefined;
      this._usedServiceUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availableServiceUnits = value.availableServiceUnits;
      this._orgId = value.orgId;
      this._usedServiceUnits = value.usedServiceUnits;
    }
  }

  // available_service_units - computed: true, optional: true, required: false
  private _availableServiceUnits?: string; 
  public get availableServiceUnits() {
    return this.getStringAttribute('available_service_units');
  }
  public set availableServiceUnits(value: string) {
    this._availableServiceUnits = value;
  }
  public resetAvailableServiceUnits() {
    this._availableServiceUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableServiceUnitsInput() {
    return this._availableServiceUnits;
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // used_service_units - computed: true, optional: true, required: false
  private _usedServiceUnits?: string; 
  public get usedServiceUnits() {
    return this.getStringAttribute('used_service_units');
  }
  public set usedServiceUnits(value: string) {
    this._usedServiceUnits = value;
  }
  public resetUsedServiceUnits() {
    this._usedServiceUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedServiceUnitsInput() {
    return this._usedServiceUnits;
  }
}

export class LicensestatusServiceUpdateServiceUnitsList extends cdktf.ComplexList {
  public internalValue? : LicensestatusServiceUpdateServiceUnits[] | cdktf.IResolvable

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
  public get(index: number): LicensestatusServiceUpdateServiceUnitsOutputReference {
    return new LicensestatusServiceUpdateServiceUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensestatusServiceUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#name Licensestatus#name}
  */
  readonly name?: string;
  /**
  * service_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#service_units Licensestatus#service_units}
  */
  readonly serviceUnits?: LicensestatusServiceUpdateServiceUnits[] | cdktf.IResolvable;
}

export function licensestatusServiceUpdateToTerraform(struct?: LicensestatusServiceUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_units: cdktf.listMapper(licensestatusServiceUpdateServiceUnitsToTerraform, true)(struct!.serviceUnits),
  }
}


export function licensestatusServiceUpdateToHclTerraform(struct?: LicensestatusServiceUpdate | cdktf.IResolvable): any {
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
    service_units: {
      value: cdktf.listMapperHcl(licensestatusServiceUpdateServiceUnitsToHclTerraform, true)(struct!.serviceUnits),
      isBlock: true,
      type: "set",
      storageClassType: "LicensestatusServiceUpdateServiceUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensestatusServiceUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicensestatusServiceUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceUnits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUnits = this._serviceUnits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensestatusServiceUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serviceUnits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serviceUnits.internalValue = value.serviceUnits;
    }
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

  // service_units - computed: false, optional: true, required: false
  private _serviceUnits = new LicensestatusServiceUpdateServiceUnitsList(this, "service_units", true);
  public get serviceUnits() {
    return this._serviceUnits;
  }
  public putServiceUnits(value: LicensestatusServiceUpdateServiceUnits[] | cdktf.IResolvable) {
    this._serviceUnits.internalValue = value;
  }
  public resetServiceUnits() {
    this._serviceUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUnitsInput() {
    return this._serviceUnits.internalValue;
  }
}

export class LicensestatusServiceUpdateList extends cdktf.ComplexList {
  public internalValue? : LicensestatusServiceUpdate[] | cdktf.IResolvable

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
  public get(index: number): LicensestatusServiceUpdateOutputReference {
    return new LicensestatusServiceUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus avi_licensestatus}
*/
export class Licensestatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_licensestatus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Licensestatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Licensestatus to import
  * @param importFromId The id of the existing Licensestatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Licensestatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_licensestatus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/licensestatus avi_licensestatus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensestatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicensestatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_licensestatus',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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
    this._tenantUuid = config.tenantUuid;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._saasStatus.internalValue = config.saasStatus;
    this._serviceUpdate.internalValue = config.serviceUpdate;
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

  // tenant_uuid - computed: true, optional: true, required: false
  private _tenantUuid?: string; 
  public get tenantUuid() {
    return this.getStringAttribute('tenant_uuid');
  }
  public set tenantUuid(value: string) {
    this._tenantUuid = value;
  }
  public resetTenantUuid() {
    this._tenantUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantUuidInput() {
    return this._tenantUuid;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new LicensestatusConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: LicensestatusConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // saas_status - computed: false, optional: true, required: false
  private _saasStatus = new LicensestatusSaasStatusList(this, "saas_status", true);
  public get saasStatus() {
    return this._saasStatus;
  }
  public putSaasStatus(value: LicensestatusSaasStatus[] | cdktf.IResolvable) {
    this._saasStatus.internalValue = value;
  }
  public resetSaasStatus() {
    this._saasStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasStatusInput() {
    return this._saasStatus.internalValue;
  }

  // service_update - computed: false, optional: true, required: false
  private _serviceUpdate = new LicensestatusServiceUpdateList(this, "service_update", true);
  public get serviceUpdate() {
    return this._serviceUpdate;
  }
  public putServiceUpdate(value: LicensestatusServiceUpdate[] | cdktf.IResolvable) {
    this._serviceUpdate.internalValue = value;
  }
  public resetServiceUpdate() {
    this._serviceUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUpdateInput() {
    return this._serviceUpdate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tenant_uuid: cdktf.stringToTerraform(this._tenantUuid),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(licensestatusConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      saas_status: cdktf.listMapper(licensestatusSaasStatusToTerraform, true)(this._saasStatus.internalValue),
      service_update: cdktf.listMapper(licensestatusServiceUpdateToTerraform, true)(this._serviceUpdate.internalValue),
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
      tenant_uuid: {
        value: cdktf.stringToHclTerraform(this._tenantUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(licensestatusConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensestatusConfigpbAttributesList",
      },
      saas_status: {
        value: cdktf.listMapperHcl(licensestatusSaasStatusToHclTerraform, true)(this._saasStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensestatusSaasStatusList",
      },
      service_update: {
        value: cdktf.listMapperHcl(licensestatusServiceUpdateToHclTerraform, true)(this._serviceUpdate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensestatusServiceUpdateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
