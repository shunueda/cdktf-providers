// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#application_persistence_profile_ref Gslbservice#application_persistence_profile_ref}
  */
  readonly applicationPersistenceProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#controller_health_status_enabled Gslbservice#controller_health_status_enabled}
  */
  readonly controllerHealthStatusEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#created_by Gslbservice#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#description Gslbservice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#domain_names Gslbservice#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#enabled Gslbservice#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#health_monitor_refs Gslbservice#health_monitor_refs}
  */
  readonly healthMonitorRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#health_monitor_scope Gslbservice#health_monitor_scope}
  */
  readonly healthMonitorScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#hm_off Gslbservice#hm_off}
  */
  readonly hmOff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#id Gslbservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#include_additional_records Gslbservice#include_additional_records}
  */
  readonly includeAdditionalRecords?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#is_federated Gslbservice#is_federated}
  */
  readonly isFederated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#min_members Gslbservice#min_members}
  */
  readonly minMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#name Gslbservice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#num_dns_ip Gslbservice#num_dns_ip}
  */
  readonly numDnsIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#pki_profile_ref Gslbservice#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#pool_algorithm Gslbservice#pool_algorithm}
  */
  readonly poolAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#record_type Gslbservice#record_type}
  */
  readonly recordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#resolve_cname Gslbservice#resolve_cname}
  */
  readonly resolveCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#site_persistence_enabled Gslbservice#site_persistence_enabled}
  */
  readonly sitePersistenceEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#tenant_ref Gslbservice#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#topology_policy_enabled Gslbservice#topology_policy_enabled}
  */
  readonly topologyPolicyEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#ttl Gslbservice#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#use_edns_client_subnet Gslbservice#use_edns_client_subnet}
  */
  readonly useEdnsClientSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#uuid Gslbservice#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#vrf_uuid_for_gs Gslbservice#vrf_uuid_for_gs}
  */
  readonly vrfUuidForGs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#wildcard_match Gslbservice#wildcard_match}
  */
  readonly wildcardMatch?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#configpb_attributes Gslbservice#configpb_attributes}
  */
  readonly configpbAttributes?: GslbserviceConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * down_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#down_response Gslbservice#down_response}
  */
  readonly downResponse?: GslbserviceDownResponse[] | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#groups Gslbservice#groups}
  */
  readonly groups: GslbserviceGroups[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#markers Gslbservice#markers}
  */
  readonly markers?: GslbserviceMarkers[] | cdktf.IResolvable;
}
export interface GslbserviceConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#version Gslbservice#version}
  */
  readonly version?: string;
}

