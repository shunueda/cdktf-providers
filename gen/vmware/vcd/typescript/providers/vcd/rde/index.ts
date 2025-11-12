// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdeConfig extends cdktf.TerraformMetaArguments {
  /**
  * An external entity's ID that this Runtime Defined Entity may have a relation to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#external_id Rde#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#id Rde#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A JSON representation of the Runtime Defined Entity that is defined by the user and is used to initialize/override its contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#input_entity Rde#input_entity}
  */
  readonly inputEntity?: string;
  /**
  * URL that should point to a JSON representation of the Runtime Defined Entity and is used to initialize/override its contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#input_entity_url Rde#input_entity_url}
  */
  readonly inputEntityUrl?: string;
  /**
  * The name of the Runtime Defined Entity. It can be non-unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#name Rde#name}
  */
  readonly name: string;
  /**
  * The name of organization that will own this Runtime Defined Entity, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#org Rde#org}
  */
  readonly org?: string;
  /**
  * The Runtime Defined Entity Type ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#rde_type_id Rde#rde_type_id}
  */
  readonly rdeTypeId: string;
  /**
  * If `true`, the Runtime Defined Entity will be resolved by this provider. If `false`, it won't beresolved and must be done either by an external component action or by an update. The Runtime Defined Entity can't bedeleted until the entity is resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#resolve Rde#resolve}
  */
  readonly resolve: boolean | cdktf.IResolvable;
  /**
  * If `true`, the Runtime Defined Entity will be resolved before it gets deleted, to ensure forced deletion.Destroy will fail if it is not resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#resolve_on_removal Rde#resolve_on_removal}
  */
  readonly resolveOnRemoval?: boolean | cdktf.IResolvable;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#metadata_entry Rde#metadata_entry}
  */
  readonly metadataEntry?: RdeMetadataEntry[] | cdktf.IResolvable;
}
export interface RdeMetadataEntry {
  /**
  * Only meaningful for providers. Allows them to share entries with their tenants. Currently, accepted values are: `TENANT`, `PROVIDER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#domain Rde#domain}
  */
  readonly domain?: string;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#key Rde#key}
  */
  readonly key: string;
  /**
  * Namespace of the metadata entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#namespace Rde#namespace}
  */
  readonly namespace?: string;
  /**
  * Persistent metadata entries can be copied over on some entity operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#persistent Rde#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
  /**
  * True if the metadata entry is read only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#readonly Rde#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Type of this metadata entry. One of: 'StringEntry', 'NumberEntry', 'BoolEntry'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#type Rde#type}
  */
  readonly type?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#value Rde#value}
  */
  readonly value: string;
}

export function rdeMetadataEntryToTerraform(struct?: RdeMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    persistent: cdktf.booleanToTerraform(struct!.persistent),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rdeMetadataEntryToHclTerraform(struct?: RdeMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent: {
      value: cdktf.booleanToHclTerraform(struct!.persistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class RdeMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdeMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._persistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistent = this._persistent;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdeMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._key = undefined;
      this._namespace = undefined;
      this._persistent = undefined;
      this._readonly = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._key = value.key;
      this._namespace = value.namespace;
      this._persistent = value.persistent;
      this._readonly = value.readonly;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // persistent - computed: false, optional: true, required: false
  private _persistent?: boolean | cdktf.IResolvable; 
  public get persistent() {
    return this.getBooleanAttribute('persistent');
  }
  public set persistent(value: boolean | cdktf.IResolvable) {
    this._persistent = value;
  }
  public resetPersistent() {
    this._persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class RdeMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : RdeMetadataEntry[] | cdktf.IResolvable

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
  public get(index: number): RdeMetadataEntryOutputReference {
    return new RdeMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde vcd_rde}
*/
export class Rde extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_rde";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rde resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rde to import
  * @param importFromId The id of the existing Rde that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rde to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_rde", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde vcd_rde} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdeConfig
  */
  public constructor(scope: Construct, id: string, config: RdeConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_rde',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalId = config.externalId;
    this._id = config.id;
    this._inputEntity = config.inputEntity;
    this._inputEntityUrl = config.inputEntityUrl;
    this._name = config.name;
    this._org = config.org;
    this._rdeTypeId = config.rdeTypeId;
    this._resolve = config.resolve;
    this._resolveOnRemoval = config.resolveOnRemoval;
    this._metadataEntry.internalValue = config.metadataEntry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // computed_entity - computed: true, optional: false, required: false
  public get computedEntity() {
    return this.getStringAttribute('computed_entity');
  }

  // entity_in_sync - computed: true, optional: false, required: false
  public get entityInSync() {
    return this.getBooleanAttribute('entity_in_sync');
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // input_entity - computed: false, optional: true, required: false
  private _inputEntity?: string; 
  public get inputEntity() {
    return this.getStringAttribute('input_entity');
  }
  public set inputEntity(value: string) {
    this._inputEntity = value;
  }
  public resetInputEntity() {
    this._inputEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEntityInput() {
    return this._inputEntity;
  }

  // input_entity_url - computed: false, optional: true, required: false
  private _inputEntityUrl?: string; 
  public get inputEntityUrl() {
    return this.getStringAttribute('input_entity_url');
  }
  public set inputEntityUrl(value: string) {
    this._inputEntityUrl = value;
  }
  public resetInputEntityUrl() {
    this._inputEntityUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEntityUrlInput() {
    return this._inputEntityUrl;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getStringAttribute('owner_user_id');
  }

  // rde_type_id - computed: false, optional: false, required: true
  private _rdeTypeId?: string; 
  public get rdeTypeId() {
    return this.getStringAttribute('rde_type_id');
  }
  public set rdeTypeId(value: string) {
    this._rdeTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdeTypeIdInput() {
    return this._rdeTypeId;
  }

  // resolve - computed: false, optional: false, required: true
  private _resolve?: boolean | cdktf.IResolvable; 
  public get resolve() {
    return this.getBooleanAttribute('resolve');
  }
  public set resolve(value: boolean | cdktf.IResolvable) {
    this._resolve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveInput() {
    return this._resolve;
  }

  // resolve_on_removal - computed: false, optional: true, required: false
  private _resolveOnRemoval?: boolean | cdktf.IResolvable; 
  public get resolveOnRemoval() {
    return this.getBooleanAttribute('resolve_on_removal');
  }
  public set resolveOnRemoval(value: boolean | cdktf.IResolvable) {
    this._resolveOnRemoval = value;
  }
  public resetResolveOnRemoval() {
    this._resolveOnRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveOnRemovalInput() {
    return this._resolveOnRemoval;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new RdeMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: RdeMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      input_entity: cdktf.stringToTerraform(this._inputEntity),
      input_entity_url: cdktf.stringToTerraform(this._inputEntityUrl),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      rde_type_id: cdktf.stringToTerraform(this._rdeTypeId),
      resolve: cdktf.booleanToTerraform(this._resolve),
      resolve_on_removal: cdktf.booleanToTerraform(this._resolveOnRemoval),
      metadata_entry: cdktf.listMapper(rdeMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      input_entity: {
        value: cdktf.stringToHclTerraform(this._inputEntity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_entity_url: {
        value: cdktf.stringToHclTerraform(this._inputEntityUrl),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rde_type_id: {
        value: cdktf.stringToHclTerraform(this._rdeTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve: {
        value: cdktf.booleanToHclTerraform(this._resolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resolve_on_removal: {
        value: cdktf.booleanToHclTerraform(this._resolveOnRemoval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(rdeMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdeMetadataEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
