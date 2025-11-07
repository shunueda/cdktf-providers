// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSecureGamingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats#id DataThunderSlbSecureGamingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats#stats DataThunderSlbSecureGamingStats#stats}
  */
  readonly stats?: DataThunderSlbSecureGamingStatsStats;
}
export interface DataThunderSlbSecureGamingStatsStats {
  /**
  * Secure Gaming dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats#secure_gaming_drop DataThunderSlbSecureGamingStats#secure_gaming_drop}
  */
  readonly secureGamingDrop?: number;
  /**
  * Secure Gaming passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats#secure_gaming_pass DataThunderSlbSecureGamingStats#secure_gaming_pass}
  */
  readonly secureGamingPass?: number;
}

export function dataThunderSlbSecureGamingStatsStatsToTerraform(struct?: DataThunderSlbSecureGamingStatsStatsOutputReference | DataThunderSlbSecureGamingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secure_gaming_drop: cdktf.numberToTerraform(struct!.secureGamingDrop),
    secure_gaming_pass: cdktf.numberToTerraform(struct!.secureGamingPass),
  }
}


export function dataThunderSlbSecureGamingStatsStatsToHclTerraform(struct?: DataThunderSlbSecureGamingStatsStatsOutputReference | DataThunderSlbSecureGamingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secure_gaming_drop: {
      value: cdktf.numberToHclTerraform(struct!.secureGamingDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_gaming_pass: {
      value: cdktf.numberToHclTerraform(struct!.secureGamingPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSecureGamingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSecureGamingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secureGamingDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureGamingDrop = this._secureGamingDrop;
    }
    if (this._secureGamingPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureGamingPass = this._secureGamingPass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSecureGamingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secureGamingDrop = undefined;
      this._secureGamingPass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secureGamingDrop = value.secureGamingDrop;
      this._secureGamingPass = value.secureGamingPass;
    }
  }

  // secure_gaming_drop - computed: false, optional: true, required: false
  private _secureGamingDrop?: number; 
  public get secureGamingDrop() {
    return this.getNumberAttribute('secure_gaming_drop');
  }
  public set secureGamingDrop(value: number) {
    this._secureGamingDrop = value;
  }
  public resetSecureGamingDrop() {
    this._secureGamingDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureGamingDropInput() {
    return this._secureGamingDrop;
  }

  // secure_gaming_pass - computed: false, optional: true, required: false
  private _secureGamingPass?: number; 
  public get secureGamingPass() {
    return this.getNumberAttribute('secure_gaming_pass');
  }
  public set secureGamingPass(value: number) {
    this._secureGamingPass = value;
  }
  public resetSecureGamingPass() {
    this._secureGamingPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureGamingPassInput() {
    return this._secureGamingPass;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats thunder_slb_secure_gaming_stats}
*/
export class DataThunderSlbSecureGamingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_secure_gaming_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSecureGamingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSecureGamingStats to import
  * @param importFromId The id of the existing DataThunderSlbSecureGamingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSecureGamingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_secure_gaming_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_secure_gaming_stats thunder_slb_secure_gaming_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSecureGamingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSecureGamingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_secure_gaming_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbSecureGamingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbSecureGamingStatsStats) {
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
      stats: dataThunderSlbSecureGamingStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbSecureGamingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSecureGamingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
