// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#certificate_id ApigatewayGateway#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#compartment_id ApigatewayGateway#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#defined_tags ApigatewayGateway#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#display_name ApigatewayGateway#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#endpoint_type ApigatewayGateway#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#freeform_tags ApigatewayGateway#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#id ApigatewayGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#ip_mode ApigatewayGateway#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#is_lock_override ApigatewayGateway#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#network_security_group_ids ApigatewayGateway#network_security_group_ids}
  */
  readonly networkSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#subnet_id ApigatewayGateway#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ca_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#ca_bundles ApigatewayGateway#ca_bundles}
  */
  readonly caBundles?: ApigatewayGatewayCaBundles[] | cdktf.IResolvable;
  /**
  * ipv4address_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#ipv4address_configuration ApigatewayGateway#ipv4address_configuration}
  */
  readonly ipv4AddressConfiguration?: ApigatewayGatewayIpv4AddressConfiguration;
  /**
  * ipv6address_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#ipv6address_configuration ApigatewayGateway#ipv6address_configuration}
  */
  readonly ipv6AddressConfiguration?: ApigatewayGatewayIpv6AddressConfiguration;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#locks ApigatewayGateway#locks}
  */
  readonly locks?: ApigatewayGatewayLocks[] | cdktf.IResolvable;
  /**
  * response_cache_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#response_cache_details ApigatewayGateway#response_cache_details}
  */
  readonly responseCacheDetails?: ApigatewayGatewayResponseCacheDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#timeouts ApigatewayGateway#timeouts}
  */
  readonly timeouts?: ApigatewayGatewayTimeouts;
}
export interface ApigatewayGatewayIpAddresses {
}

export function apigatewayGatewayIpAddressesToTerraform(struct?: ApigatewayGatewayIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apigatewayGatewayIpAddressesToHclTerraform(struct?: ApigatewayGatewayIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigatewayGatewayIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayGatewayIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class ApigatewayGatewayIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): ApigatewayGatewayIpAddressesOutputReference {
    return new ApigatewayGatewayIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayGatewayCaBundles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#ca_bundle_id ApigatewayGateway#ca_bundle_id}
  */
  readonly caBundleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#certificate_authority_id ApigatewayGateway#certificate_authority_id}
  */
  readonly certificateAuthorityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}
  */
  readonly type: string;
}

export function apigatewayGatewayCaBundlesToTerraform(struct?: ApigatewayGatewayCaBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle_id: cdktf.stringToTerraform(struct!.caBundleId),
    certificate_authority_id: cdktf.stringToTerraform(struct!.certificateAuthorityId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayGatewayCaBundlesToHclTerraform(struct?: ApigatewayGatewayCaBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.caBundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_authority_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthorityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayGatewayCaBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayGatewayCaBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundleId = this._caBundleId;
    }
    if (this._certificateAuthorityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityId = this._certificateAuthorityId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayCaBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundleId = undefined;
      this._certificateAuthorityId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundleId = value.caBundleId;
      this._certificateAuthorityId = value.certificateAuthorityId;
      this._type = value.type;
    }
  }

  // ca_bundle_id - computed: true, optional: true, required: false
  private _caBundleId?: string; 
  public get caBundleId() {
    return this.getStringAttribute('ca_bundle_id');
  }
  public set caBundleId(value: string) {
    this._caBundleId = value;
  }
  public resetCaBundleId() {
    this._caBundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleIdInput() {
    return this._caBundleId;
  }

  // certificate_authority_id - computed: true, optional: true, required: false
  private _certificateAuthorityId?: string; 
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }
  public set certificateAuthorityId(value: string) {
    this._certificateAuthorityId = value;
  }
  public resetCertificateAuthorityId() {
    this._certificateAuthorityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityIdInput() {
    return this._certificateAuthorityId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApigatewayGatewayCaBundlesList extends cdktf.ComplexList {
  public internalValue? : ApigatewayGatewayCaBundles[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayGatewayCaBundlesOutputReference {
    return new ApigatewayGatewayCaBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayGatewayIpv4AddressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#reserved_ip_ids ApigatewayGateway#reserved_ip_ids}
  */
  readonly reservedIpIds?: string[];
}

export function apigatewayGatewayIpv4AddressConfigurationToTerraform(struct?: ApigatewayGatewayIpv4AddressConfigurationOutputReference | ApigatewayGatewayIpv4AddressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reserved_ip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reservedIpIds),
  }
}


export function apigatewayGatewayIpv4AddressConfigurationToHclTerraform(struct?: ApigatewayGatewayIpv4AddressConfigurationOutputReference | ApigatewayGatewayIpv4AddressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reserved_ip_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reservedIpIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayGatewayIpv4AddressConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayGatewayIpv4AddressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservedIpIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIpIds = this._reservedIpIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayIpv4AddressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservedIpIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservedIpIds = value.reservedIpIds;
    }
  }

  // reserved_ip_ids - computed: true, optional: true, required: false
  private _reservedIpIds?: string[]; 
  public get reservedIpIds() {
    return this.getListAttribute('reserved_ip_ids');
  }
  public set reservedIpIds(value: string[]) {
    this._reservedIpIds = value;
  }
  public resetReservedIpIds() {
    this._reservedIpIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpIdsInput() {
    return this._reservedIpIds;
  }
}
export interface ApigatewayGatewayIpv6AddressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#addresses ApigatewayGateway#addresses}
  */
  readonly addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#subnet_cidrs ApigatewayGateway#subnet_cidrs}
  */
  readonly subnetCidrs?: string[];
}

export function apigatewayGatewayIpv6AddressConfigurationToTerraform(struct?: ApigatewayGatewayIpv6AddressConfigurationOutputReference | ApigatewayGatewayIpv6AddressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    subnet_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetCidrs),
  }
}


