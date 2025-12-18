// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectstoragePreauthrequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#access_type ObjectstoragePreauthrequest#access_type}
  */
  readonly accessType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#bucket ObjectstoragePreauthrequest#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#bucket_listing_action ObjectstoragePreauthrequest#bucket_listing_action}
  */
  readonly bucketListingAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#id ObjectstoragePreauthrequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#name ObjectstoragePreauthrequest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#namespace ObjectstoragePreauthrequest#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#object ObjectstoragePreauthrequest#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#object_name ObjectstoragePreauthrequest#object_name}
  */
  readonly objectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#time_expires ObjectstoragePreauthrequest#time_expires}
  */
  readonly timeExpires: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#timeouts ObjectstoragePreauthrequest#timeouts}
  */
  readonly timeouts?: ObjectstoragePreauthrequestTimeouts;
}
export interface ObjectstoragePreauthrequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#create ObjectstoragePreauthrequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#delete ObjectstoragePreauthrequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#update ObjectstoragePreauthrequest#update}
  */
  readonly update?: string;
}

export function objectstoragePreauthrequestTimeoutsToTerraform(struct?: ObjectstoragePreauthrequestTimeouts | cdktf.IResolvable): any {
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


export function objectstoragePreauthrequestTimeoutsToHclTerraform(struct?: ObjectstoragePreauthrequestTimeouts | cdktf.IResolvable): any {
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

export class ObjectstoragePreauthrequestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectstoragePreauthrequestTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectstoragePreauthrequestTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest oci_objectstorage_preauthrequest}
*/
export class ObjectstoragePreauthrequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_objectstorage_preauthrequest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectstoragePreauthrequest to import
  * @param importFromId The id of the existing ObjectstoragePreauthrequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectstoragePreauthrequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_objectstorage_preauthrequest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/objectstorage_preauthrequest oci_objectstorage_preauthrequest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectstoragePreauthrequestConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectstoragePreauthrequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_preauthrequest',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._bucket = config.bucket;
    this._bucketListingAction = config.bucketListingAction;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._object = config.object;
    this._objectName = config.objectName;
    this._timeExpires = config.timeExpires;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // access_uri - computed: true, optional: false, required: false
  public get accessUri() {
    return this.getStringAttribute('access_uri');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_listing_action - computed: true, optional: true, required: false
  private _bucketListingAction?: string; 
  public get bucketListingAction() {
    return this.getStringAttribute('bucket_listing_action');
  }
  public set bucketListingAction(value: string) {
    this._bucketListingAction = value;
  }
  public resetBucketListingAction() {
    this._bucketListingAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketListingActionInput() {
    return this._bucketListingAction;
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_name - computed: true, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // par_id - computed: true, optional: false, required: false
  public get parId() {
    return this.getStringAttribute('par_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expires - computed: false, optional: false, required: true
  private _timeExpires?: string; 
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }
  public set timeExpires(value: string) {
    this._timeExpires = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpiresInput() {
    return this._timeExpires;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ObjectstoragePreauthrequestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObjectstoragePreauthrequestTimeouts) {
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
      access_type: cdktf.stringToTerraform(this._accessType),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_listing_action: cdktf.stringToTerraform(this._bucketListingAction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      object: cdktf.stringToTerraform(this._object),
      object_name: cdktf.stringToTerraform(this._objectName),
      time_expires: cdktf.stringToTerraform(this._timeExpires),
      timeouts: objectstoragePreauthrequestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_listing_action: {
        value: cdktf.stringToHclTerraform(this._bucketListingAction),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.stringToHclTerraform(this._object),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_expires: {
        value: cdktf.stringToHclTerraform(this._timeExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: objectstoragePreauthrequestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectstoragePreauthrequestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
