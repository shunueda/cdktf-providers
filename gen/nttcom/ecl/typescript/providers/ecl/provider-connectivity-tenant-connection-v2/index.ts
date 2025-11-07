// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderConnectivityTenantConnectionV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#description ProviderConnectivityTenantConnectionV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#device_id ProviderConnectivityTenantConnectionV2#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#device_interface_id ProviderConnectivityTenantConnectionV2#device_interface_id}
  */
  readonly deviceInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#device_type ProviderConnectivityTenantConnectionV2#device_type}
  */
  readonly deviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#id ProviderConnectivityTenantConnectionV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#name ProviderConnectivityTenantConnectionV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#tags ProviderConnectivityTenantConnectionV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#tenant_connection_request_id ProviderConnectivityTenantConnectionV2#tenant_connection_request_id}
  */
  readonly tenantConnectionRequestId: string;
  /**
  * attachment_opts_baremetal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#attachment_opts_baremetal ProviderConnectivityTenantConnectionV2#attachment_opts_baremetal}
  */
  readonly attachmentOptsBaremetal?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetal;
  /**
  * attachment_opts_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#attachment_opts_compute ProviderConnectivityTenantConnectionV2#attachment_opts_compute}
  */
  readonly attachmentOptsCompute?: ProviderConnectivityTenantConnectionV2AttachmentOptsCompute;
  /**
  * attachment_opts_vna block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#attachment_opts_vna ProviderConnectivityTenantConnectionV2#attachment_opts_vna}
  */
  readonly attachmentOptsVna?: ProviderConnectivityTenantConnectionV2AttachmentOptsVna;
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#ip_address ProviderConnectivityTenantConnectionV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#mac_address ProviderConnectivityTenantConnectionV2#mac_address}
  */
  readonly macAddress?: string;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsOutputReference {
    return new ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#ip_address ProviderConnectivityTenantConnectionV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#subnet_id ProviderConnectivityTenantConnectionV2#subnet_id}
  */
  readonly subnetId?: string;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._subnetId = value.subnetId;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsList extends cdktf.ComplexList {
  public internalValue? : ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps[] | cdktf.IResolvable

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
  public get(index: number): ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsOutputReference {
    return new ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#segmentation_id ProviderConnectivityTenantConnectionV2#segmentation_id}
  */
  readonly segmentationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#segmentation_type ProviderConnectivityTenantConnectionV2#segmentation_type}
  */
  readonly segmentationType?: string;
  /**
  * allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#allowed_address_pairs ProviderConnectivityTenantConnectionV2#allowed_address_pairs}
  */
  readonly allowedAddressPairs?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#fixed_ips ProviderConnectivityTenantConnectionV2#fixed_ips}
  */
  readonly fixedIps?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps[] | cdktf.IResolvable;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsBaremetalToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalOutputReference | ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segmentation_id: cdktf.numberToTerraform(struct!.segmentationId),
    segmentation_type: cdktf.stringToTerraform(struct!.segmentationType),
    allowed_address_pairs: cdktf.listMapper(providerConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsToTerraform, true)(struct!.allowedAddressPairs),
    fixed_ips: cdktf.listMapper(providerConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsToTerraform, true)(struct!.fixedIps),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsBaremetalToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalOutputReference | ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segmentation_id: {
      value: cdktf.numberToHclTerraform(struct!.segmentationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segmentation_type: {
      value: cdktf.stringToHclTerraform(struct!.segmentationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_address_pairs: {
      value: cdktf.listMapperHcl(providerConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsToHclTerraform, true)(struct!.allowedAddressPairs),
      isBlock: true,
      type: "list",
      storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsList",
    },
    fixed_ips: {
      value: cdktf.listMapperHcl(providerConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsToHclTerraform, true)(struct!.fixedIps),
      isBlock: true,
      type: "list",
      storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationId = this._segmentationId;
    }
    if (this._segmentationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationType = this._segmentationType;
    }
    if (this._allowedAddressPairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAddressPairs = this._allowedAddressPairs?.internalValue;
    }
    if (this._fixedIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIps = this._fixedIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segmentationId = undefined;
      this._segmentationType = undefined;
      this._allowedAddressPairs.internalValue = undefined;
      this._fixedIps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segmentationId = value.segmentationId;
      this._segmentationType = value.segmentationType;
      this._allowedAddressPairs.internalValue = value.allowedAddressPairs;
      this._fixedIps.internalValue = value.fixedIps;
    }
  }

  // segmentation_id - computed: false, optional: true, required: false
  private _segmentationId?: number; 
  public get segmentationId() {
    return this.getNumberAttribute('segmentation_id');
  }
  public set segmentationId(value: number) {
    this._segmentationId = value;
  }
  public resetSegmentationId() {
    this._segmentationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationIdInput() {
    return this._segmentationId;
  }

  // segmentation_type - computed: false, optional: true, required: false
  private _segmentationType?: string; 
  public get segmentationType() {
    return this.getStringAttribute('segmentation_type');
  }
  public set segmentationType(value: string) {
    this._segmentationType = value;
  }
  public resetSegmentationType() {
    this._segmentationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationTypeInput() {
    return this._segmentationType;
  }

  // allowed_address_pairs - computed: false, optional: true, required: false
  private _allowedAddressPairs = new ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairsList(this, "allowed_address_pairs", false);
  public get allowedAddressPairs() {
    return this._allowedAddressPairs;
  }
  public putAllowedAddressPairs(value: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalAllowedAddressPairs[] | cdktf.IResolvable) {
    this._allowedAddressPairs.internalValue = value;
  }
  public resetAllowedAddressPairs() {
    this._allowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddressPairsInput() {
    return this._allowedAddressPairs.internalValue;
  }

  // fixed_ips - computed: false, optional: true, required: false
  private _fixedIps = new ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIpsList(this, "fixed_ips", false);
  public get fixedIps() {
    return this._fixedIps;
  }
  public putFixedIps(value: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalFixedIps[] | cdktf.IResolvable) {
    this._fixedIps.internalValue = value;
  }
  public resetFixedIps() {
    this._fixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpsInput() {
    return this._fixedIps.internalValue;
  }
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#ip_address ProviderConnectivityTenantConnectionV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#mac_address ProviderConnectivityTenantConnectionV2#mac_address}
  */
  readonly macAddress?: string;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsOutputReference {
    return new ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#ip_address ProviderConnectivityTenantConnectionV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#subnet_id ProviderConnectivityTenantConnectionV2#subnet_id}
  */
  readonly subnetId?: string;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._subnetId = value.subnetId;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsList extends cdktf.ComplexList {
  public internalValue? : ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps[] | cdktf.IResolvable

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
  public get(index: number): ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsOutputReference {
    return new ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsCompute {
  /**
  * allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#allowed_address_pairs ProviderConnectivityTenantConnectionV2#allowed_address_pairs}
  */
  readonly allowedAddressPairs?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#fixed_ips ProviderConnectivityTenantConnectionV2#fixed_ips}
  */
  readonly fixedIps?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps[] | cdktf.IResolvable;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsComputeToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeOutputReference | ProviderConnectivityTenantConnectionV2AttachmentOptsCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_address_pairs: cdktf.listMapper(providerConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsToTerraform, true)(struct!.allowedAddressPairs),
    fixed_ips: cdktf.listMapper(providerConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsToTerraform, true)(struct!.fixedIps),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsComputeToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeOutputReference | ProviderConnectivityTenantConnectionV2AttachmentOptsCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_address_pairs: {
      value: cdktf.listMapperHcl(providerConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsToHclTerraform, true)(struct!.allowedAddressPairs),
      isBlock: true,
      type: "list",
      storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsList",
    },
    fixed_ips: {
      value: cdktf.listMapperHcl(providerConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsToHclTerraform, true)(struct!.fixedIps),
      isBlock: true,
      type: "list",
      storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAddressPairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAddressPairs = this._allowedAddressPairs?.internalValue;
    }
    if (this._fixedIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIps = this._fixedIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAddressPairs.internalValue = undefined;
      this._fixedIps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAddressPairs.internalValue = value.allowedAddressPairs;
      this._fixedIps.internalValue = value.fixedIps;
    }
  }

  // allowed_address_pairs - computed: false, optional: true, required: false
  private _allowedAddressPairs = new ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairsList(this, "allowed_address_pairs", false);
  public get allowedAddressPairs() {
    return this._allowedAddressPairs;
  }
  public putAllowedAddressPairs(value: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeAllowedAddressPairs[] | cdktf.IResolvable) {
    this._allowedAddressPairs.internalValue = value;
  }
  public resetAllowedAddressPairs() {
    this._allowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddressPairsInput() {
    return this._allowedAddressPairs.internalValue;
  }

  // fixed_ips - computed: false, optional: true, required: false
  private _fixedIps = new ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIpsList(this, "fixed_ips", false);
  public get fixedIps() {
    return this._fixedIps;
  }
  public putFixedIps(value: ProviderConnectivityTenantConnectionV2AttachmentOptsComputeFixedIps[] | cdktf.IResolvable) {
    this._fixedIps.internalValue = value;
  }
  public resetFixedIps() {
    this._fixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpsInput() {
    return this._fixedIps.internalValue;
  }
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#ip_address ProviderConnectivityTenantConnectionV2#ip_address}
  */
  readonly ipAddress?: string;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsList extends cdktf.ComplexList {
  public internalValue? : ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps[] | cdktf.IResolvable

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
  public get(index: number): ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsOutputReference {
    return new ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProviderConnectivityTenantConnectionV2AttachmentOptsVna {
  /**
  * fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#fixed_ips ProviderConnectivityTenantConnectionV2#fixed_ips}
  */
  readonly fixedIps?: ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps[] | cdktf.IResolvable;
}

export function providerConnectivityTenantConnectionV2AttachmentOptsVnaToTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsVnaOutputReference | ProviderConnectivityTenantConnectionV2AttachmentOptsVna): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_ips: cdktf.listMapper(providerConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsToTerraform, true)(struct!.fixedIps),
  }
}


export function providerConnectivityTenantConnectionV2AttachmentOptsVnaToHclTerraform(struct?: ProviderConnectivityTenantConnectionV2AttachmentOptsVnaOutputReference | ProviderConnectivityTenantConnectionV2AttachmentOptsVna): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_ips: {
      value: cdktf.listMapperHcl(providerConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsToHclTerraform, true)(struct!.fixedIps),
      isBlock: true,
      type: "list",
      storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderConnectivityTenantConnectionV2AttachmentOptsVnaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderConnectivityTenantConnectionV2AttachmentOptsVna | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIps = this._fixedIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderConnectivityTenantConnectionV2AttachmentOptsVna | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedIps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedIps.internalValue = value.fixedIps;
    }
  }

  // fixed_ips - computed: false, optional: true, required: false
  private _fixedIps = new ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIpsList(this, "fixed_ips", false);
  public get fixedIps() {
    return this._fixedIps;
  }
  public putFixedIps(value: ProviderConnectivityTenantConnectionV2AttachmentOptsVnaFixedIps[] | cdktf.IResolvable) {
    this._fixedIps.internalValue = value;
  }
  public resetFixedIps() {
    this._fixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpsInput() {
    return this._fixedIps.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2 ecl_provider_connectivity_tenant_connection_v2}
*/
export class ProviderConnectivityTenantConnectionV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_provider_connectivity_tenant_connection_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderConnectivityTenantConnectionV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderConnectivityTenantConnectionV2 to import
  * @param importFromId The id of the existing ProviderConnectivityTenantConnectionV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderConnectivityTenantConnectionV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_provider_connectivity_tenant_connection_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/provider_connectivity_tenant_connection_v2 ecl_provider_connectivity_tenant_connection_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderConnectivityTenantConnectionV2Config
  */
  public constructor(scope: Construct, id: string, config: ProviderConnectivityTenantConnectionV2Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_provider_connectivity_tenant_connection_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._deviceInterfaceId = config.deviceInterfaceId;
    this._deviceType = config.deviceType;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tenantConnectionRequestId = config.tenantConnectionRequestId;
    this._attachmentOptsBaremetal.internalValue = config.attachmentOptsBaremetal;
    this._attachmentOptsCompute.internalValue = config.attachmentOptsCompute;
    this._attachmentOptsVna.internalValue = config.attachmentOptsVna;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // device_interface_id - computed: false, optional: true, required: false
  private _deviceInterfaceId?: string; 
  public get deviceInterfaceId() {
    return this.getStringAttribute('device_interface_id');
  }
  public set deviceInterfaceId(value: string) {
    this._deviceInterfaceId = value;
  }
  public resetDeviceInterfaceId() {
    this._deviceInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInterfaceIdInput() {
    return this._deviceInterfaceId;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_connection_request_id - computed: false, optional: false, required: true
  private _tenantConnectionRequestId?: string; 
  public get tenantConnectionRequestId() {
    return this.getStringAttribute('tenant_connection_request_id');
  }
  public set tenantConnectionRequestId(value: string) {
    this._tenantConnectionRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantConnectionRequestIdInput() {
    return this._tenantConnectionRequestId;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_id_other - computed: true, optional: false, required: false
  public get tenantIdOther() {
    return this.getStringAttribute('tenant_id_other');
  }

  // attachment_opts_baremetal - computed: false, optional: true, required: false
  private _attachmentOptsBaremetal = new ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalOutputReference(this, "attachment_opts_baremetal");
  public get attachmentOptsBaremetal() {
    return this._attachmentOptsBaremetal;
  }
  public putAttachmentOptsBaremetal(value: ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetal) {
    this._attachmentOptsBaremetal.internalValue = value;
  }
  public resetAttachmentOptsBaremetal() {
    this._attachmentOptsBaremetal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentOptsBaremetalInput() {
    return this._attachmentOptsBaremetal.internalValue;
  }

  // attachment_opts_compute - computed: false, optional: true, required: false
  private _attachmentOptsCompute = new ProviderConnectivityTenantConnectionV2AttachmentOptsComputeOutputReference(this, "attachment_opts_compute");
  public get attachmentOptsCompute() {
    return this._attachmentOptsCompute;
  }
  public putAttachmentOptsCompute(value: ProviderConnectivityTenantConnectionV2AttachmentOptsCompute) {
    this._attachmentOptsCompute.internalValue = value;
  }
  public resetAttachmentOptsCompute() {
    this._attachmentOptsCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentOptsComputeInput() {
    return this._attachmentOptsCompute.internalValue;
  }

  // attachment_opts_vna - computed: false, optional: true, required: false
  private _attachmentOptsVna = new ProviderConnectivityTenantConnectionV2AttachmentOptsVnaOutputReference(this, "attachment_opts_vna");
  public get attachmentOptsVna() {
    return this._attachmentOptsVna;
  }
  public putAttachmentOptsVna(value: ProviderConnectivityTenantConnectionV2AttachmentOptsVna) {
    this._attachmentOptsVna.internalValue = value;
  }
  public resetAttachmentOptsVna() {
    this._attachmentOptsVna.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentOptsVnaInput() {
    return this._attachmentOptsVna.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.stringToTerraform(this._deviceId),
      device_interface_id: cdktf.stringToTerraform(this._deviceInterfaceId),
      device_type: cdktf.stringToTerraform(this._deviceType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_connection_request_id: cdktf.stringToTerraform(this._tenantConnectionRequestId),
      attachment_opts_baremetal: providerConnectivityTenantConnectionV2AttachmentOptsBaremetalToTerraform(this._attachmentOptsBaremetal.internalValue),
      attachment_opts_compute: providerConnectivityTenantConnectionV2AttachmentOptsComputeToTerraform(this._attachmentOptsCompute.internalValue),
      attachment_opts_vna: providerConnectivityTenantConnectionV2AttachmentOptsVnaToTerraform(this._attachmentOptsVna.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_interface_id: {
        value: cdktf.stringToHclTerraform(this._deviceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_connection_request_id: {
        value: cdktf.stringToHclTerraform(this._tenantConnectionRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment_opts_baremetal: {
        value: providerConnectivityTenantConnectionV2AttachmentOptsBaremetalToHclTerraform(this._attachmentOptsBaremetal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsBaremetalList",
      },
      attachment_opts_compute: {
        value: providerConnectivityTenantConnectionV2AttachmentOptsComputeToHclTerraform(this._attachmentOptsCompute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsComputeList",
      },
      attachment_opts_vna: {
        value: providerConnectivityTenantConnectionV2AttachmentOptsVnaToHclTerraform(this._attachmentOptsVna.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderConnectivityTenantConnectionV2AttachmentOptsVnaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
