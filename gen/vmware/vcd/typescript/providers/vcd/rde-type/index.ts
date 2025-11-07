// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdeTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Runtime Defined Entity Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#description RdeType#description}
  */
  readonly description?: string;
  /**
  * An external entity's ID that this definition may apply to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#external_id RdeType#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#id RdeType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To be used when creating a new version of a Runtime Defined Entity Type. Specifies the version of the type that will be the template for the authorization configuration of the new version.The Type ACLs and the access requirements of the Type Behaviors of the new version will be copied from those of the inherited version.If not set, then the new type version will not inherit another version and will have the default authorization settings, just like the first version of a new type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#inherited_version RdeType#inherited_version}
  */
  readonly inheritedVersion?: string;
  /**
  * Set of Defined Interface URNs that this Runtime Defined Entity Type is referenced by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#interface_ids RdeType#interface_ids}
  */
  readonly interfaceIds?: string[];
  /**
  * The name of the Runtime Defined Entity Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#name RdeType#name}
  */
  readonly name: string;
  /**
  * A unique namespace associated with the Runtime Defined Entity Type. Combination of `vendor`, `nss` and `version` must be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#nss RdeType#nss}
  */
  readonly nss: string;
  /**
  * The JSON-Schema valid definition of the Runtime Defined Entity Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#schema RdeType#schema}
  */
  readonly schema?: string;
  /**
  * URL that should point to a JSON-Schema valid definition file of the Runtime Defined Entity Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#schema_url RdeType#schema_url}
  */
  readonly schemaUrl?: string;
  /**
  * The vendor name for the Runtime Defined Entity Type. Combination of `vendor`, `nss` and `version` must be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#vendor RdeType#vendor}
  */
  readonly vendor: string;
  /**
  * The version of the Runtime Defined Entity Type. The version string must follow semantic versioning rules. Combination of `vendor`, `nss` and `version` must be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#version RdeType#version}
  */
  readonly version: string;
  /**
  * hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#hook RdeType#hook}
  */
  readonly hook?: RdeTypeHook[] | cdktf.IResolvable;
}
export interface RdeTypeHook {
  /**
  * Existing Behavior that will be automatically invoked when the RDE of this RDE Type triggers the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#behavior_id RdeType#behavior_id}
  */
  readonly behaviorId: string;
  /**
  * Event that will invoke the Behavior, one of PostCreate, PostUpdate, PreDelete, PostDelete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#event RdeType#event}
  */
  readonly event: string;
}

export function rdeTypeHookToTerraform(struct?: RdeTypeHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior_id: cdktf.stringToTerraform(struct!.behaviorId),
    event: cdktf.stringToTerraform(struct!.event),
  }
}


export function rdeTypeHookToHclTerraform(struct?: RdeTypeHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior_id: {
      value: cdktf.stringToHclTerraform(struct!.behaviorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdeTypeHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdeTypeHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behaviorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.behaviorId = this._behaviorId;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdeTypeHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behaviorId = undefined;
      this._event = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behaviorId = value.behaviorId;
      this._event = value.event;
    }
  }

  // behavior_id - computed: false, optional: false, required: true
  private _behaviorId?: string; 
  public get behaviorId() {
    return this.getStringAttribute('behavior_id');
  }
  public set behaviorId(value: string) {
    this._behaviorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorIdInput() {
    return this._behaviorId;
  }

  // event - computed: false, optional: false, required: true
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }
}

export class RdeTypeHookList extends cdktf.ComplexList {
  public internalValue? : RdeTypeHook[] | cdktf.IResolvable

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
  public get(index: number): RdeTypeHookOutputReference {
    return new RdeTypeHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type vcd_rde_type}
*/
export class RdeType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_rde_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdeType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdeType to import
  * @param importFromId The id of the existing RdeType that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdeType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_rde_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type vcd_rde_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdeTypeConfig
  */
  public constructor(scope: Construct, id: string, config: RdeTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_rde_type',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._externalId = config.externalId;
    this._id = config.id;
    this._inheritedVersion = config.inheritedVersion;
    this._interfaceIds = config.interfaceIds;
    this._name = config.name;
    this._nss = config.nss;
    this._schema = config.schema;
    this._schemaUrl = config.schemaUrl;
    this._vendor = config.vendor;
    this._version = config.version;
    this._hook.internalValue = config.hook;
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

  // external_id - computed: false, optional: true, required: false
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

  // inherited_version - computed: false, optional: true, required: false
  private _inheritedVersion?: string; 
  public get inheritedVersion() {
    return this.getStringAttribute('inherited_version');
  }
  public set inheritedVersion(value: string) {
    this._inheritedVersion = value;
  }
  public resetInheritedVersion() {
    this._inheritedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedVersionInput() {
    return this._inheritedVersion;
  }

  // interface_ids - computed: false, optional: true, required: false
  private _interfaceIds?: string[]; 
  public get interfaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('interface_ids'));
  }
  public set interfaceIds(value: string[]) {
    this._interfaceIds = value;
  }
  public resetInterfaceIds() {
    this._interfaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdsInput() {
    return this._interfaceIds;
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

  // nss - computed: false, optional: false, required: true
  private _nss?: string; 
  public get nss() {
    return this.getStringAttribute('nss');
  }
  public set nss(value: string) {
    this._nss = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nssInput() {
    return this._nss;
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // schema_url - computed: false, optional: true, required: false
  private _schemaUrl?: string; 
  public get schemaUrl() {
    return this.getStringAttribute('schema_url');
  }
  public set schemaUrl(value: string) {
    this._schemaUrl = value;
  }
  public resetSchemaUrl() {
    this._schemaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaUrlInput() {
    return this._schemaUrl;
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
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

  // hook - computed: false, optional: true, required: false
  private _hook = new RdeTypeHookList(this, "hook", true);
  public get hook() {
    return this._hook;
  }
  public putHook(value: RdeTypeHook[] | cdktf.IResolvable) {
    this._hook.internalValue = value;
  }
  public resetHook() {
    this._hook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookInput() {
    return this._hook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      inherited_version: cdktf.stringToTerraform(this._inheritedVersion),
      interface_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaceIds),
      name: cdktf.stringToTerraform(this._name),
      nss: cdktf.stringToTerraform(this._nss),
      schema: cdktf.stringToTerraform(this._schema),
      schema_url: cdktf.stringToTerraform(this._schemaUrl),
      vendor: cdktf.stringToTerraform(this._vendor),
      version: cdktf.stringToTerraform(this._version),
      hook: cdktf.listMapper(rdeTypeHookToTerraform, true)(this._hook.internalValue),
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
      inherited_version: {
        value: cdktf.stringToHclTerraform(this._inheritedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nss: {
        value: cdktf.stringToHclTerraform(this._nss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_url: {
        value: cdktf.stringToHclTerraform(this._schemaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hook: {
        value: cdktf.listMapperHcl(rdeTypeHookToHclTerraform, true)(this._hook.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdeTypeHookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
