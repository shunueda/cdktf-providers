// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmStopOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order#id VmStopOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order#ordered VmStopOrder#ordered}
  */
  readonly ordered: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order#topology_uid VmStopOrder#topology_uid}
  */
  readonly topologyUid: string;
  /**
  * stop_positions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order#stop_positions VmStopOrder#stop_positions}
  */
  readonly stopPositions?: VmStopOrderStopPositions[] | cdktf.IResolvable;
}
export interface VmStopOrderStopPositions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order#position VmStopOrder#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order#vm_uid VmStopOrder#vm_uid}
  */
  readonly vmUid: string;
}

export function vmStopOrderStopPositionsToTerraform(struct?: VmStopOrderStopPositions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    position: cdktf.numberToTerraform(struct!.position),
    vm_uid: cdktf.stringToTerraform(struct!.vmUid),
  }
}


export function vmStopOrderStopPositionsToHclTerraform(struct?: VmStopOrderStopPositions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_uid: {
      value: cdktf.stringToHclTerraform(struct!.vmUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmStopOrderStopPositionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmStopOrderStopPositions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._vmUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmUid = this._vmUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmStopOrderStopPositions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._position = undefined;
      this._vmUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._position = value.position;
      this._vmUid = value.vmUid;
    }
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // vm_name - computed: true, optional: false, required: false
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }

  // vm_uid - computed: false, optional: false, required: true
  private _vmUid?: string; 
  public get vmUid() {
    return this.getStringAttribute('vm_uid');
  }
  public set vmUid(value: string) {
    this._vmUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmUidInput() {
    return this._vmUid;
  }
}

export class VmStopOrderStopPositionsList extends cdktf.ComplexList {
  public internalValue? : VmStopOrderStopPositions[] | cdktf.IResolvable

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
  public get(index: number): VmStopOrderStopPositionsOutputReference {
    return new VmStopOrderStopPositionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order dcloud_vm_stop_order}
*/
export class VmStopOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_vm_stop_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmStopOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmStopOrder to import
  * @param importFromId The id of the existing VmStopOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmStopOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_vm_stop_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm_stop_order dcloud_vm_stop_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmStopOrderConfig
  */
  public constructor(scope: Construct, id: string, config: VmStopOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_vm_stop_order',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29',
        providerVersionConstraint: '0.1.29'
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
    this._ordered = config.ordered;
    this._topologyUid = config.topologyUid;
    this._stopPositions.internalValue = config.stopPositions;
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

  // ordered - computed: false, optional: false, required: true
  private _ordered?: boolean | cdktf.IResolvable; 
  public get ordered() {
    return this.getBooleanAttribute('ordered');
  }
  public set ordered(value: boolean | cdktf.IResolvable) {
    this._ordered = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedInput() {
    return this._ordered;
  }

  // topology_uid - computed: false, optional: false, required: true
  private _topologyUid?: string; 
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }
  public set topologyUid(value: string) {
    this._topologyUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUidInput() {
    return this._topologyUid;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // stop_positions - computed: false, optional: true, required: false
  private _stopPositions = new VmStopOrderStopPositionsList(this, "stop_positions", false);
  public get stopPositions() {
    return this._stopPositions;
  }
  public putStopPositions(value: VmStopOrderStopPositions[] | cdktf.IResolvable) {
    this._stopPositions.internalValue = value;
  }
  public resetStopPositions() {
    this._stopPositions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopPositionsInput() {
    return this._stopPositions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ordered: cdktf.booleanToTerraform(this._ordered),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
      stop_positions: cdktf.listMapper(vmStopOrderStopPositionsToTerraform, true)(this._stopPositions.internalValue),
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
      ordered: {
        value: cdktf.booleanToHclTerraform(this._ordered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topology_uid: {
        value: cdktf.stringToHclTerraform(this._topologyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_positions: {
        value: cdktf.listMapperHcl(vmStopOrderStopPositionsToHclTerraform, true)(this._stopPositions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmStopOrderStopPositionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
