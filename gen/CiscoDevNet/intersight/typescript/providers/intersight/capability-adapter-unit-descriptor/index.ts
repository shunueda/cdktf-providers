// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapabilityAdapterUnitDescriptorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#account_moid CapabilityAdapterUnitDescriptor#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Generation of the adapter.
  * * `4` - Fourth generation adapters (14xx). The PIDs of these adapters end with the string 04.
  * * `2` - Second generation VIC adapters (12xx). The PIDs of these adapters end with the string 02.
  * * `3` - Third generation adapters (13xx). The PIDs of these adapters end with the string 03.
  * * `5` - Fifth generation adapters (15xx). The PIDs of these adapters contain the V5 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#adapter_generation CapabilityAdapterUnitDescriptor#adapter_generation}
  */
  readonly adapterGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#ancestors CapabilityAdapterUnitDescriptor#ancestors}
  */
  readonly ancestors?: CapabilityAdapterUnitDescriptorAncestors[] | cdktf.IResolvable;
  /**
  * An array of relationships to capabilityCapability resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#capabilities CapabilityAdapterUnitDescriptor#capabilities}
  */
  readonly capabilities?: CapabilityAdapterUnitDescriptorCapabilities[] | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Order in which the ports are connected; sequential or cyclic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#connectivity_order CapabilityAdapterUnitDescriptor#connectivity_order}
  */
  readonly connectivityOrder?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#create_time CapabilityAdapterUnitDescriptor#create_time}
  */
  readonly createTime?: string;
  /**
  * Detailed information about the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#description CapabilityAdapterUnitDescriptor#description}
  */
  readonly description?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#domain_group_moid CapabilityAdapterUnitDescriptor#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * The port speed for ethernet ports in Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#ethernet_port_speed CapabilityAdapterUnitDescriptor#ethernet_port_speed}
  */
  readonly ethernetPortSpeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#features CapabilityAdapterUnitDescriptor#features}
  */
  readonly features?: CapabilityAdapterUnitDescriptorFeatures[] | cdktf.IResolvable;
  /**
  * The port speed for fibre channel ports in Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#fibre_channel_port_speed CapabilityAdapterUnitDescriptor#fibre_channel_port_speed}
  */
  readonly fibreChannelPortSpeed?: number;
  /**
  * The number of SCSI I/O Queue resources to allocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#fibre_channel_scsi_ioq_limit CapabilityAdapterUnitDescriptor#fibre_channel_scsi_ioq_limit}
  */
  readonly fibreChannelScsiIoqLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#id CapabilityAdapterUnitDescriptor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates that the Azure Stack Host QoS feature is supported by this adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#is_azure_qos_supported CapabilityAdapterUnitDescriptor#is_azure_qos_supported}
  */
  readonly isAzureQosSupported?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the GENEVE offload feature is supported by this adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#is_geneve_supported CapabilityAdapterUnitDescriptor#is_geneve_supported}
  */
  readonly isGeneveSupported?: boolean | cdktf.IResolvable;
  /**
  * This field determines whether vNICs can be placed to the adapters. It is mandatory for all adapters. For third-party adapters, this field is set to 'false', meaning they will only be inventoried, and no LCP configuration will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#is_placement_applicable CapabilityAdapterUnitDescriptor#is_placement_applicable}
  */
  readonly isPlacementApplicable?: boolean | cdktf.IResolvable;
  /**
  * Indicates support for secure boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#is_secure_boot_supported CapabilityAdapterUnitDescriptor#is_secure_boot_supported}
  */
  readonly isSecureBootSupported?: boolean | cdktf.IResolvable;
  /**
  * Maximum Ring Size value for vNIC Receive Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#max_eth_rx_ring_size CapabilityAdapterUnitDescriptor#max_eth_rx_ring_size}
  */
  readonly maxEthRxRingSize?: number;
  /**
  * Maximum Ring Size value for vNIC Transmit Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#max_eth_tx_ring_size CapabilityAdapterUnitDescriptor#max_eth_tx_ring_size}
  */
  readonly maxEthTxRingSize?: number;
  /**
  * Maximum number of vNIC interfaces that can be RoCEv2 enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#max_rocev2_interfaces CapabilityAdapterUnitDescriptor#max_rocev2_interfaces}
  */
  readonly maxRocev2Interfaces?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#mod_time CapabilityAdapterUnitDescriptor#mod_time}
  */
  readonly modTime?: string;
  /**
  * The model of the endpoint, for which this capability information is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#model CapabilityAdapterUnitDescriptor#model}
  */
  readonly model?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * The firmware or software version of the endpoint, for which this capability information is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#nr_version CapabilityAdapterUnitDescriptor#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Number of Dce Ports for the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#num_dce_ports CapabilityAdapterUnitDescriptor#num_dce_ports}
  */
  readonly numDcePorts?: number;
  /**
  * Indicates number of PCI Links of the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#number_of_pci_links CapabilityAdapterUnitDescriptor#number_of_pci_links}
  */
  readonly numberOfPciLinks?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#owners CapabilityAdapterUnitDescriptor#owners}
  */
  readonly owners?: string[];
  /**
  * A reference to a moBaseMo resource.
  * When the $expand query parameter is specified, the referenced resource is returned inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#parent CapabilityAdapterUnitDescriptor#parent}
  */
  readonly parent?: CapabilityAdapterUnitDescriptorParent[] | cdktf.IResolvable;
  /**
  * Indicates PCI Link status of adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#pci_link CapabilityAdapterUnitDescriptor#pci_link}
  */
  readonly pciLink?: number;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#permission_resources CapabilityAdapterUnitDescriptor#permission_resources}
  */
  readonly permissionResources?: CapabilityAdapterUnitDescriptorPermissionResources[] | cdktf.IResolvable;
  /**
  * Prom card type for the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#prom_card_type CapabilityAdapterUnitDescriptor#prom_card_type}
  */
  readonly promCardType?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#shared_scope CapabilityAdapterUnitDescriptor#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#tags CapabilityAdapterUnitDescriptor#tags}
  */
  readonly tags?: CapabilityAdapterUnitDescriptorTags[] | cdktf.IResolvable;
  /**
  * The vendor of the endpoint, for which this capability information is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#vendor CapabilityAdapterUnitDescriptor#vendor}
  */
  readonly vendor?: string;
  /**
  * The versioning info for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#version_context CapabilityAdapterUnitDescriptor#version_context}
  */
  readonly versionContext?: CapabilityAdapterUnitDescriptorVersionContext[] | cdktf.IResolvable;
  /**
  * Vic Id assigned for the adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#vic_id CapabilityAdapterUnitDescriptor#vic_id}
  */
  readonly vicId?: string;
}
export interface CapabilityAdapterUnitDescriptorAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorAncestorsToTerraform(struct?: CapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorAncestorsToHclTerraform(struct?: CapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorAncestors | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorAncestorsList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorAncestors[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorAncestorsOutputReference {
    return new CapabilityAdapterUnitDescriptorAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorCapabilitiesToTerraform(struct?: CapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorCapabilitiesToHclTerraform(struct?: CapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorCapabilities | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorCapabilities[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorCapabilitiesOutputReference {
    return new CapabilityAdapterUnitDescriptorCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#generation CapabilityAdapterUnitDescriptor#generation}
  */
  readonly generation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#unsupportd_features CapabilityAdapterUnitDescriptor#unsupportd_features}
  */
  readonly unsupportdFeatures?: string[];
}

export function capabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToTerraform(struct?: CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToHclTerraform(struct?: CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // generation - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // unsupportd_features - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixOutputReference {
    return new CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#feature_name CapabilityAdapterUnitDescriptor#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#min_adapter_fw_version CapabilityAdapterUnitDescriptor#min_adapter_fw_version}
  */
  readonly minAdapterFwVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#min_fw_version CapabilityAdapterUnitDescriptor#min_fw_version}
  */
  readonly minFwVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#supported_fw_versions CapabilityAdapterUnitDescriptor#supported_fw_versions}
  */
  readonly supportedFwVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#supported_in_adapters CapabilityAdapterUnitDescriptor#supported_in_adapters}
  */
  readonly supportedInAdapters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#supported_in_generations CapabilityAdapterUnitDescriptor#supported_in_generations}
  */
  readonly supportedInGenerations?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#unsupported_feature_matrix CapabilityAdapterUnitDescriptor#unsupported_feature_matrix}
  */
  readonly unsupportedFeatureMatrix?: CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#validation_action CapabilityAdapterUnitDescriptor#validation_action}
  */
  readonly validationAction?: string;
}

export function capabilityAdapterUnitDescriptorFeaturesToTerraform(struct?: CapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable): any {
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
    unsupported_feature_matrix: cdktf.listMapper(capabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToTerraform, false)(struct!.unsupportedFeatureMatrix),
    validation_action: cdktf.stringToTerraform(struct!.validationAction),
  }
}


export function capabilityAdapterUnitDescriptorFeaturesToHclTerraform(struct?: CapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable): any {
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
    unsupported_feature_matrix: {
      value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixToHclTerraform, false)(struct!.unsupportedFeatureMatrix),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixList",
    },
    validation_action: {
      value: cdktf.stringToHclTerraform(struct!.validationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapabilityAdapterUnitDescriptorFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable | undefined {
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
    if (this._unsupportedFeatureMatrix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedFeatureMatrix = this._unsupportedFeatureMatrix?.internalValue;
    }
    if (this._validationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationAction = this._validationAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapabilityAdapterUnitDescriptorFeatures | cdktf.IResolvable | undefined) {
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
      this._unsupportedFeatureMatrix.internalValue = undefined;
      this._validationAction = undefined;
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
      this._unsupportedFeatureMatrix.internalValue = value.unsupportedFeatureMatrix;
      this._validationAction = value.validationAction;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // feature_name - computed: true, optional: true, required: false
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

  // min_adapter_fw_version - computed: true, optional: true, required: false
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

  // min_fw_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // supported_fw_versions - computed: true, optional: true, required: false
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

  // supported_in_adapters - computed: true, optional: true, required: false
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

  // supported_in_generations - computed: true, optional: true, required: false
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

  // unsupported_feature_matrix - computed: true, optional: true, required: false
  private _unsupportedFeatureMatrix = new CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrixList(this, "unsupported_feature_matrix", false);
  public get unsupportedFeatureMatrix() {
    return this._unsupportedFeatureMatrix;
  }
  public putUnsupportedFeatureMatrix(value: CapabilityAdapterUnitDescriptorFeaturesUnsupportedFeatureMatrix[] | cdktf.IResolvable) {
    this._unsupportedFeatureMatrix.internalValue = value;
  }
  public resetUnsupportedFeatureMatrix() {
    this._unsupportedFeatureMatrix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedFeatureMatrixInput() {
    return this._unsupportedFeatureMatrix.internalValue;
  }

  // validation_action - computed: true, optional: true, required: false
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
}

export class CapabilityAdapterUnitDescriptorFeaturesList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorFeatures[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorFeaturesOutputReference {
    return new CapabilityAdapterUnitDescriptorFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorParentToTerraform(struct?: CapabilityAdapterUnitDescriptorParent | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorParentToHclTerraform(struct?: CapabilityAdapterUnitDescriptorParent | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorParent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorParent | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorParentList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorParent[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorParentOutputReference {
    return new CapabilityAdapterUnitDescriptorParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorPermissionResourcesToTerraform(struct?: CapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorPermissionResourcesToHclTerraform(struct?: CapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorPermissionResources | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorPermissionResourcesOutputReference {
    return new CapabilityAdapterUnitDescriptorPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorTagsAncestorDefinitionsToTerraform(struct?: CapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorTagsAncestorDefinitionsToHclTerraform(struct?: CapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorTagsAncestorDefinitionsOutputReference {
    return new CapabilityAdapterUnitDescriptorTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorTagsDefinitionToTerraform(struct?: CapabilityAdapterUnitDescriptorTagsDefinition | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorTagsDefinitionToHclTerraform(struct?: CapabilityAdapterUnitDescriptorTagsDefinition | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorTagsDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorTagsDefinition | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorTagsDefinitionList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorTagsDefinition[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorTagsDefinitionOutputReference {
    return new CapabilityAdapterUnitDescriptorTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#ancestor_definitions CapabilityAdapterUnitDescriptor#ancestor_definitions}
  */
  readonly ancestorDefinitions?: CapabilityAdapterUnitDescriptorTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#definition CapabilityAdapterUnitDescriptor#definition}
  */
  readonly definition?: CapabilityAdapterUnitDescriptorTagsDefinition[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#key CapabilityAdapterUnitDescriptor#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#propagated CapabilityAdapterUnitDescriptor#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#sys_tag CapabilityAdapterUnitDescriptor#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#type CapabilityAdapterUnitDescriptor#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#value CapabilityAdapterUnitDescriptor#value}
  */
  readonly value?: string;
}

export function capabilityAdapterUnitDescriptorTagsToTerraform(struct?: CapabilityAdapterUnitDescriptorTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ancestor_definitions: cdktf.listMapper(capabilityAdapterUnitDescriptorTagsAncestorDefinitionsToTerraform, false)(struct!.ancestorDefinitions),
    definition: cdktf.listMapper(capabilityAdapterUnitDescriptorTagsDefinitionToTerraform, false)(struct!.definition),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function capabilityAdapterUnitDescriptorTagsToHclTerraform(struct?: CapabilityAdapterUnitDescriptorTags | cdktf.IResolvable): any {
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorTagsAncestorDefinitionsToHclTerraform, false)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilityAdapterUnitDescriptorTagsAncestorDefinitionsList",
    },
    definition: {
      value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorTagsDefinitionToHclTerraform, false)(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilityAdapterUnitDescriptorTagsDefinitionList",
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
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapabilityAdapterUnitDescriptorTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapabilityAdapterUnitDescriptorTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
      this._key = value.key;
      this._propagated = value.propagated;
      this._sysTag = value.sysTag;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // ancestor_definitions - computed: true, optional: true, required: false
  private _ancestorDefinitions = new CapabilityAdapterUnitDescriptorTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: CapabilityAdapterUnitDescriptorTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: true, optional: true, required: false
  private _definition = new CapabilityAdapterUnitDescriptorTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: CapabilityAdapterUnitDescriptorTagsDefinition[] | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // key - computed: true, optional: true, required: false
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

  // propagated - computed: true, optional: true, required: false
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

  // sys_tag - computed: true, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
  }

  // type - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorTagsList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorTags[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorTagsOutputReference {
    return new CapabilityAdapterUnitDescriptorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorVersionContextInterestedMosToTerraform(struct?: CapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorVersionContextInterestedMosToHclTerraform(struct?: CapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorVersionContextInterestedMosOutputReference {
    return new CapabilityAdapterUnitDescriptorVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#moid CapabilityAdapterUnitDescriptor#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#selector CapabilityAdapterUnitDescriptor#selector}
  */
  readonly selector?: string;
}

export function capabilityAdapterUnitDescriptorVersionContextRefMoToTerraform(struct?: CapabilityAdapterUnitDescriptorVersionContextRefMo | cdktf.IResolvable): any {
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


export function capabilityAdapterUnitDescriptorVersionContextRefMoToHclTerraform(struct?: CapabilityAdapterUnitDescriptorVersionContextRefMo | cdktf.IResolvable): any {
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

export class CapabilityAdapterUnitDescriptorVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorVersionContextRefMo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilityAdapterUnitDescriptorVersionContextRefMo | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilityAdapterUnitDescriptorVersionContextRefMoList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorVersionContextRefMo[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorVersionContextRefMoOutputReference {
    return new CapabilityAdapterUnitDescriptorVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilityAdapterUnitDescriptorVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#additional_properties CapabilityAdapterUnitDescriptor#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#class_id CapabilityAdapterUnitDescriptor#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#interested_mos CapabilityAdapterUnitDescriptor#interested_mos}
  */
  readonly interestedMos?: CapabilityAdapterUnitDescriptorVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#marked_for_deletion CapabilityAdapterUnitDescriptor#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#nr_version CapabilityAdapterUnitDescriptor#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#object_type CapabilityAdapterUnitDescriptor#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#ref_mo CapabilityAdapterUnitDescriptor#ref_mo}
  */
  readonly refMo?: CapabilityAdapterUnitDescriptorVersionContextRefMo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#timestamp CapabilityAdapterUnitDescriptor#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#version_type CapabilityAdapterUnitDescriptor#version_type}
  */
  readonly versionType?: string;
}

export function capabilityAdapterUnitDescriptorVersionContextToTerraform(struct?: CapabilityAdapterUnitDescriptorVersionContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    interested_mos: cdktf.listMapper(capabilityAdapterUnitDescriptorVersionContextInterestedMosToTerraform, false)(struct!.interestedMos),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ref_mo: cdktf.listMapper(capabilityAdapterUnitDescriptorVersionContextRefMoToTerraform, false)(struct!.refMo),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
  }
}


export function capabilityAdapterUnitDescriptorVersionContextToHclTerraform(struct?: CapabilityAdapterUnitDescriptorVersionContext | cdktf.IResolvable): any {
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
    interested_mos: {
      value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorVersionContextInterestedMosToHclTerraform, false)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilityAdapterUnitDescriptorVersionContextInterestedMosList",
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
    ref_mo: {
      value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorVersionContextRefMoToHclTerraform, false)(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilityAdapterUnitDescriptorVersionContextRefMoList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapabilityAdapterUnitDescriptorVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilityAdapterUnitDescriptorVersionContext | cdktf.IResolvable | undefined {
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
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
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
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapabilityAdapterUnitDescriptorVersionContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._interestedMos.internalValue = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._refMo.internalValue = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
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
      this._interestedMos.internalValue = value.interestedMos;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._refMo.internalValue = value.refMo;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // interested_mos - computed: true, optional: true, required: false
  private _interestedMos = new CapabilityAdapterUnitDescriptorVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: CapabilityAdapterUnitDescriptorVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // marked_for_deletion - computed: true, optional: true, required: false
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

  // nr_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // ref_mo - computed: true, optional: true, required: false
  private _refMo = new CapabilityAdapterUnitDescriptorVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: CapabilityAdapterUnitDescriptorVersionContextRefMo[] | cdktf.IResolvable) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }

  // timestamp - computed: true, optional: true, required: false
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

  // version_type - computed: true, optional: true, required: false
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
}

export class CapabilityAdapterUnitDescriptorVersionContextList extends cdktf.ComplexList {
  public internalValue? : CapabilityAdapterUnitDescriptorVersionContext[] | cdktf.IResolvable

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
  public get(index: number): CapabilityAdapterUnitDescriptorVersionContextOutputReference {
    return new CapabilityAdapterUnitDescriptorVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor intersight_capability_adapter_unit_descriptor}
*/
export class CapabilityAdapterUnitDescriptor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_capability_adapter_unit_descriptor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapabilityAdapterUnitDescriptor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapabilityAdapterUnitDescriptor to import
  * @param importFromId The id of the existing CapabilityAdapterUnitDescriptor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapabilityAdapterUnitDescriptor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_capability_adapter_unit_descriptor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/resources/capability_adapter_unit_descriptor intersight_capability_adapter_unit_descriptor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapabilityAdapterUnitDescriptorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CapabilityAdapterUnitDescriptorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_capability_adapter_unit_descriptor',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.74',
        providerVersionConstraint: '1.0.74'
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
    this._ancestors.internalValue = config.ancestors;
    this._capabilities.internalValue = config.capabilities;
    this._classId = config.classId;
    this._connectivityOrder = config.connectivityOrder;
    this._createTime = config.createTime;
    this._description = config.description;
    this._domainGroupMoid = config.domainGroupMoid;
    this._ethernetPortSpeed = config.ethernetPortSpeed;
    this._features.internalValue = config.features;
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
    this._parent.internalValue = config.parent;
    this._pciLink = config.pciLink;
    this._permissionResources.internalValue = config.permissionResources;
    this._promCardType = config.promCardType;
    this._sharedScope = config.sharedScope;
    this._tags.internalValue = config.tags;
    this._vendor = config.vendor;
    this._versionContext.internalValue = config.versionContext;
    this._vicId = config.vicId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: true, optional: true, required: false
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

  // ancestors - computed: true, optional: true, required: false
  private _ancestors = new CapabilityAdapterUnitDescriptorAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: CapabilityAdapterUnitDescriptorAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // capabilities - computed: true, optional: true, required: false
  private _capabilities = new CapabilityAdapterUnitDescriptorCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: CapabilityAdapterUnitDescriptorCapabilities[] | cdktf.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
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

  // create_time - computed: true, optional: true, required: false
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

  // domain_group_moid - computed: true, optional: true, required: false
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

  // features - computed: true, optional: true, required: false
  private _features = new CapabilityAdapterUnitDescriptorFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: CapabilityAdapterUnitDescriptorFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
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

  // mod_time - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // owners - computed: true, optional: true, required: false
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

  // parent - computed: true, optional: true, required: false
  private _parent = new CapabilityAdapterUnitDescriptorParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }
  public putParent(value: CapabilityAdapterUnitDescriptorParent[] | cdktf.IResolvable) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
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

  // permission_resources - computed: true, optional: true, required: false
  private _permissionResources = new CapabilityAdapterUnitDescriptorPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: CapabilityAdapterUnitDescriptorPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
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

  // shared_scope - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: true, required: false
  private _tags = new CapabilityAdapterUnitDescriptorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CapabilityAdapterUnitDescriptorTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // version_context - computed: true, optional: true, required: false
  private _versionContext = new CapabilityAdapterUnitDescriptorVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: CapabilityAdapterUnitDescriptorVersionContext[] | cdktf.IResolvable) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      adapter_generation: cdktf.numberToTerraform(this._adapterGeneration),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      ancestors: cdktf.listMapper(capabilityAdapterUnitDescriptorAncestorsToTerraform, false)(this._ancestors.internalValue),
      capabilities: cdktf.listMapper(capabilityAdapterUnitDescriptorCapabilitiesToTerraform, false)(this._capabilities.internalValue),
      class_id: cdktf.stringToTerraform(this._classId),
      connectivity_order: cdktf.stringToTerraform(this._connectivityOrder),
      create_time: cdktf.stringToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      ethernet_port_speed: cdktf.numberToTerraform(this._ethernetPortSpeed),
      features: cdktf.listMapper(capabilityAdapterUnitDescriptorFeaturesToTerraform, false)(this._features.internalValue),
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
      parent: cdktf.listMapper(capabilityAdapterUnitDescriptorParentToTerraform, false)(this._parent.internalValue),
      pci_link: cdktf.numberToTerraform(this._pciLink),
      permission_resources: cdktf.listMapper(capabilityAdapterUnitDescriptorPermissionResourcesToTerraform, false)(this._permissionResources.internalValue),
      prom_card_type: cdktf.stringToTerraform(this._promCardType),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      tags: cdktf.listMapper(capabilityAdapterUnitDescriptorTagsToTerraform, false)(this._tags.internalValue),
      vendor: cdktf.stringToTerraform(this._vendor),
      version_context: cdktf.listMapper(capabilityAdapterUnitDescriptorVersionContextToTerraform, false)(this._versionContext.internalValue),
      vic_id: cdktf.stringToTerraform(this._vicId),
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
      ancestors: {
        value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorAncestorsToHclTerraform, false)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilityAdapterUnitDescriptorAncestorsList",
      },
      capabilities: {
        value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorCapabilitiesToHclTerraform, false)(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilityAdapterUnitDescriptorCapabilitiesList",
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
      features: {
        value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorFeaturesToHclTerraform, false)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilityAdapterUnitDescriptorFeaturesList",
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
      parent: {
        value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorParentToHclTerraform, false)(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilityAdapterUnitDescriptorParentList",
      },
      pci_link: {
        value: cdktf.numberToHclTerraform(this._pciLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorPermissionResourcesToHclTerraform, false)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilityAdapterUnitDescriptorPermissionResourcesList",
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
      tags: {
        value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilityAdapterUnitDescriptorTagsList",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_context: {
        value: cdktf.listMapperHcl(capabilityAdapterUnitDescriptorVersionContextToHclTerraform, false)(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilityAdapterUnitDescriptorVersionContextList",
      },
      vic_id: {
        value: cdktf.stringToHclTerraform(this._vicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
