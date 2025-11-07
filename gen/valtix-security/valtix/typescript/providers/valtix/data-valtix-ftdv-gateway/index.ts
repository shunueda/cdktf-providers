// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/data-sources/ftdv_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataValtixFtdvGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/data-sources/ftdv_gateway#id DataValtixFtdvGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/data-sources/ftdv_gateway#name DataValtixFtdvGateway#name}
  */
  readonly name: string;
}
export interface DataValtixFtdvGatewayGatewayGwlbEndpoints {
}

export function dataValtixFtdvGatewayGatewayGwlbEndpointsToTerraform(struct?: DataValtixFtdvGatewayGatewayGwlbEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataValtixFtdvGatewayGatewayGwlbEndpointsToHclTerraform(struct?: DataValtixFtdvGatewayGatewayGwlbEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataValtixFtdvGatewayGatewayGwlbEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataValtixFtdvGatewayGatewayGwlbEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataValtixFtdvGatewayGatewayGwlbEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataValtixFtdvGatewayGatewayGwlbEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataValtixFtdvGatewayGatewayGwlbEndpointsOutputReference {
    return new DataValtixFtdvGatewayGatewayGwlbEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/data-sources/ftdv_gateway valtix_ftdv_gateway}
*/
export class DataValtixFtdvGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_ftdv_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataValtixFtdvGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataValtixFtdvGateway to import
  * @param importFromId The id of the existing DataValtixFtdvGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/data-sources/ftdv_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataValtixFtdvGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_ftdv_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/data-sources/ftdv_gateway valtix_ftdv_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataValtixFtdvGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataValtixFtdvGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_ftdv_gateway',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftdv_license_model - computed: true, optional: false, required: false
  public get ftdvLicenseModel() {
    return this.getStringAttribute('ftdv_license_model');
  }

  // ftdv_licenses - computed: true, optional: false, required: false
  public get ftdvLicenses() {
    return cdktf.Fn.tolist(this.getListAttribute('ftdv_licenses'));
  }

  // ftdv_performance_tier - computed: true, optional: false, required: false
  public get ftdvPerformanceTier() {
    return this.getStringAttribute('ftdv_performance_tier');
  }

  // ftdv_policy_id - computed: true, optional: false, required: false
  public get ftdvPolicyId() {
    return this.getStringAttribute('ftdv_policy_id');
  }

  // ftdv_version - computed: true, optional: false, required: false
  public get ftdvVersion() {
    return this.getStringAttribute('ftdv_version');
  }

  // gateway_endpoint - computed: true, optional: false, required: false
  public get gatewayEndpoint() {
    return this.getStringAttribute('gateway_endpoint');
  }

  // gateway_gwlb_endpoints - computed: true, optional: false, required: false
  private _gatewayGwlbEndpoints = new DataValtixFtdvGatewayGatewayGwlbEndpointsList(this, "gateway_gwlb_endpoints", false);
  public get gatewayGwlbEndpoints() {
    return this._gatewayGwlbEndpoints;
  }

  // gwlb_service_id - computed: true, optional: false, required: false
  public get gwlbServiceId() {
    return this.getStringAttribute('gwlb_service_id');
  }

  // gwlb_service_name - computed: true, optional: false, required: false
  public get gwlbServiceName() {
    return this.getStringAttribute('gwlb_service_name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
