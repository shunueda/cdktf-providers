// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskAccesspathConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access type for the access path can be either read (writing to path not allowed) or read and write (writing to path allowed). [READ_AND_WRITE, READ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#access DiskAccesspath#access}
  */
  readonly access?: string;
  /**
  * Id of the backup location whose details have to be fetched to add a new access path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#backuplocationid DiskAccesspath#backuplocationid}
  */
  readonly backuplocationid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#enabled DiskAccesspath#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#id DiskAccesspath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the disk storage pool whose details have to be fetched to add a new access path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#storagepoolid DiskAccesspath#storagepoolid}
  */
  readonly storagepoolid: number;
  /**
  * mediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#mediaagent DiskAccesspath#mediaagent}
  */
  readonly mediaagent: DiskAccesspathMediaagent[] | cdktf.IResolvable;
}
export interface DiskAccesspathMediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#id DiskAccesspath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function diskAccesspathMediaagentToTerraform(struct?: DiskAccesspathMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function diskAccesspathMediaagentToHclTerraform(struct?: DiskAccesspathMediaagent | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAccesspathMediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiskAccesspathMediaagent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAccesspathMediaagent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DiskAccesspathMediaagentList extends cdktf.ComplexList {
  public internalValue? : DiskAccesspathMediaagent[] | cdktf.IResolvable

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
  public get(index: number): DiskAccesspathMediaagentOutputReference {
    return new DiskAccesspathMediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath commvault_disk_accesspath}
*/
export class DiskAccesspath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_disk_accesspath";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskAccesspath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskAccesspath to import
  * @param importFromId The id of the existing DiskAccesspath that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskAccesspath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_disk_accesspath", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_accesspath commvault_disk_accesspath} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskAccesspathConfig
  */
  public constructor(scope: Construct, id: string, config: DiskAccesspathConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_disk_accesspath',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._backuplocationid = config.backuplocationid;
    this._enabled = config.enabled;
    this._id = config.id;
    this._storagepoolid = config.storagepoolid;
    this._mediaagent.internalValue = config.mediaagent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // backuplocationid - computed: false, optional: false, required: true
  private _backuplocationid?: number; 
  public get backuplocationid() {
    return this.getNumberAttribute('backuplocationid');
  }
  public set backuplocationid(value: number) {
    this._backuplocationid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backuplocationidInput() {
    return this._backuplocationid;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // storagepoolid - computed: false, optional: false, required: true
  private _storagepoolid?: number; 
  public get storagepoolid() {
    return this.getNumberAttribute('storagepoolid');
  }
  public set storagepoolid(value: number) {
    this._storagepoolid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagepoolidInput() {
    return this._storagepoolid;
  }

  // mediaagent - computed: false, optional: false, required: true
  private _mediaagent = new DiskAccesspathMediaagentList(this, "mediaagent", false);
  public get mediaagent() {
    return this._mediaagent;
  }
  public putMediaagent(value: DiskAccesspathMediaagent[] | cdktf.IResolvable) {
    this._mediaagent.internalValue = value;
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
      access: cdktf.stringToTerraform(this._access),
      backuplocationid: cdktf.numberToTerraform(this._backuplocationid),
      enabled: cdktf.stringToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      storagepoolid: cdktf.numberToTerraform(this._storagepoolid),
      mediaagent: cdktf.listMapper(diskAccesspathMediaagentToTerraform, true)(this._mediaagent.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backuplocationid: {
        value: cdktf.numberToHclTerraform(this._backuplocationid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
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
      storagepoolid: {
        value: cdktf.numberToHclTerraform(this._storagepoolid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mediaagent: {
        value: cdktf.listMapperHcl(diskAccesspathMediaagentToHclTerraform, true)(this._mediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskAccesspathMediaagentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
