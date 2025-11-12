// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFmcNetworkAnalysisPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the network analysis policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy#name DataFmcNetworkAnalysisPolicy#name}
  */
  readonly name: string;
  /**
  * Snort engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy#snort_engine DataFmcNetworkAnalysisPolicy#snort_engine}
  */
  readonly snortEngine?: string;
  /**
  * base_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy#base_policy DataFmcNetworkAnalysisPolicy#base_policy}
  */
  readonly basePolicy?: DataFmcNetworkAnalysisPolicyBasePolicy;
}
export interface DataFmcNetworkAnalysisPolicyBasePolicy {
  /**
  * Name of base policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy#name DataFmcNetworkAnalysisPolicy#name}
  */
  readonly name: string;
  /**
  * Type of base policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy#type DataFmcNetworkAnalysisPolicy#type}
  */
  readonly type?: string;
}

export function dataFmcNetworkAnalysisPolicyBasePolicyToTerraform(struct?: DataFmcNetworkAnalysisPolicyBasePolicyOutputReference | DataFmcNetworkAnalysisPolicyBasePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataFmcNetworkAnalysisPolicyBasePolicyToHclTerraform(struct?: DataFmcNetworkAnalysisPolicyBasePolicyOutputReference | DataFmcNetworkAnalysisPolicyBasePolicy): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFmcNetworkAnalysisPolicyBasePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFmcNetworkAnalysisPolicyBasePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFmcNetworkAnalysisPolicyBasePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy fmc_network_analysis_policy}
*/
export class DataFmcNetworkAnalysisPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_network_analysis_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFmcNetworkAnalysisPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFmcNetworkAnalysisPolicy to import
  * @param importFromId The id of the existing DataFmcNetworkAnalysisPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFmcNetworkAnalysisPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_network_analysis_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/network_analysis_policy fmc_network_analysis_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFmcNetworkAnalysisPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataFmcNetworkAnalysisPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_network_analysis_policy',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._snortEngine = config.snortEngine;
    this._basePolicy.internalValue = config.basePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // snort_engine - computed: false, optional: true, required: false
  private _snortEngine?: string; 
  public get snortEngine() {
    return this.getStringAttribute('snort_engine');
  }
  public set snortEngine(value: string) {
    this._snortEngine = value;
  }
  public resetSnortEngine() {
    this._snortEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snortEngineInput() {
    return this._snortEngine;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // base_policy - computed: false, optional: true, required: false
  private _basePolicy = new DataFmcNetworkAnalysisPolicyBasePolicyOutputReference(this, "base_policy");
  public get basePolicy() {
    return this._basePolicy;
  }
  public putBasePolicy(value: DataFmcNetworkAnalysisPolicyBasePolicy) {
    this._basePolicy.internalValue = value;
  }
  public resetBasePolicy() {
    this._basePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePolicyInput() {
    return this._basePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      snort_engine: cdktf.stringToTerraform(this._snortEngine),
      base_policy: dataFmcNetworkAnalysisPolicyBasePolicyToTerraform(this._basePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snort_engine: {
        value: cdktf.stringToHclTerraform(this._snortEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_policy: {
        value: dataFmcNetworkAnalysisPolicyBasePolicyToHclTerraform(this._basePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFmcNetworkAnalysisPolicyBasePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
