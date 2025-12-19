// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbSyncObjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'disable': Disable dynamic sync (default); 'enable': Enable dynamic sync;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects#action GslbSyncObjects#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects#id GslbSyncObjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects#uuid GslbSyncObjects#uuid}
  */
  readonly uuid?: string;
  /**
  * object_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects#object_list GslbSyncObjects#object_list}
  */
  readonly objectList?: GslbSyncObjectsObjectListStruct;
}
export interface GslbSyncObjectsObjectListStruct {
  /**
  * Lineage of object e.g.: slb, slb.service-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects#lineage GslbSyncObjects#lineage}
  */
  readonly lineage?: string;
}

export function gslbSyncObjectsObjectListStructToTerraform(struct?: GslbSyncObjectsObjectListStructOutputReference | GslbSyncObjectsObjectListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lineage: cdktf.stringToTerraform(struct!.lineage),
  }
}


export function gslbSyncObjectsObjectListStructToHclTerraform(struct?: GslbSyncObjectsObjectListStructOutputReference | GslbSyncObjectsObjectListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lineage: {
      value: cdktf.stringToHclTerraform(struct!.lineage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSyncObjectsObjectListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbSyncObjectsObjectListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineage !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineage = this._lineage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSyncObjectsObjectListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineage = value.lineage;
    }
  }

  // lineage - computed: false, optional: true, required: false
  private _lineage?: string; 
  public get lineage() {
    return this.getStringAttribute('lineage');
  }
  public set lineage(value: string) {
    this._lineage = value;
  }
  public resetLineage() {
    this._lineage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageInput() {
    return this._lineage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects thunder_gslb_sync_objects}
*/
export class GslbSyncObjects extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_sync_objects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbSyncObjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbSyncObjects to import
  * @param importFromId The id of the existing GslbSyncObjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbSyncObjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_sync_objects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_sync_objects thunder_gslb_sync_objects} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbSyncObjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbSyncObjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_sync_objects',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._uuid = config.uuid;
    this._objectList.internalValue = config.objectList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // object_list - computed: false, optional: true, required: false
  private _objectList = new GslbSyncObjectsObjectListStructOutputReference(this, "object_list");
  public get objectList() {
    return this._objectList;
  }
  public putObjectList(value: GslbSyncObjectsObjectListStruct) {
    this._objectList.internalValue = value;
  }
  public resetObjectList() {
    this._objectList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectListInput() {
    return this._objectList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      object_list: gslbSyncObjectsObjectListStructToTerraform(this._objectList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_list: {
        value: gslbSyncObjectsObjectListStructToHclTerraform(this._objectList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSyncObjectsObjectListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
