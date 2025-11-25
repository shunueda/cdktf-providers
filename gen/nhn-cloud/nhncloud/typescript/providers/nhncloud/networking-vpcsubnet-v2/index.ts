// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingVpcsubnetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#cidr NetworkingVpcsubnetV2#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#name NetworkingVpcsubnetV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#region NetworkingVpcsubnetV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#routingtable_id NetworkingVpcsubnetV2#routingtable_id}
  */
  readonly routingtableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#tenant_id NetworkingVpcsubnetV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#vpc_id NetworkingVpcsubnetV2#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#timeouts NetworkingVpcsubnetV2#timeouts}
  */
  readonly timeouts?: NetworkingVpcsubnetV2Timeouts;
}
export interface NetworkingVpcsubnetV2Routes {
}

export function networkingVpcsubnetV2RoutesToTerraform(struct?: NetworkingVpcsubnetV2Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkingVpcsubnetV2RoutesToHclTerraform(struct?: NetworkingVpcsubnetV2Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkingVpcsubnetV2RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkingVpcsubnetV2Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingVpcsubnetV2Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getNumberAttribute('mask');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class NetworkingVpcsubnetV2RoutesList extends cdktf.ComplexList {

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
  public get(index: number): NetworkingVpcsubnetV2RoutesOutputReference {
    return new NetworkingVpcsubnetV2RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkingVpcsubnetV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#create NetworkingVpcsubnetV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#delete NetworkingVpcsubnetV2#delete}
  */
  readonly delete?: string;
}

export function networkingVpcsubnetV2TimeoutsToTerraform(struct?: NetworkingVpcsubnetV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkingVpcsubnetV2TimeoutsToHclTerraform(struct?: NetworkingVpcsubnetV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingVpcsubnetV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingVpcsubnetV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingVpcsubnetV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
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
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2 nhncloud_networking_vpcsubnet_v2}
*/
export class NetworkingVpcsubnetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_networking_vpcsubnet_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingVpcsubnetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingVpcsubnetV2 to import
  * @param importFromId The id of the existing NetworkingVpcsubnetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingVpcsubnetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_networking_vpcsubnet_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/networking_vpcsubnet_v2 nhncloud_networking_vpcsubnet_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingVpcsubnetV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingVpcsubnetV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_networking_vpcsubnet_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._name = config.name;
    this._region = config.region;
    this._routingtableId = config.routingtableId;
    this._tenantId = config.tenantId;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_ip_count - computed: true, optional: false, required: false
  public get availableIpCount() {
    return this.getNumberAttribute('available_ip_count');
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getBooleanAttribute('external');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new NetworkingVpcsubnetV2RoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }

  // routingtable_default_table - computed: true, optional: false, required: false
  public get routingtableDefaultTable() {
    return this.getBooleanAttribute('routingtable_default_table');
  }

  // routingtable_explicit - computed: true, optional: false, required: false
  public get routingtableExplicit() {
    return this.getBooleanAttribute('routingtable_explicit');
  }

  // routingtable_gateway_id - computed: true, optional: false, required: false
  public get routingtableGatewayId() {
    return this.getStringAttribute('routingtable_gateway_id');
  }

  // routingtable_id - computed: true, optional: true, required: false
  private _routingtableId?: string; 
  public get routingtableId() {
    return this.getStringAttribute('routingtable_id');
  }
  public set routingtableId(value: string) {
    this._routingtableId = value;
  }
  public resetRoutingtableId() {
    this._routingtableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingtableIdInput() {
    return this._routingtableId;
  }

  // routingtable_name - computed: true, optional: false, required: false
  public get routingtableName() {
    return this.getStringAttribute('routingtable_name');
  }

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getBooleanAttribute('shared');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vpc_cidrv4 - computed: true, optional: false, required: false
  public get vpcCidrv4() {
    return this.getStringAttribute('vpc_cidrv4');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // vpc_shared - computed: true, optional: false, required: false
  public get vpcShared() {
    return this.getBooleanAttribute('vpc_shared');
  }

  // vpc_state - computed: true, optional: false, required: false
  public get vpcState() {
    return this.getStringAttribute('vpc_state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingVpcsubnetV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingVpcsubnetV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      routingtable_id: cdktf.stringToTerraform(this._routingtableId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: networkingVpcsubnetV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routingtable_id: {
        value: cdktf.stringToHclTerraform(this._routingtableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkingVpcsubnetV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingVpcsubnetV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
