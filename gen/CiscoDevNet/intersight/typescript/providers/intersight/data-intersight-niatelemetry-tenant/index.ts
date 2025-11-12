// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightNiatelemetryTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#account_moid DataIntersightNiatelemetryTenant#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Number of Bidirectional Forwarding Detection bfdIfPol Model Objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#bfd_if_pol_count DataIntersightNiatelemetryTenant#bfd_if_pol_count}
  */
  readonly bfdIfPolCount?: number;
  /**
  * Number of objects with Bidirectional Forwarding Detection Interface Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#bfd_ifp_count DataIntersightNiatelemetryTenant#bfd_ifp_count}
  */
  readonly bfdIfpCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#create_time DataIntersightNiatelemetryTenant#create_time}
  */
  readonly createTime?: string;
  /**
  * Number of tenants with Dynamic Host Configuration Protocol enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#dhcp_rs_prov_count DataIntersightNiatelemetryTenant#dhcp_rs_prov_count}
  */
  readonly dhcpRsProvCount?: number;
  /**
  * Dn for the tenants present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#dn DataIntersightNiatelemetryTenant#dn}
  */
  readonly dn?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#domain_group_moid DataIntersightNiatelemetryTenant#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Number of objects with First hop security. Checks for presence of IP source gaurd, dynamic arp inspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fhs_bd_pol_count DataIntersightNiatelemetryTenant#fhs_bd_pol_count}
  */
  readonly fhsBdPolCount?: number;
  /**
  * Number of application profiles per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_ap_count DataIntersightNiatelemetryTenant#fv_ap_count}
  */
  readonly fvApCount?: number;
  /**
  * Number of bridge domains with hardware proxy enabled per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_bd_count DataIntersightNiatelemetryTenant#fv_bd_count}
  */
  readonly fvBdCount?: number;
  /**
  * Number of bridge domain subnets per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_bd_subnet_count DataIntersightNiatelemetryTenant#fv_bd_subnet_count}
  */
  readonly fvBdSubnetCount?: number;
  /**
  * Number of bridge domains with ARP flodding disabled per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_bdno_arp_count DataIntersightNiatelemetryTenant#fv_bdno_arp_count}
  */
  readonly fvBdnoArpCount?: number;
  /**
  * Count of number of endpoints per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_cep_count DataIntersightNiatelemetryTenant#fv_cep_count}
  */
  readonly fvCepCount?: number;
  /**
  * Number of objects with First hop security. Checks for presence of IP source gaurd, dynamic arp inspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_rs_bd_to_fhs_count DataIntersightNiatelemetryTenant#fv_rs_bd_to_fhs_count}
  */
  readonly fvRsBdToFhsCount?: number;
  /**
  * Number of bridge domains connected to layer 3 out per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_rs_bd_to_out_count DataIntersightNiatelemetryTenant#fv_rs_bd_to_out_count}
  */
  readonly fvRsBdToOutCount?: number;
  /**
  * Number of Multi-Site objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_site_connp_count DataIntersightNiatelemetryTenant#fv_site_connp_count}
  */
  readonly fvSiteConnpCount?: number;
  /**
  * Number of subnets per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#fv_subnet_count DataIntersightNiatelemetryTenant#fv_subnet_count}
  */
  readonly fvSubnetCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#id DataIntersightNiatelemetryTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of IP static routes per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#ip_static_route_count DataIntersightNiatelemetryTenant#ip_static_route_count}
  */
  readonly ipStaticRouteCount?: number;
  /**
  * Number of layer 3 multicasts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#l3_multicast_count DataIntersightNiatelemetryTenant#l3_multicast_count}
  */
  readonly l3MulticastCount?: number;
  /**
  * Number of layer 3 multicast CtxP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#l3_multicast_ctx_count DataIntersightNiatelemetryTenant#l3_multicast_ctx_count}
  */
  readonly l3MulticastCtxCount?: number;
  /**
  * Number of layer 3 multicast IfP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#l3_multicast_if_count DataIntersightNiatelemetryTenant#l3_multicast_if_count}
  */
  readonly l3MulticastIfCount?: number;
  /**
  * Number of L3 out objects for the tenants present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#l3out_count DataIntersightNiatelemetryTenant#l3out_count}
  */
  readonly l3OutCount?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#mod_time DataIntersightNiatelemetryTenant#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#owners DataIntersightNiatelemetryTenant#owners}
  */
  readonly owners?: string[];
  /**
  * Number of Quality Of Service Custom Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#qos_custom_pol_count DataIntersightNiatelemetryTenant#qos_custom_pol_count}
  */
  readonly qosCustomPolCount?: number;
  /**
  * Type of record DCNM / APIC / SE. This determines the type of platform where inventory was collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#record_type DataIntersightNiatelemetryTenant#record_type}
  */
  readonly recordType?: string;
  /**
  * Version of record being pushed. This determines what was the API version for data available from the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#record_version DataIntersightNiatelemetryTenant#record_version}
  */
  readonly recordVersion?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#shared_scope DataIntersightNiatelemetryTenant#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * The Site name represents an APIC cluster. Service Engine can onboard multiple APIC clusters / sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#site_name DataIntersightNiatelemetryTenant#site_name}
  */
  readonly siteName?: string;
  /**
  * SSM property feature usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#ssm DataIntersightNiatelemetryTenant#ssm}
  */
  readonly ssm?: string;
  /**
  * Number of context-level ssm translate policies per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#ssm_count DataIntersightNiatelemetryTenant#ssm_count}
  */
  readonly ssmCount?: number;
  /**
  * Number of TCAM optimization enabled per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#tcam_opt_count DataIntersightNiatelemetryTenant#tcam_opt_count}
  */
  readonly tcamOptCount?: number;
  /**
  * Health of each tenant in the APIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#tenant_health DataIntersightNiatelemetryTenant#tenant_health}
  */
  readonly tenantHealth?: number;
  /**
  * Number of ITrace route endpoint per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#trace_route_ep_count DataIntersightNiatelemetryTenant#trace_route_ep_count}
  */
  readonly traceRouteEpCount?: number;
  /**
  * Number of ITrace endpoint external routes per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#trace_route_ep_ext_count DataIntersightNiatelemetryTenant#trace_route_ep_ext_count}
  */
  readonly traceRouteEpExtCount?: number;
  /**
  * Number of ITrace external endpoint routes per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#trace_route_ext_ep_count DataIntersightNiatelemetryTenant#trace_route_ext_ep_count}
  */
  readonly traceRouteExtEpCount?: number;
  /**
  * Number of ITrace external routes per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#trace_route_ext_ext_count DataIntersightNiatelemetryTenant#trace_route_ext_ext_count}
  */
  readonly traceRouteExtExtCount?: number;
  /**
  * Number of objects with L4 to L7 Services graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vns_abs_graph_count DataIntersightNiatelemetryTenant#vns_abs_graph_count}
  */
  readonly vnsAbsGraphCount?: number;
  /**
  * Number of objects with Policy Based Routing standby Node. Checks the Policy Based Routing backup policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vns_backup_pol_count DataIntersightNiatelemetryTenant#vns_backup_pol_count}
  */
  readonly vnsBackupPolCount?: number;
  /**
  * Number of objects with Policy Based Routing standby Node. Policy based redirect requires a destination to redirect traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vns_redirect_dest_count DataIntersightNiatelemetryTenant#vns_redirect_dest_count}
  */
  readonly vnsRedirectDestCount?: number;
  /**
  * Number of Policy Based Routing and Policy Based Service Insertion objects. Includes without L4-L7 package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vns_svc_redirect_pol_count DataIntersightNiatelemetryTenant#vns_svc_redirect_pol_count}
  */
  readonly vnsSvcRedirectPolCount?: number;
  /**
  * Number of Vrfs per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vrf_count DataIntersightNiatelemetryTenant#vrf_count}
  */
  readonly vrfCount?: number;
  /**
  * Number of Zoning Policy per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vz_br_cp_count DataIntersightNiatelemetryTenant#vz_br_cp_count}
  */
  readonly vzBrCpCount?: number;
  /**
  * Number of Client Contract between End Point Groups per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vz_rt_cons_count DataIntersightNiatelemetryTenant#vz_rt_cons_count}
  */
  readonly vzRtConsCount?: number;
  /**
  * Number of Client Contract between End Point Groups per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#vz_rt_prov_count DataIntersightNiatelemetryTenant#vz_rt_prov_count}
  */
  readonly vzRtProvCount?: number;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#ancestors DataIntersightNiatelemetryTenant#ancestors}
  */
  readonly ancestors?: DataIntersightNiatelemetryTenantAncestors[] | cdktf.IResolvable;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#parent DataIntersightNiatelemetryTenant#parent}
  */
  readonly parent?: DataIntersightNiatelemetryTenantParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#permission_resources DataIntersightNiatelemetryTenant#permission_resources}
  */
  readonly permissionResources?: DataIntersightNiatelemetryTenantPermissionResources[] | cdktf.IResolvable;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#registered_device DataIntersightNiatelemetryTenant#registered_device}
  */
  readonly registeredDevice?: DataIntersightNiatelemetryTenantRegisteredDevice;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#tags DataIntersightNiatelemetryTenant#tags}
  */
  readonly tags?: DataIntersightNiatelemetryTenantTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#version_context DataIntersightNiatelemetryTenant#version_context}
  */
  readonly versionContext?: DataIntersightNiatelemetryTenantVersionContext;
}
export interface DataIntersightNiatelemetryTenantResultsAncestors {
}

