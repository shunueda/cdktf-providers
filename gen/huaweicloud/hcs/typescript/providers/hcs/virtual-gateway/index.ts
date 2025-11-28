// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#description VirtualGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#id VirtualGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#name VirtualGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#region VirtualGateway#region}
  */
  readonly region?: string;
  /**
  * vpc_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#vpc_group VirtualGateway#vpc_group}
  */
  readonly vpcGroup: VirtualGatewayVpcGroup[] | cdktf.IResolvable;
}
export interface VirtualGatewayVpcGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#local_ep_group VirtualGateway#local_ep_group}
  */
  readonly localEpGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#local_ep_group_id VirtualGateway#local_ep_group_id}
  */
  readonly localEpGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#vpc_id VirtualGateway#vpc_id}
  */
  readonly vpcId: string;
}

export function virtualGatewayVpcGroupToTerraform(struct?: VirtualGatewayVpcGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ep_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localEpGroup),
    local_ep_group_id: cdktf.stringToTerraform(struct!.localEpGroupId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function virtualGatewayVpcGroupToHclTerraform(struct?: VirtualGatewayVpcGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ep_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localEpGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_ep_group_id: {
      value: cdktf.stringToHclTerraform(struct!.localEpGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualGatewayVpcGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualGatewayVpcGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localEpGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.localEpGroup = this._localEpGroup;
    }
    if (this._localEpGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localEpGroupId = this._localEpGroupId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualGatewayVpcGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localEpGroup = undefined;
      this._localEpGroupId = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localEpGroup = value.localEpGroup;
      this._localEpGroupId = value.localEpGroupId;
      this._vpcId = value.vpcId;
    }
  }

  // local_ep_group - computed: false, optional: false, required: true
  private _localEpGroup?: string[]; 
  public get localEpGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('local_ep_group'));
  }
  public set localEpGroup(value: string[]) {
    this._localEpGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localEpGroupInput() {
    return this._localEpGroup;
  }

  // local_ep_group_id - computed: true, optional: true, required: false
  private _localEpGroupId?: string; 
  public get localEpGroupId() {
    return this.getStringAttribute('local_ep_group_id');
  }
  public set localEpGroupId(value: string) {
    this._localEpGroupId = value;
  }
  public resetLocalEpGroupId() {
    this._localEpGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEpGroupIdInput() {
    return this._localEpGroupId;
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
}

export class VirtualGatewayVpcGroupList extends cdktf.ComplexList {
  public internalValue? : VirtualGatewayVpcGroup[] | cdktf.IResolvable

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
  public get(index: number): VirtualGatewayVpcGroupOutputReference {
    return new VirtualGatewayVpcGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway hcs_virtual_gateway}
*/
export class VirtualGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_virtual_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualGateway to import
  * @param importFromId The id of the existing VirtualGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_virtual_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/virtual_gateway hcs_virtual_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_virtual_gateway',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
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
    this._region = config.region;
    this._vpcGroup.internalValue = config.vpcGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_group - computed: false, optional: false, required: true
  private _vpcGroup = new VirtualGatewayVpcGroupList(this, "vpc_group", true);
  public get vpcGroup() {
    return this._vpcGroup;
  }
  public putVpcGroup(value: VirtualGatewayVpcGroup[] | cdktf.IResolvable) {
    this._vpcGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcGroupInput() {
    return this._vpcGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      vpc_group: cdktf.listMapper(virtualGatewayVpcGroupToTerraform, true)(this._vpcGroup.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_group: {
        value: cdktf.listMapperHcl(virtualGatewayVpcGroupToHclTerraform, true)(this._vpcGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualGatewayVpcGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
