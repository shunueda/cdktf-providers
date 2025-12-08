// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayAccessControlListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#access_control_list_name ApiGatewayAccessControlList#access_control_list_name}
  */
  readonly accessControlListName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#address_ip_version ApiGatewayAccessControlList#address_ip_version}
  */
  readonly addressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#id ApiGatewayAccessControlList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * acl_entrys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#acl_entrys ApiGatewayAccessControlList#acl_entrys}
  */
  readonly aclEntrys?: ApiGatewayAccessControlListAclEntrys[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#timeouts ApiGatewayAccessControlList#timeouts}
  */
  readonly timeouts?: ApiGatewayAccessControlListTimeouts;
}
export interface ApiGatewayAccessControlListAclEntrys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#acl_entry_comment ApiGatewayAccessControlList#acl_entry_comment}
  */
  readonly aclEntryComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#acl_entry_ip ApiGatewayAccessControlList#acl_entry_ip}
  */
  readonly aclEntryIp?: string;
}

export function apiGatewayAccessControlListAclEntrysToTerraform(struct?: ApiGatewayAccessControlListAclEntrys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_entry_comment: cdktf.stringToTerraform(struct!.aclEntryComment),
    acl_entry_ip: cdktf.stringToTerraform(struct!.aclEntryIp),
  }
}


export function apiGatewayAccessControlListAclEntrysToHclTerraform(struct?: ApiGatewayAccessControlListAclEntrys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_entry_comment: {
      value: cdktf.stringToHclTerraform(struct!.aclEntryComment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_entry_ip: {
      value: cdktf.stringToHclTerraform(struct!.aclEntryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayAccessControlListAclEntrysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayAccessControlListAclEntrys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclEntryComment !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclEntryComment = this._aclEntryComment;
    }
    if (this._aclEntryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclEntryIp = this._aclEntryIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayAccessControlListAclEntrys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclEntryComment = undefined;
      this._aclEntryIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclEntryComment = value.aclEntryComment;
      this._aclEntryIp = value.aclEntryIp;
    }
  }

  // acl_entry_comment - computed: false, optional: true, required: false
  private _aclEntryComment?: string; 
  public get aclEntryComment() {
    return this.getStringAttribute('acl_entry_comment');
  }
  public set aclEntryComment(value: string) {
    this._aclEntryComment = value;
  }
  public resetAclEntryComment() {
    this._aclEntryComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEntryCommentInput() {
    return this._aclEntryComment;
  }

  // acl_entry_ip - computed: false, optional: true, required: false
  private _aclEntryIp?: string; 
  public get aclEntryIp() {
    return this.getStringAttribute('acl_entry_ip');
  }
  public set aclEntryIp(value: string) {
    this._aclEntryIp = value;
  }
  public resetAclEntryIp() {
    this._aclEntryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEntryIpInput() {
    return this._aclEntryIp;
  }
}

export class ApiGatewayAccessControlListAclEntrysList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayAccessControlListAclEntrys[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayAccessControlListAclEntrysOutputReference {
    return new ApiGatewayAccessControlListAclEntrysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayAccessControlListTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#create ApiGatewayAccessControlList#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#delete ApiGatewayAccessControlList#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#update ApiGatewayAccessControlList#update}
  */
  readonly update?: string;
}

export function apiGatewayAccessControlListTimeoutsToTerraform(struct?: ApiGatewayAccessControlListTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apiGatewayAccessControlListTimeoutsToHclTerraform(struct?: ApiGatewayAccessControlListTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayAccessControlListTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiGatewayAccessControlListTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayAccessControlListTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list alicloud_api_gateway_access_control_list}
*/
export class ApiGatewayAccessControlList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_api_gateway_access_control_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayAccessControlList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayAccessControlList to import
  * @param importFromId The id of the existing ApiGatewayAccessControlList that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayAccessControlList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_api_gateway_access_control_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/api_gateway_access_control_list alicloud_api_gateway_access_control_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayAccessControlListConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayAccessControlListConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_api_gateway_access_control_list',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlListName = config.accessControlListName;
    this._addressIpVersion = config.addressIpVersion;
    this._id = config.id;
    this._aclEntrys.internalValue = config.aclEntrys;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_list_name - computed: false, optional: false, required: true
  private _accessControlListName?: string; 
  public get accessControlListName() {
    return this.getStringAttribute('access_control_list_name');
  }
  public set accessControlListName(value: string) {
    this._accessControlListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListNameInput() {
    return this._accessControlListName;
  }

  // address_ip_version - computed: true, optional: true, required: false
  private _addressIpVersion?: string; 
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }
  public set addressIpVersion(value: string) {
    this._addressIpVersion = value;
  }
  public resetAddressIpVersion() {
    this._addressIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpVersionInput() {
    return this._addressIpVersion;
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

  // acl_entrys - computed: false, optional: true, required: false
  private _aclEntrys = new ApiGatewayAccessControlListAclEntrysList(this, "acl_entrys", true);
  public get aclEntrys() {
    return this._aclEntrys;
  }
  public putAclEntrys(value: ApiGatewayAccessControlListAclEntrys[] | cdktf.IResolvable) {
    this._aclEntrys.internalValue = value;
  }
  public resetAclEntrys() {
    this._aclEntrys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEntrysInput() {
    return this._aclEntrys.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiGatewayAccessControlListTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiGatewayAccessControlListTimeouts) {
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
      access_control_list_name: cdktf.stringToTerraform(this._accessControlListName),
      address_ip_version: cdktf.stringToTerraform(this._addressIpVersion),
      id: cdktf.stringToTerraform(this._id),
      acl_entrys: cdktf.listMapper(apiGatewayAccessControlListAclEntrysToTerraform, true)(this._aclEntrys.internalValue),
      timeouts: apiGatewayAccessControlListTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_list_name: {
        value: cdktf.stringToHclTerraform(this._accessControlListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_ip_version: {
        value: cdktf.stringToHclTerraform(this._addressIpVersion),
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
      acl_entrys: {
        value: cdktf.listMapperHcl(apiGatewayAccessControlListAclEntrysToHclTerraform, true)(this._aclEntrys.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayAccessControlListAclEntrysList",
      },
      timeouts: {
        value: apiGatewayAccessControlListTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiGatewayAccessControlListTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