export function dataIntersightNiatelemetryTenantResultsAncestorsToTerraform(struct?: DataIntersightNiatelemetryTenantResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsAncestorsOutputReference {
    return new DataIntersightNiatelemetryTenantResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsParent {
}

export function dataIntersightNiatelemetryTenantResultsParentToTerraform(struct?: DataIntersightNiatelemetryTenantResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsParentToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsParentOutputReference {
    return new DataIntersightNiatelemetryTenantResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsPermissionResources {
}

export function dataIntersightNiatelemetryTenantResultsPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryTenantResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryTenantResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsRegisteredDevice {
}

export function dataIntersightNiatelemetryTenantResultsRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryTenantResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsRegisteredDeviceOutputReference {
    return new DataIntersightNiatelemetryTenantResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitions {
}

export function dataIntersightNiatelemetryTenantResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsTagsDefinition {
}

export function dataIntersightNiatelemetryTenantResultsTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryTenantResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsTagsDefinitionOutputReference {
    return new DataIntersightNiatelemetryTenantResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsTags {
}

export function dataIntersightNiatelemetryTenantResultsTagsToTerraform(struct?: DataIntersightNiatelemetryTenantResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsTagsToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightNiatelemetryTenantResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightNiatelemetryTenantResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightNiatelemetryTenantResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsTagsOutputReference {
    return new DataIntersightNiatelemetryTenantResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsVersionContextInterestedMos {
}

export function dataIntersightNiatelemetryTenantResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryTenantResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryTenantResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsVersionContextRefMo {
}

export function dataIntersightNiatelemetryTenantResultsVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryTenantResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightNiatelemetryTenantResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsVersionContextRefMoOutputReference {
    return new DataIntersightNiatelemetryTenantResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResultsVersionContext {
}

export function dataIntersightNiatelemetryTenantResultsVersionContextToTerraform(struct?: DataIntersightNiatelemetryTenantResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryTenantResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightNiatelemetryTenantResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightNiatelemetryTenantResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightNiatelemetryTenantResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsVersionContextOutputReference {
    return new DataIntersightNiatelemetryTenantResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantResults {
}

export function dataIntersightNiatelemetryTenantResultsToTerraform(struct?: DataIntersightNiatelemetryTenantResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryTenantResultsToHclTerraform(struct?: DataIntersightNiatelemetryTenantResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryTenantResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightNiatelemetryTenantResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // bfd_if_pol_count - computed: true, optional: false, required: false
  public get bfdIfPolCount() {
    return this.getNumberAttribute('bfd_if_pol_count');
  }

  // bfd_ifp_count - computed: true, optional: false, required: false
  public get bfdIfpCount() {
    return this.getNumberAttribute('bfd_ifp_count');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dhcp_rs_prov_count - computed: true, optional: false, required: false
  public get dhcpRsProvCount() {
    return this.getNumberAttribute('dhcp_rs_prov_count');
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // fhs_bd_pol_count - computed: true, optional: false, required: false
  public get fhsBdPolCount() {
    return this.getNumberAttribute('fhs_bd_pol_count');
  }

  // fv_ap_count - computed: true, optional: false, required: false
  public get fvApCount() {
    return this.getNumberAttribute('fv_ap_count');
  }

  // fv_bd_count - computed: true, optional: false, required: false
  public get fvBdCount() {
    return this.getNumberAttribute('fv_bd_count');
  }

  // fv_bd_subnet_count - computed: true, optional: false, required: false
  public get fvBdSubnetCount() {
    return this.getNumberAttribute('fv_bd_subnet_count');
  }

  // fv_bdno_arp_count - computed: true, optional: false, required: false
  public get fvBdnoArpCount() {
    return this.getNumberAttribute('fv_bdno_arp_count');
  }

  // fv_cep_count - computed: true, optional: false, required: false
  public get fvCepCount() {
    return this.getNumberAttribute('fv_cep_count');
  }

  // fv_rs_bd_to_fhs_count - computed: true, optional: false, required: false
  public get fvRsBdToFhsCount() {
    return this.getNumberAttribute('fv_rs_bd_to_fhs_count');
  }

  // fv_rs_bd_to_out_count - computed: true, optional: false, required: false
  public get fvRsBdToOutCount() {
    return this.getNumberAttribute('fv_rs_bd_to_out_count');
  }

  // fv_site_connp_count - computed: true, optional: false, required: false
  public get fvSiteConnpCount() {
    return this.getNumberAttribute('fv_site_connp_count');
  }

  // fv_subnet_count - computed: true, optional: false, required: false
  public get fvSubnetCount() {
    return this.getNumberAttribute('fv_subnet_count');
  }

  // ip_static_route_count - computed: true, optional: false, required: false
  public get ipStaticRouteCount() {
    return this.getNumberAttribute('ip_static_route_count');
  }

  // l3_multicast_count - computed: true, optional: false, required: false
  public get l3MulticastCount() {
    return this.getNumberAttribute('l3_multicast_count');
  }

  // l3_multicast_ctx_count - computed: true, optional: false, required: false
  public get l3MulticastCtxCount() {
    return this.getNumberAttribute('l3_multicast_ctx_count');
  }

  // l3_multicast_if_count - computed: true, optional: false, required: false
  public get l3MulticastIfCount() {
    return this.getNumberAttribute('l3_multicast_if_count');
  }

  // l3out_count - computed: true, optional: false, required: false
  public get l3OutCount() {
    return this.getNumberAttribute('l3out_count');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightNiatelemetryTenantResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightNiatelemetryTenantResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // qos_custom_pol_count - computed: true, optional: false, required: false
  public get qosCustomPolCount() {
    return this.getNumberAttribute('qos_custom_pol_count');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // record_version - computed: true, optional: false, required: false
  public get recordVersion() {
    return this.getStringAttribute('record_version');
  }

  // registered_device - computed: true, optional: false, required: false
  private _registeredDevice = new DataIntersightNiatelemetryTenantResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // ssm - computed: true, optional: false, required: false
  public get ssm() {
    return this.getStringAttribute('ssm');
  }

  // ssm_count - computed: true, optional: false, required: false
  public get ssmCount() {
    return this.getNumberAttribute('ssm_count');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightNiatelemetryTenantResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tcam_opt_count - computed: true, optional: false, required: false
  public get tcamOptCount() {
    return this.getNumberAttribute('tcam_opt_count');
  }

  // tenant_health - computed: true, optional: false, required: false
  public get tenantHealth() {
    return this.getNumberAttribute('tenant_health');
  }

  // trace_route_ep_count - computed: true, optional: false, required: false
  public get traceRouteEpCount() {
    return this.getNumberAttribute('trace_route_ep_count');
  }

  // trace_route_ep_ext_count - computed: true, optional: false, required: false
  public get traceRouteEpExtCount() {
    return this.getNumberAttribute('trace_route_ep_ext_count');
  }

  // trace_route_ext_ep_count - computed: true, optional: false, required: false
  public get traceRouteExtEpCount() {
    return this.getNumberAttribute('trace_route_ext_ep_count');
  }

  // trace_route_ext_ext_count - computed: true, optional: false, required: false
  public get traceRouteExtExtCount() {
    return this.getNumberAttribute('trace_route_ext_ext_count');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightNiatelemetryTenantResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vns_abs_graph_count - computed: true, optional: false, required: false
  public get vnsAbsGraphCount() {
    return this.getNumberAttribute('vns_abs_graph_count');
  }

  // vns_backup_pol_count - computed: true, optional: false, required: false
  public get vnsBackupPolCount() {
    return this.getNumberAttribute('vns_backup_pol_count');
  }

  // vns_redirect_dest_count - computed: true, optional: false, required: false
  public get vnsRedirectDestCount() {
    return this.getNumberAttribute('vns_redirect_dest_count');
  }

  // vns_svc_redirect_pol_count - computed: true, optional: false, required: false
  public get vnsSvcRedirectPolCount() {
    return this.getNumberAttribute('vns_svc_redirect_pol_count');
  }

  // vrf_count - computed: true, optional: false, required: false
  public get vrfCount() {
    return this.getNumberAttribute('vrf_count');
  }

  // vz_br_cp_count - computed: true, optional: false, required: false
  public get vzBrCpCount() {
    return this.getNumberAttribute('vz_br_cp_count');
  }

  // vz_rt_cons_count - computed: true, optional: false, required: false
  public get vzRtConsCount() {
    return this.getNumberAttribute('vz_rt_cons_count');
  }

  // vz_rt_prov_count - computed: true, optional: false, required: false
  public get vzRtProvCount() {
    return this.getNumberAttribute('vz_rt_prov_count');
  }
}

export class DataIntersightNiatelemetryTenantResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryTenantResultsOutputReference {
    return new DataIntersightNiatelemetryTenantResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantAncestorsToTerraform(struct?: DataIntersightNiatelemetryTenantAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryTenantAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryTenantAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryTenantAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryTenantAncestorsOutputReference {
    return new DataIntersightNiatelemetryTenantAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantParentToTerraform(struct?: DataIntersightNiatelemetryTenantParentOutputReference | DataIntersightNiatelemetryTenantParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantParentToHclTerraform(struct?: DataIntersightNiatelemetryTenantParentOutputReference | DataIntersightNiatelemetryTenantParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryTenantParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryTenantPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryTenantPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryTenantPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryTenantPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryTenantPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryTenantPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryTenantPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryTenantRegisteredDeviceOutputReference | DataIntersightNiatelemetryTenantRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryTenantRegisteredDeviceOutputReference | DataIntersightNiatelemetryTenantRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryTenantRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryTenantTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryTenantTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryTenantTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryTenantTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryTenantTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryTenantTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryTenantTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryTenantTagsDefinitionOutputReference | DataIntersightNiatelemetryTenantTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryTenantTagsDefinitionOutputReference | DataIntersightNiatelemetryTenantTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryTenantTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryTenantTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#key DataIntersightNiatelemetryTenant#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#propagated DataIntersightNiatelemetryTenant#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#type DataIntersightNiatelemetryTenant#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#value DataIntersightNiatelemetryTenant#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#ancestor_definitions DataIntersightNiatelemetryTenant#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightNiatelemetryTenantTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#definition DataIntersightNiatelemetryTenant#definition}
  */
  readonly definition?: DataIntersightNiatelemetryTenantTagsDefinition;
}

export function dataIntersightNiatelemetryTenantTagsToTerraform(struct?: DataIntersightNiatelemetryTenantTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightNiatelemetryTenantTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightNiatelemetryTenantTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightNiatelemetryTenantTagsToHclTerraform(struct?: DataIntersightNiatelemetryTenantTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryTenantTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryTenantTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightNiatelemetryTenantTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryTenantTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
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

  // value - computed: false, optional: true, required: false
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

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightNiatelemetryTenantTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightNiatelemetryTenantTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightNiatelemetryTenantTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightNiatelemetryTenantTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightNiatelemetryTenantTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryTenantTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryTenantTagsOutputReference {
    return new DataIntersightNiatelemetryTenantTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryTenantVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryTenantVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryTenantVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightNiatelemetryTenantVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryTenantVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryTenantVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryTenantVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryTenantVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#moid DataIntersightNiatelemetryTenant#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#selector DataIntersightNiatelemetryTenant#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryTenantVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryTenantVersionContextRefMoOutputReference | DataIntersightNiatelemetryTenantVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightNiatelemetryTenantVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryTenantVersionContextRefMoOutputReference | DataIntersightNiatelemetryTenantVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryTenantVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightNiatelemetryTenantVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#additional_properties DataIntersightNiatelemetryTenant#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#class_id DataIntersightNiatelemetryTenant#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#marked_for_deletion DataIntersightNiatelemetryTenant#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#nr_version DataIntersightNiatelemetryTenant#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#object_type DataIntersightNiatelemetryTenant#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#timestamp DataIntersightNiatelemetryTenant#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#version_type DataIntersightNiatelemetryTenant#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#interested_mos DataIntersightNiatelemetryTenant#interested_mos}
  */
  readonly interestedMos?: DataIntersightNiatelemetryTenantVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#ref_mo DataIntersightNiatelemetryTenant#ref_mo}
  */
  readonly refMo?: DataIntersightNiatelemetryTenantVersionContextRefMo;
}

export function dataIntersightNiatelemetryTenantVersionContextToTerraform(struct?: DataIntersightNiatelemetryTenantVersionContextOutputReference | DataIntersightNiatelemetryTenantVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightNiatelemetryTenantVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightNiatelemetryTenantVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightNiatelemetryTenantVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryTenantVersionContextOutputReference | DataIntersightNiatelemetryTenantVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryTenantVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryTenantVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightNiatelemetryTenantVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryTenantVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryTenantVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryTenantVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryTenantVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightNiatelemetryTenantVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightNiatelemetryTenantVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightNiatelemetryTenantVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightNiatelemetryTenantVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant intersight_niatelemetry_tenant}
*/
export class DataIntersightNiatelemetryTenant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_niatelemetry_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightNiatelemetryTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightNiatelemetryTenant to import
  * @param importFromId The id of the existing DataIntersightNiatelemetryTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightNiatelemetryTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_niatelemetry_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_tenant intersight_niatelemetry_tenant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightNiatelemetryTenantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightNiatelemetryTenantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_niatelemetry_tenant',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72',
        providerVersionConstraint: '1.0.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._bfdIfPolCount = config.bfdIfPolCount;
    this._bfdIfpCount = config.bfdIfpCount;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._dhcpRsProvCount = config.dhcpRsProvCount;
    this._dn = config.dn;
    this._domainGroupMoid = config.domainGroupMoid;
    this._fhsBdPolCount = config.fhsBdPolCount;
    this._fvApCount = config.fvApCount;
    this._fvBdCount = config.fvBdCount;
    this._fvBdSubnetCount = config.fvBdSubnetCount;
    this._fvBdnoArpCount = config.fvBdnoArpCount;
    this._fvCepCount = config.fvCepCount;
    this._fvRsBdToFhsCount = config.fvRsBdToFhsCount;
    this._fvRsBdToOutCount = config.fvRsBdToOutCount;
    this._fvSiteConnpCount = config.fvSiteConnpCount;
    this._fvSubnetCount = config.fvSubnetCount;
    this._id = config.id;
    this._ipStaticRouteCount = config.ipStaticRouteCount;
    this._l3MulticastCount = config.l3MulticastCount;
    this._l3MulticastCtxCount = config.l3MulticastCtxCount;
    this._l3MulticastIfCount = config.l3MulticastIfCount;
    this._l3OutCount = config.l3OutCount;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._qosCustomPolCount = config.qosCustomPolCount;
    this._recordType = config.recordType;
    this._recordVersion = config.recordVersion;
    this._sharedScope = config.sharedScope;
    this._siteName = config.siteName;
    this._ssm = config.ssm;
    this._ssmCount = config.ssmCount;
    this._tcamOptCount = config.tcamOptCount;
    this._tenantHealth = config.tenantHealth;
    this._traceRouteEpCount = config.traceRouteEpCount;
    this._traceRouteEpExtCount = config.traceRouteEpExtCount;
    this._traceRouteExtEpCount = config.traceRouteExtEpCount;
    this._traceRouteExtExtCount = config.traceRouteExtExtCount;
    this._vnsAbsGraphCount = config.vnsAbsGraphCount;
    this._vnsBackupPolCount = config.vnsBackupPolCount;
    this._vnsRedirectDestCount = config.vnsRedirectDestCount;
    this._vnsSvcRedirectPolCount = config.vnsSvcRedirectPolCount;
    this._vrfCount = config.vrfCount;
    this._vzBrCpCount = config.vzBrCpCount;
    this._vzRtConsCount = config.vzRtConsCount;
    this._vzRtProvCount = config.vzRtProvCount;
    this._ancestors.internalValue = config.ancestors;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bfd_if_pol_count - computed: false, optional: true, required: false
  private _bfdIfPolCount?: number; 
  public get bfdIfPolCount() {
    return this.getNumberAttribute('bfd_if_pol_count');
  }
  public set bfdIfPolCount(value: number) {
    this._bfdIfPolCount = value;
  }
  public resetBfdIfPolCount() {
    this._bfdIfPolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIfPolCountInput() {
    return this._bfdIfPolCount;
  }

  // bfd_ifp_count - computed: false, optional: true, required: false
  private _bfdIfpCount?: number; 
  public get bfdIfpCount() {
    return this.getNumberAttribute('bfd_ifp_count');
  }
  public set bfdIfpCount(value: number) {
    this._bfdIfpCount = value;
  }
  public resetBfdIfpCount() {
    this._bfdIfpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIfpCountInput() {
    return this._bfdIfpCount;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // dhcp_rs_prov_count - computed: false, optional: true, required: false
  private _dhcpRsProvCount?: number; 
  public get dhcpRsProvCount() {
    return this.getNumberAttribute('dhcp_rs_prov_count');
  }
  public set dhcpRsProvCount(value: number) {
    this._dhcpRsProvCount = value;
  }
  public resetDhcpRsProvCount() {
    this._dhcpRsProvCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRsProvCountInput() {
    return this._dhcpRsProvCount;
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // fhs_bd_pol_count - computed: false, optional: true, required: false
  private _fhsBdPolCount?: number; 
  public get fhsBdPolCount() {
    return this.getNumberAttribute('fhs_bd_pol_count');
  }
  public set fhsBdPolCount(value: number) {
    this._fhsBdPolCount = value;
  }
  public resetFhsBdPolCount() {
    this._fhsBdPolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fhsBdPolCountInput() {
    return this._fhsBdPolCount;
  }

  // fv_ap_count - computed: false, optional: true, required: false
  private _fvApCount?: number; 
  public get fvApCount() {
    return this.getNumberAttribute('fv_ap_count');
  }
  public set fvApCount(value: number) {
    this._fvApCount = value;
  }
  public resetFvApCount() {
    this._fvApCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvApCountInput() {
    return this._fvApCount;
  }

  // fv_bd_count - computed: false, optional: true, required: false
  private _fvBdCount?: number; 
  public get fvBdCount() {
    return this.getNumberAttribute('fv_bd_count');
  }
  public set fvBdCount(value: number) {
    this._fvBdCount = value;
  }
  public resetFvBdCount() {
    this._fvBdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvBdCountInput() {
    return this._fvBdCount;
  }

  // fv_bd_subnet_count - computed: false, optional: true, required: false
  private _fvBdSubnetCount?: number; 
  public get fvBdSubnetCount() {
    return this.getNumberAttribute('fv_bd_subnet_count');
  }
  public set fvBdSubnetCount(value: number) {
    this._fvBdSubnetCount = value;
  }
  public resetFvBdSubnetCount() {
    this._fvBdSubnetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvBdSubnetCountInput() {
    return this._fvBdSubnetCount;
  }

  // fv_bdno_arp_count - computed: false, optional: true, required: false
  private _fvBdnoArpCount?: number; 
  public get fvBdnoArpCount() {
    return this.getNumberAttribute('fv_bdno_arp_count');
  }
  public set fvBdnoArpCount(value: number) {
    this._fvBdnoArpCount = value;
  }
  public resetFvBdnoArpCount() {
    this._fvBdnoArpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvBdnoArpCountInput() {
    return this._fvBdnoArpCount;
  }

  // fv_cep_count - computed: false, optional: true, required: false
  private _fvCepCount?: number; 
  public get fvCepCount() {
    return this.getNumberAttribute('fv_cep_count');
  }
  public set fvCepCount(value: number) {
    this._fvCepCount = value;
  }
  public resetFvCepCount() {
    this._fvCepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvCepCountInput() {
    return this._fvCepCount;
  }

  // fv_rs_bd_to_fhs_count - computed: false, optional: true, required: false
  private _fvRsBdToFhsCount?: number; 
  public get fvRsBdToFhsCount() {
    return this.getNumberAttribute('fv_rs_bd_to_fhs_count');
  }
  public set fvRsBdToFhsCount(value: number) {
    this._fvRsBdToFhsCount = value;
  }
  public resetFvRsBdToFhsCount() {
    this._fvRsBdToFhsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvRsBdToFhsCountInput() {
    return this._fvRsBdToFhsCount;
  }

  // fv_rs_bd_to_out_count - computed: false, optional: true, required: false
  private _fvRsBdToOutCount?: number; 
  public get fvRsBdToOutCount() {
    return this.getNumberAttribute('fv_rs_bd_to_out_count');
  }
  public set fvRsBdToOutCount(value: number) {
    this._fvRsBdToOutCount = value;
  }
  public resetFvRsBdToOutCount() {
    this._fvRsBdToOutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvRsBdToOutCountInput() {
    return this._fvRsBdToOutCount;
  }

  // fv_site_connp_count - computed: false, optional: true, required: false
  private _fvSiteConnpCount?: number; 
  public get fvSiteConnpCount() {
    return this.getNumberAttribute('fv_site_connp_count');
  }
  public set fvSiteConnpCount(value: number) {
    this._fvSiteConnpCount = value;
  }
  public resetFvSiteConnpCount() {
    this._fvSiteConnpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvSiteConnpCountInput() {
    return this._fvSiteConnpCount;
  }

  // fv_subnet_count - computed: false, optional: true, required: false
  private _fvSubnetCount?: number; 
  public get fvSubnetCount() {
    return this.getNumberAttribute('fv_subnet_count');
  }
  public set fvSubnetCount(value: number) {
    this._fvSubnetCount = value;
  }
  public resetFvSubnetCount() {
    this._fvSubnetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvSubnetCountInput() {
    return this._fvSubnetCount;
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

  // ip_static_route_count - computed: false, optional: true, required: false
  private _ipStaticRouteCount?: number; 
  public get ipStaticRouteCount() {
    return this.getNumberAttribute('ip_static_route_count');
  }
  public set ipStaticRouteCount(value: number) {
    this._ipStaticRouteCount = value;
  }
  public resetIpStaticRouteCount() {
    this._ipStaticRouteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStaticRouteCountInput() {
    return this._ipStaticRouteCount;
  }

  // l3_multicast_count - computed: false, optional: true, required: false
  private _l3MulticastCount?: number; 
  public get l3MulticastCount() {
    return this.getNumberAttribute('l3_multicast_count');
  }
  public set l3MulticastCount(value: number) {
    this._l3MulticastCount = value;
  }
  public resetL3MulticastCount() {
    this._l3MulticastCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MulticastCountInput() {
    return this._l3MulticastCount;
  }

  // l3_multicast_ctx_count - computed: false, optional: true, required: false
  private _l3MulticastCtxCount?: number; 
  public get l3MulticastCtxCount() {
    return this.getNumberAttribute('l3_multicast_ctx_count');
  }
  public set l3MulticastCtxCount(value: number) {
    this._l3MulticastCtxCount = value;
  }
  public resetL3MulticastCtxCount() {
    this._l3MulticastCtxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MulticastCtxCountInput() {
    return this._l3MulticastCtxCount;
  }

  // l3_multicast_if_count - computed: false, optional: true, required: false
  private _l3MulticastIfCount?: number; 
  public get l3MulticastIfCount() {
    return this.getNumberAttribute('l3_multicast_if_count');
  }
  public set l3MulticastIfCount(value: number) {
    this._l3MulticastIfCount = value;
  }
  public resetL3MulticastIfCount() {
    this._l3MulticastIfCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MulticastIfCountInput() {
    return this._l3MulticastIfCount;
  }

  // l3out_count - computed: false, optional: true, required: false
  private _l3OutCount?: number; 
  public get l3OutCount() {
    return this.getNumberAttribute('l3out_count');
  }
  public set l3OutCount(value: number) {
    this._l3OutCount = value;
  }
  public resetL3OutCount() {
    this._l3OutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutCountInput() {
    return this._l3OutCount;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // qos_custom_pol_count - computed: false, optional: true, required: false
  private _qosCustomPolCount?: number; 
  public get qosCustomPolCount() {
    return this.getNumberAttribute('qos_custom_pol_count');
  }
  public set qosCustomPolCount(value: number) {
    this._qosCustomPolCount = value;
  }
  public resetQosCustomPolCount() {
    this._qosCustomPolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosCustomPolCountInput() {
    return this._qosCustomPolCount;
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

  // record_version - computed: false, optional: true, required: false
  private _recordVersion?: string; 
  public get recordVersion() {
    return this.getStringAttribute('record_version');
  }
  public set recordVersion(value: string) {
    this._recordVersion = value;
  }
  public resetRecordVersion() {
    this._recordVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordVersionInput() {
    return this._recordVersion;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightNiatelemetryTenantResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // site_name - computed: false, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // ssm - computed: false, optional: true, required: false
  private _ssm?: string; 
  public get ssm() {
    return this.getStringAttribute('ssm');
  }
  public set ssm(value: string) {
    this._ssm = value;
  }
  public resetSsm() {
    this._ssm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInput() {
    return this._ssm;
  }

  // ssm_count - computed: false, optional: true, required: false
  private _ssmCount?: number; 
  public get ssmCount() {
    return this.getNumberAttribute('ssm_count');
  }
  public set ssmCount(value: number) {
    this._ssmCount = value;
  }
  public resetSsmCount() {
    this._ssmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmCountInput() {
    return this._ssmCount;
  }

  // tcam_opt_count - computed: false, optional: true, required: false
  private _tcamOptCount?: number; 
  public get tcamOptCount() {
    return this.getNumberAttribute('tcam_opt_count');
  }
  public set tcamOptCount(value: number) {
    this._tcamOptCount = value;
  }
  public resetTcamOptCount() {
    this._tcamOptCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcamOptCountInput() {
    return this._tcamOptCount;
  }

  // tenant_health - computed: false, optional: true, required: false
  private _tenantHealth?: number; 
  public get tenantHealth() {
    return this.getNumberAttribute('tenant_health');
  }
  public set tenantHealth(value: number) {
    this._tenantHealth = value;
  }
  public resetTenantHealth() {
    this._tenantHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantHealthInput() {
    return this._tenantHealth;
  }

  // trace_route_ep_count - computed: false, optional: true, required: false
  private _traceRouteEpCount?: number; 
  public get traceRouteEpCount() {
    return this.getNumberAttribute('trace_route_ep_count');
  }
  public set traceRouteEpCount(value: number) {
    this._traceRouteEpCount = value;
  }
  public resetTraceRouteEpCount() {
    this._traceRouteEpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEpCountInput() {
    return this._traceRouteEpCount;
  }

  // trace_route_ep_ext_count - computed: false, optional: true, required: false
  private _traceRouteEpExtCount?: number; 
  public get traceRouteEpExtCount() {
    return this.getNumberAttribute('trace_route_ep_ext_count');
  }
  public set traceRouteEpExtCount(value: number) {
    this._traceRouteEpExtCount = value;
  }
  public resetTraceRouteEpExtCount() {
    this._traceRouteEpExtCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEpExtCountInput() {
    return this._traceRouteEpExtCount;
  }

  // trace_route_ext_ep_count - computed: false, optional: true, required: false
  private _traceRouteExtEpCount?: number; 
  public get traceRouteExtEpCount() {
    return this.getNumberAttribute('trace_route_ext_ep_count');
  }
  public set traceRouteExtEpCount(value: number) {
    this._traceRouteExtEpCount = value;
  }
  public resetTraceRouteExtEpCount() {
    this._traceRouteExtEpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteExtEpCountInput() {
    return this._traceRouteExtEpCount;
  }

  // trace_route_ext_ext_count - computed: false, optional: true, required: false
  private _traceRouteExtExtCount?: number; 
  public get traceRouteExtExtCount() {
    return this.getNumberAttribute('trace_route_ext_ext_count');
  }
  public set traceRouteExtExtCount(value: number) {
    this._traceRouteExtExtCount = value;
  }
  public resetTraceRouteExtExtCount() {
    this._traceRouteExtExtCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteExtExtCountInput() {
    return this._traceRouteExtExtCount;
  }

  // vns_abs_graph_count - computed: false, optional: true, required: false
  private _vnsAbsGraphCount?: number; 
  public get vnsAbsGraphCount() {
    return this.getNumberAttribute('vns_abs_graph_count');
  }
  public set vnsAbsGraphCount(value: number) {
    this._vnsAbsGraphCount = value;
  }
  public resetVnsAbsGraphCount() {
    this._vnsAbsGraphCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnsAbsGraphCountInput() {
    return this._vnsAbsGraphCount;
  }

  // vns_backup_pol_count - computed: false, optional: true, required: false
  private _vnsBackupPolCount?: number; 
  public get vnsBackupPolCount() {
    return this.getNumberAttribute('vns_backup_pol_count');
  }
  public set vnsBackupPolCount(value: number) {
    this._vnsBackupPolCount = value;
  }
  public resetVnsBackupPolCount() {
    this._vnsBackupPolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnsBackupPolCountInput() {
    return this._vnsBackupPolCount;
  }

  // vns_redirect_dest_count - computed: false, optional: true, required: false
  private _vnsRedirectDestCount?: number; 
  public get vnsRedirectDestCount() {
    return this.getNumberAttribute('vns_redirect_dest_count');
  }
  public set vnsRedirectDestCount(value: number) {
    this._vnsRedirectDestCount = value;
  }
  public resetVnsRedirectDestCount() {
    this._vnsRedirectDestCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnsRedirectDestCountInput() {
    return this._vnsRedirectDestCount;
  }

  // vns_svc_redirect_pol_count - computed: false, optional: true, required: false
  private _vnsSvcRedirectPolCount?: number; 
  public get vnsSvcRedirectPolCount() {
    return this.getNumberAttribute('vns_svc_redirect_pol_count');
  }
  public set vnsSvcRedirectPolCount(value: number) {
    this._vnsSvcRedirectPolCount = value;
  }
  public resetVnsSvcRedirectPolCount() {
    this._vnsSvcRedirectPolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnsSvcRedirectPolCountInput() {
    return this._vnsSvcRedirectPolCount;
  }

  // vrf_count - computed: false, optional: true, required: false
  private _vrfCount?: number; 
  public get vrfCount() {
    return this.getNumberAttribute('vrf_count');
  }
  public set vrfCount(value: number) {
    this._vrfCount = value;
  }
  public resetVrfCount() {
    this._vrfCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfCountInput() {
    return this._vrfCount;
  }

  // vz_br_cp_count - computed: false, optional: true, required: false
  private _vzBrCpCount?: number; 
  public get vzBrCpCount() {
    return this.getNumberAttribute('vz_br_cp_count');
  }
  public set vzBrCpCount(value: number) {
    this._vzBrCpCount = value;
  }
  public resetVzBrCpCount() {
    this._vzBrCpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vzBrCpCountInput() {
    return this._vzBrCpCount;
  }

  // vz_rt_cons_count - computed: false, optional: true, required: false
  private _vzRtConsCount?: number; 
  public get vzRtConsCount() {
    return this.getNumberAttribute('vz_rt_cons_count');
  }
  public set vzRtConsCount(value: number) {
    this._vzRtConsCount = value;
  }
  public resetVzRtConsCount() {
    this._vzRtConsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vzRtConsCountInput() {
    return this._vzRtConsCount;
  }

  // vz_rt_prov_count - computed: false, optional: true, required: false
  private _vzRtProvCount?: number; 
  public get vzRtProvCount() {
    return this.getNumberAttribute('vz_rt_prov_count');
  }
  public set vzRtProvCount(value: number) {
    this._vzRtProvCount = value;
  }
  public resetVzRtProvCount() {
    this._vzRtProvCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vzRtProvCountInput() {
    return this._vzRtProvCount;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightNiatelemetryTenantAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightNiatelemetryTenantAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightNiatelemetryTenantParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightNiatelemetryTenantParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightNiatelemetryTenantPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightNiatelemetryTenantPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // registered_device - computed: false, optional: true, required: false
  private _registeredDevice = new DataIntersightNiatelemetryTenantRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightNiatelemetryTenantRegisteredDevice) {
    this._registeredDevice.internalValue = value;
  }
  public resetRegisteredDevice() {
    this._registeredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredDeviceInput() {
    return this._registeredDevice.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightNiatelemetryTenantTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightNiatelemetryTenantTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightNiatelemetryTenantVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightNiatelemetryTenantVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      bfd_if_pol_count: cdktf.numberToTerraform(this._bfdIfPolCount),
      bfd_ifp_count: cdktf.numberToTerraform(this._bfdIfpCount),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      dhcp_rs_prov_count: cdktf.numberToTerraform(this._dhcpRsProvCount),
      dn: cdktf.stringToTerraform(this._dn),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      fhs_bd_pol_count: cdktf.numberToTerraform(this._fhsBdPolCount),
      fv_ap_count: cdktf.numberToTerraform(this._fvApCount),
      fv_bd_count: cdktf.numberToTerraform(this._fvBdCount),
      fv_bd_subnet_count: cdktf.numberToTerraform(this._fvBdSubnetCount),
      fv_bdno_arp_count: cdktf.numberToTerraform(this._fvBdnoArpCount),
      fv_cep_count: cdktf.numberToTerraform(this._fvCepCount),
      fv_rs_bd_to_fhs_count: cdktf.numberToTerraform(this._fvRsBdToFhsCount),
      fv_rs_bd_to_out_count: cdktf.numberToTerraform(this._fvRsBdToOutCount),
      fv_site_connp_count: cdktf.numberToTerraform(this._fvSiteConnpCount),
      fv_subnet_count: cdktf.numberToTerraform(this._fvSubnetCount),
      id: cdktf.stringToTerraform(this._id),
      ip_static_route_count: cdktf.numberToTerraform(this._ipStaticRouteCount),
      l3_multicast_count: cdktf.numberToTerraform(this._l3MulticastCount),
      l3_multicast_ctx_count: cdktf.numberToTerraform(this._l3MulticastCtxCount),
      l3_multicast_if_count: cdktf.numberToTerraform(this._l3MulticastIfCount),
      l3out_count: cdktf.numberToTerraform(this._l3OutCount),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      qos_custom_pol_count: cdktf.numberToTerraform(this._qosCustomPolCount),
      record_type: cdktf.stringToTerraform(this._recordType),
      record_version: cdktf.stringToTerraform(this._recordVersion),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      site_name: cdktf.stringToTerraform(this._siteName),
      ssm: cdktf.stringToTerraform(this._ssm),
      ssm_count: cdktf.numberToTerraform(this._ssmCount),
      tcam_opt_count: cdktf.numberToTerraform(this._tcamOptCount),
      tenant_health: cdktf.numberToTerraform(this._tenantHealth),
      trace_route_ep_count: cdktf.numberToTerraform(this._traceRouteEpCount),
      trace_route_ep_ext_count: cdktf.numberToTerraform(this._traceRouteEpExtCount),
      trace_route_ext_ep_count: cdktf.numberToTerraform(this._traceRouteExtEpCount),
      trace_route_ext_ext_count: cdktf.numberToTerraform(this._traceRouteExtExtCount),
      vns_abs_graph_count: cdktf.numberToTerraform(this._vnsAbsGraphCount),
      vns_backup_pol_count: cdktf.numberToTerraform(this._vnsBackupPolCount),
      vns_redirect_dest_count: cdktf.numberToTerraform(this._vnsRedirectDestCount),
      vns_svc_redirect_pol_count: cdktf.numberToTerraform(this._vnsSvcRedirectPolCount),
      vrf_count: cdktf.numberToTerraform(this._vrfCount),
      vz_br_cp_count: cdktf.numberToTerraform(this._vzBrCpCount),
      vz_rt_cons_count: cdktf.numberToTerraform(this._vzRtConsCount),
      vz_rt_prov_count: cdktf.numberToTerraform(this._vzRtProvCount),
      ancestors: cdktf.listMapper(dataIntersightNiatelemetryTenantAncestorsToTerraform, true)(this._ancestors.internalValue),
      parent: dataIntersightNiatelemetryTenantParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightNiatelemetryTenantPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      registered_device: dataIntersightNiatelemetryTenantRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      tags: cdktf.listMapper(dataIntersightNiatelemetryTenantTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightNiatelemetryTenantVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_if_pol_count: {
        value: cdktf.numberToHclTerraform(this._bfdIfPolCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_ifp_count: {
        value: cdktf.numberToHclTerraform(this._bfdIfpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_rs_prov_count: {
        value: cdktf.numberToHclTerraform(this._dhcpRsProvCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fhs_bd_pol_count: {
        value: cdktf.numberToHclTerraform(this._fhsBdPolCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_ap_count: {
        value: cdktf.numberToHclTerraform(this._fvApCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_bd_count: {
        value: cdktf.numberToHclTerraform(this._fvBdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_bd_subnet_count: {
        value: cdktf.numberToHclTerraform(this._fvBdSubnetCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_bdno_arp_count: {
        value: cdktf.numberToHclTerraform(this._fvBdnoArpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_cep_count: {
        value: cdktf.numberToHclTerraform(this._fvCepCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_rs_bd_to_fhs_count: {
        value: cdktf.numberToHclTerraform(this._fvRsBdToFhsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_rs_bd_to_out_count: {
        value: cdktf.numberToHclTerraform(this._fvRsBdToOutCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_site_connp_count: {
        value: cdktf.numberToHclTerraform(this._fvSiteConnpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fv_subnet_count: {
        value: cdktf.numberToHclTerraform(this._fvSubnetCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_static_route_count: {
        value: cdktf.numberToHclTerraform(this._ipStaticRouteCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_multicast_count: {
        value: cdktf.numberToHclTerraform(this._l3MulticastCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_multicast_ctx_count: {
        value: cdktf.numberToHclTerraform(this._l3MulticastCtxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_multicast_if_count: {
        value: cdktf.numberToHclTerraform(this._l3MulticastIfCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3out_count: {
        value: cdktf.numberToHclTerraform(this._l3OutCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      qos_custom_pol_count: {
        value: cdktf.numberToHclTerraform(this._qosCustomPolCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_version: {
        value: cdktf.stringToHclTerraform(this._recordVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssm: {
        value: cdktf.stringToHclTerraform(this._ssm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssm_count: {
        value: cdktf.numberToHclTerraform(this._ssmCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcam_opt_count: {
        value: cdktf.numberToHclTerraform(this._tcamOptCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_health: {
        value: cdktf.numberToHclTerraform(this._tenantHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace_route_ep_count: {
        value: cdktf.numberToHclTerraform(this._traceRouteEpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace_route_ep_ext_count: {
        value: cdktf.numberToHclTerraform(this._traceRouteEpExtCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace_route_ext_ep_count: {
        value: cdktf.numberToHclTerraform(this._traceRouteExtEpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace_route_ext_ext_count: {
        value: cdktf.numberToHclTerraform(this._traceRouteExtExtCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vns_abs_graph_count: {
        value: cdktf.numberToHclTerraform(this._vnsAbsGraphCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vns_backup_pol_count: {
        value: cdktf.numberToHclTerraform(this._vnsBackupPolCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vns_redirect_dest_count: {
        value: cdktf.numberToHclTerraform(this._vnsRedirectDestCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vns_svc_redirect_pol_count: {
        value: cdktf.numberToHclTerraform(this._vnsSvcRedirectPolCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_count: {
        value: cdktf.numberToHclTerraform(this._vrfCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vz_br_cp_count: {
        value: cdktf.numberToHclTerraform(this._vzBrCpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vz_rt_cons_count: {
        value: cdktf.numberToHclTerraform(this._vzRtConsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vz_rt_prov_count: {
        value: cdktf.numberToHclTerraform(this._vzRtProvCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryTenantAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryTenantAncestorsList",
      },
      parent: {
        value: dataIntersightNiatelemetryTenantParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryTenantParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryTenantPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryTenantPermissionResourcesList",
      },
      registered_device: {
        value: dataIntersightNiatelemetryTenantRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryTenantRegisteredDeviceList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryTenantTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryTenantTagsList",
      },
      version_context: {
        value: dataIntersightNiatelemetryTenantVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryTenantVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
