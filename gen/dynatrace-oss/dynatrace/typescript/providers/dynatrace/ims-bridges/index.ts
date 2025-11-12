// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImsBridgesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges#id ImsBridges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the IMS bridge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges#name ImsBridges#name}
  */
  readonly name: string;
  /**
  * queue_managers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges#queue_managers ImsBridges#queue_managers}
  */
  readonly queueManagers?: ImsBridgesQueueManagers[] | cdktf.IResolvable;
}
export interface ImsBridgesQueueManagersQueueManager {
  /**
  * The name of the queue manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges#name ImsBridges#name}
  */
  readonly name: string;
  /**
  * Queue(s) that belong to the queue manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges#queue_manager_queue ImsBridges#queue_manager_queue}
  */
  readonly queueManagerQueue?: string[];
}

export function imsBridgesQueueManagersQueueManagerToTerraform(struct?: ImsBridgesQueueManagersQueueManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    queue_manager_queue: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queueManagerQueue),
  }
}


export function imsBridgesQueueManagersQueueManagerToHclTerraform(struct?: ImsBridgesQueueManagersQueueManager | cdktf.IResolvable): any {
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
    queue_manager_queue: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queueManagerQueue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImsBridgesQueueManagersQueueManagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImsBridgesQueueManagersQueueManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queueManagerQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueManagerQueue = this._queueManagerQueue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImsBridgesQueueManagersQueueManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._queueManagerQueue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._queueManagerQueue = value.queueManagerQueue;
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

  // queue_manager_queue - computed: false, optional: true, required: false
  private _queueManagerQueue?: string[]; 
  public get queueManagerQueue() {
    return cdktf.Fn.tolist(this.getListAttribute('queue_manager_queue'));
  }
  public set queueManagerQueue(value: string[]) {
    this._queueManagerQueue = value;
  }
  public resetQueueManagerQueue() {
    this._queueManagerQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueManagerQueueInput() {
    return this._queueManagerQueue;
  }
}

export class ImsBridgesQueueManagersQueueManagerList extends cdktf.ComplexList {
  public internalValue? : ImsBridgesQueueManagersQueueManager[] | cdktf.IResolvable

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
  public get(index: number): ImsBridgesQueueManagersQueueManagerOutputReference {
    return new ImsBridgesQueueManagersQueueManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImsBridgesQueueManagers {
  /**
  * queue_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges#queue_manager ImsBridges#queue_manager}
  */
  readonly queueManager?: ImsBridgesQueueManagersQueueManager[] | cdktf.IResolvable;
}

export function imsBridgesQueueManagersToTerraform(struct?: ImsBridgesQueueManagers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_manager: cdktf.listMapper(imsBridgesQueueManagersQueueManagerToTerraform, true)(struct!.queueManager),
  }
}


export function imsBridgesQueueManagersToHclTerraform(struct?: ImsBridgesQueueManagers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_manager: {
      value: cdktf.listMapperHcl(imsBridgesQueueManagersQueueManagerToHclTerraform, true)(struct!.queueManager),
      isBlock: true,
      type: "list",
      storageClassType: "ImsBridgesQueueManagersQueueManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImsBridgesQueueManagersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImsBridgesQueueManagers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueManager = this._queueManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImsBridgesQueueManagers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queueManager.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queueManager.internalValue = value.queueManager;
    }
  }

  // queue_manager - computed: false, optional: true, required: false
  private _queueManager = new ImsBridgesQueueManagersQueueManagerList(this, "queue_manager", false);
  public get queueManager() {
    return this._queueManager;
  }
  public putQueueManager(value: ImsBridgesQueueManagersQueueManager[] | cdktf.IResolvable) {
    this._queueManager.internalValue = value;
  }
  public resetQueueManager() {
    this._queueManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueManagerInput() {
    return this._queueManager.internalValue;
  }
}

export class ImsBridgesQueueManagersList extends cdktf.ComplexList {
  public internalValue? : ImsBridgesQueueManagers[] | cdktf.IResolvable

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
  public get(index: number): ImsBridgesQueueManagersOutputReference {
    return new ImsBridgesQueueManagersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges dynatrace_ims_bridges}
*/
export class ImsBridges extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_ims_bridges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImsBridges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImsBridges to import
  * @param importFromId The id of the existing ImsBridges that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImsBridges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_ims_bridges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ims_bridges dynatrace_ims_bridges} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImsBridgesConfig
  */
  public constructor(scope: Construct, id: string, config: ImsBridgesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_ims_bridges',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._queueManagers.internalValue = config.queueManagers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // queue_managers - computed: false, optional: true, required: false
  private _queueManagers = new ImsBridgesQueueManagersList(this, "queue_managers", false);
  public get queueManagers() {
    return this._queueManagers;
  }
  public putQueueManagers(value: ImsBridgesQueueManagers[] | cdktf.IResolvable) {
    this._queueManagers.internalValue = value;
  }
  public resetQueueManagers() {
    this._queueManagers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueManagersInput() {
    return this._queueManagers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      queue_managers: cdktf.listMapper(imsBridgesQueueManagersToTerraform, true)(this._queueManagers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      queue_managers: {
        value: cdktf.listMapperHcl(imsBridgesQueueManagersToHclTerraform, true)(this._queueManagers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImsBridgesQueueManagersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
