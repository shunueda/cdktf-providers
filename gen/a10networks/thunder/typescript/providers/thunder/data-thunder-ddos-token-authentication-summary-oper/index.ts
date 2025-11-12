// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_summary_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosTokenAuthenticationSummaryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_summary_oper#id DataThunderDdosTokenAuthenticationSummaryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_summary_oper#oper DataThunderDdosTokenAuthenticationSummaryOper#oper}
  */
  readonly oper?: DataThunderDdosTokenAuthenticationSummaryOperOper;
}
export interface DataThunderDdosTokenAuthenticationSummaryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_summary_oper#player_mode DataThunderDdosTokenAuthenticationSummaryOper#player_mode}
  */
  readonly playerMode?: string;
}

export function dataThunderDdosTokenAuthenticationSummaryOperOperToTerraform(struct?: DataThunderDdosTokenAuthenticationSummaryOperOperOutputReference | DataThunderDdosTokenAuthenticationSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    player_mode: cdktf.stringToTerraform(struct!.playerMode),
  }
}


export function dataThunderDdosTokenAuthenticationSummaryOperOperToHclTerraform(struct?: DataThunderDdosTokenAuthenticationSummaryOperOperOutputReference | DataThunderDdosTokenAuthenticationSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    player_mode: {
      value: cdktf.stringToHclTerraform(struct!.playerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosTokenAuthenticationSummaryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosTokenAuthenticationSummaryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.playerMode = this._playerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosTokenAuthenticationSummaryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._playerMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._playerMode = value.playerMode;
    }
  }

  // player_mode - computed: false, optional: true, required: false
  private _playerMode?: string; 
  public get playerMode() {
    return this.getStringAttribute('player_mode');
  }
  public set playerMode(value: string) {
    this._playerMode = value;
  }
  public resetPlayerMode() {
    this._playerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerModeInput() {
    return this._playerMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_summary_oper thunder_ddos_token_authentication_summary_oper}
*/
export class DataThunderDdosTokenAuthenticationSummaryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_token_authentication_summary_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosTokenAuthenticationSummaryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosTokenAuthenticationSummaryOper to import
  * @param importFromId The id of the existing DataThunderDdosTokenAuthenticationSummaryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_summary_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosTokenAuthenticationSummaryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_token_authentication_summary_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_token_authentication_summary_oper thunder_ddos_token_authentication_summary_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosTokenAuthenticationSummaryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosTokenAuthenticationSummaryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_token_authentication_summary_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderDdosTokenAuthenticationSummaryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosTokenAuthenticationSummaryOperOper) {
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
      oper: dataThunderDdosTokenAuthenticationSummaryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosTokenAuthenticationSummaryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosTokenAuthenticationSummaryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
