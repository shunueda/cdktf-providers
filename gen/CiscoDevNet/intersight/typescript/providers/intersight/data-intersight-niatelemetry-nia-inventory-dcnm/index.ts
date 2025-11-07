// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightNiatelemetryNiaInventoryDcnmConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#account_moid DataIntersightNiatelemetryNiaInventoryDcnm#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * Health of controller on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#controller_health DataIntersightNiatelemetryNiaInventoryDcnm#controller_health}
  */
  readonly controllerHealth?: number;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#create_time DataIntersightNiatelemetryNiaInventoryDcnm#create_time}
  */
  readonly createTime?: string;
  /**
  * Returns the value of the dev Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#dev DataIntersightNiatelemetryNiaInventoryDcnm#dev}
  */
  readonly dev?: boolean | cdktf.IResolvable;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#domain_group_moid DataIntersightNiatelemetryNiaInventoryDcnm#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Number of EPLD images uploaded to DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#epld_image_count DataIntersightNiatelemetryNiaInventoryDcnm#epld_image_count}
  */
  readonly epldImageCount?: number;
  /**
  * Returns the value of the haEnabled field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#ha_enabled DataIntersightNiatelemetryNiaInventoryDcnm#ha_enabled}
  */
  readonly haEnabled?: boolean | cdktf.IResolvable;
  /**
  * Returns the value of the haReplicationStatus field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#ha_replication_status DataIntersightNiatelemetryNiaInventoryDcnm#ha_replication_status}
  */
  readonly haReplicationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#id DataIntersightNiatelemetryNiaInventoryDcnm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Returns the value of the install field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#install DataIntersightNiatelemetryNiaInventoryDcnm#install}
  */
  readonly install?: string;
  /**
  * Installation type of controller on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#installation_type DataIntersightNiatelemetryNiaInventoryDcnm#installation_type}
  */
  readonly installationType?: string;
  /**
  * Installation type description of controller on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#installation_type_description DataIntersightNiatelemetryNiaInventoryDcnm#installation_type_description}
  */
  readonly installationTypeDescription?: string;
  /**
  * Returns true if ISN is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#is_isn_configured DataIntersightNiatelemetryNiaInventoryDcnm#is_isn_configured}
  */
  readonly isIsnConfigured?: boolean | cdktf.IResolvable;
  /**
  * Returns the value of the isMediaController field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#is_media_controller DataIntersightNiatelemetryNiaInventoryDcnm#is_media_controller}
  */
  readonly isMediaController?: boolean | cdktf.IResolvable;
  /**
  * Returns true if the Smart license is enabled and is in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#is_smart_license_enabled DataIntersightNiatelemetryNiaInventoryDcnm#is_smart_license_enabled}
  */
  readonly isSmartLicenseEnabled?: boolean | cdktf.IResolvable;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#mod_time DataIntersightNiatelemetryNiaInventoryDcnm#mod_time}
  */
  readonly modTime?: string;
  /**
  * Mode of controller on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#mode DataIntersightNiatelemetryNiaInventoryDcnm#mode}
  */
  readonly mode?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * NDFC name information of the setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#ndfc_fabric_name DataIntersightNiatelemetryNiaInventoryDcnm#ndfc_fabric_name}
  */
  readonly ndfcFabricName?: string;
  /**
  * NDFC status information for the setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#ndfc_oper_state DataIntersightNiatelemetryNiaInventoryDcnm#ndfc_oper_state}
  */
  readonly ndfcOperState?: string;
  /**
  * Returns the value of the version field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#nr_version DataIntersightNiatelemetryNiaInventoryDcnm#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Returns the number of DCNM site fabrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_dcnm_site DataIntersightNiatelemetryNiaInventoryDcnm#num_dcnm_site}
  */
  readonly numDcnmSite?: number;
  /**
  * Returns total number of fabrics in DCNM set-up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_fabrics DataIntersightNiatelemetryNiaInventoryDcnm#num_fabrics}
  */
  readonly numFabrics?: number;
  /**
  * Returns the number of fabrics in msd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_fabrics_in_msd DataIntersightNiatelemetryNiaInventoryDcnm#num_fabrics_in_msd}
  */
  readonly numFabricsInMsd?: number;
  /**
  * Returns the number of fabrics that have ingress replication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_ingress_replication_fabrics DataIntersightNiatelemetryNiaInventoryDcnm#num_ingress_replication_fabrics}
  */
  readonly numIngressReplicationFabrics?: number;
  /**
  * Returns the number of local users other than admin user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_local_users DataIntersightNiatelemetryNiaInventoryDcnm#num_local_users}
  */
  readonly numLocalUsers?: number;
  /**
  * Returns the number of MSD fabrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_msd DataIntersightNiatelemetryNiaInventoryDcnm#num_msd}
  */
  readonly numMsd?: number;
  /**
  * Returns the number of svi interfaces configured for VRF vlans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_svi_vrf_count DataIntersightNiatelemetryNiaInventoryDcnm#num_svi_vrf_count}
  */
  readonly numSviVrfCount?: number;
  /**
  * Returns the number of links where TRM is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_trm_enabled_count DataIntersightNiatelemetryNiaInventoryDcnm#num_trm_enabled_count}
  */
  readonly numTrmEnabledCount?: number;
  /**
  * Number of users who have upgrade privileges excluding the admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#num_upg_users DataIntersightNiatelemetryNiaInventoryDcnm#num_upg_users}
  */
  readonly numUpgUsers?: number;
  /**
  * Number of NXOS images uploaded to DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#nxos_image_count DataIntersightNiatelemetryNiaInventoryDcnm#nxos_image_count}
  */
  readonly nxosImageCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
  */
  readonly objectType?: string;
  /**
  * Out of band IP of controller on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#outofband_ip DataIntersightNiatelemetryNiaInventoryDcnm#outofband_ip}
  */
  readonly outofbandIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#owners DataIntersightNiatelemetryNiaInventoryDcnm#owners}
  */
  readonly owners?: string[];
  /**
  * Type of record DCNM / APIC / SE. This determines the type of platform where inventory was collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#record_type DataIntersightNiatelemetryNiaInventoryDcnm#record_type}
  */
  readonly recordType?: string;
  /**
  * Version of record being pushed. This determines what was the API version for data available from the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#record_version DataIntersightNiatelemetryNiaInventoryDcnm#record_version}
  */
  readonly recordVersion?: string;
  /**
  * Serial number of device being inventoried. The serial number is unique per device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#serial DataIntersightNiatelemetryNiaInventoryDcnm#serial}
  */
  readonly serial?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#shared_scope DataIntersightNiatelemetryNiaInventoryDcnm#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Name of fabric domain of the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#site_name DataIntersightNiatelemetryNiaInventoryDcnm#site_name}
  */
  readonly siteName?: string;
  /**
  * Returns the number of underlay peering active links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#underlay_peering_active_links_count DataIntersightNiatelemetryNiaInventoryDcnm#underlay_peering_active_links_count}
  */
  readonly underlayPeeringActiveLinksCount?: number;
  /**
  * Number of upgrade jobs configured on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#upg_job_count DataIntersightNiatelemetryNiaInventoryDcnm#upg_job_count}
  */
  readonly upgJobCount?: number;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#ancestors DataIntersightNiatelemetryNiaInventoryDcnm#ancestors}
  */
  readonly ancestors?: DataIntersightNiatelemetryNiaInventoryDcnmAncestors[] | cdktf.IResolvable;
  /**
  * golden_image_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#golden_image_details DataIntersightNiatelemetryNiaInventoryDcnm#golden_image_details}
  */
  readonly goldenImageDetails?: DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails[] | cdktf.IResolvable;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#network_info DataIntersightNiatelemetryNiaInventoryDcnm#network_info}
  */
  readonly networkInfo?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfo;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#parent DataIntersightNiatelemetryNiaInventoryDcnm#parent}
  */
  readonly parent?: DataIntersightNiatelemetryNiaInventoryDcnmParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#permission_resources DataIntersightNiatelemetryNiaInventoryDcnm#permission_resources}
  */
  readonly permissionResources?: DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources[] | cdktf.IResolvable;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#registered_device DataIntersightNiatelemetryNiaInventoryDcnm#registered_device}
  */
  readonly registeredDevice?: DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDevice;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#tags DataIntersightNiatelemetryNiaInventoryDcnm#tags}
  */
  readonly tags?: DataIntersightNiatelemetryNiaInventoryDcnmTags[] | cdktf.IResolvable;
  /**
  * upg_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#upg_status DataIntersightNiatelemetryNiaInventoryDcnm#upg_status}
  */
  readonly upgStatus?: DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#version_context DataIntersightNiatelemetryNiaInventoryDcnm#version_context}
  */
  readonly versionContext?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContext;
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestors {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestors | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetails {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetails | undefined) {
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

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetailsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNode {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNodeToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNodeToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNode | undefined) {
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

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // managementt_ip - computed: true, optional: false, required: false
  public get managementtIp() {
    return this.getStringAttribute('managementt_ip');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // outofband_ip - computed: true, optional: false, required: false
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNodeOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNode {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNodeToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNodeToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNode | undefined) {
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

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // managementt_ip - computed: true, optional: false, required: false
  public get managementtIp() {
    return this.getStringAttribute('managementt_ip');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // outofband_ip - computed: true, optional: false, required: false
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNodeOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfo {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_node - computed: true, optional: false, required: false
  private _activeNode = new DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoActiveNodeList(this, "active_node", false);
  public get activeNode() {
    return this._activeNode;
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // managementt_ip - computed: true, optional: false, required: false
  public get managementtIp() {
    return this.getStringAttribute('managementt_ip');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // outofband_ip - computed: true, optional: false, required: false
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }

  // standby_node - computed: true, optional: false, required: false
  private _standbyNode = new DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoStandbyNodeList(this, "standby_node", false);
  public get standbyNode() {
    return this._standbyNode;
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsParent {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsParentToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsParent | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsParentOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResources {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResources | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDevice {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDevice | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDeviceOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitions {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitions | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinition {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinition | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinitionOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsTags {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsTagsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsTags | undefined) {
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
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsDefinitionList(this, "definition", false);
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatus {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatus | undefined) {
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

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // upg_status - computed: true, optional: false, required: false
  public get upgStatus() {
    return this.getStringAttribute('upg_status');
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMos {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMos | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMo {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMo | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMoOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContext {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextInterestedMosList(this, "interested_mos", false);
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
  private _refMo = new DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextRefMoList(this, "ref_mo", false);
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

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmResults {
}

export function dataIntersightNiatelemetryNiaInventoryDcnmResultsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmResultsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmResults | undefined) {
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
  private _ancestors = new DataIntersightNiatelemetryNiaInventoryDcnmResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // controller_health - computed: true, optional: false, required: false
  public get controllerHealth() {
    return this.getNumberAttribute('controller_health');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dev - computed: true, optional: false, required: false
  public get dev() {
    return this.getBooleanAttribute('dev');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // epld_image_count - computed: true, optional: false, required: false
  public get epldImageCount() {
    return this.getNumberAttribute('epld_image_count');
  }

  // golden_image_details - computed: true, optional: false, required: false
  private _goldenImageDetails = new DataIntersightNiatelemetryNiaInventoryDcnmResultsGoldenImageDetailsList(this, "golden_image_details", false);
  public get goldenImageDetails() {
    return this._goldenImageDetails;
  }

  // ha_enabled - computed: true, optional: false, required: false
  public get haEnabled() {
    return this.getBooleanAttribute('ha_enabled');
  }

  // ha_replication_status - computed: true, optional: false, required: false
  public get haReplicationStatus() {
    return this.getStringAttribute('ha_replication_status');
  }

  // install - computed: true, optional: false, required: false
  public get install() {
    return this.getStringAttribute('install');
  }

  // installation_type - computed: true, optional: false, required: false
  public get installationType() {
    return this.getStringAttribute('installation_type');
  }

  // installation_type_description - computed: true, optional: false, required: false
  public get installationTypeDescription() {
    return this.getStringAttribute('installation_type_description');
  }

  // is_isn_configured - computed: true, optional: false, required: false
  public get isIsnConfigured() {
    return this.getBooleanAttribute('is_isn_configured');
  }

  // is_media_controller - computed: true, optional: false, required: false
  public get isMediaController() {
    return this.getBooleanAttribute('is_media_controller');
  }

  // is_smart_license_enabled - computed: true, optional: false, required: false
  public get isSmartLicenseEnabled() {
    return this.getBooleanAttribute('is_smart_license_enabled');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // ndfc_fabric_name - computed: true, optional: false, required: false
  public get ndfcFabricName() {
    return this.getStringAttribute('ndfc_fabric_name');
  }

  // ndfc_oper_state - computed: true, optional: false, required: false
  public get ndfcOperState() {
    return this.getStringAttribute('ndfc_oper_state');
  }

  // network_info - computed: true, optional: false, required: false
  private _networkInfo = new DataIntersightNiatelemetryNiaInventoryDcnmResultsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // num_dcnm_site - computed: true, optional: false, required: false
  public get numDcnmSite() {
    return this.getNumberAttribute('num_dcnm_site');
  }

  // num_fabrics - computed: true, optional: false, required: false
  public get numFabrics() {
    return this.getNumberAttribute('num_fabrics');
  }

  // num_fabrics_in_msd - computed: true, optional: false, required: false
  public get numFabricsInMsd() {
    return this.getNumberAttribute('num_fabrics_in_msd');
  }

  // num_ingress_replication_fabrics - computed: true, optional: false, required: false
  public get numIngressReplicationFabrics() {
    return this.getNumberAttribute('num_ingress_replication_fabrics');
  }

  // num_local_users - computed: true, optional: false, required: false
  public get numLocalUsers() {
    return this.getNumberAttribute('num_local_users');
  }

  // num_msd - computed: true, optional: false, required: false
  public get numMsd() {
    return this.getNumberAttribute('num_msd');
  }

  // num_svi_vrf_count - computed: true, optional: false, required: false
  public get numSviVrfCount() {
    return this.getNumberAttribute('num_svi_vrf_count');
  }

  // num_trm_enabled_count - computed: true, optional: false, required: false
  public get numTrmEnabledCount() {
    return this.getNumberAttribute('num_trm_enabled_count');
  }

  // num_upg_users - computed: true, optional: false, required: false
  public get numUpgUsers() {
    return this.getNumberAttribute('num_upg_users');
  }

  // nxos_image_count - computed: true, optional: false, required: false
  public get nxosImageCount() {
    return this.getNumberAttribute('nxos_image_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // outofband_ip - computed: true, optional: false, required: false
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightNiatelemetryNiaInventoryDcnmResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightNiatelemetryNiaInventoryDcnmResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
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
  private _registeredDevice = new DataIntersightNiatelemetryNiaInventoryDcnmResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightNiatelemetryNiaInventoryDcnmResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // underlay_peering_active_links_count - computed: true, optional: false, required: false
  public get underlayPeeringActiveLinksCount() {
    return this.getNumberAttribute('underlay_peering_active_links_count');
  }

  // upg_job_count - computed: true, optional: false, required: false
  public get upgJobCount() {
    return this.getNumberAttribute('upg_job_count');
  }

  // upg_status - computed: true, optional: false, required: false
  private _upgStatus = new DataIntersightNiatelemetryNiaInventoryDcnmResultsUpgStatusList(this, "upg_status", false);
  public get upgStatus() {
    return this._upgStatus;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightNiatelemetryNiaInventoryDcnmResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmResultsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmAncestors | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmAncestors | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmAncestors | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * Returns name of the image on controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#image_name DataIntersightNiatelemetryNiaInventoryDcnm#image_name}
  */
  readonly imageName?: string;
  /**
  * Returns name of the image on controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#name DataIntersightNiatelemetryNiaInventoryDcnm#name}
  */
  readonly name?: string;
  /**
  * Returns version of the image on controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#nr_version DataIntersightNiatelemetryNiaInventoryDcnm#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    name: cdktf.stringToTerraform(struct!.name),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails | cdktf.IResolvable): any {
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
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails | cdktf.IResolvable | undefined {
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
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._imageName = undefined;
      this._name = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
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
      this._imageName = value.imageName;
      this._name = value.name;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
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

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
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
}

export class DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * Returns hostname of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#hostname DataIntersightNiatelemetryNiaInventoryDcnm#hostname}
  */
  readonly hostname?: string;
  /**
  * Returns management IP of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#managementt_ip DataIntersightNiatelemetryNiaInventoryDcnm#managementt_ip}
  */
  readonly managementtIp?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns out of band IP of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#outofband_ip DataIntersightNiatelemetryNiaInventoryDcnm#outofband_ip}
  */
  readonly outofbandIp?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    managementt_ip: cdktf.stringToTerraform(struct!.managementtIp),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    outofband_ip: cdktf.stringToTerraform(struct!.outofbandIp),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNode): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managementt_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementtIp),
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
    outofband_ip: {
      value: cdktf.stringToHclTerraform(struct!.outofbandIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNode | undefined {
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
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._managementtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementtIp = this._managementtIp;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._outofbandIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.outofbandIp = this._outofbandIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._hostname = undefined;
      this._managementtIp = undefined;
      this._objectType = undefined;
      this._outofbandIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._hostname = value.hostname;
      this._managementtIp = value.managementtIp;
      this._objectType = value.objectType;
      this._outofbandIp = value.outofbandIp;
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

  // hostname - computed: false, optional: true, required: false
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

  // managementt_ip - computed: false, optional: true, required: false
  private _managementtIp?: string; 
  public get managementtIp() {
    return this.getStringAttribute('managementt_ip');
  }
  public set managementtIp(value: string) {
    this._managementtIp = value;
  }
  public resetManagementtIp() {
    this._managementtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementtIpInput() {
    return this._managementtIp;
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

  // outofband_ip - computed: false, optional: true, required: false
  private _outofbandIp?: string; 
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }
  public set outofbandIp(value: string) {
    this._outofbandIp = value;
  }
  public resetOutofbandIp() {
    this._outofbandIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outofbandIpInput() {
    return this._outofbandIp;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * Returns hostname of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#hostname DataIntersightNiatelemetryNiaInventoryDcnm#hostname}
  */
  readonly hostname?: string;
  /**
  * Returns management IP of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#managementt_ip DataIntersightNiatelemetryNiaInventoryDcnm#managementt_ip}
  */
  readonly managementtIp?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns out of band IP of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#outofband_ip DataIntersightNiatelemetryNiaInventoryDcnm#outofband_ip}
  */
  readonly outofbandIp?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    managementt_ip: cdktf.stringToTerraform(struct!.managementtIp),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    outofband_ip: cdktf.stringToTerraform(struct!.outofbandIp),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNode): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managementt_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementtIp),
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
    outofband_ip: {
      value: cdktf.stringToHclTerraform(struct!.outofbandIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNode | undefined {
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
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._managementtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementtIp = this._managementtIp;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._outofbandIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.outofbandIp = this._outofbandIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._hostname = undefined;
      this._managementtIp = undefined;
      this._objectType = undefined;
      this._outofbandIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._hostname = value.hostname;
      this._managementtIp = value.managementtIp;
      this._objectType = value.objectType;
      this._outofbandIp = value.outofbandIp;
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

  // hostname - computed: false, optional: true, required: false
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

  // managementt_ip - computed: false, optional: true, required: false
  private _managementtIp?: string; 
  public get managementtIp() {
    return this.getStringAttribute('managementt_ip');
  }
  public set managementtIp(value: string) {
    this._managementtIp = value;
  }
  public resetManagementtIp() {
    this._managementtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementtIpInput() {
    return this._managementtIp;
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

  // outofband_ip - computed: false, optional: true, required: false
  private _outofbandIp?: string; 
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }
  public set outofbandIp(value: string) {
    this._outofbandIp = value;
  }
  public resetOutofbandIp() {
    this._outofbandIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outofbandIpInput() {
    return this._outofbandIp;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * Returns hostname of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#hostname DataIntersightNiatelemetryNiaInventoryDcnm#hostname}
  */
  readonly hostname?: string;
  /**
  * Returns management IP of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#managementt_ip DataIntersightNiatelemetryNiaInventoryDcnm#managementt_ip}
  */
  readonly managementtIp?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns out of band IP of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#outofband_ip DataIntersightNiatelemetryNiaInventoryDcnm#outofband_ip}
  */
  readonly outofbandIp?: string;
  /**
  * active_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#active_node DataIntersightNiatelemetryNiaInventoryDcnm#active_node}
  */
  readonly activeNode?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNode;
  /**
  * standby_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#standby_node DataIntersightNiatelemetryNiaInventoryDcnm#standby_node}
  */
  readonly standbyNode?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNode;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    managementt_ip: cdktf.stringToTerraform(struct!.managementtIp),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    outofband_ip: cdktf.stringToTerraform(struct!.outofbandIp),
    active_node: dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeToTerraform(struct!.activeNode),
    standby_node: dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeToTerraform(struct!.standbyNode),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfo): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managementt_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementtIp),
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
    outofband_ip: {
      value: cdktf.stringToHclTerraform(struct!.outofbandIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_node: {
      value: dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeToHclTerraform(struct!.activeNode),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeList",
    },
    standby_node: {
      value: dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeToHclTerraform(struct!.standbyNode),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfo | undefined {
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
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._managementtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementtIp = this._managementtIp;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._outofbandIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.outofbandIp = this._outofbandIp;
    }
    if (this._activeNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNode = this._activeNode?.internalValue;
    }
    if (this._standbyNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyNode = this._standbyNode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._hostname = undefined;
      this._managementtIp = undefined;
      this._objectType = undefined;
      this._outofbandIp = undefined;
      this._activeNode.internalValue = undefined;
      this._standbyNode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._hostname = value.hostname;
      this._managementtIp = value.managementtIp;
      this._objectType = value.objectType;
      this._outofbandIp = value.outofbandIp;
      this._activeNode.internalValue = value.activeNode;
      this._standbyNode.internalValue = value.standbyNode;
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

  // hostname - computed: false, optional: true, required: false
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

  // managementt_ip - computed: false, optional: true, required: false
  private _managementtIp?: string; 
  public get managementtIp() {
    return this.getStringAttribute('managementt_ip');
  }
  public set managementtIp(value: string) {
    this._managementtIp = value;
  }
  public resetManagementtIp() {
    this._managementtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementtIpInput() {
    return this._managementtIp;
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

  // outofband_ip - computed: false, optional: true, required: false
  private _outofbandIp?: string; 
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }
  public set outofbandIp(value: string) {
    this._outofbandIp = value;
  }
  public resetOutofbandIp() {
    this._outofbandIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outofbandIpInput() {
    return this._outofbandIp;
  }

  // active_node - computed: false, optional: true, required: false
  private _activeNode = new DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNodeOutputReference(this, "active_node");
  public get activeNode() {
    return this._activeNode;
  }
  public putActiveNode(value: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoActiveNode) {
    this._activeNode.internalValue = value;
  }
  public resetActiveNode() {
    this._activeNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodeInput() {
    return this._activeNode.internalValue;
  }

  // standby_node - computed: false, optional: true, required: false
  private _standbyNode = new DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNodeOutputReference(this, "standby_node");
  public get standbyNode() {
    return this._standbyNode;
  }
  public putStandbyNode(value: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoStandbyNode) {
    this._standbyNode.internalValue = value;
  }
  public resetStandbyNode() {
    this._standbyNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNodeInput() {
    return this._standbyNode.internalValue;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmParentToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmParentOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmParent): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmParentOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmParent): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmParent | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmParent | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDevice): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDevice): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDevice | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDevice | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinition): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinition): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinition | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinition | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryDcnmTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#key DataIntersightNiatelemetryNiaInventoryDcnm#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#propagated DataIntersightNiatelemetryNiaInventoryDcnm#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#type DataIntersightNiatelemetryNiaInventoryDcnm#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#value DataIntersightNiatelemetryNiaInventoryDcnm#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#ancestor_definitions DataIntersightNiatelemetryNiaInventoryDcnm#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#definition DataIntersightNiatelemetryNiaInventoryDcnm#definition}
  */
  readonly definition?: DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinition;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmTagsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmTags | cdktf.IResolvable): any {
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
    ancestor_definitions: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmTags | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmTags | cdktf.IResolvable | undefined) {
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
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightNiatelemetryNiaInventoryDcnmTagsAncestorDefinitions[] | cdktf.IResolvable) {
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
  private _definition = new DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightNiatelemetryNiaInventoryDcnmTagsDefinition) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmTagsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * Returns the id of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#job_id DataIntersightNiatelemetryNiaInventoryDcnm#job_id}
  */
  readonly jobId?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns the status of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#upg_status DataIntersightNiatelemetryNiaInventoryDcnm#upg_status}
  */
  readonly upgStatus?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmUpgStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    job_id: cdktf.numberToTerraform(struct!.jobId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    upg_status: cdktf.stringToTerraform(struct!.upgStatus),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmUpgStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus | cdktf.IResolvable): any {
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
    job_id: {
      value: cdktf.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upg_status: {
      value: cdktf.stringToHclTerraform(struct!.upgStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmUpgStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus | cdktf.IResolvable | undefined {
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
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._upgStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgStatus = this._upgStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._jobId = undefined;
      this._objectType = undefined;
      this._upgStatus = undefined;
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
      this._jobId = value.jobId;
      this._objectType = value.objectType;
      this._upgStatus = value.upgStatus;
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

  // job_id - computed: false, optional: true, required: false
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

  // upg_status - computed: false, optional: true, required: false
  private _upgStatus?: string; 
  public get upgStatus() {
    return this.getStringAttribute('upg_status');
  }
  public set upgStatus(value: string) {
    this._upgStatus = value;
  }
  public resetUpgStatus() {
    this._upgStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgStatusInput() {
    return this._upgStatus;
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmUpgStatusList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmUpgStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmUpgStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#moid DataIntersightNiatelemetryNiaInventoryDcnm#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#selector DataIntersightNiatelemetryNiaInventoryDcnm#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMo): any {
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


export function dataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMo): any {
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

export class DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMo | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMo | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryDcnmVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#additional_properties DataIntersightNiatelemetryNiaInventoryDcnm#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#class_id DataIntersightNiatelemetryNiaInventoryDcnm#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#marked_for_deletion DataIntersightNiatelemetryNiaInventoryDcnm#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#nr_version DataIntersightNiatelemetryNiaInventoryDcnm#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#object_type DataIntersightNiatelemetryNiaInventoryDcnm#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#timestamp DataIntersightNiatelemetryNiaInventoryDcnm#timestamp}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#version_type DataIntersightNiatelemetryNiaInventoryDcnm#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#interested_mos DataIntersightNiatelemetryNiaInventoryDcnm#interested_mos}
  */
  readonly interestedMos?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#ref_mo DataIntersightNiatelemetryNiaInventoryDcnm#ref_mo}
  */
  readonly refMo?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMo;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmVersionContext): any {
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
    interested_mos: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextOutputReference | DataIntersightNiatelemetryNiaInventoryDcnmVersionContext): any {
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
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmVersionContext | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextInterestedMos[] | cdktf.IResolvable) {
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
  private _refMo = new DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightNiatelemetryNiaInventoryDcnmVersionContextRefMo) {
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
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm intersight_niatelemetry_nia_inventory_dcnm}
*/
export class DataIntersightNiatelemetryNiaInventoryDcnm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_niatelemetry_nia_inventory_dcnm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightNiatelemetryNiaInventoryDcnm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightNiatelemetryNiaInventoryDcnm to import
  * @param importFromId The id of the existing DataIntersightNiatelemetryNiaInventoryDcnm that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightNiatelemetryNiaInventoryDcnm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_niatelemetry_nia_inventory_dcnm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory_dcnm intersight_niatelemetry_nia_inventory_dcnm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightNiatelemetryNiaInventoryDcnmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightNiatelemetryNiaInventoryDcnmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_niatelemetry_nia_inventory_dcnm',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
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
    this._classId = config.classId;
    this._controllerHealth = config.controllerHealth;
    this._createTime = config.createTime;
    this._dev = config.dev;
    this._domainGroupMoid = config.domainGroupMoid;
    this._epldImageCount = config.epldImageCount;
    this._haEnabled = config.haEnabled;
    this._haReplicationStatus = config.haReplicationStatus;
    this._id = config.id;
    this._install = config.install;
    this._installationType = config.installationType;
    this._installationTypeDescription = config.installationTypeDescription;
    this._isIsnConfigured = config.isIsnConfigured;
    this._isMediaController = config.isMediaController;
    this._isSmartLicenseEnabled = config.isSmartLicenseEnabled;
    this._modTime = config.modTime;
    this._mode = config.mode;
    this._moid = config.moid;
    this._ndfcFabricName = config.ndfcFabricName;
    this._ndfcOperState = config.ndfcOperState;
    this._nrVersion = config.nrVersion;
    this._numDcnmSite = config.numDcnmSite;
    this._numFabrics = config.numFabrics;
    this._numFabricsInMsd = config.numFabricsInMsd;
    this._numIngressReplicationFabrics = config.numIngressReplicationFabrics;
    this._numLocalUsers = config.numLocalUsers;
    this._numMsd = config.numMsd;
    this._numSviVrfCount = config.numSviVrfCount;
    this._numTrmEnabledCount = config.numTrmEnabledCount;
    this._numUpgUsers = config.numUpgUsers;
    this._nxosImageCount = config.nxosImageCount;
    this._objectType = config.objectType;
    this._outofbandIp = config.outofbandIp;
    this._owners = config.owners;
    this._recordType = config.recordType;
    this._recordVersion = config.recordVersion;
    this._serial = config.serial;
    this._sharedScope = config.sharedScope;
    this._siteName = config.siteName;
    this._underlayPeeringActiveLinksCount = config.underlayPeeringActiveLinksCount;
    this._upgJobCount = config.upgJobCount;
    this._ancestors.internalValue = config.ancestors;
    this._goldenImageDetails.internalValue = config.goldenImageDetails;
    this._networkInfo.internalValue = config.networkInfo;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._tags.internalValue = config.tags;
    this._upgStatus.internalValue = config.upgStatus;
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

  // controller_health - computed: false, optional: true, required: false
  private _controllerHealth?: number; 
  public get controllerHealth() {
    return this.getNumberAttribute('controller_health');
  }
  public set controllerHealth(value: number) {
    this._controllerHealth = value;
  }
  public resetControllerHealth() {
    this._controllerHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerHealthInput() {
    return this._controllerHealth;
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

  // dev - computed: false, optional: true, required: false
  private _dev?: boolean | cdktf.IResolvable; 
  public get dev() {
    return this.getBooleanAttribute('dev');
  }
  public set dev(value: boolean | cdktf.IResolvable) {
    this._dev = value;
  }
  public resetDev() {
    this._dev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
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

  // epld_image_count - computed: false, optional: true, required: false
  private _epldImageCount?: number; 
  public get epldImageCount() {
    return this.getNumberAttribute('epld_image_count');
  }
  public set epldImageCount(value: number) {
    this._epldImageCount = value;
  }
  public resetEpldImageCount() {
    this._epldImageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epldImageCountInput() {
    return this._epldImageCount;
  }

  // ha_enabled - computed: false, optional: true, required: false
  private _haEnabled?: boolean | cdktf.IResolvable; 
  public get haEnabled() {
    return this.getBooleanAttribute('ha_enabled');
  }
  public set haEnabled(value: boolean | cdktf.IResolvable) {
    this._haEnabled = value;
  }
  public resetHaEnabled() {
    this._haEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEnabledInput() {
    return this._haEnabled;
  }

  // ha_replication_status - computed: false, optional: true, required: false
  private _haReplicationStatus?: string; 
  public get haReplicationStatus() {
    return this.getStringAttribute('ha_replication_status');
  }
  public set haReplicationStatus(value: string) {
    this._haReplicationStatus = value;
  }
  public resetHaReplicationStatus() {
    this._haReplicationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haReplicationStatusInput() {
    return this._haReplicationStatus;
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

  // install - computed: false, optional: true, required: false
  private _install?: string; 
  public get install() {
    return this.getStringAttribute('install');
  }
  public set install(value: string) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }

  // installation_type - computed: false, optional: true, required: false
  private _installationType?: string; 
  public get installationType() {
    return this.getStringAttribute('installation_type');
  }
  public set installationType(value: string) {
    this._installationType = value;
  }
  public resetInstallationType() {
    this._installationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationTypeInput() {
    return this._installationType;
  }

  // installation_type_description - computed: false, optional: true, required: false
  private _installationTypeDescription?: string; 
  public get installationTypeDescription() {
    return this.getStringAttribute('installation_type_description');
  }
  public set installationTypeDescription(value: string) {
    this._installationTypeDescription = value;
  }
  public resetInstallationTypeDescription() {
    this._installationTypeDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationTypeDescriptionInput() {
    return this._installationTypeDescription;
  }

  // is_isn_configured - computed: false, optional: true, required: false
  private _isIsnConfigured?: boolean | cdktf.IResolvable; 
  public get isIsnConfigured() {
    return this.getBooleanAttribute('is_isn_configured');
  }
  public set isIsnConfigured(value: boolean | cdktf.IResolvable) {
    this._isIsnConfigured = value;
  }
  public resetIsIsnConfigured() {
    this._isIsnConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIsnConfiguredInput() {
    return this._isIsnConfigured;
  }

  // is_media_controller - computed: false, optional: true, required: false
  private _isMediaController?: boolean | cdktf.IResolvable; 
  public get isMediaController() {
    return this.getBooleanAttribute('is_media_controller');
  }
  public set isMediaController(value: boolean | cdktf.IResolvable) {
    this._isMediaController = value;
  }
  public resetIsMediaController() {
    this._isMediaController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMediaControllerInput() {
    return this._isMediaController;
  }

  // is_smart_license_enabled - computed: false, optional: true, required: false
  private _isSmartLicenseEnabled?: boolean | cdktf.IResolvable; 
  public get isSmartLicenseEnabled() {
    return this.getBooleanAttribute('is_smart_license_enabled');
  }
  public set isSmartLicenseEnabled(value: boolean | cdktf.IResolvable) {
    this._isSmartLicenseEnabled = value;
  }
  public resetIsSmartLicenseEnabled() {
    this._isSmartLicenseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSmartLicenseEnabledInput() {
    return this._isSmartLicenseEnabled;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // ndfc_fabric_name - computed: false, optional: true, required: false
  private _ndfcFabricName?: string; 
  public get ndfcFabricName() {
    return this.getStringAttribute('ndfc_fabric_name');
  }
  public set ndfcFabricName(value: string) {
    this._ndfcFabricName = value;
  }
  public resetNdfcFabricName() {
    this._ndfcFabricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndfcFabricNameInput() {
    return this._ndfcFabricName;
  }

  // ndfc_oper_state - computed: false, optional: true, required: false
  private _ndfcOperState?: string; 
  public get ndfcOperState() {
    return this.getStringAttribute('ndfc_oper_state');
  }
  public set ndfcOperState(value: string) {
    this._ndfcOperState = value;
  }
  public resetNdfcOperState() {
    this._ndfcOperState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndfcOperStateInput() {
    return this._ndfcOperState;
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

  // num_dcnm_site - computed: false, optional: true, required: false
  private _numDcnmSite?: number; 
  public get numDcnmSite() {
    return this.getNumberAttribute('num_dcnm_site');
  }
  public set numDcnmSite(value: number) {
    this._numDcnmSite = value;
  }
  public resetNumDcnmSite() {
    this._numDcnmSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDcnmSiteInput() {
    return this._numDcnmSite;
  }

  // num_fabrics - computed: false, optional: true, required: false
  private _numFabrics?: number; 
  public get numFabrics() {
    return this.getNumberAttribute('num_fabrics');
  }
  public set numFabrics(value: number) {
    this._numFabrics = value;
  }
  public resetNumFabrics() {
    this._numFabrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFabricsInput() {
    return this._numFabrics;
  }

  // num_fabrics_in_msd - computed: false, optional: true, required: false
  private _numFabricsInMsd?: number; 
  public get numFabricsInMsd() {
    return this.getNumberAttribute('num_fabrics_in_msd');
  }
  public set numFabricsInMsd(value: number) {
    this._numFabricsInMsd = value;
  }
  public resetNumFabricsInMsd() {
    this._numFabricsInMsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFabricsInMsdInput() {
    return this._numFabricsInMsd;
  }

  // num_ingress_replication_fabrics - computed: false, optional: true, required: false
  private _numIngressReplicationFabrics?: number; 
  public get numIngressReplicationFabrics() {
    return this.getNumberAttribute('num_ingress_replication_fabrics');
  }
  public set numIngressReplicationFabrics(value: number) {
    this._numIngressReplicationFabrics = value;
  }
  public resetNumIngressReplicationFabrics() {
    this._numIngressReplicationFabrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numIngressReplicationFabricsInput() {
    return this._numIngressReplicationFabrics;
  }

  // num_local_users - computed: false, optional: true, required: false
  private _numLocalUsers?: number; 
  public get numLocalUsers() {
    return this.getNumberAttribute('num_local_users');
  }
  public set numLocalUsers(value: number) {
    this._numLocalUsers = value;
  }
  public resetNumLocalUsers() {
    this._numLocalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalUsersInput() {
    return this._numLocalUsers;
  }

  // num_msd - computed: false, optional: true, required: false
  private _numMsd?: number; 
  public get numMsd() {
    return this.getNumberAttribute('num_msd');
  }
  public set numMsd(value: number) {
    this._numMsd = value;
  }
  public resetNumMsd() {
    this._numMsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMsdInput() {
    return this._numMsd;
  }

  // num_svi_vrf_count - computed: false, optional: true, required: false
  private _numSviVrfCount?: number; 
  public get numSviVrfCount() {
    return this.getNumberAttribute('num_svi_vrf_count');
  }
  public set numSviVrfCount(value: number) {
    this._numSviVrfCount = value;
  }
  public resetNumSviVrfCount() {
    this._numSviVrfCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSviVrfCountInput() {
    return this._numSviVrfCount;
  }

  // num_trm_enabled_count - computed: false, optional: true, required: false
  private _numTrmEnabledCount?: number; 
  public get numTrmEnabledCount() {
    return this.getNumberAttribute('num_trm_enabled_count');
  }
  public set numTrmEnabledCount(value: number) {
    this._numTrmEnabledCount = value;
  }
  public resetNumTrmEnabledCount() {
    this._numTrmEnabledCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTrmEnabledCountInput() {
    return this._numTrmEnabledCount;
  }

  // num_upg_users - computed: false, optional: true, required: false
  private _numUpgUsers?: number; 
  public get numUpgUsers() {
    return this.getNumberAttribute('num_upg_users');
  }
  public set numUpgUsers(value: number) {
    this._numUpgUsers = value;
  }
  public resetNumUpgUsers() {
    this._numUpgUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUpgUsersInput() {
    return this._numUpgUsers;
  }

  // nxos_image_count - computed: false, optional: true, required: false
  private _nxosImageCount?: number; 
  public get nxosImageCount() {
    return this.getNumberAttribute('nxos_image_count');
  }
  public set nxosImageCount(value: number) {
    this._nxosImageCount = value;
  }
  public resetNxosImageCount() {
    this._nxosImageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosImageCountInput() {
    return this._nxosImageCount;
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

  // outofband_ip - computed: false, optional: true, required: false
  private _outofbandIp?: string; 
  public get outofbandIp() {
    return this.getStringAttribute('outofband_ip');
  }
  public set outofbandIp(value: string) {
    this._outofbandIp = value;
  }
  public resetOutofbandIp() {
    this._outofbandIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outofbandIpInput() {
    return this._outofbandIp;
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
  private _results = new DataIntersightNiatelemetryNiaInventoryDcnmResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
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

  // underlay_peering_active_links_count - computed: false, optional: true, required: false
  private _underlayPeeringActiveLinksCount?: number; 
  public get underlayPeeringActiveLinksCount() {
    return this.getNumberAttribute('underlay_peering_active_links_count');
  }
  public set underlayPeeringActiveLinksCount(value: number) {
    this._underlayPeeringActiveLinksCount = value;
  }
  public resetUnderlayPeeringActiveLinksCount() {
    this._underlayPeeringActiveLinksCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayPeeringActiveLinksCountInput() {
    return this._underlayPeeringActiveLinksCount;
  }

  // upg_job_count - computed: false, optional: true, required: false
  private _upgJobCount?: number; 
  public get upgJobCount() {
    return this.getNumberAttribute('upg_job_count');
  }
  public set upgJobCount(value: number) {
    this._upgJobCount = value;
  }
  public resetUpgJobCount() {
    this._upgJobCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgJobCountInput() {
    return this._upgJobCount;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightNiatelemetryNiaInventoryDcnmAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightNiatelemetryNiaInventoryDcnmAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // golden_image_details - computed: false, optional: true, required: false
  private _goldenImageDetails = new DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsList(this, "golden_image_details", false);
  public get goldenImageDetails() {
    return this._goldenImageDetails;
  }
  public putGoldenImageDetails(value: DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetails[] | cdktf.IResolvable) {
    this._goldenImageDetails.internalValue = value;
  }
  public resetGoldenImageDetails() {
    this._goldenImageDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenImageDetailsInput() {
    return this._goldenImageDetails.internalValue;
  }

  // network_info - computed: false, optional: true, required: false
  private _networkInfo = new DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoOutputReference(this, "network_info");
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfo) {
    this._networkInfo.internalValue = value;
  }
  public resetNetworkInfo() {
    this._networkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightNiatelemetryNiaInventoryDcnmParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightNiatelemetryNiaInventoryDcnmParent) {
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
  private _permissionResources = new DataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightNiatelemetryNiaInventoryDcnmPermissionResources[] | cdktf.IResolvable) {
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
  private _registeredDevice = new DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDevice) {
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
  private _tags = new DataIntersightNiatelemetryNiaInventoryDcnmTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightNiatelemetryNiaInventoryDcnmTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // upg_status - computed: false, optional: true, required: false
  private _upgStatus = new DataIntersightNiatelemetryNiaInventoryDcnmUpgStatusList(this, "upg_status", false);
  public get upgStatus() {
    return this._upgStatus;
  }
  public putUpgStatus(value: DataIntersightNiatelemetryNiaInventoryDcnmUpgStatus[] | cdktf.IResolvable) {
    this._upgStatus.internalValue = value;
  }
  public resetUpgStatus() {
    this._upgStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgStatusInput() {
    return this._upgStatus.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightNiatelemetryNiaInventoryDcnmVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightNiatelemetryNiaInventoryDcnmVersionContext) {
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
      class_id: cdktf.stringToTerraform(this._classId),
      controller_health: cdktf.numberToTerraform(this._controllerHealth),
      create_time: cdktf.stringToTerraform(this._createTime),
      dev: cdktf.booleanToTerraform(this._dev),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      epld_image_count: cdktf.numberToTerraform(this._epldImageCount),
      ha_enabled: cdktf.booleanToTerraform(this._haEnabled),
      ha_replication_status: cdktf.stringToTerraform(this._haReplicationStatus),
      id: cdktf.stringToTerraform(this._id),
      install: cdktf.stringToTerraform(this._install),
      installation_type: cdktf.stringToTerraform(this._installationType),
      installation_type_description: cdktf.stringToTerraform(this._installationTypeDescription),
      is_isn_configured: cdktf.booleanToTerraform(this._isIsnConfigured),
      is_media_controller: cdktf.booleanToTerraform(this._isMediaController),
      is_smart_license_enabled: cdktf.booleanToTerraform(this._isSmartLicenseEnabled),
      mod_time: cdktf.stringToTerraform(this._modTime),
      mode: cdktf.stringToTerraform(this._mode),
      moid: cdktf.stringToTerraform(this._moid),
      ndfc_fabric_name: cdktf.stringToTerraform(this._ndfcFabricName),
      ndfc_oper_state: cdktf.stringToTerraform(this._ndfcOperState),
      nr_version: cdktf.stringToTerraform(this._nrVersion),
      num_dcnm_site: cdktf.numberToTerraform(this._numDcnmSite),
      num_fabrics: cdktf.numberToTerraform(this._numFabrics),
      num_fabrics_in_msd: cdktf.numberToTerraform(this._numFabricsInMsd),
      num_ingress_replication_fabrics: cdktf.numberToTerraform(this._numIngressReplicationFabrics),
      num_local_users: cdktf.numberToTerraform(this._numLocalUsers),
      num_msd: cdktf.numberToTerraform(this._numMsd),
      num_svi_vrf_count: cdktf.numberToTerraform(this._numSviVrfCount),
      num_trm_enabled_count: cdktf.numberToTerraform(this._numTrmEnabledCount),
      num_upg_users: cdktf.numberToTerraform(this._numUpgUsers),
      nxos_image_count: cdktf.numberToTerraform(this._nxosImageCount),
      object_type: cdktf.stringToTerraform(this._objectType),
      outofband_ip: cdktf.stringToTerraform(this._outofbandIp),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      record_type: cdktf.stringToTerraform(this._recordType),
      record_version: cdktf.stringToTerraform(this._recordVersion),
      serial: cdktf.stringToTerraform(this._serial),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      site_name: cdktf.stringToTerraform(this._siteName),
      underlay_peering_active_links_count: cdktf.numberToTerraform(this._underlayPeeringActiveLinksCount),
      upg_job_count: cdktf.numberToTerraform(this._upgJobCount),
      ancestors: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmAncestorsToTerraform, true)(this._ancestors.internalValue),
      golden_image_details: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsToTerraform, true)(this._goldenImageDetails.internalValue),
      network_info: dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoToTerraform(this._networkInfo.internalValue),
      parent: dataIntersightNiatelemetryNiaInventoryDcnmParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      registered_device: dataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      tags: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmTagsToTerraform, true)(this._tags.internalValue),
      upg_status: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmUpgStatusToTerraform, true)(this._upgStatus.internalValue),
      version_context: dataIntersightNiatelemetryNiaInventoryDcnmVersionContextToTerraform(this._versionContext.internalValue),
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
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_health: {
        value: cdktf.numberToHclTerraform(this._controllerHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev: {
        value: cdktf.booleanToHclTerraform(this._dev),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epld_image_count: {
        value: cdktf.numberToHclTerraform(this._epldImageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_enabled: {
        value: cdktf.booleanToHclTerraform(this._haEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_replication_status: {
        value: cdktf.stringToHclTerraform(this._haReplicationStatus),
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
      install: {
        value: cdktf.stringToHclTerraform(this._install),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation_type: {
        value: cdktf.stringToHclTerraform(this._installationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation_type_description: {
        value: cdktf.stringToHclTerraform(this._installationTypeDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_isn_configured: {
        value: cdktf.booleanToHclTerraform(this._isIsnConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_media_controller: {
        value: cdktf.booleanToHclTerraform(this._isMediaController),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_smart_license_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSmartLicenseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      ndfc_fabric_name: {
        value: cdktf.stringToHclTerraform(this._ndfcFabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndfc_oper_state: {
        value: cdktf.stringToHclTerraform(this._ndfcOperState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nr_version: {
        value: cdktf.stringToHclTerraform(this._nrVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_dcnm_site: {
        value: cdktf.numberToHclTerraform(this._numDcnmSite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_fabrics: {
        value: cdktf.numberToHclTerraform(this._numFabrics),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_fabrics_in_msd: {
        value: cdktf.numberToHclTerraform(this._numFabricsInMsd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_ingress_replication_fabrics: {
        value: cdktf.numberToHclTerraform(this._numIngressReplicationFabrics),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_local_users: {
        value: cdktf.numberToHclTerraform(this._numLocalUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_msd: {
        value: cdktf.numberToHclTerraform(this._numMsd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_svi_vrf_count: {
        value: cdktf.numberToHclTerraform(this._numSviVrfCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_trm_enabled_count: {
        value: cdktf.numberToHclTerraform(this._numTrmEnabledCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_upg_users: {
        value: cdktf.numberToHclTerraform(this._numUpgUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxos_image_count: {
        value: cdktf.numberToHclTerraform(this._nxosImageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outofband_ip: {
        value: cdktf.stringToHclTerraform(this._outofbandIp),
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
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
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
      underlay_peering_active_links_count: {
        value: cdktf.numberToHclTerraform(this._underlayPeeringActiveLinksCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upg_job_count: {
        value: cdktf.numberToHclTerraform(this._upgJobCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmAncestorsList",
      },
      golden_image_details: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsToHclTerraform, true)(this._goldenImageDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmGoldenImageDetailsList",
      },
      network_info: {
        value: dataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoToHclTerraform(this._networkInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmNetworkInfoList",
      },
      parent: {
        value: dataIntersightNiatelemetryNiaInventoryDcnmParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmPermissionResourcesList",
      },
      registered_device: {
        value: dataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmRegisteredDeviceList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmTagsList",
      },
      upg_status: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmUpgStatusToHclTerraform, true)(this._upgStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmUpgStatusList",
      },
      version_context: {
        value: dataIntersightNiatelemetryNiaInventoryDcnmVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
