// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_route_map_policy_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoTenantPoliciesRouteMapPolicyMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_route_map_policy_multicast#id DataMsoTenantPoliciesRouteMapPolicyMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_route_map_policy_multicast#name DataMsoTenantPoliciesRouteMapPolicyMulticast#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_route_map_policy_multicast#template_id DataMsoTenantPoliciesRouteMapPolicyMulticast#template_id}
  */
  readonly templateId: string;
}
export interface DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries {
}

export function dataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesToTerraform(struct?: DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesToHclTerraform(struct?: DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // group_ip - computed: true, optional: false, required: false
  public get groupIp() {
    return this.getStringAttribute('group_ip');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // rendezvous_point_ip - computed: true, optional: false, required: false
  public get rendezvousPointIp() {
    return this.getStringAttribute('rendezvous_point_ip');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
}

export class DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesOutputReference {
    return new DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_route_map_policy_multicast mso_tenant_policies_route_map_policy_multicast}
*/
export class DataMsoTenantPoliciesRouteMapPolicyMulticast extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant_policies_route_map_policy_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoTenantPoliciesRouteMapPolicyMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoTenantPoliciesRouteMapPolicyMulticast to import
  * @param importFromId The id of the existing DataMsoTenantPoliciesRouteMapPolicyMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_route_map_policy_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoTenantPoliciesRouteMapPolicyMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant_policies_route_map_policy_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_route_map_policy_multicast mso_tenant_policies_route_map_policy_multicast} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoTenantPoliciesRouteMapPolicyMulticastConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoTenantPoliciesRouteMapPolicyMulticastConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant_policies_route_map_policy_multicast',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // route_map_multicast_entries - computed: true, optional: false, required: false
  private _routeMapMulticastEntries = new DataMsoTenantPoliciesRouteMapPolicyMulticastRouteMapMulticastEntriesList(this, "route_map_multicast_entries", false);
  public get routeMapMulticastEntries() {
    return this._routeMapMulticastEntries;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
