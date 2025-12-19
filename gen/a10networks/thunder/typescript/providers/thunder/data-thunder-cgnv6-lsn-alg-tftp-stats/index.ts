// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_tftp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnAlgTftpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_tftp_stats#id DataThunderCgnv6LsnAlgTftpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_tftp_stats#stats DataThunderCgnv6LsnAlgTftpStats#stats}
  */
  readonly stats?: DataThunderCgnv6LsnAlgTftpStatsStats;
}
export interface DataThunderCgnv6LsnAlgTftpStatsStats {
  /**
  * TFTP Client Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_tftp_stats#session_created DataThunderCgnv6LsnAlgTftpStats#session_created}
  */
  readonly sessionCreated?: number;
}

export function dataThunderCgnv6LsnAlgTftpStatsStatsToTerraform(struct?: DataThunderCgnv6LsnAlgTftpStatsStatsOutputReference | DataThunderCgnv6LsnAlgTftpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_created: cdktf.numberToTerraform(struct!.sessionCreated),
  }
}


export function dataThunderCgnv6LsnAlgTftpStatsStatsToHclTerraform(struct?: DataThunderCgnv6LsnAlgTftpStatsStatsOutputReference | DataThunderCgnv6LsnAlgTftpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_created: {
      value: cdktf.numberToHclTerraform(struct!.sessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnAlgTftpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnAlgTftpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCreated = this._sessionCreated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnAlgTftpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionCreated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionCreated = value.sessionCreated;
    }
  }

  // session_created - computed: false, optional: true, required: false
  private _sessionCreated?: number; 
  public get sessionCreated() {
    return this.getNumberAttribute('session_created');
  }
  public set sessionCreated(value: number) {
    this._sessionCreated = value;
  }
  public resetSessionCreated() {
    this._sessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCreatedInput() {
    return this._sessionCreated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_tftp_stats thunder_cgnv6_lsn_alg_tftp_stats}
*/
export class DataThunderCgnv6LsnAlgTftpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_tftp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnAlgTftpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnAlgTftpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnAlgTftpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_tftp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnAlgTftpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_tftp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_tftp_stats thunder_cgnv6_lsn_alg_tftp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnAlgTftpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnAlgTftpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_tftp_stats',
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
  private _stats = new DataThunderCgnv6LsnAlgTftpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LsnAlgTftpStatsStats) {
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
      stats: dataThunderCgnv6LsnAlgTftpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6LsnAlgTftpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnAlgTftpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
