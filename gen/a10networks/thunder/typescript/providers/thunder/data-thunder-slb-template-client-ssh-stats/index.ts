// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTemplateClientSshStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats#id DataThunderSlbTemplateClientSshStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Client SSH Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats#name DataThunderSlbTemplateClientSshStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats#stats DataThunderSlbTemplateClientSshStats#stats}
  */
  readonly stats?: DataThunderSlbTemplateClientSshStatsStats;
}
export interface DataThunderSlbTemplateClientSshStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats#failed_handshakes DataThunderSlbTemplateClientSshStats#failed_handshakes}
  */
  readonly failedHandshakes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats#forwarding_errors DataThunderSlbTemplateClientSshStats#forwarding_errors}
  */
  readonly forwardingErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats#successful_handshakes DataThunderSlbTemplateClientSshStats#successful_handshakes}
  */
  readonly successfulHandshakes?: number;
}

export function dataThunderSlbTemplateClientSshStatsStatsToTerraform(struct?: DataThunderSlbTemplateClientSshStatsStatsOutputReference | DataThunderSlbTemplateClientSshStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_handshakes: cdktf.numberToTerraform(struct!.failedHandshakes),
    forwarding_errors: cdktf.numberToTerraform(struct!.forwardingErrors),
    successful_handshakes: cdktf.numberToTerraform(struct!.successfulHandshakes),
  }
}


export function dataThunderSlbTemplateClientSshStatsStatsToHclTerraform(struct?: DataThunderSlbTemplateClientSshStatsStatsOutputReference | DataThunderSlbTemplateClientSshStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_handshakes: {
      value: cdktf.numberToHclTerraform(struct!.failedHandshakes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forwarding_errors: {
      value: cdktf.numberToHclTerraform(struct!.forwardingErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successful_handshakes: {
      value: cdktf.numberToHclTerraform(struct!.successfulHandshakes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplateClientSshStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTemplateClientSshStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedHandshakes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedHandshakes = this._failedHandshakes;
    }
    if (this._forwardingErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingErrors = this._forwardingErrors;
    }
    if (this._successfulHandshakes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulHandshakes = this._successfulHandshakes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplateClientSshStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failedHandshakes = undefined;
      this._forwardingErrors = undefined;
      this._successfulHandshakes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failedHandshakes = value.failedHandshakes;
      this._forwardingErrors = value.forwardingErrors;
      this._successfulHandshakes = value.successfulHandshakes;
    }
  }

  // failed_handshakes - computed: false, optional: true, required: false
  private _failedHandshakes?: number; 
  public get failedHandshakes() {
    return this.getNumberAttribute('failed_handshakes');
  }
  public set failedHandshakes(value: number) {
    this._failedHandshakes = value;
  }
  public resetFailedHandshakes() {
    this._failedHandshakes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedHandshakesInput() {
    return this._failedHandshakes;
  }

  // forwarding_errors - computed: false, optional: true, required: false
  private _forwardingErrors?: number; 
  public get forwardingErrors() {
    return this.getNumberAttribute('forwarding_errors');
  }
  public set forwardingErrors(value: number) {
    this._forwardingErrors = value;
  }
  public resetForwardingErrors() {
    this._forwardingErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingErrorsInput() {
    return this._forwardingErrors;
  }

  // successful_handshakes - computed: false, optional: true, required: false
  private _successfulHandshakes?: number; 
  public get successfulHandshakes() {
    return this.getNumberAttribute('successful_handshakes');
  }
  public set successfulHandshakes(value: number) {
    this._successfulHandshakes = value;
  }
  public resetSuccessfulHandshakes() {
    this._successfulHandshakes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulHandshakesInput() {
    return this._successfulHandshakes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats thunder_slb_template_client_ssh_stats}
*/
export class DataThunderSlbTemplateClientSshStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_client_ssh_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTemplateClientSshStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTemplateClientSshStats to import
  * @param importFromId The id of the existing DataThunderSlbTemplateClientSshStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTemplateClientSshStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_client_ssh_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_client_ssh_stats thunder_slb_template_client_ssh_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTemplateClientSshStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTemplateClientSshStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_client_ssh_stats',
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
    this._name = config.name;
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbTemplateClientSshStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbTemplateClientSshStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderSlbTemplateClientSshStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbTemplateClientSshStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTemplateClientSshStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
