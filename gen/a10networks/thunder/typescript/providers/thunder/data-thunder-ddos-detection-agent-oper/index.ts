// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDetectionAgentOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name for the agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#agent_name DataThunderDdosDetectionAgentOper#agent_name}
  */
  readonly agentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#id DataThunderDdosDetectionAgentOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#oper DataThunderDdosDetectionAgentOper#oper}
  */
  readonly oper?: DataThunderDdosDetectionAgentOperOper;
}
export interface DataThunderDdosDetectionAgentOperOperSamplerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#active_timeout DataThunderDdosDetectionAgentOper#active_timeout}
  */
  readonly activeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#inactive_timeout DataThunderDdosDetectionAgentOper#inactive_timeout}
  */
  readonly inactiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#sample_mode DataThunderDdosDetectionAgentOper#sample_mode}
  */
  readonly sampleMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#sampler_id DataThunderDdosDetectionAgentOper#sampler_id}
  */
  readonly samplerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#sampling_algorithm DataThunderDdosDetectionAgentOper#sampling_algorithm}
  */
  readonly samplingAlgorithm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#sampling_rate DataThunderDdosDetectionAgentOper#sampling_rate}
  */
  readonly samplingRate?: number;
}

export function dataThunderDdosDetectionAgentOperOperSamplerListStructToTerraform(struct?: DataThunderDdosDetectionAgentOperOperSamplerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_timeout: cdktf.numberToTerraform(struct!.activeTimeout),
    inactive_timeout: cdktf.numberToTerraform(struct!.inactiveTimeout),
    sample_mode: cdktf.numberToTerraform(struct!.sampleMode),
    sampler_id: cdktf.numberToTerraform(struct!.samplerId),
    sampling_algorithm: cdktf.numberToTerraform(struct!.samplingAlgorithm),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}