export function apigatewayGatewayIpv6AddressConfigurationToHclTerraform(struct?: ApigatewayGatewayIpv6AddressConfigurationOutputReference | ApigatewayGatewayIpv6AddressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayGatewayIpv6AddressConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayGatewayIpv6AddressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._subnetCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrs = this._subnetCidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayIpv6AddressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addresses = undefined;
      this._subnetCidrs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addresses = value.addresses;
      this._subnetCidrs = value.subnetCidrs;
    }
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // subnet_cidrs - computed: true, optional: true, required: false
  private _subnetCidrs?: string[]; 
  public get subnetCidrs() {
    return this.getListAttribute('subnet_cidrs');
  }
  public set subnetCidrs(value: string[]) {
    this._subnetCidrs = value;
  }
  public resetSubnetCidrs() {
    this._subnetCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrsInput() {
    return this._subnetCidrs;
  }
}
export interface ApigatewayGatewayLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#message ApigatewayGateway#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}
  */
  readonly type: string;
}

export function apigatewayGatewayLocksToTerraform(struct?: ApigatewayGatewayLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayGatewayLocksToHclTerraform(struct?: ApigatewayGatewayLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayGatewayLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayGatewayLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._type = value.type;
    }
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

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApigatewayGatewayLocksList extends cdktf.ComplexList {
  public internalValue? : ApigatewayGatewayLocks[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayGatewayLocksOutputReference {
    return new ApigatewayGatewayLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayGatewayResponseCacheDetailsServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#host ApigatewayGateway#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#port ApigatewayGateway#port}
  */
  readonly port?: number;
}

export function apigatewayGatewayResponseCacheDetailsServersToTerraform(struct?: ApigatewayGatewayResponseCacheDetailsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function apigatewayGatewayResponseCacheDetailsServersToHclTerraform(struct?: ApigatewayGatewayResponseCacheDetailsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayGatewayResponseCacheDetailsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayGatewayResponseCacheDetailsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayResponseCacheDetailsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
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
}

export class ApigatewayGatewayResponseCacheDetailsServersList extends cdktf.ComplexList {
  public internalValue? : ApigatewayGatewayResponseCacheDetailsServers[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayGatewayResponseCacheDetailsServersOutputReference {
    return new ApigatewayGatewayResponseCacheDetailsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayGatewayResponseCacheDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#authentication_secret_id ApigatewayGateway#authentication_secret_id}
  */
  readonly authenticationSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#authentication_secret_version_number ApigatewayGateway#authentication_secret_version_number}
  */
  readonly authenticationSecretVersionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#connect_timeout_in_ms ApigatewayGateway#connect_timeout_in_ms}
  */
  readonly connectTimeoutInMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#is_ssl_enabled ApigatewayGateway#is_ssl_enabled}
  */
  readonly isSslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#is_ssl_verify_disabled ApigatewayGateway#is_ssl_verify_disabled}
  */
  readonly isSslVerifyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#read_timeout_in_ms ApigatewayGateway#read_timeout_in_ms}
  */
  readonly readTimeoutInMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#send_timeout_in_ms ApigatewayGateway#send_timeout_in_ms}
  */
  readonly sendTimeoutInMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}
  */
  readonly type: string;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#servers ApigatewayGateway#servers}
  */
  readonly servers?: ApigatewayGatewayResponseCacheDetailsServers[] | cdktf.IResolvable;
}

export function apigatewayGatewayResponseCacheDetailsToTerraform(struct?: ApigatewayGatewayResponseCacheDetailsOutputReference | ApigatewayGatewayResponseCacheDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_secret_id: cdktf.stringToTerraform(struct!.authenticationSecretId),
    authentication_secret_version_number: cdktf.stringToTerraform(struct!.authenticationSecretVersionNumber),
    connect_timeout_in_ms: cdktf.numberToTerraform(struct!.connectTimeoutInMs),
    is_ssl_enabled: cdktf.booleanToTerraform(struct!.isSslEnabled),
    is_ssl_verify_disabled: cdktf.booleanToTerraform(struct!.isSslVerifyDisabled),
    read_timeout_in_ms: cdktf.numberToTerraform(struct!.readTimeoutInMs),
    send_timeout_in_ms: cdktf.numberToTerraform(struct!.sendTimeoutInMs),
    type: cdktf.stringToTerraform(struct!.type),
    servers: cdktf.listMapper(apigatewayGatewayResponseCacheDetailsServersToTerraform, true)(struct!.servers),
  }
}


export function apigatewayGatewayResponseCacheDetailsToHclTerraform(struct?: ApigatewayGatewayResponseCacheDetailsOutputReference | ApigatewayGatewayResponseCacheDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.authenticationSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_secret_version_number: {
      value: cdktf.stringToHclTerraform(struct!.authenticationSecretVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout_in_ms: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_ssl_verify_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslVerifyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_timeout_in_ms: {
      value: cdktf.numberToHclTerraform(struct!.readTimeoutInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout_in_ms: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeoutInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(apigatewayGatewayResponseCacheDetailsServersToHclTerraform, true)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayGatewayResponseCacheDetailsServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayGatewayResponseCacheDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayGatewayResponseCacheDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSecretId = this._authenticationSecretId;
    }
    if (this._authenticationSecretVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSecretVersionNumber = this._authenticationSecretVersionNumber;
    }
    if (this._connectTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutInMs = this._connectTimeoutInMs;
    }
    if (this._isSslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslEnabled = this._isSslEnabled;
    }
    if (this._isSslVerifyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslVerifyDisabled = this._isSslVerifyDisabled;
    }
    if (this._readTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeoutInMs = this._readTimeoutInMs;
    }
    if (this._sendTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeoutInMs = this._sendTimeoutInMs;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayResponseCacheDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationSecretId = undefined;
      this._authenticationSecretVersionNumber = undefined;
      this._connectTimeoutInMs = undefined;
      this._isSslEnabled = undefined;
      this._isSslVerifyDisabled = undefined;
      this._readTimeoutInMs = undefined;
      this._sendTimeoutInMs = undefined;
      this._type = undefined;
      this._servers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationSecretId = value.authenticationSecretId;
      this._authenticationSecretVersionNumber = value.authenticationSecretVersionNumber;
      this._connectTimeoutInMs = value.connectTimeoutInMs;
      this._isSslEnabled = value.isSslEnabled;
      this._isSslVerifyDisabled = value.isSslVerifyDisabled;
      this._readTimeoutInMs = value.readTimeoutInMs;
      this._sendTimeoutInMs = value.sendTimeoutInMs;
      this._type = value.type;
      this._servers.internalValue = value.servers;
    }
  }

  // authentication_secret_id - computed: true, optional: true, required: false
  private _authenticationSecretId?: string; 
  public get authenticationSecretId() {
    return this.getStringAttribute('authentication_secret_id');
  }
  public set authenticationSecretId(value: string) {
    this._authenticationSecretId = value;
  }
  public resetAuthenticationSecretId() {
    this._authenticationSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSecretIdInput() {
    return this._authenticationSecretId;
  }

  // authentication_secret_version_number - computed: true, optional: true, required: false
  private _authenticationSecretVersionNumber?: string; 
  public get authenticationSecretVersionNumber() {
    return this.getStringAttribute('authentication_secret_version_number');
  }
  public set authenticationSecretVersionNumber(value: string) {
    this._authenticationSecretVersionNumber = value;
  }
  public resetAuthenticationSecretVersionNumber() {
    this._authenticationSecretVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSecretVersionNumberInput() {
    return this._authenticationSecretVersionNumber;
  }

  // connect_timeout_in_ms - computed: true, optional: true, required: false
  private _connectTimeoutInMs?: number; 
  public get connectTimeoutInMs() {
    return this.getNumberAttribute('connect_timeout_in_ms');
  }
  public set connectTimeoutInMs(value: number) {
    this._connectTimeoutInMs = value;
  }
  public resetConnectTimeoutInMs() {
    this._connectTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInMsInput() {
    return this._connectTimeoutInMs;
  }

  // is_ssl_enabled - computed: true, optional: true, required: false
  private _isSslEnabled?: boolean | cdktf.IResolvable; 
  public get isSslEnabled() {
    return this.getBooleanAttribute('is_ssl_enabled');
  }
  public set isSslEnabled(value: boolean | cdktf.IResolvable) {
    this._isSslEnabled = value;
  }
  public resetIsSslEnabled() {
    this._isSslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslEnabledInput() {
    return this._isSslEnabled;
  }

  // is_ssl_verify_disabled - computed: true, optional: true, required: false
  private _isSslVerifyDisabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }
  public set isSslVerifyDisabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyDisabled = value;
  }
  public resetIsSslVerifyDisabled() {
    this._isSslVerifyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyDisabledInput() {
    return this._isSslVerifyDisabled;
  }

  // read_timeout_in_ms - computed: true, optional: true, required: false
  private _readTimeoutInMs?: number; 
  public get readTimeoutInMs() {
    return this.getNumberAttribute('read_timeout_in_ms');
  }
  public set readTimeoutInMs(value: number) {
    this._readTimeoutInMs = value;
  }
  public resetReadTimeoutInMs() {
    this._readTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInMsInput() {
    return this._readTimeoutInMs;
  }

  // send_timeout_in_ms - computed: true, optional: true, required: false
  private _sendTimeoutInMs?: number; 
  public get sendTimeoutInMs() {
    return this.getNumberAttribute('send_timeout_in_ms');
  }
  public set sendTimeoutInMs(value: number) {
    this._sendTimeoutInMs = value;
  }
  public resetSendTimeoutInMs() {
    this._sendTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInMsInput() {
    return this._sendTimeoutInMs;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new ApigatewayGatewayResponseCacheDetailsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: ApigatewayGatewayResponseCacheDetailsServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}
export interface ApigatewayGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#create ApigatewayGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#delete ApigatewayGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#update ApigatewayGateway#update}
  */
  readonly update?: string;
}

export function apigatewayGatewayTimeoutsToTerraform(struct?: ApigatewayGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apigatewayGatewayTimeoutsToHclTerraform(struct?: ApigatewayGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigatewayGatewayTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway oci_apigateway_gateway}
*/
export class ApigatewayGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apigateway_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigatewayGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigatewayGateway to import
  * @param importFromId The id of the existing ApigatewayGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigatewayGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apigateway_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/apigateway_gateway oci_apigateway_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ApigatewayGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apigateway_gateway',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._endpointType = config.endpointType;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._ipMode = config.ipMode;
    this._isLockOverride = config.isLockOverride;
    this._networkSecurityGroupIds = config.networkSecurityGroupIds;
    this._subnetId = config.subnetId;
    this._caBundles.internalValue = config.caBundles;
    this._ipv4AddressConfiguration.internalValue = config.ipv4AddressConfiguration;
    this._ipv6AddressConfiguration.internalValue = config.ipv6AddressConfiguration;
    this._locks.internalValue = config.locks;
    this._responseCacheDetails.internalValue = config.responseCacheDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // ip_addresses - computed: true, optional: false, required: false
  private _ipAddresses = new ApigatewayGatewayIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }

  // ip_mode - computed: true, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // network_security_group_ids - computed: true, optional: true, required: false
  private _networkSecurityGroupIds?: string[]; 
  public get networkSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_security_group_ids'));
  }
  public set networkSecurityGroupIds(value: string[]) {
    this._networkSecurityGroupIds = value;
  }
  public resetNetworkSecurityGroupIds() {
    this._networkSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdsInput() {
    return this._networkSecurityGroupIds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // ca_bundles - computed: false, optional: true, required: false
  private _caBundles = new ApigatewayGatewayCaBundlesList(this, "ca_bundles", false);
  public get caBundles() {
    return this._caBundles;
  }
  public putCaBundles(value: ApigatewayGatewayCaBundles[] | cdktf.IResolvable) {
    this._caBundles.internalValue = value;
  }
  public resetCaBundles() {
    this._caBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundlesInput() {
    return this._caBundles.internalValue;
  }

  // ipv4address_configuration - computed: false, optional: true, required: false
  private _ipv4AddressConfiguration = new ApigatewayGatewayIpv4AddressConfigurationOutputReference(this, "ipv4address_configuration");
  public get ipv4AddressConfiguration() {
    return this._ipv4AddressConfiguration;
  }
  public putIpv4AddressConfiguration(value: ApigatewayGatewayIpv4AddressConfiguration) {
    this._ipv4AddressConfiguration.internalValue = value;
  }
  public resetIpv4AddressConfiguration() {
    this._ipv4AddressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressConfigurationInput() {
    return this._ipv4AddressConfiguration.internalValue;
  }

  // ipv6address_configuration - computed: false, optional: true, required: false
  private _ipv6AddressConfiguration = new ApigatewayGatewayIpv6AddressConfigurationOutputReference(this, "ipv6address_configuration");
  public get ipv6AddressConfiguration() {
    return this._ipv6AddressConfiguration;
  }
  public putIpv6AddressConfiguration(value: ApigatewayGatewayIpv6AddressConfiguration) {
    this._ipv6AddressConfiguration.internalValue = value;
  }
  public resetIpv6AddressConfiguration() {
    this._ipv6AddressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressConfigurationInput() {
    return this._ipv6AddressConfiguration.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new ApigatewayGatewayLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: ApigatewayGatewayLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // response_cache_details - computed: false, optional: true, required: false
  private _responseCacheDetails = new ApigatewayGatewayResponseCacheDetailsOutputReference(this, "response_cache_details");
  public get responseCacheDetails() {
    return this._responseCacheDetails;
  }
  public putResponseCacheDetails(value: ApigatewayGatewayResponseCacheDetails) {
    this._responseCacheDetails.internalValue = value;
  }
  public resetResponseCacheDetails() {
    this._responseCacheDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheDetailsInput() {
    return this._responseCacheDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigatewayGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigatewayGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ip_mode: cdktf.stringToTerraform(this._ipMode),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      network_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkSecurityGroupIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      ca_bundles: cdktf.listMapper(apigatewayGatewayCaBundlesToTerraform, true)(this._caBundles.internalValue),
      ipv4address_configuration: apigatewayGatewayIpv4AddressConfigurationToTerraform(this._ipv4AddressConfiguration.internalValue),
      ipv6address_configuration: apigatewayGatewayIpv6AddressConfigurationToTerraform(this._ipv6AddressConfiguration.internalValue),
      locks: cdktf.listMapper(apigatewayGatewayLocksToTerraform, true)(this._locks.internalValue),
      response_cache_details: apigatewayGatewayResponseCacheDetailsToTerraform(this._responseCacheDetails.internalValue),
      timeouts: apigatewayGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mode: {
        value: cdktf.stringToHclTerraform(this._ipMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_bundles: {
        value: cdktf.listMapperHcl(apigatewayGatewayCaBundlesToHclTerraform, true)(this._caBundles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigatewayGatewayCaBundlesList",
      },
      ipv4address_configuration: {
        value: apigatewayGatewayIpv4AddressConfigurationToHclTerraform(this._ipv4AddressConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigatewayGatewayIpv4AddressConfigurationList",
      },
      ipv6address_configuration: {
        value: apigatewayGatewayIpv6AddressConfigurationToHclTerraform(this._ipv6AddressConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigatewayGatewayIpv6AddressConfigurationList",
      },
      locks: {
        value: cdktf.listMapperHcl(apigatewayGatewayLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigatewayGatewayLocksList",
      },
      response_cache_details: {
        value: apigatewayGatewayResponseCacheDetailsToHclTerraform(this._responseCacheDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigatewayGatewayResponseCacheDetailsList",
      },
      timeouts: {
        value: apigatewayGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigatewayGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
