// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NutanixHypervisorResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the hypervisor for which the resource pool needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#hypervisor NutanixHypervisorResourcePool#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * Metadata for the Hypervisor Resource Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#metadata NutanixHypervisorResourcePool#metadata}
  */
  readonly metadata?: NutanixHypervisorResourcePoolMetadata[] | cdktf.IResolvable;
  /**
  * Name of the resource pool. Name should be unique across all hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#name NutanixHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Networks for allocating resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#networks NutanixHypervisorResourcePool#networks}
  */
  readonly networks: string[];
  /**
  * Indicates whether VMs created by provisioning operations should be tagged. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#vm_tagging NutanixHypervisorResourcePool#vm_tagging}
  */
  readonly vmTagging?: boolean | cdktf.IResolvable;
}
export interface NutanixHypervisorResourcePoolMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#name NutanixHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#value NutanixHypervisorResourcePool#value}
  */
  readonly value: string;
}

export function nutanixHypervisorResourcePoolMetadataToTerraform(struct?: NutanixHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nutanixHypervisorResourcePoolMetadataToHclTerraform(struct?: NutanixHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
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

export class NutanixHypervisorResourcePoolMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NutanixHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NutanixHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined) {
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

export class NutanixHypervisorResourcePoolMetadataList extends cdktf.ComplexList {
  public internalValue? : NutanixHypervisorResourcePoolMetadata[] | cdktf.IResolvable

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
  public get(index: number): NutanixHypervisorResourcePoolMetadataOutputReference {
    return new NutanixHypervisorResourcePoolMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool citrix_nutanix_hypervisor_resource_pool}
*/
export class NutanixHypervisorResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_nutanix_hypervisor_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NutanixHypervisorResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NutanixHypervisorResourcePool to import
  * @param importFromId The id of the existing NutanixHypervisorResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NutanixHypervisorResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_nutanix_hypervisor_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/nutanix_hypervisor_resource_pool citrix_nutanix_hypervisor_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NutanixHypervisorResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: NutanixHypervisorResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_nutanix_hypervisor_resource_pool',
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
    this._networks = config.networks;
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
  private _metadata = new NutanixHypervisorResourcePoolMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NutanixHypervisorResourcePoolMetadata[] | cdktf.IResolvable) {
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

  // networks - computed: false, optional: false, required: true
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
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
      metadata: cdktf.listMapper(nutanixHypervisorResourcePoolMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
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
        value: cdktf.listMapperHcl(nutanixHypervisorResourcePoolMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NutanixHypervisorResourcePoolMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