export function dataThunderDdosDetectionAgentOperOperSamplerListStructToHclTerraform(struct?: DataThunderDdosDetectionAgentOperOperSamplerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.activeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.inactiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_mode: {
      value: cdktf.numberToHclTerraform(struct!.sampleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampler_id: {
      value: cdktf.numberToHclTerraform(struct!.samplerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_algorithm: {
      value: cdktf.numberToHclTerraform(struct!.samplingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionAgentOperOperSamplerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDetectionAgentOperOperSamplerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimeout = this._activeTimeout;
    }
    if (this._inactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveTimeout = this._inactiveTimeout;
    }
    if (this._sampleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleMode = this._sampleMode;
    }
    if (this._samplerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerId = this._samplerId;
    }
    if (this._samplingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAlgorithm = this._samplingAlgorithm;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionAgentOperOperSamplerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTimeout = undefined;
      this._inactiveTimeout = undefined;
      this._sampleMode = undefined;
      this._samplerId = undefined;
      this._samplingAlgorithm = undefined;
      this._samplingRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTimeout = value.activeTimeout;
      this._inactiveTimeout = value.inactiveTimeout;
      this._sampleMode = value.sampleMode;
      this._samplerId = value.samplerId;
      this._samplingAlgorithm = value.samplingAlgorithm;
      this._samplingRate = value.samplingRate;
    }
  }

  // active_timeout - computed: false, optional: true, required: false
  private _activeTimeout?: number; 
  public get activeTimeout() {
    return this.getNumberAttribute('active_timeout');
  }
  public set activeTimeout(value: number) {
    this._activeTimeout = value;
  }
  public resetActiveTimeout() {
    this._activeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeoutInput() {
    return this._activeTimeout;
  }

  // inactive_timeout - computed: false, optional: true, required: false
  private _inactiveTimeout?: number; 
  public get inactiveTimeout() {
    return this.getNumberAttribute('inactive_timeout');
  }
  public set inactiveTimeout(value: number) {
    this._inactiveTimeout = value;
  }
  public resetInactiveTimeout() {
    this._inactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveTimeoutInput() {
    return this._inactiveTimeout;
  }

  // sample_mode - computed: false, optional: true, required: false
  private _sampleMode?: number; 
  public get sampleMode() {
    return this.getNumberAttribute('sample_mode');
  }
  public set sampleMode(value: number) {
    this._sampleMode = value;
  }
  public resetSampleMode() {
    this._sampleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleModeInput() {
    return this._sampleMode;
  }

  // sampler_id - computed: false, optional: true, required: false
  private _samplerId?: number; 
  public get samplerId() {
    return this.getNumberAttribute('sampler_id');
  }
  public set samplerId(value: number) {
    this._samplerId = value;
  }
  public resetSamplerId() {
    this._samplerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerIdInput() {
    return this._samplerId;
  }

  // sampling_algorithm - computed: false, optional: true, required: false
  private _samplingAlgorithm?: number; 
  public get samplingAlgorithm() {
    return this.getNumberAttribute('sampling_algorithm');
  }
  public set samplingAlgorithm(value: number) {
    this._samplingAlgorithm = value;
  }
  public resetSamplingAlgorithm() {
    this._samplingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAlgorithmInput() {
    return this._samplingAlgorithm;
  }

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}

export class DataThunderDdosDetectionAgentOperOperSamplerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDetectionAgentOperOperSamplerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDetectionAgentOperOperSamplerListStructOutputReference {
    return new DataThunderDdosDetectionAgentOperOperSamplerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDetectionAgentOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#brand DataThunderDdosDetectionAgentOper#brand}
  */
  readonly brand?: string;
  /**
  * sampler_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#sampler_list DataThunderDdosDetectionAgentOper#sampler_list}
  */
  readonly samplerList?: DataThunderDdosDetectionAgentOperOperSamplerListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDetectionAgentOperOperToTerraform(struct?: DataThunderDdosDetectionAgentOperOperOutputReference | DataThunderDdosDetectionAgentOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brand: cdktf.stringToTerraform(struct!.brand),
    sampler_list: cdktf.listMapper(dataThunderDdosDetectionAgentOperOperSamplerListStructToTerraform, true)(struct!.samplerList),
  }
}


export function dataThunderDdosDetectionAgentOperOperToHclTerraform(struct?: DataThunderDdosDetectionAgentOperOperOutputReference | DataThunderDdosDetectionAgentOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brand: {
      value: cdktf.stringToHclTerraform(struct!.brand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDetectionAgentOperOperSamplerListStructToHclTerraform, true)(struct!.samplerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDetectionAgentOperOperSamplerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionAgentOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDetectionAgentOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brand !== undefined) {
      hasAnyValues = true;
      internalValueResult.brand = this._brand;
    }
    if (this._samplerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerList = this._samplerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionAgentOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brand = undefined;
      this._samplerList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brand = value.brand;
      this._samplerList.internalValue = value.samplerList;
    }
  }

  // brand - computed: false, optional: true, required: false
  private _brand?: string; 
  public get brand() {
    return this.getStringAttribute('brand');
  }
  public set brand(value: string) {
    this._brand = value;
  }
  public resetBrand() {
    this._brand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandInput() {
    return this._brand;
  }

  // sampler_list - computed: false, optional: true, required: false
  private _samplerList = new DataThunderDdosDetectionAgentOperOperSamplerListStructList(this, "sampler_list", false);
  public get samplerList() {
    return this._samplerList;
  }
  public putSamplerList(value: DataThunderDdosDetectionAgentOperOperSamplerListStruct[] | cdktf.IResolvable) {
    this._samplerList.internalValue = value;
  }
  public resetSamplerList() {
    this._samplerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerListInput() {
    return this._samplerList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper thunder_ddos_detection_agent_oper}
*/
export class DataThunderDdosDetectionAgentOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_agent_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDetectionAgentOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDetectionAgentOper to import
  * @param importFromId The id of the existing DataThunderDdosDetectionAgentOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDetectionAgentOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_agent_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_detection_agent_oper thunder_ddos_detection_agent_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDetectionAgentOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDetectionAgentOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_agent_oper',
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
    this._agentName = config.agentName;
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_name - computed: false, optional: false, required: true
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDetectionAgentOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDetectionAgentOperOper) {
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
      agent_name: cdktf.stringToTerraform(this._agentName),
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDdosDetectionAgentOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_name: {
        value: cdktf.stringToHclTerraform(this._agentName),
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
      oper: {
        value: dataThunderDdosDetectionAgentOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDetectionAgentOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
