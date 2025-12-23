// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#created_by Tenant#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#description Tenant#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#enforce_label_group Tenant#enforce_label_group}
  */
  readonly enforceLabelGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#id Tenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#label_group_refs Tenant#label_group_refs}
  */
  readonly labelGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#local Tenant#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#name Tenant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#uuid Tenant#uuid}
  */
  readonly uuid?: string;
  /**
  * attrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#attrs Tenant#attrs}
  */
  readonly attrs?: TenantAttrs[] | cdktf.IResolvable;
  /**
  * config_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#config_settings Tenant#config_settings}
  */
  readonly configSettings?: TenantConfigSettings[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#configpb_attributes Tenant#configpb_attributes}
  */
  readonly configpbAttributes?: TenantConfigpbAttributes[] | cdktf.IResolvable;
}
export interface TenantAttrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#key Tenant#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#value Tenant#value}
  */
  readonly value?: string;
}

export function tenantAttrsToTerraform(struct?: TenantAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tenantAttrsToHclTerraform(struct?: TenantAttrs | cdktf.IResolvable): any {
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

export class TenantAttrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantAttrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TenantAttrs | cdktf.IResolvable | undefined) {
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

  // value - computed: true, optional: true, required: false
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

export class TenantAttrsList extends cdktf.ComplexList {
  public internalValue? : TenantAttrs[] | cdktf.IResolvable

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
  public get(index: number): TenantAttrsOutputReference {
    return new TenantAttrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantConfigSettingsLicenseQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#limit Tenant#limit}
  */
  readonly limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#reservation Tenant#reservation}
  */
  readonly reservation?: string;
}

export function tenantConfigSettingsLicenseQuotaToTerraform(struct?: TenantConfigSettingsLicenseQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    reservation: cdktf.stringToTerraform(struct!.reservation),
  }
}


export function tenantConfigSettingsLicenseQuotaToHclTerraform(struct?: TenantConfigSettingsLicenseQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation: {
      value: cdktf.stringToHclTerraform(struct!.reservation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantConfigSettingsLicenseQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantConfigSettingsLicenseQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._reservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservation = this._reservation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantConfigSettingsLicenseQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._reservation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._reservation = value.reservation;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // reservation - computed: false, optional: true, required: false
  private _reservation?: string; 
  public get reservation() {
    return this.getStringAttribute('reservation');
  }
  public set reservation(value: string) {
    this._reservation = value;
  }
  public resetReservation() {
    this._reservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationInput() {
    return this._reservation;
  }
}

export class TenantConfigSettingsLicenseQuotaList extends cdktf.ComplexList {
  public internalValue? : TenantConfigSettingsLicenseQuota[] | cdktf.IResolvable

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
  public get(index: number): TenantConfigSettingsLicenseQuotaOutputReference {
    return new TenantConfigSettingsLicenseQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantConfigSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#se_in_provider_context Tenant#se_in_provider_context}
  */
  readonly seInProviderContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#tenant_access_to_provider_se Tenant#tenant_access_to_provider_se}
  */
  readonly tenantAccessToProviderSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#tenant_vrf Tenant#tenant_vrf}
  */
  readonly tenantVrf?: string;
  /**
  * license_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#license_quota Tenant#license_quota}
  */
  readonly licenseQuota?: TenantConfigSettingsLicenseQuota[] | cdktf.IResolvable;
}

export function tenantConfigSettingsToTerraform(struct?: TenantConfigSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    se_in_provider_context: cdktf.stringToTerraform(struct!.seInProviderContext),
    tenant_access_to_provider_se: cdktf.stringToTerraform(struct!.tenantAccessToProviderSe),
    tenant_vrf: cdktf.stringToTerraform(struct!.tenantVrf),
    license_quota: cdktf.listMapper(tenantConfigSettingsLicenseQuotaToTerraform, true)(struct!.licenseQuota),
  }
}


export function tenantConfigSettingsToHclTerraform(struct?: TenantConfigSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    se_in_provider_context: {
      value: cdktf.stringToHclTerraform(struct!.seInProviderContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_access_to_provider_se: {
      value: cdktf.stringToHclTerraform(struct!.tenantAccessToProviderSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_vrf: {
      value: cdktf.stringToHclTerraform(struct!.tenantVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_quota: {
      value: cdktf.listMapperHcl(tenantConfigSettingsLicenseQuotaToHclTerraform, true)(struct!.licenseQuota),
      isBlock: true,
      type: "set",
      storageClassType: "TenantConfigSettingsLicenseQuotaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantConfigSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantConfigSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seInProviderContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.seInProviderContext = this._seInProviderContext;
    }
    if (this._tenantAccessToProviderSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantAccessToProviderSe = this._tenantAccessToProviderSe;
    }
    if (this._tenantVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantVrf = this._tenantVrf;
    }
    if (this._licenseQuota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseQuota = this._licenseQuota?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantConfigSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seInProviderContext = undefined;
      this._tenantAccessToProviderSe = undefined;
      this._tenantVrf = undefined;
      this._licenseQuota.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seInProviderContext = value.seInProviderContext;
      this._tenantAccessToProviderSe = value.tenantAccessToProviderSe;
      this._tenantVrf = value.tenantVrf;
      this._licenseQuota.internalValue = value.licenseQuota;
    }
  }

  // se_in_provider_context - computed: false, optional: true, required: false
  private _seInProviderContext?: string; 
  public get seInProviderContext() {
    return this.getStringAttribute('se_in_provider_context');
  }
  public set seInProviderContext(value: string) {
    this._seInProviderContext = value;
  }
  public resetSeInProviderContext() {
    this._seInProviderContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seInProviderContextInput() {
    return this._seInProviderContext;
  }

  // tenant_access_to_provider_se - computed: false, optional: true, required: false
  private _tenantAccessToProviderSe?: string; 
  public get tenantAccessToProviderSe() {
    return this.getStringAttribute('tenant_access_to_provider_se');
  }
  public set tenantAccessToProviderSe(value: string) {
    this._tenantAccessToProviderSe = value;
  }
  public resetTenantAccessToProviderSe() {
    this._tenantAccessToProviderSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantAccessToProviderSeInput() {
    return this._tenantAccessToProviderSe;
  }

  // tenant_vrf - computed: false, optional: true, required: false
  private _tenantVrf?: string; 
  public get tenantVrf() {
    return this.getStringAttribute('tenant_vrf');
  }
  public set tenantVrf(value: string) {
    this._tenantVrf = value;
  }
  public resetTenantVrf() {
    this._tenantVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantVrfInput() {
    return this._tenantVrf;
  }

  // license_quota - computed: false, optional: true, required: false
  private _licenseQuota = new TenantConfigSettingsLicenseQuotaList(this, "license_quota", true);
  public get licenseQuota() {
    return this._licenseQuota;
  }
  public putLicenseQuota(value: TenantConfigSettingsLicenseQuota[] | cdktf.IResolvable) {
    this._licenseQuota.internalValue = value;
  }
  public resetLicenseQuota() {
    this._licenseQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseQuotaInput() {
    return this._licenseQuota.internalValue;
  }
}

export class TenantConfigSettingsList extends cdktf.ComplexList {
  public internalValue? : TenantConfigSettings[] | cdktf.IResolvable

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
  public get(index: number): TenantConfigSettingsOutputReference {
    return new TenantConfigSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#version Tenant#version}
  */
  readonly version?: string;
}

export function tenantConfigpbAttributesToTerraform(struct?: TenantConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function tenantConfigpbAttributesToHclTerraform(struct?: TenantConfigpbAttributes | cdktf.IResolvable): any {
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

export class TenantConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TenantConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class TenantConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : TenantConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): TenantConfigpbAttributesOutputReference {
    return new TenantConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant avi_tenant}
*/
export class Tenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tenant to import
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/tenant avi_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConfig
  */
  public constructor(scope: Construct, id: string, config: TenantConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_tenant',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._enforceLabelGroup = config.enforceLabelGroup;
    this._id = config.id;
    this._labelGroupRefs = config.labelGroupRefs;
    this._local = config.local;
    this._name = config.name;
    this._uuid = config.uuid;
    this._attrs.internalValue = config.attrs;
    this._configSettings.internalValue = config.configSettings;
    this._configpbAttributes.internalValue = config.configpbAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // enforce_label_group - computed: false, optional: true, required: false
  private _enforceLabelGroup?: string; 
  public get enforceLabelGroup() {
    return this.getStringAttribute('enforce_label_group');
  }
  public set enforceLabelGroup(value: string) {
    this._enforceLabelGroup = value;
  }
  public resetEnforceLabelGroup() {
    this._enforceLabelGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceLabelGroupInput() {
    return this._enforceLabelGroup;
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

  // label_group_refs - computed: false, optional: true, required: false
  private _labelGroupRefs?: string[]; 
  public get labelGroupRefs() {
    return this.getListAttribute('label_group_refs');
  }
  public set labelGroupRefs(value: string[]) {
    this._labelGroupRefs = value;
  }
  public resetLabelGroupRefs() {
    this._labelGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupRefsInput() {
    return this._labelGroupRefs;
  }

  // local - computed: false, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // attrs - computed: false, optional: true, required: false
  private _attrs = new TenantAttrsList(this, "attrs", false);
  public get attrs() {
    return this._attrs;
  }
  public putAttrs(value: TenantAttrs[] | cdktf.IResolvable) {
    this._attrs.internalValue = value;
  }
  public resetAttrs() {
    this._attrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs.internalValue;
  }

  // config_settings - computed: false, optional: true, required: false
  private _configSettings = new TenantConfigSettingsList(this, "config_settings", true);
  public get configSettings() {
    return this._configSettings;
  }
  public putConfigSettings(value: TenantConfigSettings[] | cdktf.IResolvable) {
    this._configSettings.internalValue = value;
  }
  public resetConfigSettings() {
    this._configSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSettingsInput() {
    return this._configSettings.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new TenantConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: TenantConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      enforce_label_group: cdktf.stringToTerraform(this._enforceLabelGroup),
      id: cdktf.stringToTerraform(this._id),
      label_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labelGroupRefs),
      local: cdktf.stringToTerraform(this._local),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      attrs: cdktf.listMapper(tenantAttrsToTerraform, true)(this._attrs.internalValue),
      config_settings: cdktf.listMapper(tenantConfigSettingsToTerraform, true)(this._configSettings.internalValue),
      configpb_attributes: cdktf.listMapper(tenantConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_label_group: {
        value: cdktf.stringToHclTerraform(this._enforceLabelGroup),
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
      label_group_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labelGroupRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      local: {
        value: cdktf.stringToHclTerraform(this._local),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attrs: {
        value: cdktf.listMapperHcl(tenantAttrsToHclTerraform, true)(this._attrs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantAttrsList",
      },
      config_settings: {
        value: cdktf.listMapperHcl(tenantConfigSettingsToHclTerraform, true)(this._configSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TenantConfigSettingsList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(tenantConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TenantConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
