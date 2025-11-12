// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageCloudAccesspathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of Bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath#bucketid StorageCloudAccesspath#bucketid}
  */
  readonly bucketid: number;
  /**
  * Id of cloud Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath#cloudstorageid StorageCloudAccesspath#cloudstorageid}
  */
  readonly cloudstorageid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath#id StorageCloudAccesspath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath#mediaagent StorageCloudAccesspath#mediaagent}
  */
  readonly mediaagent?: StorageCloudAccesspathMediaagent[] | cdktf.IResolvable;
}
export interface StorageCloudAccesspathMediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath#id StorageCloudAccesspath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath#name StorageCloudAccesspath#name}
  */
  readonly name?: string;
}

export function storageCloudAccesspathMediaagentToTerraform(struct?: StorageCloudAccesspathMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudAccesspathMediaagentToHclTerraform(struct?: StorageCloudAccesspathMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudAccesspathMediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudAccesspathMediaagent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudAccesspathMediaagent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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
}

export class StorageCloudAccesspathMediaagentList extends cdktf.ComplexList {
  public internalValue? : StorageCloudAccesspathMediaagent[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudAccesspathMediaagentOutputReference {
    return new StorageCloudAccesspathMediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath commvault_storage_cloud_accesspath}
*/
export class StorageCloudAccesspath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_storage_cloud_accesspath";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageCloudAccesspath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageCloudAccesspath to import
  * @param importFromId The id of the existing StorageCloudAccesspath that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageCloudAccesspath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_storage_cloud_accesspath", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_accesspath commvault_storage_cloud_accesspath} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageCloudAccesspathConfig
  */
  public constructor(scope: Construct, id: string, config: StorageCloudAccesspathConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_storage_cloud_accesspath',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketid = config.bucketid;
    this._cloudstorageid = config.cloudstorageid;
    this._id = config.id;
    this._mediaagent.internalValue = config.mediaagent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucketid - computed: false, optional: false, required: true
  private _bucketid?: number; 
  public get bucketid() {
    return this.getNumberAttribute('bucketid');
  }
  public set bucketid(value: number) {
    this._bucketid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketidInput() {
    return this._bucketid;
  }

  // cloudstorageid - computed: false, optional: false, required: true
  private _cloudstorageid?: number; 
  public get cloudstorageid() {
    return this.getNumberAttribute('cloudstorageid');
  }
  public set cloudstorageid(value: number) {
    this._cloudstorageid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudstorageidInput() {
    return this._cloudstorageid;
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

  // mediaagent - computed: false, optional: true, required: false
  private _mediaagent = new StorageCloudAccesspathMediaagentList(this, "mediaagent", false);
  public get mediaagent() {
    return this._mediaagent;
  }
  public putMediaagent(value: StorageCloudAccesspathMediaagent[] | cdktf.IResolvable) {
    this._mediaagent.internalValue = value;
  }
  public resetMediaagent() {
    this._mediaagent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaagentInput() {
    return this._mediaagent.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucketid: cdktf.numberToTerraform(this._bucketid),
      cloudstorageid: cdktf.numberToTerraform(this._cloudstorageid),
      id: cdktf.stringToTerraform(this._id),
      mediaagent: cdktf.listMapper(storageCloudAccesspathMediaagentToTerraform, true)(this._mediaagent.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucketid: {
        value: cdktf.numberToHclTerraform(this._bucketid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloudstorageid: {
        value: cdktf.numberToHclTerraform(this._cloudstorageid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mediaagent: {
        value: cdktf.listMapperHcl(storageCloudAccesspathMediaagentToHclTerraform, true)(this._mediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageCloudAccesspathMediaagentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
