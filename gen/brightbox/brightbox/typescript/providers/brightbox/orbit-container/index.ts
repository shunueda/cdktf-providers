// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrbitContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Who can read the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#container_read OrbitContainer#container_read}
  */
  readonly containerRead?: string[];
  /**
  * Container sync key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#container_sync_key OrbitContainer#container_sync_key}
  */
  readonly containerSyncKey?: string;
  /**
  * Container to sync to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#container_sync_to OrbitContainer#container_sync_to}
  */
  readonly containerSyncTo?: string;
  /**
  * Who can write to the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#container_write OrbitContainer#container_write}
  */
  readonly containerWrite?: string[];
  /**
  * History location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#history_location OrbitContainer#history_location}
  */
  readonly historyLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#id OrbitContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of key/value metadata associated with the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#metadata OrbitContainer#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Name of the Container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#name OrbitContainer#name}
  */
  readonly name: string;
  /**
  * Versions Location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#versions_location OrbitContainer#versions_location}
  */
  readonly versionsLocation?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#timeouts OrbitContainer#timeouts}
  */
  readonly timeouts?: OrbitContainerTimeouts;
}
export interface OrbitContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#create OrbitContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#delete OrbitContainer#delete}
  */
  readonly delete?: string;
}

export function orbitContainerTimeoutsToTerraform(struct?: OrbitContainerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function orbitContainerTimeoutsToHclTerraform(struct?: OrbitContainerTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrbitContainerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrbitContainerTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrbitContainerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container brightbox_orbit_container}
*/
export class OrbitContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox_orbit_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrbitContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrbitContainer to import
  * @param importFromId The id of the existing OrbitContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrbitContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox_orbit_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/orbit_container brightbox_orbit_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrbitContainerConfig
  */
  public constructor(scope: Construct, id: string, config: OrbitContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'brightbox_orbit_container',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerRead = config.containerRead;
    this._containerSyncKey = config.containerSyncKey;
    this._containerSyncTo = config.containerSyncTo;
    this._containerWrite = config.containerWrite;
    this._historyLocation = config.historyLocation;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._versionsLocation = config.versionsLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bytes_used - computed: true, optional: false, required: false
  public get bytesUsed() {
    return this.getNumberAttribute('bytes_used');
  }

  // container_read - computed: false, optional: true, required: false
  private _containerRead?: string[]; 
  public get containerRead() {
    return cdktf.Fn.tolist(this.getListAttribute('container_read'));
  }
  public set containerRead(value: string[]) {
    this._containerRead = value;
  }
  public resetContainerRead() {
    this._containerRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerReadInput() {
    return this._containerRead;
  }

  // container_sync_key - computed: false, optional: true, required: false
  private _containerSyncKey?: string; 
  public get containerSyncKey() {
    return this.getStringAttribute('container_sync_key');
  }
  public set containerSyncKey(value: string) {
    this._containerSyncKey = value;
  }
  public resetContainerSyncKey() {
    this._containerSyncKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSyncKeyInput() {
    return this._containerSyncKey;
  }

  // container_sync_to - computed: false, optional: true, required: false
  private _containerSyncTo?: string; 
  public get containerSyncTo() {
    return this.getStringAttribute('container_sync_to');
  }
  public set containerSyncTo(value: string) {
    this._containerSyncTo = value;
  }
  public resetContainerSyncTo() {
    this._containerSyncTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSyncToInput() {
    return this._containerSyncTo;
  }

  // container_write - computed: false, optional: true, required: false
  private _containerWrite?: string[]; 
  public get containerWrite() {
    return cdktf.Fn.tolist(this.getListAttribute('container_write'));
  }
  public set containerWrite(value: string[]) {
    this._containerWrite = value;
  }
  public resetContainerWrite() {
    this._containerWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerWriteInput() {
    return this._containerWrite;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // history_location - computed: false, optional: true, required: false
  private _historyLocation?: string; 
  public get historyLocation() {
    return this.getStringAttribute('history_location');
  }
  public set historyLocation(value: string) {
    this._historyLocation = value;
  }
  public resetHistoryLocation() {
    this._historyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyLocationInput() {
    return this._historyLocation;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // object_count - computed: true, optional: false, required: false
  public get objectCount() {
    return this.getNumberAttribute('object_count');
  }

  // storage_policy - computed: true, optional: false, required: false
  public get storagePolicy() {
    return this.getStringAttribute('storage_policy');
  }

  // versions_location - computed: false, optional: true, required: false
  private _versionsLocation?: string; 
  public get versionsLocation() {
    return this.getStringAttribute('versions_location');
  }
  public set versionsLocation(value: string) {
    this._versionsLocation = value;
  }
  public resetVersionsLocation() {
    this._versionsLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsLocationInput() {
    return this._versionsLocation;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrbitContainerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrbitContainerTimeouts) {
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
      container_read: cdktf.listMapper(cdktf.stringToTerraform, false)(this._containerRead),
      container_sync_key: cdktf.stringToTerraform(this._containerSyncKey),
      container_sync_to: cdktf.stringToTerraform(this._containerSyncTo),
      container_write: cdktf.listMapper(cdktf.stringToTerraform, false)(this._containerWrite),
      history_location: cdktf.stringToTerraform(this._historyLocation),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      versions_location: cdktf.stringToTerraform(this._versionsLocation),
      timeouts: orbitContainerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_read: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._containerRead),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      container_sync_key: {
        value: cdktf.stringToHclTerraform(this._containerSyncKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_sync_to: {
        value: cdktf.stringToHclTerraform(this._containerSyncTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_write: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._containerWrite),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      history_location: {
        value: cdktf.stringToHclTerraform(this._historyLocation),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versions_location: {
        value: cdktf.stringToHclTerraform(this._versionsLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: orbitContainerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrbitContainerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
