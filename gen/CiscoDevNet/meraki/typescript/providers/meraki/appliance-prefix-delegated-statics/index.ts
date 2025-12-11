// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppliancePrefixDelegatedStaticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#items AppliancePrefixDelegatedStatics#items}
  */
  readonly items: AppliancePrefixDelegatedStaticsItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#network_id AppliancePrefixDelegatedStatics#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#organization_id AppliancePrefixDelegatedStatics#organization_id}
  */
  readonly organizationId: string;
}
export interface AppliancePrefixDelegatedStaticsItems {
  /**
  * A name or description for the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#description AppliancePrefixDelegatedStatics#description}
  */
  readonly description?: string;
  /**
  * Interfaces associated with the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#origin_interfaces AppliancePrefixDelegatedStatics#origin_interfaces}
  */
  readonly originInterfaces?: string[];
  /**
  * Type of the origin
  *   - Choices: `independent`, `internet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#origin_type AppliancePrefixDelegatedStatics#origin_type}
  */
  readonly originType: string;
  /**
  * A static IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#prefix AppliancePrefixDelegatedStatics#prefix}
  */
  readonly prefix: string;
}

export function appliancePrefixDelegatedStaticsItemsToTerraform(struct?: AppliancePrefixDelegatedStaticsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    origin_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originInterfaces),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function appliancePrefixDelegatedStaticsItemsToHclTerraform(struct?: AppliancePrefixDelegatedStaticsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppliancePrefixDelegatedStaticsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppliancePrefixDelegatedStaticsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._originInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.originInterfaces = this._originInterfaces;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppliancePrefixDelegatedStaticsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._originInterfaces = undefined;
      this._originType = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._originInterfaces = value.originInterfaces;
      this._originType = value.originType;
      this._prefix = value.prefix;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin_interfaces - computed: false, optional: true, required: false
  private _originInterfaces?: string[]; 
  public get originInterfaces() {
    return this.getListAttribute('origin_interfaces');
  }
  public set originInterfaces(value: string[]) {
    this._originInterfaces = value;
  }
  public resetOriginInterfaces() {
    this._originInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInterfacesInput() {
    return this._originInterfaces;
  }

  // origin_type - computed: false, optional: false, required: true
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class AppliancePrefixDelegatedStaticsItemsList extends cdktf.ComplexList {
  public internalValue? : AppliancePrefixDelegatedStaticsItems[] | cdktf.IResolvable

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
  public get(index: number): AppliancePrefixDelegatedStaticsItemsOutputReference {
    return new AppliancePrefixDelegatedStaticsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics meraki_appliance_prefix_delegated_statics}
*/
export class AppliancePrefixDelegatedStatics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_prefix_delegated_statics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppliancePrefixDelegatedStatics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppliancePrefixDelegatedStatics to import
  * @param importFromId The id of the existing AppliancePrefixDelegatedStatics that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppliancePrefixDelegatedStatics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_prefix_delegated_statics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_prefix_delegated_statics meraki_appliance_prefix_delegated_statics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppliancePrefixDelegatedStaticsConfig
  */
  public constructor(scope: Construct, id: string, config: AppliancePrefixDelegatedStaticsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_prefix_delegated_statics',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new AppliancePrefixDelegatedStaticsItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: AppliancePrefixDelegatedStaticsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(appliancePrefixDelegatedStaticsItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(appliancePrefixDelegatedStaticsItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppliancePrefixDelegatedStaticsItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
