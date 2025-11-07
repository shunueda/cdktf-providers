// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantPoliciesRouteMapPolicyMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#description TenantPoliciesRouteMapPolicyMulticast#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#id TenantPoliciesRouteMapPolicyMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#name TenantPoliciesRouteMapPolicyMulticast#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#template_id TenantPoliciesRouteMapPolicyMulticast#template_id}
  */
  readonly templateId: string;
  /**
  * route_map_multicast_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#route_map_multicast_entries TenantPoliciesRouteMapPolicyMulticast#route_map_multicast_entries}
  */
  readonly routeMapMulticastEntries: TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries[] | cdktf.IResolvable;
}
export interface TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#action TenantPoliciesRouteMapPolicyMulticast#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#group_ip TenantPoliciesRouteMapPolicyMulticast#group_ip}
  */
  readonly groupIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#order TenantPoliciesRouteMapPolicyMulticast#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#rendezvous_point_ip TenantPoliciesRouteMapPolicyMulticast#rendezvous_point_ip}
  */
  readonly rendezvousPointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#source_ip TenantPoliciesRouteMapPolicyMulticast#source_ip}
  */
  readonly sourceIp?: string;
}

export function tenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesToTerraform(struct?: TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    group_ip: cdktf.stringToTerraform(struct!.groupIp),
    order: cdktf.numberToTerraform(struct!.order),
    rendezvous_point_ip: cdktf.stringToTerraform(struct!.rendezvousPointIp),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function tenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesToHclTerraform(struct?: TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ip: {
      value: cdktf.stringToHclTerraform(struct!.groupIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rendezvous_point_ip: {
      value: cdktf.stringToHclTerraform(struct!.rendezvousPointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._groupIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIp = this._groupIp;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._rendezvousPointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rendezvousPointIp = this._rendezvousPointIp;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._groupIp = undefined;
      this._order = undefined;
      this._rendezvousPointIp = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._groupIp = value.groupIp;
      this._order = value.order;
      this._rendezvousPointIp = value.rendezvousPointIp;
      this._sourceIp = value.sourceIp;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // group_ip - computed: true, optional: true, required: false
  private _groupIp?: string; 
  public get groupIp() {
    return this.getStringAttribute('group_ip');
  }
  public set groupIp(value: string) {
    this._groupIp = value;
  }
  public resetGroupIp() {
    this._groupIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIpInput() {
    return this._groupIp;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // rendezvous_point_ip - computed: true, optional: true, required: false
  private _rendezvousPointIp?: string; 
  public get rendezvousPointIp() {
    return this.getStringAttribute('rendezvous_point_ip');
  }
  public set rendezvousPointIp(value: string) {
    this._rendezvousPointIp = value;
  }
  public resetRendezvousPointIp() {
    this._rendezvousPointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rendezvousPointIpInput() {
    return this._rendezvousPointIp;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}

export class TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesList extends cdktf.ComplexList {
  public internalValue? : TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries[] | cdktf.IResolvable

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
  public get(index: number): TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesOutputReference {
    return new TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast mso_tenant_policies_route_map_policy_multicast}
*/
export class TenantPoliciesRouteMapPolicyMulticast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant_policies_route_map_policy_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantPoliciesRouteMapPolicyMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantPoliciesRouteMapPolicyMulticast to import
  * @param importFromId The id of the existing TenantPoliciesRouteMapPolicyMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantPoliciesRouteMapPolicyMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant_policies_route_map_policy_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/tenant_policies_route_map_policy_multicast mso_tenant_policies_route_map_policy_multicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantPoliciesRouteMapPolicyMulticastConfig
  */
  public constructor(scope: Construct, id: string, config: TenantPoliciesRouteMapPolicyMulticastConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant_policies_route_map_policy_multicast',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._templateId = config.templateId;
    this._routeMapMulticastEntries.internalValue = config.routeMapMulticastEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // route_map_multicast_entries - computed: false, optional: false, required: true
  private _routeMapMulticastEntries = new TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesList(this, "route_map_multicast_entries", true);
  public get routeMapMulticastEntries() {
    return this._routeMapMulticastEntries;
  }
  public putRouteMapMulticastEntries(value: TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries[] | cdktf.IResolvable) {
    this._routeMapMulticastEntries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapMulticastEntriesInput() {
    return this._routeMapMulticastEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
      route_map_multicast_entries: cdktf.listMapper(tenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesToTerraform, true)(this._routeMapMulticastEntries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_multicast_entries: {
        value: cdktf.listMapperHcl(tenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesToHclTerraform, true)(this._routeMapMulticastEntries.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
