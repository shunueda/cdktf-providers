// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosTokenAuthStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats#id DataThunderDdosTokenAuthStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats#stats DataThunderDdosTokenAuthStats#stats}
  */
  readonly stats?: DataThunderDdosTokenAuthStatsStats;
}
export interface DataThunderDdosTokenAuthStatsStats {
  /**
  * Token Authentication Invalid Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats#token_authentication_invalid DataThunderDdosTokenAuthStats#token_authentication_invalid}
  */
  readonly tokenAuthenticationInvalid?: number;
  /**
  * Token Authentication Matched Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats#token_authentication_matched DataThunderDdosTokenAuthStats#token_authentication_matched}
  */
  readonly tokenAuthenticationMatched?: number;
  /**
  * Token Authentication Mismatched Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats#token_authentication_mismatched DataThunderDdosTokenAuthStats#token_authentication_mismatched}
  */
  readonly tokenAuthenticationMismatched?: number;
}

export function dataThunderDdosTokenAuthStatsStatsToTerraform(struct?: DataThunderDdosTokenAuthStatsStatsOutputReference | DataThunderDdosTokenAuthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_authentication_invalid: cdktf.numberToTerraform(struct!.tokenAuthenticationInvalid),
    token_authentication_matched: cdktf.numberToTerraform(struct!.tokenAuthenticationMatched),
    token_authentication_mismatched: cdktf.numberToTerraform(struct!.tokenAuthenticationMismatched),
  }
}


export function dataThunderDdosTokenAuthStatsStatsToHclTerraform(struct?: DataThunderDdosTokenAuthStatsStatsOutputReference | DataThunderDdosTokenAuthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_authentication_invalid: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_matched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_mismatched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationMismatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosTokenAuthStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosTokenAuthStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenAuthenticationInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationInvalid = this._tokenAuthenticationInvalid;
    }
    if (this._tokenAuthenticationMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationMatched = this._tokenAuthenticationMatched;
    }
    if (this._tokenAuthenticationMismatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationMismatched = this._tokenAuthenticationMismatched;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosTokenAuthStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenAuthenticationInvalid = undefined;
      this._tokenAuthenticationMatched = undefined;
      this._tokenAuthenticationMismatched = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenAuthenticationInvalid = value.tokenAuthenticationInvalid;
      this._tokenAuthenticationMatched = value.tokenAuthenticationMatched;
      this._tokenAuthenticationMismatched = value.tokenAuthenticationMismatched;
    }
  }

  // token_authentication_invalid - computed: false, optional: true, required: false
  private _tokenAuthenticationInvalid?: number; 
  public get tokenAuthenticationInvalid() {
    return this.getNumberAttribute('token_authentication_invalid');
  }
  public set tokenAuthenticationInvalid(value: number) {
    this._tokenAuthenticationInvalid = value;
  }
  public resetTokenAuthenticationInvalid() {
    this._tokenAuthenticationInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationInvalidInput() {
    return this._tokenAuthenticationInvalid;
  }

  // token_authentication_matched - computed: false, optional: true, required: false
  private _tokenAuthenticationMatched?: number; 
  public get tokenAuthenticationMatched() {
    return this.getNumberAttribute('token_authentication_matched');
  }
  public set tokenAuthenticationMatched(value: number) {
    this._tokenAuthenticationMatched = value;
  }
  public resetTokenAuthenticationMatched() {
    this._tokenAuthenticationMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationMatchedInput() {
    return this._tokenAuthenticationMatched;
  }

  // token_authentication_mismatched - computed: false, optional: true, required: false
  private _tokenAuthenticationMismatched?: number; 
  public get tokenAuthenticationMismatched() {
    return this.getNumberAttribute('token_authentication_mismatched');
  }
  public set tokenAuthenticationMismatched(value: number) {
    this._tokenAuthenticationMismatched = value;
  }
  public resetTokenAuthenticationMismatched() {
    this._tokenAuthenticationMismatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationMismatchedInput() {
    return this._tokenAuthenticationMismatched;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats thunder_ddos_token_auth_stats}
*/
export class DataThunderDdosTokenAuthStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_token_auth_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosTokenAuthStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosTokenAuthStats to import
  * @param importFromId The id of the existing DataThunderDdosTokenAuthStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosTokenAuthStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_token_auth_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_auth_stats thunder_ddos_token_auth_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosTokenAuthStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosTokenAuthStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_token_auth_stats',
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
  private _stats = new DataThunderDdosTokenAuthStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosTokenAuthStatsStats) {
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
      stats: dataThunderDdosTokenAuthStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosTokenAuthStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosTokenAuthStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
