// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallAddressBookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#address_list CloudFirewallAddressBook#address_list}
  */
  readonly addressList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#auto_add_tag_ecs CloudFirewallAddressBook#auto_add_tag_ecs}
  */
  readonly autoAddTagEcs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#description CloudFirewallAddressBook#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#group_name CloudFirewallAddressBook#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#group_type CloudFirewallAddressBook#group_type}
  */
  readonly groupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#id CloudFirewallAddressBook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#lang CloudFirewallAddressBook#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#tag_relation CloudFirewallAddressBook#tag_relation}
  */
  readonly tagRelation?: string;
  /**
  * ecs_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#ecs_tags CloudFirewallAddressBook#ecs_tags}
  */
  readonly ecsTags?: CloudFirewallAddressBookEcsTags[] | cdktf.IResolvable;
}
export interface CloudFirewallAddressBookEcsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#tag_key CloudFirewallAddressBook#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#tag_value CloudFirewallAddressBook#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudFirewallAddressBookEcsTagsToTerraform(struct?: CloudFirewallAddressBookEcsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudFirewallAddressBookEcsTagsToHclTerraform(struct?: CloudFirewallAddressBookEcsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallAddressBookEcsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallAddressBookEcsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallAddressBookEcsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CloudFirewallAddressBookEcsTagsList extends cdktf.ComplexList {
  public internalValue? : CloudFirewallAddressBookEcsTags[] | cdktf.IResolvable

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
  public get(index: number): CloudFirewallAddressBookEcsTagsOutputReference {
    return new CloudFirewallAddressBookEcsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book alicloud_cloud_firewall_address_book}
*/
export class CloudFirewallAddressBook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_address_book";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallAddressBook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallAddressBook to import
  * @param importFromId The id of the existing CloudFirewallAddressBook that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallAddressBook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_address_book", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_address_book alicloud_cloud_firewall_address_book} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallAddressBookConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallAddressBookConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_address_book',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressList = config.addressList;
    this._autoAddTagEcs = config.autoAddTagEcs;
    this._description = config.description;
    this._groupName = config.groupName;
    this._groupType = config.groupType;
    this._id = config.id;
    this._lang = config.lang;
    this._tagRelation = config.tagRelation;
    this._ecsTags.internalValue = config.ecsTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_list - computed: false, optional: true, required: false
  private _addressList?: string[]; 
  public get addressList() {
    return this.getListAttribute('address_list');
  }
  public set addressList(value: string[]) {
    this._addressList = value;
  }
  public resetAddressList() {
    this._addressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList;
  }

  // auto_add_tag_ecs - computed: false, optional: true, required: false
  private _autoAddTagEcs?: number; 
  public get autoAddTagEcs() {
    return this.getNumberAttribute('auto_add_tag_ecs');
  }
  public set autoAddTagEcs(value: number) {
    this._autoAddTagEcs = value;
  }
  public resetAutoAddTagEcs() {
    this._autoAddTagEcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAddTagEcsInput() {
    return this._autoAddTagEcs;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_type - computed: false, optional: false, required: true
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // tag_relation - computed: true, optional: true, required: false
  private _tagRelation?: string; 
  public get tagRelation() {
    return this.getStringAttribute('tag_relation');
  }
  public set tagRelation(value: string) {
    this._tagRelation = value;
  }
  public resetTagRelation() {
    this._tagRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRelationInput() {
    return this._tagRelation;
  }

  // ecs_tags - computed: false, optional: true, required: false
  private _ecsTags = new CloudFirewallAddressBookEcsTagsList(this, "ecs_tags", true);
  public get ecsTags() {
    return this._ecsTags;
  }
  public putEcsTags(value: CloudFirewallAddressBookEcsTags[] | cdktf.IResolvable) {
    this._ecsTags.internalValue = value;
  }
  public resetEcsTags() {
    this._ecsTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsTagsInput() {
    return this._ecsTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressList),
      auto_add_tag_ecs: cdktf.numberToTerraform(this._autoAddTagEcs),
      description: cdktf.stringToTerraform(this._description),
      group_name: cdktf.stringToTerraform(this._groupName),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      tag_relation: cdktf.stringToTerraform(this._tagRelation),
      ecs_tags: cdktf.listMapper(cloudFirewallAddressBookEcsTagsToTerraform, true)(this._ecsTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_add_tag_ecs: {
        value: cdktf.numberToHclTerraform(this._autoAddTagEcs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_relation: {
        value: cdktf.stringToHclTerraform(this._tagRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_tags: {
        value: cdktf.listMapperHcl(cloudFirewallAddressBookEcsTagsToHclTerraform, true)(this._ecsTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudFirewallAddressBookEcsTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
