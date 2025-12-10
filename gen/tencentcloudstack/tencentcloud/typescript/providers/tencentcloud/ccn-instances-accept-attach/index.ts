// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcnInstancesAcceptAttachConfig extends cdktf.TerraformMetaArguments {
  /**
  * CCN Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#ccn_id CcnInstancesAcceptAttach#ccn_id}
  */
  readonly ccnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#id CcnInstancesAcceptAttach#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#instances CcnInstancesAcceptAttach#instances}
  */
  readonly instances: CcnInstancesAcceptAttachInstances[] | cdktf.IResolvable;
}
export interface CcnInstancesAcceptAttachInstances {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#description CcnInstancesAcceptAttach#description}
  */
  readonly description?: string;
  /**
  * Attachment Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#instance_id CcnInstancesAcceptAttach#instance_id}
  */
  readonly instanceId: string;
  /**
  * Instance Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#instance_region CcnInstancesAcceptAttach#instance_region}
  */
  readonly instanceRegion: string;
  /**
  * InstanceType: `VPC`, `DIRECTCONNECT`, `BMVPC`, `VPNGW`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#instance_type CcnInstancesAcceptAttach#instance_type}
  */
  readonly instanceType?: string;
  /**
  * ID of the routing table associated with the instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#route_table_id CcnInstancesAcceptAttach#route_table_id}
  */
  readonly routeTableId?: string;
}

export function ccnInstancesAcceptAttachInstancesToTerraform(struct?: CcnInstancesAcceptAttachInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_region: cdktf.stringToTerraform(struct!.instanceRegion),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    route_table_id: cdktf.stringToTerraform(struct!.routeTableId),
  }
}


export function ccnInstancesAcceptAttachInstancesToHclTerraform(struct?: CcnInstancesAcceptAttachInstances | cdktf.IResolvable): any {
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
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_region: {
      value: cdktf.stringToHclTerraform(struct!.instanceRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcnInstancesAcceptAttachInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CcnInstancesAcceptAttachInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRegion = this._instanceRegion;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._routeTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableId = this._routeTableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcnInstancesAcceptAttachInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._instanceId = undefined;
      this._instanceRegion = undefined;
      this._instanceType = undefined;
      this._routeTableId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._instanceId = value.instanceId;
      this._instanceRegion = value.instanceRegion;
      this._instanceType = value.instanceType;
      this._routeTableId = value.routeTableId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_region - computed: false, optional: false, required: true
  private _instanceRegion?: string; 
  public get instanceRegion() {
    return this.getStringAttribute('instance_region');
  }
  public set instanceRegion(value: string) {
    this._instanceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRegionInput() {
    return this._instanceRegion;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // route_table_id - computed: false, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }
}

export class CcnInstancesAcceptAttachInstancesList extends cdktf.ComplexList {
  public internalValue? : CcnInstancesAcceptAttachInstances[] | cdktf.IResolvable

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
  public get(index: number): CcnInstancesAcceptAttachInstancesOutputReference {
    return new CcnInstancesAcceptAttachInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach tencentcloud_ccn_instances_accept_attach}
*/
export class CcnInstancesAcceptAttach extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_instances_accept_attach";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcnInstancesAcceptAttach resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcnInstancesAcceptAttach to import
  * @param importFromId The id of the existing CcnInstancesAcceptAttach that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcnInstancesAcceptAttach to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_instances_accept_attach", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ccn_instances_accept_attach tencentcloud_ccn_instances_accept_attach} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcnInstancesAcceptAttachConfig
  */
  public constructor(scope: Construct, id: string, config: CcnInstancesAcceptAttachConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_instances_accept_attach',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnId = config.ccnId;
    this._id = config.id;
    this._instances.internalValue = config.instances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccn_id - computed: false, optional: false, required: true
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
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

  // instances - computed: false, optional: false, required: true
  private _instances = new CcnInstancesAcceptAttachInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: CcnInstancesAcceptAttachInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      id: cdktf.stringToTerraform(this._id),
      instances: cdktf.listMapper(ccnInstancesAcceptAttachInstancesToTerraform, true)(this._instances.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
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
      instances: {
        value: cdktf.listMapperHcl(ccnInstancesAcceptAttachInstancesToHclTerraform, true)(this._instances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CcnInstancesAcceptAttachInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
