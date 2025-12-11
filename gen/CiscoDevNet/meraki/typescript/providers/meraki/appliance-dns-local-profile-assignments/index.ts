// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceDnsLocalProfileAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List containing the network ID and Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments#items ApplianceDnsLocalProfileAssignments#items}
  */
  readonly items: ApplianceDnsLocalProfileAssignmentsItems[] | cdktf.IResolvable;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments#organization_id ApplianceDnsLocalProfileAssignments#organization_id}
  */
  readonly organizationId: string;
}
export interface ApplianceDnsLocalProfileAssignmentsItems {
  /**
  * ID of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments#network_id ApplianceDnsLocalProfileAssignments#network_id}
  */
  readonly networkId: string;
  /**
  * ID of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments#profile_id ApplianceDnsLocalProfileAssignments#profile_id}
  */
  readonly profileId: string;
}

export function applianceDnsLocalProfileAssignmentsItemsToTerraform(struct?: ApplianceDnsLocalProfileAssignmentsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function applianceDnsLocalProfileAssignmentsItemsToHclTerraform(struct?: ApplianceDnsLocalProfileAssignmentsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceDnsLocalProfileAssignmentsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceDnsLocalProfileAssignmentsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceDnsLocalProfileAssignmentsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._profileId = value.profileId;
    }
  }

  // assignment_id - computed: true, optional: false, required: false
  public get assignmentId() {
    return this.getStringAttribute('assignment_id');
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

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}

export class ApplianceDnsLocalProfileAssignmentsItemsList extends cdktf.ComplexList {
  public internalValue? : ApplianceDnsLocalProfileAssignmentsItems[] | cdktf.IResolvable

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
  public get(index: number): ApplianceDnsLocalProfileAssignmentsItemsOutputReference {
    return new ApplianceDnsLocalProfileAssignmentsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments meraki_appliance_dns_local_profile_assignments}
*/
export class ApplianceDnsLocalProfileAssignments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_dns_local_profile_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceDnsLocalProfileAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceDnsLocalProfileAssignments to import
  * @param importFromId The id of the existing ApplianceDnsLocalProfileAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceDnsLocalProfileAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_dns_local_profile_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_profile_assignments meraki_appliance_dns_local_profile_assignments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceDnsLocalProfileAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceDnsLocalProfileAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_dns_local_profile_assignments',
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
  private _items = new ApplianceDnsLocalProfileAssignmentsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApplianceDnsLocalProfileAssignmentsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
      items: cdktf.listMapper(applianceDnsLocalProfileAssignmentsItemsToTerraform, false)(this._items.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(applianceDnsLocalProfileAssignmentsItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceDnsLocalProfileAssignmentsItemsList",
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
