// https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VdbGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group#ignore_tag_changes VdbGroup#ignore_tag_changes}
  */
  readonly ignoreTagChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group#name VdbGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group#vdb_ids VdbGroup#vdb_ids}
  */
  readonly vdbIds?: string[];
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group#tags VdbGroup#tags}
  */
  readonly tags?: VdbGroupTags[] | cdktf.IResolvable;
}
export interface VdbGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group#key VdbGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group#value VdbGroup#value}
  */
  readonly value: string;
}

export function vdbGroupTagsToTerraform(struct?: VdbGroupTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vdbGroupTagsToHclTerraform(struct?: VdbGroupTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class VdbGroupTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbGroupTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbGroupTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class VdbGroupTagsList extends cdktf.ComplexList {
  public internalValue? : VdbGroupTags[] | cdktf.IResolvable

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
  public get(index: number): VdbGroupTagsOutputReference {
    return new VdbGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group delphix_vdb_group}
*/
export class VdbGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "delphix_vdb_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VdbGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VdbGroup to import
  * @param importFromId The id of the existing VdbGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VdbGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "delphix_vdb_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/vdb_group delphix_vdb_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VdbGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VdbGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'delphix_vdb_group',
      terraformGeneratorMetadata: {
        providerName: 'delphix',
        providerVersion: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ignoreTagChanges = config.ignoreTagChanges;
    this._name = config.name;
    this._vdbIds = config.vdbIds;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_tag_changes - computed: false, optional: true, required: false
  private _ignoreTagChanges?: boolean | cdktf.IResolvable; 
  public get ignoreTagChanges() {
    return this.getBooleanAttribute('ignore_tag_changes');
  }
  public set ignoreTagChanges(value: boolean | cdktf.IResolvable) {
    this._ignoreTagChanges = value;
  }
  public resetIgnoreTagChanges() {
    this._ignoreTagChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagChangesInput() {
    return this._ignoreTagChanges;
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

  // vdb_ids - computed: false, optional: true, required: false
  private _vdbIds?: string[]; 
  public get vdbIds() {
    return this.getListAttribute('vdb_ids');
  }
  public set vdbIds(value: string[]) {
    this._vdbIds = value;
  }
  public resetVdbIds() {
    this._vdbIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdbIdsInput() {
    return this._vdbIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new VdbGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VdbGroupTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_tag_changes: cdktf.booleanToTerraform(this._ignoreTagChanges),
      name: cdktf.stringToTerraform(this._name),
      vdb_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdbIds),
      tags: cdktf.listMapper(vdbGroupTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ignore_tag_changes: {
        value: cdktf.booleanToHclTerraform(this._ignoreTagChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdb_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdbIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(vdbGroupTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
