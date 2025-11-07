// https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/load_balancer_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudLoadBalancerTypesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataHcloudLoadBalancerTypesLoadBalancerTypes {
}

export function dataHcloudLoadBalancerTypesLoadBalancerTypesToTerraform(struct?: DataHcloudLoadBalancerTypesLoadBalancerTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudLoadBalancerTypesLoadBalancerTypesToHclTerraform(struct?: DataHcloudLoadBalancerTypesLoadBalancerTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudLoadBalancerTypesLoadBalancerTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcloudLoadBalancerTypesLoadBalancerTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudLoadBalancerTypesLoadBalancerTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_assigned_certificates - computed: true, optional: false, required: false
  public get maxAssignedCertificates() {
    return this.getNumberAttribute('max_assigned_certificates');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_services - computed: true, optional: false, required: false
  public get maxServices() {
    return this.getNumberAttribute('max_services');
  }

  // max_targets - computed: true, optional: false, required: false
  public get maxTargets() {
    return this.getNumberAttribute('max_targets');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataHcloudLoadBalancerTypesLoadBalancerTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataHcloudLoadBalancerTypesLoadBalancerTypesOutputReference {
    return new DataHcloudLoadBalancerTypesLoadBalancerTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/load_balancer_types hcloud_load_balancer_types}
*/
export class DataHcloudLoadBalancerTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_load_balancer_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudLoadBalancerTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudLoadBalancerTypes to import
  * @param importFromId The id of the existing DataHcloudLoadBalancerTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/load_balancer_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudLoadBalancerTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_load_balancer_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/load_balancer_types hcloud_load_balancer_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudLoadBalancerTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudLoadBalancerTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_load_balancer_types',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.55.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_types - computed: true, optional: false, required: false
  private _loadBalancerTypes = new DataHcloudLoadBalancerTypesLoadBalancerTypesList(this, "load_balancer_types", false);
  public get loadBalancerTypes() {
    return this._loadBalancerTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
