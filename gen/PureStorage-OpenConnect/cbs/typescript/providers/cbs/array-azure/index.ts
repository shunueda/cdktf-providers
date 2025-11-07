// https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArrayAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#alert_recipients ArrayAzure#alert_recipients}
  */
  readonly alertRecipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#array_model ArrayAzure#array_model}
  */
  readonly arrayModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#array_name ArrayAzure#array_name}
  */
  readonly arrayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#id ArrayAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#iscsi_subnet ArrayAzure#iscsi_subnet}
  */
  readonly iscsiSubnet: string;
  /**
  * This is a list of Azure group object IDs for people who are allowed to approve JIT requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#jit_approval_group_object_ids ArrayAzure#jit_approval_group_object_ids}
  */
  readonly jitApprovalGroupObjectIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#key_vault_id ArrayAzure#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#license_key ArrayAzure#license_key}
  */
  readonly licenseKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#location ArrayAzure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#log_sender_domain ArrayAzure#log_sender_domain}
  */
  readonly logSenderDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#management_subnet ArrayAzure#management_subnet}
  */
  readonly managementSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#pureuser_private_key ArrayAzure#pureuser_private_key}
  */
  readonly pureuserPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#pureuser_private_key_path ArrayAzure#pureuser_private_key_path}
  */
  readonly pureuserPrivateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#replication_subnet ArrayAzure#replication_subnet}
  */
  readonly replicationSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#resource_group_name ArrayAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#system_subnet ArrayAzure#system_subnet}
  */
  readonly systemSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#tags ArrayAzure#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * A required input that denotes the identity of the customer User Assigned identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#user_assigned_identity ArrayAzure#user_assigned_identity}
  */
  readonly userAssignedIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#virtual_network_id ArrayAzure#virtual_network_id}
  */
  readonly virtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#zone ArrayAzure#zone}
  */
  readonly zone: number;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#plan ArrayAzure#plan}
  */
  readonly plan?: ArrayAzurePlan;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#resource_tags ArrayAzure#resource_tags}
  */
  readonly resourceTags?: ArrayAzureResourceTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#timeouts ArrayAzure#timeouts}
  */
  readonly timeouts?: ArrayAzureTimeouts;
}
export interface ArrayAzurePlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#name ArrayAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#product ArrayAzure#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#publisher ArrayAzure#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#version ArrayAzure#version}
  */
  readonly version: string;
}

export function arrayAzurePlanToTerraform(struct?: ArrayAzurePlanOutputReference | ArrayAzurePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function arrayAzurePlanToHclTerraform(struct?: ArrayAzurePlanOutputReference | ArrayAzurePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArrayAzurePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArrayAzurePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArrayAzurePlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._publisher = value.publisher;
      this._version = value.version;
    }
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ArrayAzureResourceTagsTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#name ArrayAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#value ArrayAzure#value}
  */
  readonly value: string;
}

