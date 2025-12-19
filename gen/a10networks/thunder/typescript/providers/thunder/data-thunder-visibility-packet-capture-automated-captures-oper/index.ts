// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityPacketCaptureAutomatedCapturesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper#id DataThunderVisibilityPacketCaptureAutomatedCapturesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper#oper DataThunderVisibilityPacketCaptureAutomatedCapturesOper#oper}
  */
  readonly oper?: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOper;
}
export interface DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper#automated_capture_config_line DataThunderVisibilityPacketCaptureAutomatedCapturesOper#automated_capture_config_line}
  */
  readonly automatedCaptureConfigLine?: string;
}

export function dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigToTerraform(struct?: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated_capture_config_line: cdktf.stringToTerraform(struct!.automatedCaptureConfigLine),
  }
}


export function dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigToHclTerraform(struct?: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automated_capture_config_line: {
      value: cdktf.stringToHclTerraform(struct!.automatedCaptureConfigLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatedCaptureConfigLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCaptureConfigLine = this._automatedCaptureConfigLine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatedCaptureConfigLine = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatedCaptureConfigLine = value.automatedCaptureConfigLine;
    }
  }

  // automated_capture_config_line - computed: false, optional: true, required: false
  private _automatedCaptureConfigLine?: string; 
  public get automatedCaptureConfigLine() {
    return this.getStringAttribute('automated_capture_config_line');
  }
  public set automatedCaptureConfigLine(value: string) {
    this._automatedCaptureConfigLine = value;
  }
  public resetAutomatedCaptureConfigLine() {
    this._automatedCaptureConfigLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCaptureConfigLineInput() {
    return this._automatedCaptureConfigLine;
  }
}

export class DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigOutputReference {
    return new DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityPacketCaptureAutomatedCapturesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper#capture_name DataThunderVisibilityPacketCaptureAutomatedCapturesOper#capture_name}
  */
  readonly captureName?: string;
  /**
  * automated_capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper#automated_capture_config DataThunderVisibilityPacketCaptureAutomatedCapturesOper#automated_capture_config}
  */
  readonly automatedCaptureConfig?: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig[] | cdktf.IResolvable;
}

export function dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperToTerraform(struct?: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperOutputReference | DataThunderVisibilityPacketCaptureAutomatedCapturesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_name: cdktf.stringToTerraform(struct!.captureName),
    automated_capture_config: cdktf.listMapper(dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigToTerraform, true)(struct!.automatedCaptureConfig),
  }
}


export function dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperToHclTerraform(struct?: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperOutputReference | DataThunderVisibilityPacketCaptureAutomatedCapturesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_name: {
      value: cdktf.stringToHclTerraform(struct!.captureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automated_capture_config: {
      value: cdktf.listMapperHcl(dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigToHclTerraform, true)(struct!.automatedCaptureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureAutomatedCapturesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureName = this._captureName;
    }
    if (this._automatedCaptureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCaptureConfig = this._automatedCaptureConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureName = undefined;
      this._automatedCaptureConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureName = value.captureName;
      this._automatedCaptureConfig.internalValue = value.automatedCaptureConfig;
    }
  }

  // capture_name - computed: false, optional: true, required: false
  private _captureName?: string; 
  public get captureName() {
    return this.getStringAttribute('capture_name');
  }
  public set captureName(value: string) {
    this._captureName = value;
  }
  public resetCaptureName() {
    this._captureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureNameInput() {
    return this._captureName;
  }

  // automated_capture_config - computed: false, optional: true, required: false
  private _automatedCaptureConfig = new DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfigList(this, "automated_capture_config", false);
  public get automatedCaptureConfig() {
    return this._automatedCaptureConfig;
  }
  public putAutomatedCaptureConfig(value: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperAutomatedCaptureConfig[] | cdktf.IResolvable) {
    this._automatedCaptureConfig.internalValue = value;
  }
  public resetAutomatedCaptureConfig() {
    this._automatedCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCaptureConfigInput() {
    return this._automatedCaptureConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper thunder_visibility_packet_capture_automated_captures_oper}
*/
export class DataThunderVisibilityPacketCaptureAutomatedCapturesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_automated_captures_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityPacketCaptureAutomatedCapturesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityPacketCaptureAutomatedCapturesOper to import
  * @param importFromId The id of the existing DataThunderVisibilityPacketCaptureAutomatedCapturesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityPacketCaptureAutomatedCapturesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_automated_captures_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_oper thunder_visibility_packet_capture_automated_captures_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityPacketCaptureAutomatedCapturesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityPacketCaptureAutomatedCapturesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_automated_captures_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityPacketCaptureAutomatedCapturesOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVisibilityPacketCaptureAutomatedCapturesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPacketCaptureAutomatedCapturesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
