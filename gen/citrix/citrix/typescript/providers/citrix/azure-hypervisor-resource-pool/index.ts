// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureHypervisorResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the hypervisor for which the resource pool needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#hypervisor AzureHypervisorResourcePool#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * Metadata for the Hypervisor Resource Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#metadata AzureHypervisorResourcePool#metadata}
  */
  readonly metadata?: AzureHypervisorResourcePoolMetadata[] | cdktf.IResolvable;
  /**
  * Name of the resource pool. Name should be unique across all hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#name AzureHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Cloud Region where the virtual network sits in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#region AzureHypervisorResourcePool#region}
  */
  readonly region: string;
  /**
  * Subnets to allocate VDAs within the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#subnets AzureHypervisorResourcePool#subnets}
  */
  readonly subnets: string[];
  /**
  * Timeout in minutes for the long-running jobs in resource pool resource's delete operation(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#timeout AzureHypervisorResourcePool#timeout}
  */
  readonly timeout?: AzureHypervisorResourcePoolTimeout;
  /**
  * Name of the cloud virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#virtual_network AzureHypervisorResourcePool#virtual_network}
  */
  readonly virtualNetwork: string;
  /**
  * The name of the resource group where the vnet resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#virtual_network_resource_group AzureHypervisorResourcePool#virtual_network_resource_group}
  */
  readonly virtualNetworkResourceGroup: string;
  /**
  * Indicates whether VMs created by provisioning operations should be tagged. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#vm_tagging AzureHypervisorResourcePool#vm_tagging}
  */
  readonly vmTagging?: boolean | cdktf.IResolvable;
}
export interface AzureHypervisorResourcePoolMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#name AzureHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#value AzureHypervisorResourcePool#value}
  */
  readonly value: string;
}

export function azureHypervisorResourcePoolMetadataToTerraform(struct?: AzureHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureHypervisorResourcePoolMetadataToHclTerraform(struct?: AzureHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
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

export class AzureHypervisorResourcePoolMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AzureHypervisorResourcePoolMetadataList extends cdktf.ComplexList {
  public internalValue? : AzureHypervisorResourcePoolMetadata[] | cdktf.IResolvable

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
  public get(index: number): AzureHypervisorResourcePoolMetadataOutputReference {
    return new AzureHypervisorResourcePoolMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureHypervisorResourcePoolTimeout {
  /**
  * Timeout in minutes for the long-running jobs in delete operation. Defaults to 10. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#delete AzureHypervisorResourcePool#delete}
  */
  readonly delete?: number;
}

export function azureHypervisorResourcePoolTimeoutToTerraform(struct?: AzureHypervisorResourcePoolTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
  }
}


export function azureHypervisorResourcePoolTimeoutToHclTerraform(struct?: AzureHypervisorResourcePoolTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureHypervisorResourcePoolTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureHypervisorResourcePoolTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureHypervisorResourcePoolTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: true, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool citrix_azure_hypervisor_resource_pool}
*/
export class AzureHypervisorResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_azure_hypervisor_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureHypervisorResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureHypervisorResourcePool to import
  * @param importFromId The id of the existing AzureHypervisorResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureHypervisorResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_azure_hypervisor_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor_resource_pool citrix_azure_hypervisor_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureHypervisorResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: AzureHypervisorResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_azure_hypervisor_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hypervisor = config.hypervisor;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._subnets = config.subnets;
    this._timeout.internalValue = config.timeout;
    this._virtualNetwork = config.virtualNetwork;
    this._virtualNetworkResourceGroup = config.virtualNetworkResourceGroup;
    this._vmTagging = config.vmTagging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hypervisor - computed: false, optional: false, required: true
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AzureHypervisorResourcePoolMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AzureHypervisorResourcePoolMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AzureHypervisorResourcePoolTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AzureHypervisorResourcePoolTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork?: string; 
  public get virtualNetwork() {
    return this.getStringAttribute('virtual_network');
  }
  public set virtualNetwork(value: string) {
    this._virtualNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork;
  }

  // virtual_network_resource_group - computed: false, optional: false, required: true
  private _virtualNetworkResourceGroup?: string; 
  public get virtualNetworkResourceGroup() {
    return this.getStringAttribute('virtual_network_resource_group');
  }
  public set virtualNetworkResourceGroup(value: string) {
    this._virtualNetworkResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkResourceGroupInput() {
    return this._virtualNetworkResourceGroup;
  }

  // vm_tagging - computed: true, optional: true, required: false
  private _vmTagging?: boolean | cdktf.IResolvable; 
  public get vmTagging() {
    return this.getBooleanAttribute('vm_tagging');
  }
  public set vmTagging(value: boolean | cdktf.IResolvable) {
    this._vmTagging = value;
  }
  public resetVmTagging() {
    this._vmTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTaggingInput() {
    return this._vmTagging;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      metadata: cdktf.listMapper(azureHypervisorResourcePoolMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      timeout: azureHypervisorResourcePoolTimeoutToTerraform(this._timeout.internalValue),
      virtual_network: cdktf.stringToTerraform(this._virtualNetwork),
      virtual_network_resource_group: cdktf.stringToTerraform(this._virtualNetworkResourceGroup),
      vm_tagging: cdktf.booleanToTerraform(this._vmTagging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(azureHypervisorResourcePoolMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureHypervisorResourcePoolMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: azureHypervisorResourcePoolTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureHypervisorResourcePoolTimeout",
      },
      virtual_network: {
        value: cdktf.stringToHclTerraform(this._virtualNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_resource_group: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_tagging: {
        value: cdktf.booleanToHclTerraform(this._vmTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