export function gslbserviceConfigpbAttributesToTerraform(struct?: GslbserviceConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function gslbserviceConfigpbAttributesToHclTerraform(struct?: GslbserviceConfigpbAttributes | cdktf.IResolvable): any {
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

export class GslbserviceConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbserviceConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class GslbserviceConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : GslbserviceConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceConfigpbAttributesOutputReference {
    return new GslbserviceConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceDownResponseFallbackIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#addr Gslbservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#type Gslbservice#type}
  */
  readonly type: string;
}

export function gslbserviceDownResponseFallbackIpToTerraform(struct?: GslbserviceDownResponseFallbackIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbserviceDownResponseFallbackIpToHclTerraform(struct?: GslbserviceDownResponseFallbackIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbserviceDownResponseFallbackIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceDownResponseFallbackIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceDownResponseFallbackIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class GslbserviceDownResponseFallbackIpList extends cdktf.ComplexList {
  public internalValue? : GslbserviceDownResponseFallbackIp[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceDownResponseFallbackIpOutputReference {
    return new GslbserviceDownResponseFallbackIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceDownResponseFallbackIp6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#addr Gslbservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#type Gslbservice#type}
  */
  readonly type: string;
}

export function gslbserviceDownResponseFallbackIp6ToTerraform(struct?: GslbserviceDownResponseFallbackIp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbserviceDownResponseFallbackIp6ToHclTerraform(struct?: GslbserviceDownResponseFallbackIp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbserviceDownResponseFallbackIp6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceDownResponseFallbackIp6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceDownResponseFallbackIp6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class GslbserviceDownResponseFallbackIp6List extends cdktf.ComplexList {
  public internalValue? : GslbserviceDownResponseFallbackIp6[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceDownResponseFallbackIp6OutputReference {
    return new GslbserviceDownResponseFallbackIp6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceDownResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#fallback_cname Gslbservice#fallback_cname}
  */
  readonly fallbackCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#type Gslbservice#type}
  */
  readonly type?: string;
  /**
  * fallback_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#fallback_ip Gslbservice#fallback_ip}
  */
  readonly fallbackIp?: GslbserviceDownResponseFallbackIp[] | cdktf.IResolvable;
  /**
  * fallback_ip6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#fallback_ip6 Gslbservice#fallback_ip6}
  */
  readonly fallbackIp6?: GslbserviceDownResponseFallbackIp6[] | cdktf.IResolvable;
}

export function gslbserviceDownResponseToTerraform(struct?: GslbserviceDownResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_cname: cdktf.stringToTerraform(struct!.fallbackCname),
    type: cdktf.stringToTerraform(struct!.type),
    fallback_ip: cdktf.listMapper(gslbserviceDownResponseFallbackIpToTerraform, true)(struct!.fallbackIp),
    fallback_ip6: cdktf.listMapper(gslbserviceDownResponseFallbackIp6ToTerraform, true)(struct!.fallbackIp6),
  }
}


export function gslbserviceDownResponseToHclTerraform(struct?: GslbserviceDownResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_cname: {
      value: cdktf.stringToHclTerraform(struct!.fallbackCname),
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
    fallback_ip: {
      value: cdktf.listMapperHcl(gslbserviceDownResponseFallbackIpToHclTerraform, true)(struct!.fallbackIp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceDownResponseFallbackIpList",
    },
    fallback_ip6: {
      value: cdktf.listMapperHcl(gslbserviceDownResponseFallbackIp6ToHclTerraform, true)(struct!.fallbackIp6),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceDownResponseFallbackIp6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceDownResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceDownResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackCname = this._fallbackCname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._fallbackIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackIp = this._fallbackIp?.internalValue;
    }
    if (this._fallbackIp6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackIp6 = this._fallbackIp6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceDownResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackCname = undefined;
      this._type = undefined;
      this._fallbackIp.internalValue = undefined;
      this._fallbackIp6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackCname = value.fallbackCname;
      this._type = value.type;
      this._fallbackIp.internalValue = value.fallbackIp;
      this._fallbackIp6.internalValue = value.fallbackIp6;
    }
  }

  // fallback_cname - computed: true, optional: true, required: false
  private _fallbackCname?: string; 
  public get fallbackCname() {
    return this.getStringAttribute('fallback_cname');
  }
  public set fallbackCname(value: string) {
    this._fallbackCname = value;
  }
  public resetFallbackCname() {
    this._fallbackCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackCnameInput() {
    return this._fallbackCname;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // fallback_ip - computed: false, optional: true, required: false
  private _fallbackIp = new GslbserviceDownResponseFallbackIpList(this, "fallback_ip", true);
  public get fallbackIp() {
    return this._fallbackIp;
  }
  public putFallbackIp(value: GslbserviceDownResponseFallbackIp[] | cdktf.IResolvable) {
    this._fallbackIp.internalValue = value;
  }
  public resetFallbackIp() {
    this._fallbackIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackIpInput() {
    return this._fallbackIp.internalValue;
  }

  // fallback_ip6 - computed: false, optional: true, required: false
  private _fallbackIp6 = new GslbserviceDownResponseFallbackIp6List(this, "fallback_ip6", true);
  public get fallbackIp6() {
    return this._fallbackIp6;
  }
  public putFallbackIp6(value: GslbserviceDownResponseFallbackIp6[] | cdktf.IResolvable) {
    this._fallbackIp6.internalValue = value;
  }
  public resetFallbackIp6() {
    this._fallbackIp6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackIp6Input() {
    return this._fallbackIp6.internalValue;
  }
}

export class GslbserviceDownResponseList extends cdktf.ComplexList {
  public internalValue? : GslbserviceDownResponse[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceDownResponseOutputReference {
    return new GslbserviceDownResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroupsMembersIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#addr Gslbservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#type Gslbservice#type}
  */
  readonly type: string;
}

export function gslbserviceGroupsMembersIpToTerraform(struct?: GslbserviceGroupsMembersIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbserviceGroupsMembersIpToHclTerraform(struct?: GslbserviceGroupsMembersIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbserviceGroupsMembersIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroupsMembersIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroupsMembersIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class GslbserviceGroupsMembersIpList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroupsMembersIp[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsMembersIpOutputReference {
    return new GslbserviceGroupsMembersIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroupsMembersLocationLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#latitude Gslbservice#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#longitude Gslbservice#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#name Gslbservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#tag Gslbservice#tag}
  */
  readonly tag?: string;
}

export function gslbserviceGroupsMembersLocationLocationToTerraform(struct?: GslbserviceGroupsMembersLocationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function gslbserviceGroupsMembersLocationLocationToHclTerraform(struct?: GslbserviceGroupsMembersLocationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
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
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceGroupsMembersLocationLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroupsMembersLocationLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroupsMembersLocationLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
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

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class GslbserviceGroupsMembersLocationLocationList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroupsMembersLocationLocation[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsMembersLocationLocationOutputReference {
    return new GslbserviceGroupsMembersLocationLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroupsMembersLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#source Gslbservice#source}
  */
  readonly source: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#location Gslbservice#location}
  */
  readonly location?: GslbserviceGroupsMembersLocationLocation[] | cdktf.IResolvable;
}

export function gslbserviceGroupsMembersLocationToTerraform(struct?: GslbserviceGroupsMembersLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    location: cdktf.listMapper(gslbserviceGroupsMembersLocationLocationToTerraform, true)(struct!.location),
  }
}


export function gslbserviceGroupsMembersLocationToHclTerraform(struct?: GslbserviceGroupsMembersLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.listMapperHcl(gslbserviceGroupsMembersLocationLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceGroupsMembersLocationLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceGroupsMembersLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroupsMembersLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroupsMembersLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._location.internalValue = value.location;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GslbserviceGroupsMembersLocationLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: GslbserviceGroupsMembersLocationLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}

export class GslbserviceGroupsMembersLocationList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroupsMembersLocation[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsMembersLocationOutputReference {
    return new GslbserviceGroupsMembersLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroupsMembersPublicIpIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#addr Gslbservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#type Gslbservice#type}
  */
  readonly type: string;
}

export function gslbserviceGroupsMembersPublicIpIpToTerraform(struct?: GslbserviceGroupsMembersPublicIpIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbserviceGroupsMembersPublicIpIpToHclTerraform(struct?: GslbserviceGroupsMembersPublicIpIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbserviceGroupsMembersPublicIpIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroupsMembersPublicIpIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroupsMembersPublicIpIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class GslbserviceGroupsMembersPublicIpIpList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroupsMembersPublicIpIp[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsMembersPublicIpIpOutputReference {
    return new GslbserviceGroupsMembersPublicIpIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroupsMembersPublicIp {
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#ip Gslbservice#ip}
  */
  readonly ip?: GslbserviceGroupsMembersPublicIpIp[] | cdktf.IResolvable;
}

export function gslbserviceGroupsMembersPublicIpToTerraform(struct?: GslbserviceGroupsMembersPublicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.listMapper(gslbserviceGroupsMembersPublicIpIpToTerraform, true)(struct!.ip),
  }
}


export function gslbserviceGroupsMembersPublicIpToHclTerraform(struct?: GslbserviceGroupsMembersPublicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.listMapperHcl(gslbserviceGroupsMembersPublicIpIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceGroupsMembersPublicIpIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceGroupsMembersPublicIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroupsMembersPublicIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroupsMembersPublicIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip.internalValue = value.ip;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new GslbserviceGroupsMembersPublicIpIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: GslbserviceGroupsMembersPublicIpIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class GslbserviceGroupsMembersPublicIpList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroupsMembersPublicIp[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsMembersPublicIpOutputReference {
    return new GslbserviceGroupsMembersPublicIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroupsMembersSrvRdata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#port Gslbservice#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#priority Gslbservice#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#weight Gslbservice#weight}
  */
  readonly weight: string;
}

export function gslbserviceGroupsMembersSrvRdataToTerraform(struct?: GslbserviceGroupsMembersSrvRdata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    priority: cdktf.stringToTerraform(struct!.priority),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function gslbserviceGroupsMembersSrvRdataToHclTerraform(struct?: GslbserviceGroupsMembersSrvRdata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceGroupsMembersSrvRdataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroupsMembersSrvRdata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroupsMembersSrvRdata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._priority = value.priority;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GslbserviceGroupsMembersSrvRdataList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroupsMembersSrvRdata[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsMembersSrvRdataOutputReference {
    return new GslbserviceGroupsMembersSrvRdataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroupsMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#cloud_uuid Gslbservice#cloud_uuid}
  */
  readonly cloudUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#cluster_uuid Gslbservice#cluster_uuid}
  */
  readonly clusterUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#description Gslbservice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#enabled Gslbservice#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#fqdn Gslbservice#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#hostname Gslbservice#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#preference_order Gslbservice#preference_order}
  */
  readonly preferenceOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#ratio Gslbservice#ratio}
  */
  readonly ratio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#resolve_fqdn_to_v6 Gslbservice#resolve_fqdn_to_v6}
  */
  readonly resolveFqdnToV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#vs_uuid Gslbservice#vs_uuid}
  */
  readonly vsUuid?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#ip Gslbservice#ip}
  */
  readonly ip?: GslbserviceGroupsMembersIp[] | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#location Gslbservice#location}
  */
  readonly location?: GslbserviceGroupsMembersLocation[] | cdktf.IResolvable;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#public_ip Gslbservice#public_ip}
  */
  readonly publicIp?: GslbserviceGroupsMembersPublicIp[] | cdktf.IResolvable;
  /**
  * srv_rdata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#srv_rdata Gslbservice#srv_rdata}
  */
  readonly srvRdata?: GslbserviceGroupsMembersSrvRdata[] | cdktf.IResolvable;
}

export function gslbserviceGroupsMembersToTerraform(struct?: GslbserviceGroupsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_uuid: cdktf.stringToTerraform(struct!.cloudUuid),
    cluster_uuid: cdktf.stringToTerraform(struct!.clusterUuid),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    preference_order: cdktf.stringToTerraform(struct!.preferenceOrder),
    ratio: cdktf.stringToTerraform(struct!.ratio),
    resolve_fqdn_to_v6: cdktf.stringToTerraform(struct!.resolveFqdnToV6),
    vs_uuid: cdktf.stringToTerraform(struct!.vsUuid),
    ip: cdktf.listMapper(gslbserviceGroupsMembersIpToTerraform, true)(struct!.ip),
    location: cdktf.listMapper(gslbserviceGroupsMembersLocationToTerraform, true)(struct!.location),
    public_ip: cdktf.listMapper(gslbserviceGroupsMembersPublicIpToTerraform, true)(struct!.publicIp),
    srv_rdata: cdktf.listMapper(gslbserviceGroupsMembersSrvRdataToTerraform, true)(struct!.srvRdata),
  }
}


export function gslbserviceGroupsMembersToHclTerraform(struct?: GslbserviceGroupsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_uuid: {
      value: cdktf.stringToHclTerraform(struct!.cloudUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.clusterUuid),
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
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference_order: {
      value: cdktf.stringToHclTerraform(struct!.preferenceOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio: {
      value: cdktf.stringToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_fqdn_to_v6: {
      value: cdktf.stringToHclTerraform(struct!.resolveFqdnToV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(gslbserviceGroupsMembersIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceGroupsMembersIpList",
    },
    location: {
      value: cdktf.listMapperHcl(gslbserviceGroupsMembersLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceGroupsMembersLocationList",
    },
    public_ip: {
      value: cdktf.listMapperHcl(gslbserviceGroupsMembersPublicIpToHclTerraform, true)(struct!.publicIp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceGroupsMembersPublicIpList",
    },
    srv_rdata: {
      value: cdktf.listMapperHcl(gslbserviceGroupsMembersSrvRdataToHclTerraform, true)(struct!.srvRdata),
      isBlock: true,
      type: "set",
      storageClassType: "GslbserviceGroupsMembersSrvRdataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceGroupsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroupsMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudUuid = this._cloudUuid;
    }
    if (this._clusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUuid = this._clusterUuid;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._preferenceOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferenceOrder = this._preferenceOrder;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._resolveFqdnToV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveFqdnToV6 = this._resolveFqdnToV6;
    }
    if (this._vsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsUuid = this._vsUuid;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    if (this._srvRdata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvRdata = this._srvRdata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroupsMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudUuid = undefined;
      this._clusterUuid = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._fqdn = undefined;
      this._hostname = undefined;
      this._preferenceOrder = undefined;
      this._ratio = undefined;
      this._resolveFqdnToV6 = undefined;
      this._vsUuid = undefined;
      this._ip.internalValue = undefined;
      this._location.internalValue = undefined;
      this._publicIp.internalValue = undefined;
      this._srvRdata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudUuid = value.cloudUuid;
      this._clusterUuid = value.clusterUuid;
      this._description = value.description;
      this._enabled = value.enabled;
      this._fqdn = value.fqdn;
      this._hostname = value.hostname;
      this._preferenceOrder = value.preferenceOrder;
      this._ratio = value.ratio;
      this._resolveFqdnToV6 = value.resolveFqdnToV6;
      this._vsUuid = value.vsUuid;
      this._ip.internalValue = value.ip;
      this._location.internalValue = value.location;
      this._publicIp.internalValue = value.publicIp;
      this._srvRdata.internalValue = value.srvRdata;
    }
  }

  // cloud_uuid - computed: true, optional: true, required: false
  private _cloudUuid?: string; 
  public get cloudUuid() {
    return this.getStringAttribute('cloud_uuid');
  }
  public set cloudUuid(value: string) {
    this._cloudUuid = value;
  }
  public resetCloudUuid() {
    this._cloudUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudUuidInput() {
    return this._cloudUuid;
  }

  // cluster_uuid - computed: true, optional: true, required: false
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  public resetClusterUuid() {
    this._clusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
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

  // enabled - computed: false, optional: true, required: false
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

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // preference_order - computed: false, optional: true, required: false
  private _preferenceOrder?: string; 
  public get preferenceOrder() {
    return this.getStringAttribute('preference_order');
  }
  public set preferenceOrder(value: string) {
    this._preferenceOrder = value;
  }
  public resetPreferenceOrder() {
    this._preferenceOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceOrderInput() {
    return this._preferenceOrder;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: string; 
  public get ratio() {
    return this.getStringAttribute('ratio');
  }
  public set ratio(value: string) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // resolve_fqdn_to_v6 - computed: false, optional: true, required: false
  private _resolveFqdnToV6?: string; 
  public get resolveFqdnToV6() {
    return this.getStringAttribute('resolve_fqdn_to_v6');
  }
  public set resolveFqdnToV6(value: string) {
    this._resolveFqdnToV6 = value;
  }
  public resetResolveFqdnToV6() {
    this._resolveFqdnToV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveFqdnToV6Input() {
    return this._resolveFqdnToV6;
  }

  // vs_uuid - computed: true, optional: true, required: false
  private _vsUuid?: string; 
  public get vsUuid() {
    return this.getStringAttribute('vs_uuid');
  }
  public set vsUuid(value: string) {
    this._vsUuid = value;
  }
  public resetVsUuid() {
    this._vsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsUuidInput() {
    return this._vsUuid;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new GslbserviceGroupsMembersIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: GslbserviceGroupsMembersIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GslbserviceGroupsMembersLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: GslbserviceGroupsMembersLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new GslbserviceGroupsMembersPublicIpList(this, "public_ip", true);
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: GslbserviceGroupsMembersPublicIp[] | cdktf.IResolvable) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }

  // srv_rdata - computed: false, optional: true, required: false
  private _srvRdata = new GslbserviceGroupsMembersSrvRdataList(this, "srv_rdata", true);
  public get srvRdata() {
    return this._srvRdata;
  }
  public putSrvRdata(value: GslbserviceGroupsMembersSrvRdata[] | cdktf.IResolvable) {
    this._srvRdata.internalValue = value;
  }
  public resetSrvRdata() {
    this._srvRdata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvRdataInput() {
    return this._srvRdata.internalValue;
  }
}

export class GslbserviceGroupsMembersList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroupsMembers[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsMembersOutputReference {
    return new GslbserviceGroupsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#algorithm Gslbservice#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#consistent_hash_mask Gslbservice#consistent_hash_mask}
  */
  readonly consistentHashMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#consistent_hash_mask6 Gslbservice#consistent_hash_mask6}
  */
  readonly consistentHashMask6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#description Gslbservice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#enabled Gslbservice#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#fallback_algorithm Gslbservice#fallback_algorithm}
  */
  readonly fallbackAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#manual_resume Gslbservice#manual_resume}
  */
  readonly manualResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#min_health_monitors_up Gslbservice#min_health_monitors_up}
  */
  readonly minHealthMonitorsUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#name Gslbservice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#priority Gslbservice#priority}
  */
  readonly priority?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#members Gslbservice#members}
  */
  readonly members: GslbserviceGroupsMembers[] | cdktf.IResolvable;
}

export function gslbserviceGroupsToTerraform(struct?: GslbserviceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    consistent_hash_mask: cdktf.stringToTerraform(struct!.consistentHashMask),
    consistent_hash_mask6: cdktf.stringToTerraform(struct!.consistentHashMask6),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    fallback_algorithm: cdktf.stringToTerraform(struct!.fallbackAlgorithm),
    manual_resume: cdktf.stringToTerraform(struct!.manualResume),
    min_health_monitors_up: cdktf.stringToTerraform(struct!.minHealthMonitorsUp),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
    members: cdktf.listMapper(gslbserviceGroupsMembersToTerraform, true)(struct!.members),
  }
}


export function gslbserviceGroupsToHclTerraform(struct?: GslbserviceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consistent_hash_mask: {
      value: cdktf.stringToHclTerraform(struct!.consistentHashMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consistent_hash_mask6: {
      value: cdktf.stringToHclTerraform(struct!.consistentHashMask6),
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
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.fallbackAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_resume: {
      value: cdktf.stringToHclTerraform(struct!.manualResume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_health_monitors_up: {
      value: cdktf.stringToHclTerraform(struct!.minHealthMonitorsUp),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(gslbserviceGroupsMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "GslbserviceGroupsMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._consistentHashMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentHashMask = this._consistentHashMask;
    }
    if (this._consistentHashMask6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentHashMask6 = this._consistentHashMask6;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fallbackAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackAlgorithm = this._fallbackAlgorithm;
    }
    if (this._manualResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualResume = this._manualResume;
    }
    if (this._minHealthMonitorsUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthMonitorsUp = this._minHealthMonitorsUp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._consistentHashMask = undefined;
      this._consistentHashMask6 = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._fallbackAlgorithm = undefined;
      this._manualResume = undefined;
      this._minHealthMonitorsUp = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._members.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._consistentHashMask = value.consistentHashMask;
      this._consistentHashMask6 = value.consistentHashMask6;
      this._description = value.description;
      this._enabled = value.enabled;
      this._fallbackAlgorithm = value.fallbackAlgorithm;
      this._manualResume = value.manualResume;
      this._minHealthMonitorsUp = value.minHealthMonitorsUp;
      this._name = value.name;
      this._priority = value.priority;
      this._members.internalValue = value.members;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // consistent_hash_mask - computed: true, optional: true, required: false
  private _consistentHashMask?: string; 
  public get consistentHashMask() {
    return this.getStringAttribute('consistent_hash_mask');
  }
  public set consistentHashMask(value: string) {
    this._consistentHashMask = value;
  }
  public resetConsistentHashMask() {
    this._consistentHashMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashMaskInput() {
    return this._consistentHashMask;
  }

  // consistent_hash_mask6 - computed: true, optional: true, required: false
  private _consistentHashMask6?: string; 
  public get consistentHashMask6() {
    return this.getStringAttribute('consistent_hash_mask6');
  }
  public set consistentHashMask6(value: string) {
    this._consistentHashMask6 = value;
  }
  public resetConsistentHashMask6() {
    this._consistentHashMask6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashMask6Input() {
    return this._consistentHashMask6;
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

  // enabled - computed: false, optional: true, required: false
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

  // fallback_algorithm - computed: true, optional: true, required: false
  private _fallbackAlgorithm?: string; 
  public get fallbackAlgorithm() {
    return this.getStringAttribute('fallback_algorithm');
  }
  public set fallbackAlgorithm(value: string) {
    this._fallbackAlgorithm = value;
  }
  public resetFallbackAlgorithm() {
    this._fallbackAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackAlgorithmInput() {
    return this._fallbackAlgorithm;
  }

  // manual_resume - computed: false, optional: true, required: false
  private _manualResume?: string; 
  public get manualResume() {
    return this.getStringAttribute('manual_resume');
  }
  public set manualResume(value: string) {
    this._manualResume = value;
  }
  public resetManualResume() {
    this._manualResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualResumeInput() {
    return this._manualResume;
  }

  // min_health_monitors_up - computed: true, optional: true, required: false
  private _minHealthMonitorsUp?: string; 
  public get minHealthMonitorsUp() {
    return this.getStringAttribute('min_health_monitors_up');
  }
  public set minHealthMonitorsUp(value: string) {
    this._minHealthMonitorsUp = value;
  }
  public resetMinHealthMonitorsUp() {
    this._minHealthMonitorsUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthMonitorsUpInput() {
    return this._minHealthMonitorsUp;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // members - computed: false, optional: false, required: true
  private _members = new GslbserviceGroupsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: GslbserviceGroupsMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

export class GslbserviceGroupsList extends cdktf.ComplexList {
  public internalValue? : GslbserviceGroups[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceGroupsOutputReference {
    return new GslbserviceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbserviceMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#key Gslbservice#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#values Gslbservice#values}
  */
  readonly values?: string[];
}

export function gslbserviceMarkersToTerraform(struct?: GslbserviceMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function gslbserviceMarkersToHclTerraform(struct?: GslbserviceMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbserviceMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbserviceMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbserviceMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GslbserviceMarkersList extends cdktf.ComplexList {
  public internalValue? : GslbserviceMarkers[] | cdktf.IResolvable

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
  public get(index: number): GslbserviceMarkersOutputReference {
    return new GslbserviceMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice avi_gslbservice}
*/
export class Gslbservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_gslbservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbservice to import
  * @param importFromId The id of the existing Gslbservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_gslbservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbservice avi_gslbservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbserviceConfig
  */
  public constructor(scope: Construct, id: string, config: GslbserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_gslbservice',
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
    this._applicationPersistenceProfileRef = config.applicationPersistenceProfileRef;
    this._controllerHealthStatusEnabled = config.controllerHealthStatusEnabled;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._domainNames = config.domainNames;
    this._enabled = config.enabled;
    this._healthMonitorRefs = config.healthMonitorRefs;
    this._healthMonitorScope = config.healthMonitorScope;
    this._hmOff = config.hmOff;
    this._id = config.id;
    this._includeAdditionalRecords = config.includeAdditionalRecords;
    this._isFederated = config.isFederated;
    this._minMembers = config.minMembers;
    this._name = config.name;
    this._numDnsIp = config.numDnsIp;
    this._pkiProfileRef = config.pkiProfileRef;
    this._poolAlgorithm = config.poolAlgorithm;
    this._recordType = config.recordType;
    this._resolveCname = config.resolveCname;
    this._sitePersistenceEnabled = config.sitePersistenceEnabled;
    this._tenantRef = config.tenantRef;
    this._topologyPolicyEnabled = config.topologyPolicyEnabled;
    this._ttl = config.ttl;
    this._useEdnsClientSubnet = config.useEdnsClientSubnet;
    this._uuid = config.uuid;
    this._vrfUuidForGs = config.vrfUuidForGs;
    this._wildcardMatch = config.wildcardMatch;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._downResponse.internalValue = config.downResponse;
    this._groups.internalValue = config.groups;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_persistence_profile_ref - computed: true, optional: true, required: false
  private _applicationPersistenceProfileRef?: string; 
  public get applicationPersistenceProfileRef() {
    return this.getStringAttribute('application_persistence_profile_ref');
  }
  public set applicationPersistenceProfileRef(value: string) {
    this._applicationPersistenceProfileRef = value;
  }
  public resetApplicationPersistenceProfileRef() {
    this._applicationPersistenceProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPersistenceProfileRefInput() {
    return this._applicationPersistenceProfileRef;
  }

  // controller_health_status_enabled - computed: false, optional: true, required: false
  private _controllerHealthStatusEnabled?: string; 
  public get controllerHealthStatusEnabled() {
    return this.getStringAttribute('controller_health_status_enabled');
  }
  public set controllerHealthStatusEnabled(value: string) {
    this._controllerHealthStatusEnabled = value;
  }
  public resetControllerHealthStatusEnabled() {
    this._controllerHealthStatusEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerHealthStatusEnabledInput() {
    return this._controllerHealthStatusEnabled;
  }

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

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // enabled - computed: false, optional: true, required: false
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

  // health_monitor_refs - computed: false, optional: true, required: false
  private _healthMonitorRefs?: string[]; 
  public get healthMonitorRefs() {
    return this.getListAttribute('health_monitor_refs');
  }
  public set healthMonitorRefs(value: string[]) {
    this._healthMonitorRefs = value;
  }
  public resetHealthMonitorRefs() {
    this._healthMonitorRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorRefsInput() {
    return this._healthMonitorRefs;
  }

  // health_monitor_scope - computed: false, optional: true, required: false
  private _healthMonitorScope?: string; 
  public get healthMonitorScope() {
    return this.getStringAttribute('health_monitor_scope');
  }
  public set healthMonitorScope(value: string) {
    this._healthMonitorScope = value;
  }
  public resetHealthMonitorScope() {
    this._healthMonitorScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorScopeInput() {
    return this._healthMonitorScope;
  }

  // hm_off - computed: true, optional: true, required: false
  private _hmOff?: string; 
  public get hmOff() {
    return this.getStringAttribute('hm_off');
  }
  public set hmOff(value: string) {
    this._hmOff = value;
  }
  public resetHmOff() {
    this._hmOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmOffInput() {
    return this._hmOff;
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

  // include_additional_records - computed: false, optional: true, required: false
  private _includeAdditionalRecords?: string; 
  public get includeAdditionalRecords() {
    return this.getStringAttribute('include_additional_records');
  }
  public set includeAdditionalRecords(value: string) {
    this._includeAdditionalRecords = value;
  }
  public resetIncludeAdditionalRecords() {
    this._includeAdditionalRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdditionalRecordsInput() {
    return this._includeAdditionalRecords;
  }

  // is_federated - computed: false, optional: true, required: false
  private _isFederated?: string; 
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }
  public set isFederated(value: string) {
    this._isFederated = value;
  }
  public resetIsFederated() {
    this._isFederated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedInput() {
    return this._isFederated;
  }

  // min_members - computed: false, optional: true, required: false
  private _minMembers?: string; 
  public get minMembers() {
    return this.getStringAttribute('min_members');
  }
  public set minMembers(value: string) {
    this._minMembers = value;
  }
  public resetMinMembers() {
    this._minMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMembersInput() {
    return this._minMembers;
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

  // num_dns_ip - computed: true, optional: true, required: false
  private _numDnsIp?: string; 
  public get numDnsIp() {
    return this.getStringAttribute('num_dns_ip');
  }
  public set numDnsIp(value: string) {
    this._numDnsIp = value;
  }
  public resetNumDnsIp() {
    this._numDnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDnsIpInput() {
    return this._numDnsIp;
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // pool_algorithm - computed: false, optional: true, required: false
  private _poolAlgorithm?: string; 
  public get poolAlgorithm() {
    return this.getStringAttribute('pool_algorithm');
  }
  public set poolAlgorithm(value: string) {
    this._poolAlgorithm = value;
  }
  public resetPoolAlgorithm() {
    this._poolAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolAlgorithmInput() {
    return this._poolAlgorithm;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // resolve_cname - computed: false, optional: true, required: false
  private _resolveCname?: string; 
  public get resolveCname() {
    return this.getStringAttribute('resolve_cname');
  }
  public set resolveCname(value: string) {
    this._resolveCname = value;
  }
  public resetResolveCname() {
    this._resolveCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveCnameInput() {
    return this._resolveCname;
  }

  // site_persistence_enabled - computed: false, optional: true, required: false
  private _sitePersistenceEnabled?: string; 
  public get sitePersistenceEnabled() {
    return this.getStringAttribute('site_persistence_enabled');
  }
  public set sitePersistenceEnabled(value: string) {
    this._sitePersistenceEnabled = value;
  }
  public resetSitePersistenceEnabled() {
    this._sitePersistenceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePersistenceEnabledInput() {
    return this._sitePersistenceEnabled;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // topology_policy_enabled - computed: false, optional: true, required: false
  private _topologyPolicyEnabled?: string; 
  public get topologyPolicyEnabled() {
    return this.getStringAttribute('topology_policy_enabled');
  }
  public set topologyPolicyEnabled(value: string) {
    this._topologyPolicyEnabled = value;
  }
  public resetTopologyPolicyEnabled() {
    this._topologyPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyPolicyEnabledInput() {
    return this._topologyPolicyEnabled;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_edns_client_subnet - computed: false, optional: true, required: false
  private _useEdnsClientSubnet?: string; 
  public get useEdnsClientSubnet() {
    return this.getStringAttribute('use_edns_client_subnet');
  }
  public set useEdnsClientSubnet(value: string) {
    this._useEdnsClientSubnet = value;
  }
  public resetUseEdnsClientSubnet() {
    this._useEdnsClientSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdnsClientSubnetInput() {
    return this._useEdnsClientSubnet;
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

  // vrf_uuid_for_gs - computed: true, optional: true, required: false
  private _vrfUuidForGs?: string; 
  public get vrfUuidForGs() {
    return this.getStringAttribute('vrf_uuid_for_gs');
  }
  public set vrfUuidForGs(value: string) {
    this._vrfUuidForGs = value;
  }
  public resetVrfUuidForGs() {
    this._vrfUuidForGs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfUuidForGsInput() {
    return this._vrfUuidForGs;
  }

  // wildcard_match - computed: false, optional: true, required: false
  private _wildcardMatch?: string; 
  public get wildcardMatch() {
    return this.getStringAttribute('wildcard_match');
  }
  public set wildcardMatch(value: string) {
    this._wildcardMatch = value;
  }
  public resetWildcardMatch() {
    this._wildcardMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardMatchInput() {
    return this._wildcardMatch;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new GslbserviceConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: GslbserviceConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // down_response - computed: false, optional: true, required: false
  private _downResponse = new GslbserviceDownResponseList(this, "down_response", true);
  public get downResponse() {
    return this._downResponse;
  }
  public putDownResponse(value: GslbserviceDownResponse[] | cdktf.IResolvable) {
    this._downResponse.internalValue = value;
  }
  public resetDownResponse() {
    this._downResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downResponseInput() {
    return this._downResponse.internalValue;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new GslbserviceGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: GslbserviceGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new GslbserviceMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: GslbserviceMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_persistence_profile_ref: cdktf.stringToTerraform(this._applicationPersistenceProfileRef),
      controller_health_status_enabled: cdktf.stringToTerraform(this._controllerHealthStatusEnabled),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      enabled: cdktf.stringToTerraform(this._enabled),
      health_monitor_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthMonitorRefs),
      health_monitor_scope: cdktf.stringToTerraform(this._healthMonitorScope),
      hm_off: cdktf.stringToTerraform(this._hmOff),
      id: cdktf.stringToTerraform(this._id),
      include_additional_records: cdktf.stringToTerraform(this._includeAdditionalRecords),
      is_federated: cdktf.stringToTerraform(this._isFederated),
      min_members: cdktf.stringToTerraform(this._minMembers),
      name: cdktf.stringToTerraform(this._name),
      num_dns_ip: cdktf.stringToTerraform(this._numDnsIp),
      pki_profile_ref: cdktf.stringToTerraform(this._pkiProfileRef),
      pool_algorithm: cdktf.stringToTerraform(this._poolAlgorithm),
      record_type: cdktf.stringToTerraform(this._recordType),
      resolve_cname: cdktf.stringToTerraform(this._resolveCname),
      site_persistence_enabled: cdktf.stringToTerraform(this._sitePersistenceEnabled),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      topology_policy_enabled: cdktf.stringToTerraform(this._topologyPolicyEnabled),
      ttl: cdktf.stringToTerraform(this._ttl),
      use_edns_client_subnet: cdktf.stringToTerraform(this._useEdnsClientSubnet),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrf_uuid_for_gs: cdktf.stringToTerraform(this._vrfUuidForGs),
      wildcard_match: cdktf.stringToTerraform(this._wildcardMatch),
      configpb_attributes: cdktf.listMapper(gslbserviceConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      down_response: cdktf.listMapper(gslbserviceDownResponseToTerraform, true)(this._downResponse.internalValue),
      groups: cdktf.listMapper(gslbserviceGroupsToTerraform, true)(this._groups.internalValue),
      markers: cdktf.listMapper(gslbserviceMarkersToTerraform, true)(this._markers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_persistence_profile_ref: {
        value: cdktf.stringToHclTerraform(this._applicationPersistenceProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_health_status_enabled: {
        value: cdktf.stringToHclTerraform(this._controllerHealthStatusEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_monitor_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthMonitorRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      health_monitor_scope: {
        value: cdktf.stringToHclTerraform(this._healthMonitorScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hm_off: {
        value: cdktf.stringToHclTerraform(this._hmOff),
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
      include_additional_records: {
        value: cdktf.stringToHclTerraform(this._includeAdditionalRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_federated: {
        value: cdktf.stringToHclTerraform(this._isFederated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_members: {
        value: cdktf.stringToHclTerraform(this._minMembers),
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
      num_dns_ip: {
        value: cdktf.stringToHclTerraform(this._numDnsIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pki_profile_ref: {
        value: cdktf.stringToHclTerraform(this._pkiProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_algorithm: {
        value: cdktf.stringToHclTerraform(this._poolAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_cname: {
        value: cdktf.stringToHclTerraform(this._resolveCname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_persistence_enabled: {
        value: cdktf.stringToHclTerraform(this._sitePersistenceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_policy_enabled: {
        value: cdktf.stringToHclTerraform(this._topologyPolicyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_edns_client_subnet: {
        value: cdktf.stringToHclTerraform(this._useEdnsClientSubnet),
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
      vrf_uuid_for_gs: {
        value: cdktf.stringToHclTerraform(this._vrfUuidForGs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_match: {
        value: cdktf.stringToHclTerraform(this._wildcardMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(gslbserviceConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbserviceConfigpbAttributesList",
      },
      down_response: {
        value: cdktf.listMapperHcl(gslbserviceDownResponseToHclTerraform, true)(this._downResponse.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbserviceDownResponseList",
      },
      groups: {
        value: cdktf.listMapperHcl(gslbserviceGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbserviceGroupsList",
      },
      markers: {
        value: cdktf.listMapperHcl(gslbserviceMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbserviceMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
