// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightCapabilityAdapterUnitDescriptorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#account_moid DataIntersightCapabilityAdapterUnitDescriptor#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Generation of the adapter.
  * * `4` - Fourth generation adapters (14xx). The PIDs of these adapters end with the string 04.
  * * `2` - Second generation VIC adapters (12xx). The PIDs of these adapters end with the string 02.
  * * `3` - Third generation adapters (13xx). The PIDs of these adapters end with the string 03.
  * * `5` - Fifth generation adapters (15xx). The PIDs of these adapters contain the V5 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#adapter_generation DataIntersightCapabilityAdapterUnitDescriptor#adapter_generation}
  */
  readonly adapterGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Order in which the ports are connected; sequential or cyclic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#connectivity_order DataIntersightCapabilityAdapterUnitDescriptor#connectivity_order}
  */
  readonly connectivityOrder?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#create_time DataIntersightCapabilityAdapterUnitDescriptor#create_time}
  */
  readonly createTime?: string;
  /**
  * Detailed information about the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#description DataIntersightCapabilityAdapterUnitDescriptor#description}
  */
  readonly description?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#domain_group_moid DataIntersightCapabilityAdapterUnitDescriptor#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * The port speed for ethernet ports in Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#ethernet_port_speed DataIntersightCapabilityAdapterUnitDescriptor#ethernet_port_speed}
  */
  readonly ethernetPortSpeed?: number;
  /**
  * The port speed for fibre channel ports in Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#fibre_channel_port_speed DataIntersightCapabilityAdapterUnitDescriptor#fibre_channel_port_speed}
  */
  readonly fibreChannelPortSpeed?: number;
  /**
  * The number of SCSI I/O Queue resources to allocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#fibre_channel_scsi_ioq_limit DataIntersightCapabilityAdapterUnitDescriptor#fibre_channel_scsi_ioq_limit}
  */
  readonly fibreChannelScsiIoqLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#id DataIntersightCapabilityAdapterUnitDescriptor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates that the Azure Stack Host QoS feature is supported by this adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#is_azure_qos_supported DataIntersightCapabilityAdapterUnitDescriptor#is_azure_qos_supported}
  */
  readonly isAzureQosSupported?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the GENEVE offload feature is supported by this adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#is_geneve_supported DataIntersightCapabilityAdapterUnitDescriptor#is_geneve_supported}
  */
  readonly isGeneveSupported?: boolean | cdktf.IResolvable;
  /**
  * This field determines whether vNICs can be placed to the adapters. It is mandatory for all adapters. For third-party adapters, this field is set to 'false', meaning they will only be inventoried, and no LCP configuration will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#is_placement_applicable DataIntersightCapabilityAdapterUnitDescriptor#is_placement_applicable}
  */
  readonly isPlacementApplicable?: boolean | cdktf.IResolvable;
  /**
  * Indicates support for secure boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#is_secure_boot_supported DataIntersightCapabilityAdapterUnitDescriptor#is_secure_boot_supported}
  */
  readonly isSecureBootSupported?: boolean | cdktf.IResolvable;
  /**
  * Maximum Ring Size value for vNIC Receive Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#max_eth_rx_ring_size DataIntersightCapabilityAdapterUnitDescriptor#max_eth_rx_ring_size}
  */
  readonly maxEthRxRingSize?: number;
  /**
  * Maximum Ring Size value for vNIC Transmit Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#max_eth_tx_ring_size DataIntersightCapabilityAdapterUnitDescriptor#max_eth_tx_ring_size}
  */
  readonly maxEthTxRingSize?: number;
  /**
  * Maximum number of vNIC interfaces that can be RoCEv2 enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#max_rocev2_interfaces DataIntersightCapabilityAdapterUnitDescriptor#max_rocev2_interfaces}
  */
  readonly maxRocev2Interfaces?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#mod_time DataIntersightCapabilityAdapterUnitDescriptor#mod_time}
  */
  readonly modTime?: string;
  /**
  * The model of the endpoint, for which this capability information is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#model DataIntersightCapabilityAdapterUnitDescriptor#model}
  */
  readonly model?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The firmware or software version of the endpoint, for which this capability information is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#nr_version DataIntersightCapabilityAdapterUnitDescriptor#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Number of Dce Ports for the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#num_dce_ports DataIntersightCapabilityAdapterUnitDescriptor#num_dce_ports}
  */
  readonly numDcePorts?: number;
  /**
  * Indicates number of PCI Links of the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#number_of_pci_links DataIntersightCapabilityAdapterUnitDescriptor#number_of_pci_links}
  */
  readonly numberOfPciLinks?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#owners DataIntersightCapabilityAdapterUnitDescriptor#owners}
  */
  readonly owners?: string[];
  /**
  * Indicates PCI Link status of adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#pci_link DataIntersightCapabilityAdapterUnitDescriptor#pci_link}
  */
  readonly pciLink?: number;
  /**
  * Prom card type for the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#prom_card_type DataIntersightCapabilityAdapterUnitDescriptor#prom_card_type}
  */
  readonly promCardType?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#shared_scope DataIntersightCapabilityAdapterUnitDescriptor#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * The vendor of the endpoint, for which this capability information is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#vendor DataIntersightCapabilityAdapterUnitDescriptor#vendor}
  */
  readonly vendor?: string;
  /**
  * Vic Id assigned for the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#vic_id DataIntersightCapabilityAdapterUnitDescriptor#vic_id}
  */
  readonly vicId?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#ancestors DataIntersightCapabilityAdapterUnitDescriptor#ancestors}
  */
  readonly ancestors?: DataIntersightCapabilityAdapterUnitDescriptorAncestors[] | cdktf.IResolvable;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#capabilities DataIntersightCapabilityAdapterUnitDescriptor#capabilities}
  */
  readonly capabilities?: DataIntersightCapabilityAdapterUnitDescriptorCapabilities[] | cdktf.IResolvable;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#features DataIntersightCapabilityAdapterUnitDescriptor#features}
  */
  readonly features?: DataIntersightCapabilityAdapterUnitDescriptorFeatures[] | cdktf.IResolvable;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#parent DataIntersightCapabilityAdapterUnitDescriptor#parent}
  */
  readonly parent?: DataIntersightCapabilityAdapterUnitDescriptorParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#permission_resources DataIntersightCapabilityAdapterUnitDescriptor#permission_resources}
  */
  readonly permissionResources?: DataIntersightCapabilityAdapterUnitDescriptorPermissionResources[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#tags DataIntersightCapabilityAdapterUnitDescriptor#tags}
  */
  readonly tags?: DataIntersightCapabilityAdapterUnitDescriptorTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#version_context DataIntersightCapabilityAdapterUnitDescriptor#version_context}
  */
  readonly versionContext?: DataIntersightCapabilityAdapterUnitDescriptorVersionContext;
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsAncestors {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsAncestorsToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsAncestorsToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsAncestors | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsAncestorsOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilities {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsCapabilitiesToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsCapabilitiesToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilities | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilitiesOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrix {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrixToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrixToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrix | undefined) {
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

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // unsupportd_features - computed: true, optional: false, required: false
  public get unsupportdFeatures() {
    return this.getListAttribute('unsupportd_features');
  }
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrixList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrixOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsFeatures {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsFeatures | undefined) {
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

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // min_adapter_fw_version - computed: true, optional: false, required: false
  public get minAdapterFwVersion() {
    return this.getStringAttribute('min_adapter_fw_version');
  }

  // min_fw_version - computed: true, optional: false, required: false
  public get minFwVersion() {
    return this.getStringAttribute('min_fw_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // supported_fw_versions - computed: true, optional: false, required: false
  public get supportedFwVersions() {
    return this.getListAttribute('supported_fw_versions');
  }

  // supported_in_adapters - computed: true, optional: false, required: false
  public get supportedInAdapters() {
    return this.getListAttribute('supported_in_adapters');
  }

  // supported_in_generations - computed: true, optional: false, required: false
  public get supportedInGenerations() {
    return this.getNumberListAttribute('supported_in_generations');
  }

  // unsupported_feature_matrix - computed: true, optional: false, required: false
  private _unsupportedFeatureMatrix = new DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesUnsupportedFeatureMatrixList(this, "unsupported_feature_matrix", false);
  public get unsupportedFeatureMatrix() {
    return this._unsupportedFeatureMatrix;
  }

  // validation_action - computed: true, optional: false, required: false
  public get validationAction() {
    return this.getStringAttribute('validation_action');
  }
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsParent {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsParentToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsParentToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsParent | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsParentOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResources {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResourcesToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResourcesToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResources | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResourcesOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitions {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitions | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinition {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinitionToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinitionToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinition | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinitionOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsTags {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsTagsToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsTagsToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsTags | undefined) {
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
  private _ancestorDefinitions = new DataIntersightCapabilityAdapterUnitDescriptorResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightCapabilityAdapterUnitDescriptorResultsTagsDefinitionList(this, "definition", false);
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsTagsOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMos {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMos | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMo {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMoToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMo | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMoOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContext {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextInterestedMosList(this, "interested_mos", false);
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
  private _refMo = new DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextRefMoList(this, "ref_mo", false);
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

export class DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorResults {
}

export function dataIntersightCapabilityAdapterUnitDescriptorResultsToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorResultsToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorResults | undefined) {
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

  // adapter_generation - computed: true, optional: false, required: false
  public get adapterGeneration() {
    return this.getNumberAttribute('adapter_generation');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightCapabilityAdapterUnitDescriptorResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataIntersightCapabilityAdapterUnitDescriptorResultsCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // connectivity_order - computed: true, optional: false, required: false
  public get connectivityOrder() {
    return this.getStringAttribute('connectivity_order');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // ethernet_port_speed - computed: true, optional: false, required: false
  public get ethernetPortSpeed() {
    return this.getNumberAttribute('ethernet_port_speed');
  }

  // features - computed: true, optional: false, required: false
  private _features = new DataIntersightCapabilityAdapterUnitDescriptorResultsFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }

  // fibre_channel_port_speed - computed: true, optional: false, required: false
  public get fibreChannelPortSpeed() {
    return this.getNumberAttribute('fibre_channel_port_speed');
  }

  // fibre_channel_scsi_ioq_limit - computed: true, optional: false, required: false
  public get fibreChannelScsiIoqLimit() {
    return this.getNumberAttribute('fibre_channel_scsi_ioq_limit');
  }

  // is_azure_qos_supported - computed: true, optional: false, required: false
  public get isAzureQosSupported() {
    return this.getBooleanAttribute('is_azure_qos_supported');
  }

  // is_geneve_supported - computed: true, optional: false, required: false
  public get isGeneveSupported() {
    return this.getBooleanAttribute('is_geneve_supported');
  }

  // is_placement_applicable - computed: true, optional: false, required: false
  public get isPlacementApplicable() {
    return this.getBooleanAttribute('is_placement_applicable');
  }

  // is_secure_boot_supported - computed: true, optional: false, required: false
  public get isSecureBootSupported() {
    return this.getBooleanAttribute('is_secure_boot_supported');
  }

  // max_eth_rx_ring_size - computed: true, optional: false, required: false
  public get maxEthRxRingSize() {
    return this.getNumberAttribute('max_eth_rx_ring_size');
  }

  // max_eth_tx_ring_size - computed: true, optional: false, required: false
  public get maxEthTxRingSize() {
    return this.getNumberAttribute('max_eth_tx_ring_size');
  }

  // max_rocev2_interfaces - computed: true, optional: false, required: false
  public get maxRocev2Interfaces() {
    return this.getNumberAttribute('max_rocev2_interfaces');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // num_dce_ports - computed: true, optional: false, required: false
  public get numDcePorts() {
    return this.getNumberAttribute('num_dce_ports');
  }

  // number_of_pci_links - computed: true, optional: false, required: false
  public get numberOfPciLinks() {
    return this.getNumberAttribute('number_of_pci_links');
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
  private _parent = new DataIntersightCapabilityAdapterUnitDescriptorResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // pci_link - computed: true, optional: false, required: false
  public get pciLink() {
    return this.getNumberAttribute('pci_link');
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightCapabilityAdapterUnitDescriptorResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // prom_card_type - computed: true, optional: false, required: false
  public get promCardType() {
    return this.getStringAttribute('prom_card_type');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightCapabilityAdapterUnitDescriptorResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightCapabilityAdapterUnitDescriptorResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vic_id - computed: true, optional: false, required: false
  public get vicId() {
    return this.getStringAttribute('vic_id');
  }
}

export class DataIntersightCapabilityAdapterUnitDescriptorResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorResultsOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorAncestorsToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorAncestorsToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorAncestorsOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorCapabilitiesToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorCapabilitiesToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorCapabilities[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorCapabilitiesOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The adapter generations that support this feature.
  * * `4` - Fourth generation adapters (14xx). The PIDs of these adapters end with the string 04.
  * * `2` - Second generation VIC adapters (12xx). The PIDs of these adapters end with the string 02.
  * * `3` - Third generation adapters (13xx). The PIDs of these adapters end with the string 03.
  * * `5` - Fifth generation adapters (15xx). The PIDs of these adapters contain the V5 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#generation DataIntersightCapabilityAdapterUnitDescriptor#generation}
  */
  readonly generation?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#unsupportd_features DataIntersightCapabilityAdapterUnitDescriptor#unsupportd_features}
  */
  readonly unsupportdFeatures?: string[];
}

export function dataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    generation: cdktf.numberToTerraform(struct!.generation),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    unsupportd_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unsupportdFeatures),
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable): any {
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
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
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
    unsupportd_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unsupportdFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable | undefined {
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
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._unsupportdFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportdFeatures = this._unsupportdFeatures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._generation = undefined;
      this._objectType = undefined;
      this._unsupportdFeatures = undefined;
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
      this._generation = value.generation;
      this._objectType = value.objectType;
      this._unsupportdFeatures = value.unsupportdFeatures;
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

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
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

  // unsupportd_features - computed: false, optional: true, required: false
  private _unsupportdFeatures?: string[]; 
  public get unsupportdFeatures() {
    return this.getListAttribute('unsupportd_features');
  }
  public set unsupportdFeatures(value: string[]) {
    this._unsupportdFeatures = value;
  }
  public resetUnsupportdFeatures() {
    this._unsupportdFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportdFeaturesInput() {
    return this._unsupportdFeatures;
  }
}

export class DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Name of the feature that identifies the specific adapter configuration.
  * * `RoCEv2` - Capability indicator of the RDMA over Converged Ethernet (RoCE) feature version 2.
  * * `RoCEv1` - Capability indicator of the RDMA over Converged Ethernet (RoCE) feature version 1.
  * * `VMQ` - Capability indicator of the Virtual Machine Queue (VMQ) feature.
  * * `VMMQ` - Capability indicator of the Virtual Machine Multi-Queue (VMMQ) feature.
  * * `VMQInterrupts` - Capability indicator of the Virtual Machine Queue (VMQ) Interrupts feature.
  * * `NVGRE` - Capability indicator of the Network Virtualization using Generic Routing Encapsulation (NVGRE) feature.
  * * `ARFS` - Capability indicator of the Accelerated Receive Flow Steering (ARFS) feature.
  * * `VXLAN` - Capability indicator of the Virtual Extensible LAN (VXLAN) feature.
  * * `usNIC` - Capability indicator of the User Space NIC (usNIC) feature.
  * * `Advanced Filter` - Capability indicator of the Advanced Filter feature.
  * * `Azure Stack Host QOS` - Capability indicator of the Azure Stack Host QOS feature.
  * * `GENEVE Offload` - Capability indicator of the Generic Network Virtualization Encapsulation (Geneve) Offload feature.
  * * `QinQ` - Capability indicator of the QinQ feature.
  * * `SRIOV` - Capability indicator of the Single Root Input Output Virtualization (SR-IOV).
  * * `Ether Channel Pinning` - Capability indicator of the Ether Channel Pinning feature.
  * * `IPv6 Iscsi Boot` - Capability indicator of the Iscsi Boot via IPV6 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#feature_name DataIntersightCapabilityAdapterUnitDescriptor#feature_name}
  */
  readonly featureName?: string;
  /**
  * Firmware version of Adapter from which support for this feature is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#min_adapter_fw_version DataIntersightCapabilityAdapterUnitDescriptor#min_adapter_fw_version}
  */
  readonly minAdapterFwVersion?: string;
  /**
  * Firmware version of BMC from which support for this feature is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#min_fw_version DataIntersightCapabilityAdapterUnitDescriptor#min_fw_version}
  */
  readonly minFwVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#supported_fw_versions DataIntersightCapabilityAdapterUnitDescriptor#supported_fw_versions}
  */
  readonly supportedFwVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#supported_in_adapters DataIntersightCapabilityAdapterUnitDescriptor#supported_in_adapters}
  */
  readonly supportedInAdapters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#supported_in_generations DataIntersightCapabilityAdapterUnitDescriptor#supported_in_generations}
  */
  readonly supportedInGenerations?: number[];
  /**
  * Action to be taken when validation does not succeed.
  * * `Error` - Stop workflow execution by throwing error.
  * * `Skip` - Remove the feature from configuration and continue workflow execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#validation_action DataIntersightCapabilityAdapterUnitDescriptor#validation_action}
  */
  readonly validationAction?: string;
  /**
  * unsupported_feature_matrix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#unsupported_feature_matrix DataIntersightCapabilityAdapterUnitDescriptor#unsupported_feature_matrix}
  */
  readonly unsupportedFeatureMatrix?: DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix[] | cdktf.IResolvable;
}

export function dataIntersightCapabilityAdapterUnitDescriptorFeaturesToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    min_adapter_fw_version: cdktf.stringToTerraform(struct!.minAdapterFwVersion),
    min_fw_version: cdktf.stringToTerraform(struct!.minFwVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    supported_fw_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedFwVersions),
    supported_in_adapters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedInAdapters),
    supported_in_generations: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.supportedInGenerations),
    validation_action: cdktf.stringToTerraform(struct!.validationAction),
    unsupported_feature_matrix: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToTerraform, true)(struct!.unsupportedFeatureMatrix),
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorFeaturesToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable): any {
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
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_adapter_fw_version: {
      value: cdktf.stringToHclTerraform(struct!.minAdapterFwVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_fw_version: {
      value: cdktf.stringToHclTerraform(struct!.minFwVersion),
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
    supported_fw_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedFwVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_in_adapters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedInAdapters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_in_generations: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.supportedInGenerations),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    validation_action: {
      value: cdktf.stringToHclTerraform(struct!.validationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_feature_matrix: {
      value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToHclTerraform, true)(struct!.unsupportedFeatureMatrix),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilityAdapterUnitDescriptorFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable | undefined {
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
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._minAdapterFwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAdapterFwVersion = this._minAdapterFwVersion;
    }
    if (this._minFwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFwVersion = this._minFwVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._supportedFwVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedFwVersions = this._supportedFwVersions;
    }
    if (this._supportedInAdapters !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedInAdapters = this._supportedInAdapters;
    }
    if (this._supportedInGenerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedInGenerations = this._supportedInGenerations;
    }
    if (this._validationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationAction = this._validationAction;
    }
    if (this._unsupportedFeatureMatrix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedFeatureMatrix = this._unsupportedFeatureMatrix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._featureName = undefined;
      this._minAdapterFwVersion = undefined;
      this._minFwVersion = undefined;
      this._objectType = undefined;
      this._supportedFwVersions = undefined;
      this._supportedInAdapters = undefined;
      this._supportedInGenerations = undefined;
      this._validationAction = undefined;
      this._unsupportedFeatureMatrix.internalValue = undefined;
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
      this._featureName = value.featureName;
      this._minAdapterFwVersion = value.minAdapterFwVersion;
      this._minFwVersion = value.minFwVersion;
      this._objectType = value.objectType;
      this._supportedFwVersions = value.supportedFwVersions;
      this._supportedInAdapters = value.supportedInAdapters;
      this._supportedInGenerations = value.supportedInGenerations;
      this._validationAction = value.validationAction;
      this._unsupportedFeatureMatrix.internalValue = value.unsupportedFeatureMatrix;
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

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // min_adapter_fw_version - computed: false, optional: true, required: false
  private _minAdapterFwVersion?: string; 
  public get minAdapterFwVersion() {
    return this.getStringAttribute('min_adapter_fw_version');
  }
  public set minAdapterFwVersion(value: string) {
    this._minAdapterFwVersion = value;
  }
  public resetMinAdapterFwVersion() {
    this._minAdapterFwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdapterFwVersionInput() {
    return this._minAdapterFwVersion;
  }

  // min_fw_version - computed: false, optional: true, required: false
  private _minFwVersion?: string; 
  public get minFwVersion() {
    return this.getStringAttribute('min_fw_version');
  }
  public set minFwVersion(value: string) {
    this._minFwVersion = value;
  }
  public resetMinFwVersion() {
    this._minFwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFwVersionInput() {
    return this._minFwVersion;
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

  // supported_fw_versions - computed: false, optional: true, required: false
  private _supportedFwVersions?: string[]; 
  public get supportedFwVersions() {
    return this.getListAttribute('supported_fw_versions');
  }
  public set supportedFwVersions(value: string[]) {
    this._supportedFwVersions = value;
  }
  public resetSupportedFwVersions() {
    this._supportedFwVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedFwVersionsInput() {
    return this._supportedFwVersions;
  }

  // supported_in_adapters - computed: false, optional: true, required: false
  private _supportedInAdapters?: string[]; 
  public get supportedInAdapters() {
    return this.getListAttribute('supported_in_adapters');
  }
  public set supportedInAdapters(value: string[]) {
    this._supportedInAdapters = value;
  }
  public resetSupportedInAdapters() {
    this._supportedInAdapters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInAdaptersInput() {
    return this._supportedInAdapters;
  }

  // supported_in_generations - computed: false, optional: true, required: false
  private _supportedInGenerations?: number[]; 
  public get supportedInGenerations() {
    return this.getNumberListAttribute('supported_in_generations');
  }
  public set supportedInGenerations(value: number[]) {
    this._supportedInGenerations = value;
  }
  public resetSupportedInGenerations() {
    this._supportedInGenerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInGenerationsInput() {
    return this._supportedInGenerations;
  }

  // validation_action - computed: false, optional: true, required: false
  private _validationAction?: string; 
  public get validationAction() {
    return this.getStringAttribute('validation_action');
  }
  public set validationAction(value: string) {
    this._validationAction = value;
  }
  public resetValidationAction() {
    this._validationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationActionInput() {
    return this._validationAction;
  }

  // unsupported_feature_matrix - computed: false, optional: true, required: false
  private _unsupportedFeatureMatrix = new DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixList(this, "unsupported_feature_matrix", false);
  public get unsupportedFeatureMatrix() {
    return this._unsupportedFeatureMatrix;
  }
  public putUnsupportedFeatureMatrix(value: DataIntersightCapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix[] | cdktf.IResolvable) {
    this._unsupportedFeatureMatrix.internalValue = value;
  }
  public resetUnsupportedFeatureMatrix() {
    this._unsupportedFeatureMatrix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedFeatureMatrixInput() {
    return this._unsupportedFeatureMatrix.internalValue;
  }
}

export class DataIntersightCapabilityAdapterUnitDescriptorFeaturesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorFeatures[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorFeaturesOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorParentToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorParentOutputReference | DataIntersightCapabilityAdapterUnitDescriptorParent): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorParentToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorParentOutputReference | DataIntersightCapabilityAdapterUnitDescriptorParent): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorParent | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorParent | undefined) {
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
export interface DataIntersightCapabilityAdapterUnitDescriptorPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionOutputReference | DataIntersightCapabilityAdapterUnitDescriptorTagsDefinition): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionOutputReference | DataIntersightCapabilityAdapterUnitDescriptorTagsDefinition): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorTagsDefinition | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorTagsDefinition | undefined) {
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
export interface DataIntersightCapabilityAdapterUnitDescriptorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#key DataIntersightCapabilityAdapterUnitDescriptor#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#propagated DataIntersightCapabilityAdapterUnitDescriptor#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#type DataIntersightCapabilityAdapterUnitDescriptor#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#value DataIntersightCapabilityAdapterUnitDescriptor#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#ancestor_definitions DataIntersightCapabilityAdapterUnitDescriptor#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#definition DataIntersightCapabilityAdapterUnitDescriptor#definition}
  */
  readonly definition?: DataIntersightCapabilityAdapterUnitDescriptorTagsDefinition;
}

export function dataIntersightCapabilityAdapterUnitDescriptorTagsToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorTags | cdktf.IResolvable): any {
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
    ancestor_definitions: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorTagsToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorTags | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilityAdapterUnitDescriptorTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorTags | cdktf.IResolvable | undefined) {
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
  private _ancestorDefinitions = new DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightCapabilityAdapterUnitDescriptorTagsAncestorDefinitions[] | cdktf.IResolvable) {
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
  private _definition = new DataIntersightCapabilityAdapterUnitDescriptorTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightCapabilityAdapterUnitDescriptorTagsDefinition) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorTagsOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

export class DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosOutputReference {
    return new DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#moid DataIntersightCapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#selector DataIntersightCapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function dataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoOutputReference | DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMo): any {
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


export function dataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoOutputReference | DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMo): any {
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

export class DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMo | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMo | undefined) {
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
export interface DataIntersightCapabilityAdapterUnitDescriptorVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#additional_properties DataIntersightCapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#class_id DataIntersightCapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#marked_for_deletion DataIntersightCapabilityAdapterUnitDescriptor#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#nr_version DataIntersightCapabilityAdapterUnitDescriptor#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#object_type DataIntersightCapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#timestamp DataIntersightCapabilityAdapterUnitDescriptor#timestamp}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#version_type DataIntersightCapabilityAdapterUnitDescriptor#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#interested_mos DataIntersightCapabilityAdapterUnitDescriptor#interested_mos}
  */
  readonly interestedMos?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#ref_mo DataIntersightCapabilityAdapterUnitDescriptor#ref_mo}
  */
  readonly refMo?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMo;
}

export function dataIntersightCapabilityAdapterUnitDescriptorVersionContextToTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextOutputReference | DataIntersightCapabilityAdapterUnitDescriptorVersionContext): any {
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
    interested_mos: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightCapabilityAdapterUnitDescriptorVersionContextToHclTerraform(struct?: DataIntersightCapabilityAdapterUnitDescriptorVersionContextOutputReference | DataIntersightCapabilityAdapterUnitDescriptorVersionContext): any {
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
      value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightCapabilityAdapterUnitDescriptorVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightCapabilityAdapterUnitDescriptorVersionContext | undefined {
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

  public set internalValue(value: DataIntersightCapabilityAdapterUnitDescriptorVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightCapabilityAdapterUnitDescriptorVersionContextInterestedMos[] | cdktf.IResolvable) {
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
  private _refMo = new DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightCapabilityAdapterUnitDescriptorVersionContextRefMo) {
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
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor intersight_capability_adapter_unit_descriptor}
*/
export class DataIntersightCapabilityAdapterUnitDescriptor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_capability_adapter_unit_descriptor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightCapabilityAdapterUnitDescriptor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightCapabilityAdapterUnitDescriptor to import
  * @param importFromId The id of the existing DataIntersightCapabilityAdapterUnitDescriptor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightCapabilityAdapterUnitDescriptor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_capability_adapter_unit_descriptor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/capability_adapter_unit_descriptor intersight_capability_adapter_unit_descriptor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightCapabilityAdapterUnitDescriptorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightCapabilityAdapterUnitDescriptorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_capability_adapter_unit_descriptor',
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
    this._adapterGeneration = config.adapterGeneration;
    this._additionalProperties = config.additionalProperties;
    this._classId = config.classId;
    this._connectivityOrder = config.connectivityOrder;
    this._createTime = config.createTime;
    this._description = config.description;
    this._domainGroupMoid = config.domainGroupMoid;
    this._ethernetPortSpeed = config.ethernetPortSpeed;
    this._fibreChannelPortSpeed = config.fibreChannelPortSpeed;
    this._fibreChannelScsiIoqLimit = config.fibreChannelScsiIoqLimit;
    this._id = config.id;
    this._isAzureQosSupported = config.isAzureQosSupported;
    this._isGeneveSupported = config.isGeneveSupported;
    this._isPlacementApplicable = config.isPlacementApplicable;
    this._isSecureBootSupported = config.isSecureBootSupported;
    this._maxEthRxRingSize = config.maxEthRxRingSize;
    this._maxEthTxRingSize = config.maxEthTxRingSize;
    this._maxRocev2Interfaces = config.maxRocev2Interfaces;
    this._modTime = config.modTime;
    this._model = config.model;
    this._moid = config.moid;
    this._nrVersion = config.nrVersion;
    this._numDcePorts = config.numDcePorts;
    this._numberOfPciLinks = config.numberOfPciLinks;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._pciLink = config.pciLink;
    this._promCardType = config.promCardType;
    this._sharedScope = config.sharedScope;
    this._vendor = config.vendor;
    this._vicId = config.vicId;
    this._ancestors.internalValue = config.ancestors;
    this._capabilities.internalValue = config.capabilities;
    this._features.internalValue = config.features;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
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

  // adapter_generation - computed: false, optional: true, required: false
  private _adapterGeneration?: number; 
  public get adapterGeneration() {
    return this.getNumberAttribute('adapter_generation');
  }
  public set adapterGeneration(value: number) {
    this._adapterGeneration = value;
  }
  public resetAdapterGeneration() {
    this._adapterGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterGenerationInput() {
    return this._adapterGeneration;
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

  // connectivity_order - computed: false, optional: true, required: false
  private _connectivityOrder?: string; 
  public get connectivityOrder() {
    return this.getStringAttribute('connectivity_order');
  }
  public set connectivityOrder(value: string) {
    this._connectivityOrder = value;
  }
  public resetConnectivityOrder() {
    this._connectivityOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityOrderInput() {
    return this._connectivityOrder;
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

  // ethernet_port_speed - computed: false, optional: true, required: false
  private _ethernetPortSpeed?: number; 
  public get ethernetPortSpeed() {
    return this.getNumberAttribute('ethernet_port_speed');
  }
  public set ethernetPortSpeed(value: number) {
    this._ethernetPortSpeed = value;
  }
  public resetEthernetPortSpeed() {
    this._ethernetPortSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetPortSpeedInput() {
    return this._ethernetPortSpeed;
  }

  // fibre_channel_port_speed - computed: false, optional: true, required: false
  private _fibreChannelPortSpeed?: number; 
  public get fibreChannelPortSpeed() {
    return this.getNumberAttribute('fibre_channel_port_speed');
  }
  public set fibreChannelPortSpeed(value: number) {
    this._fibreChannelPortSpeed = value;
  }
  public resetFibreChannelPortSpeed() {
    this._fibreChannelPortSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fibreChannelPortSpeedInput() {
    return this._fibreChannelPortSpeed;
  }

  // fibre_channel_scsi_ioq_limit - computed: false, optional: true, required: false
  private _fibreChannelScsiIoqLimit?: number; 
  public get fibreChannelScsiIoqLimit() {
    return this.getNumberAttribute('fibre_channel_scsi_ioq_limit');
  }
  public set fibreChannelScsiIoqLimit(value: number) {
    this._fibreChannelScsiIoqLimit = value;
  }
  public resetFibreChannelScsiIoqLimit() {
    this._fibreChannelScsiIoqLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fibreChannelScsiIoqLimitInput() {
    return this._fibreChannelScsiIoqLimit;
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

  // is_azure_qos_supported - computed: false, optional: true, required: false
  private _isAzureQosSupported?: boolean | cdktf.IResolvable; 
  public get isAzureQosSupported() {
    return this.getBooleanAttribute('is_azure_qos_supported');
  }
  public set isAzureQosSupported(value: boolean | cdktf.IResolvable) {
    this._isAzureQosSupported = value;
  }
  public resetIsAzureQosSupported() {
    this._isAzureQosSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAzureQosSupportedInput() {
    return this._isAzureQosSupported;
  }

  // is_geneve_supported - computed: false, optional: true, required: false
  private _isGeneveSupported?: boolean | cdktf.IResolvable; 
  public get isGeneveSupported() {
    return this.getBooleanAttribute('is_geneve_supported');
  }
  public set isGeneveSupported(value: boolean | cdktf.IResolvable) {
    this._isGeneveSupported = value;
  }
  public resetIsGeneveSupported() {
    this._isGeneveSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGeneveSupportedInput() {
    return this._isGeneveSupported;
  }

  // is_placement_applicable - computed: false, optional: true, required: false
  private _isPlacementApplicable?: boolean | cdktf.IResolvable; 
  public get isPlacementApplicable() {
    return this.getBooleanAttribute('is_placement_applicable');
  }
  public set isPlacementApplicable(value: boolean | cdktf.IResolvable) {
    this._isPlacementApplicable = value;
  }
  public resetIsPlacementApplicable() {
    this._isPlacementApplicable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPlacementApplicableInput() {
    return this._isPlacementApplicable;
  }

  // is_secure_boot_supported - computed: false, optional: true, required: false
  private _isSecureBootSupported?: boolean | cdktf.IResolvable; 
  public get isSecureBootSupported() {
    return this.getBooleanAttribute('is_secure_boot_supported');
  }
  public set isSecureBootSupported(value: boolean | cdktf.IResolvable) {
    this._isSecureBootSupported = value;
  }
  public resetIsSecureBootSupported() {
    this._isSecureBootSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootSupportedInput() {
    return this._isSecureBootSupported;
  }

  // max_eth_rx_ring_size - computed: false, optional: true, required: false
  private _maxEthRxRingSize?: number; 
  public get maxEthRxRingSize() {
    return this.getNumberAttribute('max_eth_rx_ring_size');
  }
  public set maxEthRxRingSize(value: number) {
    this._maxEthRxRingSize = value;
  }
  public resetMaxEthRxRingSize() {
    this._maxEthRxRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEthRxRingSizeInput() {
    return this._maxEthRxRingSize;
  }

  // max_eth_tx_ring_size - computed: false, optional: true, required: false
  private _maxEthTxRingSize?: number; 
  public get maxEthTxRingSize() {
    return this.getNumberAttribute('max_eth_tx_ring_size');
  }
  public set maxEthTxRingSize(value: number) {
    this._maxEthTxRingSize = value;
  }
  public resetMaxEthTxRingSize() {
    this._maxEthTxRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEthTxRingSizeInput() {
    return this._maxEthTxRingSize;
  }

  // max_rocev2_interfaces - computed: false, optional: true, required: false
  private _maxRocev2Interfaces?: number; 
  public get maxRocev2Interfaces() {
    return this.getNumberAttribute('max_rocev2_interfaces');
  }
  public set maxRocev2Interfaces(value: number) {
    this._maxRocev2Interfaces = value;
  }
  public resetMaxRocev2Interfaces() {
    this._maxRocev2Interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRocev2InterfacesInput() {
    return this._maxRocev2Interfaces;
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

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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

  // num_dce_ports - computed: false, optional: true, required: false
  private _numDcePorts?: number; 
  public get numDcePorts() {
    return this.getNumberAttribute('num_dce_ports');
  }
  public set numDcePorts(value: number) {
    this._numDcePorts = value;
  }
  public resetNumDcePorts() {
    this._numDcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDcePortsInput() {
    return this._numDcePorts;
  }

  // number_of_pci_links - computed: false, optional: true, required: false
  private _numberOfPciLinks?: number; 
  public get numberOfPciLinks() {
    return this.getNumberAttribute('number_of_pci_links');
  }
  public set numberOfPciLinks(value: number) {
    this._numberOfPciLinks = value;
  }
  public resetNumberOfPciLinks() {
    this._numberOfPciLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPciLinksInput() {
    return this._numberOfPciLinks;
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

  // pci_link - computed: false, optional: true, required: false
  private _pciLink?: number; 
  public get pciLink() {
    return this.getNumberAttribute('pci_link');
  }
  public set pciLink(value: number) {
    this._pciLink = value;
  }
  public resetPciLink() {
    this._pciLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciLinkInput() {
    return this._pciLink;
  }

  // prom_card_type - computed: false, optional: true, required: false
  private _promCardType?: string; 
  public get promCardType() {
    return this.getStringAttribute('prom_card_type');
  }
  public set promCardType(value: string) {
    this._promCardType = value;
  }
  public resetPromCardType() {
    this._promCardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promCardTypeInput() {
    return this._promCardType;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightCapabilityAdapterUnitDescriptorResultsList(this, "results", false);
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

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // vic_id - computed: false, optional: true, required: false
  private _vicId?: string; 
  public get vicId() {
    return this.getStringAttribute('vic_id');
  }
  public set vicId(value: string) {
    this._vicId = value;
  }
  public resetVicId() {
    this._vicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vicIdInput() {
    return this._vicId;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightCapabilityAdapterUnitDescriptorAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightCapabilityAdapterUnitDescriptorAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataIntersightCapabilityAdapterUnitDescriptorCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataIntersightCapabilityAdapterUnitDescriptorCapabilities[] | cdktf.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new DataIntersightCapabilityAdapterUnitDescriptorFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: DataIntersightCapabilityAdapterUnitDescriptorFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightCapabilityAdapterUnitDescriptorParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightCapabilityAdapterUnitDescriptorParent) {
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
  private _permissionResources = new DataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightCapabilityAdapterUnitDescriptorPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightCapabilityAdapterUnitDescriptorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightCapabilityAdapterUnitDescriptorTags[] | cdktf.IResolvable) {
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
  private _versionContext = new DataIntersightCapabilityAdapterUnitDescriptorVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightCapabilityAdapterUnitDescriptorVersionContext) {
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
      adapter_generation: cdktf.numberToTerraform(this._adapterGeneration),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      class_id: cdktf.stringToTerraform(this._classId),
      connectivity_order: cdktf.stringToTerraform(this._connectivityOrder),
      create_time: cdktf.stringToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      ethernet_port_speed: cdktf.numberToTerraform(this._ethernetPortSpeed),
      fibre_channel_port_speed: cdktf.numberToTerraform(this._fibreChannelPortSpeed),
      fibre_channel_scsi_ioq_limit: cdktf.numberToTerraform(this._fibreChannelScsiIoqLimit),
      id: cdktf.stringToTerraform(this._id),
      is_azure_qos_supported: cdktf.booleanToTerraform(this._isAzureQosSupported),
      is_geneve_supported: cdktf.booleanToTerraform(this._isGeneveSupported),
      is_placement_applicable: cdktf.booleanToTerraform(this._isPlacementApplicable),
      is_secure_boot_supported: cdktf.booleanToTerraform(this._isSecureBootSupported),
      max_eth_rx_ring_size: cdktf.numberToTerraform(this._maxEthRxRingSize),
      max_eth_tx_ring_size: cdktf.numberToTerraform(this._maxEthTxRingSize),
      max_rocev2_interfaces: cdktf.numberToTerraform(this._maxRocev2Interfaces),
      mod_time: cdktf.stringToTerraform(this._modTime),
      model: cdktf.stringToTerraform(this._model),
      moid: cdktf.stringToTerraform(this._moid),
      nr_version: cdktf.stringToTerraform(this._nrVersion),
      num_dce_ports: cdktf.numberToTerraform(this._numDcePorts),
      number_of_pci_links: cdktf.numberToTerraform(this._numberOfPciLinks),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      pci_link: cdktf.numberToTerraform(this._pciLink),
      prom_card_type: cdktf.stringToTerraform(this._promCardType),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      vendor: cdktf.stringToTerraform(this._vendor),
      vic_id: cdktf.stringToTerraform(this._vicId),
      ancestors: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorAncestorsToTerraform, true)(this._ancestors.internalValue),
      capabilities: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorCapabilitiesToTerraform, true)(this._capabilities.internalValue),
      features: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorFeaturesToTerraform, true)(this._features.internalValue),
      parent: dataIntersightCapabilityAdapterUnitDescriptorParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      tags: cdktf.listMapper(dataIntersightCapabilityAdapterUnitDescriptorTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightCapabilityAdapterUnitDescriptorVersionContextToTerraform(this._versionContext.internalValue),
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
      adapter_generation: {
        value: cdktf.numberToHclTerraform(this._adapterGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      connectivity_order: {
        value: cdktf.stringToHclTerraform(this._connectivityOrder),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ethernet_port_speed: {
        value: cdktf.numberToHclTerraform(this._ethernetPortSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fibre_channel_port_speed: {
        value: cdktf.numberToHclTerraform(this._fibreChannelPortSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fibre_channel_scsi_ioq_limit: {
        value: cdktf.numberToHclTerraform(this._fibreChannelScsiIoqLimit),
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
      is_azure_qos_supported: {
        value: cdktf.booleanToHclTerraform(this._isAzureQosSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_geneve_supported: {
        value: cdktf.booleanToHclTerraform(this._isGeneveSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_placement_applicable: {
        value: cdktf.booleanToHclTerraform(this._isPlacementApplicable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_secure_boot_supported: {
        value: cdktf.booleanToHclTerraform(this._isSecureBootSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_eth_rx_ring_size: {
        value: cdktf.numberToHclTerraform(this._maxEthRxRingSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_eth_tx_ring_size: {
        value: cdktf.numberToHclTerraform(this._maxEthTxRingSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rocev2_interfaces: {
        value: cdktf.numberToHclTerraform(this._maxRocev2Interfaces),
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
      model: {
        value: cdktf.stringToHclTerraform(this._model),
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
      nr_version: {
        value: cdktf.stringToHclTerraform(this._nrVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_dce_ports: {
        value: cdktf.numberToHclTerraform(this._numDcePorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_pci_links: {
        value: cdktf.numberToHclTerraform(this._numberOfPciLinks),
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
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pci_link: {
        value: cdktf.numberToHclTerraform(this._pciLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prom_card_type: {
        value: cdktf.stringToHclTerraform(this._promCardType),
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
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vic_id: {
        value: cdktf.stringToHclTerraform(this._vicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorAncestorsList",
      },
      capabilities: {
        value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorCapabilitiesToHclTerraform, true)(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorCapabilitiesList",
      },
      features: {
        value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorFeaturesList",
      },
      parent: {
        value: dataIntersightCapabilityAdapterUnitDescriptorParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorPermissionResourcesList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightCapabilityAdapterUnitDescriptorTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorTagsList",
      },
      version_context: {
        value: dataIntersightCapabilityAdapterUnitDescriptorVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightCapabilityAdapterUnitDescriptorVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
