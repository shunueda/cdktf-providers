// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcVswitchNetworkAclAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment#id VpcVswitchNetworkAclAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment#network_acl_id VpcVswitchNetworkAclAttachment#network_acl_id}
  */
  readonly networkAclId: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment#resources VpcVswitchNetworkAclAttachment#resources}
  */
  readonly resources: VpcVswitchNetworkAclAttachmentResources[] | cdktf.IResolvable;
}
export interface VpcVswitchNetworkAclAttachmentResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment#resource_id VpcVswitchNetworkAclAttachment#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment#resource_type VpcVswitchNetworkAclAttachment#resource_type}
  */
  readonly resourceType: string;
}

export function vpcVswitchNetworkAclAttachmentResourcesToTerraform(struct?: VpcVswitchNetworkAclAttachmentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function vpcVswitchNetworkAclAttachmentResourcesToHclTerraform(struct?: VpcVswitchNetworkAclAttachmentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcVswitchNetworkAclAttachmentResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcVswitchNetworkAclAttachmentResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcVswitchNetworkAclAttachmentResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class VpcVswitchNetworkAclAttachmentResourcesList extends cdktf.ComplexList {
  public internalValue? : VpcVswitchNetworkAclAttachmentResources[] | cdktf.IResolvable

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
  public get(index: number): VpcVswitchNetworkAclAttachmentResourcesOutputReference {
    return new VpcVswitchNetworkAclAttachmentResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment alibabacloudstack_vpc_vswitch_network_acl_attachment}
*/
export class VpcVswitchNetworkAclAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpc_vswitch_network_acl_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcVswitchNetworkAclAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcVswitchNetworkAclAttachment to import
  * @param importFromId The id of the existing VpcVswitchNetworkAclAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcVswitchNetworkAclAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpc_vswitch_network_acl_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpc_vswitch_network_acl_attachment alibabacloudstack_vpc_vswitch_network_acl_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcVswitchNetworkAclAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: VpcVswitchNetworkAclAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpc_vswitch_network_acl_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._networkAclId = config.networkAclId;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_acl_id - computed: false, optional: false, required: true
  private _networkAclId?: string; 
  public get networkAclId() {
    return this.getStringAttribute('network_acl_id');
  }
  public set networkAclId(value: string) {
    this._networkAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclIdInput() {
    return this._networkAclId;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new VpcVswitchNetworkAclAttachmentResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: VpcVswitchNetworkAclAttachmentResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_acl_id: cdktf.stringToTerraform(this._networkAclId),
      resources: cdktf.listMapper(vpcVswitchNetworkAclAttachmentResourcesToTerraform, true)(this._resources.internalValue),
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
      network_acl_id: {
        value: cdktf.stringToHclTerraform(this._networkAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(vpcVswitchNetworkAclAttachmentResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcVswitchNetworkAclAttachmentResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
