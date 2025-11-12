// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseledgerdetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#id Licenseledgerdetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#uuid Licenseledgerdetails#uuid}
  */
  readonly uuid?: string;
  /**
  * escrow_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#escrow_infos Licenseledgerdetails#escrow_infos}
  */
  readonly escrowInfos?: LicenseledgerdetailsEscrowInfos[] | cdktf.IResolvable;
  /**
  * se_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#se_infos Licenseledgerdetails#se_infos}
  */
  readonly seInfos?: LicenseledgerdetailsSeInfos[] | cdktf.IResolvable;
  /**
  * tier_usages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#tier_usages Licenseledgerdetails#tier_usages}
  */
  readonly tierUsages?: LicenseledgerdetailsTierUsages[] | cdktf.IResolvable;
}
export interface LicenseledgerdetailsEscrowInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#last_updated Licenseledgerdetails#last_updated}
  */
  readonly lastUpdated: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#service_cores Licenseledgerdetails#service_cores}
  */
  readonly serviceCores: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#tenant_uuid Licenseledgerdetails#tenant_uuid}
  */
  readonly tenantUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#tier Licenseledgerdetails#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#uuid Licenseledgerdetails#uuid}
  */
  readonly uuid?: string;
}

export function licenseledgerdetailsEscrowInfosToTerraform(struct?: LicenseledgerdetailsEscrowInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_updated: cdktf.stringToTerraform(struct!.lastUpdated),
    service_cores: cdktf.stringToTerraform(struct!.serviceCores),
    tenant_uuid: cdktf.stringToTerraform(struct!.tenantUuid),
    tier: cdktf.stringToTerraform(struct!.tier),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function licenseledgerdetailsEscrowInfosToHclTerraform(struct?: LicenseledgerdetailsEscrowInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_updated: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cores: {
      value: cdktf.stringToHclTerraform(struct!.serviceCores),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_uuid: {
      value: cdktf.stringToHclTerraform(struct!.tenantUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseledgerdetailsEscrowInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseledgerdetailsEscrowInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._serviceCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCores = this._serviceCores;
    }
    if (this._tenantUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantUuid = this._tenantUuid;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseledgerdetailsEscrowInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastUpdated = undefined;
      this._serviceCores = undefined;
      this._tenantUuid = undefined;
      this._tier = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastUpdated = value.lastUpdated;
      this._serviceCores = value.serviceCores;
      this._tenantUuid = value.tenantUuid;
      this._tier = value.tier;
      this._uuid = value.uuid;
    }
  }

  // last_updated - computed: false, optional: false, required: true
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // service_cores - computed: false, optional: false, required: true
  private _serviceCores?: string; 
  public get serviceCores() {
    return this.getStringAttribute('service_cores');
  }
  public set serviceCores(value: string) {
    this._serviceCores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCoresInput() {
    return this._serviceCores;
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
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
}

export class LicenseledgerdetailsEscrowInfosList extends cdktf.ComplexList {
  public internalValue? : LicenseledgerdetailsEscrowInfos[] | cdktf.IResolvable

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
  public get(index: number): LicenseledgerdetailsEscrowInfosOutputReference {
    return new LicenseledgerdetailsEscrowInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicenseledgerdetailsSeInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#last_updated Licenseledgerdetails#last_updated}
  */
  readonly lastUpdated: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#service_cores Licenseledgerdetails#service_cores}
  */
  readonly serviceCores: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#tenant_uuid Licenseledgerdetails#tenant_uuid}
  */
  readonly tenantUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#tier Licenseledgerdetails#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#uuid Licenseledgerdetails#uuid}
  */
  readonly uuid?: string;
}

export function licenseledgerdetailsSeInfosToTerraform(struct?: LicenseledgerdetailsSeInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_updated: cdktf.stringToTerraform(struct!.lastUpdated),
    service_cores: cdktf.stringToTerraform(struct!.serviceCores),
    tenant_uuid: cdktf.stringToTerraform(struct!.tenantUuid),
    tier: cdktf.stringToTerraform(struct!.tier),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function licenseledgerdetailsSeInfosToHclTerraform(struct?: LicenseledgerdetailsSeInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_updated: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cores: {
      value: cdktf.stringToHclTerraform(struct!.serviceCores),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_uuid: {
      value: cdktf.stringToHclTerraform(struct!.tenantUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseledgerdetailsSeInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseledgerdetailsSeInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._serviceCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCores = this._serviceCores;
    }
    if (this._tenantUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantUuid = this._tenantUuid;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseledgerdetailsSeInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastUpdated = undefined;
      this._serviceCores = undefined;
      this._tenantUuid = undefined;
      this._tier = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastUpdated = value.lastUpdated;
      this._serviceCores = value.serviceCores;
      this._tenantUuid = value.tenantUuid;
      this._tier = value.tier;
      this._uuid = value.uuid;
    }
  }

  // last_updated - computed: false, optional: false, required: true
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // service_cores - computed: false, optional: false, required: true
  private _serviceCores?: string; 
  public get serviceCores() {
    return this.getStringAttribute('service_cores');
  }
  public set serviceCores(value: string) {
    this._serviceCores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCoresInput() {
    return this._serviceCores;
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
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
}

export class LicenseledgerdetailsSeInfosList extends cdktf.ComplexList {
  public internalValue? : LicenseledgerdetailsSeInfos[] | cdktf.IResolvable

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
  public get(index: number): LicenseledgerdetailsSeInfosOutputReference {
    return new LicenseledgerdetailsSeInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicenseledgerdetailsTierUsagesUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#available Licenseledgerdetails#available}
  */
  readonly available?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#consumed Licenseledgerdetails#consumed}
  */
  readonly consumed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#escrow Licenseledgerdetails#escrow}
  */
  readonly escrow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#remaining Licenseledgerdetails#remaining}
  */
  readonly remaining?: string;
}

export function licenseledgerdetailsTierUsagesUsageToTerraform(struct?: LicenseledgerdetailsTierUsagesUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available: cdktf.stringToTerraform(struct!.available),
    consumed: cdktf.stringToTerraform(struct!.consumed),
    escrow: cdktf.stringToTerraform(struct!.escrow),
    remaining: cdktf.stringToTerraform(struct!.remaining),
  }
}


export function licenseledgerdetailsTierUsagesUsageToHclTerraform(struct?: LicenseledgerdetailsTierUsagesUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available: {
      value: cdktf.stringToHclTerraform(struct!.available),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumed: {
      value: cdktf.stringToHclTerraform(struct!.consumed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escrow: {
      value: cdktf.stringToHclTerraform(struct!.escrow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remaining: {
      value: cdktf.stringToHclTerraform(struct!.remaining),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseledgerdetailsTierUsagesUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseledgerdetailsTierUsagesUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._available !== undefined) {
      hasAnyValues = true;
      internalValueResult.available = this._available;
    }
    if (this._consumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumed = this._consumed;
    }
    if (this._escrow !== undefined) {
      hasAnyValues = true;
      internalValueResult.escrow = this._escrow;
    }
    if (this._remaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.remaining = this._remaining;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseledgerdetailsTierUsagesUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._available = undefined;
      this._consumed = undefined;
      this._escrow = undefined;
      this._remaining = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._available = value.available;
      this._consumed = value.consumed;
      this._escrow = value.escrow;
      this._remaining = value.remaining;
    }
  }

  // available - computed: false, optional: true, required: false
  private _available?: string; 
  public get available() {
    return this.getStringAttribute('available');
  }
  public set available(value: string) {
    this._available = value;
  }
  public resetAvailable() {
    this._available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInput() {
    return this._available;
  }

  // consumed - computed: false, optional: true, required: false
  private _consumed?: string; 
  public get consumed() {
    return this.getStringAttribute('consumed');
  }
  public set consumed(value: string) {
    this._consumed = value;
  }
  public resetConsumed() {
    this._consumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumedInput() {
    return this._consumed;
  }

  // escrow - computed: false, optional: true, required: false
  private _escrow?: string; 
  public get escrow() {
    return this.getStringAttribute('escrow');
  }
  public set escrow(value: string) {
    this._escrow = value;
  }
  public resetEscrow() {
    this._escrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escrowInput() {
    return this._escrow;
  }

  // remaining - computed: false, optional: true, required: false
  private _remaining?: string; 
  public get remaining() {
    return this.getStringAttribute('remaining');
  }
  public set remaining(value: string) {
    this._remaining = value;
  }
  public resetRemaining() {
    this._remaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingInput() {
    return this._remaining;
  }
}

export class LicenseledgerdetailsTierUsagesUsageList extends cdktf.ComplexList {
  public internalValue? : LicenseledgerdetailsTierUsagesUsage[] | cdktf.IResolvable

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
  public get(index: number): LicenseledgerdetailsTierUsagesUsageOutputReference {
    return new LicenseledgerdetailsTierUsagesUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicenseledgerdetailsTierUsages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#tier Licenseledgerdetails#tier}
  */
  readonly tier?: string;
  /**
  * usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#usage Licenseledgerdetails#usage}
  */
  readonly usage?: LicenseledgerdetailsTierUsagesUsage[] | cdktf.IResolvable;
}

export function licenseledgerdetailsTierUsagesToTerraform(struct?: LicenseledgerdetailsTierUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tier: cdktf.stringToTerraform(struct!.tier),
    usage: cdktf.listMapper(licenseledgerdetailsTierUsagesUsageToTerraform, true)(struct!.usage),
  }
}


export function licenseledgerdetailsTierUsagesToHclTerraform(struct?: LicenseledgerdetailsTierUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage: {
      value: cdktf.listMapperHcl(licenseledgerdetailsTierUsagesUsageToHclTerraform, true)(struct!.usage),
      isBlock: true,
      type: "set",
      storageClassType: "LicenseledgerdetailsTierUsagesUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseledgerdetailsTierUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseledgerdetailsTierUsages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._usage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseledgerdetailsTierUsages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tier = undefined;
      this._usage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tier = value.tier;
      this._usage.internalValue = value.usage;
    }
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // usage - computed: false, optional: true, required: false
  private _usage = new LicenseledgerdetailsTierUsagesUsageList(this, "usage", true);
  public get usage() {
    return this._usage;
  }
  public putUsage(value: LicenseledgerdetailsTierUsagesUsage[] | cdktf.IResolvable) {
    this._usage.internalValue = value;
  }
  public resetUsage() {
    this._usage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage.internalValue;
  }
}

export class LicenseledgerdetailsTierUsagesList extends cdktf.ComplexList {
  public internalValue? : LicenseledgerdetailsTierUsages[] | cdktf.IResolvable

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
  public get(index: number): LicenseledgerdetailsTierUsagesOutputReference {
    return new LicenseledgerdetailsTierUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails avi_licenseledgerdetails}
*/
export class Licenseledgerdetails extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_licenseledgerdetails";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Licenseledgerdetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Licenseledgerdetails to import
  * @param importFromId The id of the existing Licenseledgerdetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Licenseledgerdetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_licenseledgerdetails", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/licenseledgerdetails avi_licenseledgerdetails} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseledgerdetailsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicenseledgerdetailsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_licenseledgerdetails',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
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
    this._uuid = config.uuid;
    this._escrowInfos.internalValue = config.escrowInfos;
    this._seInfos.internalValue = config.seInfos;
    this._tierUsages.internalValue = config.tierUsages;
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

  // escrow_infos - computed: false, optional: true, required: false
  private _escrowInfos = new LicenseledgerdetailsEscrowInfosList(this, "escrow_infos", false);
  public get escrowInfos() {
    return this._escrowInfos;
  }
  public putEscrowInfos(value: LicenseledgerdetailsEscrowInfos[] | cdktf.IResolvable) {
    this._escrowInfos.internalValue = value;
  }
  public resetEscrowInfos() {
    this._escrowInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escrowInfosInput() {
    return this._escrowInfos.internalValue;
  }

  // se_infos - computed: false, optional: true, required: false
  private _seInfos = new LicenseledgerdetailsSeInfosList(this, "se_infos", false);
  public get seInfos() {
    return this._seInfos;
  }
  public putSeInfos(value: LicenseledgerdetailsSeInfos[] | cdktf.IResolvable) {
    this._seInfos.internalValue = value;
  }
  public resetSeInfos() {
    this._seInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seInfosInput() {
    return this._seInfos.internalValue;
  }

  // tier_usages - computed: false, optional: true, required: false
  private _tierUsages = new LicenseledgerdetailsTierUsagesList(this, "tier_usages", false);
  public get tierUsages() {
    return this._tierUsages;
  }
  public putTierUsages(value: LicenseledgerdetailsTierUsages[] | cdktf.IResolvable) {
    this._tierUsages.internalValue = value;
  }
  public resetTierUsages() {
    this._tierUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierUsagesInput() {
    return this._tierUsages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      escrow_infos: cdktf.listMapper(licenseledgerdetailsEscrowInfosToTerraform, true)(this._escrowInfos.internalValue),
      se_infos: cdktf.listMapper(licenseledgerdetailsSeInfosToTerraform, true)(this._seInfos.internalValue),
      tier_usages: cdktf.listMapper(licenseledgerdetailsTierUsagesToTerraform, true)(this._tierUsages.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      escrow_infos: {
        value: cdktf.listMapperHcl(licenseledgerdetailsEscrowInfosToHclTerraform, true)(this._escrowInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseledgerdetailsEscrowInfosList",
      },
      se_infos: {
        value: cdktf.listMapperHcl(licenseledgerdetailsSeInfosToHclTerraform, true)(this._seInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseledgerdetailsSeInfosList",
      },
      tier_usages: {
        value: cdktf.listMapperHcl(licenseledgerdetailsTierUsagesToHclTerraform, true)(this._tierUsages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseledgerdetailsTierUsagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
