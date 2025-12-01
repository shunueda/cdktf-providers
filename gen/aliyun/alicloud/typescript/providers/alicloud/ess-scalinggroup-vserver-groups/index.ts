// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssScalinggroupVserverGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#force EssScalinggroupVserverGroups#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#id EssScalinggroupVserverGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#scaling_group_id EssScalinggroupVserverGroups#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * vserver_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#vserver_groups EssScalinggroupVserverGroups#vserver_groups}
  */
  readonly vserverGroups: EssScalinggroupVserverGroupsVserverGroups[] | cdktf.IResolvable;
}
export interface EssScalinggroupVserverGroupsVserverGroupsVserverAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#port EssScalinggroupVserverGroups#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#vserver_group_id EssScalinggroupVserverGroups#vserver_group_id}
  */
  readonly vserverGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#weight EssScalinggroupVserverGroups#weight}
  */
  readonly weight: number;
}

export function essScalinggroupVserverGroupsVserverGroupsVserverAttributesToTerraform(struct?: EssScalinggroupVserverGroupsVserverGroupsVserverAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    vserver_group_id: cdktf.stringToTerraform(struct!.vserverGroupId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function essScalinggroupVserverGroupsVserverGroupsVserverAttributesToHclTerraform(struct?: EssScalinggroupVserverGroupsVserverGroupsVserverAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vserver_group_id: {
      value: cdktf.stringToHclTerraform(struct!.vserverGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalinggroupVserverGroupsVserverGroupsVserverAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalinggroupVserverGroupsVserverGroupsVserverAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vserverGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserverGroupId = this._vserverGroupId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalinggroupVserverGroupsVserverGroupsVserverAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._vserverGroupId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._vserverGroupId = value.vserverGroupId;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // vserver_group_id - computed: false, optional: false, required: true
  private _vserverGroupId?: string; 
  public get vserverGroupId() {
    return this.getStringAttribute('vserver_group_id');
  }
  public set vserverGroupId(value: string) {
    this._vserverGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverGroupIdInput() {
    return this._vserverGroupId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class EssScalinggroupVserverGroupsVserverGroupsVserverAttributesList extends cdktf.ComplexList {
  public internalValue? : EssScalinggroupVserverGroupsVserverGroupsVserverAttributes[] | cdktf.IResolvable

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
  public get(index: number): EssScalinggroupVserverGroupsVserverGroupsVserverAttributesOutputReference {
    return new EssScalinggroupVserverGroupsVserverGroupsVserverAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalinggroupVserverGroupsVserverGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#loadbalancer_id EssScalinggroupVserverGroups#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * vserver_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#vserver_attributes EssScalinggroupVserverGroups#vserver_attributes}
  */
  readonly vserverAttributes: EssScalinggroupVserverGroupsVserverGroupsVserverAttributes[] | cdktf.IResolvable;
}

export function essScalinggroupVserverGroupsVserverGroupsToTerraform(struct?: EssScalinggroupVserverGroupsVserverGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loadbalancer_id: cdktf.stringToTerraform(struct!.loadbalancerId),
    vserver_attributes: cdktf.listMapper(essScalinggroupVserverGroupsVserverGroupsVserverAttributesToTerraform, true)(struct!.vserverAttributes),
  }
}


export function essScalinggroupVserverGroupsVserverGroupsToHclTerraform(struct?: EssScalinggroupVserverGroupsVserverGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loadbalancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadbalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vserver_attributes: {
      value: cdktf.listMapperHcl(essScalinggroupVserverGroupsVserverGroupsVserverAttributesToHclTerraform, true)(struct!.vserverAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "EssScalinggroupVserverGroupsVserverGroupsVserverAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalinggroupVserverGroupsVserverGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalinggroupVserverGroupsVserverGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadbalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancerId = this._loadbalancerId;
    }
    if (this._vserverAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserverAttributes = this._vserverAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalinggroupVserverGroupsVserverGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadbalancerId = undefined;
      this._vserverAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadbalancerId = value.loadbalancerId;
      this._vserverAttributes.internalValue = value.vserverAttributes;
    }
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
  }

  // vserver_attributes - computed: false, optional: false, required: true
  private _vserverAttributes = new EssScalinggroupVserverGroupsVserverGroupsVserverAttributesList(this, "vserver_attributes", true);
  public get vserverAttributes() {
    return this._vserverAttributes;
  }
  public putVserverAttributes(value: EssScalinggroupVserverGroupsVserverGroupsVserverAttributes[] | cdktf.IResolvable) {
    this._vserverAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverAttributesInput() {
    return this._vserverAttributes.internalValue;
  }
}

export class EssScalinggroupVserverGroupsVserverGroupsList extends cdktf.ComplexList {
  public internalValue? : EssScalinggroupVserverGroupsVserverGroups[] | cdktf.IResolvable

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
  public get(index: number): EssScalinggroupVserverGroupsVserverGroupsOutputReference {
    return new EssScalinggroupVserverGroupsVserverGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups alicloud_ess_scalinggroup_vserver_groups}
*/
export class EssScalinggroupVserverGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_scalinggroup_vserver_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssScalinggroupVserverGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssScalinggroupVserverGroups to import
  * @param importFromId The id of the existing EssScalinggroupVserverGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssScalinggroupVserverGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_scalinggroup_vserver_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ess_scalinggroup_vserver_groups alicloud_ess_scalinggroup_vserver_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssScalinggroupVserverGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: EssScalinggroupVserverGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_scalinggroup_vserver_groups',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._force = config.force;
    this._id = config.id;
    this._scalingGroupId = config.scalingGroupId;
    this._vserverGroups.internalValue = config.vserverGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // vserver_groups - computed: false, optional: false, required: true
  private _vserverGroups = new EssScalinggroupVserverGroupsVserverGroupsList(this, "vserver_groups", true);
  public get vserverGroups() {
    return this._vserverGroups;
  }
  public putVserverGroups(value: EssScalinggroupVserverGroupsVserverGroups[] | cdktf.IResolvable) {
    this._vserverGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverGroupsInput() {
    return this._vserverGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      vserver_groups: cdktf.listMapper(essScalinggroupVserverGroupsVserverGroupsToTerraform, true)(this._vserverGroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vserver_groups: {
        value: cdktf.listMapperHcl(essScalinggroupVserverGroupsVserverGroupsToHclTerraform, true)(this._vserverGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalinggroupVserverGroupsVserverGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
