// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HwStartOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#id HwStartOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#ordered HwStartOrder#ordered}
  */
  readonly ordered: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#topology_uid HwStartOrder#topology_uid}
  */
  readonly topologyUid: string;
  /**
  * start_positions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#start_positions HwStartOrder#start_positions}
  */
  readonly startPositions?: HwStartOrderStartPositions[] | cdktf.IResolvable;
}
export interface HwStartOrderStartPositions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#delay_seconds HwStartOrder#delay_seconds}
  */
  readonly delaySeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#hw_uid HwStartOrder#hw_uid}
  */
  readonly hwUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#position HwStartOrder#position}
  */
  readonly position: number;
}

export function hwStartOrderStartPositionsToTerraform(struct?: HwStartOrderStartPositions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_seconds: cdktf.numberToTerraform(struct!.delaySeconds),
    hw_uid: cdktf.stringToTerraform(struct!.hwUid),
    position: cdktf.numberToTerraform(struct!.position),
  }
}


export function hwStartOrderStartPositionsToHclTerraform(struct?: HwStartOrderStartPositions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.delaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_uid: {
      value: cdktf.stringToHclTerraform(struct!.hwUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HwStartOrderStartPositionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HwStartOrderStartPositions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delaySeconds = this._delaySeconds;
    }
    if (this._hwUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwUid = this._hwUid;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HwStartOrderStartPositions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delaySeconds = undefined;
      this._hwUid = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delaySeconds = value.delaySeconds;
      this._hwUid = value.hwUid;
      this._position = value.position;
    }
  }

  // delay_seconds - computed: false, optional: false, required: true
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
  }

  // hw_name - computed: true, optional: false, required: false
  public get hwName() {
    return this.getStringAttribute('hw_name');
  }

  // hw_uid - computed: false, optional: false, required: true
  private _hwUid?: string; 
  public get hwUid() {
    return this.getStringAttribute('hw_uid');
  }
  public set hwUid(value: string) {
    this._hwUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hwUidInput() {
    return this._hwUid;
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
}

export class HwStartOrderStartPositionsList extends cdktf.ComplexList {
  public internalValue? : HwStartOrderStartPositions[] | cdktf.IResolvable

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
  public get(index: number): HwStartOrderStartPositionsOutputReference {
    return new HwStartOrderStartPositionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order dcloud_hw_start_order}
*/
export class HwStartOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_hw_start_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HwStartOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HwStartOrder to import
  * @param importFromId The id of the existing HwStartOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HwStartOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_hw_start_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw_start_order dcloud_hw_start_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HwStartOrderConfig
  */
  public constructor(scope: Construct, id: string, config: HwStartOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_hw_start_order',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29'
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
    this._startPositions.internalValue = config.startPositions;
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

  // start_positions - computed: false, optional: true, required: false
  private _startPositions = new HwStartOrderStartPositionsList(this, "start_positions", false);
  public get startPositions() {
    return this._startPositions;
  }
  public putStartPositions(value: HwStartOrderStartPositions[] | cdktf.IResolvable) {
    this._startPositions.internalValue = value;
  }
  public resetStartPositions() {
    this._startPositions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPositionsInput() {
    return this._startPositions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ordered: cdktf.booleanToTerraform(this._ordered),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
      start_positions: cdktf.listMapper(hwStartOrderStartPositionsToTerraform, true)(this._startPositions.internalValue),
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
      start_positions: {
        value: cdktf.listMapperHcl(hwStartOrderStartPositionsToHclTerraform, true)(this._startPositions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HwStartOrderStartPositionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