export function arrayAzureResourceTagsTagToTerraform(struct?: ArrayAzureResourceTagsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function arrayAzureResourceTagsTagToHclTerraform(struct?: ArrayAzureResourceTagsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArrayAzureResourceTagsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArrayAzureResourceTagsTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArrayAzureResourceTagsTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ArrayAzureResourceTagsTagList extends cdktf.ComplexList {
  public internalValue? : ArrayAzureResourceTagsTag[] | cdktf.IResolvable

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
  public get(index: number): ArrayAzureResourceTagsTagOutputReference {
    return new ArrayAzureResourceTagsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArrayAzureResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#resource ArrayAzure#resource}
  */
  readonly resource: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#tag ArrayAzure#tag}
  */
  readonly tag: ArrayAzureResourceTagsTag[] | cdktf.IResolvable;
}

export function arrayAzureResourceTagsToTerraform(struct?: ArrayAzureResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    tag: cdktf.listMapper(arrayAzureResourceTagsTagToTerraform, true)(struct!.tag),
  }
}


export function arrayAzureResourceTagsToHclTerraform(struct?: ArrayAzureResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.listMapperHcl(arrayAzureResourceTagsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ArrayAzureResourceTagsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArrayAzureResourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArrayAzureResourceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArrayAzureResourceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource = value.resource;
      this._tag.internalValue = value.tag;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // tag - computed: false, optional: false, required: true
  private _tag = new ArrayAzureResourceTagsTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ArrayAzureResourceTagsTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class ArrayAzureResourceTagsList extends cdktf.ComplexList {
  public internalValue? : ArrayAzureResourceTags[] | cdktf.IResolvable

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
  public get(index: number): ArrayAzureResourceTagsOutputReference {
    return new ArrayAzureResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArrayAzureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#create ArrayAzure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#delete ArrayAzure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#read ArrayAzure#read}
  */
  readonly read?: string;
}

export function arrayAzureTimeoutsToTerraform(struct?: ArrayAzureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function arrayAzureTimeoutsToHclTerraform(struct?: ArrayAzureTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArrayAzureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArrayAzureTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArrayAzureTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure cbs_array_azure}
*/
export class ArrayAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cbs_array_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArrayAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArrayAzure to import
  * @param importFromId The id of the existing ArrayAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArrayAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cbs_array_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/resources/array_azure cbs_array_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArrayAzureConfig
  */
  public constructor(scope: Construct, id: string, config: ArrayAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'cbs_array_azure',
      terraformGeneratorMetadata: {
        providerName: 'cbs',
        providerVersion: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertRecipients = config.alertRecipients;
    this._arrayModel = config.arrayModel;
    this._arrayName = config.arrayName;
    this._id = config.id;
    this._iscsiSubnet = config.iscsiSubnet;
    this._jitApprovalGroupObjectIds = config.jitApprovalGroupObjectIds;
    this._keyVaultId = config.keyVaultId;
    this._licenseKey = config.licenseKey;
    this._location = config.location;
    this._logSenderDomain = config.logSenderDomain;
    this._managementSubnet = config.managementSubnet;
    this._pureuserPrivateKey = config.pureuserPrivateKey;
    this._pureuserPrivateKeyPath = config.pureuserPrivateKeyPath;
    this._replicationSubnet = config.replicationSubnet;
    this._resourceGroupName = config.resourceGroupName;
    this._systemSubnet = config.systemSubnet;
    this._tags = config.tags;
    this._userAssignedIdentity = config.userAssignedIdentity;
    this._virtualNetworkId = config.virtualNetworkId;
    this._zone = config.zone;
    this._plan.internalValue = config.plan;
    this._resourceTags.internalValue = config.resourceTags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_recipients - computed: false, optional: true, required: false
  private _alertRecipients?: string[]; 
  public get alertRecipients() {
    return this.getListAttribute('alert_recipients');
  }
  public set alertRecipients(value: string[]) {
    this._alertRecipients = value;
  }
  public resetAlertRecipients() {
    this._alertRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRecipientsInput() {
    return this._alertRecipients;
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // array_model - computed: false, optional: false, required: true
  private _arrayModel?: string; 
  public get arrayModel() {
    return this.getStringAttribute('array_model');
  }
  public set arrayModel(value: string) {
    this._arrayModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayModelInput() {
    return this._arrayModel;
  }

  // array_name - computed: false, optional: false, required: true
  private _arrayName?: string; 
  public get arrayName() {
    return this.getStringAttribute('array_name');
  }
  public set arrayName(value: string) {
    this._arrayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayNameInput() {
    return this._arrayName;
  }

  // ct0_name - computed: true, optional: false, required: false
  public get ct0Name() {
    return this.getStringAttribute('ct0_name');
  }

  // ct1_name - computed: true, optional: false, required: false
  public get ct1Name() {
    return this.getStringAttribute('ct1_name');
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

  // iscsi_endpoint_ct0 - computed: true, optional: false, required: false
  public get iscsiEndpointCt0() {
    return this.getStringAttribute('iscsi_endpoint_ct0');
  }

  // iscsi_endpoint_ct1 - computed: true, optional: false, required: false
  public get iscsiEndpointCt1() {
    return this.getStringAttribute('iscsi_endpoint_ct1');
  }

  // iscsi_subnet - computed: false, optional: false, required: true
  private _iscsiSubnet?: string; 
  public get iscsiSubnet() {
    return this.getStringAttribute('iscsi_subnet');
  }
  public set iscsiSubnet(value: string) {
    this._iscsiSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiSubnetInput() {
    return this._iscsiSubnet;
  }

  // jit_approval_group_object_ids - computed: false, optional: false, required: true
  private _jitApprovalGroupObjectIds?: string[]; 
  public get jitApprovalGroupObjectIds() {
    return this.getListAttribute('jit_approval_group_object_ids');
  }
  public set jitApprovalGroupObjectIds(value: string[]) {
    this._jitApprovalGroupObjectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jitApprovalGroupObjectIdsInput() {
    return this._jitApprovalGroupObjectIds;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // license_key - computed: false, optional: false, required: true
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // log_sender_domain - computed: false, optional: false, required: true
  private _logSenderDomain?: string; 
  public get logSenderDomain() {
    return this.getStringAttribute('log_sender_domain');
  }
  public set logSenderDomain(value: string) {
    this._logSenderDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSenderDomainInput() {
    return this._logSenderDomain;
  }

  // managed_resource_group_name - computed: true, optional: false, required: false
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }

  // management_endpoint - computed: true, optional: false, required: false
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }

  // management_endpoint_ct0 - computed: true, optional: false, required: false
  public get managementEndpointCt0() {
    return this.getStringAttribute('management_endpoint_ct0');
  }

  // management_endpoint_ct1 - computed: true, optional: false, required: false
  public get managementEndpointCt1() {
    return this.getStringAttribute('management_endpoint_ct1');
  }

  // management_subnet - computed: false, optional: false, required: true
  private _managementSubnet?: string; 
  public get managementSubnet() {
    return this.getStringAttribute('management_subnet');
  }
  public set managementSubnet(value: string) {
    this._managementSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSubnetInput() {
    return this._managementSubnet;
  }

  // pureuser_private_key - computed: false, optional: true, required: false
  private _pureuserPrivateKey?: string; 
  public get pureuserPrivateKey() {
    return this.getStringAttribute('pureuser_private_key');
  }
  public set pureuserPrivateKey(value: string) {
    this._pureuserPrivateKey = value;
  }
  public resetPureuserPrivateKey() {
    this._pureuserPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureuserPrivateKeyInput() {
    return this._pureuserPrivateKey;
  }

  // pureuser_private_key_path - computed: false, optional: true, required: false
  private _pureuserPrivateKeyPath?: string; 
  public get pureuserPrivateKeyPath() {
    return this.getStringAttribute('pureuser_private_key_path');
  }
  public set pureuserPrivateKeyPath(value: string) {
    this._pureuserPrivateKeyPath = value;
  }
  public resetPureuserPrivateKeyPath() {
    this._pureuserPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureuserPrivateKeyPathInput() {
    return this._pureuserPrivateKeyPath;
  }

  // replication_endpoint_ct0 - computed: true, optional: false, required: false
  public get replicationEndpointCt0() {
    return this.getStringAttribute('replication_endpoint_ct0');
  }

  // replication_endpoint_ct1 - computed: true, optional: false, required: false
  public get replicationEndpointCt1() {
    return this.getStringAttribute('replication_endpoint_ct1');
  }

  // replication_subnet - computed: false, optional: false, required: true
  private _replicationSubnet?: string; 
  public get replicationSubnet() {
    return this.getStringAttribute('replication_subnet');
  }
  public set replicationSubnet(value: string) {
    this._replicationSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetInput() {
    return this._replicationSubnet;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // system_subnet - computed: false, optional: false, required: true
  private _systemSubnet?: string; 
  public get systemSubnet() {
    return this.getStringAttribute('system_subnet');
  }
  public set systemSubnet(value: string) {
    this._systemSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSubnetInput() {
    return this._systemSubnet;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_assigned_identity - computed: false, optional: false, required: true
  private _userAssignedIdentity?: string; 
  public get userAssignedIdentity() {
    return this.getStringAttribute('user_assigned_identity');
  }
  public set userAssignedIdentity(value: string) {
    this._userAssignedIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityInput() {
    return this._userAssignedIdentity;
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: number; 
  public get zone() {
    return this.getNumberAttribute('zone');
  }
  public set zone(value: number) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new ArrayAzurePlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: ArrayAzurePlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new ArrayAzureResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: ArrayAzureResourceTags[] | cdktf.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArrayAzureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArrayAzureTimeouts) {
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
      alert_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRecipients),
      array_model: cdktf.stringToTerraform(this._arrayModel),
      array_name: cdktf.stringToTerraform(this._arrayName),
      id: cdktf.stringToTerraform(this._id),
      iscsi_subnet: cdktf.stringToTerraform(this._iscsiSubnet),
      jit_approval_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jitApprovalGroupObjectIds),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      license_key: cdktf.stringToTerraform(this._licenseKey),
      location: cdktf.stringToTerraform(this._location),
      log_sender_domain: cdktf.stringToTerraform(this._logSenderDomain),
      management_subnet: cdktf.stringToTerraform(this._managementSubnet),
      pureuser_private_key: cdktf.stringToTerraform(this._pureuserPrivateKey),
      pureuser_private_key_path: cdktf.stringToTerraform(this._pureuserPrivateKeyPath),
      replication_subnet: cdktf.stringToTerraform(this._replicationSubnet),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      system_subnet: cdktf.stringToTerraform(this._systemSubnet),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_assigned_identity: cdktf.stringToTerraform(this._userAssignedIdentity),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
      zone: cdktf.numberToTerraform(this._zone),
      plan: arrayAzurePlanToTerraform(this._plan.internalValue),
      resource_tags: cdktf.listMapper(arrayAzureResourceTagsToTerraform, true)(this._resourceTags.internalValue),
      timeouts: arrayAzureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertRecipients),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      array_model: {
        value: cdktf.stringToHclTerraform(this._arrayModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      array_name: {
        value: cdktf.stringToHclTerraform(this._arrayName),
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
      iscsi_subnet: {
        value: cdktf.stringToHclTerraform(this._iscsiSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jit_approval_group_object_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jitApprovalGroupObjectIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_vault_id: {
        value: cdktf.stringToHclTerraform(this._keyVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_key: {
        value: cdktf.stringToHclTerraform(this._licenseKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_sender_domain: {
        value: cdktf.stringToHclTerraform(this._logSenderDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_subnet: {
        value: cdktf.stringToHclTerraform(this._managementSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pureuser_private_key: {
        value: cdktf.stringToHclTerraform(this._pureuserPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pureuser_private_key_path: {
        value: cdktf.stringToHclTerraform(this._pureuserPrivateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_subnet: {
        value: cdktf.stringToHclTerraform(this._replicationSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_subnet: {
        value: cdktf.stringToHclTerraform(this._systemSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_assigned_identity: {
        value: cdktf.stringToHclTerraform(this._userAssignedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.numberToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan: {
        value: arrayAzurePlanToHclTerraform(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArrayAzurePlanList",
      },
      resource_tags: {
        value: cdktf.listMapperHcl(arrayAzureResourceTagsToHclTerraform, true)(this._resourceTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArrayAzureResourceTagsList",
      },
      timeouts: {
        value: arrayAzureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArrayAzureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
